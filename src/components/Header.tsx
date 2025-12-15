// src/components/Header.tsx (FINAL UNIFIED NAVIGATION)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/fixmyac-logo.jpeg'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-content">
        
        {/* Logo (Left Side) */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="FixMyAc Logo" className="header-logo" /> 
        </Link>
        
        {/* Hamburger Icon (Right Side on Mobile) */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen} 
        >
          <div className="menu-icon">
            <span className="bar top-bar"></span>
            <span className="bar middle-bar"></span>
            <span className="bar bottom-bar"></span>
          </div>
        </button>

        {/* 💥 Single Unified Navigation */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home-section" className="nav-link" onClick={handleNavClick}>Home</a>
          <a href="#services-section" className="nav-link" onClick={handleNavClick}>Our Services</a>
          <a href="#whyus-section" className="nav-link" onClick={handleNavClick}>Why Choose Us</a>
          <a href="#contact-section" className="nav-link" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>

      {/* Dark overlay for mobile menu */}
      {isMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;