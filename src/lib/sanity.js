import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import fallbackPosts from '../data/blogPosts.json';

/**
 * Sanity-backed blog data layer.
 *
 * Every read goes to Sanity first. If Sanity is unreachable, unconfigured,
 * slow, or simply has no matching document, we fall back to the five posts
 * that shipped hard-coded in the site (src/data/blogPosts.json) so the blog
 * never renders empty.
 *
 * Both paths are normalised to the same post shape, so components never need
 * to know where a post came from.
 */

export const SANITY_PROJECT_ID =
  process.env.REACT_APP_SANITY_PROJECT_ID || '91ufe034';
export const SANITY_DATASET =
  process.env.REACT_APP_SANITY_DATASET || 'production';
const SANITY_API_VERSION = '2024-10-01';

/** How long we wait for Sanity before giving up and using the fallback. */
const FETCH_TIMEOUT_MS = 6000;

export const SITE_URL = 'https://karachilawfirms.pk';

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  perspective: 'published',
});

const builder = imageUrlBuilder(client);

/** Build a CDN URL for a Sanity image reference. */
export function urlForImage(source, width) {
  if (!source?.asset?._ref) return null;
  try {
    const image = builder.image(source).auto('format').fit('max');
    return width ? image.width(width).url() : image.url();
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ *
 * Queries
 * ------------------------------------------------------------------ */

const POST_FIELDS = `
  "slug": slug.current,
  title,
  excerpt,
  mainImage,
  publishedAt,
  updatedAt,
  author,
  categories,
  tags,
  featured
`;

const LIST_QUERY = `*[_type == "post" && defined(slug.current) && publishedAt <= now()]
  | order(featured desc, publishedAt desc) {
    ${POST_FIELDS}
  }`;

const SINGLE_QUERY = `*[_type == "post" && slug.current == $slug && publishedAt <= now()][0] {
    ${POST_FIELDS},
    body,
    relatedServices,
    faqs,
    seo
  }`;

/* ------------------------------------------------------------------ *
 * Normalisation
 * ------------------------------------------------------------------ */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** Render an ISO date as "03 March, 2026" to match the site's existing style. */
export function formatDisplayDate(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${day} ${MONTHS[date.getUTCMonth()]}, ${date.getUTCFullYear()}`;
}

function normalizeSanityPost(doc) {
  if (!doc) return null;

  const seo = doc.seo || {};

  return {
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt || '',
    imageUrl: urlForImage(doc.mainImage, 1200),
    imageAlt: doc.mainImage?.alt || doc.title,
    date: formatDisplayDate(doc.publishedAt),
    publishedAt: doc.publishedAt,
    updatedAt: doc.updatedAt || null,
    author: {
      name: doc.author?.name || 'KarachiLawFirms.pk',
      role: doc.author?.role || null,
      profileUrl: doc.author?.profileUrl || null,
    },
    // Portable Text body — the renderer prefers this over contentHtml.
    body: Array.isArray(doc.body) ? doc.body : null,
    contentHtml: null,
    categories: doc.categories || [],
    tags: doc.tags || [],
    relatedServices: doc.relatedServices || [],
    faqs: doc.faqs || [],
    featured: Boolean(doc.featured),
    seo: {
      metaTitle: seo.metaTitle || doc.title,
      metaDescription: seo.metaDescription || doc.excerpt || '',
      keywords: seo.keywords || [],
      ogImageUrl: urlForImage(seo.ogImage, 1200) || urlForImage(doc.mainImage, 1200),
      noIndex: Boolean(seo.noIndex),
    },
    source: 'sanity',
  };
}

function normalizeFallbackPost(post) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    imageUrl: post.mainImage,
    imageAlt: post.imageAlt || post.title,
    date: post.date,
    publishedAt: post.publishedAt,
    updatedAt: null,
    author: { name: post.author, role: null, profileUrl: null },
    // Fallback posts keep their original HTML body.
    body: null,
    contentHtml: post.contentHtml,
    categories: [],
    tags: [],
    relatedServices: [],
    faqs: [],
    featured: false,
    seo: {
      metaTitle: post.seo.metaTitle,
      metaDescription: post.seo.metaDescription,
      keywords: post.seo.keywords || [],
      ogImageUrl: post.mainImage,
      noIndex: Boolean(post.seo.noIndex),
    },
    source: 'fallback',
  };
}

/** The bundled posts, newest first — used whenever Sanity cannot answer. */
export function getFallbackPosts() {
  return [...fallbackPosts]
    .map(normalizeFallbackPost)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getFallbackPost(slug) {
  const match = fallbackPosts.find((post) => post.slug === slug);
  return match ? normalizeFallbackPost(match) : null;
}

/* ------------------------------------------------------------------ *
 * Fetching
 * ------------------------------------------------------------------ */

/** Reject if Sanity has not answered within FETCH_TIMEOUT_MS. */
function withTimeout(promise, ms = FETCH_TIMEOUT_MS) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Sanity request timed out')), ms),
    ),
  ]);
}

function warn(message, error) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(`[sanity] ${message}`, error?.message || '');
  }
}

/**
 * All published posts. Returns the bundled posts if Sanity fails or is empty.
 */
export async function fetchPosts() {
  try {
    const docs = await withTimeout(client.fetch(LIST_QUERY));
    const posts = (docs || []).map(normalizeSanityPost).filter(Boolean);

    if (posts.length === 0) {
      warn('No posts returned; using bundled posts.');
      return getFallbackPosts();
    }
    return posts;
  } catch (error) {
    warn('Post list request failed; using bundled posts.', error);
    return getFallbackPosts();
  }
}

/**
 * A single post by slug. Falls back to the bundled copy of that slug when
 * Sanity fails, and only reports "not found" if neither source has it.
 */
export async function fetchPost(slug) {
  if (!slug) return null;

  try {
    const doc = await withTimeout(client.fetch(SINGLE_QUERY, { slug }));
    const post = normalizeSanityPost(doc);
    if (post) return post;

    warn(`Post "${slug}" not in Sanity; checking bundled posts.`);
    return getFallbackPost(slug);
  } catch (error) {
    warn(`Post "${slug}" request failed; checking bundled posts.`, error);
    return getFallbackPost(slug);
  }
}

export default client;
