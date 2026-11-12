import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import Accordion from '../Accordion';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';
import { SITE_URL } from '../../lib/sanity';
import { renderInlineLinks, stripInlineLinks } from '../../lib/inlineLinks';

/**
 * /lawyer-fees-in-karachi — the lawyer fees guide.
 *
 * Copy is from doc/Lawyer_Fees_in_Karachi_2026_2027_with_links.docx, word for
 * word. Links are written inline as [anchor](target) exactly where the brief
 * places them: the five internal ones become router links, and the three
 * external source links get rel="nofollow" as the ticket asks.
 */

const PAGE_PATH = '/lawyer-fees-in-karachi';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED = '2026-11-12';

const TITLE = 'Lawyer Fees in Karachi: Divorce, Criminal, Property';
const DESCRIPTION =
  'Lawyer fees in Karachi explained: divorce, khula, bail, property and consultation charges, extra court costs, and how to get a written fee quote.';
const H1 = 'Lawyer Fees in Karachi: Complete Cost Guide for 2026 to 2027';

const AUTHOR = {
  name: 'Ashfaq Shah Bukhari',
  role: 'Senior Partner',
  photo: '/images/AshfaqShahBukhari.jpg',
  bio: 'Ashfaq Shah Bukhari is presented as Senior Partner',
};

const INTRO = [
  'Choosing legal help is an important decision. Cost is often one of the first concerns. People may need advice about divorce, bail, property, family matters, or a legal notice. Yet the final amount can differ from one case to another. This guide explains lawyer fees in Karachi in simple terms. It covers common services, consultation charges, extra expenses, and questions to ask before you appoint an advocate.',
  'The figures below are planning estimates, not fixed market rates or a promise of the final bill. A lawyer should review your documents and explain the work before confirming a fee. If you live abroad, you can also ask whether the first discussion can take place by phone or video.',
];

const FEE_TABLE = [
  ['Initial lawyer consultation', '7,000–15,000'],
  ['Family law, including divorce or khula', '50,000–360,000'],
  ['Bail representation', '55,000–310,000'],
  ['Criminal case representation', '305,000–1,010,000'],
  ['Legal notice drafting', '30,000–160,000'],
  ['Inheritance or property transfer assistance', '20,000–510,000'],
];

/** Sections in brief order. `table: true` places the fee table after the text. */
const SECTIONS = [
  {
    heading: 'Lawyer fees in Karachi at a glance',
    paragraphs: [
      'There is no single price that applies to every legal matter. The amount depends on the type of case, the documents involved, urgency, expected hearings, and the lawyer’s experience. The table gives broad budgeting ranges for common services. Treat them as a starting point for discussion.',
      'Prices can also change when a matter involves several parties, urgent applications, missing records, or repeated court dates. Ask whether the estimate covers the whole matter or only one stage. A clear breakdown makes it easier to compare two quotes fairly.',
    ],
    table: true,
  },
  {
    heading: 'Divorce and khula lawyer fees',
    paragraphs: [
      'Divorce cases can involve several legal and personal issues. A straightforward matter may need limited advice and document preparation. A disputed matter may require more meetings, court dates, and additional applications. This is why divorce lawyer fees in Karachi can vary widely.',
      'For budgeting, the broad family-law range in the table is PKR 155,000–360,000. It can cover different levels of legal work, so it should not be read as a fixed price for every divorce. Ask whether the quote covers the initial consultation, preparation of documents, filing, court appearances, and follow-up.',
      'Khula is a legal process through which a wife seeks dissolution of the marriage through the court. Khula lawyer fees in Karachi may depend on whether the matter is contested and whether other issues need attention. These may include maintenance, return of belongings, or child arrangements. Child custody lawyer fees can also be separate when parents disagree about a child’s care.',
      'Family lawyer fees in Karachi may therefore cover more than one service. Before you agree, ask the lawyer to list each included task. If a custody or maintenance dispute begins later, ask how that work will affect the total. You can also review the firm’s [Divorce and Family Lawyer](/service/divorce-lawyer) service page for details about the relevant services.',
    ],
  },
  {
    heading: 'Criminal and bail lawyer fees',
    paragraphs: [
      'Criminal matters often need quick attention. A person may need advice after receiving a police notice, being named in an FIR, or facing an arrest risk. FIR means First Information Report. It is the first formal record of information about an alleged offence made to the police.',
      'Criminal lawyer fees in Karachi depend on the allegation, available documents, urgency, and the stage of the case. A bail application is different from full representation during a criminal trial. The indicative bail range in this guide is PKR 55,000–310,000. The broader criminal case range is PKR 305,000–1,010,000. These figures are not a guarantee of the amount any particular lawyer will charge.',
      'Ask whether the quoted amount covers drafting, filing, court appearances, and follow-up hearings. Bail lawyer fees in Karachi may cover only the bail stage. They may not include trial preparation or representation after bail. Read the proposed scope carefully and ask for separate costs in writing. For further information, visit the [Criminal Lawyer](/service/criminal-law) service page.',
    ],
  },
  {
    heading: 'Property lawyer fees',
    paragraphs: [
      'Property matters can involve ownership checks, sale documents, inheritance, transfers, possession, or disputes between family members. The amount of work depends on the property records and the problem you need to resolve. Property lawyer fees in Karachi are therefore difficult to estimate without seeing the documents.',
      'For inheritance and property-transfer assistance, the public fee guidance reviewed for this article shows a very broad range. After the requested uplift, the planning range is PKR 20,000–510,000. The lower end may relate to limited assistance. More complex work can require extra document checks, applications, or court proceedings. This range is not a standard price for a property dispute.',
      'Before hiring a property advocate, ask whether the fee includes a title review. Title means the legal record showing who owns the property. Also ask whether the lawyer will check the sale deed, registry, mutation, and relevant society records. Mutation is the process of updating ownership details in the relevant land record. Disputed ownership or possession may need a separate litigation quote. You can read more on the [Property Lawyer](/service/property-lawyer) service page.',
    ],
  },
  {
    heading: 'Lawyer consultation fee in Karachi',
    paragraphs: [
      'A consultation is an initial meeting where you explain the issue and ask about your legal options. The lawyer may review a few documents, identify possible next steps, and explain the likely scope of work. The lawyer consultation fee in Karachi depends on the practitioner, meeting length, and whether the meeting is in person or online.',
      'For this guide, the indicative consultation range is PKR 7,000–15,000. Public examples reviewed include a Pakistan-wide provider listing a PKR 2,000 consultation and a Karachi family-law practice listing PKR 5,000 for an online consultation. The figures in this guide include the requested increase. Always confirm the current fee directly before booking.',
      'An [online lawyer consultation in Karachi](/contact) can help overseas Pakistanis and people who cannot visit an office. Ask how to share documents securely and whether the lawyer can advise on the next steps remotely. Before paying, confirm the meeting length, payment method, cancellation terms, and whether the fee will be adjusted if you later hire the same lawyer.',
      'To make the meeting useful, prepare a short timeline of important events. Keep the names, dates, notices, and relevant documents ready. Tell the lawyer what outcome you are seeking and mention any upcoming deadline. This can help the lawyer focus the discussion and explain what further review may be needed.',
    ],
  },
  {
    heading: 'Extra costs besides the lawyer fee',
    paragraphs: [
      'The advocate’s professional fee may not include every expense. Court fees are charges paid for specific court filings or procedures. Stamp paper may be needed for certain documents. Notary charges may apply when a document needs formal witnessing or certification. An affidavit is a written statement confirmed under oath before an authorised person.',
      'Other expenses may include photocopies, certified copies, courier charges, travel, translation, document attestation, and process-server costs. Property matters may also involve government duties or registration charges. These amounts depend on the document and the authority involved. Ask for a separate estimate so you can distinguish the lawyer’s fee from payments made to other offices.',
    ],
  },
  {
    heading: 'How to hire a lawyer within your budget',
    paragraphs: [
      'Start by identifying the exact service you need. A consultation, a legal notice, document drafting, and full court representation are different tasks. You may not need to pay for a complete case package if you only need advice or help with one document.',
      'When you plan to hire a lawyer in Karachi, look for experience in the relevant area of law. Ask how often the lawyer handles matters like yours and which court or authority may deal with the case. A specialist may understand the procedure better than a general practitioner, but experience alone does not guarantee a result.',
      'Request a written fee quote before work begins. It should explain the work included, the payment dates, and the services that will cost extra. Ask whether the lawyer charges a fixed fee, a fee for each hearing, or a stage-based amount. Stage-based means payment is linked to agreed parts of the case. Also ask what happens if the case needs more hearings or new applications.',
      'Compare two or three suitable lawyers if time allows. Do not choose only by the lowest price. Check that the lawyer explains the process clearly and answers questions about costs. An affordable lawyer in Karachi should still provide a clear scope, proper communication, and a receipt for each payment. Ask whether instalments are possible and record any payment plan in writing.',
      'Avoid anyone who promises a guaranteed court outcome. No responsible lawyer can control the judge’s decision. Keep copies of the fee agreement, receipts, documents, and messages. These records can help prevent misunderstandings if the work or fee changes.',
    ],
  },
];

const FAQS = [
  {
    title: 'How much does a divorce lawyer cost in Karachi?',
    desc: 'A broad family-law planning range in this guide is PKR 155,000–360,000. The final amount depends on whether the matter is contested, the documents required, and whether custody or maintenance issues are included. Ask for a written quote based on your circumstances.',
  },
  {
    title: 'Is the first lawyer consultation free?',
    desc: 'Not always. Some lawyers charge for the first meeting, while others may offer a short introductory call. Ask about the fee, meeting length, and what the consultation includes before booking.',
  },
  {
    title: 'Can I pay lawyer fees in instalments?',
    desc: 'Some lawyers may agree to instalments or stage-based payments. This depends on the matter and the lawyer’s policy. Put the payment dates, amounts, and included work in writing.',
  },
  {
    title: 'Are lawyer charges in Karachi fixed?',
    desc: 'No single amount applies to every case. Advocate fees in Karachi can vary with experience, urgency, complexity, court appearances, and the work included. Treat online ranges as estimates and confirm the final fee directly.',
  },
  {
    title: 'Can overseas Pakistanis book an online consultation?',
    desc: 'Yes, many legal practices offer phone or video consultations. Share a short case summary first. Ask how to send documents, confirm the time zone, and check whether the lawyer can handle any required work in Pakistan.',
  },
  {
    title: 'How can I find an affordable lawyer in Karachi?',
    desc: 'Compare lawyers who handle your type of matter. Ask for a written scope and fee breakdown. A lower quote may exclude court appearances or document work, so compare what each quote includes.',
  },
  {
    title: 'Does the lawyer’s fee include court charges?',
    desc: 'Usually, you should confirm this separately. The professional fee may not include court fees, stamp duty, notary charges, or other filing expenses. Ask for these costs to be listed separately so you can see the full expected budget.',
  },
];

const CONCLUSION = [
  'The right legal support starts with a clear understanding of the work and its cost. Lawyer fees in Karachi can change with the type of matter, urgency, documents, and court involvement. Use the ranges in this guide only for early budgeting. Ask the advocate to review your situation and provide a written fee breakdown.',
  'If you need help with a family, criminal, or property matter, arrange a consultation before making a decision. Use the [appointment page](/contact) to request a meeting or contact the office through WhatsApp. Ask for confirmation of the appointment, the consultation fee, and the documents you should bring. A clear discussion at the start can help you plan the next steps with confidence.',
];

const NOTICE =
  'This page provides general information and budgeting estimates. It is not legal advice and does not create a lawyer-client relationship. Fees, procedures, and official charges should be confirmed for the specific matter before any payment or filing.';

/** The three external sources. The ticket asks for rel="nofollow" on each. */
const SOURCES = [
  {
    label: 'AskWakeel — Legal Fee Calculator Pakistan',
    url: 'https://www.askwakeel.pk/fee-calculator',
    note: 'Publishes indicative Pakistan-wide ranges for family law, bail, criminal cases, legal notices, and inheritance/property transfer. It states that estimates are not final quotations.',
  },
  {
    label: 'Family Law Karachi — Book a Consultation',
    url: 'https://www.familylawkarachi.com/book-consultation/',
    note: 'Displays a PKR 5,000 online consultation fee on its Karachi consultation page.',
  },
  {
    label: 'Pak Legal Desk — Legal Consultation Fees in Pakistan',
    url: 'https://paklegaldesk.com/legal-consultation-cost-pakistan/',
    note: 'Provides general context on consultation arrangements, written fee agreements, and expenses separate from professional fees. Legal references on that page should be independently checked before any legal claim is added.',
  },
];

const BODY_TEXT = { color: '#555', lineHeight: '1.8' };
const LINK_STYLE = { fontWeight: 600 };

function AuthorCard({ compact = false }) {
  const size = compact ? 56 : 88;
  return (
    <div
      className="d-flex align-items-center"
      style={{
        gap: compact ? '14px' : '20px',
        padding: compact ? '12px 16px' : '22px 24px',
        border: '1px solid #e3e6ee',
        borderRadius: '10px',
        backgroundColor: '#fff',
        maxWidth: compact ? '360px' : 'none',
      }}
    >
      <img
        src={AUTHOR.photo}
        alt={`${AUTHOR.name}, ${AUTHOR.role}, Karachi Law Firms`}
        width={size}
        height={size}
        loading={compact ? 'eager' : 'lazy'}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #1f3a5f',
          flexShrink: 0,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div
          className={compact ? 'cs_fs_18' : 'cs_fs_22'}
          style={{ fontWeight: 700, color: '#1f3a5f', lineHeight: 1.25 }}
        >
          <Link to="/team" style={{ color: 'inherit' }}>
            {AUTHOR.name}
          </Link>
        </div>
        <div className="cs_fs_16" style={{ color: '#666' }}>
          {AUTHOR.role}
        </div>
        {!compact && (
          <p className="cs_fs_16 cs_mb_0 cs_mt_10" style={BODY_TEXT}>
            {AUTHOR.bio}
          </p>
        )}
      </div>
    </div>
  );
}

export default function LawyerFeesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: H1,
    description: DESCRIPTION,
    image: `${SITE_URL}${AUTHOR.photo}`,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      image: `${SITE_URL}${AUTHOR.photo}`,
      worksFor: { '@type': 'LegalService', name: 'Karachi Law Firms', url: SITE_URL },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Karachi Law Firms',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/main-logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: { '@type': 'Answer', text: stripInlineLinks(faq.desc) },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Lawyer Fees in Karachi', item: PAGE_URL },
    ],
  };

  const faqItems = FAQS.map((faq) => ({
    title: faq.title,
    desc: renderInlineLinks(faq.desc, { linkStyle: LINK_STYLE }),
  }));

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Breadcrumb
        title="Lawyer Fees in Karachi"
        bgUrl="/images/attorney-page.jpg"
        trail={[{ label: 'Lawyer Fees in Karachi' }]}
      />

      <Section pt="80" ptLg="50" pb="40" pbLg="30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <h1 className="cs_fs_44 cs_fs_lg_30 cs_fw_700 cs_mb_25">{H1}</h1>

              {INTRO.map((text) => (
                <p key={text.slice(0, 24)} className="cs_fs_18 cs_fs_lg_16 cs_mb_20" style={BODY_TEXT}>
                  {renderInlineLinks(text, { linkStyle: LINK_STYLE })}
                </p>
              ))}

              <div className="cs_mb_40 cs_mt_10">
                <AuthorCard compact />
              </div>

              {SECTIONS.map((section) => (
                <div key={section.heading} className="cs_mb_40">
                  <h2 className="cs_fs_30 cs_fs_lg_24 cs_fw_700 cs_mb_20">{section.heading}</h2>
                  {section.paragraphs.map((text) => (
                    <p key={text.slice(0, 24)} className="cs_fs_17 cs_fs_lg_16 cs_mb_20" style={BODY_TEXT}>
                      {renderInlineLinks(text, { linkStyle: LINK_STYLE })}
                    </p>
                  ))}

                  {section.table && (
                    // Scrolls sideways inside its own box on a narrow phone
                    // rather than pushing the whole page wider than the screen.
                    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                      <table
                        className="cs_mb_10"
                        style={{
                          width: '100%',
                          minWidth: '320px',
                          borderCollapse: 'collapse',
                          border: '1px solid #e3e6ee',
                          backgroundColor: '#fff',
                        }}
                      >
                        <caption className="cs_fs_14" style={{ captionSide: 'bottom', color: '#777', paddingTop: '8px' }}>
                          Indicative planning ranges only. Confirm the fee for your matter in writing.
                        </caption>
                        <thead>
                          {/*
                            Colour set on each <th>, not the row: the theme
                            gives th its own dark text colour, which beat the
                            inherited white and left the header unreadable on
                            navy.
                          */}
                          <tr style={{ backgroundColor: '#1f3a5f' }}>
                            <th scope="col" style={{ padding: '12px 14px', textAlign: 'left', color: '#fff' }}>
                              Legal service
                            </th>
                            <th
                              scope="col"
                              style={{ padding: '12px 14px', textAlign: 'right', whiteSpace: 'nowrap', color: '#fff' }}
                            >
                              Indicative fee range (PKR)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {FEE_TABLE.map(([service, range], i) => (
                            <tr key={service} style={{ backgroundColor: i % 2 ? '#f7f8fb' : '#fff' }}>
                              <td style={{ padding: '12px 14px', borderTop: '1px solid #e3e6ee' }}>{service}</td>
                              <td
                                style={{
                                  padding: '12px 14px',
                                  borderTop: '1px solid #e3e6ee',
                                  textAlign: 'right',
                                  fontWeight: 700,
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {range}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <div className="cs_mb_40">
                <h2 className="cs_fs_30 cs_fs_lg_24 cs_fw_700 cs_mb_20">Frequently asked questions</h2>
                <Accordion data={faqItems} />
              </div>

              <div className="cs_mb_40">
                <h2 className="cs_fs_30 cs_fs_lg_24 cs_fw_700 cs_mb_20">
                  Conclusion: understand the fee before you proceed
                </h2>
                {CONCLUSION.map((text) => (
                  <p key={text.slice(0, 24)} className="cs_fs_17 cs_fs_lg_16 cs_mb_20" style={BODY_TEXT}>
                    {renderInlineLinks(text, { linkStyle: LINK_STYLE })}
                  </p>
                ))}
              </div>

              <div className="cs_mb_40">
                <h2 className="cs_fs_30 cs_fs_lg_24 cs_fw_700 cs_mb_20">About the author</h2>
                <AuthorCard />
              </div>

              <div
                className="cs_mb_30"
                style={{
                  backgroundColor: '#faf9f6',
                  borderLeft: '4px solid #c9a227',
                  borderRadius: '6px',
                  padding: '18px 20px',
                }}
              >
                <p className="cs_fs_16 cs_mb_0" style={BODY_TEXT}>
                  <strong>Legal information notice: </strong>
                  {NOTICE}
                </p>
              </div>

              <div>
                <h2 className="cs_fs_20 cs_fs_lg_18 cs_fw_700 cs_mb_15">Source checks used for fee context:</h2>
                <ul className="cs_fs_16" style={{ ...BODY_TEXT, paddingLeft: '20px' }}>
                  {SOURCES.map((source) => (
                    <li key={source.url} className="cs_mb_10">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={LINK_STYLE}
                      >
                        {source.label}
                      </a>{' '}
                      — {source.note}
                    </li>
                  ))}
                </ul>
              </div>
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
          backgroundImage: 'url("/images/attorney-page.jpg")',
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
}
