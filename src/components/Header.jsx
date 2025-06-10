// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// --- IMPORT YOUR LOGO IMAGE HERE ---
import gmeLogo from '../assets/gme-logo.png'; // Make sure this path is correct
// --- END LOGO IMPORT ---

const Header = () => {
  return (
    // Make header transparent, absolute position, full width, and high z-index
    // Use flexbox to align items: logo on left, contact info on right
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-8 flex items-center justify-between">
      {/* Logo on the left, linked to homepage */}
      <Link to="/" className="flex items-center">
        <img 
          src={gmeLogo} 
          alt="GME Solutions LLC Logo" 
          className="h-16 md:h-20" // Adjust height as needed for your logo
        />
        {/* You can optionally keep a hidden text version for accessibility or SEO if desired */}
        <span className="sr-only">GME Solutions LLC</span> 
      </Link>
      
      {/* Contact info on the right */}
      <div className="text-sm text-gray-200 space-x-2 md:space-x-4 flex items-center"> 
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
    </header>
  );
};

export default Header;