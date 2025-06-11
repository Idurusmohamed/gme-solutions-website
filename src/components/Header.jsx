import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // <-- 1. Import useLocation
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);
  
  const location = useLocation(); // <-- 2. Get the current page location
  const isHomePage = location.pathname === '/'; // Check if we are on the homepage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  // --- 3. UPDATED LOGIC TO DETERMINE HEADER STYLE ---
  // The header should be transparent ONLY if we are on the homepage, the user hasn't scrolled, AND the menu isn't open.
  const isTransparent = isHomePage && !isScrolled && !isMenuOpen;

  const headerDynamicClasses = isTransparent
    ? 'bg-transparent text-white'     // Style for the top of the homepage
    : 'bg-white text-gray-900 shadow-lg'; // Style for all other cases

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${headerDynamicClasses}`}
    >
      <Link to="/" aria-label="GME Solutions Homepage">
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