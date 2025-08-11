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
  { title: 'Domestic Violence Lawyer', href: '/service/domestic-violence-lawyer' },
  { title: 'Property Lawyer', href: '/service/property-lawyer' },
  { title: 'Inheritance of Property', href: '/service/inheritance-of-property' },
  { title: 'Succession Certificate', href: '/service/succession-certificate' },
  { title: 'Criminal Lawyer', href: '/service/criminal-lawyer' },
  { title: 'Civil Lawyer', href: '/service/civil-lawyer', active: true },
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
    title: 'What types of civil cases do you handle?',
    desc: 'We handle a wide range of civil cases including contract disputes, property disputes, personal injury claims, employment law matters, consumer protection cases, and civil rights violations. Our civil litigation team has experience in both trial and appellate courts.',
  },
  {
    title: 'How do you approach civil litigation cases?',
    desc: 'We conduct thorough case analysis, gather evidence, interview witnesses, and develop strong legal strategies. We focus on achieving favorable settlements when possible, but are prepared to take cases to trial when necessary to protect your interests.',
  },
  {
    title: 'What about alternative dispute resolution?',
    desc: 'We often recommend mediation or arbitration as cost-effective alternatives to traditional litigation. We help clients explore all options for resolving disputes efficiently while protecting their legal rights and interests.',
  },
  {
    title: 'How long do civil cases typically take?',
    desc: 'Civil case duration varies widely depending on complexity, court workload, and whether the case settles or goes to trial. Simple cases may resolve in months, while complex litigation can take years. We work to expedite resolution when possible.',
  },
  {
    title: 'Do you handle appeals in civil cases?',
    desc: 'Yes, we handle civil appeals when clients need to challenge unfavorable trial court decisions. We analyze trial records, identify legal errors, and present strong arguments to appellate courts to seek reversal or modification of judgments.',
  },
  {
    title: 'How much do civil litigation services cost?',
    desc: 'Our fees vary based on case complexity and the amount in controversy. We offer flexible fee arrangements including hourly rates, contingency fees for certain cases, and flat fees for specific services. We provide transparent pricing upfront.',
  },
];

export default function CivilLawyerPage() {
  pageTitle('Civil Lawyer - Karachi Law Firms');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Civil Lawyer" bgUrl="/images/Civil Lawyer.jpg" />




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
                <h3 className="text-white cs_mb_15">Need Civil Litigation?</h3>
                <p className="text-white cs_mb_25">
                  Get expert civil litigation representation and legal dispute resolution.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Civil Lawyer.jpg"
                    alt="Civil Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h2 className="cs_mb_30">Civil Lawyer</h2>
                  <h4 className="text-accent cs_mb_20">Comprehensive Civil Litigation</h4>
                  <p className="cs_mb_30">
                    Civil disputes can be complex and emotionally challenging. We provide comprehensive 
                    civil litigation services for all types of civil cases, from contract disputes to 
                    personal injury claims. Our experienced civil lawyers understand the intricacies of 
                    civil law and work diligently to protect your rights and achieve favorable outcomes 
                    through negotiation, mediation, or trial.
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Civil Litigation Services Include</h3>
                        <ul>
                          <li>Contract Disputes</li>
                          <li>Property Disputes</li>
                          <li>Personal Injury Claims</li>
                          <li>Employment Law Matters</li>
                          <li>Consumer Protection</li>
                          <li>Civil Rights Cases</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Civil Litigation Process</h3>
                        <ul>
                          <li>Case Assessment</li>
                          <li>Evidence Gathering</li>
                          <li>Legal Strategy Development</li>
                          <li>Negotiation & Mediation</li>
                          <li>Court Representation</li>
                          <li>Appeals & Post-Trial</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_20">Why Choose Our Civil Litigation Services?</h3>
                    <p className="cs_mb_20">
                      Our civil litigation lawyers bring years of experience in civil law and courtroom 
                      advocacy. We provide strategic legal representation while exploring all options for 
                      efficient dispute resolution, including alternative dispute resolution methods.
                    </p>
                    <p className="cs_mb_20">
                      We believe that civil disputes should be resolved fairly and efficiently. Our 
                      approach combines legal expertise with practical problem-solving to help clients 
                      achieve the best possible outcomes in their civil cases.
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
                sectionTitle="Common Questions About Civil Litigation"
                sectionSubTitle="Get answers to the most frequently asked questions about our civil litigation services."
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
                sectionTitle="Ready to Resolve Your Civil Dispute?"
                sectionSubTitle="Contact us today for a free consultation and let us help you navigate your civil case with expert legal representation and strategic advocacy."
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