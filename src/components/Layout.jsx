// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    // This div wraps the entire layout. No width constraints here.
    <div className="flex flex-col min-h-screen"> 
      <Header />
      {/* Navigation is still sticky, but will appear below the absolute header on the homepage.
          For other pages, it will be at the top. */}
      <Navigation />
      {/* The main content area. Page sections should define their own full-width backgrounds. */}
      <main className="flex-grow"> 
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;