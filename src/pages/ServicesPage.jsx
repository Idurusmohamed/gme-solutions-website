import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { FaTruck, FaGlobeAmericas, FaShieldAlt, FaClock, FaUserCog, FaCogs } from 'react-icons/fa';

// --- IMPORT YOUR IMAGES HERE ---
import servicesHeroImg from '../assets/services-hero.jpg'; // [NEW_IMAGE_1] A high-quality shot of a truck on the road
import ftlSpecializationImg from '../assets/ftl-specialization.jpg'; // [NEW_IMAGE_2] Image of cargo being loaded or secured

const features = [
  {
    icon: <FaGlobeAmericas className="text-4xl text-blue-500" />,
    title: 'Nationwide Coverage',
    description: 'FTL shipments to and from all 48 contiguous states.',
  },
  {
    icon: <FaTruck className="text-4xl text-blue-500" />,
    title: 'Modern Fleet',
    description: 'A growing fleet of new, well-maintained trucks and trailers.',
  },
  {
    icon: <FaClock className="text-4xl text-blue-500" />,
    title: 'On-Time Delivery',
    description: 'A relentless commitment to meeting your schedule with precision.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500" />,
    title: 'Safety First',
    description: 'Professional drivers and a culture that prioritizes safety above all.',
  },
  {
    icon: <FaUserCog className="text-4xl text-blue-500" />,
    title: 'Real-Time Dispatch',
    description: 'Personalized service and coordination for every load.',
  },
  {
    icon: <FaCogs className="text-4xl text-blue-500" />,
    title: 'Custom Solutions',
    description: 'Handling time-sensitive, bulk, and unique freight needs.',
  },
];

const ServicesPage = () => {
  const position = [33.6934, -84.1443]; // Approx. coordinates for Lithonia, GA

  return (
    <div className="bg-white text-gray-800">
      {/* 1. New Dynamic Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${servicesHeroImg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reliable Full Truckload (FTL) solutions, tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Specialization Section */}
      <motion.section
        className="py-16 lg:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Your Expert in Full Truckload Freight</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At GME Solutions, we specialize in providing seamless and efficient Full Truckload (FTL) services. This focus allows us to offer unparalleled reliability whether your shipment is a short regional haul or a long-haul trip across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team uses a modern fleet and a real-time dispatch system to ensure your cargo is handled with the utmost professionalism, security, and punctuality from start to finish.
            </p>
          </div>
          <div>
            <img src={ftlSpecializationImg} alt="Cargo being loaded into a truck" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </motion.section>

      {/* 3. New Visual Feature Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our comprehensive service is built on a foundation of key features designed to give you peace of mind.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Service Area Map Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving the Entire United States
          </h2>
          <div className="h-96 md:h-[500px] w-full rounded-lg shadow-xl overflow-hidden border">
            <MapContainer center={position} zoom={4} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>GME Solutions LLC<br />Headquarters - Lithonia, GA</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Freight Moving?</h2>
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