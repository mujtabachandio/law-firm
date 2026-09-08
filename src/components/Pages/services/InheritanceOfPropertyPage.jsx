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
  { title: 'Inheritance of Property', href: '/service/inheritance-of-property', active: true },
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
    title: 'How is property inheritance determined in Pakistan?',
    desc: 'Property inheritance in Pakistan follows Islamic law (Sharia) and the Succession Act. The distribution depends on the relationship to the deceased, with specific shares allocated to spouses, children, parents, and other relatives according to Islamic inheritance rules.',
  },
  {
    title: 'What documents do I need for inheritance proceedings?',
    desc: 'Required documents include death certificate, family tree, property documents, will (if any), and identification documents of all heirs. We help you gather and organize all necessary documentation for inheritance proceedings.',
  },
  {
    title: 'How long do inheritance cases take to resolve?',
    desc: 'Inheritance cases typically take 6-24 months depending on complexity, number of heirs, and whether there are disputes. We work to expedite the process while ensuring all legal requirements are met.',
  },
  {
    title: 'What if there\'s a dispute among heirs?',
    desc: 'We help resolve disputes through mediation, negotiation, or court proceedings. We represent your interests while working toward fair distribution according to Islamic inheritance laws and Pakistani succession law.',
  },
  {
    title: 'Can I challenge an inheritance distribution?',
    desc: 'Yes, you can challenge inheritance distribution if you believe it violates Islamic law or if there are errors in the distribution. We help you file appropriate legal challenges and represent your interests in court.',
  },
  {
    title: 'What about inheritance tax and legal fees?',
    desc: 'Pakistan has specific inheritance tax laws and legal fees vary based on case complexity. We provide transparent information about all costs involved and help you understand the financial aspects of inheritance proceedings.',
  },
];

export default function InheritanceOfPropertyPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inheritance of Property in Karachi | Expert Legal Help</title>
        <meta
          name="description"
          content="Get expert inheritance of property services in Karachi. Sharia-compliant property distribution, succession certificates, legal documentation and court support."
        />
        <meta
          name="keywords"
          content="inheritance of property Karachi, property inheritance Pakistan, Sharia inheritance law, succession certificate Karachi, Islamic inheritance law Pakistan, property distribution lawyer, heir identification, property transfer legal support, inheritance dispute resolution, property documentation lawyer, asset succession lawyer, inheritance legal advice"
        />
        <link rel="canonical" href="https://karachilawfirms.pk/service/inheritance-of-property" />
      </Helmet>
      <Breadcrumb title="Inheritance of Property" bgUrl="/images/Inheritance of%20Property.jpg" />




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
                <h3 className="text-black ">Need Inheritance Help?</h3>
                <p className="text-black cs_mb_25">
                  Get expert inheritance law representation and property succession guidance.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Inheritance of%20Property.jpg"
                    alt="Inheritance of Property"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Inheritance of Property in Karachi with Sharia-Compliant Legal Guidance</h1>
                  <h4 className="text-accent cs_mb_20">Expert Inheritance Law & Property Distribution Services</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Inheritance cases require deep understanding of Islamic inheritance law and Pakistani succession law. 
                    When a family member passes away, the distribution of property according to Islamic law (Sharia) 
                    can become a source of significant conflict if not handled correctly. Legal battles over the custody 
                    of children or the management of a deceased person's estate can last for years if not handled 
                    correctly at the outset.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    We help families navigate the complex process of property distribution according to Sharia principles, 
                    ensuring fair and legal distribution of assets among heirs. Our expertise covers all aspects of 
                    inheritance law and succession proceedings, including inheritance shares, boundaries, encroachments, 
                    fraudulent transfers, ownership, and possession disputes. We assist in the legal appointment of 
                    guardians and the creation of trusts or legal frameworks that protect the interests of those who 
                    cannot protect themselves, ensuring that inheritance matters are resolved efficiently and fairly.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Inheritance Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We provide complete legal assistance for all inheritance and property distribution matters:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Inheritance Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Inheritance Distribution</li>
                            <li>Resolution of Inheritance Disputes</li>
                            <li>Heir Identification & Verification</li>
                            <li>Property Valuation & Assessment</li>
                            <li>Islamic Law Application</li>
                            <li>Succession Certificate</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Property Documentation</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Legal Documentation</li>
                            <li>Property Transfer Assistance</li>
                            <li>Mutation & Registry</li>
                            <li>Power of Attorney</li>
                            <li>Court Representation</li>
                            <li>Asset Recovery</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Inheritance Process</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We follow a systematic approach to ensure fair and legal inheritance distribution:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Heir Identification</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We identify all legal heirs according to Islamic inheritance law and Pakistani succession law, ensuring all entitled parties are recognized.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Property Assessment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We assess all inherited properties, verify ownership documents, and determine the value and nature of assets to be distributed.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Islamic Law Application</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We apply Islamic inheritance principles (Sharia) to calculate each heir's rightful share according to their relationship to the deceased.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Distribution Planning</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We create a comprehensive distribution plan that ensures fair allocation of assets while respecting Islamic law and family harmony.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Legal Documentation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We prepare all necessary legal documents including succession certificates, property transfer documents, and court petitions.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Property Transfer</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We assist with the actual transfer of property to heirs, ensuring all legal formalities are completed and ownership is properly recorded.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Inheritance Matters?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Expert Islamic Law Knowledge:</strong> Our inheritance lawyers bring deep understanding of Islamic inheritance law and Pakistani succession law, ensuring Sharia-compliant distribution.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Fair Distribution:</strong> We ensure that property distribution follows Sharia principles while navigating the legal complexities of inheritance proceedings.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Family Harmony:</strong> We believe that inheritance should be handled with respect for Islamic law and family harmony, combining legal expertise with cultural sensitivity.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Complete Services:</strong> From heir identification to property transfer, we provide comprehensive inheritance services to help families navigate inheritance matters fairly and efficiently.
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
                sectionTitle="Common Questions About Inheritance"
                sectionSubTitle="Get answers to the most frequently asked questions about our inheritance legal services."
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