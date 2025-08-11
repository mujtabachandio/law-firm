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
  { title: 'Civil Lawyer', href: '/service/civil-lawyer' },
  { title: 'F.I.A Lawyer', href: '/service/fia-lawyer', active: true },
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
    title: 'What is FIA and what cases do you handle?',
    desc: 'The Federal Investigation Agency (FIA) handles cybercrime, human trafficking, immigration fraud, and other federal offenses. We represent clients in FIA investigations and cases, providing legal defense for cybercrime charges, immigration violations, and other federal offenses.',
  },
  {
    title: 'What should I do if FIA contacts me?',
    desc: 'If FIA contacts you, remain calm and request legal representation immediately. Do not provide statements or sign documents without legal counsel. Contact us as soon as possible so we can protect your rights and guide you through the investigation process.',
  },
  {
    title: 'How do you handle FIA investigations?',
    desc: 'We help clients navigate FIA investigations by ensuring their rights are protected, preparing responses to inquiries, gathering evidence in your favor, and representing you in any legal proceedings that may arise from the investigation.',
  },
  {
    title: 'What about cybercrime cases?',
    desc: 'Cybercrime cases handled by FIA can be complex and technical. We work with digital forensics experts to analyze evidence, challenge digital evidence collection methods, and build strong defenses against cybercrime allegations.',
  },
  {
    title: 'Do you handle immigration-related FIA cases?',
    desc: 'Yes, we handle immigration-related FIA cases including visa fraud, document forgery, and other immigration violations. We help clients understand their rights and build strong defenses against immigration-related charges.',
  },
  {
    title: 'How much do FIA legal services cost?',
    desc: 'Our fees vary based on case complexity and the nature of the FIA investigation. We provide transparent pricing and flexible payment arrangements. We believe everyone deserves quality legal representation in federal investigations.',
  },
];

export default function FiaLawyerPage() {
  pageTitle('F.I.A Lawyer - Karachi Law Firms');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="F.I.A Lawyer" bgUrl="/images/F.I.A Lawyer.jpg" />




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
                <h3 className="text-white cs_mb_15">Need FIA Defense?</h3>
                <p className="text-white cs_mb_25">
                  Get expert FIA case representation and federal investigation defense.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/F.I.A Lawyer.jpg"
                    alt="F.I.A Lawyer"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h2 className="cs_mb_30">F.I.A Lawyer</h2>
                  <h4 className="text-accent cs_mb_20">Federal Investigation Agency Defense</h4>
                  <p className="cs_mb_30">
                    FIA (Federal Investigation Agency) cases can be complex and intimidating. We provide 
                    expert legal representation for all types of FIA cases, including cybercrime, human 
                    trafficking, immigration fraud, and other federal offenses. Our experienced FIA lawyers 
                    understand the intricacies of federal investigations and work tirelessly to protect your 
                    rights and achieve the best possible outcome.
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our FIA Defense Services Include</h3>
                        <ul>
                          <li>Cybercrime Defense</li>
                          <li>Immigration Fraud Cases</li>
                          <li>Human Trafficking Defense</li>
                          <li>Federal Investigation Representation</li>
                          <li>Digital Evidence Analysis</li>
                          <li>Federal Court Litigation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our FIA Defense Process</h3>
                        <ul>
                          <li>Initial Case Assessment</li>
                          <li>Investigation Analysis</li>
                          <li>Evidence Review</li>
                          <li>Legal Strategy Development</li>
                          <li>Federal Court Representation</li>
                          <li>Appeals & Post-Conviction</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_20">Why Choose Our FIA Defense Services?</h3>
                    <p className="cs_mb_20">
                      Our FIA lawyers bring deep understanding of federal law and investigation procedures. 
                      We provide aggressive defense strategies while ensuring your constitutional rights are 
                      protected throughout the federal investigation and legal process.
                    </p>
                    <p className="cs_mb_20">
                      We believe that everyone deserves strong legal representation in federal cases. Our 
                      approach combines legal expertise with technical understanding to help clients navigate 
                      complex FIA investigations and achieve favorable outcomes.
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
                sectionTitle="Common Questions About FIA Cases"
                sectionSubTitle="Get answers to the most frequently asked questions about our FIA legal services."
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
                sectionTitle="Facing FIA Investigation?"
                sectionSubTitle="Contact us today for a free consultation and let us provide you with expert FIA case representation to protect your rights and future."
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