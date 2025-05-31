import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// We will create these page components next
import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
// import AboutPage from './pages/AboutPage';
import RequestQuotePage from './pages/RequestQuotePage';
// import ContactPage from './pages/ContactPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
// import NotFoundPage from './pages/NotFoundPage'; // Optional: for 404 errors

import './App.css'; // You can keep or remove this based on your styling approach

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Define routes here. Example: */}
          {<Route index element={<HomePage />} />}
          {/* <Route path="services" element={<ServicesPage />} /> */}
          {/* <Route path="about" element={<AboutPage />} /> */}
          {<Route path="quote" element={<RequestQuotePage />} />}
          {/* <Route path="contact" element={<ContactPage />} /> */}
          {/* <Route path="privacy-policy" element={<PrivacyPolicyPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} />  // Catches any undefined routes */}
          
          {/* For now, let's add a simple placeholder for the homepage */}
          <Route index element={<div>Welcome to the Homepage! Content will go here.</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;