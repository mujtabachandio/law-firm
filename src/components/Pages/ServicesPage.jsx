import { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import BrandSection from '../Section/BrandSection';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Constitutional Advocacy',
    subTitle:
      'We stand where it matters most — defending civil liberties, minority rights, and democratic principles. Our team specializes in high-impact constitutional litigation.',
    imgUrl: '/images/Constitutional-Advocacy.JPG',
    href: '/service/constitutional-advocacy',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Digital Case Management',
    subTitle:
      'Track your legal case in real time, securely share documents, and get consistent updates — all from your phone or computer.',
    imgUrl: '/images/DigitalCaseManagement.jpg',
    href: '/service/digital-case-management',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Lawcademics Division',
    subTitle:
      'Where legal practice meets legal theory. Our research-backed legal arguments and academic publications support our court strategy.',
    imgUrl: '/images/LawcademicsDivision.jpg',
    href: '/service/lawcademics',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Corporate Legal Support',
    subTitle:
      "From compliance to contract negotiation, our business law services are tailored for Pakistan's modern economy — especially startups and tech-enabled enterprises.",
    imgUrl: '/images/CorporateLegalSupport.jpg',
    href: '/service/corporate-legal-support',
  },
  {
    iconUrl: '/images/icons/service_icon_5.svg',
    title: 'Lawconomic Solutions',
    subTitle:
      'Transparent pricing, flexible payment plans, and subsidized services ensure that justice is never out of financial reach.',
    imgUrl: '/images/Lawconomic Solutions.jpg',
    href: '/service/lawconomic-solutions',
  },
  {
    iconUrl: '/images/icons/service_icon_6.svg',
    title: 'Divorce Lawyer',
    subTitle:
      'Expert family law representation for divorce proceedings, property division, and alimony arrangements with compassionate legal guidance.',
    imgUrl: '/images/Divorce Lawyer.jpg',
    href: '/service/divorce-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_7.svg',
    title: 'Child Custody',
    subTitle:
      'Specialized legal services for child custody arrangements, visitation rights, and family law matters with child-focused approach.',
    imgUrl: '/images/Child Custody.jpg',
    href: '/service/child-custody',
  },
  {
    iconUrl: '/images/icons/service_icon_8.svg',
    title: 'Guardianship Lawyer',
    subTitle:
      'Legal assistance for guardianship proceedings, conservatorship matters, and protection of vulnerable individuals.',
    imgUrl: '/images/Guardianship Lawyer.jpg',
    href: '/service/guardianship-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_9.svg',
    title: 'Domestic Violence Lawyer',
    subTitle:
      'Compassionate legal representation for domestic violence cases, protection orders, and family safety matters.',
    imgUrl: '/images/Domestic Violence Lawyer.jpg',
    href: '/service/domestic-violence-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_10.svg',
    title: 'Property Lawyer',
    subTitle:
      'Comprehensive real estate legal services including property disputes, land acquisition, and real estate transaction documentation.',
    imgUrl: '/images/Property Lawyer.jpg',
    href: '/service/property-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_11.svg',
    title: 'Inheritance of Property',
    subTitle:
      'Specialized legal services for inheritance disputes, property distribution, and estate settlement matters.',
    imgUrl: '/images/Inheritance of Property.jpg',
    href: '/service/inheritance-of-property',
  },
  {
    iconUrl: '/images/icons/service_icon_12.svg',
    title: 'Succession Certificate',
    subTitle:
      'Expert legal assistance for succession certificate applications, inheritance matters, and estate planning.',
    imgUrl: '/images/Succession Certificate.jpg',
    href: '/service/succession-certificate',
  },
  {
    iconUrl: '/images/icons/service_icon_13.svg',
    title: 'Criminal Lawyer',
    subTitle:
      'Experienced criminal defense attorneys providing aggressive representation for all types of criminal cases and legal proceedings.',
    imgUrl: '/images/Criminal Lawyer.jpg',
    href: '/service/criminal-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_14.svg',
    title: 'Civil Lawyer',
    subTitle:
      'Expert civil litigation representation for disputes, contract matters, and civil legal proceedings.',
    imgUrl: '/images/Civil Lawyer.jpg',
    href: '/service/civil-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_15.svg',
    title: 'F.I.A Lawyer',
    subTitle:
      'Specialized representation for Federal Investigation Agency cases, white-collar crimes, and federal legal proceedings.',
    imgUrl: '/images/F.I.A Lawyer.jpg',
    href: '/service/fia-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_16.svg',
    title: 'Company Lawyer',
    subTitle:
      'Comprehensive corporate legal services including business formation, compliance, and corporate governance.',
    imgUrl: '/images/Company Lawyer.jpg',
    href: '/service/company-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_17.svg',
    title: 'Company Registration',
    subTitle:
      'Complete business registration services including company formation, legal compliance, and corporate documentation.',
    imgUrl: '/images/Company Registration.jpg',
    href: '/service/company-registration',
  },
  {
    iconUrl: '/images/icons/service_icon_18.svg',
    title: 'Foundation Trust NGO',
    subTitle:
      'Legal services for NGO registration, trust formation, and compliance with regulatory requirements.',
    imgUrl: '/images/Foundation Trust NGO.jpg',
    href: '/service/foundation-trust-ngo',
  },
  {
    iconUrl: '/images/icons/service_icon_19.svg',
    title: 'Legal Notice',
    subTitle:
      'Professional legal notice drafting and serving services for various legal matters and dispute resolution.',
    imgUrl: '/images/Legal Notice.jpg',
    href: '/service/legal-notice',
  },
  {
    iconUrl: '/images/icons/service_icon_20.svg',
    title: 'Documentation Lawyer',
    subTitle:
      'Professional legal documentation services including contract drafting, legal agreements, and document review.',
    imgUrl: '/images/Documentation Lawyer.jpg',
    href: '/service/documentation-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_21.svg',
    title: 'Processor Server',
    subTitle:
      'Legal process serving services for court documents, legal notices, and official document delivery.',
    imgUrl: '/images/Processor Server.jpg',
    href: '/service/processor-server',
  },
  {
    iconUrl: '/images/icons/service_icon_22.svg',
    title: 'Asylum Lawyer',
    subTitle:
      'Expert legal representation for asylum applications, refugee status, and immigration law matters.',
    imgUrl: '/images/Asylum Lawyer.jpg',
    href: '/service/asylum-lawyer',
  },
  {
    iconUrl: '/images/icons/service_icon_23.svg',
    title: 'Private Investigator',
    subTitle:
      'Legal investigation services for evidence gathering, background checks, and investigative support for legal cases.',
    imgUrl: '/images/Private Investigator.jpg',
    href: '/service/private-investigator',
  },
  {
    iconUrl: '/images/icons/service_icon_24.svg',
    title: 'Legal Advisor',
    subTitle:
      'Comprehensive legal advisory services for individuals and businesses with strategic legal guidance.',
    imgUrl: '/images/Legal Advisor.jpg',
    href: '/service/legal-advisor',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
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
  const [visibleServices, setVisibleServices] = useState(8); // Show first 8 services initially
  const [isLoading, setIsLoading] = useState(false);

  pageTitle('Legal Services - Karachi Law Firms');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleServices(prev => Math.min(prev + 8, serviceData.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedServices = serviceData.slice(0, visibleServices);
  const hasMoreServices = visibleServices < serviceData.length;

  return (
    <>
      <Breadcrumb title="Our Legal Services" bgUrl="/images/OurCoreServices.jpg" />

      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cs_mb_60">
                <h6 className="cs_fs_14 cs_fw_600 cs_primary_color cs_mb_15">
                  Comprehensive Legal Solutions
                </h6>
                <h2 className="cs_fs_48 cs_fw_700 cs_mb_20">
                  Expert Legal Services <br />For Every Need
                </h2>
                <p className="cs_fs_18 cs_mb_0">
                  From constitutional advocacy to family law, corporate matters to criminal defense, we provide comprehensive legal solutions with transparency, expertise, and dedication to justice.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {displayedServices.map((item, index) => (
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
          
          {/* Load More Button */}
          {hasMoreServices && (
            <div className="row">
              <div className="col-lg-12 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="btn btn-primary btn-lg"
                  style={{
                    background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '50px',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(27, 54, 93, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(27, 54, 93, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(27, 54, 93, 0.3)';
                  }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Loading...
                    </>
                  ) : (
                    `Load More Services (${visibleServices}/${serviceData.length})`
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </Section>

      <Section pt="110" ptLg="80" pb="110" pbLg="80" className="bg-gray">
        <BrandSection data={brandData} />
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
    </>
  );
}
