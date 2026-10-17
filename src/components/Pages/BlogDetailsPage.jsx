import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import ProjectSliderWidget from '../Widget/ProjectSliderWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import ContactSectionBottom from '../Section/ContactSection/ContactSectionBottom';
import PortableTextBody from '../Blog/PortableTextBody';
import { useBlogPost, useBlogPosts } from '../../hooks/useBlogPosts';
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

export default function BlogDetailsPage() {
  const { blogId } = useParams();
  const { post, loading, notFound } = useBlogPost(blogId);
  const { posts } = useBlogPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (loading && !post) {
    return (
      <>
        <Breadcrumb title="Loading…" bgUrl="/images/page_header_1.jpeg" />
        <Section pt="140" ptLg="80" pb="140" pbLg="80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>Loading article…</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (notFound) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | Karachi Law Firms</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Breadcrumb title="Blog Post Not Found" bgUrl="/images/page_header_1.jpeg" />
        <Section pt="140" ptLg="80" pb="140" pbLg="80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Blog Post Not Found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
                <Link
                  to="/blog"
                  className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_8 cs_pb_8"
                >
                  <span>Back to the blog</span>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  // Always the post's own URL. The canonical tag is emitted once, globally, by
  // <Canonical /> in Layout; og:url and the structured data below must agree
  // with it, so they are derived the same way rather than from a CMS override.
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  const recentPosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5)
    .map((item) => ({
      imgUrl: item.imageUrl,
      title: item.title,
      date: item.date,
      srcUrl: `/blog/${item.slug}`,
    }));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo.metaDescription,
    image: post.seo.ogImageUrl || post.imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author.profileUrl
      ? { '@type': 'Person', name: post.author.name, url: post.author.profileUrl }
      : { '@type': 'Organization', name: post.author.name },
    publisher: {
      '@type': 'Organization',
      name: 'Karachi Law Firms',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/main-logo.png`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqSchema = post.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{post.seo.metaTitle}</title>
        <meta name="description" content={post.seo.metaDescription} />
        {post.seo.keywords.length > 0 && (
          <meta name="keywords" content={post.seo.keywords.join(', ')} />
        )}
        {post.seo.noIndex && <meta name="robots" content="noindex, nofollow" />}

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seo.metaTitle} />
        <meta property="og:description" content={post.seo.metaDescription} />
        <meta property="og:url" content={postUrl} />
        {post.seo.ogImageUrl && <meta property="og:image" content={post.seo.ogImageUrl} />}
        <meta property="article:published_time" content={post.publishedAt} />
        {post.updatedAt && (
          <meta property="article:modified_time" content={post.updatedAt} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.metaTitle} />
        <meta name="twitter:description" content={post.seo.metaDescription} />
        {post.seo.ogImageUrl && <meta name="twitter:image" content={post.seo.ogImageUrl} />}

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <Breadcrumb title={post.title} bgUrl={post.imageUrl} />

      <section className="cs_pt_140 cs_pt_lg_80 cs_pb_140 cs_pb_lg_80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_post cs_style_1 bg-white shadow-sm cs_mb_30">
                <img src={post.imageUrl} alt={post.imageAlt} />
                <div className="cs_pl_40 cs_pr_40 cs_pt_40 cs_pb_40 cs_pl_lg_25 cs_pr_lg_25 cs_pt_lg_25 cs_pb_lg_25">
                  <h1 className="cs_post_title cs_lh_base cs_fs_26 cs_fs_lg_18 cs_mb_10">
                    {post.title}
                  </h1>

                  <div className="cs_post_meta cs_fs_14 cs_mb_20" style={{ opacity: 0.75 }}>
                    <span>By {post.author.name}</span>
                    {post.author.role && <span> · {post.author.role}</span>}
                    <span> · {post.date}</span>
                    {post.updatedAt && (
                      <span> · Updated {post.updatedAt.slice(0, 10)}</span>
                    )}
                  </div>

                  <PortableTextBody body={post.body} contentHtml={post.contentHtml} />

                  {post.faqs.length > 0 && (
                    <div className="cs_blog_faqs cs_mt_40">
                      <h2>Frequently Asked Questions</h2>
                      {post.faqs.map((faq, index) => (
                        <div key={index} className="cs_mb_20">
                          <h3 className="cs_fs_20">{faq.question}</h3>
                          <p>{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {post.relatedServices.length > 0 && (
                    <div className="cs_related_services cs_mt_40">
                      <h2>Related Services</h2>
                      <ul>
                        {post.relatedServices.map((service) => (
                          <li key={service.href}>
                            <Link to={service.href}>{service.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
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
      </section>

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
