import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Canonical() {
  const location = useLocation();

  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const base = window.location.origin;
    const cleanPath = location.pathname.replace(/\/+$|^\/+/g, '/');
    const url = `${base}${cleanPath}${location.search}`;

    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }, [location]);

  return null;
}
