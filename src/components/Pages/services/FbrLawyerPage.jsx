import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';
import { SITE_URL } from '../../../lib/sanity';

const PAGE_PATH = '/service/fbr-lawyer';

/**
 * The services on offer, in the order the content brief gives them.
 *
 * `link` is set only where an existing page genuinely covers the ground the
 * paragraph describes, so the internal links point somewhere useful rather
 * than being added for their own sake.
 */
const FBR_SERVICES = [
  {
    title: 'FBR Notice Reply and Audit Representation',
    body: 'We prepare a tax notice reply based on the allegations, applicable law and supporting records. Our services cover show cause notices, FBR audit representation and amendment of assessment cases. If you need an FBR audit lawyer in Karachi, we can review discrepancies, organise evidence and present your response within the applicable deadline.',
  },
  {
    title: 'Income Tax and Sales Tax Return Filing',
    body: 'Our tax return filing services cover salaried individuals, business owners and companies, alongside sales tax returns, wealth statements and withholding tax statements. We review the records relevant to your filing and check consistency between declared income, assets and supporting documents. An income tax lawyer can also advise on discrepancies requiring correction.',
  },
  {
    title: 'NTN, STRN and ATL Registration',
    body: 'We assist individuals, Associations of Persons (AOPs) and companies with National Tax Number (NTN) registration and eligible businesses with Sales Tax Registration Number (STRN) applications. We also support Active Taxpayer List (ATL) inclusion requirements, WeBOC registration for importers and exporters, and NTN cancellation or business closure procedures. NTN registration alone does not establish active taxpayer status.',
    link: { to: '/service/company-registration', label: 'Company registration services' },
  },
  {
    title: 'FBR Appeals (CIR Appeals, ATIR, High Court)',
    body: 'We assess disputed orders and prepare appeals before the Commissioner Inland Revenue (Appeals) or Appellate Tribunal Inland Revenue (ATIR), according to the applicable jurisdiction. Services also include High Court references in tax matters and eligible Alternative Dispute Resolution Committee (ADRC) cases. Each matter requires a review of legal grounds, evidence, deadlines and available remedies.',
    link: { to: '/service/civil-lawyer', label: 'Civil litigation services' },
  },
  {
    title: 'Tax Refunds and Recovery Relief',
    body: 'We assist with income tax refund claims, sales tax refund claims and export rebate claims, including supporting records and follow-up. Where recovery proceedings affect your finances, we assess grounds for challenging bank account attachment or seeking a stay against recovery. We also review the legal basis for penalty and default surcharge reduction or cancellation.',
  },
  {
    title: 'Customs and Import Issues',
    body: 'Customs clearance problems can delay shipments and increase business costs. We advise on import issues, customs valuation disputes and customs appeals, reviewing declarations, transaction documents and the relevant departmental decision. Our approach identifies the disputed issue and the procedure available to address it, with attention to the commercial consequences of delay.',
  },
  {
    title: 'Tax Advisory and Certificates',
    body: 'We provide tax planning and compliance advice for individuals and businesses, including guidance on Federal Excise Duty (FED) registration and obligations. Services also cover applications for exemption certificates, lower withholding rate certificates and tax clearance documentation where applicable. Advice reflects your circumstances and the legal requirements governing the relevant application.',
    link: { to: '/service/corporate-legal-support', label: 'Corporate legal support' },
  },
];

const WHY_US = [
  {
    title: 'Advice connected to your case',
    body: 'Your tax position depends on the notice, assessment history and records behind it. Our approach connects these details to the available legal options, so you understand what requires attention and why. Whether you need routine compliance support or an income tax lawyer in Karachi for a dispute, the scope of work starts with your circumstances.',
  },
  {
    title: 'Preparation for the relevant forum',
    body: 'A departmental reply, tribunal appeal and High Court reference require different preparation. We identify the appropriate forum and shape submissions around its requirements. The focus is on clear grounds, relevant documents and a coherent presentation of your position.',
  },
  {
    title: 'Clear scope and fees',
    body: 'Before engagement, discuss the proposed work, professional fees and any separate filing or other expenses. A written scope and fee estimate help establish expectations, including whether later proceedings will require a separate engagement.',
  },
];

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Consultation',
    body: 'Share your notice, order or compliance requirement. We discuss the issue, identify urgent dates and explain what information is needed for an initial assessment.',
  },
  {
    step: '2',
    title: 'Document Review',
    body: 'We examine relevant returns, financial records and correspondence to understand the facts, identify gaps and assess the available course of action.',
  },
  {
    step: '3',
    title: 'Filing or Representation',
    body: 'Once the scope is agreed, we prepare the required application, return, reply or appeal and undertake the agreed representation before the relevant authority or forum.',
  },
  {
    step: '4',
    title: 'Follow-Up',
    body: 'We track the matter through the agreed stage, address further requirements and explain the next steps arising from a hearing, departmental response or decision.',
  },
];

const FAQS = [
  {
    title: 'What are the fees for FBR lawyers in Karachi?',
    desc:
      'Fees depend on the matter’s complexity, document volume, urgency and representation required. Return filing and contested litigation involve different work. Request a written estimate stating the services covered, separate expenses and charges for any additional proceedings.',
  },
  {
    title: 'What are the FBR tax rates for 2026?',
    desc:
      'There is no single FBR tax rate. The applicable rate depends on the relevant tax year, income category, taxpayer type and transaction. Your filing status may also affect withholding. Ask for a calculation using the legislation applicable to your circumstances.',
  },
  {
    title: 'How do I choose the best FBR lawyer in Karachi?',
    desc:
      'If you are searching for “taxation lawyers near me,” consider relevant tax practice, professional credentials and the lawyer’s explanation of your options. Ask who will handle the matter, how updates will be provided and what the fee includes.',
  },
  {
    title: 'Which FBR office handles tax cases in Karachi?',
    desc:
      'The responsible office depends on your assigned jurisdiction and the matter involved. Check your notice, order or registration record for the issuing authority. Customs matters and tax appeals may proceed through different offices or forums.',
  },
  {
    title: 'What should I do if I receive an FBR notice?',
    desc:
      'Read the notice carefully, note its response deadline and preserve the relevant records. Seek advice promptly so the allegations and requested information can be reviewed. A reply should address the specific issues with supporting evidence.',
  },
  {
    title: 'How long does an FBR appeal take?',
    desc:
      'Duration varies with the forum, hearing schedule, complexity and procedural developments. Filing deadlines require separate attention and should be checked immediately. After reviewing your order, a lawyer can explain the process and factors likely to affect progress.',
  },
  {
    title: 'What documents are needed to reply to an FBR notice?',
    desc:
      'Start with the complete notice, relevant returns, earlier correspondence and any assessment orders. Depending on the issue, supporting records may include bank statements, invoices, salary certificates, withholding evidence, accounts and wealth statements. The notice determines the final document list.',
  },
  {
    title: 'Can a lawyer remove an FBR bank account attachment?',
    desc:
      'A lawyer can examine the demand and attachment, assess procedural or legal objections, and pursue available relief. Release or a stay depends on the facts, applicable law and the competent authority’s decision; it cannot be guaranteed.',
  },
];

const FbrLawyerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // The eight questions above, offered to Google as rich-result data. Built
  // from the same array the page renders, so the two cannot drift apart.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: { '@type': 'Answer', text: faq.desc },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Corporate Law',
        item: `${SITE_URL}/service/corporate-law`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'FBR Tax Lawyer',
        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>FBR Tax Lawyer in Karachi | Income Tax Lawyer Services</title>
        <meta
          name="description"
          content="Need an FBR tax lawyer in Karachi? We handle NTN registration, tax returns, FBR notices, audits, appeals and refunds. Book a consultation today."
        />
        <meta
          name="keywords"
          content="FBR tax lawyer in Karachi, income tax lawyer in Karachi, FBR audit lawyer in Karachi, taxation lawyers near me, FBR notice reply, FBR appeal lawyer"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/*
        The URL sits under /service, but the page is filed under Corporate Law,
        so the trail is stated rather than derived from the path.
      */}
      <Breadcrumb
        title="FBR Tax Lawyer"
        bgUrl="/images/CorporateLegalSupport.jpg"
        trail={[
          { label: 'Corporate Law', to: '/service/corporate-law' },
          { label: 'FBR Tax Lawyer' },
        ]}
      />

      {/* Introduction */}
      <Section pt="140" ptLg="80" pb="60" pbLg="40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="cs_fs_48 cs_fs_lg_30 cs_fw_700 cs_mb_30 text-center">
                FBR Tax Lawyer in Karachi for Notices, Audits and Appeals
              </h1>
              <p
                className="cs_fs_18 cs_fs_lg_16 cs_lh_lg cs_mb_30"
                style={{ color: '#555', lineHeight: '1.8' }}
              >
                An FBR notice, disputed assessment or frozen bank account calls for
                prompt legal attention. KLF provides support with Federal Board of
                Revenue matters, from registration and routine compliance to audits,
                appeals and recovery proceedings. Consult an FBR tax lawyer in Karachi
                to understand your position and the steps available.
              </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
                >
                  <span>Book a Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section pt="60" ptLg="40" pb="60" pbLg="40" className="bg-gray">
        <div className="container">
          <SectionHeadingStyle2
            sectionTitle="Our FBR Services in Karachi"
            sectionSubTitle="Federal Board of Revenue matters, from registration and filing through to audits, appeals and recovery."
          />
          <div className="cs_height_50 cs_height_lg_35" />
          <div className="row">
            {FBR_SERVICES.map((service) => (
              <div className="col-lg-6 cs_mb_30" key={service.title}>
                <div
                  className="h-100"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    padding: '28px',
                  }}
                >
                  <h2 className="cs_fs_22 cs_fs_lg_20 cs_fw_700 cs_mb_15">
                    {service.title}
                  </h2>
                  <p
                    className="cs_fs_17 cs_fs_lg_16 cs_mb_0"
                    style={{ color: '#555', lineHeight: '1.8' }}
                  >
                    {service.body}
                  </p>
                  {service.link && (
                    <p className="cs_fs_16 cs_mb_0 cs_mt_15">
                      <Link to={service.link.to} style={{ fontWeight: 600 }}>
                        {service.link.label}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section pt="60" ptLg="40" pb="60" pbLg="40">
        <div className="container">
          <SectionHeadingStyle2
            sectionTitle="Why Choose Us for FBR Matters in Karachi"
            sectionSubTitle="What you can expect from the way we take on a tax matter."
          />
          <div className="cs_height_50 cs_height_lg_35" />
          <div className="row">
            {WHY_US.map((item) => (
              <div className="col-lg-4 cs_mb_30" key={item.title}>
                <div className="h-100">
                  <h2 className="cs_fs_20 cs_fs_lg_18 cs_fw_700 cs_mb_15">
                    {item.title}
                  </h2>
                  <p
                    className="cs_fs_17 cs_fs_lg_16 cs_mb_0"
                    style={{ color: '#555', lineHeight: '1.8' }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section pt="60" ptLg="40" pb="60" pbLg="40" className="bg-gray">
        <div className="container">
          <SectionHeadingStyle2
            sectionTitle="How It Works"
            sectionSubTitle="Four stages, from the first conversation to the outcome of your matter."
          />
          <div className="cs_height_50 cs_height_lg_35" />
          <div className="row">
            {HOW_IT_WORKS.map((item) => (
              <div className="col-lg-3 col-md-6 cs_mb_30" key={item.step}>
                <div
                  className="h-100"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    padding: '24px',
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center cs_mb_15"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#faf9f6',
                      border: '1px solid #e7e2d2',
                      fontWeight: 700,
                    }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>
                  <h2 className="cs_fs_20 cs_fs_lg_18 cs_fw_700 cs_mb_10">
                    {item.title}
                  </h2>
                  <p
                    className="cs_fs_16 cs_mb_0"
                    style={{ color: '#555', lineHeight: '1.8' }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section pt="60" ptLg="40" pb="60" pbLg="40">
        <div className="container">
          <SectionHeadingStyle2
            sectionTitle="Frequently Asked Questions"
            sectionSubTitle="Common questions about FBR notices, appeals, fees and registration."
          />
          <div className="cs_height_50 cs_height_lg_35" />
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Accordion data={FAQS} />
            </div>
          </div>
        </div>
      </Section>

      {/* Closing call to action */}
      <Section pt="60" ptLg="40" pb="60" pbLg="40" className="bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2 className="cs_fs_32 cs_fs_lg_24 cs_fw_700 cs_mb_20">
                Speak to an FBR Tax Lawyer in Karachi
              </h2>
              <p
                className="cs_fs_18 cs_fs_lg_16 cs_mb_30"
                style={{ color: '#555', lineHeight: '1.8' }}
              >
                Contact KLF to discuss your notice, audit, appeal or compliance
                requirement. Bring the relevant documents and any approaching deadline
                so the consultation can focus on your immediate priorities and an
                appropriate next step.
              </p>
              <Link
                to="/contact"
                className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
              >
                <span>Book Your FBR Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        pt="50"
        ptLg="30"
        pb="50"
        pbLg="30"
        className="background-filled overflow-hidden position-relative"
        style={{
          backgroundImage: 'url("/images/CorporateLegalSupport.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <ContactSectionBottom />
        </div>
      </Section>
    </>
  );
};

export default FbrLawyerPage;
