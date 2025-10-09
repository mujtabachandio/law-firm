import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import TeamSection from '../Section/TeamSection';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';
import { pageTitle } from '../../helpers/PageTitle';

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
  pageTitle('Attorneys - Karachi Law Firms');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Attorneys" bgUrl="/images/attorney-page.jpg" />
      <Section pt="140" ptLg="80" pb="110" pbLg="55">
        <div className="row">
          <div className="col-lg-12">
            <TeamSection data={teamData} />
          </div>
        </div>
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
