import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import Logo from './Logo';

/**
 * Renders the site-wide header.
 * Manages its own state for the mobile menu and dynamic styling based on scroll position and page location.
 * Features a hover-to-open menu with a grace period for better UX.
 */
const Header = () => {
  // State for controlling the mobile menu's open/closed status.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track if the user has scrolled down from the top of the page.
  const [isScrolled, setIsScrolled] = useState(false);
  
  // A ref to hold the timer for the hover menu's "grace period".
  // Using a ref prevents re-renders when the timer ID changes.
  const timeoutRef = useRef(null);
  
  // --- Location and Scroll Detection Hooks ---

  // Get the current page location object to determine if we're on the homepage.
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // This effect adds a scroll event listener to the window when the component mounts.
  // It checks the scroll position to determine if the header should have a solid background.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // A 10px threshold prevents it from triggering too easily.
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: Remove the event listener when the component is unmounted to prevent memory leaks.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array [] means this effect runs only once on mount.


  // --- Hover Menu Logic ---

  // When the mouse enters the trigger area (the button or the menu itself).
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Always cancel any pending "close" timer.
    setIsMenuOpen(true);
  };

  // When the mouse leaves the trigger area.
  const handleMouseLeave = () => {
    // Start a timer to close the menu after a short delay (the grace period).
    // This prevents the menu from closing if the user is just moving their mouse from the button to the menu.
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // 200ms grace period.
  };


  // --- Dynamic Styling Logic ---

  // The header is considered "active" (solid background) if the menu is open,
  // OR if we are not on the homepage, OR if we are on the homepage AND have scrolled.
  const isHeaderActive = isMenuOpen || !isHomePage || (isHomePage && isScrolled);

  const headerDynamicClasses = isHeaderActive
    ? 'bg-white text-gray-900 shadow-lg' // Style for an active/scrolled header.
    : 'bg-transparent text-white';     // Default style for the top of the homepage.

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${headerDynamicClasses}`}
    >
      {/* Site Logo */}
      <Link to="/" aria-label="GME Solutions Homepage">
        <Logo className="h-10 w-auto" />
      </Link>
      
      {/* Menu Trigger Container (handles hover and holds the button/menu) */}
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