// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// --- IMPORT YOUR IMAGE HERE ---
import trucksAtGasStationImg from '../assets/trucks-at-gas-station.jpg'; // Make sure this path is correct
// --- END IMAGE IMPORTS ---

const ServicesPage = () => {
  const position = [33.6934, -84.1443]; // Approx. coordinates for Lithonia, GA

  return (
    <div className="bg-white">
      {/* Services Header and Main Content Section */}
      <section className="bg-gray-50 py-12 md:py-20 px-4">
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
            <p className="text-gray-700 leading-relaxed mb-6"> {/* Increased mb for image */}
              Whether you're transporting time-sensitive loads or bulk freight, our team is committed to performance, professionalism, and accountability on the road.
            </p>
            <img src={trucksAtGasStationImg} alt="Trucks at Rest Stop" className="w-full h-auto object-cover rounded-lg shadow-md" /> {/* Image added */}
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
        </div>
      </section>

      {/* Interactive Service Area Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Serving the Entire United States
          </h2>
          <div className="h-96 md:h-[500px] w-full rounded-lg shadow-xl" id="map">
            <MapContainer center={position} zoom={4} scrollWheelZoom={false} style={{ height: "100%", width: "100%", borderRadius: '8px' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  GME Solutions LLC<br />Headquarters - Lithonia, GA
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Our operations are based in Lithonia, GA, but our reach is nationwide. We handle FTL shipments to and from all 48 contiguous states.
          </p>
        </div>
      </section>

      {/* Call to Action Section (from HomePage, adapted for ServicesPage) */}
      <section className="py-16 lg:py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO GET YOUR FREIGHT MOVING?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Contact us today for a reliable quote and experience the GME Solutions difference.
          </p>
          <Link
            to="/quote"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;