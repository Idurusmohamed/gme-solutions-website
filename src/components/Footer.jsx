// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // The footer element itself gets the full-width background
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      {/* This inner div constrains and centers the content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Column 1: Company Info & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">GME Solutions LLC</h3>
            <p className="text-sm mb-1">DOT: 2160134</p>
            <p className="text-sm mb-1">MC: 807934</p>
            <p className="text-sm mb-1">Operating Authority: Interstate</p>
            <p className="text-sm mb-3">Fully insured and FMCSA compliant.</p>
            <a
              href="https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&query_string=2160134"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
            >
              FMCSA SAFER Record
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm hover:text-blue-300 hover:underline transition-colors duration-300">Our Services</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-300 hover:underline transition-colors duration-300">About Us</Link></li>
              <li><Link to="/quote" className="text-sm hover:text-blue-300 hover:underline transition-colors duration-300">Request A Quote</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-300 hover:underline transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-sm hover:text-blue-300 hover:underline transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-blue-300 hover:underline transition-colors duration-300">FAQ</Link></li> {/* Added FAQ Link */}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-sm mb-1">
              <a href="tel:+16785106050" className="hover:text-blue-300 hover:underline transition-colors duration-300">
                Phone: +1 678 510 6050
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="mailto:Ahmed@gmesolutionsllc.com" className="hover:text-blue-300 hover:underline transition-colors duration-300">
                Mail: Ahmed@gmesolutionsllc.com
              </a>
            </p>
            <p className="text-sm">
              Address: 1243 Huntington place circle, <br />Lithonia GA, 30058
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} GME Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;