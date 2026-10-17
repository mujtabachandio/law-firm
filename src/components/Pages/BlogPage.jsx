import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import Post from '../Post';
import RecentPostWidget from '../Widget/RecentPostWidget';
import ProjectSliderWidget from '../Widget/ProjectSliderWidget';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { SITE_URL } from '../../lib/sanity';

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
  const { posts } = useBlogPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recentPosts = posts.slice(0, 5).map((post) => ({
    imgUrl: post.imageUrl,
    title: post.title,
    date: post.date,
    srcUrl: `/blog/${post.slug}`,
  }));

  // Tells Google this page is a blog and what it contains.
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Karachi Law Firms Blog',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Karachi Law Firms',
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      image: post.imageUrl,
      author: { '@type': 'Organization', name: post.author.name },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Legal Insights & Blog | Karachi Law Firms</title>
        <meta
          name="description"
          content="Read legal insights, guides and updates on Pakistani law from the team at Karachi Law Firms, covering family, property, criminal and corporate law."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legal Insights & Blog | Karachi Law Firms" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>
      <Breadcrumb title="Legal Blog" bgUrl="/images/Constitutional-Advocacy.JPG" />

      <Section pt="140" ptLg="80" pb="110" pbLg="80">
        <div className="container">
          <h1 className="cs_fs_48 cs_fw_700 cs_mb_40">
            Karachi Law Firms Blog, Legal Insights & Updates
          </h1>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {posts.map((post) => (
                  <div className="col-lg-6" key={post.slug}>
                    <Post
                      imgUrl={post.imageUrl}
                      title={post.title}
                      desc={post.excerpt}
                      postUrl={`/blog/${post.slug}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cs_sidebar">
                <RecentPostWidget data={recentPosts} title="Recent Posts" />
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
