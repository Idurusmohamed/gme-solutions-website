import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#e0e0e0', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/quote">Request A Quote</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {/* Optional: <li><Link to="/careers">Careers</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navigation;