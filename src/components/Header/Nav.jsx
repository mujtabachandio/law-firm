import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium text-uppercase">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
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
