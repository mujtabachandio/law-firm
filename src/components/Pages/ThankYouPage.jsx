import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import { readFormSubmission, reportFormSubmission } from '../../lib/formSubmission';

/**
 * Shown after a form has been sent.
 *
 * Reachable only by submitting something: the page reads the note the form
 * left in sessionStorage and sends anyone without one back to the contact
 * page. That keeps the URL from being shared, bookmarked or typed into a
 * conversion report by someone who never filled anything in.
 *
 * It is also noindex, and the sitemap generator excludes it, so it stays out
 * of search results — a confirmation page ranking for the firm's name would
 * be a poor first impression and a meaningless landing.
 */
export default function ThankYouPage() {
  // Read once, on the first render. Re-reading would make the component's
  // behaviour depend on when it happened to re-render.
  const submission = useMemo(() => readFormSubmission(), []);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (submission) reportFormSubmission(submission);
    setChecked(true);
  }, [submission]);

  if (!submission) {
    // Replace rather than push: the back button should not land here either.
    return <Navigate to="/contact" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Thank You | Karachi Law Firms</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Your message has been received by Karachi Law Firms."
        />
      </Helmet>

      <Breadcrumb title="Thank You" bgUrl="/images/attorney-page.jpg" />

      <Section pt="80" ptLg="50" pb="80" pbLg="50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="text-center cs_mb_40">
                <div
                  className="d-inline-flex align-items-center justify-content-center cs_mb_25"
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(25, 135, 84, 0.12)',
                    color: '#198754',
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>

                <h1 className="cs_fs_40 cs_fs_lg_28 cs_fw_700 cs_mb_15">
                  Thank you, we have your message
                </h1>
                <p className="cs_fs_18 cs_fs_lg_16" style={{ color: '#555', lineHeight: '1.8' }}>
                  Your enquiry has reached our team at Karachi Law Firms. Nothing
                  further is needed from you right now.
                </p>
              </div>

              <div
                className="cs_mb_40"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #eee',
                  borderRadius: '10px',
                  padding: '28px',
                }}
              >
                <h2 className="cs_fs_22 cs_fs_lg_20 cs_fw_700 cs_mb_20">
                  What happens next
                </h2>
                <ol className="cs_fs_17 cs_fs_lg_16 cs_mb_0" style={{ lineHeight: '2', paddingLeft: '20px' }}>
                  <li>A member of our team reviews your enquiry and the area of law it concerns.</li>
                  <li>We reply within one working day, by email or on the number you gave us.</li>
                  <li>If the matter needs a longer conversation, we arrange a consultation at a time that suits you.</li>
                </ol>
              </div>

              <div
                className="cs_mb_40"
                style={{
                  backgroundColor: '#faf9f6',
                  borderLeft: '4px solid #c9a227',
                  borderRadius: '6px',
                  padding: '22px 24px',
                }}
              >
                <h2 className="cs_fs_20 cs_fs_lg_18 cs_fw_700 cs_mb_10">
                  If your matter is urgent
                </h2>
                <p className="cs_fs_17 cs_fs_lg_16 cs_mb_20" style={{ color: '#555' }}>
                  Court deadlines and arrests will not wait for an email reply.
                </p>

                {/*
                  Rows rather than links inside a sentence. On a phone these are
                  the two things someone in a hurry reaches for, and an inline
                  link is only as tall as its line of text — too small a target
                  for a thumb, and this is the worst page to miss a tap on.
                */}
                <div className="d-flex flex-column" style={{ gap: '10px' }}>
                  <a
                    href="tel:+923000927678"
                    className="d-flex align-items-center cs_fs_17 cs_fs_lg_16"
                    style={{
                      gap: '12px',
                      minHeight: '48px',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      border: '1px solid #e7e2d2',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span style={{ wordBreak: 'break-word' }}>+92 300 0927678</span>
                  </a>

                  <a
                    href="mailto:info@karachilawfirms.pk"
                    className="d-flex align-items-center cs_fs_17 cs_fs_lg_16"
                    style={{
                      gap: '12px',
                      minHeight: '48px',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      border: '1px solid #e7e2d2',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    <span style={{ wordBreak: 'break-word' }}>info@karachilawfirms.pk</span>
                  </a>
                </div>
              </div>

              <div className="text-center cs_mb_40">
                <h2 className="cs_fs_20 cs_fs_lg_18 cs_fw_700 cs_mb_20">
                  While you wait
                </h2>
                <div className="d-flex justify-content-center flex-wrap" style={{ gap: '12px' }}>
                  <Link to="/service" className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
                    <span>Browse our services</span>
                  </Link>
                  <Link to="/blog" className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
                    <span>Read our legal guides</span>
                  </Link>
                  <Link to="/" className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
                    <span>Back to home</span>
                  </Link>
                </div>
              </div>

              {/* Only here so the effect's completion is observable in tests. */}
              <span hidden data-thankyou-ready={checked ? 'true' : 'false'} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
