import Button from '../Button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScaleOfJusticeAnimation from '../LottieAnimation';

export default function HeroStyle2({ titleUp, subtitle, title, btnText, btnUrl, bgUrl = '/bg-pattern.jpg' }) {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [bgVersion] = useState(() => Date.now());
  const resolvedBg = `${bgUrl || '/bg-pattern.jpg'}?v=${bgVersion}`;
  useEffect(() => { try { console.log('Hero bg:', resolvedBg); } catch(e){} }, [resolvedBg]);
  
  const taglines = [
    "Justice, Digitalized. Excellence, Humanized.",
    "Constitutional Advocacy for the Modern Age",
    "Transparent Legal Solutions",
    "Research-Backed Legal Strategies"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile fallback to prevent WaterWave issues
  if (isMobile) {
    return (
      <div 
        className="cs_hero cs_style_2 d-flex align-items-center justify-content-center background-filled position-relative overflow-hidden"
        style={{
          backgroundImage: `url(${resolvedBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div className="container">
          <motion.div 
            className="cs_hero_text position-relative cs_zindex_3 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-white cs_mb_15 fw-normal"
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ letterSpacing: '0.35em', textTransform: 'uppercase' }}
            >
              {titleUp}
            </motion.h2>
            
            {/* Main Title */}
            <motion.div 
              className="hero-title-container cs_mb_20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-white fw-bold" style={{ fontSize: 'clamp(34px, 8vw, 58px)', lineHeight: 1.08, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                <span style={{ color: '#D6B24C' }}>Justice, Digitalized.</span><br />
                Excellence, Humanized.
              </h1>
            </motion.div>
            
            {/* Subtitle (static if provided; otherwise rotating taglines) */}
            <motion.div 
              className="tagline-container cs_mb_25"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ color: '#D6B24C' }}
            >
              {subtitle ? (
                <div style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', fontWeight: 500 }}>{subtitle}</div>
              ) : (
                <div className="tagline-wrapper">
                  {taglines.map((tagline, index) => (
                    <motion.div
                      key={index}
                      className={`tagline-item ${index === currentTagline ? 'active' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: index === currentTagline ? 1 : 0, y: index === currentTagline ? 0 : 20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {tagline}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              className="d-flex align-items-center justify-content-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button btnText={btnText || 'GRT LEGAL HELP'} btnUrl={btnUrl} />
            </motion.div>
            
            {/* Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4"
            >
              <ScaleOfJusticeAnimation />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced overlay for cinematic effect */}
        <div className="position-absolute w-100 h-100 start-0 top-0" style={{ background: 'rgba(0,0,0,0.75)', pointerEvents: 'none' }} />
        
        {/* Gradient overlay for better text readability */}
        <div className="position-absolute w-100 h-100 start-0 top-0" 
             style={{
               background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%)',
               pointerEvents: 'none'
             }} />

          {/* Subtle gold bottom gradient to mirror reference */}
          <div className="position-absolute w-100 start-0 bottom-0" style={{ height: '35%', background: 'linear-gradient(180deg, rgba(166,127,34,0) 0%, rgba(166,127,34,0.18) 45%, rgba(166,127,34,0.42) 100%)' }} />
      </div>
    );
  }

  // Desktop layout
  // Solid background (no image) per updated direction
  return (
    <div 
      className="cs_hero cs_style_2 d-flex align-items-center justify-content-center background-filled position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${resolvedBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
        <>
          <div className="container">
            <motion.div 
              className="cs_hero_text position-relative cs_zindex_3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-white cs_mb_15 fw-normal cs_fs_18 opacity-75"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.75, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ letterSpacing: '0.35em', textTransform: 'uppercase' }}
              >
                {titleUp}
              </motion.h2>
              
              {/* Main Title */}
              <motion.div 
                className="hero-title-container cs_mb_20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-white fw-bold" style={{ fontSize: 'clamp(44px, 7vw, 64px)', lineHeight: 1.06, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <span style={{ color: '#D6B24C' }}>Justice, Digitalized.</span><br />
                  Excellence, Humanized.
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div 
                className="tagline-container cs_mb_25"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ color: '#D6B24C' }}
              >
                <div style={{ fontSize: 'clamp(16px, 1.5vw, 22px)', fontWeight: 500 }}>{subtitle}</div>
              </motion.div>

              <motion.div
                className="d-flex align-items-center justify-content-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button btnText={btnText} btnUrl={btnUrl} />
                <a href="/service" className="btn btn-outline-light" style={{ padding: '14px 26px', borderRadius: 9999, borderWidth: 2, borderColor: '#E2C773', color: '#E2C773', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Explore Services</a>
              </motion.div>
            </motion.div>
          </div>

          {/* Overlays for depth and readability */}
          <div className="position-absolute w-100 h-100 start-0 top-0" style={{ background: 'rgba(0,0,0,0.78)', pointerEvents: 'none' }} />
          <div className="position-absolute w-100 h-100 start-0 top-0" 
               style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.58) 45%, rgba(0,0,0,0.92) 100%)', pointerEvents: 'none' }} />
          <div className="position-absolute w-100 start-0 bottom-0" style={{ height: '35%', background: 'linear-gradient(180deg, rgba(166,127,34,0) 0%, rgba(166,127,34,0.15) 40%, rgba(166,127,34,0.35) 100%)' }} />
        </>
    </div>
  );
}
