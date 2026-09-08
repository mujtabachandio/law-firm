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
  { title: 'Divorce Lawyer', href: '/service/divorce-lawyer', active: true },
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
  { title: 'Documentation Lawyer', href: '/service/documentation-lawyer' },
  { title: 'Processor Server', href: '/service/processor-server' },
  { title: 'Asylum Lawyer', href: '/service/asylum-lawyer' },
  { title: 'Private Investigator', href: '/service/private-investigator' },
  { title: 'Legal Advisor', href: '/service/legal-advisor' },
];

const faqData = [
  {
    title: 'How long does a divorce case typically take?',
    desc: 'Divorce cases can take 3-12 months depending on complexity, cooperation between parties, and court schedules. We work to expedite the process while protecting your interests and ensuring fair outcomes.',
  },
  {
    title: 'What documents do I need for divorce proceedings?',
    desc: 'Required documents include marriage certificate, identification documents, financial records, and any relevant correspondence. We help gather and organize all necessary documentation for your case.',
  },
  {
    title: 'How is property divided in divorce cases?',
    desc: 'Property division follows Islamic law and Pakistani family law principles. We ensure fair distribution based on contributions, needs, and legal entitlements of both parties.',
  },
  {
    title: 'What about child custody arrangements?',
    desc: 'Child custody is determined based on the child\'s best interests, considering factors like parental capability, child\'s age and preference, and living conditions. We advocate for the child\'s welfare.',
  },
  {
    title: 'Do you offer mediation services?',
    desc: 'Yes, we offer mediation services to help couples reach amicable settlements. This can expedite the process and reduce costs while maintaining privacy and control over outcomes.',
  },
  {
    title: 'How much do divorce services cost?',
    desc: 'Our pricing is transparent and varies based on case complexity. We offer flexible payment plans and provide detailed cost estimates upfront to help you plan your legal expenses.',
  },
];

export default function DivorceLawyerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Divorce Lawyer in Karachi | Expert Family Law Services</title>
        <meta name="description" content="Looking for a trusted divorce lawyer in Karachi? Get expert legal help for Talaq, Khula, child custody, maintenance, and family law matters." />
        <meta name="keywords" content="Divorce lawyer in Karachi, family lawyer Karachi, khula lawyer Karachi, talaq lawyer Pakistan, child custody lawyer Karachi, divorce law firm Karachi, family court lawyer, maintenance lawyer Karachi, alimony lawyer Pakistan, legal divorce services." />
        <link rel="canonical" href="https://karachilawfirms.pk/service/divorce-lawyer" />
      </Helmet>
      
      <Breadcrumb title="Divorce Lawyer" bgUrl="/images/Divorce%20Lawyer.jpg" />



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
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Divorce Help?</div>
                <p className="text-white cs_mb_25">
                  Get compassionate family law representation and expert divorce guidance.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Divorce%20Lawyer.jpg"
                    alt="Divorce Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Divorce Lawyer in Karachi for Family, Khula & Custody Matters</h1>
                  <h4 className="text-accent cs_mb_20">Expert Representation for Divorce & Family Matters</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Divorce is one of the most challenging experiences in life, affecting not just the couple but 
                    entire families, especially children. In Pakistan, the legal dissolution of a marriage can take 
                    several forms, primarily Divorce (Talaq) initiated by the husband or Khula initiated by the wife. 
                    Each process involves specific procedural requirements under the Muslim Family Laws Ordinance.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    When a marriage reaches an irreconcilable stage, engaging a divorce lawyer in Karachi is the 
                    first step toward a legal resolution. A skilled lawyer ensures that the dower (Mahr), maintenance, 
                    and other financial settlements are handled according to the law. At Karachi Law Firms, we 
                    understand that divorce is not just a legal ending but a transition. Our team works to ensure 
                    that the process is as smooth as possible, protecting our clients from unnecessary litigation 
                    and emotional distress while ensuring your legal rights are fully protected.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Understanding Khula: The Right of the Wife</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      If a woman seeks to end her marriage, she may apply for Khula through the family courts. This 
                      process often involves the return of certain benefits received from the husband. Having 
                      representation from one of the best law firms in Karachi is essential here, as the court must 
                      be convinced of the "reasons" for the dissolution to ensure a fair decree is issued. Our 
                      experienced attorneys help women file khula applications, prepare supporting documentation, 
                      make compelling arguments in court, and ensure the legal process goes smoothly.
                    </p>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Divorce Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We deal with both mutual divorce (Mubarat) and unilateral divorce (Talaq). Throughout the 
                      divorce process, our attorneys prepare notices, finish paperwork, represent clients in Union 
                      Council proceedings, and guarantee legal compliance. Our comprehensive services include:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Divorce Types We Handle</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Mutual Divorce (Mubarat)</li>
                            <li>Unilateral Divorce (Talaq)</li>
                            <li>Khula Proceedings</li>
                            <li>Contested Divorce</li>
                            <li>Divorce by Mutual Consent</li>
                            <li>Divorce Mediation</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Related Legal Matters</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Property Division</li>
                            <li>Alimony & Maintenance</li>
                            <li>Child Custody Arrangements</li>
                            <li>Child Support</li>
                            <li>Dowry & Dower (Haq Mehr)</li>
                            <li>Post-Divorce Modifications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Divorce Process</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      From beginning to end, our methodical legal procedure guarantees clarity, effectiveness, and 
                      solid representation:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Initial Consultation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We start with a thorough conversation to understand your circumstances, emotional concerns, and legal goals.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Document Review</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We examine nikahnama, financial records, correspondence, and all relevant documentation.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Legal Strategy</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We create a personalized legal plan based on whether your case requires mediation, negotiation, or court representation.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Court Filing & Representation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We draft petitions, file paperwork in family courts, attend hearings, and complete all legal processes.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Mediation & Settlement</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We assist in peaceful solutions whenever possible, reducing costs and emotional strain for all parties.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Final Resolution</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We ensure court orders are properly executed and provide ongoing support for any post-divorce legal needs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Divorce Services?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Experienced Family Lawyers:</strong> In Karachi, our team has dealt with hundreds of family cases, including difficult divorces and delicate custody disputes.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Respectful & Confidential:</strong> Trust is necessary in family issues. Every conversation is kept confidential, and each case is handled with respect and compassion.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Strong Court Representation:</strong> Our attorneys are knowledgeable in successful legal tactics, judges' expectations, and family court procedures.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Fast Filing & Documentation:</strong> We effectively handle all documentation to prevent unnecessary delays.
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
                sectionTitle="Common Questions About Divorce Law"
                sectionSubTitle="Get answers to the most frequently asked questions about our divorce law services."
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