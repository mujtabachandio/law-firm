import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import TeamSection from '../Section/TeamSection';
import { pageTitle } from '../../helpers/PageTitle';

const teamData = [
  {
    imgUrl: '/images/team_member_1.jpeg',
    name: 'Sabahat Syed',
    designation: 'Senior Constitutional Litigator',
    experience: '15+ Years in Public Interest Law',
    srcUrl: '/team/sabahat-syed',
  },
  {
    imgUrl: '/images/team_member_2.jpeg',
    name: 'Raza Hyder',
    designation: 'Corporate Law & Digital Regulations',
    experience: '12 Years | Ex-Advisor to SECP',
    srcUrl: '/team/raza-hyder',
  },
  {
    imgUrl: '/images/team_member_3.jpeg',
    name: 'Fatima Jilani',
    designation: 'Senior Legal Researcher',
    experience: '10+ Years in Academic Research',
    srcUrl: '/team/fatima-jilani',
  },
];

export default function TeamPage() {
  pageTitle('Attorneys - Karachi Law Firms');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Attorneys" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="110" pbLg="55">
        <div className="container">
          <TeamSection data={teamData} />
        </div>
      </Section>
    </>
  );
}
