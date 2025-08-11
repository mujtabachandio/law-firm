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
  pageTitle('Domestic Violence Lawyer - Karachi Law Firms');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Domestic Violence Lawyer" bgUrl="/images/Domestic Violence Lawyer.jpg" />




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
                <h3 className="text-white cs_mb_15">Need Protection Help?</h3>
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
                    src="/images/Domestic Violence Lawyer.jpg"
                    alt="Domestic Violence Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h2 className="cs_mb_30">Domestic Violence Lawyer</h2>
                  <h4 className="text-accent cs_mb_20">Immediate Protection & Legal Support</h4>
                  <p className="cs_mb_30">
                    Domestic violence cases require immediate attention and compassionate legal representation. 
                    We provide urgent legal protection for victims of domestic violence, helping you obtain 
                    protection orders, secure your safety, and navigate the legal system with dignity and 
                    support. Our priority is your safety and well-being.
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Protection Services Include</h3>
                        <ul>
                          <li>Emergency Protection Orders</li>
                          <li>Restraining Orders</li>
                          <li>Safety Planning</li>
                          <li>Criminal Charges</li>
                          <li>Child Protection</li>
                          <li>Financial Support</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Protection Process</h3>
                        <ul>
                          <li>Immediate Safety Assessment</li>
                          <li>Emergency Petition Filing</li>
                          <li>Protection Order Obtainment</li>
                          <li>Evidence Collection</li>
                          <li>Court Representation</li>
                          <li>Ongoing Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_20">Why Choose Our Domestic Violence Services?</h3>
                    <p className="cs_mb_20">
                      Our domestic violence lawyers understand the urgency and sensitivity of these cases. 
                      We provide immediate legal protection while ensuring your safety and rights are 
                      protected throughout the legal process.
                    </p>
                    <p className="cs_mb_20">
                      We believe that everyone deserves to live free from fear and violence. Our approach 
                      combines legal expertise with compassionate support to help you break free from abuse 
                      and rebuild your life with dignity and independence.
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

      <Section pt="110" ptLg="80" pb="110" pbLg="80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeadingStyle2
                sectionTitleUp="Contact Us"
                sectionTitle="Ready to Get Immediate Legal Protection?"
                sectionSubTitle="Contact us today for urgent legal support and let us help you break free from abuse with immediate protection and compassionate legal representation."
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