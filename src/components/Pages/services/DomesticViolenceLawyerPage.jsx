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
  { title: 'Guardianship Lawyer', href: '/service/guardianship-lawyer' },
  { title: 'Domestic Violence Lawyer', href: '/service/domestic-violence-lawyer', active: true },
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
    title: 'What constitutes domestic violence under Pakistani law?',
    desc: 'Domestic violence includes physical abuse, emotional abuse, financial abuse, sexual abuse, and psychological manipulation. The Domestic Violence (Prevention and Protection) Act provides comprehensive protection for victims of domestic violence.',
  },
  {
    title: 'How can I get immediate protection from domestic violence?',
    desc: 'You can file for a protection order with the family court, which can provide immediate relief including restraining orders, temporary custody, and financial support. We can help you file emergency petitions for immediate protection.',
  },
  {
    title: 'What evidence do I need for a domestic violence case?',
    desc: 'Evidence can include medical reports, police reports, photographs, witness statements, text messages, emails, and any documentation of the abuse. We help you gather and present evidence effectively in court.',
  },
  {
    title: 'Can I get financial support during the case?',
    desc: 'Yes, you can seek maintenance and financial support from the abuser during the legal proceedings. The court can order temporary financial support to help you maintain your independence and safety.',
  },
  {
    title: 'What about child custody in domestic violence cases?',
    desc: 'In domestic violence cases, the court prioritizes the safety of children and the victim. We advocate for protective custody arrangements that ensure the children\'s safety while maintaining their relationship with the non-abusive parent.',
  },
  {
    title: 'How long do domestic violence cases take?',
    desc: 'Domestic violence cases can be expedited for urgent protection orders. The timeline varies based on case complexity, but we work to resolve cases as quickly as possible while ensuring your safety and rights are protected.',
  },
];

export default function DomesticViolenceLawyerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Domestic Violence Lawyer in Karachi | Immediate Legal Help</title>
        <meta
          name="description"
          content="Need a domestic violence lawyer in Karachi? Get urgent legal protection, residence orders, restraining orders and court support under Pakistani law."
        />
        <meta
          name="keywords"
          content="domestic violence lawyer in Karachi, protection order lawyer Pakistan, family violence lawyer Karachi, residence order lawyer, restraining order lawyer Karachi, domestic abuse legal help, child protection order lawyer, family court violence cases, harassment lawyer Karachi, criminal family law lawyer, domestic violence law Pakistan"
        />      </Helmet>
      <Breadcrumb title="Domestic Violence Lawyer" bgUrl="/images/Domestic Violence%20Lawyer.jpg" />




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
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Protection Help?</div>
                <p className="text-white cs_mb_25">
                  Get immediate legal protection and support for domestic violence cases.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Domestic Violence%20Lawyer.jpg"
                    alt="Domestic Violence Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Domestic Violence Lawyer in Karachi for Immediate Legal Protection</h1>
                  <h4 className="text-accent cs_mb_20">Immediate Protection & Legal Support</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Unfortunately, family disputes can sometimes escalate into allegations of harassment, domestic 
                    violence, or financial fraud. In such cases, the boundaries between family and criminal law blur. 
                    Domestic violence cases require immediate attention and compassionate legal representation.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Our family lawyers file residence orders, protection orders, and complaints under existing 
                    Pakistani legislation to help victims of domestic abuse. If a family dispute results in false 
                    criminal accusations or if there is a need to file charges for protection, you require specialized 
                    legal assistance. We provide urgent legal protection, helping you obtain protection orders, secure 
                    your safety, and navigate the legal system with dignity and support. Our priority is your safety 
                    and well-being, ensuring that family court matters do not unfairly lead to criminal records while 
                    protecting your reputation and freedom during heated domestic battles.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Protection Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We provide immediate legal protection and support for victims of domestic violence:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Protection Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Emergency Protection Orders</li>
                            <li>Residence Orders</li>
                            <li>Restraining Orders</li>
                            <li>Safety Planning</li>
                            <li>Child Protection Orders</li>
                            <li>Complaint Filing</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Legal Support</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Criminal Charges Assistance</li>
                            <li>Financial Support Claims</li>
                            <li>Evidence Collection</li>
                            <li>Court Representation</li>
                            <li>Order Enforcement</li>
                            <li>Ongoing Legal Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Protection Process</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We act quickly to ensure your immediate safety and long-term protection:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Immediate Safety Assessment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We assess your immediate safety needs and provide guidance on securing your protection.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Emergency Petition Filing</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We file emergency petitions for protection orders and residence orders immediately.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Protection Order Obtainment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We work to obtain protection orders under Pakistani legislation to ensure your safety.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Evidence Collection</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We help gather medical reports, witness statements, and documentation to support your case.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Court Representation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We represent you in court proceedings, filing complaints and advocating for your protection.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Ongoing Support</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We provide ongoing support for order enforcement, financial claims, and long-term safety planning.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Domestic Violence Protection?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Immediate Response:</strong> We understand the urgency of domestic violence cases and act quickly to secure your protection.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Compassionate Support:</strong> We provide sensitive, respectful legal representation during this difficult time.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Comprehensive Protection:</strong> We file residence orders, protection orders, and complaints under Pakistani legislation.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Safety First:</strong> Your safety and well-being are our top priorities in every decision and action we take.
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
                sectionTitle="Common Questions About Domestic Violence"
                sectionSubTitle="Get answers to the most frequently asked questions about our domestic violence legal services."
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