import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';

export default function PrivacyPolicyPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Breadcrumb title="Privacy Policy" bgUrl="/images/attorney-page.jpg" />
      <Section pt="80" ptLg="50" pb="80" pbLg="50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="cs_mb_20">Privacy Policy</h2>
              <p className="text-muted cs_mb_20">Last updated: September 2025</p>
              <p>We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard information when you interact with Karachi Law Firms.</p>
              <h5 className="cs_mt_30">Information We Collect</h5>
              <ul>
                <li>Contact details provided via forms (name, email, phone).</li>
                <li>Communications and documents you share with us.</li>
                <li>Usage data via analytics to improve our website.</li>
              </ul>
              <h5 className="cs_mt_30">How We Use Your Information</h5>
              <ul>
                <li>Respond to inquiries and provide legal services.</li>
                <li>Improve site performance and user experience.</li>
                <li>Maintain records required by law and our practice.</li>
              </ul>
              <h5 className="cs_mt_30">Data Sharing</h5>
              <p>We do not sell your data. We may share limited information with trusted providers (e.g., analytics and email services) under confidentiality obligations and as required by Pakistani law.</p>
              <h5 className="cs_mt_30">Security</h5>
              <p>We use reasonable technical and organizational safeguards to protect your data. No method of transmission or storage is 100% secure.</p>
              <h5 className="cs_mt_30">Your Rights</h5>
              <p>You may request access, correction, or deletion of your personal data by contacting us at <a href="mailto:info@karachilawfirms.pk">info@karachilawfirms.pk</a>.</p>
              <h5 className="cs_mt_30">Contact</h5>
              <p>Karachi Law Firms, Karachi, Pakistan.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


