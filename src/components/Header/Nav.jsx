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
            {/* Core Services */}
            <li className="dropdown-header">
              <span>Core Services</span>
            </li>
            <li>
              <Link to="/service/constitutional-advocacy" onClick={() => setMobileToggle(false)}>
                Constitutional Advocacy
              </Link>
            </li>
            <li>
              <Link to="/service/digital-case-management" onClick={() => setMobileToggle(false)}>
                Digital Case Management
              </Link>
            </li>
            <li>
              <Link to="/service/lawcademics" onClick={() => setMobileToggle(false)}>
                Lawcademics
              </Link>
            </li>
            <li>
              <Link to="/service/corporate-legal-support" onClick={() => setMobileToggle(false)}>
                Corporate Legal Support
              </Link>
            </li>
            <li>
              <Link to="/service/lawconomic-solutions" onClick={() => setMobileToggle(false)}>
                Lawconomic Solutions
              </Link>
            </li>
            
            {/* Family Law */}
            <li className="dropdown-header">
              <span>Family Law</span>
            </li>
            <li>
              <Link to="/service/divorce-lawyer" onClick={() => setMobileToggle(false)}>
                Divorce Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/child-custody" onClick={() => setMobileToggle(false)}>
                Child Custody
              </Link>
            </li>
            <li>
              <Link to="/service/guardianship-lawyer" onClick={() => setMobileToggle(false)}>
                Guardianship Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/domestic-violence-lawyer" onClick={() => setMobileToggle(false)}>
                Domestic Violence Lawyer
              </Link>
            </li>
            
            {/* Property & Real Estate */}
            <li className="dropdown-header">
              <span>Property & Real Estate</span>
            </li>
            <li>
              <Link to="/service/property-lawyer" onClick={() => setMobileToggle(false)}>
                Property Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/inheritance-of-property" onClick={() => setMobileToggle(false)}>
                Inheritance of Property
              </Link>
            </li>
            <li>
              <Link to="/service/succession-certificate" onClick={() => setMobileToggle(false)}>
                Succession Certificate
              </Link>
            </li>
            
            {/* Criminal & Civil Law */}
            <li className="dropdown-header">
              <span>Criminal & Civil Law</span>
            </li>
            <li>
              <Link to="/service/criminal-lawyer" onClick={() => setMobileToggle(false)}>
                Criminal Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/civil-lawyer" onClick={() => setMobileToggle(false)}>
                Civil Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/fia-lawyer" onClick={() => setMobileToggle(false)}>
                F.I.A Lawyer
              </Link>
            </li>
            
            {/* Business & Corporate */}
            <li className="dropdown-header">
              <span>Business & Corporate</span>
            </li>
            <li>
              <Link to="/service/company-lawyer" onClick={() => setMobileToggle(false)}>
                Company Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/company-registration" onClick={() => setMobileToggle(false)}>
                Company Registration
              </Link>
            </li>
            <li>
              <Link to="/service/foundation-trust-ngo" onClick={() => setMobileToggle(false)}>
                Foundation Trust NGO
              </Link>
            </li>
            
            {/* Documentation & Process */}
            <li className="dropdown-header">
              <span>Documentation & Process</span>
            </li>
            <li>
              <Link to="/service/legal-notice" onClick={() => setMobileToggle(false)}>
                Legal Notice
              </Link>
            </li>
            <li>
              <Link to="/service/documentation-lawyer" onClick={() => setMobileToggle(false)}>
                Documentation Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/processor-server" onClick={() => setMobileToggle(false)}>
                Processor Server
              </Link>
            </li>
            
            {/* Immigration & Specialized */}
            <li className="dropdown-header">
              <span>Immigration & Specialized</span>
            </li>
            <li>
              <Link to="/service/asylum-lawyer" onClick={() => setMobileToggle(false)}>
                Asylum Lawyer
              </Link>
            </li>
            <li>
              <Link to="/service/private-investigator" onClick={() => setMobileToggle(false)}>
                Private Investigator
              </Link>
            </li>
            <li>
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
