import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <Breadcrumb title="Lawcademics Hub" bgUrl="/images/page_header_1.jpeg" />

      <Section pt="135" ptLg="75" pb="140" pbLg="80">
        <div className="container">
          <motion.div 
            className="row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="row cs_mb_50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="col-lg-12">
              <div className="category-filter d-flex flex-wrap justify-content-center gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Article */}
          {selectedCategory === 'All' && (
            <motion.div 
              className="row cs_mb_60"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="col-lg-12">
                <div className="featured-article">
                  <div className="featured-article-content">
                    <span className="featured-badge">Featured Article</span>
                    <h3>"{articles[0].title}"</h3>
                    <p>{articles[0].excerpt}</p>
                    <div className="article-meta">
                      <span>By {articles[0].author}</span>
                      <span>{articles[0].readTime}</span>
                      <span>{new Date(articles[0].date).toLocaleDateString()}</span>
                    </div>
                    <a href={`/blog/${articles[0].id}`} className="read-more-btn">
                      Read Full Article
                    </a>
                  </div>
                  <div className="featured-article-image">
                    <img src={articles[0].image} alt={articles[0].title} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Articles Grid */}
          <div className="row">
            {filteredArticles.slice(selectedCategory === 'All' ? 1 : 0).map((article, index) => (
              <motion.div 
                key={article.id}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="lawcademics-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="lawcademics-image">
                    <img src={article.image} alt={article.title} />
                    <div className="category-badge">{article.category}</div>
                  </div>
                  <div className="lawcademics-content">
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <div className="lawcademics-meta">
                      <span>By {article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="article-date">
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <a href={`/blog/${article.id}`} className="lawcademics-link">
                      Read More
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
} 