import Button from '../Button';
import WaterWave from 'react-water-wave';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScaleOfJusticeAnimation from '../LottieAnimation';

export default function HeroStyle2({ titleUp, title, btnText, btnUrl, bgUrl }) {
  const [currentTagline, setCurrentTagline] = useState(0);
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
  }, []);

  return (
    <WaterWave
      className="cs_hero cs_style_2 d-flex align-items-center justify-content-center background-filled position-relative overflow-hidden cs_ripple_version"
      imageUrl={bgUrl}
    >
      {() => (
        <>
          <div className="container">
            <motion.div 
              className="cs_hero_text position-relative cs_zindex_3 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-white cs_mb_15 fw-normal cs_fs_18 opacity-75"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.75, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {titleUp}
              </motion.h2>
              
              {/* Main Title - Side by Side Layout */}
              <motion.div 
                className="hero-title-container cs_mb_45"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="hero-title-row">
                  <span className="hero-title-part text-white cs_fs_60 cs_fs_lg_46 text-uppercase fw-bold">
                    JUSTICE,
                  </span>
                  <span className="hero-title-part text-white cs_fs_60 cs_fs_lg_46 text-uppercase fw-bold">
                    DIGITALIZED.
                  </span>
                </div>
                <div className="hero-title-row">
                  <span className="hero-title-part text-white cs_fs_60 cs_fs_lg_46 text-uppercase fw-bold">
                    EXCELLENCE,
                  </span>
                  <span className="hero-title-part text-white cs_fs_60 cs_fs_lg_46 text-uppercase fw-bold">
                    HUMANIZED.
                  </span>
                </div>
              </motion.div>
              
              {/* Scrolling Tagline */}
              <motion.div 
                className="tagline-container cs_mb_30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="tagline-wrapper">
                  {taglines.map((tagline, index) => (
                    <motion.div
                      key={index}
                      className={`tagline-item ${
                        index === currentTagline ? 'active' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: index === currentTagline ? 1 : 0,
                        y: index === currentTagline ? 0 : 20
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {tagline}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="btn-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button btnText={btnText} btnUrl={btnUrl} />
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
          <div className="bg-dark opacity-60 position-absolute w-100 h-100 start-0 top-0" />
          
          {/* Gradient overlay for better text readability */}
          <div className="position-absolute w-100 h-100 start-0 top-0" 
               style={{
                 background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)'
               }} />
          
          <div className="cs_hero_shape_1 position-absolute bottom-0 start-0 d-flex align-items-end h-100">
            <svg
              width={660}
              height={759}
              viewBox="0 0 660 759"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240 0H660L430 759H0L240 0Z"
                fill="url(#paint0_linear_81_1981)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_81_1981"
                  x1={330}
                  y1="119.5"
                  x2="434.5"
                  y2="1186.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity={0} offset="none" />
                  <stop
                    offset="0.9999"
                    stopColor="#D9D9D9"
                    stopOpacity="0.35"
                  />
                  <stop offset={1} stopColor="#222121" stopOpacity={0} />
                  <stop offset={1} stopColor="#222121" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}
    </WaterWave>
  );
}
