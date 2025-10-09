import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Team({ imgUrl, name, designation, experience, initials }) {
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
