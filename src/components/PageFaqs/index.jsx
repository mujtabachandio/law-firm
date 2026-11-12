import React from 'react';
import { Helmet } from 'react-helmet';

import Accordion from '../Accordion';
import faqs from '../../data/faqs.json';
import { renderInlineLinks, stripInlineLinks } from '../../lib/inlineLinks';

/**
 * The FAQ block for a page, from src/data/faqs.json.
 *
 * That file is generated from the SEO team's brief ("KarachiLawFirms.pk – FAQ
 * Questions & Answers (Final).docx" in doc/), keyed by page path. Keeping the
 * copy in one file rather than scattered across 29 page components means the
 * next revision of the brief is one regenerated file, and a reviewer can
 * check every answer against the document in one place.
 *
 * Two things come out of it for each page:
 *
 *   - the visible accordion, with the brief's internal links on their anchor
 *     text (written in the data as [anchor](/path));
 *   - FAQPage structured data with the same questions and the answers as
 *     plain text, which is what answer engines and rich results read. Built
 *     from the same entries the page renders, so the two cannot drift apart.
 *
 * `path` is the page's canonical path, e.g. "/service/family-law" or "/".
 */
export default function PageFaqs({ path }) {
  const entries = faqs[path];
  if (!Array.isArray(entries) || entries.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInlineLinks(entry.a) },
    })),
  };

  const items = entries.map((entry) => ({
    title: entry.q,
    desc: renderInlineLinks(entry.a, { linkStyle: { fontWeight: 600 } }),
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Accordion data={items} />
    </>
  );
}
