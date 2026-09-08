import React from 'react'

export default function IconboxStyle2({imgUrl, titleUp, title, textColor, isAddress}) {
  
  // Function to determine if title is a phone number or email
  const isPhoneNumber = (text) => {
    return /^\+?[\d\s\-()]+$/.test(text);
  };

  const isEmail = (text) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  };

  // Function to render clickable title
  const renderTitle = () => {
    if (isPhoneNumber(title)) {
      // Handle Pakistani local format (03000927678) and convert to international (+923000927678)
      let phoneNumber = title.replace(/[\s\-()]/g, '');
      
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
          {title}
        </a>
      );
    } else if (isEmail(title)) {
      return (
        <a 
          href={`mailto:${title}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
          className="contact-link"
          title={`Send email to ${title}`}
        >
          {title}
        </a>
      );
    } else {
      return title;
    }
  };

  const isFlag = imgUrl && imgUrl.includes('pak-flag');

  // Handle address with multiple locations
  if (isAddress && title && title.includes('|')) {
    const addresses = title.split('|').map(addr => addr.trim());
    return (
      <div className="d-flex cs_mb_20" style={{ alignItems: 'flex-start', padding: '12px 0' }}>
        <div className="flex-none cs_mr_15" style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: '2px',
          position: 'relative',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <img 
            src={imgUrl} 
            alt="Pakistan" 
            style={{ 
              width: '28px', 
              height: '28px', 
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </div>
        <div className="flex-grow-1" style={{ paddingTop: '2px' }}>
          <div className="text-accent cs_mb_8" style={{ 
            lineHeight: '1.3', 
            margin: 0, 
            padding: 0,
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>{titleUp}</div>
          <div className={textColor || ''} style={{ 
            lineHeight: '1.6',
            margin: 0,
            padding: 0,
            fontSize: '16px',
            fontWeight: '400',
            wordBreak: 'break-word',
            color: textColor ? undefined : '#333'
          }}>
            {addresses.map((address, index) => (
              <div key={index} style={{ marginBottom: index < addresses.length - 1 ? '12px' : '0' }}>
                {address}
              </div>
            ))}
            <a 
              href="https://maps.app.goo.gl/8XPrxhUbbA5rHHAr5" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                marginTop: '12px',
                color: textColor ? 'inherit' : '#1B365D',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex cs_mb_20" style={{ alignItems: 'flex-start', padding: '12px 0' }}>
      <div className={`flex-none cs_mr_15 ${isFlag ? '' : 'bg-accent'}`} style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: isFlag ? '50%' : '8px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: '2px',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
      }}>
        <img 
          src={imgUrl} 
          alt="contact-icon" 
          style={{ 
            width: isFlag ? '28px' : '20px', 
            height: isFlag ? '28px' : '20px', 
            display: 'block',
            objectFit: 'contain',
            objectPosition: 'center',
            // Keep colored for country flag; otherwise invert to white for consistency
            filter: isFlag ? 'none' : 'brightness(0) invert(1)'
          }}
        />
      </div>
      <div className="flex-grow-1" style={{ paddingTop: '2px' }}>
        <div className="text-accent cs_mb_8" style={{ 
          lineHeight: '1.3', 
          margin: 0, 
          padding: 0,
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>{titleUp}</div>
        <div className={`${textColor}`} style={{ 
          lineHeight: '1.4',
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: '400',
          wordBreak: 'break-word'
        }}>
          {renderTitle()}
        </div>
      </div>
    </div>
  )
}
