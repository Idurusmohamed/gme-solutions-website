// src/components/Header.jsx
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Import the new MobileMenu component

// --- IMPORT YOUR LOGO IMAGE HERE ---
import gmeLogo from '../assets/gme-logo.png'; // Make sure this path is correct
// --- END LOGO IMPORT ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Make header transparent, absolute position, full width, and high z-index
    // Use flexbox to align items: logo on left, contact info and hamburger on right
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-8 flex items-center justify-between">
      {/* Logo on the left, linked to homepage */}
      <Link to="/" className="flex items-center">
        <img 
          src={gmeLogo} 
          alt="GME Solutions LLC Logo" 
          className="h-16 md:h-20" // Adjust height as needed for your logo
        />
        <span className="sr-only">GME Solutions LLC</span> 
      </Link>
      
      {/* Right-aligned group: Contact info and Hamburger button */}
      <div className="flex items-center space-x-4"> {/* Use flex to align contact info and button */}
        {/* Contact info - Hidden on very small screens, visible on sm and up */}
        <div className="text-sm text-gray-200 space-x-2 md:space-x-4 hidden sm:flex items-center"> 
          <span>
            <a 
              href="tel:+16785106050" 
              className="text-current hover:text-yellow-400 hover:underline transition-colors duration-300"
            >
              +1 678 510 6050
            </a>
          </span>
          <span className="hidden md:inline">|</span>
          <span>
            <a 
              href="mailto:Ahmed@gmesolutionsllc.com" 
              className="text-current hover:text-yellow-400 hover:underline transition-colors duration-300"
            >
              Ahmed@gmesolutionsllc.com
            </a>
          </span>
          <span className="hidden md:inline">|</span>
          <span>MON TO SUN (24 HRS)</span>
        </div>

        {/* Hamburger Menu Button - Always visible */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          aria-label="Open menu"
        >
          {/* Hamburger Icon (SVG) */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Component - Conditionally rendered */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;