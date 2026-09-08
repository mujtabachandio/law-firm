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
  { title: 'Domestic Violence Lawyer', href: '/service/domestic-violence-lawyer' },
  { title: 'Property Lawyer', href: '/service/property-lawyer', active: true },
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
    title: 'What types of property disputes do you handle?',
    desc: 'We handle all types of property disputes including ownership disputes, boundary conflicts, tenancy issues, property fraud, illegal possession, and real estate transactions. Our expertise covers residential, commercial, and agricultural properties.',
  },
  {
    title: 'How do you handle property fraud cases?',
    desc: 'Property fraud cases require thorough investigation and evidence collection. We help clients gather documentation, verify property records, and pursue legal action against fraudulent parties. We also assist in recovering properties and financial losses.',
  },
  {
    title: 'What about tenant-landlord disputes?',
    desc: 'We handle tenant-landlord disputes including eviction cases, rent disputes, property damage claims, and lease agreement violations. We represent both tenants and landlords to ensure fair resolution of conflicts.',
  },
  {
    title: 'How long do property cases typically take?',
    desc: 'Property cases can take 6-18 months depending on complexity, evidence availability, and court schedules. We work to expedite cases while ensuring thorough preparation and strong legal representation.',
  },
  {
    title: 'Do you handle international property cases?',
    desc: 'Yes, we handle international property cases involving foreign investments, cross-border transactions, and property disputes with international elements. We coordinate with international legal partners when needed.',
  },
  {
    title: 'What evidence do I need for a property case?',
    desc: 'Evidence can include property documents, title deeds, survey reports, photographs, witness statements, financial records, and any correspondence related to the property. We help you gather and organize all necessary evidence.',
  },
];

export default function PropertyLawyerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Property Lawyer Karachi, Real Estate Law Services</title>
        <meta name="description" content="Need a Property Lawyer? Karachi Law Firms offers trusted property legal services and real estate law expertise in Karachi. Secure your property rights now." />
        <meta name="keywords" content="Property Lawyer in Karachi, Property Legal Services, Real Estate Law Services, Property Lawyers" />
        <link rel="canonical" href="https://karachilawfirms.pk/service/property-lawyer" />
      </Helmet>
      
      <Breadcrumb title="Property Lawyer" bgUrl="/images/Property%20Lawyer.jpg" />

      


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
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Property Help?</div>
                <p className="text-white cs_mb_25">
                  Get expert property law representation and real estate legal guidance.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Property%20Lawyer.jpg"
                    alt="Property Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Secure Your Property Rights with an Expert Lawyer</h1>
                  <h4 className="text-accent cs_mb_20">Expert Property Lawyer in Karachi</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Property disputes are one of the most confidential and crucial matters. Real estate disputes in 
                    Karachi are among the most common legal issues, ranging from fraudulent transfers and illegal 
                    possession to boundary disputes and inheritance conflicts. These matters can quickly become 
                    stressful, time-consuming, and financially draining regardless of whether the property is an 
                    inherited plot, a business building, or a family home.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Our experienced property attorneys at Karachi Law Firms offer strategic, dependable, and goal-oriented 
                    legal assistance to safeguard your ownership and investments. We are aware of the complexity of 
                    Pakistani real estate regulations and provide comprehensive property and real estate legal assistance 
                    in Karachi to individuals, families, companies, and Pakistanis living abroad. Our area of expertise 
                    is helping Pakistanis living abroad who are dealing with fraud, illegal possession, or family 
                    property disputes, ensuring their property rights are protected even from a distance.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Property Legal Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We provide complete legal services for all property and real estate matters:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Property Disputes & Verification</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Resolution of Property Disputes</li>
                            <li>Verification of Ownership</li>
                            <li>Property Fraud Incidents</li>
                            <li>Boundary & Encroachment Issues</li>
                            <li>Inheritance Share Disputes</li>
                            <li>Illegal Possession Cases</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Real Estate Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Tenant-Landlord Conflicts</li>
                            <li>Real Estate Transactions</li>
                            <li>Property Documentation</li>
                            <li>Lease Agreements</li>
                            <li>Power of Attorney</li>
                            <li>Mutation & Registry</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Legal Process for Property Cases</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      Our every case is guaranteed to be transparent, professional, and have a solid legal framework:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Case Assessment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>To decide the appropriate course of action, we examine the specifics of your case, property documents, and the nature of the dispute.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Evidence Control</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>Registries, tax receipts, agreements, photos, maps, witness statements, and any other evidence needed in court or during negotiations are all included.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Legal Investigation and Confirmation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We verify official land records, perform a thorough legal analysis, and evaluate the case's advantages and disadvantages.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Negotiation Effort</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>To reduce time, expense, and emotional strain, we try to reach an out-of-court settlement where it seems feasible. Legal documentation is used to guarantee enforceability.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Legal Representation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We file the proper civil or rent lawsuit and represent you during the procedures if a settlement is not possible.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Recovery and Enforcement</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We make sure that court orders are carried out, that illegal occupants are removed, that possession is recovered, and that decrees are enforced.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Property Matters?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Trained Real Estate & Property Attorneys:</strong> Our team has a great deal of expertise dealing with inheritance-based claims, fraudulent transactions, tenant litigation, and complicated property disputes.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Local Knowledge, Worldwide Assistance:</strong> Our area of expertise is helping Pakistanis living abroad who are dealing with fraud, illegal possession, or family property disputes.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Full-Service Legal Approach:</strong> We integrate legal expertise, property verification abilities, and a hands-on comprehension of Karachi's land and real estate laws.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Clear Communication:</strong> At every step, clients receive clear legal instructions, documented assistance, and frequent updates.
                        </p>
                      </div>
                      <div className="col-lg-12 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Solid Legal Representation:</strong> In civil courts, property hearings, revenue boards, and other pertinent land authorities, our attorneys represent clients. Your long-term financial stability and peace of mind may be impacted by property disputes. That's why, at KLF your case is handled with dedication, diligence, and legal accuracy.
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
                sectionTitle="Common Questions About Property Law"
                sectionSubTitle="Get answers to the most frequently asked questions about our property legal services."
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