// src/pages/AboutPage.jsx
import React from 'react';

// Placeholder for team member images - you'd import actual images
// import ahmedHassanImg from '../assets/team/ahmed-hassan.jpg';
// import mahamadBakhdadImg from '../assets/team/mahamad-bakhdad.jpg';
// import idurusMohamedImg from '../assets/team/idurus-mohamed.jpg';
// import sumeyaMohamedImg from '../assets/team/sumeya-mohamed.jpg';

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    description: "Founded GME Solutions LLC in 2012 and leads the company with a vision for reliable and safe freight delivery.",
    // image: ahmedHassanImg,
  },
  {
    name: "Mahamad Bakhdad",
    role: "Operations Manager",
    description: "Oversees daily operations and ensures smooth logistics and dispatch for all shipments.",
    // image: mahamadBakhdadImg,
  },
  {
    name: "Idurus Mohamed",
    role: "Lead Dispatcher",
    description: "Coordinates drivers and manages schedules to guarantee on-time deliveries.",
    // image: idurusMohamedImg,
  },
  {
    name: "Sumeya Mohamed",
    role: "Customer Relations",
    description: "Handles customer inquiries and ensures a positive experience for all clients.",
    // image: sumeyaMohamedImg,
  },
];

const AboutPage = () => {
  return (
    <div className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
            About GME Solutions LLC
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in freight transportation since 2012.
          </p>
        </header>

        {/* Company Story and Values Section */}
        <section className="mb-12 md:mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2012 by Ahmed Hassan, GME Solutions LLC began as a small family-run operation committed to reliable and on-time freight delivery. Today, we move tons of freight annually, maintaining a tight-knit team and top-tier dispatch operations.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Originally Ramla Transport LLC, we rebranded to GME Solutions LLC in 2022 to better reflect our comprehensive services and commitment to excellence.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li><span className="font-semibold">Reliability:</span> Delivering your freight safely and on schedule.</li>
              <li><span className="font-semibold">Safety:</span> Prioritizing the safety of our drivers, your cargo, and the public.</li>
              <li><span className="font-semibold">Customer Focus:</span> Understanding and meeting your unique shipping needs.</li>
              <li><span className="font-semibold">Transparency:</span> Clear communication and honest practices in all our dealings.</li>
            </ul>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
                {/* Placeholder for image - replace with actual image tag when available */}
                {/* <img src={member.image |
| 'https://via.placeholder.com/150'} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200" /> */}
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-gray-500 text-4xl font-bold border-4 border-blue-200">
                  {member.name.substring(0, 1)} {/* Initials as placeholder */}
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;