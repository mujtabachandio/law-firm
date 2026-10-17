import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import FormStyle2 from '../Form/FormStyle2';
import IconboxStyle2 from '../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import Accordion from '../Accordion';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';


const faqData = [
  {
    title: 'What is the address of Karachi Law Firms?',
    desc: 'The Sindh Bar Council, which is situated on the fifth floor of the New Annex Building at the Sindh High Court in Karachi, Pakistan, works closely with Karachi Law Firms (KLF). Our Head Office is located at 104, 1st Floor, Fareed Chambers, Abdullah Haroon Road, Saddar, Karachi 74400. We also have an Islamabad Office at No. 02, Block No. 02, Street No. 31, G-8/4, Pervaiz market Near Rescue 15, Islamabad 44000. Clients can easily access these strategic locations, as they are conveniently close to corporate offices, government registers, and important court forums.',
  },
  {
    title: 'What makes Karachi Law Firms unique?',
    desc: 'KLF uses academic research, client-centered advocacy, and digital transparency to reinvent legal practice. Our smart digital case management system allows customers to track every change in real-time, while our in-house sector ensures that every settlement is based on solid principles.',
  },
  {
    title: 'How can I keep track of my case status online?',
    desc: 'Clients have complete access to their case files, hearing schedules, and document submissions using KLF\'s digital case management system. Updates are instantly communicated to clients with guaranteed transparency. This strategy is a part of our aim to provide end-to-end digital legal services for the 21st century.',
  },
  {
    title: 'Does KLF serve both business and individual clients?',
    desc: 'Yes, KLF handles both private and corporate clients. Our team includes experts from all main legal disciplines, guaranteeing a personalized approach and committed counsel for our clientele.',
  },
  {
    title: 'What legal specialties do Karachi law firms offer?',
    desc: 'Family Law, Property & Real Estate, Criminal & Civil Law, Business & Corporate Law, Documentation & Process, and Immigration & Specialized Matters are some of the practice areas in which KLF offers complete legal services. Our research and documentation teams support each department, which is run by subject-matter experts.',
  },
  {
    title: 'Does KLF help with family law issues like divorce or custody?',
    desc: 'Yes, sensitive issues involving divorce, guardianship, child custody, domestic abuse, and maintenance are handled by our Family Law Division. KLF prioritizes the protection of rights, empathy, and secrecy while finding alternate solutions or legal action if needed.',
  },
  {
    title: 'What kind of support does KLF provide in real estate and property cases?',
    desc: 'Land disputes, property transfers, tenant concerns, and paperwork are all handled by our Property & Real Estate Division. We provide legitimate transactions, title verification, and litigation help for disputed ownership or encroachments to both individual and corporate clients.',
  },
  {
    title: 'Does KLF manage cases like international law or immigration?',
    desc: 'Yes, the Immigration & Specialized Law Division of KLF provides support with international legal issues, asylum, visas, and refugees. Our attorneys take care of both advising and representational matters, making sure customers stick to regional and global legal requirements with credible documentation services.',
  },
  {
    title: 'Can KLF represent me in civil or criminal cases?',
    desc: 'Absolutely, our clients are represented by our Criminal and Civil Law team in all trial and appeal courts. From contract disputes and damages claims to bail and trial defense, KLF guarantees thorough case preparation and open communication with each client throughout the procedures.',
  },
  {
    title: 'How does KLF maintain the image of honesty and transparency?',
    desc: 'Our practice is built on transparency. Every client has complete visibility into their legal path, from digital case monitoring to research-based strategy. Accountability and peace of mind are ensured by frequent updates, filing access, and real-time communication with designated lawyers.',
  },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Karachi Law Firms | Get Legal Help Today</title>
        <meta
          name="description"
          content="Contact Karachi Law Firms for expert legal consultation and representation. Reach our team today to discuss your case."
        />
      </Helmet>
      <Breadcrumb title="Contact Us" bgUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=400&fit=crop" />
      
      <Section pt="80" ptLg="50" pb="80" pbLg="50">
        <div className="container">
          <h1 className="cs_fs_48 cs_fw_700 cs_mb_40">Contact Karachi Law Firms</h1>
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <SectionHeadingStyle3
                sectionTitleUp="Have any question?"
                sectionTitle="Write a Message"
              />
              <FormStyle2 />
              
              {/* Action Buttons */}
              <div className="cs_mt_30 d-flex justify-content-center gap-3 flex-wrap" style={{ gap: '1rem !important' }}>
                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/923000927678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success d-inline-flex align-items-center gap-2"
                  style={{ 
                    background: '#25D366', 
                    borderColor: '#25D366',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: '500',
                    minHeight: '48px',
                    borderRadius: '5px',
                    minWidth: '200px'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </a>

                {/* Google Business CTA */}
                <a 
                  href="https://share.google/hatkPxbNFz9pajryy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
                  style={{ 
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: '500',
                    minHeight: '48px',
                    borderRadius: '5px',
                    minWidth: '220px'
                  }}
                >
                  <span>View on Google Business</span>
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cs_pl_60 cs_pl_lg_0 cs_pt_lg_60">
                <SectionHeadingStyle3
                  sectionTitleUp="Contact With Us"
                  sectionTitle="Let's work together"
                  sectionSubTitle="Get in touch with our legal experts for professional advice, consultation, and comprehensive legal services tailored to your needs."
                  className="cs_mb_40"
                />
                <div className="cs_iconbox_wrapper cs_style1">
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_1.svg"
                    title="+92 300 0927678"
                    titleUp="Call Us Now"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_2.svg"
                    title="info@karachilawfirms.pk"
                    titleUp="Email Us"
                  />
                  <IconboxStyle2
                    imgUrl="/pak-flag.png"
                    title="Head Office: 104, 1st Floor, Fareed Chambers, Abdullah Haroon Road, Saddar, Karachi 74400 | Islamabad Office: No. 02, Block No. 02, Street No. 31, G-8/4, Pervaiz market Near Rescue 15, Islamabad 44000"
                    titleUp="Visit Our Offices"
                    isAddress={true}
                  />
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Google Maps Embed */}
      <Section pt="100" pb="100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-4">
                <h2 className="cs_section_title cs_mb_20" style={{ color: '#1B365D' }}>
                  Find Us
                </h2>
                <p className="cs_section_subtitle" style={{ color: '#6c757d' }}>
                  Visit our office for a personal consultation
                </p>
              </div>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226.262547958392!2d67.0270165!3d24.8569917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f61d696b981%3A0x6fa3122321d00de7!2sKarachi%20Law%20Firms!5e0!3m2!1sen!2s!4v1769789619233!5m2!1sen!2s" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0, maxWidth: '100%' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karachi Law Firms office location map"
                />
                <a 
                  href="https://maps.app.goo.gl/8XPrxhUbbA5rHHAr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                  style={{ 
                    background: '#1B365D',
                    borderColor: '#1B365D',
                    padding: '10px 24px',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '5px'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section pt="140" ptLg="80" pb="115" pbLg="55" className="cs_gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SectionHeadingStyle2
                sectionTitleUp="Frequently Asked Questions"
                sectionTitle="Common Questions About Karachi Law Firms"
                sectionSubTitle="Get answers to the most frequently asked questions about our legal services and how we can help you."
              />
            </div>
            <div className="col-lg-6">
              <Accordion data={faqData} />
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}
