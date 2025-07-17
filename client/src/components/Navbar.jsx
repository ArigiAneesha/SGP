import React, { useState } from 'react';
import { FaCog, FaBars, FaTimes } from 'react-icons/fa'; // Added bars and times
import './Navbar.css';
import SettingsModal from '../Pages/SettingsModal';

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // close menu on selection
    }
  };

  return (
    <>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-left">
          <img src="logo.jpg" width="40px" className="navlogo" alt="logo" />
          <h2 className="nav-title">SGP</h2>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          <li><button onClick={() => scrollToSection('help')}>Help</button></li>
        </ul>

        <FaCog className="settings-icon" onClick={() => setShowSettings(true)} title="Settings" />
      </nav>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default Navbar;
