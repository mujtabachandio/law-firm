import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Team({ imgUrl, name, designation, experience, srcUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="cs_team_member position-relative cs_rounded_16 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          className="w-100 cs_rounded_16" 
          src={imgUrl} 
          alt="Member"
          style={{
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        
        {/* Overlay with social links */}
        <motion.div 
          className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.3s ease',
            top: '50%',
            left: '50%',
            transform: isHovered ? 'translate(-50%, -50%)' : 'translate(-50%, -30%)',
            zIndex: 3,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
            style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            <Icon icon="fa:linkedin" />
          </Link>
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
            style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            <Icon icon="fa:twitter" />
          </Link>
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
            style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            <Icon icon="fa:envelope" />
          </Link>
        </motion.div>
        
        {/* Gradient overlay */}
        <div 
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(27,54,93,0.8) 0%, rgba(230,207,184,0.8) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
            transition: 'all 0.3s ease',
          }}
        />
      </motion.div>
      
      <motion.div 
        className="cs_team_info cs_pt_25 cs_pl_20 cs_pr_20 cs_pb_25 cs_transition_4"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          marginTop: '-20px',
          position: 'relative',
          zIndex: 2,
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 
          className="m-0 cs_fs_22 cs_mb_8 fw-bold"
          style={{ color: '#1B365D' }}
        >
          <Link 
            to={srcUrl}
            style={{ 
              color: '#1B365D',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#E6CFB8'}
            onMouseLeave={(e) => e.target.style.color = '#1B365D'}
          >
            {name}
          </Link>
        </h2>
        <p 
          className="m-0 cs_mb_8"
          style={{ 
            color: '#E6CFB8',
            fontWeight: '500',
            fontSize: '16px'
          }}
        >
          {designation}
        </p>
        {experience && (
          <p 
            className="m-0"
            style={{ 
              color: '#6c757d',
              fontSize: '14px',
              fontStyle: 'italic'
            }}
          >
            {experience}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
