import React from 'react';
import { Link } from 'react-router-dom';
import SocialBtns from '../../components/SocialBtns';
import MenuWidget from '../Widget/MenuWidget';

const servicesData = [
  { title: 'Constitutional Advocacy', href: '/service/constitutional-advocacy' },
  { title: 'Digital Case Management', href: '/service/digital-case-management' },
  { title: 'Lawcademics Division', href: '/service/lawcademics' },
  { title: 'Corporate Legal Support', href: '/service/corporate-legal-support' },
  { title: 'Lawconomic Solutions', href: '/service/lawconomic-solutions' },
];

export default function Footer() {
  const siteMapLinks = [
    { title: 'Homepage', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/service' },
    { title: 'Team', href: '/team' },
    { title: 'Reviews', href: '/reviews' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Lawcademics Hub', href: '/lawcademics-hub' },
  ];

  const legalLinks = [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer
      className="cs_footer background-filled text-white"
      style={{ 
        backgroundColor: '#0a2b2c',
        backgroundImage: "url('/pakistan-flag-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: 'auto',
        height: 'auto',
        flexShrink: 0,
        paddingTop: 10,
      }}
    >
      <div 
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.65) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="p-3 p-md-4">
          <div className="row g-3">
            <div className="col-lg-5">
              <div className="d-flex flex-column h-100">
                <div className="d-flex align-items-center" style={{ marginBottom: 8 }}>
                  <img src="/images/main-logo.png" alt="Karachi Law Firms" style={{ height: 36, width: 'auto' }} />
                </div>
                <p style={{ lineHeight: '1.5', color: '#d7e3e3', fontSize: 14, marginBottom: 12 }}>
                  Reimagining legal practice for the 21st century with digital transparency and
                  research-backed strategies.
                </p>
                <div className="mt-2">
                  <SocialBtns variant="cs_social_btns d-flex flex-wrap cs_column_gap_10 cs_row_gap_10 cs_transition_5" />
                </div>
                <div className="mt-3">
                  <a href="#top" className="cs_back_to_top btn btn-sm" style={{ textDecoration: 'none' }}>BACK TO TOP</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-12">
                  <h5 className="text-white" style={{ fontWeight: 600, marginBottom: 8 }}>Site Map</h5>
                  <ul className="list-unstyled cs_footer_list two-col">
                    {siteMapLinks.map((item) => (
                      <li key={item.href} className="cs_mb_5">
                        <Link to={item.href} className="cs_footer_link">{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 mt-2">
                  <MenuWidget data={servicesData} title="Our Services" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h5 className="text-white" style={{ fontWeight: 600, marginBottom: 8 }}>Legal</h5>
              <ul className="list-unstyled cs_footer_list">
                {legalLinks.map((item) => (
                  <li key={item.href} className="cs_mb_5">
                    <Link to={item.href} className="cs_footer_link">{item.title}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <div className="cs_footer_contact_info">
                  <div className="mb-1" style={{ color: '#9bc0c0', fontSize: 12 }}>Call</div>
                  <a href="tel:+923000927678" style={{ color: 'white', textDecoration: 'none' }}>03000927678</a>
                </div>
                <div className="cs_footer_contact_info mt-2">
                  <div className="mb-1" style={{ color: '#9bc0c0', fontSize: 12 }}>Email</div>
                  <a href="mailto:info@karachilawfirms.pk" style={{ color: 'white', textDecoration: 'none' }}>info@karachilawfirms.pk</a>
                </div>
              </div>
            </div>
          </div>
          {/* accent bar removed with green card */}
        </div>
      </div>

      <div
        className="text-center cs_fs_12 cs_lh_lg cs_pt_10 cs_pb_10"
        style={{
          background: 'rgba(0,0,0,0.25)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          zIndex: 2,
          userSelect: 'text'
        }}
      >
        <div className="container d-flex justify-content-center align-items-center" style={{ gap: 8 }}>
          <img src="/pak-flag.png" alt="Pakistan" title="Pakistan" style={{ height: '20px', width: 'auto' }} />
          <span style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.85)',
            textShadow: '0 1px 2px rgba(0,0,0,0.25)'
          }}>
            Office 104, 1st Floor, Fareed Chambers, Abdullah Haroon Road, Saddar, Karachi 74400
          </span>
        </div>
      </div>

      <div 
        className="cs_copyright text-center cs_fs_12 cs_lh_lg cs_pt_12 cs_pb_12"
        style={{
          background: 'rgba(0,0,0,0.5)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          zIndex: 2,
          userSelect: 'text'
        }}
      >
        <div className="container">
          <p className="m-0" style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
            © {new Date().getFullYear()} <Link to="/" style={{ color: '#DAA520', textDecoration: 'none' }}>Karachi Law Firms</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

