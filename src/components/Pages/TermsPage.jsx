import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';

export default function TermsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Karachi Law Firms</title>
        <meta
          name="description"
          content="Review the terms and conditions that govern your use of the Karachi Law Firms website and our legal services in Pakistan."
        />      </Helmet>
      <Breadcrumb title="Terms & Conditions" bgUrl="/images/attorney-page.jpg" />
      <Section pt="80" ptLg="50" pb="80" pbLg="50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h1 className="cs_mb_20">Terms & Conditions</h1>
              <p className="text-muted cs_mb_20">Last updated: September 2025</p>
              <p>Welcome to Karachi Law Firms. By accessing or using our website (www.karachilawfirms.pk) or engaging our services, you agree to comply with and be bound by the following Terms & Conditions.</p>
              <h5 className="cs_mt_30">1. Use of Website</h5>
              <p>This website is intended for individuals and businesses seeking legal information and services in Pakistan. You agree to use the website only for lawful purposes and in compliance with applicable laws.</p>
              <h5 className="cs_mt_30">2. No Legal Advice Disclaimer</h5>
              <p>The information provided on our website is for general informational purposes only and does not constitute formal legal advice.</p>
              <h5 className="cs_mt_30">3. Client-Attorney Relationship</h5>
              <p>Visiting this website or submitting an inquiry does not create an attorney-client relationship. A relationship is established only after we formally accept your case and sign an engagement agreement.</p>
              <h5 className="cs_mt_30">4. Accuracy of Information</h5>
              <p>We strive to keep information up to date but make no guarantees regarding completeness or accuracy. Karachi Law Firms is not liable for damages arising from reliance on website content.</p>
              <h5 className="cs_mt_30">5. Intellectual Property</h5>
              <p>All content on this website is the property of Karachi Law Firms unless otherwise stated. You may not copy or distribute content without prior written permission.</p>
              <h5 className="cs_mt_30">6. Third-Party Links</h5>
              <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of external sites.</p>
              <h5 className="cs_mt_30">7. Limitation of Liability</h5>
              <p>Karachi Law Firms, its lawyers, and affiliates shall not be held liable for any direct, indirect, or consequential damages arising from the use of our website or services.</p>
              <h5 className="cs_mt_30">8. Governing Law</h5>
              <p>These Terms & Conditions are governed by the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Karachi, Pakistan.</p>
              <h5 className="cs_mt_30">9. Changes to Terms</h5>
              <p>We reserve the right to update or modify these Terms & Conditions at any time. Continued use of our website constitutes acceptance of any changes.</p>
              <h5 className="cs_mt_30">10. Contact Us</h5>
              <p>
                Karachi Law Firms<br />
                Karachi, Pakistan<br />
                <a href="mailto:info@karachilawfirms.pk">info@karachilawfirms.pk</a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


