import React from 'react';
import { Link } from 'react-router-dom'; // For internal navigation

const HomePage = () => {
  return (
    <div>
      {/* Hero Section - based on your current site [3] */}
      <section style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#ddd' }}> {/* Placeholder style */}
        <h1>Fast & Reliable Freight Solutions Across the U.S.</h1>
        <p>Proudly serving since 2012 - GME Solutions LLC</p>
        <Link to="/quote">
          <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '1rem', cursor: 'pointer' }}>
            GET A QUOTE
          </button>
        </Link>
      </section>

      {/* Our Services Overview - based on your current site [3] */}
      <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h2>OUR SERVICES</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '1rem' }}>
          <div style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', width: '200px' }}>
            <h3>FULL TRUCKLOAD (FTL) FREIGHT</h3>
            <p>Reliable regional & OTR full truckload delivery.</p>
          </div>
          <div style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', width: '200px' }}>
            <h3>REAL-TIME DISPATCH</h3>
            <p>Fast Coordination and load tracking.</p>
          </div>
          <div style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', width: '200px' }}>
            <h3>NEW EQUIPMENT</h3>
            <p>Clean, well-maintained trucks for top service.</p>
          </div>
          <div style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', width: '200px' }}>
            <h3>DRIVER SUPPORT</h3>
            <p>Competitive pay and safety-first culture.</p>
          </div>
        </div>
        <Link to="/services" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More About Our Services</Link>
      </section>

      {/* Mission & About GME Snippet - based on your current site [3] */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2>OUR MISSION</h2>
          <p>At GME Solutions LLC, we're committed to delivering freight safely and on time, every time. From Atlanta across the U.S., we move tons of freight every year with professionalism, new equipment, and dependable service.</p>
          
          <h2 style={{ marginTop: '2rem' }}>ABOUT GME</h2>
          <p>Founded as Ramla Transport LLC in 2012 and got rebranded to GME Solutions LLC in 2022. GME is a small, freight carrier based in Atlanta where we combine personalized dispatch service with national scale reliability.</p>
          <Link to="/about" style={{ marginTop: '1rem', display: 'inline-block' }}>More About Us</Link>
        </div>
      </section>

      {/* Call to Action - based on your current site [3] */}
      <section style={{ padding: '3rem 1rem', textAlign: 'center', backgroundColor: '#0044cc', color: 'white' }}> {/* Placeholder style */}
        <h2>NEED RELIABLE FREIGHT DELIVERY?</h2>
        <Link to="/contact">
          <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '1rem', cursor: 'pointer', backgroundColor: 'white', color: '#0044cc' }}>
            CONTACT DISPATCH NOW
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;