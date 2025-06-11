import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaUsers, FaRegEye } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    description: "Founded GME Solutions LLC in 2012 and leads the company with a vision for reliable and safe freight delivery.",
  },
  {
    name: "Mahamad Bakhdad",
    role: "Operations Lead",
    description: "As our lead driver, Mahamad is the hands-on force ensuring your freight is transported safely and efficiently. He coordinates on-the-ground logistics to guarantee every delivery meets our high standards.",
  },
  {
    name: "Idurus Mohamed",
    role: "Technology Lead",
    description: "Idurus architects and manages the company's entire technology landscape, from this website to our operational IT. He integrates robust cybersecurity measures to ensure the complete safety of our company and client data.",
  },
  {
    name: "Sumeya Mohamed",
    role: "Client Services Manager",
    description: "Sumeya masterfully handles all client communications and dispatch coordination, ensuring a seamless and positive experience from initial inquiry to final delivery.",
  },
];

const values = [
    { 
        icon: <FaHandshake className="text-4xl text-blue-600" />,
        name: "Reliability",
        description: "Delivering your freight safely and on schedule, every time."
    },
    { 
        icon: <FaShieldAlt className="text-4xl text-blue-600" />,
        name: "Safety",
        description: "Prioritizing the safety of our drivers, your cargo, and the public."
    },
    { 
        icon: <FaUsers className="text-4xl text-blue-600" />,
        name: "Customer Focus",
        description: "Understanding and meeting your unique shipping needs."
    },
    { 
        icon: <FaRegEye className="text-4xl text-blue-600" />,
        name: "Transparency",
        description: "Clear communication and honest practices in all our dealings."
    },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              About GME Solutions LLC
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in freight transportation since 2012.
            </p>
          </header>

          {/* --- FIX: Added a React Fragment wrapper <> around the two sections --- */}
          <>
            {/* "OUR STORY" SECTION WITH VISUAL TIMELINE */}
            <motion.section 
              className="py-16 lg:py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey & Our Promise</h2>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-blue-200"></div>
                  <motion.div className="relative mb-12" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="md:flex items-center md:justify-start">
                      <div className="md:w-1/2 md:pr-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                          <p className="text-sm font-semibold text-blue-600 mb-1">2012</p>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">The Beginning</h3>
                          <p className="text-gray-600 leading-relaxed">Founded as Ramla Transport LLC, our journey began as a small, family-run operation committed to reliable, on-time freight delivery.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-4 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white"></div>
                  </motion.div>
                  <motion.div className="relative mb-16" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="md:flex items-center md:justify-end">
                      <div className="md:w-1/2 md:pl-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-r-4 border-blue-500 md:text-left">
                          <p className="text-sm font-semibold text-blue-600 mb-1">2017</p>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Commitment to Safety</h3>
                          <p className="text-gray-600 leading-relaxed">We achieved a milestone of five consecutive years with a perfect safety record, cementing our "Safety First" value as the core of our operations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-4 md:left-1/2 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white"></div>
                  </motion.div>
                  <motion.div className="relative mb-16" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="md:flex items-center md:justify-start">
                      <div className="md:w-1/2 md:pr-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                          <p className="text-sm font-semibold text-blue-600 mb-1">2022</p>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">A New Identity</h3>
                          <p className="text-gray-600 leading-relaxed">We rebranded to GME Solutions LLC to better reflect our comprehensive services and unwavering commitment to excellence.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-4 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white"></div>
                  </motion.div>
                  <motion.div className="relative" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="md:flex items-center md:justify-end">
                      <div className="md:w-1/2 md:pl-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-r-4 border-blue-500 md:text-left">
                          <p className="text-sm font-semibold text-blue-600 mb-1">Today & Beyond</p>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision for the Future</h3>
                          <p className="text-gray-600 leading-relaxed">While moving tons of freight annually, we are investing in technology and cybersecurity to provide even greater transparency and security for our clients, ensuring we remain your most trusted partner on the road.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-4 md:left-1/2 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white"></div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* "OUR VALUES" SECTION WITH ICON GRID */}
            <section className="py-16 lg:py-24 bg-gray-50 rounded-lg">
              <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <motion.div 
                      key={value.name} 
                      className="text-center p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="inline-block p-4 bg-white rounded-full mb-4 shadow-md">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.name}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
          {/* --- End of the Fragment wrapper --- */}


          {/* --- MEET THE TEAM SECTION (Unchanged) --- */}
          <section className="pt-16 lg:pt-24">
            <motion.h2
              className="text-3xl font-bold text-center text-gray-800 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet the Team
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  className="bg-white p-6 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300"
                  variants={cardVariants}
                >
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-gray-500 text-4xl font-bold border-4 border-blue-200">
                    {member.name.substring(0, 1)}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;