// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-8">
          Our Services
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-xl mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Full Truckload (FTL) Freight Services Across the U.S.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            GME Solutions LLC delivers reliable and efficient Full Truckload (FTL) freight services across the United States. From short regional hauls to long-haul over-the-road (OTR) deliveries, we specialize in moving freight with precision and care.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our growing fleet of late-model trucks, paired with a responsive, real-time dispatch system, ensures cargo is delivered safely and punctually every time.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're transporting time-sensitive loads or bulk freight, our team is committed to performance, professionalism, and accountability on the road.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Key Service Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Nationwide Full Truckload (FTL) Coverage</li>
              <li>Regional and Over-the-Road (OTR) Expertise</li>
              <li>Modern, Well-Maintained Fleet</li>
              <li>Real-Time Dispatch and Coordination</li>
              <li>Professional and Experienced Drivers</li>
              <li>Commitment to Safety and On-Time Delivery</li>
              <li>Handling of Time-Sensitive and Bulk Freight</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Why Choose GME Solutions?</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We understand the importance of reliable freight transport for your business. Our team is dedicated to providing personalized service and ensuring your cargo reaches its destination securely and efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With GME Solutions, you get a partner who values your business and works tirelessly to meet your shipping needs.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/quote"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            Request a Quote for Your Shipment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;