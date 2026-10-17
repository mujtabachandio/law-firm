import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';

import { NavLink } from 'react-router-dom';

import Button from '../../Button';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';
import GoogleReviews from '../../GoogleReviews';

const serviceList = [
  { title: 'Constitutional Advocacy', href: '/service/constitutional-advocacy' },
  { title: 'Digital Case Management', href: '/service/digital-case-management' },
  { title: 'Lawcademics Division', href: '/service/lawcademics' },
  { title: 'Corporate Legal Support', href: '/service/corporate-legal-support' },
  { title: 'Lawconomic Solutions', href: '/service/lawconomic-solutions' },
  { title: 'Divorce Lawyer', href: '/service/divorce-lawyer' },
  { title: 'Child Custody', href: '/service/child-custody' },
  { title: 'Guardianship Lawyer', href: '/service/guardianship-lawyer', active: true },
  { title: 'Domestic Violence Lawyer', href: '/service/domestic-violence-lawyer' },
  { title: 'Property Lawyer', href: '/service/property-lawyer' },
  { title: 'Inheritance of Property', href: '/service/inheritance-of-property' },
  { title: 'Succession Certificate', href: '/service/succession-certificate' },
  { title: 'Criminal Lawyer', href: '/service/criminal-lawyer' },
  { title: 'Civil Lawyer', href: '/service/civil-lawyer' },
  { title: 'F.I.A Lawyer', href: '/service/fia-lawyer' },
  { title: 'Company Lawyer', href: '/service/company-lawyer' },
  { title: 'Company Registration', href: '/service/company-registration' },
  { title: 'Foundation Trust NGO', href: '/service/foundation-trust-ngo' },
  { title: 'Legal Notice', href: '/service/legal-notice' },
  { title: 'Documentation Lawyer', href: '/service/documentation-lawyer' },
  { title: 'Processor Server', href: '/service/processor-server' },
  { title: 'Asylum Lawyer', href: '/service/asylum-lawyer' },
  { title: 'Private Investigator', href: '/service/private-investigator' },
  { title: 'Legal Advisor', href: '/service/legal-advisor' },
];

const faqData = [
  {
    title: 'What is guardianship and when is it needed?',
    desc: 'Guardianship is a legal relationship where a court appoints someone to care for and make decisions for a person who cannot care for themselves. This is needed for minors without parents, adults with disabilities, or elderly individuals who cannot manage their affairs.',
  },
  {
    title: 'How do I become a legal guardian?',
    desc: 'To become a legal guardian, you must file a petition with the family court, provide evidence of the person\'s incapacity or need for protection, and demonstrate your suitability as a guardian. The court will evaluate your relationship, financial stability, and ability to provide care.',
  },
  {
    title: 'What are the responsibilities of a guardian?',
    desc: 'Guardians are responsible for the ward\'s personal care, medical decisions, education (for minors), financial management, and ensuring their safety and well-being. Guardians must act in the ward\'s best interests and provide regular reports to the court.',
  },
  {
    title: 'Can guardianship be contested?',
    desc: 'Yes, guardianship can be contested by family members or other interested parties who believe they would be better guardians or that guardianship is unnecessary. The court will hear all parties and make a decision based on the ward\'s best interests.',
  },
  {
    title: 'How long does guardianship last?',
    desc: 'Guardianship can be temporary or permanent. For minors, it typically lasts until they reach adulthood. For adults, it can be modified or terminated if the ward\'s condition improves or if the guardian is no longer suitable.',
  },
  {
    title: 'What about financial guardianship?',
    desc: 'Financial guardianship involves managing the ward\'s financial affairs, including assets, income, and expenses. Guardians must provide detailed accounting to the court and ensure the ward\'s financial resources are used for their benefit.',
  },
];

export default function GuardianshipLawyerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Guardianship Lawyer in Karachi | Legal Protection Experts</title>
        <meta
          name="description"
          content="Hire a guardianship lawyer in Karachi for minors, elderly and disability cases. We handle guardianship certificates, courts and inheritance matters."
        />
        <meta
          name="keywords"
          content="guardianship lawyer in Karachi, legal guardian lawyer Pakistan, minor guardianship lawyer, guardianship certificate Karachi, guardian court lawyer, inheritance guardianship lawyer, family law guardian Karachi, elderly guardianship lawyer, disability guardianship Pakistan, legal adoption lawyer Karachi, financial guardianship lawyer"
        />      </Helmet>
      <Breadcrumb title="Guardianship Lawyer" bgUrl="/images/Guardianship%20Lawyer.jpg" />




      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 cs_mb_lg_60">
              <div className="cs_service_list cs_mb_40">
                <div className="cs_fs_20 text-white text-uppercase bg-accent cs_pl_30 cs_pr_30 cs_pt_23 cs_pb_23 m-0">
                  All Legal Services
                </div>
                <ul className="m-0 cs_pl_30 cs_pr_30 cs_pt_30 cs_pb_30">
                  {serviceList?.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          isActive || item.active ? 'active' : ''
                        }
                      >
                        {item.title}
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_81_254)">
                            <path
                              d="M18.1846 18.6831C18.1846 19.0607 17.8786 19.3667 17.501 19.3667C17.1234 19.3667 16.8174 19.0607 16.8174 18.6831C16.8174 18.3055 17.1234 17.9995 17.501 17.9995C17.8786 17.9995 18.1846 18.3055 18.1846 18.6831Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cs_contact_info cs_style1">
                <div className="cs_contact_info_icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_81_254)">
                      <path
                        d="M18.1846 18.6831C18.1846 19.0607 17.8786 19.3667 17.501 19.3667C17.1234 19.3667 16.8174 19.0607 16.8174 18.6831C16.8174 18.3055 17.1234 17.9995 17.501 17.9995C17.8786 17.9995 18.1846 18.3055 18.1846 18.6831Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_81_254">
                        <rect width={60} height={60} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Guardianship Help?</div>
                <p className="text-white cs_mb_25">
                  Get expert guardianship legal representation and family law guidance.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Guardianship%20Lawyer.jpg"
                    alt="Guardianship Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Guardianship Lawyer in Karachi for Minors & Family Protection</h1>
                  <h4 className="text-accent cs_mb_20">Protecting Vulnerable Individuals & Family Rights</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    For families and business owners, ensuring the long-term security of minors and the proper 
                    management of estates is a common concern. Legal battles over the custody of children or the 
                    management of a deceased person's estate can last for years if not handled correctly at the 
                    outset. Consulting a guardianship attorney is the most effective way to prevent these issues.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    A guardianship attorney helps in the legal appointment of guardians and the creation of trusts 
                    or legal frameworks that protect the interests of those who cannot protect themselves. We represent 
                    clients in guardianship courts around Karachi and deal with guardianship certificates, legal 
                    adoption procedures, and guardianship matters related to inheritance. For business owners, our 
                    guardianship attorneys assist in drafting legal frameworks that protect their children's interests 
                    and ensure that business leadership transitions smoothly in unforeseen circumstances. This service 
                    is a cornerstone of legacy protection and the seamless transition of authority and assets.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Guardianship Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      Our guardianship services cover all aspects of protecting vulnerable individuals:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Guardianship Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Guardianship Petitions</li>
                            <li>Guardian Appointment Proceedings</li>
                            <li>Guardianship Certificates</li>
                            <li>Guardianship Contests</li>
                            <li>Guardianship Modifications</li>
                            <li>Guardianship Termination</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Related Legal Matters</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Financial Guardianship</li>
                            <li>Legal Adoption Procedures</li>
                            <li>Inheritance-Related Guardianship</li>
                            <li>Minor Guardianship</li>
                            <li>Elderly Guardianship</li>
                            <li>Disability Guardianship</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Guardianship Process</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We follow a systematic approach to establish and manage guardianship:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Initial Assessment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We assess the ward's needs, evaluate potential guardians, and determine the type of guardianship required.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Petition Preparation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We prepare comprehensive guardianship petitions with all required documentation and evidence.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Court Filing</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We file petitions in guardianship courts around Karachi and ensure all legal requirements are met.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Guardian Evaluation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We help demonstrate your suitability as a guardian through financial stability and capability assessments.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Court Representation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We represent you in guardianship court proceedings, advocating for the ward's best interests.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Ongoing Support</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We provide ongoing support for guardianship modifications, financial management, and compliance.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Guardianship Services?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Experienced in Guardianship Courts:</strong> We represent clients in guardianship courts around Karachi with deep knowledge of local procedures.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Compassionate Approach:</strong> We understand the sensitive nature of guardianship and handle each case with care and respect.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Comprehensive Services:</strong> From guardianship certificates to inheritance-related matters, we handle all aspects of guardianship.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Ward-Focused:</strong> The ward's best interests are always our top priority in every guardianship decision and proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section pt="110" ptLg="80" pb="110" pbLg="80" className="bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SectionHeadingStyle2
                sectionTitleUp="Frequently Asked Questions"
                sectionTitle="Common Questions About Guardianship"
                sectionSubTitle="Get answers to the most frequently asked questions about our guardianship legal services."
              />
            </div>
            <div className="col-lg-6">
              <Accordion data={faqData} />
            </div>
          </div>
        </div>
      </Section>

      
    
      {/* Google Reviews Section */}


      
    
      <GoogleReviews />


      
    
      


      
    
      {/* Contact Section Bottom */}
      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden"
        style={{ backgroundImage: 'url("/images/OurCoreServices.jpg")' }}
      >
        <ContactSectionBottom />
      </Section>
    </>
  );
} 