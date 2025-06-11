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

// The component now accepts the hover handlers as props
const MobileMenu = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // We apply the hover handlers to the menu panel itself
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-14 right-0 z-50 w-64 origin-top-right rounded-md bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5"
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <nav>
            <ul className="space-y-1 p-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block w-full text-left px-3 py-2 text-base rounded-md transition-colors duration-200 ${
                        isActive
                          ? 'font-semibold text-blue-600 bg-blue-50'
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;