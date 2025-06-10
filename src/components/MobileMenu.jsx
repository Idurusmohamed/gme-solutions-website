import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Organize links into categories, like the Swift example
const menuSections = {
  'Company': [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ],
  'Services': [
    { name: 'Our Services', path: '/services' },
    { name: 'Request A Quote', path: '/quote' },
  ],
  'Support': [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ]
};

const MobileMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-24 left-0 w-full bg-white z-40 overflow-y-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="max-w-7xl mx-auto py-10 px-8">
            <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {Object.entries(menuSections).map(([sectionTitle, links]) => (
                <div key={sectionTitle} className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">
                    {sectionTitle}
                  </h2>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) => 
                            `text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                              isActive ? '!text-blue-600 font-medium' : ''
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;