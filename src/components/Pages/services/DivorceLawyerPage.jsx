import React, { useEffect } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';
import IconboxStyle5 from '../../Iconbox/IconboxStyle5';
import { NavLink } from 'react-router-dom';
import FormStyle6 from '../../Form/FormStyle6';
import Button from '../../Button';
import { pageTitle } from '../../../helpers/PageTitle';

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
  pageTitle('Divorce Lawyer - Karachi Law Firms');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Divorce Lawyer" bgUrl="/images/Divorce Lawyer.jpg" />



      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 cs_mb_lg_60">
              <div className="cs_service_list cs_mb_40">
                <h2 className="cs_fs_20 text-white text-uppercase bg-accent cs_pl_30 cs_pr_30 cs_pt_23 cs_pb_23 m-0">
                  All Legal Services
                </h2>
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
                <h3 className="text-white cs_mb_15">Need Divorce Help?</h3>
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
                    src="/images/Divorce Lawyer.jpg"
                    alt="Divorce Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h2 className="cs_mb_30">Divorce Lawyer</h2>
                  <h4 className="text-accent cs_mb_20">Compassionate Family Law Representation</h4>
                  <p className="cs_mb_30">
                    Expert family law representation for divorce proceedings, property division, and alimony 
                    arrangements with compassionate legal guidance. We understand that divorce is one of the 
                    most challenging experiences in life, and we provide sensitive, professional legal support 
                    to help you navigate this difficult process with dignity and respect.
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Divorce Services Include</h3>
                        <ul>
                          <li>Divorce Proceedings</li>
                          <li>Property Division</li>
                          <li>Alimony Arrangements</li>
                          <li>Child Support</li>
                          <li>Mediation Services</li>
                          <li>Court Representation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Divorce Process</h3>
                        <ul>
                          <li>Initial Consultation</li>
                          <li>Case Assessment</li>
                          <li>Mediation Attempt</li>
                          <li>Court Filing</li>
                          <li>Negotiation</li>
                          <li>Final Settlement</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_20">Why Choose Our Divorce Services?</h3>
                    <p className="cs_mb_20">
                      Our divorce lawyers bring years of experience in family law and understand the emotional 
                      complexities of divorce cases. We provide compassionate, professional representation while 
                      ensuring your legal rights are protected and your interests are advocated for effectively.
                    </p>
                    <p className="cs_mb_20">
                      We believe in resolving family disputes with dignity and respect. Our approach combines 
                      legal expertise with emotional sensitivity to help you achieve the best possible outcome 
                      for your family's future.
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

      <Section pt="110" ptLg="80" pb="110" pbLg="80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeadingStyle2
                sectionTitleUp="Contact Us"
                sectionTitle="Ready to Navigate Your Divorce with Confidence?"
                sectionSubTitle="Contact us today for a free consultation and let us help you through this challenging time with expertise and compassion."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <FormStyle6 />
            </div>
            <div className="col-lg-6">
              <div className="cs_contact_info">
                <IconboxStyle5
                  imgUrl="/images/icons/contact_icon_1.svg"
                  title="Call Us"
                  titleUp="Have Any Question?"
                  desc="(123) 45678"
                />
                <IconboxStyle5
                  imgUrl="/images/icons/contact_icon_2.svg"
                  title="Send Email"
                  titleUp="Get in Touch"
                  desc="info@karachilawfirms.com"
                />
                <IconboxStyle5
                  imgUrl="/images/icons/contact_icon_3.svg"
                  title="Visit Office"
                  titleUp="Our Location"
                  desc="Karachi, Pakistan"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 