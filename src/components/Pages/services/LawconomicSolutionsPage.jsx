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
  { title: 'Lawconomic Solutions', href: '/service/lawconomic-solutions', active: true },
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
  { title: 'Documentation Lawyer', href: '/service/documentation-lawyer' },
  { title: 'Processor Server', href: '/service/processor-server' },
  { title: 'Asylum Lawyer', href: '/service/asylum-lawyer' },
  { title: 'Private Investigator', href: '/service/private-investigator' },
  { title: 'Legal Advisor', href: '/service/legal-advisor' },
];

const faqData = [
  {
    title: 'How do you determine your pricing?',
    desc: 'Our pricing is based on case complexity, time requirements, and client financial circumstances. We offer sliding scale options and flexible payment plans to ensure accessibility for all clients.',
  },
  {
    title: 'Do you offer pro bono services?',
    desc: 'Yes, we provide pro bono services for cases involving public interest, human rights, and constitutional matters, ensuring justice is accessible to all regardless of financial means.',
  },
  {
    title: 'What payment plans do you offer?',
    desc: 'We offer flexible payment plans including monthly installments, milestone-based payments, and sliding scale options. We work with clients to find payment arrangements that work for their budget.',
  },
  {
    title: 'How transparent is your pricing?',
    desc: 'We provide complete transparency in our pricing structure. You\'ll receive detailed cost estimates upfront with no hidden fees, ensuring you know exactly what to expect.',
  },
  {
    title: 'Do you offer free consultations?',
    desc: 'Yes, we offer free initial consultations to understand your legal needs and provide guidance on the best course of action. This helps you make informed decisions about your legal representation.',
  },
  {
    title: 'What about legal aid coordination?',
    desc: 'We coordinate with legal aid organizations and can help clients access available financial assistance programs. We believe everyone deserves access to quality legal representation.',
  },
];

export default function LawconomicSolutionsPage() {
  pageTitle('Lawconomic Solutions - Karachi Law Firms');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Lawconomic Solutions" bgUrl="/images/Lawconomic Solutions.jpg" />




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
                <h3 className="text-white cs_mb_15">Need Financial Help?</h3>
                <p className="text-white cs_mb_25">
                  Get transparent pricing and flexible payment solutions.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src="/images/Lawconomic Solutions.jpg"
                    alt="Lawconomic Solutions"
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h2 className="cs_mb_30">Lawconomic Solutions</h2>
                  <h4 className="text-accent cs_mb_20">Transparent Pricing & Accessible Justice</h4>
                  <p className="cs_mb_30">
                    Transparent pricing, flexible payment plans, and subsidized services ensure that justice 
                    is never out of financial reach. We believe that quality legal representation should be 
                    accessible to everyone, regardless of their financial circumstances. Our innovative 
                    pricing solutions make justice affordable and accessible.
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Financial Services Include</h3>
                        <ul>
                          <li>Transparent Fee Structure</li>
                          <li>Flexible Payment Plans</li>
                          <li>Pro Bono Services</li>
                          <li>Sliding Scale Pricing</li>
                          <li>Legal Aid Coordination</li>
                          <li>Financial Planning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Financial Process</h3>
                        <ul>
                          <li>Initial Consultation (Free)</li>
                          <li>Case Assessment</li>
                          <li>Pricing Options Presentation</li>
                          <li>Payment Plan Agreement</li>
                          <li>Regular Billing Updates</li>
                          <li>Financial Support Coordination</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cs_mb_40">
                    <h3 className="cs_mb_20">Why Choose Our Financial Solutions?</h3>
                    <p className="cs_mb_20">
                      Our Lawconomic Solutions team understands that financial barriers should never prevent 
                      access to justice. We provide transparent, flexible pricing options that make quality 
                      legal services accessible to everyone, regardless of their financial situation.
                    </p>
                    <p className="cs_mb_20">
                      We believe that everyone deserves access to quality legal representation. Our innovative 
                      pricing models and financial assistance programs ensure that justice is truly accessible 
                      to all members of society.
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
                sectionTitle="Common Questions About Our Pricing"
                sectionSubTitle="Get answers to the most frequently asked questions about our transparent pricing and payment options."
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
                sectionTitle="Ready to Access Affordable Legal Services?"
                sectionSubTitle="Contact us today for a free consultation and let us show you how our transparent pricing makes quality legal services accessible to everyone."
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