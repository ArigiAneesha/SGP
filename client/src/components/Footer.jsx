// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-content">
        
        {/* Logo & Description */}
        <div className="footer-brand">
          <img src="./logo.jpg" alt="Logo" className="footer-logo" />
          <p className="brand-description">
            Sri Gowri Parameswara Electrical & Engineering Works offers expert electrical solutions with quality and integrity.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/electricalproblemsolve?igsh=Miloc2R6anBvcDkw" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#contact">Contact</a>
          <a href="#help">FAQs</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><a href="tel:+916303342931">+91 6303342931</a></p>
          <p><a href="tel:+917730022384">+91 7730022384</a></p>
          <p><a href="mailto:srigowriparameswaraelectrical@gmail.com">srigowriparameswaraelectrical@gmail.com</a></p>
          <p>B,plot no:49 & 50, Room no. 403, 4th floor, Sai Balaji Cubicle,above green trends saloon, Raghavendra Colony, Kondapur, Telangana 500084</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Sri Gowri Parameswara Electrical & Engineering Works. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
