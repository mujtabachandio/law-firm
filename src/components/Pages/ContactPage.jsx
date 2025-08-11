import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import LocationInMap from '../LocationInMap';
import Section from '../Section';
import FormStyle2 from '../Form/FormStyle2';
import IconboxStyle2 from '../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import { pageTitle } from '../../helpers/PageTitle';

const locationData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5!2d67.0822!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1563075599994!5m2!1sen!2s';

export default function ContactPage() {
  pageTitle('Contact - Karachi Law Firms');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Contact Us" bgUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=400&fit=crop" />
      <Section pt="133" ptLg="75" pb="133" pbLg="75">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <SectionHeadingStyle3
                sectionTitleUp="Have any question?"
                sectionTitle="Write a Message"
              />
              <FormStyle2 />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cs_pl_60 cs_pl_lg_0 cs_pt_lg_60">
                <SectionHeadingStyle3
                  sectionTitleUp="Contact With Us"
                  sectionTitle="Let's work together"
                  sectionSubTitle="Get in touch with our legal experts for professional advice, consultation, and comprehensive legal services tailored to your needs."
                  className="cs_mb_40"
                />
                <div className="cs_iconbox_wrapper cs_style1">
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_1.svg"
                    title="(123) 45678"
                    titleUp="Have Any Question?"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_2.svg"
                    title="info@karachilawfirms.com"
                    titleUp="Send Email"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_3.svg"
                    title="Karachi, Pakistan"
                    titleUp="Our Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <LocationInMap data={locationData} />
    </>
  );
}
