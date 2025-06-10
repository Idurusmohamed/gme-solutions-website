import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle'; // Import the new animated icon
import gmeLogo from '../assets/gme-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        // --- DYNAMIC STYLING IS THE KEY HERE ---
        className={`absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between transition-colors duration-300 ${
          isMenuOpen ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white'
        }`}
      >
        <Link to="/" className="flex-shrink-0">
          <img src={gmeLogo} alt="GME Solutions LLC Logo" className="h-16" />
          <span className="sr-only">GME Solutions LLC</span>
        </Link>
        
        {/* Use the new MenuToggle component */}
        <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      </header>
      
      {/* The MobileMenu is now outside the header for cleaner layering */}
      <MobileMenu isOpen={isMenuOpen} />
    </>
  );
};

export default Header;