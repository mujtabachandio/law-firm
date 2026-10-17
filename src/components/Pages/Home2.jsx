import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import HeroStyle2 from '../Hero/HeroStyle2';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import ContactSection from '../Section/ContactSection';
import MovingTextSection from '../Section/MovingTextSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import Accordion from '../Accordion';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';

const movingTextData = [
  '* Constitutional Advocacy & Civil Liberties',
  '* Digital Case Management & Transparency',
  '* Lawcademics Research & Legal Innovation',
  '* Corporate Legal Support & Compliance',
];

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Constitutional Advocacy',
    subTitle:
      'We stand where it matters most — defending civil liberties, minority rights, and democratic principles.',
    imgUrl: '/images/about1.jpg',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Digital Case Management',
    subTitle:
      'Track your legal case in real time, securely share documents, and get consistent updates.',
    imgUrl: '/images/about2.jpg',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Lawcademics Division',
    subTitle:
      'Where legal practice meets legal theory. Our research-backed legal arguments support our court strategy.',
    imgUrl: '/images/about1.jpg',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Corporate Legal Support',
    subTitle:
      "From compliance to contract negotiation, our business law services are tailored for Pakistan's modern economy.",
    imgUrl: '/images/about2.jpg',
  },
  {
    iconUrl: '/images/icons/service_icon_5.svg',
    title: 'Lawconomic Solutions',
    subTitle:
      'Transparent pricing, flexible payment plans, and subsidized services ensure justice is accessible.',
    imgUrl: '/images/about1.jpg',
  },
];

const comparisonData = [
  {
    traditional: 'Paper-based, opaque processes',
    klf: 'End-to-end digital transparency',
  },
  {
    traditional: 'Case-by-case tactics',
    klf: 'Systemized, research-backed strategies',
  },
  {
    traditional: 'Reactive communication',
    klf: 'Proactive updates and milestone tracking',
  },
  {
    traditional: 'Pure practice focus',
    klf: 'Practice + Academic research integration',
  },
  {
    traditional: 'No public accountability',
    klf: 'Performance metrics + client feedback loop',
  },
];

const teamData = [
  {
    imgUrl: '/images/AshfaqShahBukhari.jpg',
    name: 'Ashfaq Shah Bukhari',
    designation: 'Senior Partner',
    srcUrl: '/team/ashfaq-shah-bukhari',
    initials: 'ASB',
  },
  {
    imgUrl: null, // Will use avatar instead
    name: 'Danish Hussain',
    designation: 'Associate',
    srcUrl: '/team/danish-hussain',
    initials: 'DH',
  },
  {
    imgUrl: null, // Will use avatar instead
    name: 'Mansoor Ahmed',
    designation: 'Associate',
    srcUrl: '/team/mansoor-ahmed',
    initials: 'MA',
    linkedIn: 'https://www.linkedin.com/in/mansoor-ahmed-b5bbb4b3/',
  },
];

const lawcademicsData = [
  {
    imgUrl: '/images/desk1.jpg',
    title: "Reforming Article 19: Freedom of Speech in Pakistan's Digital Age",
    desc: 'Analysis of Supreme Court decisions and constitutional amendments affecting digital rights.',
    postUrl: '/blog/reforming-article-19',
    postedBy: 'Mansoor Ahmed',
    adminUrl: '/team/mansoor-ahmed',
    numberOfComment: 3,
    commentUrl: '/blog/reforming-article-19',
  },
  {
    imgUrl: '/images/desk2.jpg',
    title: 'The State vs. Gender Equity: A Constitutional Review',
    desc: "Policy-focused writing aimed at improving Pakistan's justice system for gender equality.",
    postUrl: '/blog/gender-equity-constitutional-review',
    postedBy: 'Ashfaq Shah Bukhari',
    adminUrl: '/team/ashfaq-shah-bukhari',
    numberOfComment: 4,
    commentUrl: '/blog/gender-equity-constitutional-review',
  },
  {
    imgUrl: '/images/desk3.jpg',
    title: 'Due Process and Detention Laws: A Comparative Framework',
    desc: 'Strategic breakdowns of precedent-setting cases and legal reform proposals.',
    postUrl: '/blog/due-process-detention-laws',
    postedBy: 'Danish Hussain',
    adminUrl: '/team/danish-hussain',
    numberOfComment: 5,
    commentUrl: '/blog/due-process-detention-laws',
  },
];

const testimonialData = [
  {
    rating: '5',
    desc: "I always thought the legal system was a black box. KLF changed that. I knew what was happening with my case at every stage.",
    name: 'Hamza R.',
    designation: 'Client in Civil Rights Case',
  },
  {
    rating: '5',
    desc: "Their research division gave us not just a lawyer, but a strategic advantage in court.",
    name: 'Adeel M.',
    designation: 'CEO of fintech startup',
  },
  {
    rating: '5',
    desc: "The constitutional advocacy team fought for our rights when no one else would. They're truly committed to justice.",
    name: 'Fatima S.',
    designation: 'Human Rights Activist',
  },
  {
    rating: '5',
    desc: "Their digital case management system made the entire legal process transparent and accessible.",
    name: 'Ahmed K.',
    designation: 'Business Owner',
  },
];

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



export default function Home2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ensure the homepage tab title stays consistent (some widgets may try to change it, e.g. "1 new message")
  useEffect(() => {
    const targetTitle = 'Karachi Law Firms, Best Lawyers & Legal Services Here';
    const enforceTitle = () => {
      if (document.title !== targetTitle) {
        document.title = targetTitle;
      }
    };
    enforceTitle();
    const id = setInterval(enforceTitle, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>Karachi Law Firms, Best Lawyers & Legal Services Here</title>
        <meta name="description" content="Karachi Law Firms connects you with the best lawyers in Karachi. Expert legal services in Karachi for all your needs. Get trusted representation today." />
        <meta name="keywords" content="Karachi Law Firms, Best Lawyers in Karachi, Legal Services, Expert Legal Services, Expert Legal Services in Karachi" />
      </Helmet>
      
      {/* Hero Section - Cinematic Full-Screen */}
      <HeroStyle2
        titleUp="Pakistan's First Digital-First Law Ecosystem"
        subtitle="Constitutional Advocacy for the Modern Age"
        title="Find the Best Lawyers & Legal Services in Karachi"
        btnText="Get Legal Help"
        btnUrl="/contact"
        bgUrl="/bg-pattern.jpg"
      />

      {/* Moving Text Section */}
      <Section>
        <MovingTextSection data={movingTextData} />
      </Section>

      {/* About Section */}
      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutUsSection
          thumbUrl="/images/about2.jpg"
          experienceBgUrl="/images/about1.jpg"
          experienceIconUrl="/images/experience_icon.svg"
          experienceNumber="25"
          experienceTitle="Years of Legal Excellence"
          sectionTitleUp="About Karachi Law Firms"
          sectionTitle="Reimagining Legal Practice for the 21st Century"
          sectionSubTitle="At Karachi Law Firms (KLF), we're reimagining legal practice for the 21st century. We don't just file petitions — we challenge precedents, empower citizens, and bring the entire legal process into the digital era. Our commitment is to constitutional integrity, academic rigor, and client-first advocacy. Whether you're an individual facing injustice or a business seeking clarity, KLF is your legal partner in progress."
          grothTitle="Constitutional Cases Won"
          grothPercentage="95"
          featureList={[
            {
              title: 'End-to-end digital transparency',
              subTitle: 'Track your case progress in real-time with our digital case management system.',
            },
            {
              title: 'Research-backed strategies',
              subTitle: 'Our Lawcademics division ensures every legal argument is supported by scholarship.',
            },
          ]}
          btnText="Schedule a Free Consultation"
          btnUrl="/contact"
        />
      </Section>

      {/* Services Section - Interactive Cards */}
      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="cs_gray_bg"
      >
        <ServiceSection
          sectionTitleUp="Our Core Services"
          sectionTitle="Legal Excellence For The Digital Age"
          sectionSubTitle="At Karachi Law Firms (KLF), we're reimagining legal practice for the 21st century. We don't just file petitions — we challenge precedents, empower citizens, and bring the entire legal process into the digital era."
          sectionTitleDown="Transparent, research-backed legal strategies built for modern Pakistan"
          sectionBtnText="Explore All Services"
          sectionBtnUrl="/service"
          data={serviceData}
        />
      </Section>

      {/* Comparison Table Section - Horizontal Scrollable */}
      <Section pt="135" ptLg="75" pb="140" pbLg="80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
                <h2 className="cs_section_title cs_mb_20">
                  Why We're Different
                </h2>
                <p className="cs_section_subtitle">
                  What sets Karachi Law Firms apart isn't just what we do — it's how we do it.
                </p>
              </div>
            </div>
          </div>
          
          <div className="comparison-table-wrapper">
            <div className="comparison-table">
              <div className="comparison-header">
                <div className="comparison-cell">Traditional Law Firm</div>
                <div className="comparison-cell">Karachi Law Firms</div>
              </div>
              {comparisonData.map((item, index) => (
                <div key={index} className="comparison-row">
                  <div className="comparison-cell">{item.traditional}</div>
                  <div className="comparison-cell">{item.klf}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section - Grid Layout with Grayscale Headshots */}
      <Section pb="115" pbLg="55">
        <TeamSection
          data={teamData}
          sectionTitle="Meet Our Legal Minds behind the success"
          sectionTitleUp="Our Attorneys"
        />
      </Section>

      {/* Lawcademics Preview - Floating Glassmorphic Cards */}
      <Section pt="140" ptLg="80" pb="130" pbLg="70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
                <h2 className="cs_section_title cs_mb_20">
                  Latest from the Research Desk
                </h2>
                <p className="cs_section_subtitle">
                  Lawcademics Hub and Publications
                </p>
                <div className="text-center cs_mt_30">
                  <a href="/lawcademics" className="btn btn-primary">
                    Explore Full Lawcademics Hub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            {lawcademicsData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="lawcademics-card">
                  <div className="lawcademics-image">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <div className="lawcademics-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="lawcademics-meta">
                      <span>By {item.postedBy}</span>
                    </div>
                    <a href={item.postUrl} className="lawcademics-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: 'url("/images/testimonial_bg.jpeg")' }}
      >
        <TestimonialSection
          sectionTitleUp="Client Testimonials"
          sectionTitle="What Our Clients Say?"
          sectionSubTitle="Real stories from individuals and businesses who have experienced the KLF difference in their legal journey."
          data={testimonialData}
        />
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

      {/* Google Maps Embed */}
      <Section pt="10" pb="20">
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
                  style={{ border: 0, maxWidth: '100%', borderRadius: '8px' }} 
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

      {/* Final CTA - Bold, High-Contrast Gold Block */}
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
          <ContactSection
            sectionTitleUp="Contact With Us"
            sectionTitle="Justice isn't automatic it's made possible. Let's fight for it together."
            sectionSubTitle="Whether you're facing injustice or seeking legal clarity, our team is ready to be your legal partner in progress."
            textVarient="text-white"
            className="cs_mb_10"
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Call Us Now',
              title: '+92 300 0927678',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Email Us',
              title: 'info@karachilawfirms.pk',
              textColor: 'text-white',
            },
            {
              imgUrl: '/pak-flag.png',
              titleUp: 'Visit Our Offices',
              title: 'Head Office: 104, 1st Floor, Fareed Chambers, Abdullah Haroon Road, Saddar, Karachi 74400 | Islamabad Office: No. 02, Block No. 02, Street No. 31, G-8/4, Pervaiz market Near Rescue 15, Islamabad 44000',
              textColor: 'text-white',
              isAddress: true,
            },
          ]}
          />
        </div>
      </Section>


    </>
  );
}
