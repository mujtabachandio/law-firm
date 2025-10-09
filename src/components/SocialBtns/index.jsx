import { Icon } from '@iconify/react';
import React from 'react';

export default function SocialBtns({ variant }) {
  return (
    <div className={`${variant ? variant : ''}`}>
      <a
        href="https://www.facebook.com/karachilawfirms/"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        style={{ backgroundColor: '#1877F2' }}
      >
        <Icon icon="fa6-brands:facebook-f" />
      </a>
      <a
        href="https://www.linkedin.com/company/karachilawfirms/"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        style={{ backgroundColor: '#0077B5' }}
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a
        href="https://wa.me/923000927678"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        style={{ backgroundColor: '#25D366' }}
      >
        <Icon icon="fa6-brands:whatsapp" />
      </a>
      <a
        href="https://www.youtube.com/@KarachiLawFirms"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        style={{ backgroundColor: '#FF0000' }}
      >
        <Icon icon="fa6-brands:youtube" />
      </a>
      <a
        href="https://www.pinterest.com/karachilawfirms/"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        style={{ backgroundColor: '#BD081C' }}
      >
        <Icon icon="fa6-brands:pinterest-p" />
      </a>
      <a
        href="mailto:info@karachilawfirms.pk"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        style={{ backgroundColor: '#EA4335' }}
      >
        <Icon icon="fa6-brands:google" />
      </a>
    </div>
  );
}
