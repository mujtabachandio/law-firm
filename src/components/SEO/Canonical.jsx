import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Canonical() {
  const location = useLocation();

  useEffect(() => {
    // Wait a bit for Helmet to potentially add canonical first
    const timeoutId = setTimeout(() => {
      const existingCanonical = document.querySelector("link[rel='canonical']");
    const base = window.location.origin;
    const cleanPath = location.pathname.replace(/\/+$|^\/+/g, '/');
    const url = `${base}${cleanPath}${location.search}`;

      // If Helmet already added a canonical link, remove duplicates and keep only one
      const allCanonicals = document.querySelectorAll("link[rel='canonical']");
      
      if (allCanonicals.length > 1) {
        // Keep the first one (likely from Helmet) and remove others
        for (let i = 1; i < allCanonicals.length; i++) {
          allCanonicals[i].remove();
        }
        // Update the remaining one
        if (allCanonicals[0]) {
          allCanonicals[0].setAttribute('href', url);
        }
      } else if (existingCanonical) {
        // Update existing canonical
        existingCanonical.setAttribute('href', url);
    } else {
        // No canonical exists, add one
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
    }, 100); // Small delay to let Helmet render first

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
}
