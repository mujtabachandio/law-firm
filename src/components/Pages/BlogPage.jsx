import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import Post from '../Post';
import RecentPostWidget from '../Widget/RecentPostWidget';
import ProjectSliderWidget from '../Widget/ProjectSliderWidget';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';
import { pageTitle } from '../../helpers/PageTitle';

const postData = [
  {
    imgUrl: '/images/Constitutional-Advocacy.JPG',
    title: 'Understanding Constitutional Rights in Pakistan',
    desc: 'A comprehensive guide to constitutional rights and how they protect citizens in legal matters.',
    postUrl: '/blog/constitutional-rights-pakistan',
    postedBy: 'Legal Expert',
    adminUrl: '/',
    numberOfComment: 12,
    commentUrl: '/blog/constitutional-rights-pakistan',
  },
  {
    imgUrl: '/images/DigitalCaseManagement.jpg',
    title: 'Digital Case Management: Revolutionizing Legal Practice',
    desc: 'How technology is transforming the way law firms handle cases and serve clients efficiently.',
    postUrl: '/blog/digital-case-management',
    postedBy: 'Tech Team',
    adminUrl: '/',
    numberOfComment: 8,
    commentUrl: '/blog/digital-case-management',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'Corporate Legal Support for Modern Businesses',
    desc: 'Essential legal services that every business needs to thrive in Pakistan\'s evolving economy.',
    postUrl: '/blog/corporate-legal-support',
    postedBy: 'Corporate Law',
    adminUrl: '/',
    numberOfComment: 15,
    commentUrl: '/blog/corporate-legal-support',
  },
  {
    imgUrl: '/images/Divorce Lawyer.jpg',
    title: 'Family Law: Navigating Divorce and Custody',
    desc: 'Expert guidance on family law matters including divorce, custody, and property division.',
    postUrl: '/blog/family-law-guide',
    postedBy: 'Family Law',
    adminUrl: '/',
    numberOfComment: 23,
    commentUrl: '/blog/family-law-guide',
  },
];



const recentPost = [
  {
    imgUrl: '/images/Constitutional-Advocacy.JPG',
    title: 'Understanding Constitutional Rights in Pakistan',
    date: '15 April, 2024',
    srcUrl: '/blog/constitutional-rights-pakistan',
  },
  {
    imgUrl: '/images/DigitalCaseManagement.jpg',
    title: 'Digital Case Management: Revolutionizing Legal Practice',
    date: '12 April, 2024',
    srcUrl: '/blog/digital-case-management',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'Corporate Legal Support for Modern Businesses',
    date: '10 April, 2024',
    srcUrl: '/blog/corporate-legal-support',
  },
];

const projectData = [
  {
    imgUrl: '/images/Constitutional-Advocacy.JPG',
    title: 'Constitutional Advocacy',
    srcUrl: '/service/constitutional-advocacy',
  },
  {
    imgUrl: '/images/DigitalCaseManagement.jpg',
    title: 'Digital Case Management',
    srcUrl: '/service/digital-case-management',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'Corporate Legal Support',
    srcUrl: '/service/corporate-legal-support',
  },
  {
    imgUrl: '/images/LawcademicsDivision.jpg',
    title: 'Lawcademics Division',
    srcUrl: '/service/lawcademics',
  },
  {
    imgUrl: '/images/Lawconomic Solutions.jpg',
    title: 'Lawconomic Solutions',
    srcUrl: '/service/lawconomic-solutions',
  },
];



export default function BlogPage() {
  pageTitle('Legal Blog - Karachi Law Firms');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Legal Blog" bgUrl="/images/Constitutional-Advocacy.JPG" />
      
      <Section pt="140" ptLg="80" pb="110" pbLg="80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
                             <div className="row">
                 {postData.map((item, index) => (
                   <div className="col-lg-6" key={index}>
                     <Post {...item} />
                   </div>
                 ))}
               </div>
              
              
            </div>
            
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <RecentPostWidget data={recentPost} title="Recent Posts" />
                <ProjectSliderWidget data={projectData} title="Our Services" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section Bottom */}
      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden"
        style={{ backgroundImage: 'url("/images/OurCoreServices.jpg")' }}
      >
        <ContactSectionBottom />
      </Section>
    </>
  );
}
