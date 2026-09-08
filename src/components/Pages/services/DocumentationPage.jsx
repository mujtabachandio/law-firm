import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import TestimonialSection from '../../Section/TestimonialSection';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';

const DocumentationPage = () => {
  const documentationServices = [
    {
      iconUrl: '/images/icons/service_icon_2.svg',
      title: 'Legal Notice',
      subTitle: 'Professional legal notice drafting and serving services for various legal matters and dispute resolution.',
      imgUrl: '/images/Legal%20Notice.jpg',
      href: '/service/legal-notice',
    },
    {
      iconUrl: '/images/icons/service_icon_3.svg',
      title: 'Documentation Lawyer',
      subTitle: 'Professional legal documentation services including contract drafting, legal agreements, and document review.',
      imgUrl: '/images/Documentation%20Lawyer.jpg',
      href: '/service/documentation-lawyer',
    },
    {
      iconUrl: '/images/icons/service_icon_4.svg',
      title: 'Processor Server',
      subTitle: 'Legal process serving services for court documents, legal notices, and official document delivery.',
      imgUrl: '/images/Processor%20Server.jpg',
      href: '/service/processor-server',
    }
  ];


  const testimonialData = [
    {
      imgUrl: '/images/avatar_1.png',
      rating: '5',
      desc: "I always thought the legal system was a black box. KLF changed that. I knew what was happening with my case at every stage.",
      name: 'Hamza R.',
      designation: 'Client in Civil Rights Case',
    },
    {
      imgUrl: '/images/avatar_2.png',
      rating: '5',
      desc: "Their research division gave us not just a lawyer, but a strategic advantage in court.",
      name: 'Adeel M.',
      designation: 'CEO of fintech startup',
    },
    {
      imgUrl: '/images/avatar_3.png',
      rating: '5',
      desc: "The constitutional advocacy team fought for our rights when no one else would. They're truly committed to justice.",
      name: 'Fatima S.',
      designation: 'Human Rights Activist',
    },
    {
      imgUrl: '/images/avatar_4.png',
      rating: '5',
      desc: "Their digital case management system made the entire legal process transparent and accessible.",
      name: 'Ahmed K.',
      designation: 'Business Owner',
    },
    {
      imgUrl: '/images/avatar_5.png',
      rating: '5',
      desc: "Professional, transparent, and effective. KLF delivered results when other firms couldn't.",
      name: 'Sarah M.',
      designation: 'Property Dispute Client',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Documentation & Process Services in Karachi</title>
        <meta name="description" content="Professional documentation and process services in Karachi. Expert legal documentation, notarization, and process services for all your legal needs." />
        <meta name="keywords" content="Documentation Services, Process Services, Legal Documentation, Notarization Services, Legal Forms" />
        <link rel="canonical" href="https://karachilawfirms.pk/service/documentation-process" />
      </Helmet>
      
      <Breadcrumb title="Documentation & Process Services" bgUrl="/images/Documentation%20Lawyer.jpg" />
      
      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cs_mb_60">
                <p className="cs_fs_14 cs_fw_600 cs_primary_color cs_mb_15">
                  Documentation & Process Services
                </p>
                <h1 className="cs_fs_48 cs_fw_700 cs_mb_20">
                  Documentation & Process Services in Karachi
                </h1>
                <p className="cs_fs_18 cs_mb_0">
                  Professional legal documentation and process services with experienced legal professionals
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {documentationServices.map((item, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                <div 
                  className="service-card-modern bg-white position-relative overflow-hidden h-100"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(218, 165, 32, 0.1)',
                    marginBottom: '30px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Image Section */}
                  <div 
                    className="position-relative overflow-hidden"
                    style={{
                      height: '220px',
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="position-absolute w-100 h-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(27, 54, 93, 0.8) 0%, rgba(218, 165, 32, 0.8) 100%)',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0}
                    />
                    
                    {/* Icon Overlay */}
                    <div 
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        top: '20px',
                        right: '20px',
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '15px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <img 
                        src={item.iconUrl} 
                        alt="Icon" 
                        style={{
                          width: '30px',
                          height: '30px',
                          filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(89%) contrast(86%)'
                        }}
                      />
                    </div>
                    
                    {/* View Button */}
                    <div 
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        bottom: '20px',
                        right: '20px',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
                        borderRadius: '50%',
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = 1;
                        e.target.style.transform = 'translateY(0)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = 0;
                        e.target.style.transform = 'translateY(20px)';
                      }}
                      onClick={() => window.location.href = item.href}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4">
                    <h3 
                      className="mb-3 fw-bold"
                      style={{ 
                        color: '#1B365D',
                        fontSize: '22px',
                        lineHeight: '1.3'
                      }}
                    >
                      <a 
                        href={item.href} 
                        className="text-decoration-none"
                        style={{ color: '#1B365D' }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    
                    <p 
                      className="mb-4"
                      style={{ 
                        color: '#6c757d', 
                        lineHeight: '1.6', 
                        fontSize: '16px',
                        marginBottom: '20px'
                      }}
                    >
                      {item.subTitle}
                    </p>
                    
                    {/* Learn More Button */}
                    <a
                      href={item.href}
                      className="btn d-inline-flex align-items-center text-decoration-none"
                      style={{
                        background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(27, 54, 93, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Learn More
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="ms-2"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      

      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Client Testimonials"
          sectionTitle="What Our Clients Say?"
          sectionSubTitle="Real stories from individuals and businesses who have experienced the KLF difference in their legal journey."
          data={testimonialData}
        />
      </Section>

      {/* Contact Section Bottom */}
      <Section
        pt="50"
        ptLg="30"
        pb="50"
        pbLg="30"
        className="background-filled overflow-hidden position-relative"
        style={{ 
          backgroundImage: 'url("/images/Documentation%20Lawyer.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <ContactSectionBottom />
        </div>
      </Section>
    </>
  );
};

export default DocumentationPage;
