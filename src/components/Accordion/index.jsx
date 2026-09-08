
import React, { useState, useRef, useEffect } from 'react';


function AccordionItem ({ title, desc, isOpen, onClick }){
  const accordionContentRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentWrapperRef.current) {
      if (isOpen) {
        // Set height to scrollHeight for smooth open animation
        const scrollHeight = contentWrapperRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        // Set height to 0 for smooth close animation
        setHeight(0);
      }
    }
  }, [isOpen, desc]);

  // Handle window resize to recalculate height
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentWrapperRef.current) {
        setHeight(contentWrapperRef.current.scrollHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
    <div className={`cs_accordian ${isOpen ? "active" : "" }`}>
      <div className="cs_accordian_head bg-gray" onClick={onClick} style={{ cursor: 'pointer' }}>
        <h2 className="cs_accordian_title cs_transition_3 cs_fs_16 fw-medium m-0 cs_pl_25 cs_pt_18 cs_pb_18 cs_pr_35">
          {title}
        </h2>
        <span className="cs_accordian_toggle" />
      </div>
      <div 
        className="cs_accordian_body" 
        ref={accordionContentRef}
        style={{
          maxHeight: height > 0 ? `${height}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div ref={contentWrapperRef}>
          <p className="m-0 cs_pl_25 cs_pr_25 cs_pb_20">{desc}</p>
        </div>
      </div>
    </div>
    </>
  );
}


export default function Accordion ({ data }) {
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  
  useEffect(() => {
    // Open first item after a small delay to allow smooth animation
    if (!isInitialized) {
      const timer = setTimeout(() => {
        setOpenItemIndex(0);
        setIsInitialized(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInitialized]);

  return (
    <div className="cs_accordians cs_style_1">
      {data.map((item, index)=>(
        <AccordionItem 
          key={index} 
          title={item.title} 
          desc={item.desc} 
          isOpen={index === openItemIndex} 
          onClick={() => handleItemClick(index)} 
        />
      ))}
    </div>
  );
}




