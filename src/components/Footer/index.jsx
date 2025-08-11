import React from 'react';
import { Link } from 'react-router-dom';
import SocialBtns from '../../components/SocialBtns';
import MenuWidget from '../Widget/MenuWidget';
import NewsLetterWidget from '../Widget/NewsLetterWidget';



const servicesData = [
  { title: 'Constitutional Advocacy', href: '/service/constitutional-advocacy' },
  { title: 'Digital Case Management', href: '/service/digital-case-management' },
  { title: 'Lawcademics Division', href: '/service/lawcademics' },
  { title: 'Corporate Legal Support', href: '/service/corporate-legal-support' },
  { title: 'Lawconomic Solutions', href: '/service/lawconomic-solutions' },
];

const resourcesData = [
  { title: 'Legal Research', href: '/blog' },
  { title: 'Case Studies', href: '/portfolio' },
  { title: 'Attorney Profiles', href: '/team' },
  { title: 'Legal Fees', href: '/pricing' },
  { title: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="cs_footer background-filled text-white"
      style={{ 
        backgroundColor: '#000000',
        position: 'relative',
      }}
    >
      {/* Gradient overlay for better readability */}
      <div 
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1,
        }}
      />
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Top section with contact info */}
        <div className="cs_footer_top d-flex justify-content-between align-items-start align-items-md-center cs_pt_46 cs_pb_46 cs_column_gap_15 cs_row_gap_15 flex-md-row flex-column">
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Need Legal Help?
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              (123) 45678
            </h2>
          </div>
          <div className="cs_footer_logo">
            <img src="/images/main-logo2.png" alt="Karachi Law Firms" style={{ height: '100px', width: 'auto' }} />
          </div>
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Send Email
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              <a 
                href="mailto:info@karachilawfirms.com"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                info@karachilawfirms.com
              </a>
            </h2>
          </div>
        </div>
        
        {/* Main footer content - Modular Grid */}
        <div className="cs_footer_main cs_pt_30 cs_pb_30">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-3 col-md-6">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <div className="cs_text_widget">
                  <h4 className="text-white cs_mb_20 fw-bold">About KLF</h4>
                  <p style={{ lineHeight: '1.6', color: '#e0e0e0' }}>
                    At Karachi Law Firms (KLF), we're reimagining legal practice for the 21st century. 
                    We don't just file petitions — we challenge precedents, empower citizens, and bring 
                    the entire legal process into the digital era.
                  </p>
                </div>
                <SocialBtns 
                  variant="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5" 
                />
              </div>
            </div>
            
            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <MenuWidget data={servicesData} title="Our Services" />
              </div>
            </div>
            
            {/* Resources */}
            <div className="col-lg-3 col-md-6">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <MenuWidget data={resourcesData} title="Resources" />
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <NewsLetterWidget
                  title="Stay Updated"
                  subTitle="Subscribe to our Lawcademics newsletter for the latest legal insights and research."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div 
        className="cs_copyright text-center cs_fs_124 cs_lh_lg cs_pt_36 cs_pb_36"
        style={{
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="container">
          <p className="m-0">
                         Copyright © {new Date().getFullYear()} <Link to="/" style={{ color: '#DAA520' }}>Karachi Law Firms</Link>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

