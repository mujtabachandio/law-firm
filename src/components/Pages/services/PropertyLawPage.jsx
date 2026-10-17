import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import TestimonialSection from '../../Section/TestimonialSection';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';

const PropertyLawPage = () => {
  const propertyLawServices = [
    {
      iconUrl: '/images/icons/service_icon_1.svg',
      title: 'Property Lawyer',
      subTitle: 'Comprehensive real estate legal services including property disputes, land acquisition, and real estate transaction documentation.',
      imgUrl: '/images/Property%20Lawyer.jpg',
      href: '/service/property-lawyer',
    },
    {
      iconUrl: '/images/icons/service_icon_2.svg',
      title: 'Inheritance of Property',
      subTitle: 'Specialized legal services for inheritance disputes, property distribution, and estate settlement matters.',
      imgUrl: '/images/Inheritance%20of%20Property.jpg',
      href: '/service/inheritance-of-property',
    },
    {
      iconUrl: '/images/icons/service_icon_3.svg',
      title: 'Succession Certificate',
      subTitle: 'Expert legal assistance for succession certificate applications, inheritance matters, and estate planning.',
      imgUrl: '/images/Succession%20Certificate.jpg',
      href: '/service/succession-certificate',
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
        <title>Professional Property Law Service for Secure Deals</title>
        <meta name="description" content="Get reliable Property Law Service in Karachi for buying, selling, disputes, and legal paperwork. Experienced property lawyers ready to help." />
        <meta name="keywords" content="Property Law Service, Karachi Property Lawyer, Property Dispute Legal Help, Real Estate Law Karachi, Property Transfer Lawyer" />
      </Helmet>
      
      <Breadcrumb title="Property & Real Estate Services" bgUrl="/images/Property%20Lawyer.jpg" />

      {/* Introduction Section */}
      <Section pt="140" ptLg="80" pb="80" pbLg="50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cs_mb_60">
                <h1 className="cs_fs_48 cs_fw_700 cs_mb_30">
                  Best Property Law Service in Karachi
                </h1>
              </div>
              
              <div className="cs_mb_40">
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  Property disputes are one of the most confidential and crucial matters. These matters can quickly 
                  become stressful, time-consuming, and financially draining regardless of whether the property is an 
                  inherited plot, a business building, or a family home. Our experienced property attorneys at Karachi 
                  Law Firms offer strategic, dependable, and goal-oriented legal assistance to safeguard your ownership 
                  and investments.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  We are aware of the complexity of Pakistani real estate regulations. Strong legal preparation, 
                  evidence, and courtroom experience are necessary in property lawsuits, that include everything from 
                  disputed registers to illegal possession, fake documents, rent disputes, and inheritance-related 
                  claims. Our committed staff helps clients overcome these obstacles by providing a methodical, open, 
                  and effective legal process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Complete Legal Services Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Complete Legal Services for Real Estate"
            subTitle="We provide comprehensive property and real estate legal assistance in Karachi to individuals, families, companies, and Pakistanis living abroad."
          />
          
          <div className="row cs_mb_40">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Resolution of Property Disputes</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We settle disagreements about inheritance shares, boundaries, encroachments, fraudulent transfers, ownership, and possession. When necessary, our attorneys negotiate settlements and strongly advocate for clients in court.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Verification of Ownership</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Verifying ownership is essential before purchasing or investing in any real estate. To make sure the property is free from legal risk, we check title documents, mutation records, tax receipts, and registry information.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Property Fraud Incidents</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We deal with situations involving fraudulent possession, unlawful transfers, multiple transactions, faked signatures, and phony registries. To retrieve your property, our team pursues both criminal and civil actions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Tenant-Landlord Conflicts</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We provide both landlords and tenants with legally sound remedies and court representation under Pakistani rent laws, from rent default and illegal eviction attempts to tenancy agreement violations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">5</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Transactions in Real Estate</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We oversee transfer procedures, perform due research, design and review agreements, and make sure your sales, purchases, or leases comply with all legal requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">6</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Property Documentation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We help with lease agreements, succession certificates, power of attorney, register, mutation (fard), and joint ownership paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Legal Process Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Our Legal Process for Property Cases"
            subTitle="Our every case is guaranteed to be transparent, professional, and have a solid legal framework."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Case Assessment</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    To decide the appropriate course of action, we examine the specifics of your case, property documents, and the nature of the dispute.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Evidence Control</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Registries, tax receipts, agreements, photos, maps, witness statements, and any other evidence needed in court or during negotiations are all included in this.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Legal Investigation and Confirmation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We verify official land records, perform a thorough legal analysis, and evaluate the case's advantages and disadvantages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Negotiation Effort</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    To reduce time, expense, and emotional strain, we try to reach an out-of-court settlement where it seems feasible. Legal documentation is used to guarantee the enforceability of settlements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">5</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Legal Representation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We file the proper civil or rent lawsuit and represent you during the procedures if a settlement is not possible.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">6</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Recovery and Enforcement of Property</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We make sure that court orders are carried out, that illegal occupants are removed, that possession is recovered, and that decrees are enforced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose KLF Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Why Choose Karachi Law Firms for Property Matters?"
            subTitle="Your long-term financial stability and peace of mind may be impacted by property disputes. That's why, at KLF your case is handled with dedication, diligence, and legal accuracy."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Trained Real Estate & Property Attorneys</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our team has a great deal of expertise dealing with inheritance-based claims, fraudulent transactions, tenant litigation, and complicated property disputes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Local Knowledge, Worldwide Assistance</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our area of expertise is helping Pakistanis living abroad who are dealing with fraud, illegal possession, or family property disputes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Full-Service Legal Approach</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We integrate legal expertise, property verification abilities, and a hands-on comprehension of Karachi's land and real estate laws.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Clear Communication</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    At every step, clients receive clear legal instructions, documented assistance, and frequent updates.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Solid Legal Representation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In civil courts, property hearings, revenue boards, and other pertinent land authorities, our attorneys represent clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Cards Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            {propertyLawServices.map((item, index) => (
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

      {/* FAQs Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Frequently Asked Questions"
            subTitle="Get answers to common questions about our property and real estate legal services"
          />
          
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Accordion data={[
                {
                  title: 'What kinds of property issues do you resolve?',
                  desc: 'KLF handles any ownership disputes, fraud transfers, property disputes, illegal possession, inheritance claims, and real estate paperwork issues for residential, commercial, and agricultural properties. We provide comprehensive legal assistance for all property-related matters.'
                },
                {
                  title: 'How do you deal with cases of property fraud?',
                  desc: 'We make sure to verify original land records, obtaining evidence of fraud, filing civil and criminal complaints, obtaining the revocation of fraudulent documents, and attempting to regain possession or ownership through proper legal actions. Our team pursues both criminal and civil actions to retrieve your property.'
                },
                {
                  title: 'Do you offer services to Pakistanis living abroad?',
                  desc: 'Yes, we help foreign clients with verification, paperwork, unlawful occupation, conflict settlement, and court representation through legitimate power of attorney. Our area of expertise is helping Pakistanis living abroad who are dealing with fraud, illegal possession, or family property disputes.'
                },
                {
                  title: 'What is property ownership verification?',
                  desc: 'Verifying ownership is essential before purchasing or investing in any real estate. We check title documents, mutation records, tax receipts, and registry information to make sure the property is free from legal risk. This helps prevent future disputes and protects your investment.'
                },
                {
                  title: 'How do you handle tenant-landlord disputes?',
                  desc: 'We provide both landlords and tenants with legally sound remedies and court representation under Pakistani rent laws. We handle rent default, illegal eviction attempts, tenancy agreement violations, and all other tenant-landlord conflicts with expertise and fairness.'
                },
                {
                  title: 'What documents are needed for property transactions?',
                  desc: 'We help with lease agreements, succession certificates, power of attorney, register, mutation (fard), and joint ownership paperwork. We oversee transfer procedures, perform due research, design and review agreements, and ensure your sales, purchases, or leases comply with all legal requirements.'
                }
              ]} />
            </div>
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
          backgroundImage: 'url("/images/Property%20Lawyer.jpg")',
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

export default PropertyLawPage;
