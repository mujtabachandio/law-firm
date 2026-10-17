import { useEffect, useState } from 'react';

/**
 * /studio forwards to the Sanity Studio.
 *
 * The Studio is a separate application (it runs on React 19, while this site is
 * on React 18), so it cannot be mounted inside this app. This route exists so
 * that /studio still takes you there.
 *
 *   development -> http://localhost:3333 (started with `npm run studio:dev`)
 *   production  -> the deployed Studio, set via REACT_APP_SANITY_STUDIO_URL
 */

const STUDIO_URL =
  process.env.REACT_APP_SANITY_STUDIO_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'https://karachi-law-firms.sanity.studio');

export default function StudioRedirect() {
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    // replace() keeps /studio out of the history, so Back returns to the site.
    window.location.replace(STUDIO_URL);

    // If we are still here after a moment the Studio is probably not running.
    const timer = setTimeout(() => setSlow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: 24,
        textAlign: 'center',
        fontFamily: 'Lato, system-ui, sans-serif',
      }}
    >
      <p style={{ margin: 0, fontSize: 18 }}>Opening the Sanity Studio…</p>

      <p style={{ margin: 0 }}>
        <a href={STUDIO_URL} style={{ color: '#1B365D', fontWeight: 600 }}>
          {STUDIO_URL}
        </a>
      </p>

      {slow && (
        <p style={{ margin: 0, maxWidth: 460, fontSize: 14, opacity: 0.75 }}>
          If nothing happened, the Studio is probably not running. Start it with{' '}
          <code>npm run studio:dev</code> and reload this page.
        </p>
      )}
    </div>
  );
}
