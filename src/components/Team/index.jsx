import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Team({ imgUrl, name, designation, experience, initials, linkedIn }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Generate initials from name if not provided
  const getInitials = () => {
    if (initials) return initials;
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  // Render avatar or image
  const renderAvatar = () => {
    if (!imgUrl) {
      return (
        <div 
          className="d-flex align-items-center justify-content-center"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold',
            border: '3px solid #1B365D',
          }}
        >
          {getInitials()}
        </div>
      );
    }

    return (
      <img 
        className="rounded-circle" 
        src={imgUrl} 
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          border: '3px solid #1B365D',
        }}
      />
    );
  };

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <motion.div 
        className="cs_team_card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openPopup}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
                 style={{
           cursor: 'pointer',
           border: '2px solid #1B365D',
           borderRadius: '12px',
           padding: '30px',
           background: 'white',
           boxShadow: isHovered ? '0 8px 25px rgba(27, 54, 93, 0.15)' : '0 4px 15px rgba(27, 54, 93, 0.1)',
           transition: 'all 0.3s ease',
           position: 'relative',
           overflow: 'hidden',
           minHeight: '140px',
         }}
      >
        {/* Hover effect overlay */}
        <div 
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            background: 'linear-gradient(135deg, rgba(27, 54, 93, 0.05) 0%, rgba(230, 207, 184, 0.05) 100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        
        <div className="d-flex align-items-center position-relative" style={{ zIndex: 2 }}>
          {/* Avatar */}
          <div className="me-3">
            {renderAvatar()}
          </div>
          
          {/* Text Content */}
          <div className="flex-grow-1">
            <h3 
              className="m-0 mb-1 fw-bold"
              style={{ 
                color: '#1B365D',
                fontSize: '22px',
                lineHeight: '1.2'
              }}
            >
              {name}
            </h3>
            <p 
              className="m-0 mb-2"
              style={{ 
                color: '#666',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              {designation}
            </p>
          </div>
          
          {/* View More Button */}
          <div 
            className="ms-2"
            style={{
              color: '#1B365D',
              fontSize: '14px',
              fontWeight: 'bold',
              opacity: isHovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease',
            }}
          >
            View More
          </div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              zIndex: 9999,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-white rounded-4 p-4"
              style={{
                maxWidth: '500px',
                width: '90%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="btn-close position-absolute"
                style={{
                  top: '15px',
                  right: '20px',
                  zIndex: 1000,
                }}
              />
              
              {/* Header */}
              <div className="text-center mb-4">
                <div className="d-flex justify-content-center mb-3">
                  {renderAvatar()}
                </div>
                <h2 
                  className="m-0 mb-2"
                  style={{ 
                    color: '#1B365D',
                    fontSize: '28px',
                    fontWeight: 'bold'
                  }}
                >
                  {name}
                </h2>
                <p 
                  className="m-0 mb-3"
                  style={{ 
                    color: '#E6CFB8',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}
                >
                  {designation}
                </p>
                <div 
                  className="mx-auto"
                  style={{
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #1B365D, #E6CFB8)',
                    borderRadius: '2px',
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="mb-4">
                <h4 
                  className="mb-3"
                  style={{ 
                    color: '#1B365D',
                    fontSize: '20px',
                    fontWeight: '600'
                  }}
                >
                  About {name.split(' ')[0]}
                </h4>
                <p 
                  className="mb-3"
                  style={{ 
                    color: '#666',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  {name} is a dedicated legal professional with extensive experience in {designation.toLowerCase()} matters. 
                  With a commitment to excellence and client satisfaction, {name.split(' ')[0]} provides comprehensive 
                  legal solutions tailored to meet the unique needs of each client.
                </p>
                
                {experience && (
                  <div className="mb-3">
                    <h5 
                      className="mb-2"
                      style={{ 
                        color: '#1B365D',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      Experience
                    </h5>
                    <p 
                      className="m-0"
                      style={{ 
                        color: '#666',
                        fontSize: '14px'
                      }}
                    >
                      {experience}
                    </p>
                  </div>
                )}

                {linkedIn && (
                  <div className="mb-3">
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center gap-2"
                      style={{
                        color: '#0077B5',
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontWeight: '500'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                )}
              </div>
              
              {/* Contact Button */}
              <div className="text-center">
                <button
                  className="btn btn-primary px-4 py-2"
                  style={{
                    background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '16px',
                  }}
                  onClick={() => {
                    closePopup();
                    // You can add navigation to contact page here
                    window.location.href = '/contact';
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
