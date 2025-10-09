import React from 'react';
import ContactForm from '../../Form';
import IconboxStyle2 from '../../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../../SectionHeading/SectionHeadingStyle3';

export default function ContactSectionBottom() {
  const contactInfo = [
    {
      imgUrl: '/images/icons/contact_icon_1.svg',
      titleUp: 'Call Us Now',
      title: '+92 300 0927678',
      textColor: 'text-white',
    },
    {
      imgUrl: '/images/icons/contact_icon_2.svg',
      titleUp: 'Email Us',
      title: 'info@karachilawfirms.pk',
      textColor: 'text-white',
    },
    {
      imgUrl: '/pak-flag.png',
      titleUp: 'Visit Our Office',
      title: 'Office 104, 1st Floor, Fareed Chambers, Abdullah Haroon Road, Saddar, Karachi 74400',
      textColor: 'text-white',
    },
  ];

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6">
          <SectionHeadingStyle3
            sectionTitleUp="Contact With Us"
            sectionTitle="Justice isn't automatic it's made possible. Let's fight for it together."
            sectionSubTitle="Whether you're facing injustice or seeking legal clarity, our team is ready to be your legal partner in progress."
            textVarient="text-white"
            className="cs_mb_30"
          />
          <div className="cs_iconbox_wrapper cs_style1">
            {contactInfo?.map((item, index) => (
              <IconboxStyle2 {...item} key={index} />
            ))}
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 offset-xl-1 cs_mt_lg_40">
          <div className="cs_contact_wrap position-relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
