import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// We no longer need sections, just a clean, single list of links.
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Request A Quote', path: '/quote' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // --- KEY CHANGE: The panel is now narrower on larger screens ---
          className="fixed top-24 right-0 w-full sm:w-80 h-auto bg-white z-40 shadow-lg border-t border-l border-gray-200"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* The content is now a single vertical list */}
          <div className="p-4">
            <nav>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={onClose} // Close menu when link is clicked
                      className={({ isActive }) =>
                        `block w-full text-left px-4 py-3 text-base rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'bg-blue-500 text-white' // Active link has a clear background
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;