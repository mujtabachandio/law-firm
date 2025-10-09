import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ btnText, btnUrl }) {
  return (
    <Link
      to={btnUrl}
      className="d-inline-flex align-items-center justify-content-center"
      style={{
        background: '#E2C773',
        color: '#0E2433',
        borderRadius: 9999,
        padding: '14px 28px',
        fontWeight: 700,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        boxShadow: '0 6px 20px rgba(226,199,115,0.35)'
      }}
    >
      <span>{btnText}</span>
    </Link>
  );
}
