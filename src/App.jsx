// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage'; // Import new page
import AboutPage from './pages/AboutPage';     // Import new page
import RequestQuotePage from './pages/RequestQuotePage';
import ContactPage from './pages/ContactPage';   // Import new page
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import new page
import FAQPage from './pages/FAQPage'; // <-- Import
// import NotFoundPage from './pages/NotFoundPage'; // Optional: for 404 errors

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} /> {/* Add route */}
          <Route path="about" element={<AboutPage />} />       {/* Add route */}
          <Route path="quote" element={<RequestQuotePage />} />
          <Route path="contact" element={<ContactPage />} />     {/* Add route */}
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} /> {/* Add route */}
          <Route path="faq" element={<FAQPage />} /> {/* <-- Add route */}
          {/* <Route path="*" element={<NotFoundPage />} />  // Catches any undefined routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;