import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import Post from '../Post';
import RecentPostWidget from '../Widget/RecentPostWidget';
import ProjectSliderWidget from '../Widget/ProjectSliderWidget';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';

const postData = [
  {
    imgUrl: '/images/top-law-firms-karachi.jpg',
    title: 'Top 50 Law Firms in Karachi: The Definitive 2026 Guide',
    desc: 'Discover the top 50 law firms in Karachi ranked by specialty, location & performance. From Haidermota to boutique firms in DHA & Clifton — find the best legal representation in 2026.',
    postUrl: '/blog/top-law-firms-in-karachi',
    postedBy: 'KarachiLawFirms.pk',
    adminUrl: '/',
    numberOfComment: 0,
    commentUrl: '/blog/top-law-firms-in-karachi',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'Navigating Success: A Guide to the Best Corporate Lawyers in Karachi',
    desc: 'Find the best corporate lawyers in Karachi for company registration, contracts, M&A, FIA matters & dispute resolution. Expert legal counsel trusted by businesses in 2026.',
    postUrl: '/blog/best-corporate-lawyers-in-karachi',
    postedBy: 'KarachiLawFirms.pk',
    adminUrl: '/',
    numberOfComment: 0,
    commentUrl: '/blog/best-corporate-lawyers-in-karachi',
  },
  {
    imgUrl: '/images/blog3-img1.jpg',
    title: 'Justice Near the Court: Navigating Family Law in Karachi',
    desc: 'Looking for family law firms near Sindh High Court Karachi? Expert divorce lawyers, child custody, inheritance & domestic violence legal services. Call now.',
    postUrl: '/blog/family-law-firms-karachi-sindh-high-court',
    postedBy: 'KarachiLawFirms.pk',
    adminUrl: '/',
    numberOfComment: 0,
    commentUrl: '/blog/family-law-firms-karachi-sindh-high-court',
  },
  {
    imgUrl: '/images/blog4-pdf/blog4-pdf-p2-i1.jpeg',
    title: 'Expert Criminal Lawyers in DHA Karachi: Bail, FIR, FIA & Cybercrime Defense',
    desc: 'Need a criminal lawyer in DHA Karachi? We handle bail, FIR quashment, FIA white-collar cases & PECA cybercrime. Trusted legal defense for a confidential consultation.',
    postUrl: '/blog/criminal-lawyers-dha-karachi',
    postedBy: 'KarachiLawFirms.pk',
    adminUrl: '/',
    numberOfComment: 0,
    commentUrl: '/blog/criminal-lawyers-dha-karachi',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'The Definitive Guide to Law Firms in Karachi by Practice Area',
    desc: 'Find the right law firm in Karachi by practice area, including corporate, criminal, family, NGO, immigration, inheritance and documentation law.',
    postUrl: '/blog/law-firms-karachi-practice-areas',
    postedBy: 'KarachiLawFirms.pk',
    adminUrl: '/',
    numberOfComment: 0,
    commentUrl: '/blog/law-firms-karachi-practice-areas',
  },
];



const recentPost = [
  {
    imgUrl: '/images/top-law-firms-karachi.jpg',
    title: 'Top 50 Law Firms in Karachi: The Definitive 2026 Guide',
    date: '03 March, 2026',
    srcUrl: '/blog/top-law-firms-in-karachi',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'Navigating Success: A Guide to the Best Corporate Lawyers in Karachi',
    date: '11 March, 2026',
    srcUrl: '/blog/best-corporate-lawyers-in-karachi',
  },
  {
    imgUrl: '/images/blog3-img1.jpg',
    title: 'Justice Near the Court: Navigating Family Law in Karachi',
    date: '15 March, 2026',
    srcUrl: '/blog/family-law-firms-karachi-sindh-high-court',
  },
  {
    imgUrl: '/images/blog4-pdf/blog4-pdf-p2-i1.jpeg',
    title: 'Expert Criminal Lawyers in DHA Karachi: Bail, FIR, FIA & Cybercrime Defense',
    date: '17 March, 2026',
    srcUrl: '/blog/criminal-lawyers-dha-karachi',
  },
  {
    imgUrl: '/images/CorporateLegalSupport.jpg',
    title: 'The Definitive Guide to Law Firms in Karachi by Practice Area',
    date: '25 March, 2026',
    srcUrl: '/blog/law-firms-karachi-practice-areas',
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Legal Insights & Blog | Karachi Law Firms</title>
        <meta
          name="description"
          content="Read legal insights, guides and updates on Pakistani law from the team at Karachi Law Firms, covering family, property, criminal and corporate law."
        />
        <link rel="canonical" href="https://karachilawfirms.pk/blog" />
      </Helmet>
      <Breadcrumb title="Legal Blog" bgUrl="/images/Constitutional-Advocacy.JPG" />
      
      <Section pt="140" ptLg="80" pb="110" pbLg="80">
        <div className="container">
          <h1 className="cs_fs_48 cs_fw_700 cs_mb_40">Karachi Law Firms Blog, Legal Insights & Updates</h1>
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
