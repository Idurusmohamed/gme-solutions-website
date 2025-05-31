import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// You might want to place your logo here
// For now, we'll just use text
// import gmeLogo from '../assets/gme-logo.png'; // Example: if you add a logo to src/assets

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      {/* <img src={gmeLogo} alt="GME Solutions LLC Logo" style={{ height: '50px' }} /> */}
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h1>GME Solutions LLC</h1>
      </Link>
      <p>Fast. Reliable. GME.</p> {/* Your tagline [3] */}
      <div style={{ marginTop: '0.5rem' }}>
        <span>+1 678 510 6050</span> | {/* [3] */}
        <span> Ahmed@gmesolutionsllc.com</span> | {/* [3] */}
        <span> MON TO SUN (24 HRS)</span> {/* [3] */}
      </div>
    </header>
  );
};

export default Header;