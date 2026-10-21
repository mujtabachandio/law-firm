import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * The page header, with the breadcrumb trail above the title.
 *
 * By default the trail is derived from the URL, which reads acceptably for
 * most pages. Where the URL does not match how the page is actually filed —
 * /service/fbr-lawyer belongs under Corporate Law, not under a segment called
 * "service" — pass `trail` to state it explicitly:
 *
 *   trail={[{ label: 'Corporate Law', to: '/service/corporate-law' },
 *           { label: 'FBR Tax Lawyer' }]}
 *
 * "Home" is always first and is not part of `trail`. The last entry renders as
 * plain text whether or not it carries a `to`, since it is the current page.
 */
export default function Breadcrumb({ bgUrl, title, trail }) {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);

  const items =
    Array.isArray(trail) && trail.length > 0
      ? trail
      : urlSegments.map((segment, index) => ({
          label: segment,
          to: `/${urlSegments.slice(0, index + 1).join('/')}`,
          capitalize: true,
        }));
  return (
    <section
      className="cs_page_header position-relative background-filled d-flex align-items-center justify-content-between"
      style={{ 
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '150px'
      }}
    >
      <div className="container position-relative z-index-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb cs_fs_18 cs_mb_5">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {items.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className={`breadcrumb-item${item.capitalize ? ' text-capitalize' : ''}`}
              >
                {index < items.length - 1 && item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="cs_fs_48 cs_fs_lg_36 text-white m-0">{title}</p>
      </div>
      <div className="position-absolute end-0 bottom-0">
        <svg
          width={660}
          height={497}
          viewBox="0 0 660 497"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240 0H660L430 497H0L240 0Z"
            fill="url(#paint0_linear_81_9510)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_81_9510"
              x1={330}
              y1="78.2497"
              x2="375.052"
              y2="780.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} offset="none" />
              <stop offset="0.9999" stopColor="#D9D9D9" stopOpacity="0.35" />
              <stop offset={1} stopColor="#222121" stopOpacity={0} />
              <stop offset={1} stopColor="#222121" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}