import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import TestimonialSection from '../../Section/TestimonialSection';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';

const CorporateLawPage = () => {
  const corporateLawServices = [
    {
      iconUrl: '/images/icons/service_icon_4.svg',
      title: 'Corporate Legal Support',
      subTitle: "From compliance to contract negotiation, our business law services are tailored for Pakistan's modern economy — especially startups and tech-enabled enterprises.",
      imgUrl: '/images/CorporateLegalSupport.jpg',
      href: '/service/corporate-legal-support',
    },
    {
      iconUrl: '/images/icons/service_icon_7.svg',
      title: 'Company Lawyer',
      subTitle: 'Comprehensive corporate legal services including business formation, compliance, and corporate governance.',
      imgUrl: '/images/Company%20Lawyer.jpg',
      href: '/service/company-lawyer',
    },
    {
      iconUrl: '/images/icons/service_icon_8.svg',
      title: 'Company Registration',
      subTitle: 'Complete business registration services including company formation, legal compliance, and corporate documentation.',
      imgUrl: '/images/Company%20Registration.jpg',
      href: '/service/company-registration',
    },
    {
      iconUrl: '/images/icons/service_icon_1.svg',
      title: 'Foundation Trust NGO',
      subTitle: 'Legal services for NGO registration, trust formation, and compliance with regulatory requirements.',
      imgUrl: '/images/Foundation%20Trust%20NGO.jpg',
      href: '/service/foundation-trust-ngo',
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
        <title>Corporate Law Service in Karachi | Expert Lawyers</title>
        <meta name="description" content="Professional Corporate Law Service in Karachi for company registration, compliance, contracts, and legal advisory. Trusted corporate lawyers." />
        <meta name="keywords" content="Corporate Law Service, Corporate Lawyers in Karachi, Company Registration Karachi, Business Legal Services Pakistan, Corporate Legal Advisory" />
      </Helmet>
      
      <Breadcrumb title="Corporate Legal Services" bgUrl="/images/CorporateLegalSupport.jpg" />
      
      {/* Introduction Section */}
      <Section pt="140" ptLg="80" pb="80" pbLg="50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cs_mb_60">
                <h1 className="cs_fs_48 cs_fw_700 cs_mb_30">
                  Reliable Corporate Law Service in Karachi
                </h1>
              </div>
              
              <div className="cs_mb_40">
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  We are aware of the challenges that newly established businesses must deal with, including shifting regulations, investor demands, intellectual property issues, employment regulations, contract conflicts, and risk management needs. Our business legal solutions are designed to solve these problems quickly, precisely, and strategically. Whether you require one-time legal support or continuing consultation, our team ensures your business moves forward without barriers. At Karachi Law Firms, we offer complete corporate legal assistance in Karachi, assisting companies in maintaining compliance, protection, and sustainable operations.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  In a fast-paced world like today, every firm, whether a startup, SME, or well-established organization, needs solid legal operations to function with confidence. Every client at Karachi Law Firms receives customized care backed by knowledgeable legal advice. Our services are made to satisfy the demands of Pakistan's contemporary economy, especially those that make use of digital platforms, technology, and creative business strategies.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_0" style={{ color: '#555', lineHeight: '1.8' }}>
                  We collaborate with corporate teams, founders, CEOs, directors, and shareholders to offer prompt legal counsel that avoids issues and improves operational effectiveness. We assist you in realizing the legal consequences of every choice, ensuring that your company's activities, contracts, and structure continues to be completely compatible with Pakistan's legal framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comprehensive Corporate Services Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Our Corporate Services"
            subTitle="Corporate Legal Support Designed for Modern Companies"
          />
          
          <div className="row cs_mb_40">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Corporate Formation & Management</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    The basis for long-term success is selecting the appropriate corporate structure. In order to ensure that your business is set up for expansion and legal stability, we assist you with company incorporation, partnership formation, shareholder agreements, governance frameworks, and SECP compliance.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Contract Drafting & Negotiation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Strong contracts reduce conflict, safeguard your rights, and establish stable business partnerships. NDAs, MoUs, vendor contracts, partnership agreements, commercial agreements, and service-level agreements are all drafted, reviewed, and negotiated by our team in accordance with your company's requirements.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Compliance with Regulations</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    The compliance environment in Pakistan is changing quickly for businesses. We help you stay compliant with labor codes, industry-specific laws, tax obligations, SECP regulations, and e-commerce regulations. Our compliance guidelines guarantee steady operating confidence while lowering risk as much as possible.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Protection of Intellectual Property</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Your creative assets and brand identification should be fully protected by the law. In order to keep your intellectual property safe, we handle trademark registrations, copyright protection, patent applications, license contracts, infringement lawsuits, and IP portfolio management.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Acquisitions and Mergers</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our M&A support guarantees seamless and transparent business transitions from due diligence to transaction documentation. We help you with negotiations, regulatory procedures, and risk assessments with total secrecy, whether you're buying, selling, or combining a business.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Occupational Law</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Clear regulations and proper employment procedures will shield your business from legal challenges. We support labor law compliance, employment contracts, HR policies, termination procedures, workplace safety regulations, and conflict resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Corporate Process Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Our Corporate Process"
            subTitle="Our systematic legal process provides security over time, compliance, and clarity"
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Analysis of Business Structure</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In order to suggest the best structure, governance model, and legal base, we evaluate your current or intended business model.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Audit of Legal Compliance</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    A comprehensive, 360° legal evaluation finds potential for improvement, hazards, and gaps in compliance.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Contract Development</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    To protect your interests, we draft contracts that are both strategically and legally solid.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Regulatory Instructions</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our staff makes sure your company is aware of and complies with all applicable laws.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Ongoing Legal Support</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We offer ongoing legal counsel to assist your business in overcoming obstacles as it expands.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Risk Management</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Your business is shielded from disagreements, liabilities, and operational challenges by our proactive risk management techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Corporate Intelligence and Integrated Services Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Corporate Intelligence and Integrated Legal Support"
            subTitle="In the competitive market of Karachi, information is power. We provide comprehensive legal solutions that bridge corporate and personal legal needs."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Corporate Intelligence and Private Investigation</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Many companies need more in-depth information than a CV can offer before making a high-stakes purchase or employing a key leader. In collaboration with investigative experts, Karachi Law Firms provides pre-employment screening for executive positions, due diligence on potential business partners, and internal investigations into asset misappropriation. By utilizing professional investigative services, we help you mitigate risks before they manifest into costly legal battles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Bridging Personal and Professional: Family Law for Business Leaders</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    The success of a business is often intrinsically linked to the stability of its leadership. We recognize that high-net-worth individuals and business owners often require specialized personal legal services to protect their legacy. If personal disputes arise, having a discreet and professional divorce lawyer is essential to prevent personal assets from becoming entangled with business equity. For long-term business continuity, our guardianship attorneys assist business owners in drafting legal frameworks that protect their children's interests and ensure smooth leadership transitions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">White-Collar Criminal Defense for Corporate Entities</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    White-collar crime or unexpected criminal allegations can halt a business's progress instantly. Protecting your board of directors and your company's assets requires expert criminal defense. At Karachi Law Firms, we pride ourselves on a defense team that understands the nuances of the Pakistan Penal Code. Whether it is defending against fraud charges or handling internal embezzlement cases, our legal team provides a vigorous defense to ensure that justice is served and the business's integrity is upheld.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">One-Stop Legal Solution</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Karachi Law Firms is engineered to be a one-stop solution for all your legal needs. Our reputation as one of the best law firms in Karachi is built on a commitment to our clients' growth and a deep understanding of the local legal ecosystem. We don't just react to problems; we anticipate them. Our proactive approach to corporate law, combined with our specialized expertise as guardianship attorneys and criminal defense experts, makes us the most versatile agency for your legal needs.
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
            title="Why Choose Our Corporate Legal Services?"
            subTitle="Selecting Karachi Law Firms involves collaborating with a committed group of professionals who are aware of both the particular requirements of contemporary businesses and Pakistan's legal system."
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Proactive</h3>
                <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We protect your company in advance by foreseeing any legal issues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Strategic</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Your business plans, expansion goals, and operational requirements are all in line with our legal strategy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Functional</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We provide practical, workable solutions to help you make everyday business decisions.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Economical</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our services are made to provide the highest level of security without taxing your finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-lg-12">
              <div style={{ background: '#1B365D', padding: '30px', borderRadius: '10px', color: 'white' }}>
                <p className="cs_fs_18 cs_lh_lg m-0" style={{ lineHeight: '1.8' }}>
                  <strong>Our corporate legal team helps you make decisions that are both commercially advantageous and legally sound by fusing technical legal expertise with real-world business acumen.</strong> Besides resolving legal problems, Karachi Law Firms enables your company to expand with confidence and clarity. Our experience guarantees that you stay safe, compliant, and ahead of legal issues, whether you're starting a business, growing it, or overseeing a corporate entity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Cards Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            {corporateLawServices.map((item, index) => (
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
            subTitle="Get answers to common questions about our corporate legal services"
          />
          
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Accordion data={[
                {
                  title: 'What corporate legal services do you offer?',
                  desc: 'We offer comprehensive corporate legal services including company formation & management, contract drafting & negotiation, regulatory compliance, intellectual property protection, mergers & acquisitions, and employment law services.'
                },
                {
                  title: 'How long does company registration take?',
                  desc: 'Company registration typically takes 2-4 weeks depending on the type of entity, SECP requirements, and completeness of documentation. We expedite the process by ensuring all requirements are met upfront.'
                },
                {
                  title: 'Do you help with SECP compliance?',
                  desc: 'Yes, we provide comprehensive SECP compliance services including company registration, annual filings, corporate governance, shareholder agreements, and ongoing regulatory compliance support.'
                },
                {
                  title: 'What types of contracts do you draft?',
                  desc: 'We draft and review various business contracts including NDAs, MoUs, vendor contracts, partnership agreements, commercial agreements, service-level agreements, employment contracts, and licensing agreements.'
                },
                {
                  title: 'How do you protect intellectual property?',
                  desc: 'We handle trademark registrations, copyright protection, patent applications, license contracts, infringement lawsuits, and IP portfolio management to fully protect your creative assets and brand identity.'
                },
                {
                  title: 'Do you provide ongoing legal support?',
                  desc: 'Yes, we offer ongoing legal counsel to assist your business in overcoming obstacles as it expands. This includes regular compliance reviews, contract updates, risk assessments, and strategic legal advice.'
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
          backgroundImage: 'url("/images/CorporateLegalSupport.jpg")',
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

export default CorporateLawPage;
