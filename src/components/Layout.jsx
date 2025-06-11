import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"; // <-- 1. Import the new component
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    // Your important flexbox container is preserved
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Your flex-grow main element is preserved */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* All functional components are placed here at the end */}
      <ScrollRestoration />
      <SpeedInsights /> {/* <-- 2. Add the Speed Insights component here */}
    </div>
  );
};

export default Layout;