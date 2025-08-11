import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Constitutional Advocacy',
    subTitle:
      'We stand where it matters most — defending civil liberties, minority rights, and democratic principles.',
    imgUrl: '/images/about1.jpg',
    href: '/service/constitutional-advocacy',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Digital Case Management',
    subTitle:
      'Track your legal case in real time, securely share documents, and get consistent updates.',
    imgUrl: '/images/about2.jpg',
    href: '/service/digital-case-management',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Lawcademics Division',
    subTitle:
      'Where legal practice meets legal theory. Our research-backed legal arguments support our court strategy.',
    imgUrl: '/images/about1.jpg',
    href: '/service/lawcademics',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Corporate Legal Support',
    subTitle:
      "From compliance to contract negotiation, our business law services are tailored for Pakistan's modern economy.",
    imgUrl: '/images/about2.jpg',
    href: '/service/corporate-legal-support',
  },
];

const teamData = [
  {
    imgUrl: '/images/attorney1.jpg',
    name: 'Sabahat Syed',
    designation: 'Senior Constitutional Litigator',
    srcUrl: '/team/sabahat-syed',
  },
  {
    imgUrl: '/images/attorney2.JPG',
    name: 'Raza Hyder',
    designation: 'Corporate Law & Digital Regulations',
    srcUrl: '/team/raza-hyder',
  },
  {
    imgUrl: '/images/attorney3.jpg',
    name: 'Fatima Jilani',
    designation: 'Senior Legal Researcher',
    srcUrl: '/team/fatima-jilani',
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
  {
    rating: '5',
    desc: "The transparency and research-backed approach gave me confidence in my legal strategy.",
    name: 'Sara Z.',
    designation: 'Corporate Client',
  },
];

export default function AboutPage() {
  pageTitle('About Karachi Law Firms');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="About Karachi Law Firms" bgUrl="/images/about1.jpg" />

      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutUsSection
          thumbUrl="/images/about2.jpg"
          experienceBgUrl=""
          experienceIconUrl="/images/experience_icon.svg"
          experienceNumber="25"
          experienceTitle="Years of Legal Excellence"
          sectionTitleUp="About Karachi Law Firms"
          sectionTitle="Reimagining Legal Practice for the 21st Century"
          sectionSubTitle="Our commitment is to constitutional integrity, academic rigor, and client-first advocacy. Whether you're an individual facing injustice or a business seeking clarity, KLF is your legal partner in progress."
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
          videoBtnText="See How It Works"
          videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
        />
      </Section>

      <Section pt="140" ptLg="80" pb="130" pbLg="70" className="bg-primary">
        <ServiceSection
          data={serviceData}
          sectionTitleDown="Legal services built specifically for Pakistan's modern challenges"
          sectionBtnText="Explore All Services"
          sectionBtnUrl="/service"
          textVariant="text-white"
        />
      </Section>

      <Section pt="133" ptLg="75">
        <TeamSection
          data={teamData}
          sectionTitle="Meet Our Legal Minds behind the success"
          sectionTitleUp="Our Attorneys"
        />
      </Section>

      <Section
        pt="110"
        ptLg="55"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: 'url("/images/testimonial_bg.jpeg")' }}
      >
        <TestimonialSection
          sectionTitleUp="Client Testimonials"
          sectionTitle="What Our Clients Say?"
          sectionSubTitle="Real stories from individuals and businesses who have experienced the KLF difference in their legal journey."
          data={testimonialData}
        />
      </Section>
    </>
  );
}
