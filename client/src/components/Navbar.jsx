import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import SettingsModal from '../Pages/SettingsModal';

const Navbar = () => {

  const [showSettings, setShowSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // ✅ AUTH DATA
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  // ✅ GET INITIAL (CAPS)
  const getInitial = (email) => {
    if (!email) return "";
    return email.charAt(0).toUpperCase();
  };

  const initial = getInitial(email);

  // ✅ LOGOUT
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // SCROLL
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // SEARCH
  const handleSearch = () => {
    if (!search) return;

    const sections = ["about", "gallery", "projects", "contact", "help"];

    const match = sections.find(sec =>
      sec.includes(search.toLowerCase())
    );

    if (match) {
      document.getElementById(match).scrollIntoView({ behavior: "smooth" });
      setSearch("");
      setIsMobileMenuOpen(false);
    } else {
      alert("Section not found!");
    }
  };

  return (
    <>
      <nav className="navbar">

        {/* LOGO → HOME */}
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src="logo.jpg" width="40px" className="navlogo" alt="logo" />
            <h2 className="nav-title">SGP</h2>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>

          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>

          <li>
            <button onClick={() => scrollToSection('gallery')}>Gallery</button>
          </li>

          <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>

          <li>
            <Link to="/career" target="_blank">Career</Link>
          </li>

          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>

          <li>
            <button onClick={() => scrollToSection('help')}>Help</button>
          </li>

        </ul>

        {/* SEARCH */}
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        {/* AUTH / PROFILE */}
        <div className="auth-buttons">

          {token ? (
            <>
              {/* AVATAR */}
              <div className="user-profile">
                <div className="avatar">{initial}</div>
                <span className="tooltip">{email}</span>
              </div>

              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </>
          )}

          <FaCog
            className="settings-icon"
            onClick={() => setShowSettings(true)}
          />

        </div>

      </nav>

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </>
  );
};

export default Navbar;