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
  { title: 'Child Custody', href: '/service/child-custody', active: true },
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
    title: 'How is child custody determined in Pakistan?',
    desc: 'Child custody in Pakistan is determined based on the child\'s best interests, considering factors like parental capability, child\'s age and preference, living conditions, and financial stability. The court prioritizes the child\'s welfare above all other considerations.',
  },
  {
    title: 'What factors do courts consider for custody decisions?',
    desc: 'Courts consider multiple factors including the child\'s age and preference, each parent\'s financial stability, living environment, emotional bond with the child, ability to provide education and healthcare, and the child\'s overall well-being.',
  },
  {
    title: 'Can custody arrangements be modified?',
    desc: 'Yes, custody arrangements can be modified if there\'s a significant change in circumstances that affects the child\'s best interests. This requires filing a petition with the family court and demonstrating the need for modification.',
  },
  {
    title: 'What about visitation rights?',
    desc: 'Visitation rights are typically granted to the non-custodial parent to maintain the child-parent relationship. The court establishes a visitation schedule that works for both parents and serves the child\'s best interests.',
  },
  {
    title: 'How do you handle international custody cases?',
    desc: 'International custody cases involve complex legal issues including jurisdiction, international treaties, and enforcement of foreign court orders. We have expertise in handling cross-border custody disputes and international family law.',
  },
  {
    title: 'What if one parent violates custody orders?',
    desc: 'Violation of custody orders can result in legal consequences including contempt of court, modification of custody arrangements, or even criminal charges in severe cases. We help enforce custody orders and protect your parental rights.',
  },
];

export default function ChildCustodyPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Child Custody Lawyer in Karachi | Protect Your Child Rights</title>
        <meta
          name="description"
          content="Need a child custody lawyer in Karachi? We handle guardianship, visitation rights, custody disputes and child welfare under Pakistani family law."
        />
        <meta
          name="keywords"
          content="child custody lawyer in Karachi, guardianship lawyer Karachi, child custody cases Pakistan, family court custody lawyer, visitation rights lawyer Karachi, guardian and wards act lawyer, child custody law Pakistan, parental rights lawyer Karachi, custody dispute lawyer, child support lawyer Karachi, family law firm Karachi"
        />
        <link rel="canonical" href="https://karachilawfirms.pk/service/child-custody" />
      </Helmet>
      <Breadcrumb title="Child Custody" bgUrl="/images/Child%20Custody.jpg" />




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
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Custody Help?</div>
                <p className="text-white cs_mb_25">
                  Get expert child custody representation and family law guidance.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Child%20Custody.jpg"
                    alt="Child Custody"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Child Custody Lawyer in Karachi for Guardianship & Visitation Rights</h1>
                  <h4 className="text-accent cs_mb_20">Protecting Your Child's Best Interests</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Perhaps the most contentious aspect of family law is the custody of children. The courts in 
                    Karachi prioritize the "welfare of the minor" above all else. However, determining what 
                    constitutes "welfare" requires expert legal advocacy. Strong legal arguments and an emphasis 
                    on the child's best interests are necessary in child custody cases.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    In Pakistan, there is a distinction between Hizanat (physical custody) and Wilayat (guardianship). 
                    While a mother may have physical custody of young children, the father is often recognized as the 
                    natural guardian. Our attorneys ensure that your parental rights are completely upheld by 
                    representing clients in Guardian & Wards Act custody and visitation proceedings. Whether you are 
                    seeking a visitation schedule or contesting for full guardianship, our guardianship attorney 
                    ensures that the child's best interests are represented in court, preventing the child from 
                    becoming a pawn in parental disputes.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Child Custody Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      Our child custody services are designed to protect children's best interests while ensuring 
                      fair and just custody arrangements:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Custody Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Custody Dispute Resolution</li>
                            <li>Guardian & Wards Act Proceedings</li>
                            <li>Visitation Rights Arrangements</li>
                            <li>Parental Rights Protection</li>
                            <li>Custody Modification Petitions</li>
                            <li>Emergency Custody Orders</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Related Legal Matters</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Child Support Coordination</li>
                            <li>International Custody Cases</li>
                            <li>Custody Order Enforcement</li>
                            <li>Parental Alienation Cases</li>
                            <li>Relocation Disputes</li>
                            <li>Grandparent Visitation Rights</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Custody Process</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We follow a comprehensive process to ensure the best outcome for your child:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Case Assessment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We start with a thorough assessment of your child's needs, living conditions, and family dynamics.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Best Interest Analysis</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We analyze factors like parental capability, child's age, living environment, and emotional bonds.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Mediation Attempt</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We try to assist peaceful solutions through mediation, prioritizing the child's stability and well-being.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Court Representation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We represent you in family courts, presenting strong legal arguments focused on the child's best interests.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Order Enforcement</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We help enforce custody orders and protect your rights if the other parent violates arrangements.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Ongoing Support</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We provide ongoing support for custody modifications and any future legal needs related to your child.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Child Custody?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Child-Focused Approach:</strong> We prioritize the child's best interests, considering their age, needs, and emotional well-being in every decision.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Experienced in Guardian & Wards Act:</strong> Our attorneys are well-versed in Pakistani custody laws and family court procedures.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Compassionate Representation:</strong> We understand the emotional toll of custody disputes and provide sensitive, respectful legal support.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Strong Legal Advocacy:</strong> We build compelling cases that demonstrate your capability as a parent and your commitment to your child's welfare.
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
                sectionTitle="Common Questions About Child Custody"
                sectionSubTitle="Get answers to the most frequently asked questions about our child custody services."
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