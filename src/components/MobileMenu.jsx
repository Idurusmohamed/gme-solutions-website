import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Request A Quote', path: '/quote' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

// Animation variants for the container to orchestrate staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Each child will animate 0.08s after the previous one
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse the stagger on exit
    },
  },
};

// Animation variants for each individual link item
const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // This is the main panel for the "frosted glass" look
          className="absolute top-16 right-4 z-50 w-64 origin-top-right rounded-xl border border-white/10 bg-black/20 py-2 shadow-2xl backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <motion.ul
            // Apply variants to the list container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-white' // Active link is bright white
                        : 'text-gray-300 hover:text-white' // Inactive links are slightly dimmer
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;