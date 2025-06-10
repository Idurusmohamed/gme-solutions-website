import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import gmeLogo from '../assets/gme-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between">
      {/* Logo on the left, linked to homepage */}
      <Link to="/" className="flex-shrink-0">
        <img 
          src={gmeLogo} 
          alt="GME Solutions LLC Logo" 
          className="h-16 md:h-20"
        />
        <span className="sr-only">GME Solutions LLC</span> 
      </Link>
      
      {/* This relative container is the crucial change. It anchors the dropdown menu. */}
      <div className="relative">
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200"
          aria-label="Open menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* The MobileMenu component now opens relative to this container */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;