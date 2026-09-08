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
  { title: 'Maintenance & Reconciliation', href: '/service/maintenance-reconciliation', active: true },
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
    title: 'What is maintenance and who is entitled to it?',
    desc: 'Maintenance refers to financial support that one spouse must provide to the other. Under Pakistani law, wives are entitled to maintenance from their husbands, and children are entitled to maintenance from both parents. The amount depends on the payer\'s financial capacity and the recipient\'s needs.',
  },
  {
    title: 'How is maintenance calculated?',
    desc: 'Maintenance is calculated based on the payer\'s income, financial capacity, standard of living, and the recipient\'s needs. The court considers factors like housing, food, education, healthcare, and other essential expenses when determining the maintenance amount.',
  },
  {
    title: 'What is reconciliation in family law?',
    desc: 'Reconciliation is the process of helping estranged couples resolve their differences and reunite. We offer mediation services to help couples address their issues, improve communication, and work towards rebuilding their relationship before pursuing divorce.',
  },
  {
    title: 'Can maintenance be modified?',
    desc: 'Yes, maintenance orders can be modified if there\'s a significant change in circumstances, such as changes in income, employment status, or the needs of the recipient. We help file modification petitions when circumstances change.',
  },
  {
    title: 'What happens if maintenance is not paid?',
    desc: 'If maintenance is not paid as ordered, the court can take enforcement actions including attachment of property, garnishment of wages, or even imprisonment for contempt of court. We help enforce maintenance orders and protect your rights.',
  },
  {
    title: 'How long does a reconciliation process take?',
    desc: 'Reconciliation processes vary depending on the couple\'s willingness to work together and the complexity of their issues. Some couples may reconcile in a few sessions, while others may need several months of mediation and counseling.',
  },
];

export default function MaintenanceReconciliationPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Maintenance & Reconciliation Services | Family Law Support</title>
        <meta
          name="description"
          content="Get expert maintenance and reconciliation services for spouses and children. We handle support claims, mediation, enforcement and family harmony."
        />
        <meta
          name="keywords"
          content="maintenance services Pakistan, family maintenance lawyer, child maintenance support, spousal maintenance lawyer, maintenance order enforcement, reconciliation services family law, family mediation Pakistan, maintenance claims lawyer, financial support family law, reconciliation mediation services, maintenance modification lawyer"
        />
        <link rel="canonical" href="https://karachilawfirms.pk/service/maintenance-reconciliation" />
      </Helmet>
      <Breadcrumb title="Maintenance & Reconciliation" bgUrl="/images/Family-Law-Services.jpg" />

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
                <div className="text-white cs_mb_15 cs_fs_24 cs_fw_600">Need Maintenance Help?</div>
                <p className="text-white cs_mb_25">
                  Get expert legal assistance for maintenance claims and reconciliation services.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Family-Law-Services.jpg"
                    alt="Maintenance & Reconciliation"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h1 className="cs_mb_30">Maintenance & Reconciliation Services for Family Support Matters</h1>
                  <h4 className="text-accent cs_mb_20">Financial Support & Family Reconciliation</h4>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    Financial support and maintenance are critical aspects of family law, especially during separation 
                    or divorce proceedings. When a marriage reaches an irreconcilable stage, issues of maintenance 
                    for spouses and children must be addressed. A skilled lawyer ensures that the dower (Mahr), maintenance, 
                    and other financial settlements are handled according to the law.
                  </p>
                  <p className="cs_mb_30" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                    In addition to financial assessments, proof preparation, and court representation, we assist 
                    clients in filing or defending support claims for spouses and children. We also offer reconciliation 
                    services to help estranged couples resolve their differences and work towards rebuilding their 
                    relationship. Our comprehensive approach addresses both financial support needs and family harmony, 
                    recognizing that sometimes families can be reunited with proper mediation and legal guidance, while 
                    ensuring that financial obligations are met regardless of the outcome.
                  </p>
                  
                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Comprehensive Maintenance Services</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      Our maintenance services ensure financial support for spouses and children:
                    </p>
                    
                    <div className="row cs_mb_30">
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Maintenance Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Spousal Maintenance Claims</li>
                            <li>Child Maintenance & Support</li>
                            <li>Financial Assessments</li>
                            <li>Maintenance Order Enforcement</li>
                            <li>Maintenance Modifications</li>
                            <li>Defense Against Maintenance Claims</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_service_details_list">
                          <h4 className="cs_mb_15" style={{ color: '#1B365D', fontSize: '18px' }}>Reconciliation Services</h4>
                          <ul style={{ lineHeight: '2' }}>
                            <li>Family Mediation</li>
                            <li>Couple Counseling Support</li>
                            <li>Dispute Resolution</li>
                            <li>Reconciliation Agreements</li>
                            <li>Communication Facilitation</li>
                            <li>Relationship Rebuilding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Our Process</h3>
                    <p className="cs_mb_25" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                      We follow a comprehensive process for both maintenance and reconciliation matters:
                    </p>
                    
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Initial Consultation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We assess your situation, whether it's a maintenance claim or a desire for reconciliation.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Financial Assessment</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We conduct thorough financial assessments to determine appropriate maintenance amounts.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Proof Preparation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We gather and prepare all necessary documentation, financial records, and evidence.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>4</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Court Representation</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We represent you in court for maintenance claims or facilitate reconciliation through mediation.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Resolution & Enforcement</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We help enforce maintenance orders or finalize reconciliation agreements as appropriate.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <div className="d-flex align-items-start">
                          <div className="cs_mr_15" style={{ minWidth: '40px', height: '40px', background: '#DAA520', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>6</div>
                          <div>
                            <h5 className="cs_mb_10" style={{ color: '#1B365D', fontSize: '18px' }}>Ongoing Support</h5>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>We provide ongoing support for modifications, enforcement, or continued reconciliation efforts.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 className="cs_mb_25" style={{ color: '#1B365D', fontSize: '24px' }}>Why Choose KLF for Maintenance & Reconciliation?</h3>
                    <div className="row">
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Comprehensive Financial Assessment:</strong> We conduct thorough financial evaluations to ensure fair maintenance amounts.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Strong Court Representation:</strong> We effectively represent clients in maintenance proceedings with solid legal arguments.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Reconciliation Support:</strong> We help couples resolve differences and work towards rebuilding their relationship when possible.
                        </p>
                      </div>
                      <div className="col-lg-6 cs_mb_20">
                        <p className="cs_mb_15" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                          <strong style={{ color: '#1B365D' }}>Order Enforcement:</strong> We help enforce maintenance orders and protect your financial rights effectively.
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
                sectionTitle="Common Questions About Maintenance & Reconciliation"
                sectionSubTitle="Get answers to the most frequently asked questions about our maintenance and reconciliation services."
              />
            </div>
            <div className="col-lg-6">
              <Accordion data={faqData} />
            </div>
          </div>
        </div>
      </Section>

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

