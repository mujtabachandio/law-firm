import React from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

import { urlForImage } from '../../lib/sanity';

/**
 * Renders a post body.
 *
 * Sanity posts arrive as Portable Text; the bundled fallback posts arrive as
 * the original HTML string. Both are rendered into the same `.cs_blog_content`
 * wrapper producing the same h2/h3/p/ul/img markup, so the existing SCSS
 * applies either way.
 */

const components = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,

    // Each branch spells `rel` out in full so the value stays statically
    // checkable (react/jsx-no-target-blank cannot see through a built string).
    link: ({ value, children }) => {
      const href = value?.href;

      if (value?.newTab === false) {
        return (
          <a href={href} rel={value?.noFollow ? 'nofollow' : undefined}>
            {children}
          </a>
        );
      }

      if (value?.noFollow) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer nofollow">
            {children}
          </a>
        );
      }

      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },

    // Internal links stay client-side so navigation does not reload the SPA.
    internalLink: ({ value, children }) => (
      <Link to={value?.path || '/'}>{children}</Link>
    ),
  },

  types: {
    image: ({ value }) => {
      const src = urlForImage(value, 1200);
      if (!src) return null;
      return (
        <figure style={{ margin: '20px 0' }}>
          <img
            src={src}
            alt={value?.alt || ''}
            loading="lazy"
            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
          />
          {value?.caption && (
            <figcaption
              style={{ fontSize: 14, opacity: 0.75, marginTop: 8, textAlign: 'center' }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextBody({ body, contentHtml }) {
  if (Array.isArray(body) && body.length > 0) {
    return (
      <div className="cs_post_subtitle cs_blog_content">
        <PortableText value={body} components={components} />
      </div>
    );
  }

  if (contentHtml) {
    return (
      <div
        className="cs_post_subtitle cs_blog_content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    );
  }

  return null;
}
