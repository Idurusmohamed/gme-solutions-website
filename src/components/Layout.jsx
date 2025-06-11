import React from 'react';
// 1. Import Outlet, ScrollRestoration, and now useLocation
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'; 
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  // 2. Get the current page's location information
  const location = useLocation();
  // Check if the current page is the homepage
  const isHomePage = location.pathname === '/';

  return (
    // Your existing flexbox structure is preserved
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* 3. The <main> element now has a DYNAMIC className */}
      {/* It adds top padding to every page EXCEPT the homepage */}
      <main className={`flex-grow ${isHomePage ? '' : 'pt-24 md:pt-28'}`}>
        <Outlet />
      </main>
      
      <Footer />
      
      <ScrollRestoration />
      <SpeedInsights />
    </div>
  );
};

export default Layout;