import { useEffect, useState } from 'react';

/**
 * View counts for blog posts.
 *
 * Counts are kept by views.php, which .htaccess serves at /api/views. Both
 * hooks fetch after the component has mounted and never block a render: the
 * page paints its content first and the number appears when it arrives.
 *
 * A failed request leaves the count as null rather than 0, so the UI can hide
 * the counter instead of telling a visitor a post has no views when the truth
 * is that we could not reach the server.
 */

const ENDPOINT = '/api/views';
const SESSION_PREFIX = 'klf:viewed:';
const REQUEST_TIMEOUT = 8000;

/** sessionStorage throws in some privacy modes; a counter is not worth a crash. */
function alreadyCountedThisSession(slug) {
  try {
    return window.sessionStorage.getItem(SESSION_PREFIX + slug) === '1';
  } catch (error) {
    // No session storage means we cannot dedupe. Counting once per page load
    // is closer to the intent than not counting at all.
    return false;
  }
}

function markCountedThisSession(slug) {
  try {
    window.sessionStorage.setItem(SESSION_PREFIX + slug, '1');
  } catch (error) {
    /* ignore */
  }
}

function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  return fetch(url, { ...options, signal: controller.signal }).finally(() => {
    clearTimeout(timer);
  });
}

/**
 * Read-only counts for a list of slugs, in one request.
 *
 * Returns a { slug: count } object, empty until the response lands. Used by
 * the blog listing, where asking per card would mean a request per post.
 */
export function useViewCounts(slugs) {
  const [counts, setCounts] = useState({});

  // Join rather than depend on the array: a new array identity on every render
  // would otherwise refetch forever.
  const key = Array.isArray(slugs) ? slugs.filter(Boolean).join(',') : '';

  useEffect(() => {
    if (!key) return undefined;

    let active = true;

    fetchWithTimeout(`${ENDPOINT}?slugs=${encodeURIComponent(key)}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (active && data && data.views) setCounts(data.views);
      })
      .catch(() => {
        /* leave counts empty; the UI hides what it does not have */
      });

    return () => {
      active = false;
    };
  }, [key]);

  return counts;
}

/**
 * Count one view of a single post and return its total.
 *
 * The same visitor reloading or navigating back to a post within one browser
 * session is not counted again; after that the server has the last word, since
 * it is what ignores crawlers.
 */
export function usePostViews(slug) {
  const [views, setViews] = useState(null);

  useEffect(() => {
    if (!slug) return undefined;

    let active = true;
    const seen = alreadyCountedThisSession(slug);

    const request = seen
      ? fetchWithTimeout(`${ENDPOINT}?slugs=${encodeURIComponent(slug)}`)
          .then((response) => (response.ok ? response.json() : null))
          .then((data) => (data && data.views ? data.views[slug] : null))
      : fetchWithTimeout(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        })
          .then((response) => (response.ok ? response.json() : null))
          .then((data) => {
            // Only remember it once the server confirms it counted, so a
            // failed request does not silently cost the post its view.
            if (data && data.counted) markCountedThisSession(slug);
            return data ? data.views : null;
          });

    request
      .then((value) => {
        if (active && typeof value === 'number') setViews(value);
      })
      .catch(() => {
        /* leave as null; the counter stays hidden */
      });

    return () => {
      active = false;
    };
  }, [slug]);

  return views;
}

/** "1 view", "2 views", "1.2k views" — short enough to sit in a meta line. */
export function formatViews(count) {
  if (typeof count !== 'number' || count < 0) return '';
  if (count === 1) return '1 view';
  if (count < 1000) return `${count} views`;
  if (count < 100000) {
    const thousands = (count / 1000).toFixed(count < 10000 ? 1 : 0);
    return `${thousands.replace(/\.0$/, '')}k views`;
  }
  return `${Math.round(count / 1000)}k views`;
}
