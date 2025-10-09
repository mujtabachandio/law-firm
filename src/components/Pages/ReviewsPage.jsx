import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';

export default function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Client Reviews" bgUrl="/images/attorney-page.jpg" />
      <Section pt="80" ptLg="50" pb="80" pbLg="50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <SectionHeadingStyle3
                sectionTitleUp="Share Your Experience"
                sectionTitle="Reviews & Ratings"
                sectionSubTitle="Your feedback helps others find trusted legal support."
                className="cs_mb_30"
              />

              <div className="card border-0 shadow-sm cs_rounded_10 cs_mb_20">
                <div className="card-body p-4">
                  <h5 className="mb-2">Google Reviews</h5>
                  <p className="text-muted mb-3">Rate us or read client reviews on Google.</p>
                  <a
                    href="https://g.page/r/CecN0CEjEqNvEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_8 cs_pb_8"
                  >
                    <span>Open Google Reviews</span>
                  </a>
                </div>
              </div>

              <div className="card border-0 shadow-sm cs_rounded_10 cs_mb_20">
                <div className="card-body p-4">
                  <h5 className="mb-2">Facebook Reviews</h5>
                  <p className="text-muted mb-3">Share your feedback on our Facebook page.</p>
                  <a
                    href="https://www.facebook.com/karachilawfirms/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_8 cs_pb_8"
                  >
                    <span>Open Facebook Reviews</span>
                  </a>
                </div>
              </div>

              <div className="card border-0 shadow-sm cs_rounded_10">
                <div className="card-body p-4">
                  <h5 className="mb-2">Google Business Link</h5>
                  <p className="text-muted mb-3">Access our Google Business profile and location.</p>
                  <a
                    href="https://share.google/hatkPxbNFz9pajryy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_8 cs_pb_8"
                  >
                    <span>Open Google Business</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


