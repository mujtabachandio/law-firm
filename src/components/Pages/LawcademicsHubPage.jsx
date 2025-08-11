import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

const categories = [
  'All',
  'Constitutional Commentary',
  'Legal Reform Papers',
  'Case Method Reviews',
  'Multimedia Explainables'
];

const articles = [
  {
    id: 1,
    title: "The Right to Dissent: A Constitutional Analysis of Sedition Laws in South Asia",
    author: "Fatima Jilani",
    authorTitle: "Senior Legal Researcher",
    category: "Constitutional Commentary",
    excerpt: "Analysis of Supreme Court decisions, constitutional amendments, and key petitions affecting freedom of expression in Pakistan.",
    image: "/images/post_1.jpeg",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Reforming Article 19: Freedom of Speech in Pakistan's Digital Age",
    author: "Fatima Jilani",
    authorTitle: "Senior Legal Researcher",
    category: "Constitutional Commentary",
    excerpt: "Analysis of Supreme Court decisions and constitutional amendments affecting digital rights.",
    image: "/images/post_2.jpeg",
    date: "2024-01-10",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "The State vs. Gender Equity: A Constitutional Review",
    author: "Sabahat Syed",
    authorTitle: "Senior Constitutional Litigator",
    category: "Legal Reform Papers",
    excerpt: "Policy-focused writing aimed at improving Pakistan's justice system for gender equality.",
    image: "/images/post_3.jpeg",
    date: "2024-01-05",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Due Process and Detention Laws: A Comparative Framework",
    author: "Raza Hyder",
    authorTitle: "Corporate Law & Digital Regulations",
    category: "Case Method Reviews",
    excerpt: "Strategic breakdowns of precedent-setting cases and legal reform proposals.",
    image: "/images/post_4.jpeg",
    date: "2024-01-01",
    readTime: "12 min read"
  },
  {
    id: 5,
    title: "Digital Rights in Pakistan: A Constitutional Framework",
    author: "Raza Hyder",
    authorTitle: "Corporate Law & Digital Regulations",
    category: "Multimedia Explainables",
    excerpt: "Video lectures, infographics, and bite-sized legal education content on digital rights.",
    image: "/images/post_5.jpeg",
    date: "2023-12-28",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "The Future of Data Protection in Pakistan",
    author: "Raza Hyder",
    authorTitle: "Corporate Law & Digital Regulations",
    category: "Legal Reform Papers",
    excerpt: "Policy recommendations for modernizing Pakistan's data protection framework.",
    image: "/images/post_6.jpeg",
    date: "2023-12-20",
    readTime: "15 min read"
  }
];

export default function LawcademicsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === category));
    }
  };

  pageTitle('Lawcademics Hub - Karachi Law Firms');
  
  return (
    <>
      <Breadcrumb title="Lawcademics Hub" bgUrl="/images/LawcademicsDivision.jpg" />

      <Section pt="135" ptLg="75" pb="140" pbLg="80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
                <h2 className="cs_section_title cs_mb_20">
                  Lawcademics Hub
                </h2>
                <p className="cs_section_subtitle">
                  Lawcademics is KLF's engine for thought leadership and legal innovation. Our goal is to bridge theory and practice — turning research into real-world legal outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="coming-soon-container text-center" style={{
                background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                borderRadius: '20px',
                padding: '80px 40px',
                margin: '60px 0',
                boxShadow: '0 20px 40px rgba(27, 54, 93, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  opacity: '0.3'
                }}></div>
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Icon */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    margin: '0 auto 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)'
                  }}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Coming Soon Text */}
                  <h1 style={{
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    Coming Soon
                  </h1>
                  
                  <h3 style={{
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: '600',
                    marginBottom: '30px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    Our Research & Innovation Hub
                  </h3>
                  
                  <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '18px',
                    lineHeight: '1.6',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
                    We're building something extraordinary. Our Lawcademics Hub will feature cutting-edge legal research, 
                    thought leadership articles, and innovative legal solutions that bridge theory with practice.
                  </p>
                  
                  {/* Features Preview */}
                  <div className="row" style={{ marginBottom: '40px' }}>
                    <div className="col-md-4">
                      <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '20px',
                        borderRadius: '15px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          margin: '0 auto 15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2"/>
                          </svg>
                        </div>
                        <h4 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>Research Papers</h4>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                          In-depth legal analysis and policy recommendations
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '20px',
                        borderRadius: '15px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          margin: '0 auto 15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h4 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>Legal Innovation</h4>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                          Cutting-edge solutions for modern legal challenges
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '20px',
                        borderRadius: '15px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          margin: '0 auto 15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M23 21V19C23 18.1137 22.7312 17.2458 22.2243 16.4999C21.7174 15.754 20.9999 15.159 20.164 14.773C19.3281 14.387 18.4051 14.223 17.479 14.3C16.5529 14.377 15.6599 14.693 14.884 15.22C14.1081 15.747 13.4756 16.4699 13.045 17.3213C12.6144 18.1727 12.3991 19.1268 12.42 20.09V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0148 6.12283 19.0334 7.00976C19.0519 7.89668 18.7858 8.76777 18.2635 9.49191C17.7413 10.216 16.9879 10.7542 16.1 11.03" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h4 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>Expert Insights</h4>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                          Knowledge from leading legal professionals
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact CTA */}
                  <div style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '25px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    maxWidth: '500px',
                    margin: '0 auto'
                  }}>
                    <p style={{
                      color: 'white',
                      fontSize: '16px',
                      marginBottom: '20px',
                      fontWeight: '500'
                    }}>
                      Want to be notified when we launch? Contact us for updates.
                    </p>
                    <a href="/contact" style={{
                      background: 'white',
                      color: '#1B365D',
                      padding: '12px 30px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'inline-block',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden Original Content - Commented out for now */}
          {false && (
            <>
          {/* Category Filter */}
              <div className="row cs_mb_50">
            <div className="col-lg-12">
              <div className="category-filter d-flex flex-wrap justify-content-center gap-3">
                    {categories.map((category) => (
                      <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryFilter(category)}
                        style={{
                          padding: '10px 20px',
                          border: '2px solid #1B365D',
                          borderRadius: '25px',
                          background: selectedCategory === category ? '#1B365D' : 'transparent',
                          color: selectedCategory === category ? 'white' : '#1B365D',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontWeight: '600'
                        }}
                  >
                    {category}
                      </button>
                ))}
              </div>
            </div>
              </div>

          {/* Featured Article */}
          {selectedCategory === 'All' && (
                <div className="row cs_mb_60">
              <div className="col-lg-12">
                    <div className="featured-article" style={{
                      background: 'white',
                      borderRadius: '15px',
                      padding: '30px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      display: 'flex',
                      gap: '30px',
                      alignItems: 'center'
                    }}>
                      <div className="featured-article-content" style={{ flex: 2 }}>
                        <span className="featured-badge" style={{
                          background: '#DAA520',
                          color: 'white',
                          padding: '5px 15px',
                          borderRadius: '15px',
                          fontSize: '14px',
                          fontWeight: '600',
                          display: 'inline-block',
                          marginBottom: '15px'
                        }}>
                          Featured Article
                        </span>
                        <h3 style={{ color: '#1B365D', marginBottom: '15px' }}>"{articles[0].title}"</h3>
                        <p style={{ color: '#6c757d', lineHeight: '1.6', marginBottom: '20px' }}>{articles[0].excerpt}</p>
                        <div className="article-meta" style={{ marginBottom: '20px' }}>
                          <span style={{ marginRight: '20px', color: '#1B365D', fontWeight: '600' }}>By {articles[0].author}</span>
                          <span style={{ marginRight: '20px', color: '#6c757d' }}>{articles[0].readTime}</span>
                          <span style={{ color: '#6c757d' }}>{new Date(articles[0].date).toLocaleDateString()}</span>
                    </div>
                        <a href={`/blog/${articles[0].id}`} className="read-more-btn" style={{
                          background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                          color: 'white',
                          padding: '12px 25px',
                          borderRadius: '25px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'inline-block',
                          transition: 'all 0.3s ease'
                        }}>
                      Read Full Article
                    </a>
                  </div>
                      <div className="featured-article-image" style={{ flex: 1 }}>
                        <img 
                          src={articles[0].image} 
                          alt={articles[0].title} 
                          style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }}
                        />
                      </div>
                  </div>
                </div>
              </div>
          )}

          {/* Articles Grid */}
          <div className="row">
                {filteredArticles.slice(selectedCategory === 'All' ? 1 : 0).map((article) => (
                  <div key={article.id} className="col-lg-4 col-md-6">
                    <div className="lawcademics-card" style={{
                      background: 'white',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      marginBottom: '30px'
                    }}>
                      <div className="lawcademics-image" style={{ position: 'relative' }}>
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                          }}
                        />
                        <div className="category-badge" style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: '#1B365D',
                          color: 'white',
                          padding: '5px 15px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {article.category}
                        </div>
                  </div>
                      <div className="lawcademics-content" style={{ padding: '20px' }}>
                        <h3 style={{ 
                          color: '#1B365D', 
                          fontSize: '18px', 
                          marginBottom: '15px',
                          lineHeight: '1.4'
                        }}>
                          {article.title}
                        </h3>
                        <p style={{ 
                          color: '#6c757d', 
                          lineHeight: '1.6', 
                          marginBottom: '15px',
                          fontSize: '14px'
                        }}>
                          {article.excerpt}
                        </p>
                        <div className="lawcademics-meta" style={{ marginBottom: '15px' }}>
                          <span style={{ 
                            marginRight: '15px', 
                            color: '#1B365D', 
                            fontWeight: '600',
                            fontSize: '14px'
                          }}>
                            By {article.author}
                          </span>
                          <span style={{ color: '#6c757d', fontSize: '14px' }}>
                            {article.readTime}
                          </span>
                    </div>
                        <div className="article-date" style={{ 
                          color: '#6c757d', 
                          fontSize: '14px',
                          marginBottom: '15px'
                        }}>
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                        <a href={`/blog/${article.id}`} className="lawcademics-link" style={{
                          color: '#1B365D',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '14px',
                          borderBottom: '2px solid #1B365D',
                          paddingBottom: '2px',
                          transition: 'all 0.3s ease'
                        }}>
                          Read More →
                    </a>
                  </div>
                    </div>
                  </div>
            ))}
          </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
} 