// src/components/MobileMenu.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose }) => {
  const linkClasses = "block px-4 py-3 text-lg font-medium text-white hover:bg-blue-700 transition-colors duration-300 rounded-md";
  const activeLinkClasses = "bg-blue-800"; // Darker blue for active state

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" }, // Starts off-screen to the right
    visible: { opacity: 1, x: "0%" },   // Slides into view
    exit: { opacity: 0, x: "100%" },    // Slides out to the right
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-end p-8 md:p-12" // Full screen overlay, aligned right
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.3 }} // Smooth animation
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="text-white text-4xl mb-8 focus:outline-none"
            aria-label="Close menu"
          >
            &times; {/* Times symbol for close */}
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 w-full max-w-xs"> {/* Stack links vertically, max width for menu */}
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
              onClick={onClose} // Close menu on link click
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
              onClick={onClose}
            >
              Our Services
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
              onClick={onClose}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/quote" 
              className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
              onClick={onClose}
            >
              Request A Quote
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
              onClick={onClose}
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/faq" 
              className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
              onClick={onClose}
            >
              FAQ
            </NavLink>
            {/* Add other links as needed */}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;