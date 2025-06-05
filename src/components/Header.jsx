import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-100 py-6 text-center shadow-lg">
      <Link 
        to="/" 
        // Refined: Removed explicit blue color, inherits text color, hover effect for clickability
        className="text-4xl font-extrabold text-gray-900 hover:text-blue-700 no-underline transition-colors duration-300"
      >
        GME Solutions LLC
      </Link>
      
      <p className="text-md text-gray-800 mt-1 italic"> 
        Fast. Reliable. GME.
      </p>
      
      <div className="mt-3 text-sm text-gray-800 space-x-2 md:space-x-4"> 
        {/* Refined: Links will inherit text-gray-800, hover changes to blue */}
        <span>
          <a 
            href="tel:+16785106050" 
            className="text-current hover:text-blue-700 hover:underline transition-colors duration-300"
          >
            +1 678 510 6050
          </a>
        </span>
        <span className="hidden md:inline">|</span>
        <span>
          <a 
            href="mailto:Ahmed@gmesolutionsllc.com" 
            className="text-current hover:text-blue-700 hover:underline transition-colors duration-300"
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