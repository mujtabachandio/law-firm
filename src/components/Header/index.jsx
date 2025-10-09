import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
      style={{ position: 'relative', zIndex: 1002 }}
    >
      <div className="cs_top_header">
      </div>
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in d-flex align-items-center justify-content-between">
            <div className="cs_main_header_left d-flex align-items-center">
              <Link className="cs_site_branding" to="/">
                <img src="/images/main-logo.png" alt="Karachi Law Firms" style={{ height: '70px', width: 'auto' }} />
              </Link>
            </div>
            {/* Center nav area aligned to the right */}
            <div className="cs_nav cs_primary_font fw-medium ms-auto d-none d-lg-block">
              <Nav setMobileToggle={setMobileToggle} />
            </div>
            {/* Mobile hamburger + mobile nav */}
            <div className="d-lg-none d-flex align-items-center">
              <span
                className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                onClick={() => setMobileToggle(!mobileToggle)}
                style={{ zIndex: 1001 }}
              >
                <span></span>
              </span>
              {/* Mobile Nav container; visibility controlled by header's cs_mobile_toggle_active class */}
              <div className="cs_nav cs_primary_font fw-medium" style={{ zIndex: 1000 }}>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>
            <div className="cs_main_header_right ms-3">
              <div className="cs_toolbox">
                <div className="cs_header_contact">
                  <div className="cs_header_contact_right">
                    <button 
                      onClick={() => {
                        // Simple and reliable: open WhatsApp directly
                        window.open('https://wa.me/923000927678', '_blank');
                      }}
                      className="btn book-now-btn"
                      style={{
                        background: '#DAA520',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(218, 165, 32, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#B8860B';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(218, 165, 32, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#DAA520';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(218, 165, 32, 0.3)';
                      }}
                      title="Book a consultation now"
                    >
                      Book a Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
