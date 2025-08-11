import { useEffect } from 'react';
import HeroStyle2 from '../Hero/HeroStyle2';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import BrandSection from '../Section/BrandSection';
import ContactSection from '../Section/ContactSection';
import MovingTextSection from '../Section/MovingTextSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle.js';

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
    imgUrl: '/images/attorney1.jpg',
    name: 'Sabahat Syed',
    designation: 'Senior Constitutional Litigator',
    experience: '15+ Years in Public Interest Law',
    srcUrl: '/team/sabahat-syed',
  },
  {
    imgUrl: '/images/attorney2.JPG',
    name: 'Raza Hyder',
    designation: 'Corporate Law & Digital Regulations',
    experience: '12 Years | Ex-Advisor to SECP',
    srcUrl: '/team/raza-hyder',
  },
  {
    imgUrl: '/images/attorney3.jpg',
    name: 'Fatima Jilani',
    designation: 'Senior Legal Researcher',
    experience: '10+ Years in Constitutional Law',
    srcUrl: '/team/fatima-jilani',
  },
];

const lawcademicsData = [
  {
    imgUrl: '/images/desk1.jpg',
    title: "Reforming Article 19: Freedom of Speech in Pakistan's Digital Age",
    desc: 'Analysis of Supreme Court decisions and constitutional amendments affecting digital rights.',
    postUrl: '/blog/reforming-article-19',
    postedBy: 'Fatima Jilani',
    adminUrl: '/team/fatima-jilani',
    numberOfComment: 3,
    commentUrl: '/blog/reforming-article-19',
  },
  {
    imgUrl: '/images/desk2.jpg',
    title: 'The State vs. Gender Equity: A Constitutional Review',
    desc: "Policy-focused writing aimed at improving Pakistan's justice system for gender equality.",
    postUrl: '/blog/gender-equity-constitutional-review',
    postedBy: 'Sabahat Syed',
    adminUrl: '/team/sabahat-syed',
    numberOfComment: 4,
    commentUrl: '/blog/gender-equity-constitutional-review',
  },
  {
    imgUrl: '/images/desk3.jpg',
    title: 'Due Process and Detention Laws: A Comparative Framework',
    desc: 'Strategic breakdowns of precedent-setting cases and legal reform proposals.',
    postUrl: '/blog/due-process-detention-laws',
    postedBy: 'Raza Hyder',
    adminUrl: '/team/raza-hyder',
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

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
];

export default function Home2() {
  pageTitle('Karachi Law Firms - Justice, Digitalized');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section - Cinematic Full-Screen */}
      <HeroStyle2
        titleUp="Pakistan's First Digital-First Law Ecosystem"
        title="Justice, Digitalized. Excellence, Humanized."
        btnText="Get Legal Help"
        btnUrl="/contact"
        bgUrl="/"
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

      {/* Final CTA - Bold, High-Contrast Gold Block */}
      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden"
        style={{ backgroundImage: 'url("/images/OurCoreServices.jpg")' }}
      >
        <ContactSection
          sectionTitleUp="Contact With Us"
          sectionTitle="Justice isn't automatic it's made possible. Let's fight for it together."
          sectionSubTitle="Whether you're facing injustice or seeking legal clarity, our team is ready to be your legal partner in progress."
          textVarient="text-white"
          className="cs_mb_40"
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question?',
              title: '(123) 45678',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Send Email',
              title: 'info@karachilawfirms.com',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_3.svg',
              titleUp: 'Address',
              title: 'Karachi, Pakistan',
              textColor: 'text-white',
            },
          ]}
        />
      </Section>

      {/* Brand Section */}
      <Section pt="140" ptLg="80">
        <BrandSection data={brandData} />
      </Section>
    </>
  );
}
