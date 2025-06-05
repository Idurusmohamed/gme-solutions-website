import React from 'react';
import { Link } from 'react-router-dom'; // For internal navigation

// You might want to import an actual hero image later
// import heroImage from '../assets/gme-hero-truck.jpg'; // Example path

const HomePage = () => {
  return (
    <div className="bg-white"> {/* Overall page background */}
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4" 
        // style={{ backgroundImage: `url(${heroImage})` }} // Uncomment and use your actual hero image
        style={{ backgroundColor: '#2c3e50' }} // Fallback background if no image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Fast & Reliable <br className="hidden md:inline" />Freight Solutions Across the U.S.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Proudly serving since 2012 - GME Solutions LLC
          </p>
          <Link
            to="/quote"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            GET A QUOTE
          </Link>
        </div>
      </section>

      {/* Our Services Overview - based on your current site [1] */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OUR SERVICES</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            GME Solutions LLC delivers reliable and efficient Full Truckload (FTL) freight services. From short regional hauls to long-haul OTR deliveries, we move your freight with precision and care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              {/* Add an icon here if you have one, e.g., using an SVG or an icon library */}
              {/* <TruckIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">FULL TRUCKLOAD (FTL)</h3>
              <p className="text-gray-600 text-sm">Reliable regional & OTR full truckload delivery for all your shipping needs.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              {/* <ClockIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">REAL-TIME DISPATCH</h3>
              <p className="text-gray-600 text-sm">Fast coordination and advanced load tracking for timely updates.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              {/* <CogIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">NEW EQUIPMENT</h3>
              <p className="text-gray-600 text-sm">Clean, well-maintained trucks and trailers ensuring top service and reliability.</p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              {/* <UsersIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">DRIVER SUPPORT</h3>
              <p className="text-gray-600 text-sm">Competitive pay, a safety-first culture, and dedicated support for our drivers.</p>
            </div>
          </div>
          <Link 
            to="/services" 
            className="mt-12 inline-block text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-300"
          >
            Learn More About Our Services &rarr;
          </Link>
        </div>
      </section>

      // src/pages/HomePage.jsx

//... (Hero Section and Services Overview Section remain the same)...

      {/* Mission & About GME Snippet - REFINED for consistent background */}
      <section className="py-16 lg:py-24 bg-white"> {/* Entire section is bg-white */}
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At GME Solutions LLC, we're committed to delivering freight safely and on time, every time. From Atlanta across the U.S., we move tons of freight every year with professionalism, new equipment, and dependable service.
            </p>
          </div>
          {/* Refined: Removed bg-gray-50 and shadow from this div to match the other side */}
          <div className="p-8 rounded-lg"> 
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT GME</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded as Ramla Transport LLC in 2012 and rebranded to GME Solutions LLC in 2022. GME is a freight carrier based in Lithonia, GA, where we combine personalized dispatch service with national scale reliability.
            </p>
            <Link 
              to="/about" 
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-300"
            >
              More About Us &rarr;
            </Link>
          </div>
        </div>
      </section>

// src/pages/HomePage.jsx

//... (other parts of your HomePage component)...

      {/* Call to Action Section */}
      {/* THIS <section> GETS THE FULL-WIDTH BACKGROUND */}
      <section className="py-16 lg:py-20 bg-blue-700 text-white"> 
        {/* THIS INNER <div> CONSTRAINS AND CENTERS THE CONTENT INSIDE THE FULL-WIDTH BACKGROUND */}
        <div className="max-w-4xl mx-auto px-4 text-center"> 
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NEED RELIABLE FREIGHT DELIVERY?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Our team is ready 24/7 to discuss your shipping needs and provide a competitive quote. Let's get your freight moving!
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            CONTACT DISPATCH NOW
          </Link>
        </div>
      </section>

//... (rest of your HomePage component)...
    </div>
  );
};

export default HomePage;