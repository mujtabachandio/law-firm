/**
 * One-off migration: pushes the five hard-coded blog posts into Sanity.
 *
 * Reads the shared fallback file (src/data/blogPosts.json) that the React app
 * also uses, converts each post's HTML body into Portable Text, uploads every
 * referenced image as a real Sanity asset, and writes one `post` document per
 * entry.
 *
 * The script is idempotent: documents use a deterministic _id (post-<slug>) and
 * images are looked up by their original filename before being re-uploaded, so
 * running it twice will not create duplicates.
 *
 * Usage:
 *   node scripts/migrateBlogPosts.js --dry-run     # convert only, write JSON to ./migration-preview.json
 *   SANITY_WRITE_TOKEN=sk... node scripts/migrateBlogPosts.js
 */

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createClient} from '@sanity/client'
import {Schema} from '@sanity/schema'
import {htmlToBlocks, randomKey} from '@portabletext/block-tools'
import {JSDOM} from 'jsdom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const STUDIO_ROOT = path.resolve(__dirname, '..')
const APP_ROOT = path.resolve(STUDIO_ROOT, '..')
const DATA_FILE = path.join(APP_ROOT, 'src', 'data', 'blogPosts.json')
const PUBLIC_DIR = path.join(APP_ROOT, 'public')

const PROJECT_ID = '91ufe034'
const DATASET = 'production'
const API_VERSION = '2024-10-01'

const DRY_RUN = process.argv.includes('--dry-run')

/* ------------------------------------------------------------------ *
 * Schema used purely to tell the HTML deserializer what it may emit.
 * Mirrors studio/schemaTypes/blockContent.js. Declared inline so this
 * script never has to import the browser-oriented `sanity` package.
 * ------------------------------------------------------------------ */
const compiledSchema = Schema.compile({
  name: 'migration',
  types: [
    {
      name: 'post',
      type: 'document',
      fields: [
        {
          name: 'body',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Paragraph', value: 'normal'},
                {title: 'Heading 2', value: 'h2'},
                {title: 'Heading 3', value: 'h3'},
                {title: 'Heading 4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
              ],
              lists: [
                {title: 'Bulleted', value: 'bullet'},
                {title: 'Numbered', value: 'number'},
              ],
              marks: {
                decorators: [
                  {title: 'Bold', value: 'strong'},
                  {title: 'Italic', value: 'em'},
                  {title: 'Underline', value: 'underline'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    fields: [
                      {name: 'href', type: 'url'},
                      {name: 'newTab', type: 'boolean'},
                      {name: 'noFollow', type: 'boolean'},
                    ],
                  },
                  {
                    name: 'internalLink',
                    type: 'object',
                    fields: [{name: 'path', type: 'string'}],
                  },
                ],
              },
            },
            // NOTE: no `image` member here. Images are emitted by the custom
            // deserializer rule below via createBlock(), which bypasses schema
            // validation — and declaring `image` would drag in Sanity's
            // built-in sanity.imageHotspot/imageCrop types, which @sanity/schema
            // does not register on its own.
          ],
        },
      ],
    },
  ],
})

const blockContentType = compiledSchema
  .get('post')
  .fields.find((field) => field.name === 'body').type

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

/** Collect every image src referenced by a post (main image + inline images). */
function collectImageSources(posts) {
  const sources = new Set()
  for (const post of posts) {
    if (post.mainImage) sources.add(post.mainImage)
    const matches = post.contentHtml.matchAll(/<img[^>]+src="([^"]+)"/gi)
    for (const match of matches) sources.add(match[1])
  }
  return [...sources]
}

/** Resolve a public-relative src (possibly percent-encoded) to a file on disk. */
function resolveLocalImage(src) {
  const decoded = decodeURIComponent(src)
  const filePath = path.join(PUBLIC_DIR, decoded.replace(/^\//, ''))
  if (!fs.existsSync(filePath)) {
    throw new Error(`Image not found on disk: ${src} (looked in ${filePath})`)
  }
  return filePath
}

/**
 * Upload an image, reusing an existing asset when one with the same original
 * filename is already in the dataset. Keeps the script safe to re-run.
 */
async function uploadImage(client, src) {
  const filePath = resolveLocalImage(src)
  const filename = path.basename(filePath)

  const existing = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id',
    {filename},
  )
  if (existing) {
    console.log(`  reuse  ${filename} -> ${existing}`)
    return existing
  }

  try {
    const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
      filename,
    })
    console.log(`  upload ${filename} -> ${asset._id}`)
    return asset._id
  } catch (error) {
    // A single unreadable source file should not block the whole migration.
    // The post still migrates; the image is reported at the end.
    console.warn(`  SKIP   ${filename} — Sanity rejected it (${error.message})`)
    return null
  }
}

/**
 * Convert one post's HTML body into Portable Text.
 * `assetMap` maps the original src string to an uploaded Sanity asset _id.
 */
function convertBody(html, assetMap) {
  const skippedImages = []

  const blocks = htmlToBlocks(html, blockContentType, {
    parseHtml: (htmlString) => new JSDOM(htmlString).window.document,
    rules: [
      {
        // <img> becomes a real image block referencing the uploaded asset.
        deserialize(el, _next, createBlock) {
          if (!el.tagName || el.tagName.toLowerCase() !== 'img') return undefined

          const src = el.getAttribute('src')
          const assetId = assetMap.get(src)
          if (!assetId) {
            skippedImages.push(src)
            return undefined
          }

          return createBlock({
            _type: 'image',
            asset: {_type: 'reference', _ref: assetId},
            alt: el.getAttribute('alt') || '',
          })
        },
      },
      {
        // <a> becomes either an internal link or an external link annotation.
        deserialize(el, next) {
          if (!el.tagName || el.tagName.toLowerCase() !== 'a') return undefined

          const href = el.getAttribute('href') || ''
          const isInternal = href.startsWith('/')

          return {
            _type: '__annotation',
            markDef: isInternal
              ? {_type: 'internalLink', _key: randomKey(12), path: href}
              : {
                  _type: 'link',
                  _key: randomKey(12),
                  href,
                  newTab: true,
                  noFollow: false,
                },
            children: next(el.childNodes),
          }
        },
      },
    ],
  })

  return {blocks, skippedImages}
}

/** Give every block and child a stable _key (Sanity requires them). */
function ensureKeys(blocks) {
  return blocks.map((block) => {
    const withKey = {...block, _key: block._key || randomKey(12)}
    if (Array.isArray(withKey.children)) {
      withKey.children = withKey.children.map((child) => ({
        ...child,
        _key: child._key || randomKey(12),
      }))
    }
    if (Array.isArray(withKey.markDefs)) {
      withKey.markDefs = withKey.markDefs.map((def) => ({
        ...def,
        _key: def._key || randomKey(12),
      }))
    }
    return withKey
  })
}

/** Derive a category from the slug so posts are not untagged after migration. */
function guessCategories(slug) {
  if (slug.includes('family')) return ['family-law']
  if (slug.includes('criminal')) return ['criminal-law']
  if (slug.includes('corporate')) return ['corporate-law']
  return ['guides']
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */
async function main() {
  const posts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  console.log(`Loaded ${posts.length} posts from ${path.relative(APP_ROOT, DATA_FILE)}\n`)

  const token = process.env.SANITY_WRITE_TOKEN
  if (!DRY_RUN && !token) {
    console.error(
      'Missing SANITY_WRITE_TOKEN.\n\n' +
        'Create an Editor token at\n' +
        `  https://www.sanity.io/manage/project/${PROJECT_ID}/api#tokens\n\n` +
        'then run:\n' +
        '  SANITY_WRITE_TOKEN=sk... npm run migrate:blog\n\n' +
        'Or preview the conversion without writing anything:\n' +
        '  npm run migrate:blog:dry',
    )
    process.exit(1)
  }

  const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: API_VERSION,
    token,
    useCdn: false,
  })

  // 1. Upload every referenced image up front, so the (synchronous) HTML
  //    deserializer can look asset ids up from a map.
  const sources = collectImageSources(posts)
  const assetMap = new Map()

  if (DRY_RUN) {
    console.log(`Dry run: skipping upload of ${sources.length} images.\n`)
    sources.forEach((src, i) => assetMap.set(src, `image-DRYRUN${String(i).padStart(3, '0')}`))
  } else {
    console.log(`Uploading ${sources.length} images...`)
    for (const src of sources) {
      const assetId = await uploadImage(client, src)
      if (assetId) assetMap.set(src, assetId)
    }
    console.log('')
  }

  const failedImages = sources.filter((src) => !assetMap.has(src))

  // 2. Convert and build the documents.
  const documents = []
  for (const post of posts) {
    const {blocks, skippedImages} = convertBody(post.contentHtml, assetMap)
    const body = ensureKeys(blocks)

    if (skippedImages.length) {
      console.warn(`  ! ${post.slug}: could not resolve images ${skippedImages.join(', ')}`)
    }

    const textBlocks = body.filter((b) => b._type === 'block').length
    const imageBlocks = body.filter((b) => b._type === 'image').length
    console.log(
      `  ${post.slug}: ${textBlocks} text blocks, ${imageBlocks} image blocks`,
    )

    const mainImageAsset = assetMap.get(post.mainImage)
    if (!mainImageAsset) {
      throw new Error(
        `Main image for "${post.slug}" (${post.mainImage}) could not be uploaded. ` +
          'mainImage is a required field — replace the source file and re-run.',
      )
    }

    documents.push({
      _id: `post-${post.slug}`,
      _type: 'post',
      title: post.title,
      slug: {_type: 'slug', current: post.slug},
      excerpt: post.excerpt,
      mainImage: {
        _type: 'image',
        asset: {_type: 'reference', _ref: mainImageAsset},
        alt: post.imageAlt,
      },
      author: {name: post.author},
      publishedAt: post.publishedAt,
      body,
      categories: guessCategories(post.slug),
      featured: false,
      seo: {
        _type: 'seo',
        metaTitle: post.seo.metaTitle,
        metaDescription: post.seo.metaDescription,
        canonicalUrl: post.seo.canonicalUrl,
        noIndex: false,
      },
    })
  }

  // 3. Write.
  if (DRY_RUN) {
    const out = path.join(STUDIO_ROOT, 'migration-preview.json')
    fs.writeFileSync(out, JSON.stringify(documents, null, 2), 'utf8')
    console.log(`\nDry run complete. Preview written to ${path.relative(APP_ROOT, out)}`)
    console.log('Nothing was sent to Sanity.')
    return
  }

  console.log('\nWriting documents...')
  const tx = client.transaction()
  documents.forEach((doc) => tx.createOrReplace(doc))
  await tx.commit()

  documents.forEach((doc) => console.log(`  ok  ${doc._id}`))

  if (failedImages.length) {
    console.warn('\nImages that could not be uploaded (the posts migrated without them):')
    failedImages.forEach((src) => console.warn(`  - ${src}`))
    console.warn('Replace these source files and re-run to attach them.')
  }
  console.log(`\nMigrated ${documents.length} posts into ${PROJECT_ID}/${DATASET}.`)
  console.log('Open the Studio with `npm run dev` to review them.')
}

main().catch((err) => {
  console.error('\nMigration failed:', err.message)
  if (err.statusCode === 401 || err.statusCode === 403) {
    console.error('The token was rejected. It needs Editor (write) permission.')
  }
  process.exit(1)
})
