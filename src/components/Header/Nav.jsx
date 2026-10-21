import React, { useEffect } from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  // Prevent scroll propagation when dropdown is open
  useEffect(() => {
    const handleDropdownScroll = (e) => {
      const dropdown = e.target.closest('.cs_nav .cs_nav_list .menu-item-has-children > ul');
      if (dropdown) {
        e.stopPropagation();
      }
    };

    // Add event listener for dropdown scroll
    document.addEventListener('wheel', handleDropdownScroll, { passive: false });
    document.addEventListener('touchmove', handleDropdownScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleDropdownScroll);
      document.removeEventListener('touchmove', handleDropdownScroll);
    };
  }, []);

  return (
    <ul className="cs_nav_list fw-medium text-uppercase">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            {/* Family Law Services */}
            <li className="main-category">
              <Link to="/service/family-law" onClick={() => setMobileToggle(false)}>
                Family Law
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/divorce-lawyer" onClick={() => setMobileToggle(false)}>
                Divorce Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/child-custody" onClick={() => setMobileToggle(false)}>
                Child Custody
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/guardianship-lawyer" onClick={() => setMobileToggle(false)}>
                Guardianship Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/domestic-violence-lawyer" onClick={() => setMobileToggle(false)}>
                Domestic Violence Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/maintenance-reconciliation" onClick={() => setMobileToggle(false)}>
                Maintenance & Reconciliation
              </Link>
            </li>
            
            {/* Property & Real Estate Services */}
            <li className="main-category">
              <Link to="/service/property-law" onClick={() => setMobileToggle(false)}>
                 Property Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/property-lawyer" onClick={() => setMobileToggle(false)}>
              Property & Real Estate
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/inheritance-of-property" onClick={() => setMobileToggle(false)}>
                Inheritance of Property
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/succession-certificate" onClick={() => setMobileToggle(false)}>
                Succession Certificate
              </Link>
            </li>
            
            {/* Criminal & Civil Law Services */}
            <li className="main-category">
              <Link to="/service/criminal-law" onClick={() => setMobileToggle(false)}>
                 Criminal Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/criminal-lawyer" onClick={() => setMobileToggle(false)}>
              Criminal Law
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/civil-lawyer" onClick={() => setMobileToggle(false)}>
                Civil Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/fia-lawyer" onClick={() => setMobileToggle(false)}>
                F.I.A Lawyer
              </Link>
            </li>
            
            {/* Business & Corporate Services */}
            <li className="main-category">
              <Link to="/service/corporate-law" onClick={() => setMobileToggle(false)}>
                 Corporate Legal Support
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/corporate-legal-support" onClick={() => setMobileToggle(false)}>
              Business & Corporate
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/company-lawyer" onClick={() => setMobileToggle(false)}>
                Company Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/company-registration" onClick={() => setMobileToggle(false)}>
                Company Registration
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/foundation-trust-ngo" onClick={() => setMobileToggle(false)}>
                Foundation Trust NGO
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/fbr-lawyer" onClick={() => setMobileToggle(false)}>
                FBR Tax Lawyer
              </Link>
            </li>
            
            {/* Documentation & Process Services */}
            <li className="main-category">
              <Link to="/service/documentation-process" onClick={() => setMobileToggle(false)}>
                Documentation & Process
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/legal-notice" onClick={() => setMobileToggle(false)}>
                Legal Notice
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/documentation-lawyer" onClick={() => setMobileToggle(false)}>
                Documentation Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/processor-server" onClick={() => setMobileToggle(false)}>
                Processor Server
              </Link>
            </li>
            
            {/* Immigration & Specialized Services */}
            <li className="main-category">
              <Link to="/service/immigration-specialized" onClick={() => setMobileToggle(false)}>
                Immigration & Specialized
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/asylum-lawyer" onClick={() => setMobileToggle(false)}>
                Asylum Lawyer
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/private-investigator" onClick={() => setMobileToggle(false)}>
                Private Investigator
              </Link>
            </li>
            <li className="sub-service">
              <Link to="/service/legal-advisor" onClick={() => setMobileToggle(false)}>
                Legal Advisor
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/lawcademics" onClick={() => setMobileToggle(false)}>
          Lawcademics Hub
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/team" onClick={() => setMobileToggle(false)}>
          Attorneys
        </Link>
      </li>
      <li>
          <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
