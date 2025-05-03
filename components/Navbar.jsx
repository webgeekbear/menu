// Navigation bar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../MenuData'; // Import the structured menu
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  return (
    <nav className="navbar">
      {/* Hamburger menu */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu List */}
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        {menuData.map((section, index) => (
          <li key={index} className="section">
            {/* Section title clickable if multiple pages */}
            {section.pages.length > 1 ? (
              <>
                <span className="section-title" onClick={() => toggleSection(section.section)}>
                  {section.section} ▼
                </span>
                <ul className={`submenu ${activeSection === section.section ? 'open' : ''}`}>
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link to={page.path} onClick={() => { setIsOpen(false); setActiveSection(null); }}>
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // Single page sections
              <Link to={section.pages[0].path} onClick={() => setIsOpen(false)}>
                {section.section}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;