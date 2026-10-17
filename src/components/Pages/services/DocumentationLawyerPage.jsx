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
  { title: 'Documentation Lawyer', href: '/service/documentation-lawyer', active: true },
  { title: 'Processor Server', href: '/service/processor-server' },
  { title: 'Asylum Lawyer', href: '/service/asylum-lawyer' },
  { title: 'Private Investigator', href: '/service/private-investigator' },
  { title: 'Legal Advisor', href: '/service/legal-advisor' },
];

const faqData = [
  {
    title: 'What types of legal documents do you handle?',
    desc: 'We handle all types of legal documents including contracts, agreements, deeds, affidavits, legal notices, power of attorney, wills, trust documents, corporate documents, and court filings. We ensure all documents are legally sound and properly executed.',
  },
  {
    title: 'How do you ensure document legality?',
    desc: 'We conduct thorough legal research, review applicable laws and regulations, ensure proper formatting and language, verify all required elements are included, and have documents reviewed by experienced lawyers to ensure they meet all legal requirements.',
  },
  {
    title: 'Do you handle document notarization and attestation?',
    desc: 'Yes, we provide comprehensive document services including notarization, attestation, apostille services, and legalization for international use. We guide you through the entire process to ensure documents are properly authenticated.',
  },
  {
    title: 'What about document translation services?',
    desc: 'We provide legal document translation services for documents that need to be in different languages. Our translations are certified and maintain the legal validity of the original documents.',
  },
  {
    title: 'Do you handle document filing with authorities?',
    desc: 'Yes, we handle document filing with various government authorities, courts, and regulatory bodies. We ensure proper filing procedures are followed and maintain records of all submissions.',
  },
  {
    title: 'How much do documentation services cost?',
    desc: 'Our fees vary based on document complexity, type, and services required. We provide transparent pricing and ensure all documents are professionally prepared and legally effective.',
  },
];

export default function DocumentationLawyerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Legal Documentation Lawyer in Karachi | Drafting & Review</title>
        <meta
          name="description"
          content="Hire a documentation lawyer in Karachi for drafting, reviewing and verifying legal documents, agreements and contracts with full legal compliance."
        />
      </Helmet>
      <Breadcrumb title="Documentation Lawyer" bgUrl="/images/Documentation%20Lawyer.jpg" />




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
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Legal Documentation?</div>
                <p className="text-white cs_mb_25">
                  Get expert legal document preparation and authentication services.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Documentation%20Lawyer.jpg"
                    alt="Documentation Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Legal Documentation Lawyer in Karachi for Drafting & Review</h1>
                  <h4 className="text-accent cs_mb_20">Comprehensive Legal Documentation Services</h4>
                  <p className="cs_mb_30">
                    Legal documentation is the foundation of any legal process. We provide comprehensive 
                    legal documentation services, from drafting to authentication, ensuring all your 
                    legal documents are properly prepared, legally sound, and effectively serve their 
                    intended purpose. Our experienced documentation lawyers understand the intricacies 
                    of legal document preparation and ensure compliance with all legal requirements.
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Documentation Services Include</h3>
                        <ul>
                          <li>Contract Drafting</li>
                          <li>Legal Agreements</li>
                          <li>Property Deeds</li>
                          <li>Power of Attorney</li>
                          <li>Wills & Trusts</li>
                          <li>Corporate Documents</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Documentation Process</h3>
                        <ul>
                          <li>Client Consultation</li>
                          <li>Legal Research</li>
                          <li>Document Drafting</li>
                          <li>Legal Review</li>
                          <li>Authentication</li>
                          <li>Filing & Registration</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_20">Why Choose Our Documentation Services?</h3>
                    <p className="cs_mb_20">
                      Our documentation lawyers bring deep understanding of legal requirements and 
                      document preparation procedures. We ensure all documents are legally sound, 
                      properly formatted, and effectively serve their intended legal purpose.
                    </p>
                    <p className="cs_mb_20">
                      We believe that proper legal documentation is crucial for protecting your rights 
                      and interests. Our approach combines legal expertise with attention to detail to 
                      help clients create documents that stand up to legal scrutiny and serve their 
                      intended purpose effectively.
                    </p>
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
                sectionTitle="Common Questions About Legal Documentation"
                sectionSubTitle="Get answers to the most frequently asked questions about our legal documentation services."
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