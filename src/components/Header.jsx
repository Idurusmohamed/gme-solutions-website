import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef(null); // Use a ref to hold the timer ID

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Cancel any pending close timer
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    // Start a timer to close the menu after a short delay
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // 200ms grace period
  };

  const headerDynamicClasses = isMenuOpen
    ? 'bg-white text-gray-900 shadow-md'
    : 'bg-transparent text-white';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between transition-colors duration-300 ${headerDynamicClasses}`}
    >
      <Link to="/" aria-label="GME Solutions Homepage">
        <Logo className="h-10 w-auto" />
      </Link>
      
      {/* The hover events are now on this container */}
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />

        {/* We pass the hover handlers down to the menu component */}
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