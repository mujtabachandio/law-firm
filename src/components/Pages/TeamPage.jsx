import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import TeamSection from '../Section/TeamSection';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';

const teamData = [
  {
    imgUrl: '/images/AshfaqShahBukhari.jpg',
    name: 'Ashfaq Shah Bukhari',
    designation: 'Senior Partner',
    srcUrl: '/team/ashfaq-shah-bukhari',
    initials: 'ASB',
    experience: '25+ years in constitutional law and corporate litigation',
  },
  {
    imgUrl: null, // Will use avatar instead
    name: 'Danish Hussain',
    designation: 'Associate',
    srcUrl: '/team/danish-hussain',
    initials: 'DH',
    experience: '8+ years specializing in civil and family law',
  },
  {
    imgUrl: null, // Will use avatar instead
    name: 'Mansoor Ahmed',
    designation: 'Associate',
    srcUrl: '/team/mansoor-ahmed',
    initials: 'MA',
    experience: '6+ years in criminal defense and documentation',
    linkedIn: 'https://www.linkedin.com/in/mansoor-ahmed-b5bbb4b3/',
  },
  {
    imgUrl: null, // Will use avatar instead
    name: 'Pir Irfan Ahmed',
    designation: 'Senior Associate',
    srcUrl: '/team/pir-irfan-ahmed',
    initials: 'PIA',
    experience: '12+ years in corporate law and business consulting',
  },
];

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Meet Our Legal Team | Karachi Law Firms</title>
        <meta
          name="description"
          content="Meet the experienced lawyers and legal team at Karachi Law Firms, covering family, criminal, property, corporate and constitutional law in Karachi."
        />
      </Helmet>
      <Breadcrumb title="Our Attorneys" bgUrl="/images/attorney-page.jpg" />
      <Section pt="140" ptLg="80" pb="110" pbLg="55">
        <div className="container">
          <h1 className="cs_fs_48 cs_fw_700 cs_mb_40 text-center">Meet the Karachi Law Firms Legal Team</h1>
        </div>
        <TeamSection data={teamData} />
      </Section>

      {/* Contact Section Bottom */}
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
          <ContactSectionBottom />
        </div>
      </Section>
    </>
  );
}
