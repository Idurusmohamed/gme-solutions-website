// src/components/Layout.jsx
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
// import Navigation from './Navigation'; // REMOVE THIS IMPORT
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <Navigation /> REMOVE THIS LINE */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* 2. Add this component here. It listens for navigation events 
           and automatically scrolls the new page to the top.
      */}
      <ScrollRestoration />
    </div>
  );
};

export default Layout;