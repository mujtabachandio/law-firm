import React from 'react';
import { Link } from 'react-router-dom';

import { SITE_URL } from './sanity';

/**
 * Copy with links written inline, as `[anchor text](target)`.
 *
 * Content briefs arrive as documents with links sitting on specific phrases,
 * and that is where SEO wants them: on the keyword, inside the sentence, not as
 * a separate "read more" line underneath. Writing the copy in this form keeps
 * each link next to its anchor text in the source, so a reviewer can check a
 * page against its brief line by line.
 *
 * Targets on this site — absolute https://karachilawfirms.pk/... URLs or
 * paths starting with "/" — become router <Link>s, so following one does not
 * reload the app. Anything else is an external source and gets
 * rel="nofollow noopener noreferrer" and opens in a new tab.
 */

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** A site URL or a root-relative path, as a router path; null if external. */
function internalPath(target) {
  if (target.startsWith('/')) return target;
  if (target.startsWith(SITE_URL)) {
    const rest = target.slice(SITE_URL.length) || '/';
    // Canonical paths here never end in a slash (except the homepage).
    return rest.length > 1 ? rest.replace(/\/+$/, '') : rest;
  }
  return null;
}

/** Render text containing [anchor](target) links as React nodes. */
export function renderInlineLinks(text, { linkStyle } = {}) {
  if (typeof text !== 'string' || !text.includes('](')) return text;

  const nodes = [];
  let last = 0;
  let index = 0;

  for (const match of text.matchAll(LINK)) {
    const [whole, anchor, target] = match;
    if (match.index > last) nodes.push(text.slice(last, match.index));

    const path = internalPath(target);
    nodes.push(
      path ? (
        <Link key={`l${index}`} to={path} style={linkStyle}>
          {anchor}
        </Link>
      ) : (
        <a
          key={`l${index}`}
          href={target}
          target="_blank"
          rel="nofollow noopener noreferrer"
          style={linkStyle}
        >
          {anchor}
        </a>
      ),
    );

    last = match.index + whole.length;
    index += 1;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** The same text with the link markup removed, for structured data. */
export function stripInlineLinks(text) {
  return typeof text === 'string' ? text.replace(LINK, '$1') : text;
}
