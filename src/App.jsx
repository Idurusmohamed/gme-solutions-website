import React from 'react';
// 1. IMPORT ScrollRestoration ALONG WITH THE OTHER ROUTER COMPONENTS
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom'; 

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import RequestQuotePage from './pages/RequestQuotePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
// 2. We no longer need to import our custom ScrollToTop component

import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="quote" element={<RequestQuotePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
      <ScrollRestoration /> {/* <-- 3. ADD THIS COMPONENT AT THE END */}
    </Router>
  );
}

export default App;