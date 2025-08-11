import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import Accordion from '../Accordion';
import IconboxStyle5 from '../Iconbox/IconboxStyle5';
import { NavLink } from 'react-router-dom';
import FormStyle6 from '../Form/FormStyle6';
import Button from '../Button';
import { pageTitle } from '../../helpers/PageTitle';

// Comprehensive service data with unique content for each service
const serviceData = {
  'constitutional-advocacy': {
    title: 'Constitutional Advocacy',
    subtitle: 'Defending Civil Liberties & Democratic Principles',
    description: 'We stand where it matters most — defending civil liberties, minority rights, and democratic principles. Our team specializes in high-impact constitutional litigation.',
    imageUrl: '/images/Constitutional-Advocacy.JPG',
    features: [
      'Civil Rights Litigation',
      'Constitutional Challenges',
      'Human Rights Advocacy',
      'Public Interest Law',
      'Judicial Review Cases',
      'Constitutional Interpretation'
    ],
    process: [
      'Initial Case Assessment',
      'Constitutional Analysis',
      'Legal Strategy Development',
      'Court Representation',
      'Appellate Advocacy',
      'Public Interest Campaigns'
    ],
    faq: [
      {
        title: 'What types of constitutional cases do you handle?',
        desc: 'We handle a wide range of constitutional matters including civil rights violations, freedom of expression cases, minority rights protection, and challenges to unconstitutional laws and policies.'
      },
      {
        title: 'How do you approach constitutional advocacy?',
        desc: 'Our approach combines deep constitutional knowledge with strategic litigation, public awareness campaigns, and academic research to create lasting legal precedents and social impact.'
      }
    ]
  },
  'digital-case-management': {
    title: 'Digital Case Management',
    subtitle: 'Transparent Legal Process Tracking',
    description: 'Track your legal case in real time, securely share documents, and get consistent updates — all from your phone or computer.',
    imageUrl: '/images/DigitalCaseManagement.jpg',
    features: [
      'Real-time Case Tracking',
      'Secure Document Sharing',
      'Milestone Notifications',
      'Client Portal Access',
      'Digital Evidence Management',
      'Transparent Communication'
    ],
    process: [
      'Digital Case Setup',
      'Document Upload & Organization',
      'Progress Tracking',
      'Client Communication Portal',
      'Milestone Updates',
      'Case Completion Reports'
    ],
    faq: [
      {
        title: 'How secure is the digital case management system?',
        desc: 'Our system uses enterprise-grade encryption and security protocols to ensure your legal documents and communications remain completely confidential and protected.'
      },
      {
        title: 'Can I access my case information from anywhere?',
        desc: 'Yes, our digital platform is accessible 24/7 from any device with internet access, allowing you to stay informed about your case progress at all times.'
      }
    ]
  },
  'lawcademics': {
    title: 'Lawcademics Division',
    subtitle: 'Where Legal Practice Meets Academic Research',
    description: 'Where legal practice meets legal theory. Our research-backed legal arguments and academic publications support our court strategy.',
    imageUrl: '/images/LawcademicsDivision.jpg',
    features: [
      'Legal Research & Analysis',
      'Academic Publications',
      'Policy Development',
      'Legal Education',
      'Comparative Law Studies',
      'Interdisciplinary Research'
    ],
    process: [
      'Research Methodology Design',
      'Legal Literature Review',
      'Comparative Analysis',
      'Policy Recommendations',
      'Academic Writing',
      'Knowledge Dissemination'
    ],
    faq: [
      {
        title: 'What research areas does your division focus on?',
        desc: 'We focus on constitutional law, human rights, comparative legal systems, policy development, and interdisciplinary research combining law with economics, sociology, and political science.'
      },
      {
        title: 'How does research support your legal practice?',
        desc: 'Our research provides evidence-based legal arguments, policy insights, and academic credibility that strengthens our court representation and advocacy efforts.'
      }
    ]
  },
  'corporate-legal-support': {
    title: 'Corporate Legal Support',
    subtitle: 'Business Law Solutions for Modern Economy',
    description: "From compliance to contract negotiation, our business law services are tailored for Pakistan's modern economy — especially startups and tech-enabled enterprises.",
    imageUrl: '/images/CorporateLegalSupport.jpg',
    features: [
      'Business Formation',
      'Contract Negotiation',
      'Regulatory Compliance',
      'Corporate Governance',
      'Mergers & Acquisitions',
      'Intellectual Property'
    ],
    process: [
      'Business Structure Analysis',
      'Legal Compliance Audit',
      'Documentation Preparation',
      'Ongoing Legal Support',
      'Compliance Monitoring',
      'Strategic Legal Advice'
    ],
    faq: [
      {
        title: 'What legal structure is best for my business?',
        desc: 'The optimal structure depends on business size, liability concerns, tax implications, and growth plans. We analyze your specific needs and recommend the best approach.'
      },
      {
        title: 'How do you help with regulatory compliance?',
        desc: 'We conduct compliance audits, provide ongoing monitoring, and ensure your business meets all legal and regulatory requirements in Pakistan.'
      }
    ]
  },
  'lawconomic-solutions': {
    title: 'Lawconomic Solutions',
    subtitle: 'Affordable Legal Services',
    description: 'Transparent pricing, flexible payment plans, and subsidized services ensure that justice is never out of financial reach.',
    imageUrl: '/images/Lawconomic Solutions.jpg',
    features: [
      'Transparent Pricing',
      'Flexible Payment Plans',
      'Subsidized Services',
      'Cost-Benefit Analysis',
      'Financial Planning',
      'Access to Justice'
    ],
    process: [
      'Initial Cost Assessment',
      'Payment Plan Options',
      'Service Delivery',
      'Regular Billing',
      'Payment Tracking',
      'Ongoing Support'
    ],
    faq: [
      {
        title: 'What payment plans do you offer?',
        desc: 'We offer flexible payment plans including monthly installments, milestone-based payments, and sliding scale fees based on financial need.'
      },
      {
        title: 'How do you ensure transparency in pricing?',
        desc: 'We provide detailed cost breakdowns, no hidden fees, and clear communication about all costs before beginning any legal work.'
      }
    ]
  }
};

// Continue with more services...
const additionalServiceData = {
  'divorce-lawyer': {
    title: 'Divorce Lawyer',
    subtitle: 'Compassionate Family Law Representation',
    description: 'Expert family law representation for divorce proceedings, property division, and alimony arrangements with compassionate legal guidance.',
    imageUrl: '/images/Divorce Lawyer.jpg',
    features: ['Divorce Proceedings', 'Property Division', 'Alimony Arrangements', 'Child Support', 'Mediation Services', 'Court Representation'],
    process: ['Initial Consultation', 'Case Assessment', 'Mediation Attempt', 'Court Filing', 'Negotiation', 'Final Settlement'],
    faq: [
      {
        title: 'How long does a divorce case typically take?',
        desc: 'Divorce cases can take 3-12 months depending on complexity, cooperation between parties, and court schedules. We work to expedite the process while protecting your interests.'
      }
    ]
  },
  'child-custody': {
    title: 'Child Custody',
    subtitle: 'Child-Focused Family Law Solutions',
    description: 'Specialized legal services for child custody arrangements, visitation rights, and family law matters with child-focused approach.',
    imageUrl: '/images/Child Custody.jpg',
    features: ['Custody Arrangements', 'Visitation Rights', 'Child Support', 'Guardianship', 'Parental Rights', 'Best Interest Advocacy'],
    process: ['Child Welfare Assessment', 'Parental Capacity Evaluation', 'Custody Agreement Drafting', 'Court Representation', 'Mediation Services', 'Ongoing Support'],
    faq: [
      {
        title: 'How is child custody determined in Pakistan?',
        desc: 'Custody is determined based on the child\'s best interests, considering factors like parental capability, child\'s age and preference, and living conditions.'
      }
    ]
  },
  'guardianship-lawyer': {
    title: 'Guardianship Lawyer',
    subtitle: 'Protecting Vulnerable Individuals',
    description: 'Legal assistance for guardianship proceedings, conservatorship matters, and protection of vulnerable individuals.',
    imageUrl: '/images/Guardianship Lawyer.jpg',
    features: ['Guardianship Proceedings', 'Conservatorship', 'Estate Management', 'Vulnerable Person Protection', 'Legal Capacity Assessment', 'Ongoing Oversight'],
    process: ['Capacity Assessment', 'Guardian Selection', 'Court Petition Filing', 'Background Investigation', 'Guardian Appointment', 'Regular Monitoring'],
    faq: [
      {
        title: 'When is guardianship necessary?',
        desc: 'Guardianship is necessary when an individual cannot make decisions for themselves due to age, disability, or mental incapacity.'
      }
    ]
  },
  'domestic-violence-lawyer': {
    title: 'Domestic Violence Lawyer',
    subtitle: 'Protection and Justice for Victims',
    description: 'Compassionate legal representation for domestic violence cases, protection orders, and family safety matters.',
    imageUrl: '/images/Domestic Violence Lawyer.jpg',
    features: ['Protection Orders', 'Emergency Relief', 'Criminal Defense', 'Family Safety Planning', 'Victim Advocacy', 'Legal Support Services'],
    process: ['Emergency Assessment', 'Protection Order Filing', 'Safety Planning', 'Court Representation', 'Ongoing Support', 'Recovery Assistance'],
    faq: [
      {
        title: 'How quickly can I get a protection order?',
        desc: 'Emergency protection orders can be obtained within 24-48 hours in urgent cases. We prioritize victim safety and immediate legal protection.'
      }
    ]
  },
  'property-lawyer': {
    title: 'Property Lawyer',
    subtitle: 'Comprehensive Real Estate Legal Services',
    description: 'Comprehensive real estate legal services including property disputes, land acquisition, and real estate transaction documentation.',
    imageUrl: '/images/Property Lawyer.jpg',
    features: ['Property Disputes', 'Land Acquisition', 'Real Estate Transactions', 'Property Registration', 'Tenant Rights', 'Development Law'],
    process: ['Property Analysis', 'Legal Due Diligence', 'Documentation Review', 'Negotiation', 'Registration Assistance', 'Dispute Resolution'],
    faq: [
      {
        title: 'What documents do I need for property transactions?',
        desc: 'Required documents include title deeds, property tax records, NOC certificates, and ownership verification. We help gather and verify all necessary documentation.'
      }
    ]
  },
  'inheritance-of-property': {
    title: 'Inheritance of Property',
    subtitle: 'Expert Estate Settlement Services',
    description: 'Specialized legal services for inheritance disputes, property distribution, and estate settlement matters.',
    imageUrl: '/images/Inheritance of Property.jpg',
    features: ['Estate Planning', 'Property Distribution', 'Inheritance Disputes', 'Succession Certificate', 'Will Execution', 'Estate Administration'],
    process: ['Estate Assessment', 'Heir Identification', 'Property Valuation', 'Distribution Planning', 'Legal Documentation', 'Final Settlement'],
    faq: [
      {
        title: 'How is property divided among heirs?',
        desc: 'Property division follows Islamic inheritance laws and Pakistani succession laws, with specific shares for different family members.'
      }
    ]
  },
  'succession-certificate': {
    title: 'Succession Certificate',
    subtitle: 'Legal Heirship Documentation',
    description: 'Expert legal assistance for succession certificate applications, inheritance matters, and estate planning.',
    imageUrl: '/images/Succession Certificate.jpg',
    features: ['Succession Certificate Application', 'Heir Verification', 'Documentation Assistance', 'Court Representation', 'Certificate Issuance', 'Follow-up Support'],
    process: ['Heir Identification', 'Documentation Gathering', 'Application Filing', 'Court Proceedings', 'Certificate Issuance', 'Property Transfer'],
    faq: [
      {
        title: 'How long does it take to get a succession certificate?',
        desc: 'Succession certificate applications typically take 3-6 months depending on court schedules and documentation completeness.'
      }
    ]
  },
  'criminal-lawyer': {
    title: 'Criminal Lawyer',
    subtitle: 'Aggressive Criminal Defense',
    description: 'Experienced criminal defense attorneys providing aggressive representation for all types of criminal cases and legal proceedings.',
    imageUrl: '/images/Criminal Lawyer.jpg',
    features: ['Criminal Defense', 'Bail Applications', 'Evidence Analysis', 'Witness Preparation', 'Plea Negotiations', 'Appellate Advocacy'],
    process: ['Case Analysis', 'Evidence Review', 'Defense Strategy', 'Court Representation', 'Client Communication', 'Appeal Preparation'],
    faq: [
      {
        title: 'What should I do if I\'m arrested?',
        desc: 'Remain silent, request legal representation immediately, and contact our office. We provide 24/7 emergency legal assistance.'
      }
    ]
  },
  'civil-lawyer': {
    title: 'Civil Lawyer',
    subtitle: 'Expert Civil Litigation',
    description: 'Expert civil litigation representation for disputes, contract matters, and civil legal proceedings.',
    imageUrl: '/images/Civil Lawyer.jpg',
    features: ['Civil Litigation', 'Contract Disputes', 'Property Disputes', 'Tort Claims', 'Commercial Disputes', 'Alternative Dispute Resolution'],
    process: ['Case Evaluation', 'Legal Strategy', 'Documentation', 'Negotiation', 'Court Representation', 'Settlement or Trial'],
    faq: [
      {
        title: 'How do I know if I have a strong civil case?',
        desc: 'We evaluate case strength based on evidence, legal merit, damages, and likelihood of success. Free consultations help assess your case.'
      }
    ]
  },
  'fia-lawyer': {
    title: 'F.I.A Lawyer',
    subtitle: 'Federal Investigation Agency Defense',
    description: 'Specialized representation for Federal Investigation Agency cases, white-collar crimes, and federal legal proceedings.',
    imageUrl: '/images/F.I.A Lawyer.jpg',
    features: ['FIA Case Defense', 'White-collar Crime Defense', 'Federal Proceedings', 'Cyber Crime Defense', 'Financial Crime Defense', 'Federal Appeals'],
    process: ['Case Analysis', 'Federal Procedure Review', 'Evidence Examination', 'Federal Court Representation', 'Client Protection', 'Appeal Strategy'],
    faq: [
      {
        title: 'What types of cases does FIA handle?',
        desc: 'FIA handles cyber crimes, financial fraud, human trafficking, immigration violations, and other federal offenses.'
      }
    ]
  },
  'legal-notice': {
    title: 'Legal Notice',
    subtitle: 'Professional Legal Notice Services',
    description: 'Professional legal notice drafting and serving services for various legal matters and dispute resolution.',
    imageUrl: '/images/Legal Notice.jpg',
    features: ['Notice Drafting', 'Legal Documentation', 'Notice Serving', 'Response Handling', 'Dispute Resolution', 'Legal Compliance'],
    process: ['Case Assessment', 'Notice Drafting', 'Legal Review', 'Notice Serving', 'Response Monitoring', 'Follow-up Action'],
    faq: [
      {
        title: 'How long does a legal notice remain valid?',
        desc: 'Legal notices typically have a 30-day response period, but validity depends on the specific legal matter and court requirements.'
      }
    ]
  },
  'company-lawyer': {
    title: 'Company Lawyer',
    subtitle: 'Comprehensive Corporate Legal Services',
    description: 'Comprehensive corporate legal services including business formation, compliance, and corporate governance.',
    imageUrl: '/images/Company Lawyer.jpg',
    features: ['Corporate Formation', 'Corporate Governance', 'Regulatory Compliance', 'Contract Drafting', 'Mergers & Acquisitions', 'Corporate Litigation'],
    process: ['Business Structure Analysis', 'Legal Compliance Audit', 'Documentation Preparation', 'Registration Assistance', 'Ongoing Support', 'Compliance Monitoring'],
    faq: [
      {
        title: 'What legal structure is best for my business?',
        desc: 'The optimal structure depends on business size, liability concerns, tax implications, and growth plans. We analyze your specific needs.'
      }
    ]
  },
  'company-registration': {
    title: 'Company Registration',
    subtitle: 'Complete Business Registration Services',
    description: 'Complete business registration services including company formation, legal compliance, and corporate documentation.',
    imageUrl: '/images/Company Registration.jpg',
    features: ['Company Formation', 'Legal Compliance', 'Corporate Documentation', 'Tax Registration', 'Business Licensing', 'Regulatory Filings'],
    process: ['Business Planning', 'Structure Selection', 'Documentation Preparation', 'Registration Filing', 'Compliance Setup', 'Ongoing Support'],
    faq: [
      {
        title: 'How long does company registration take?',
        desc: 'Company registration typically takes 2-4 weeks depending on business type, documentation completeness, and regulatory requirements.'
      }
    ]
  },
  'foundation-trust-ngo': {
    title: 'Foundation Trust NGO',
    subtitle: 'NGO Registration & Compliance',
    description: 'Legal services for NGO registration, trust formation, and compliance with regulatory requirements.',
    imageUrl: '/images/Foundation Trust NGO.jpg',
    features: ['NGO Registration', 'Trust Formation', 'Regulatory Compliance', 'Tax Exemption', 'Governance Structure', 'Compliance Monitoring'],
    process: ['Structure Planning', 'Documentation Preparation', 'Registration Filing', 'Compliance Setup', 'Tax Exemption Application', 'Ongoing Support'],
    faq: [
      {
        title: 'What are the requirements for NGO registration?',
        desc: 'Requirements include founding members, governing documents, financial statements, and compliance with regulatory guidelines.'
      }
    ]
  },
  'documentation-lawyer': {
    title: 'Documentation Lawyer',
    subtitle: 'Professional Legal Documentation',
    description: 'Professional legal documentation services including contract drafting, legal agreements, and document review.',
    imageUrl: '/images/Documentation Lawyer.jpg',
    features: ['Contract Drafting', 'Legal Agreements', 'Document Review', 'Legal Opinions', 'Compliance Documentation', 'Risk Assessment'],
    process: ['Requirement Analysis', 'Document Drafting', 'Legal Review', 'Client Consultation', 'Finalization', 'Implementation Support'],
    faq: [
      {
        title: 'What types of contracts do you draft?',
        desc: 'We draft all types of contracts including business agreements, employment contracts, property agreements, and specialized legal documents.'
      }
    ]
  },
  'processor-server': {
    title: 'Processor Server',
    subtitle: 'Legal Process Serving Services',
    description: 'Legal process serving services for court documents, legal notices, and official document delivery.',
    imageUrl: '/images/Processor Server.jpg',
    features: ['Document Serving', 'Court Filing', 'Legal Notifications', 'Process Tracking', 'Affidavit Services', 'Legal Delivery'],
    process: ['Document Review', 'Service Planning', 'Document Delivery', 'Proof of Service', 'Court Filing', 'Follow-up Reporting'],
    faq: [
      {
        title: 'How do you ensure proper service of documents?',
        desc: 'We follow legal procedures for document serving, maintain detailed records, and provide proof of service documentation.'
      }
    ]
  },
  'asylum-lawyer': {
    title: 'Asylum Lawyer',
    subtitle: 'Expert Immigration & Asylum Services',
    description: 'Expert legal representation for asylum applications, refugee status, and immigration law matters.',
    imageUrl: '/images/Asylum Lawyer.jpg',
    features: ['Asylum Applications', 'Refugee Status', 'Immigration Law', 'Humanitarian Protection', 'Appeal Representation', 'Legal Advocacy'],
    process: ['Case Assessment', 'Application Preparation', 'Evidence Gathering', 'Interview Preparation', 'Legal Representation', 'Follow-up Support'],
    faq: [
      {
        title: 'What are the grounds for asylum in Pakistan?',
        desc: 'Asylum can be granted based on persecution, fear of harm, or humanitarian grounds. We assess each case individually.'
      }
    ]
  },
  'private-investigator': {
    title: 'Private Investigator',
    subtitle: 'Legal Investigation Services',
    description: 'Legal investigation services for evidence gathering, background checks, and investigative support for legal cases.',
    imageUrl: '/images/Private Investigator.jpg',
    features: ['Evidence Gathering', 'Background Checks', 'Surveillance', 'Document Verification', 'Witness Location', 'Case Support'],
    process: ['Case Analysis', 'Investigation Planning', 'Evidence Collection', 'Documentation', 'Report Preparation', 'Legal Support'],
    faq: [
      {
        title: 'What types of investigations do you conduct?',
        desc: 'We conduct various investigations including background checks, surveillance, evidence gathering, and witness location for legal cases.'
      }
    ]
  },
  'legal-advisor': {
    title: 'Legal Advisor',
    subtitle: 'Comprehensive Legal Advisory Services',
    description: 'Comprehensive legal advisory services for individuals and businesses with strategic legal guidance.',
    imageUrl: '/images/Legal Advisor.jpg',
    features: ['Legal Consultation', 'Strategic Planning', 'Risk Assessment', 'Compliance Advice', 'Legal Strategy', 'Ongoing Support'],
    process: ['Initial Assessment', 'Legal Analysis', 'Strategy Development', 'Implementation Guidance', 'Monitoring', 'Regular Updates'],
    faq: [
      {
        title: 'How often should I seek legal advice?',
        desc: 'Regular legal consultation is recommended for businesses and individuals with ongoing legal matters or compliance requirements.'
      }
    ]
  }
};

// Merge all service data
const allServiceData = { ...serviceData, ...additionalServiceData };

const serviceList = [
  // Core Services
  { title: 'Constitutional Advocacy', href: '/service/constitutional-advocacy' },
  { title: 'Digital Case Management', href: '/service/digital-case-management' },
  { title: 'Lawcademics Division', href: '/service/lawcademics' },
  { title: 'Corporate Legal Support', href: '/service/corporate-legal-support' },
  { title: 'Lawconomic Solutions', href: '/service/lawconomic-solutions' },
  
  // Family Law
  { title: 'Divorce Lawyer', href: '/service/divorce-lawyer' },
  { title: 'Child Custody', href: '/service/child-custody' },
  { title: 'Guardianship Lawyer', href: '/service/guardianship-lawyer' },
  { title: 'Domestic Violence Lawyer', href: '/service/domestic-violence-lawyer' },
  
  // Property & Real Estate
  { title: 'Property Lawyer', href: '/service/property-lawyer' },
  { title: 'Inheritance of Property', href: '/service/inheritance-of-property' },
  { title: 'Succession Certificate', href: '/service/succession-certificate' },
  
  // Criminal & Civil Law
  { title: 'Criminal Lawyer', href: '/service/criminal-lawyer' },
  { title: 'Civil Lawyer', href: '/service/civil-lawyer' },
  { title: 'F.I.A Lawyer', href: '/service/fia-lawyer' },
  
  // Business & Corporate
  { title: 'Company Lawyer', href: '/service/company-lawyer' },
  { title: 'Company Registration', href: '/service/company-registration' },
  { title: 'Foundation Trust NGO', href: '/service/foundation-trust-ngo' },
  
  // Documentation & Process
  { title: 'Legal Notice', href: '/service/legal-notice' },
  { title: 'Documentation Lawyer', href: '/service/documentation-lawyer' },
  { title: 'Processor Server', href: '/service/processor-server' },
  
  // Immigration & Specialized
  { title: 'Asylum Lawyer', href: '/service/asylum-lawyer' },
  { title: 'Private Investigator', href: '/service/private-investigator' },
  { title: 'Legal Advisor', href: '/service/legal-advisor' },
];

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  
  // Debug logging to see what serviceId is being passed
  console.log('Service ID from URL:', serviceId);
  console.log('Available services:', Object.keys(allServiceData));
  
  const currentService = allServiceData[serviceId] || {
    title: 'Legal Services',
    subtitle: 'Professional Legal Solutions',
    description: 'Comprehensive legal services tailored to your specific needs.',
    imageUrl: '/images/about1.jpg',
    features: ['Legal Consultation', 'Case Analysis', 'Court Representation', 'Documentation', 'Legal Advice', 'Follow-up Support'],
    process: ['Initial Consultation', 'Case Assessment', 'Strategy Development', 'Legal Representation', 'Regular Updates', 'Case Resolution'],
    faq: [
      {
        title: 'What legal services do you provide?',
        desc: 'We provide comprehensive legal services including constitutional advocacy, family law, criminal defense, property law, corporate legal support, and specialized legal documentation.'
      }
    ]
  };

  // Debug logging to see what service data is being used
  console.log('Current service data:', currentService);
  console.log('Service image URL:', currentService.imageUrl);

  pageTitle(`${currentService.title} - Karachi Law Firms`);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title={currentService.title} bgUrl={currentService.imageUrl || "/images/about1.jpg"} />

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
                          isActive ? 'active' : ''
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
                <h3 className="text-white cs_mb_15">Need Legal Help?</h3>
                <p className="text-white cs_mb_25">
                  Get expert legal advice and representation for all your legal needs.
                </p>
                <Button btnText="Free Consultation" btnUrl="/contact" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <div className="cs_service_details_thumb cs_mb_40">
                  <img
                    src={currentService.imageUrl}
                    alt={currentService.title}
                    className="w-100 cs_rounded_10"
                  />
                </div>
                <div className="cs_service_details_content">
                  <h2 className="cs_mb_30">{currentService.title}</h2>
                  <h4 className="text-accent cs_mb_20">{currentService.subtitle}</h4>
                  <p className="cs_mb_30">
                    {currentService.description}
                  </p>
                  
                  <div className="row cs_mb_40">
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Services Include</h3>
                        <ul>
                          {currentService.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_details_list">
                        <h3 className="cs_mb_20">Our Process</h3>
                        <ul>
                          {currentService.process.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
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
                sectionTitle={`Common Questions About ${currentService.title}`}
                sectionSubTitle={`Get answers to the most frequently asked questions about our ${currentService.title.toLowerCase()} services.`}
              />
            </div>
            <div className="col-lg-6">
              <Accordion data={currentService.faq} />
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
                sectionTitle="Ready to Get Started?"
                sectionSubTitle="Contact us today for a free consultation and let us help you navigate your legal challenges with expertise and dedication."
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
