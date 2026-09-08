import { Icon } from '@iconify/react';
import React from 'react';

export default function SocialBtns({ variant }) {
  return (
    <div className={`${variant ? variant : ''}`}>
      {/* Row 1: Primary CTAs + Key Social */}
      <div className="row mb-2">
        <div className="col-2">
          <a
            href="https://calendly.com/karachilawfirms-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            title="Book via Calendly"
            aria-label="Book via Calendly"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#0F172A' }}
          >
            <Icon icon="mdi:calendar-clock" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://wa.me/923000927678"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#25D366' }}
          >
            <Icon icon="fa6-brands:whatsapp" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://g.page/r/CecN0CEjEqNvEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            title="Leave a Google Review"
            aria-label="Leave a Google Review"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#34A853' }}
          >
            <Icon icon="fa6-brands:google" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://x.com/KarachiLawFirms"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on X"
            aria-label="Follow on X"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#000000' }}
          >
            <Icon icon="fa6-brands:x-twitter" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://www.instagram.com/karachilawfirms/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Instagram"
            aria-label="Follow on Instagram"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#C13584' }}
          >
            <Icon icon="fa6-brands:instagram" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://www.tiktok.com/@karachilawfirms"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on TikTok"
            aria-label="Follow on TikTok"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#010101' }}
          >
            <Icon icon="fa6-brands:tiktok" />
          </a>
        </div>
      </div>

      {/* Row 2: Additional Social + Contact */}
      <div className="row">
        <div className="col-2">
          <a
            href="https://www.youtube.com/@KarachiLawFirms"
            target="_blank"
            rel="noopener noreferrer"
            title="Subscribe on YouTube"
            aria-label="Subscribe on YouTube"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#FF0000' }}
          >
            <Icon icon="fa6-brands:youtube" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://www.linkedin.com/company/karachilawfirms/"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect on LinkedIn"
            aria-label="Connect on LinkedIn"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#0077B5' }}
          >
            <Icon icon="fa6-brands:linkedin-in" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://www.facebook.com/karachilawfirms/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Facebook"
            aria-label="Follow on Facebook"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#1877F2' }}
          >
            <Icon icon="fa6-brands:facebook-f" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://medium.com/@karachilawfirms"
            target="_blank"
            rel="noopener noreferrer"
            title="Read on Medium"
            aria-label="Read on Medium"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#12100E' }}
          >
            <Icon icon="fa6-brands:medium" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://www.pinterest.com/karachilawfirms/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Pinterest"
            aria-label="Follow on Pinterest"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#BD081C' }}
          >
            <Icon icon="fa6-brands:pinterest-p" />
          </a>
        </div>
        <div className="col-2">
          <a
            href="mailto:info@karachilawfirms.pk"
            title="Email us"
            aria-label="Email us"
            className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
            style={{ backgroundColor: '#EA4335' }}
          >
            <Icon icon="fa6-brands:google" />
          </a>
        </div>
      </div>
    </div>
  );
}
