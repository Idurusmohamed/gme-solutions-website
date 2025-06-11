import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// --- STYLES ---
import './index.css';
import 'leaflet/dist/leaflet.css';

// --- LAYOUT AND PAGE COMPONENTS ---
// We now import all the pages here to define the routes
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import RequestQuotePage from './pages/RequestQuotePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';

// 1. Define the entire application's routes using the modern object-based API
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // The Layout component wraps all pages
    children: [
      {
        index: true, // This is the default page at '/'
        element: <HomePage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'quote',
        element: <RequestQuotePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
    ],
  },
]);

// 2. Render the application using the new RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);