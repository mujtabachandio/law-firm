import { useEffect, useState } from 'react';

import {
  fetchPost,
  fetchPosts,
  getFallbackPost,
  getFallbackPosts,
} from '../lib/sanity';

/**
 * Blog data hooks.
 *
 * Both hooks seed their state with the bundled posts so the page paints real
 * content on the first render instead of a spinner, then quietly swap in the
 * Sanity response once it arrives. If Sanity is down the bundled content is
 * simply what the visitor keeps seeing.
 */

export function useBlogPosts() {
  const [posts, setPosts] = useState(() => getFallbackPosts());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchPosts()
      .then((result) => {
        if (active && result?.length) setPosts(result);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { posts, loading };
}

export function useBlogPost(slug) {
  const [post, setPost] = useState(() => getFallbackPost(slug));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    setPost(getFallbackPost(slug));
    setLoading(true);

    fetchPost(slug)
      .then((result) => {
        if (active && result) setPost(result);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  // Only a finished lookup with nothing in either source counts as missing.
  const notFound = !loading && !post;

  return { post, loading, notFound };
}
