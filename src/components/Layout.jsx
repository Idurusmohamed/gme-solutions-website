// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    // This div is the main wrapper. If it needs a default background for areas
    // not covered by section-specific backgrounds, apply it here.
    // However, usually, the body style in index.css or section backgrounds handle this.
    <div className="flex flex-col min-h-screen"> {/* Ensures footer stays at bottom */}
      <Header />
      <Navigation />
      {/* The main content area. Page sections should define their own full-width backgrounds. */}
      <main className="flex-grow"> {/* flex-grow allows main to take available space */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;