// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedNumber from '../components/AnimatedNumber';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkedAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa'; // Icons for the stats

// --- IMPORT YOUR IMAGES HERE ---
import heroImage from '../assets/hero-truck.jpg'; // [1]
import loadingDocksImg from '../assets/loading-docks.jpg'; // [1]
import alarmClockImg from '../assets/alarm-clock.jpg'; // [1]
import newEquipmentImg from '../assets/new-equipment-bw.jpg'; // [1]
import driverSupportImg from '../assets/winding-road.jpg'; // [1]
import globeImg from '../assets/globe.jpg'; // [1]
import whiteTruckImg from '../assets/white-truck-trees.jpg'; // [1]
// --- END IMAGE IMPORTS ---

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Height adjusted to h-[85vh] */}
      <section
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4 h-[85vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }} // [1]
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

      {/* Our Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OUR SERVICES</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            GME Solutions LLC delivers reliable and efficient Full Truckload (FTL) freight services. From short regional hauls to long-haul OTR deliveries, we move your freight with precision and care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1: FULL TRUCKLOAD (FTL) FREIGHT */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={loadingDocksImg} alt="Loading Docks" className="w-full h-32 object-cover rounded-md mb-4" /> {/* [1] */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">FULL TRUCKLOAD (FTL)</h3>
              <p className="text-gray-600 text-sm">Reliable regional & OTR full truckload delivery for all your shipping needs.</p>
            </div>
            {/* Service Card 2: REAL-TIME DISPATCH */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={alarmClockImg} alt="Alarm Clock" className="w-full h-32 object-cover rounded-md mb-4" /> {/* [1] */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">REAL-TIME DISPATCH</h3>
              <p className="text-gray-600 text-sm">Fast coordination and advanced load tracking for timely updates.</p>
            </div>
            {/* Service Card 3: NEW EQUIPMENT */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={newEquipmentImg} alt="New Truck on Road" className="w-full h-32 object-cover rounded-md mb-4" /> {/* [1] */}
              <h3 className="text-xl font-semibold text-blue-700 mb-3">NEW EQUIPMENT</h3>
              <p className="text-gray-600 text-sm">Clean, well-maintained trucks and trailers ensuring top service and reliability.</p>
            </div>
            {/* Service Card 4: DRIVER SUPPORT */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={driverSupportImg} alt="Winding Road" className="w-full h-32 object-cover rounded-md mb-4" /> {/* [1] */}
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

{/* --- NEW ANIMATED STATISTICS SECTION ---*/}
      <section className="py-16 lg:py-24 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">GME Solutions By The Numbers</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence, quantified by years of reliable service and a dedication to our clients.
            </p>
          </div>

          {/* Staggered animation container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }} // Each child card will animate 0.2s after the previous one
          >
            {/* Stat 1: Years in Business */}
            <motion.div
              className="bg-gray-700/50 p-6 rounded-lg text-center flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <FaCalendarAlt className="text-4xl text-yellow-400 mb-4" />
              <span className="text-5xl font-extrabold text-white">
                <AnimatedNumber value={12} />+
              </span>
              <p className="mt-2 text-lg text-gray-300">Years in Business</p>
            </motion.div>

            {/* Stat 2: States Served */}
            <motion.div
              className="bg-gray-700/50 p-6 rounded-lg text-center flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <FaMapMarkedAlt className="text-4xl text-yellow-400 mb-4" />
              <span className="text-5xl font-extrabold text-white">
                <AnimatedNumber value={48} />
              </span>
              <p className="mt-2 text-lg text-gray-300">States Served</p>
            </motion.div>

            {/* Stat 3: Commitment to Safety */}
            <motion.div
              className="bg-gray-700/50 p-6 rounded-lg text-center flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <FaShieldAlt className="text-4xl text-yellow-400 mb-4" />
              <span className="text-5xl font-extrabold text-white">
                <AnimatedNumber value={100} />%
              </span>
              <p className="mt-2 text-lg text-gray-300">Commitment to Safety</p>
            </motion.div>

            {/* Stat 4: 24/7 Dispatch */}
            <motion.div
              className="bg-gray-700/50 p-6 rounded-lg text-center flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <FaHeadset className="text-4xl text-yellow-400 mb-4" />
              <span className="text-5xl font-extrabold text-white">
                24/7
              </span>
              <p className="mt-2 text-lg text-gray-300">Dispatch Availability</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & About GME Snippet - REFINED for consistent background */}
      <section className="py-16 lg:py-24 bg-white"> {/* Entire section is bg-white */}
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Our Mission Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At GME Solutions LLC, we're committed to delivering freight safely and on time, every time. From Atlanta across the U.S., we move tons of freight every year with professionalism, new equipment, and dependable service.
            </p>
          </div>
          {/* Our Mission Image */}
          <div>
            <img src={globeImg} alt="Globe" className="w-full h-auto object-cover rounded-lg shadow-md" /> {/* [1] */}
          </div>

          {/* About GME Image */}
          <div>
            <img src={whiteTruckImg} alt="White Truck with Trees" className="w-full h-auto object-cover rounded-lg shadow-md" /> {/* [1] */}
          </div>
          {/* About GME Content */}
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

      {/* Call to Action Section - REFINED with new gradient background */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NEED RELIABLE FREIGHT DELIVERY?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
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
    </div>
  );
};

export default HomePage;