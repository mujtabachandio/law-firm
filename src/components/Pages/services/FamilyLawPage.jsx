import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import TestimonialSection from '../../Section/TestimonialSection';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';

const FamilyLawPage = () => {
  const familyLawServices = [
  {
      iconUrl: '/images/icons/service_icon_6.svg',
    title: 'Divorce Lawyer',
      subTitle: 'Expert family law representation for divorce proceedings, property division, and alimony arrangements with compassionate legal guidance.',
      imgUrl: '/images/Divorce%20Lawyer.jpg',
    href: '/service/divorce-lawyer',
  },
  {
      iconUrl: '/images/icons/service_icon_7.svg',
    title: 'Child Custody',
      subTitle: 'Specialized legal services for child custody arrangements, visitation rights, and family law matters with child-focused approach.',
      imgUrl: '/images/Child%20Custody.jpg',
    href: '/service/child-custody',
  },
  {
      iconUrl: '/images/icons/service_icon_8.svg',
    title: 'Guardianship Lawyer',
      subTitle: 'Legal assistance for guardianship proceedings, conservatorship matters, and protection of vulnerable individuals.',
      imgUrl: '/images/Guardianship%20Lawyer.jpg',
    href: '/service/guardianship-lawyer',
  },
  {
      iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Domestic Violence Lawyer',
      subTitle: 'Compassionate legal representation for domestic violence cases, protection orders, and family safety matters.',
      imgUrl: '/images/Domestic%20Violence%20Lawyer.jpg',
    href: '/service/domestic-violence-lawyer',
    },
    {
      iconUrl: '/images/icons/service_icon_6.svg',
      title: 'Maintenance & Reconciliation',
      subTitle: 'Comprehensive support for maintenance matters and reconciliation services under Pakistani law.',
      imgUrl: '/images/Family-Law-Services.jpg',
      href: '/service/maintenance-reconciliation',
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
        <title>Best Family Lawyer in Karachi, Family Law Services</title>
        <meta name="description" content="Professional family lawyer in Karachi providing complete family law services. Get expert legal assistance for divorce, child custody and family issues. Call now!" />
        <meta name="keywords" content="family lawyer in Karachi, Family lawyer, Family Law, Best family lawyer in Karachi, Family Law Services, Family Law Services in Karachi" />
      </Helmet>
      
      <Breadcrumb title="Family Law Services" bgUrl="/images/Family-Law-Services.jpg" />

      {/* Introduction Section */}
      <Section pt="140" ptLg="80" pb="80" pbLg="50">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="text-center cs_mb_60">
                <h1 className="cs_fs_48 cs_fw_700 cs_mb_30">
                    Expert Family Lawyer in Karachi for Divorce & Child Custody
                  </h1>
              </div>
              
              <div className="cs_mb_40">
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  Family conflicts can be both legally and emotionally draining. Marriage, children, property, and personal rights are all examples of family matters that need to be handled delicately, discreetly, and expertly. For divorce, child custody, maintenance, khula, guardianship, and all other family-related matters, our skilled family lawyers at Karachi Law Firms offer trustworthy legal counsel and clear assistance.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  We have an understanding of the severity and delicate nature of family issues. Every case has an impact on people's relationships, personal lives, and future wellbeing, particularly that of children. For this reason, each case is handled by our staff with professionalism, care, and absolute privacy.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_0" style={{ color: '#555', lineHeight: '1.8' }}>
                  Our aim is to assist our clients in settling conflicts peacefully wherever feasible, but when legal action is required, we will stand firm with them in court. With years of experience in Pakistani family courts, we make sure your voice is heard and your rights are upheld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comprehensive Family Law Services Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Comprehensive Family Law Services in Karachi"
            subTitle="Karachi Law Firms offers comprehensive legal services for any family law issue. Our variety of services guarantees that each customer gets strong customized legal counsel and solutions."
          />
          
          <div className="row cs_mb_40">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Representation of Divorce</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We deal with both mutual divorce (Mubarat) and unilateral divorce (Talaq). Throughout the divorce process, our attorneys prepare notices, finish paperwork, represent clients in Union Council proceedings, and guarantee legal compliance.
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Khula Situations</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We help women who want to get a divorce file khula applications, prepare supporting documentation, make good arguments in court, and make sure the legal process goes smoothly.
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Cases of Child Custody</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Strong legal arguments and an emphasis on the child's best interests are necessary in child custody cases. Our attorneys ensure that your parental rights are completely upheld by representing clients in Guardian & Wards Act custody and visitation proceedings.
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Child Care and Financial Assistance</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In addition to financial assessments, proof preparation, and court representation, we assist clients in filing or defending support claims for spouses and children.
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Protection Orders & Domestic Violence</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our family lawyers file residence orders, protection orders, and complaints under existing Pakistani legislation to help victims of domestic abuse.
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Adoption and Guardianship Issues</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We represent clients in guardianship courts around Karachi and deal with guardianship certificates, legal adoption procedures, and guardianship matters related to inheritance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">7</span>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Nikahnama Issues & Matrimonial Records</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We help with nikah agreement drafting, clause review, nikahnama dispute resolution, and dowry, dower (haq mehr), and marriage registration issues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">8</span>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Inheritance and Property Rights in Families</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Court petitions and legal papers are used to carefully handle succession issues, inheritance distributions, and family property conflicts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Procedure Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Our Procedure for Family Law"
            subTitle="From beginning to end, our methodical legal procedure guarantees clarity, effectiveness, and solid representation."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Consultation and Comprehension of Cases</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We start with a thorough conversation to comprehend your circumstances, emotional worries, and legal goals.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Examining Documents and Collecting Evidence</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We examine bank records, correspondence, nikahnama, children's records, and other supporting documentation.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Development of Legal Research and Strategies</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Each case is different. Depending on whether the issue calls for court representation, negotiation, or immediate legal action, we create a personalized legal plan.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Filing and Representation in Court</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We draft petitions, file paperwork in family courts, attend hearings on behalf of clients, and complete all legal processes.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Resolution, Settlement, and Mediation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We try to assist peaceful solutions whenever we can, which lowers costs and mental strain for all parties.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Final Purchases & Aftercare</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We make sure that the court's orders about custody, maintenance, divorce certificates, and any other long-term legal needs are followed.
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
            title="Why Choose KLF for Family Law?"
            subTitle="We at Karachi Law Firms are dedicated to assisting people in overcoming challenging family situations with courage, clarity, and assurance."
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Skilled Family Lawyers</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In Karachi, our team has dealt with hundreds of family cases, including difficult divorces and delicate custody disputes.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Respectful & Confidential Management</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Trust is necessary in family issues. Every conversation is kept confidential, and each case is handled with respect and compassion.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Strong Defense in Family Courts</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our attorneys are knowledgeable in successful legal tactics, judges' expectations, and family court procedures.
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
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Fast Filing & Documentation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We effectively handle all documentation to prevent unnecessary delays.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Client-Centric Method</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Your long-term interests, legal rights, and emotional health are our top priorities, particularly when it comes to children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Multi-Disciplinary Approach Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Comprehensive Family Law Support: Beyond the Courtroom"
            subTitle="Family disputes can sometimes escalate beyond traditional family law matters. Karachi Law Firms provides comprehensive support by integrating specialized services when needed."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">When Family Disputes Escalate to Criminal Matters</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Unfortunately, family disputes can sometimes escalate into allegations of harassment, domestic violence, or financial fraud. In such cases, the boundaries between family and criminal law blur. If a family dispute results in false criminal accusations or if there is a need to file charges for protection, you require specialized criminal defense. Our team includes the best criminal lawyers in Karachi who ensure that family court matters do not unfairly lead to criminal records, protecting your reputation and freedom during heated domestic battles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Cyber-Harassment and FIA Legal Support</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In the digital age, many family disputes involve cyber-harassment or unauthorized access of personal data. If a spouse uses digital means to harass or defame the other, specialized FIA legal support becomes vital. The Federal Investigation Agency (FIA) handles cybercrimes, and our specialized FIA lawyers can help you file complaints or defend against digital misconduct allegations, ensuring your digital rights are protected throughout your family law matter.
                  </p>
                </div>
              </div>
            </div>
            
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Investigation Services for Asset Discovery</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In high-net-worth family disputes, parties often attempt to hide assets or misrepresent their financial standing. To ensure a fair division of property or to prove a spouse's lifestyle for alimony purposes, we leverage the services of professional private detectives. Our investigative team can uncover hidden bank accounts, real estate holdings, evidence of undisclosed employment, and background information relevant to child custody fitness, providing a level of evidence that standard law firms may overlook.
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
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Seamless Integration of Services</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Karachi Law Firms provides a multi-disciplinary approach to family law, ensuring that every angle of your case is covered. Whether you need the expertise of our criminal defense team, FIA legal specialists, private investigative services, or traditional family law representation, we seamlessly integrate these services to provide comprehensive protection for you and your family throughout the entire legal process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Cards Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
            <div className="row">
            {familyLawServices.map((item, index) => (
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
            subTitle="Get answers to common questions about our family law services"
          />
          
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Accordion data={[
                {
                  title: 'What kinds of family cases do you deal with?',
                  desc: 'We take care of divorce, khula, child custody, child maintenance, guardianship, adoption, nikahnama, dowry, and inheritance disputes.'
                },
                {
                  title: 'What is the duration of a divorce or khula lawsuit in Karachi?',
                  desc: 'Mubarat, or mutual divorce, can be finalized in a few weeks. Khula cases often take three to six months, depending on the amount of paperwork and court activity.'
                },
                {
                  title: 'What paperwork is needed in family law cases?',
                  desc: 'Nikahnama, CNIC, child B-Forms, financial evidence, letters, affidavits, marriage licenses, and any other supporting documentation.'
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
          backgroundImage: 'url("/images/Family%20Law.jpg")',
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

export default FamilyLawPage;