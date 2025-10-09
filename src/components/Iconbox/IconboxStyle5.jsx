import React from 'react'
import { Link } from 'react-router-dom'

export default function IconboxStyle5({iconUrl, href, title, titleUp, desc}) {
  // Function to determine if desc is a phone number or email
  const isPhoneNumber = (text) => {
    return text && /^\+?[\d\s\-()]+$/.test(text);
  };

  const isEmail = (text) => {
    return text && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  };

  // Function to render clickable description
  const renderDesc = () => {
    if (isPhoneNumber(desc)) {
      // Handle Pakistani local format (03000927678) and convert to international (+923000927678)
      let phoneNumber = desc.replace(/[\s\-()]/g, '');
      
      // If it's a Pakistani local number (starts with 0), convert to international
      if (phoneNumber.startsWith('0')) {
        phoneNumber = '+92' + phoneNumber.substring(1);
      }
      // If it's already international format, keep as is
      else if (!phoneNumber.startsWith('+')) {
        phoneNumber = '+92' + phoneNumber;
      }
      
      return (
        <a 
          href={`tel:${phoneNumber}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
          className="contact-link"
          title={`Call ${phoneNumber}`}
        >
          {desc}
        </a>
      );
    } else if (isEmail(desc)) {
      return (
        <a 
          href={`mailto:${desc}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
          className="contact-link"
          title={`Send email to ${desc}`}
        >
          {desc}
        </a>
      );
    } else {
      return desc;
    }
  };

  // If titleUp and desc are provided, render as contact info
  if (titleUp && desc) {
    const isFlag = iconUrl && iconUrl.includes('pak-flag');
    return (
      <div className="cs_contact_info_item d-flex align-items-center cs_mb_20">
        <div className={`cs_contact_info_icon d-flex align-items-center justify-content-center cs_mr_15 cs_transition_4 flex-none ${isFlag ? '' : 'bg-accent'} cs_height_50 cs_width_50`} style={{ borderRadius: isFlag ? '50%' : '0.25rem' }}>
          <img src={iconUrl} alt="contact-icon" style={{ width: isFlag ? 28 : undefined, height: isFlag ? 28 : undefined, filter: isFlag ? 'none' : undefined }} />
        </div>
        <div>
          <p className="text-accent cs_mb_5 cs_fs_14">{titleUp}</p>
          <h3 className="cs_lh_base cs_fs_18 cs_fs_lg_16 m-0">
            {renderDesc()}
          </h3>
        </div>
      </div>
    );
  }

  // Original service link functionality
  return (
    <div className="cs_service_iconbox d-flex align-items-center cs_mb_20">
      <div className="cs_service_icon d-flex align-items-center justify-content-center cs_rounded_5 cs_mr_15 cs_transition_4 flex-none bg-primary cs_height_70 cs_width_70">
        <img src={iconUrl} alt="service-icon" />
      </div>
      <h2 className="cs_lh_base cs_fs_20 cs_fs_lg_18 m-0">
        {href ? <Link to={href} className="inline-block">{title}</Link> : <span>{title}</span>}
      </h2>
    </div>
  )
}
