// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// If you have a logo image in your src/assets folder, you can import it like this:
// import gmeLogo from '../assets/gme-logo.png';
// Make sure the path is correct

const Header = () => {
  return (
    // Changed background to a deep, sophisticated gradient, increased shadow for impact
    <header className="bg-gradient-to-r from-gray-900 to-blue-950 py-6 text-center shadow-xl">
      {/* If using a logo: */}
      {/* <Link to="/"> */}
      {/*   <img src={gmeLogo} alt="GME Solutions LLC Logo" className="h-16 mx-auto mb-3" /> */}
      {/* </Link> */}
      
      <Link 
        to="/" 
        // Changed text to white for strong contrast, hover to yellow for pop
        className="text-4xl font-extrabold text-white hover:text-yellow-400 no-underline transition-colors duration-300"
      >
        GME Solutions LLC
      </Link>
      
      {/* Tagline text color adjusted for contrast against dark background */}
      <p className="text-md text-gray-300 mt-1 italic"> 
        Fast. Reliable. GME.
      </p>
      
      {/* Contact info text color adjusted for contrast against dark background */}
      <div className="mt-3 text-sm text-gray-300 space-x-2 md:space-x-4"> 
        <span>
          <a 
            href="tel:+16785106050" 
            // Links inherit text color, hover changes to yellow for pop
            className="text-current hover:text-yellow-400 hover:underline transition-colors duration-300"
          >
            +1 678 510 6050
          </a>
        </span>
        <span className="hidden md:inline">|</span>
        <span>
          <a 
            href="mailto:Ahmed@gmesolutionsllc.com" 
            // Links inherit text color, hover changes to yellow for pop
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