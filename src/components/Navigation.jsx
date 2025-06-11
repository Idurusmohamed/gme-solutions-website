// src/components/Navigation.jsx
import { NavLink } from 'react-router-dom'; // Using NavLink for active link styling [1]

const Navigation = () => {
  // Define base classes for navigation links
  const linkClasses = "px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md transition-all duration-300 ease-in-out"; // [1]
  // Define classes for the active link
  const activeLinkClasses = "bg-blue-700 text-white"; // [1]
  return (
    <nav className="bg-gray-200 shadow-md sticky top-0 z-50"> {/* Slightly different background, shadow, sticky [1] */}
      <ul className="max-w-6xl mx-auto flex flex-wrap justify-center items-center list-none p-2 md:p-0"> {/* Centered, responsive padding [1] */}
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/quote" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            Request A Quote
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            Contact Us
          </NavLink>
        </li>
        <li> {/* Added FAQ Link [1] */}
          <NavLink 
            to="/faq" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            FAQ
          </NavLink>
        </li>
        {/* Optional Careers Link - uncomment if you add this page */}
        {/* 
        <li>
          <NavLink 
            to="/careers" 
            className={({ isActive }) => isActive? `${linkClasses} ${activeLinkClasses}` : linkClasses}
          >
            Careers
          </NavLink>
        </li> 
        */}
      </ul>
    </nav>
  );
};

export default Navigation;