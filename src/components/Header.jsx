import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import gmeLogo from '../assets/gme-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // We keep the toggle function for the click event (essential for touch devices)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between transition-colors duration-300 ${
        isMenuOpen ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <Link to="/" className="flex-shrink-0">
        <img src={gmeLogo} alt="GME Solutions LLC Logo" className="h-16" />
        <span className="sr-only">GME Solutions LLC</span>
      </Link>
      
      {/* --- KEY CHANGE: Added hover events to this container --- */}
      <div 
        className="relative"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* The MenuToggle now uses the existing toggleMenu for its onClick */}
        <MenuToggle toggle={toggleMenu} isOpen={isMenuOpen} />

        {/* The MobileMenu will now appear on hover or click */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;