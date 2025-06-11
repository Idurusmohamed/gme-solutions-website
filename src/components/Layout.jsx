import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'; 
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // --- NEW, MORE PRECISE LOGIC ---
  // 1. Define an array of only the pages that need top padding.
  const pagesWithPadding = ['/about', '/contact', '/faq'];

  // 2. Check if the current page's path is in our list.
  const needsPadding = pagesWithPadding.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* 3. The className now uses our new logic and a smaller padding value. */}
      <main className={`flex-grow ${needsPadding ? 'pt-24' : ''}`}>
        <Outlet />
      </main>
      
      <Footer />
      
      <ScrollRestoration />
      <SpeedInsights />
    </div>
  );
};

export default Layout;