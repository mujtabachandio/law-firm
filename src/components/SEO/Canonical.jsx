import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import { SITE_URL } from '../../lib/sanity';

/**
 * The single source of truth for canonical tags.
 *
 * Rendered once in Layout, it emits exactly one self-referencing canonical on
 * every page. No page should declare its own — react-helmet treats
 * rel="canonical" as a deduplicating tag, so a second one would silently
 * override this and reintroduce the ambiguity this component exists to remove.
 *
 * Previously this wrote to document.head directly, which put the tag outside
 * Helmet's control: Helmet could neither dedupe nor clean it up on navigation,
 * so pages ended up with two canonicals.
 */
export default function Canonical() {
  const { pathname } = useLocation();

  // Normalise: collapse repeated slashes, drop any trailing slash (except
  // for the homepage). Query strings and hashes are deliberately excluded —
  // ?utm_source=... must not end up in a canonical URL.
  const path = pathname.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
