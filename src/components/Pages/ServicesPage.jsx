import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import TestimonialSection from '../Section/TestimonialSection';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Family Law',
    subTitle:
      'Expert family law services including divorce, child custody, guardianship, and domestic violence cases with compassionate legal guidance.',
    imgUrl: '/images/Family-Law-Services.jpg',
    href: '/service/family-law',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Property & Real Estate',
    subTitle:
      'Comprehensive real estate legal services including property disputes, land acquisition, and real estate transaction documentation.',
    imgUrl: '/images/Property Lawyer.jpg',
    href: '/service/property-law',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Criminal & Civil Law',
    subTitle:
      'Experienced criminal defense and civil litigation representation for all types of legal cases and proceedings.',
    imgUrl: '/images/Criminal Lawyer.jpg',
    href: '/service/criminal-law',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Business & Corporate',
    subTitle:
      "Complete corporate legal services including business formation, compliance, and corporate governance for Pakistan's modern economy.",
    imgUrl: '/images/CorporateLegalSupport.jpg',
    href: '/service/corporate-law',
  },
  {
    iconUrl: '/images/icons/service_icon_5.svg',
    title: 'Documentation & Process',
    subTitle:
      'Professional legal documentation services, process serving, notarization, and legal form assistance for all legal matters.',
    imgUrl: '/images/Documentation Lawyer.jpg',
    href: '/service/documentation-process',
  },
  {
    iconUrl: '/images/icons/service_icon_6.svg',
    title: 'Immigration & Specialized',
    subTitle:
      'Expert immigration services, international law matters, and specialized legal areas including asylum and refugee cases.',
    imgUrl: '/images/Asylum Lawyer.jpg',
    href: '/service/immigration-specialized',
  },
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

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Legal Services in Karachi - Comprehensive Legal Solutions</title>
        <meta name="description" content="Comprehensive legal services in Karachi. Expert lawyers providing family law, criminal defense, property law, corporate legal support, and immigration services. Get trusted legal representation today." />
        <meta name="keywords" content="Legal Services Karachi, Lawyers in Karachi, Family Law, Criminal Law, Property Law, Corporate Legal Support, Immigration Services, Legal Solutions" />
      </Helmet>
      
      <Breadcrumb title="Our Legal Services" bgUrl="/images/OurCoreServices.jpg" />

      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cs_mb_60">
                <h6 className="cs_fs_14 cs_fw_600 cs_primary_color cs_mb_15">
                  Comprehensive Legal Solutions
                </h6>
                <h1 className="cs_fs_48 cs_fw_700 cs_mb_20">
                  Find the Best Lawyers & Legal Services in Karachi
                </h1>
                <p className="cs_fs_18 cs_mb_0">
                  Karachi Law Firms connects you with the best lawyers in Karachi. Expert legal services in Karachi for all your needs. Get trusted representation today.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {serviceData.map((item, index) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="cs_service cs_style_1 cs_pt_30 cs_pl_30 cs_pr_30 cs_pb_30 bg-white cs_transition_4 shadow-lg cs_mb_25 position-relative overflow-hidden">
                  <div className="cs_service_iconbox d-flex align-items-center cs_mb_25">
                    <div className="cs_service_icon d-flex align-items-center justify-content-center cs_rounded_10 cs_mr_20 cs_transition_4 flex-none"
                         style={{
                           width: '60px',
                           height: '60px',
                           background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
                         }}>
                      <img 
                        src={item.iconUrl} 
                        alt="Icon" 
                        style={{
                          width: '28px',
                          height: '28px',
                          filter: 'brightness(0) invert(1)',
                        }}
                      />
                    </div>
                    <h2 className="cs_lh_base cs_fs_22 cs_fs_lg_20 m-0 fw-bold">
                      <a 
                        href={item.href} 
                        className="text-decoration-none"
                        style={{ color: '#1B365D' }}
                      >
                        {item.title}
                      </a>
                    </h2>
                  </div>
                  
                  <p className="cs_mb_30" style={{ color: '#6c757d', lineHeight: '1.6', fontSize: '16px' }}>
                    {item.subTitle}
                  </p>
                  
                  <div className="cs_service_thumb position-relative cs_rounded_10 overflow-hidden" style={{ height: '200px' }}>
                    <a
                      href={item.href}
                      className="cs_service_btn d-flex align-items-center justify-content-center rounded-circle position-absolute text-white"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        zIndex: 3
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0}
                    >
                      <svg width={20} height={20} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8491 11.347C20.855 11.3381 20.8602 11.3289 20.8656 11.3198C20.8706 11.3114 20.8759 11.3032 20.8805 11.2946C20.8855 11.2853 20.8897 11.2757 20.8942 11.2663C20.8984 11.2573 20.9029 11.2484 20.9067 11.2392C20.9105 11.23 20.9136 11.2206 20.9169 11.2113C20.9205 11.2014 20.9243 11.1916 20.9274 11.1814C20.9302 11.1721 20.9322 11.1626 20.9346 11.1532C20.9372 11.1429 20.9401 11.1327 20.9422 11.1222C20.9444 11.1113 20.9456 11.1003 20.9472 11.0894C20.9485 11.0801 20.9503 11.0711 20.9512 11.0617C20.9532 11.0415 20.9543 11.0213 20.9543 11.001C20.9543 11.0007 20.9543 11.0004 20.9543 11.0001C20.9543 10.9998 20.9543 10.9994 20.9543 10.9991C20.9542 10.9789 20.9532 10.9586 20.9512 10.9384C20.9503 10.929 20.9485 10.92 20.9472 10.9108C20.9456 10.8998 20.9444 10.8888 20.9422 10.8779C20.9401 10.8674 20.9372 10.8572 20.9346 10.8469C20.9322 10.8375 20.9302 10.828 20.9274 10.8187C20.9243 10.8086 20.9205 10.7988 20.9169 10.7889C20.9136 10.7795 20.9105 10.7701 20.9067 10.7609C20.9029 10.7517 20.8984 10.7428 20.8941 10.7338C20.8897 10.7244 20.8855 10.7148 20.8805 10.7055C20.8759 10.6969 20.8706 10.6887 20.8656 10.6803C20.8602 10.6712 20.855 10.662 20.8491 10.6531C20.8428 10.6438 20.8359 10.635 20.8292 10.6261C20.8237 10.6187 20.8186 10.6112 20.8127 10.604C20.7996 10.588 20.7858 10.5727 20.7713 10.5581L15.026 4.81285C14.7819 4.56877 14.3862 4.56877 14.1421 4.81285C13.898 5.05692 13.898 5.45264 14.1421 5.69672L18.8204 10.375L0.88388 10.375C0.53871 10.375 0.258878 10.6548 0.258878 11C0.258878 11.3452 0.53871 11.625 0.88388 11.625L18.8204 11.625L14.1421 16.3033C13.8981 16.5474 13.8981 16.9431 14.1421 17.1872C14.3862 17.4312 14.7819 17.4313 15.026 17.1872L20.7713 11.442C20.7858 11.4274 20.7996 11.4121 20.8127 11.3962C20.8186 11.389 20.8237 11.3814 20.8292 11.374C20.8359 11.3651 20.8428 11.3563 20.8491 11.347Z" fill="currentColor"/>
                      </svg>
                    </a>
                    
                    {/* Lazy loaded image */}
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
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
          backgroundImage: 'url("/images/OurCoreServices.jpg")',
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
}
