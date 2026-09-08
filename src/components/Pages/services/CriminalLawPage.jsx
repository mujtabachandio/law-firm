import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../Breadcrumb';
import Section from '../../Section';
import TestimonialSection from '../../Section/TestimonialSection';
import ContactSectionBottom from '../../Section/ContactSection/ContactSectionBottom';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Accordion from '../../Accordion';

const CriminalLawPage = () => {
  const criminalLawServices = [
    {
      iconUrl: '/images/icons/service_icon_4.svg',
      title: 'Criminal Lawyer',
      subTitle: 'Experienced criminal defense attorneys providing aggressive representation for all types of criminal cases and legal proceedings.',
      imgUrl: '/images/Criminal%20Lawyer.jpg',
      href: '/service/criminal-lawyer',
    },
    {
      iconUrl: '/images/icons/service_icon_5.svg',
      title: 'Civil Lawyer',
      subTitle: 'Expert civil litigation representation for disputes, contract matters, and civil legal proceedings.',
      imgUrl: '/images/Civil%20Lawyer.jpg',
      href: '/service/civil-lawyer',
    },
    {
      iconUrl: '/images/icons/service_icon_6.svg',
      title: 'F.I.A Lawyer',
      subTitle: 'Specialized representation for Federal Investigation Agency cases, white-collar crimes, and federal legal proceedings.',
      imgUrl: '/images/F.I.A%20Lawyer.jpg',
      href: '/service/fia-lawyer',
    }
  ];


  const testimonialData = [
    {
      imgUrl: '/images/avatar_1.png',
      rating: '5',
      desc: "I always thought the legal system was a black box. KLF changed that. I knew what was happening with my case at every stage.",
      name: 'Hamza R.',
      designation: 'Client in Civil Rights Case',
    },
    {
      imgUrl: '/images/avatar_2.png',
      rating: '5',
      desc: "Their research division gave us not just a lawyer, but a strategic advantage in court.",
      name: 'Adeel M.',
      designation: 'CEO of fintech startup',
    },
    {
      imgUrl: '/images/avatar_3.png',
      rating: '5',
      desc: "The constitutional advocacy team fought for our rights when no one else would. They're truly committed to justice.",
      name: 'Fatima S.',
      designation: 'Human Rights Activist',
    },
    {
      imgUrl: '/images/avatar_4.png',
      rating: '5',
      desc: "Their digital case management system made the entire legal process transparent and accessible.",
      name: 'Ahmed K.',
      designation: 'Business Owner',
    },
    {
      imgUrl: '/images/avatar_5.png',
      rating: '5',
      desc: "Professional, transparent, and effective. KLF delivered results when other firms couldn't.",
      name: 'Sarah M.',
      designation: 'Property Dispute Client',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Criminal Law Services in Karachi | Defense, Bail & FIR Support</title>
        <meta name="description" content="Get complete criminal law services in Karachi, including defense strategy, bail applications, FIR handling and court representation for all criminal cases." />
        <meta name="keywords" content="Criminal Lawyer, Criminal Lawyer in Karachi, Expert Criminal Defense Services, Bail Applications, Expert Criminal Lawyers" />
        <link rel="canonical" href="https://karachilawfirms.pk/service/criminal-law" />
      </Helmet>
      
      <Breadcrumb title="Criminal Law Services" bgUrl="/images/Criminal%20Lawyer.jpg" />

      {/* Introduction Section */}
      <Section pt="140" ptLg="80" pb="80" pbLg="50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cs_mb_60">
                <h1 className="cs_fs_48 cs_fw_700 cs_mb_30">
                  Criminal Law Services in Karachi for Defense, Bail & Court Support
                </h1>
              </div>
              
              <div className="cs_mb_40">
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  One of the most distressing things somebody can go through is being charged in a criminal case. 
                  Criminal accusations can have a lasting impact on your freedom, reputation, and future, no matter 
                  if they are the result of a misunderstanding, a false accusation, or an actual legal error. In a 
                  high-pressure commercial environment like Karachi, criminal allegations ranging from fraud and 
                  embezzlement to more serious personal charges are a reality for many. Our skilled criminal attorneys 
                  at Karachi Law Firms offer a solid, astute, and trustworthy legal defense to safeguard your rights 
                  throughout the entire legal process.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_20" style={{ color: '#555', lineHeight: '1.8' }}>
                  We understand the seriousness of criminal accusations and the stress they put on people and families. 
                  The complexity of the Pakistan Penal Code requires a defense strategy that is both aggressive and 
                  nuanced. Every stage, from filing a formal complaint to being harassed by officials, from being in 
                  detention to going to trial, requires careful legal operations. Our knowledgeable defense team handles 
                  criminal cases with accuracy, discretion, and an unwavering commitment to justice.
                </p>
                <p className="cs_fs_18 cs_lh_lg cs_mb_0" style={{ color: '#555', lineHeight: '1.8' }}>
                  Without a top-tier criminal defense team, individuals and corporations risk severe penalties that could 
                  have been mitigated with a proper legal strategy. We provide expert counsel to navigate the local court 
                  systems, ensuring that your rights are protected during every stage of the legal process, from the filing 
                  of an FIR to the final verdict.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comprehensive Criminal Defense Services Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Comprehensive Legal Services for Criminal Defense"
            subTitle="We represent clients in police stations, trial courts, sessions courts, and high courts as part of our comprehensive criminal law services in Karachi."
          />
          
          <div className="row cs_mb_40">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Pre-Arrest and Post-Arrest Bail Applications</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In any criminal case, obtaining bail is often the most urgent requirement. We handle urgent hearings, draft compelling bail applications, and make sure your rights are safeguarded against wrongful arrests. Pre-arrest, post-arrest, interim, and protected bail are all handled by our staff.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Defense in Criminal Trials</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We represent clients throughout the entire criminal trial process, including the filing of charges, the recording of evidence, cross-examination, and closing arguments. Our attorneys make sure the accused fully exercises and defends all of their legal rights in court.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">False Allegations & FIR Removal</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Due to personal disagreements, property disputes, economic problems, or familial issues, many people are unfairly accused. We assist in filing counter-complaints, quashing fraudulent FIRs, and preventing criminal law abuse.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Cases of NAB, FIA, and Cybercrime</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We defend people charged with financial corruption, money laundering, defamation, cyber fraud, white-collar crimes, and federal investigations. Advanced legal knowledge, documentary evaluation, and technical defense tactics will be required in these circumstances.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">5</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Family-Related Offenses, Domestic Violence, and Harassment</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Sensitivity and caution are necessary in cases involving domestic problems, job harassment, or family-related accusations. Our attorneys preserve their clients' privacy and individual rights while defending them.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">6</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Murder, Murder Attempts, and Serious Crimes</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We represent clients who are charged with serious crimes including guns, violence, or crimes that may risk their lives. Strong evidence evaluation, forensic analysis, witness review, and tactical courtroom advocacy are all necessary in these situations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#DAA520', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">7</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Representation of Police Stations</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We accompany clients to police stations, supervise investigations, stop wrongful detention, and make sure the law is obeyed at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Criminal Defense Process Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Our Criminal Defense Process"
            subTitle="To guarantee the best possible legal protection, our defense team follows a very well-planned and meticulous procedure."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Client Consultation and Case Review</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In order to determine the legal strengths and weaknesses of your case, we start by analyzing the FIR, allegations, and available evidence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Examining the Evidence</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Documentation, digital evidence, witness accounts, CCTV footage, forensic reports, and any other pertinent supporting materials are all examined by our staff.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Defense Planning & Legal Strategy</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Whether the objective is to obtain bail, lower charges, establish innocence, or explore settlement options, we develop a clear defense strategy based on the specifics of the allegations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Legal Representation</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We handle trial proceedings, argue bail applications, attend hearings, cross-examine prosecution witnesses, and make sure that everyone's legal rights are upheld.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_iconbox cs_style_1 text-center cs_rounded_10 cs_mr_20" style={{ minWidth: '60px', backgroundColor: '#1B365D', padding: '15px' }}>
                  <span className="cs_fs_30 fw-bold text-white">5</span>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Settlement, Acquittal, or Case Closure</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We strive for your acquittal, case quashing, charge dismissal, or, a lawful settlement, depending on the type of case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Federal Investigations and Regulatory Compliance Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Federal Investigations and Regulatory Compliance"
            subTitle="One of the most pressing issues for businesses and high-net-worth individuals in Karachi is navigating the scrutiny of federal agencies."
          />
          
          <div className="row">
            <div className="col-lg-12 cs_mb_40">
              <p className="cs_fs_18 cs_lh_lg" style={{ color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
                The Federal Investigation Agency (FIA) often monitors large-scale financial transactions, cyber activities, and corporate compliance. Facing an inquiry without expert representation can lead to frozen assets and significant reputational damage. A trusted FIA lawyer in Karachi is essential for managing these high-stakes situations.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Proactive Defense Against Federal Scrutiny</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our FIA lawyers provide the necessary defense against allegations of financial impropriety and ensure that your business remains compliant with federal regulations. By engaging a specialist from one of the best law firms in Karachi, you can proactively address regulatory red flags before they escalate into formal charges.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1B365D' }}>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="cs_fs_22 cs_fw_600 cs_mb_10">Specialized FIA Legal Expertise</h2>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Our team includes dedicated FIA lawyer specialists who understand the unique pressures of federal investigations. We handle cases involving money laundering accusations, cybercrime, government audits, and regulatory compliance matters, ensuring your commercial activities won't be hampered by legal obstacles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose KLF Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <SectionHeadingStyle2
            title="Why Choose KLF for Criminal Defense?"
            subTitle="Everyone should have an equal opportunity to defend themselves. You get dependable legal protection from Karachi Law Firms, which is based on expertise, dedication, and professional competence."
          />
          
          <div className="row">
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Skilled Defense Attorneys</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    From petty infractions to high-profile and intricate investigations, our staff has dealt with a broad variety of criminal cases.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Effective Courtroom Advocacy</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    We predict prosecution arguments, prepare in-depth for hearings, and defend our clients effectively.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Quick Bail Services</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    In order to protect your freedom and avoid needless detention, we give priority to urgent bail requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">Respectful & Confidential Management</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Criminal cases can be delicate. Every client is treated with discretion, respect, and dignity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 cs_mb_30">
              <div className="d-flex align-items-start">
                <div className="cs_mr_20" style={{ minWidth: '50px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#DAA520' }}>
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="cs_fs_22 cs_fw_600 cs_mb_10">24/7 Emergency Legal Assistance</h3>
                  <p className="cs_fs_16 cs_lh_lg m-0" style={{ color: '#666' }}>
                    Criminal issues can come up out of the blue. Our attorneys are accessible for emergency legal action, late-night advice, and urgent police station visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Cards Section */}
      <Section pt="115" ptLg="55" pb="115" pbLg="55">
        <div className="container">
          <div className="row">
            {criminalLawServices.map((item, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                <div 
                  className="service-card-modern bg-white position-relative overflow-hidden h-100"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(218, 165, 32, 0.1)',
                    marginBottom: '30px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Image Section */}
                  <div 
                    className="position-relative overflow-hidden"
                    style={{
                      height: '220px',
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="position-absolute w-100 h-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(27, 54, 93, 0.8) 0%, rgba(218, 165, 32, 0.8) 100%)',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0}
                    />
                    
                    {/* Icon Overlay */}
                    <div 
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        top: '20px',
                        right: '20px',
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '15px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <img 
                        src={item.iconUrl} 
                        alt="Icon" 
                        style={{
                          width: '30px',
                          height: '30px',
                          filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(89%) contrast(86%)'
                        }}
                      />
                    </div>
                    
                    {/* View Button */}
                    <div 
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        bottom: '20px',
                        right: '20px',
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
                        borderRadius: '50%',
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = 1;
                        e.target.style.transform = 'translateY(0)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = 0;
                        e.target.style.transform = 'translateY(20px)';
                      }}
                      onClick={() => window.location.href = item.href}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4">
                    <h3 
                      className="mb-3 fw-bold"
                      style={{ 
                        color: '#1B365D',
                        fontSize: '22px',
                        lineHeight: '1.3'
                      }}
                    >
                      <a 
                        href={item.href} 
                        className="text-decoration-none"
                        style={{ color: '#1B365D' }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    
                    <p 
                      className="mb-4"
                      style={{ 
                        color: '#6c757d', 
                        lineHeight: '1.6', 
                        fontSize: '16px',
                        marginBottom: '20px'
                      }}
                    >
                      {item.subTitle}
                    </p>
                    
                    {/* Learn More Button */}
                    <a
                      href={item.href}
                      className="btn d-inline-flex align-items-center text-decoration-none"
                      style={{
                        background: 'linear-gradient(135deg, #1B365D 0%, #E6CFB8 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(27, 54, 93, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Learn More
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="ms-2"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section pt="0" ptLg="0" pb="115" pbLg="55" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <SectionHeadingStyle2
            title="Frequently Asked Questions"
            subTitle="Get answers to common questions about our criminal defense services"
          />
          
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Accordion data={[
                {
                  title: 'What types of criminal cases do you handle?',
                  desc: 'We handle all types of criminal cases including bail applications, criminal trials, false allegations, NAB/FIA cases, cybercrime, domestic violence, harassment, serious crimes like murder, and police station representation. We represent clients in police stations, trial courts, sessions courts, and high courts.'
                },
                {
                  title: 'How quickly can you help with bail applications?',
                  desc: 'Bail is often the most urgent requirement in criminal cases. We prioritize urgent bail requirements and handle pre-arrest, post-arrest, interim, and protected bail applications. We are available 24/7 for emergency legal assistance and urgent police station visits.'
                },
                {
                  title: 'What should I do if I\'m falsely accused?',
                  desc: 'If you\'re facing false allegations due to personal disagreements, property disputes, or other issues, we assist in filing counter-complaints, quashing fraudulent FIRs, and preventing criminal law abuse. Contact us immediately to protect your rights.'
                },
                {
                  title: 'Do you handle NAB, FIA, and cybercrime cases?',
                  desc: 'Yes, we defend people charged with financial corruption, money laundering, defamation, cyber fraud, white-collar crimes, and federal investigations. These cases require advanced legal knowledge, documentary evaluation, and technical defense tactics which our team provides.'
                },
                {
                  title: 'What about serious crimes like murder?',
                  desc: 'We represent clients charged with serious crimes including murder, murder attempts, guns, violence, or crimes that may risk their lives. These cases require strong evidence evaluation, forensic analysis, witness review, and tactical courtroom advocacy which our experienced team provides.'
                },
                {
                  title: 'Do you provide 24/7 emergency assistance?',
                  desc: 'Yes, criminal issues can arise unexpectedly. Our attorneys are accessible for emergency legal action, late-night advice, and urgent police station visits. We provide 24/7 emergency legal assistance to protect your rights when you need it most.'
                }
              ]} />
            </div>
          </div>
        </div>
      </Section>

      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Client Testimonials"
          sectionTitle="What Our Clients Say?"
          sectionSubTitle="Real stories from individuals and businesses who have experienced the KLF difference in their legal journey."
          data={testimonialData}
        />
      </Section>

      {/* Contact Section Bottom */}
      <Section
        pt="50"
        ptLg="30"
        pb="50"
        pbLg="30"
        className="background-filled overflow-hidden position-relative"
        style={{ 
          backgroundImage: 'url("/images/Criminal%20Lawyer.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <ContactSectionBottom />
        </div>
      </Section>
    </>
  );
};

export default CriminalLawPage;
