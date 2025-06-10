import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // <-- 1. New state to track scroll position
  const timeoutRef = useRef(null);

  // 2. This hook adds a scroll event listener to the page
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user has scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  // 3. The header style now depends on BOTH menu state AND scroll state
  const isHeaderActive = isMenuOpen || isScrolled;

  const headerDynamicClasses = isHeaderActive
    ? 'bg-white text-gray-900 shadow-lg' // Solid header style
    : 'bg-transparent text-white';     // Transparent header style

  return (
    <header
      // Added a class for a smoother transition on the background color
      className={`fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${headerDynamicClasses}`}
    >
      <Link to="/" aria-label="GME Solutions Homepage">
        {/* The logo's color is now controlled by the text color of the header */}
        <Logo className="h-10 w-auto" />
      </Link>
      
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />

        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </header>
  );
};

export default Header;