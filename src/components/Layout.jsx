import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is where child route components will render
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main style={{ padding: '1rem 2rem', minHeight: '70vh' }}> {/* Added minHeight for content visibility */}
        <Outlet /> {/* Page-specific content will be rendered here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;