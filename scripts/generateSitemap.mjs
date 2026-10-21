/**
 * Prepares the data that sitemap.php serves at the three sitemap URLs.
 *
 * Four things are written into public/ and shipped with the build:
 *
 *   sitemap-routes.json  the site's static routes, parsed straight out of
 *                        src/App.js — so adding or removing a page in the
 *                        router updates the sitemap with no second list to
 *                        maintain.
 *
 *   sitemap.xml          a sitemap index pointing at the two below.
 *   sitemap-pages.xml    the static pages.
 *   sitemap-posts.xml    the blog posts.
 *
 * The three .xml files are fully-rendered fallbacks. sitemap.php normally
 * serves all three URLs itself, with blog posts fetched live from Sanity;
 * these files are what gets served if PHP is ever unavailable, so each one
 * has to be valid on its own.
 *
 * Pages and posts are separate documents so Search Console reports indexing
 * for editorial content apart from the service pages. Blog URLs are NOT the
 * source of truth here — sitemap.php reads them from Sanity on request, so a
 * post published in the Studio appears in the sitemap immediately, without a
 * redeploy. They are baked in only so the fallback is not empty.
 *
 * Runs automatically via `prebuild`, or on demand: npm run sitemap
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(APP_ROOT, 'public');

const SITE_URL = 'https://karachilawfirms.pk';
const PROJECT_ID = process.env.REACT_APP_SANITY_PROJECT_ID || '91ufe034';
const DATASET = process.env.REACT_APP_SANITY_DATASET || 'production';

/**
 * Paths that exist as routes but must never be indexed.
 *
 * /thank-you confirms a form submission and is noindex. Listing it would
 * invite Google to crawl a page that turns every visitor away, and a
 * confirmation page in the results is a meaningless place to land.
 */
const EXCLUDED = new Set(['/studio', '/thank-you']);

/** Per-path overrides; anything unlisted falls back to the rules below. */
const PRIORITY = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/service': { changefreq: 'weekly', priority: '0.9' },
  '/blog': { changefreq: 'weekly', priority: '0.8' },
  '/about': { changefreq: 'monthly', priority: '0.7' },
  '/team': { changefreq: 'monthly', priority: '0.7' },
  '/privacy-policy': { changefreq: 'yearly', priority: '0.3' },
  '/terms': { changefreq: 'yearly', priority: '0.3' },
};

/**
 * Pull indexable routes out of the router.
 *
 * Skipped: parameterised routes (:slug — those come from the CMS), redirect
 * routes (<Navigate>, which point at a canonical URL elsewhere), and anything
 * in EXCLUDED.
 */
function readRoutesFromApp() {
  const source = fs.readFileSync(path.join(APP_ROOT, 'src', 'App.js'), 'utf8');
  const paths = new Set(['/']);

  // <Route path="..." element={<Something ... />} />, across line breaks.
  const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<\s*(\w+)/g;
  for (const match of source.matchAll(routeRe)) {
    const [, routePath, component] = match;
    if (routePath.includes(':')) continue;
    if (component === 'Navigate') continue;
    if (EXCLUDED.has(routePath)) continue;
    if (!routePath.startsWith('/')) continue;
    paths.add(routePath);
  }

  return [...paths].map((loc) => {
    if (PRIORITY[loc]) return { loc, ...PRIORITY[loc] };
    if (loc.startsWith('/service/')) {
      return { loc, changefreq: 'monthly', priority: '0.8' };
    }
    return { loc, changefreq: 'monthly', priority: '0.6' };
  });
}

/** Blog entries, used only for the static fallback file. */
async function getBlogEntries() {
  const query = encodeURIComponent(
    '*[_type == "post" && defined(slug.current) && publishedAt <= now()]{"slug": slug.current, publishedAt, updatedAt}',
  );
  const url = `https://${PROJECT_ID}.apicdn.sanity.io/v2024-10-01/data/query/${DATASET}?query=${query}`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const { result } = await response.json();
    if (Array.isArray(result) && result.length > 0) {
      console.log(`[sitemap] ${result.length} posts from Sanity (for fallback file)`);
      return result.map((post) => ({
        slug: post.slug,
        lastmod: (post.updatedAt || post.publishedAt || '').slice(0, 10),
      }));
    }
  } catch (error) {
    console.log(`[sitemap] Sanity unavailable (${error.message}); using bundled posts`);
  }

  const bundled = JSON.parse(
    fs.readFileSync(path.join(APP_ROOT, 'src', 'data', 'blogPosts.json'), 'utf8'),
  );
  return bundled.map((post) => ({
    slug: post.slug,
    lastmod: (post.publishedAt || '').slice(0, 10),
  }));
}

function urlEntry({ loc, changefreq, priority, lastmod }) {
  return [
    '  <url>',
    `    <loc>${SITE_URL}${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}

function sitemapEntry({ loc, lastmod }) {
  return [
    '  <sitemap>',
    `    <loc>${SITE_URL}${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    '  </sitemap>',
  ]
    .filter(Boolean)
    .join('\n');
}

/** Wrap url entries in a urlset document. */
function urlsetDoc(entries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(urlEntry),
    '</urlset>',
    '',
  ].join('\n');
}

/** Wrap child sitemaps in a sitemapindex document. */
function sitemapIndexDoc(children) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...children.map(sitemapEntry),
    '</sitemapindex>',
    '',
  ].join('\n');
}

function write(name, contents) {
  fs.writeFileSync(path.join(PUBLIC_DIR, name), contents, 'utf8');
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);

  const routes = readRoutesFromApp();
  console.log(`[sitemap] ${routes.length} static routes parsed from src/App.js`);

  // 1. Route data for sitemap.php
  write(
    'sitemap-routes.json',
    JSON.stringify({ siteUrl: SITE_URL, routes }, null, 2) + '\n',
  );

  // 2. Pages fallback — no CMS involved, so this one is always complete.
  write('sitemap-pages.xml', urlsetDoc(routes));

  // 3. Posts fallback
  const blogEntries = await getBlogEntries();
  const postUrls = blogEntries.map((post) => ({
    loc: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: post.lastmod || undefined,
  }));
  write('sitemap-posts.xml', urlsetDoc(postUrls));

  // 4. The index fallback. lastmod for posts is the newest post we know of.
  const newestPost = blogEntries
    .map((post) => post.lastmod)
    .filter(Boolean)
    .sort()
    .pop();

  write(
    'sitemap.xml',
    sitemapIndexDoc([
      { loc: '/sitemap-pages.xml', lastmod: today },
      { loc: '/sitemap-posts.xml', lastmod: newestPost || today },
    ]),
  );

  console.log(
    `[sitemap] wrote sitemap-routes.json, a sitemap index, ` +
      `${routes.length} pages and ${postUrls.length} posts`,
  );
}

main().catch((error) => {
  // Never break the build over a sitemap.
  console.warn('[sitemap] generation failed, keeping existing files:', error.message);
});
