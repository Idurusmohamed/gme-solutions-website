// src/pages/PrivacyPolicyPage.jsx
import React from 'react';

const PrivacyPolicyPage = () => {
  // It's highly recommended to copy the exact text from your PDF
  // into these sections for legal accuracy.
  // The content below is just a structural placeholder.

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-3xl mx-auto prose prose-lg prose-blue"> {/* Using Tailwind Typography plugin classes */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated May 28, 2025 {/* Update this date as per your document [1] */}
          </p>
        </header>

        <p>
          This Privacy Notice for GME Solutions LLC ("we," "us," or "our"), describes how and why we might
          access, collect, store, use, and/or share ("process") your personal information when you use our
          services ("Services"), including when you:
        </p>
        <ul>
          <li>Visit our website, or any website of ours that links to this Privacy Notice</li>
          <li>Use GME Solutions LLC - Freight Transportation Service. GME Solutions LLC is a freight
            Carrier providing full Truckload (FTL) transportation services across the United States.
            We offer regional and over-the-road (OTR) trucking solutions for shippers and brokers, supported
            by real-time dispatch coordination, modern equipment, and professional driver support.
            Our services are designed to ensure safe, reliable, and on-time freight delivery.</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>
          Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights
          and choices. We are responsible for making decisions about how your personal information is
          processed. If you do not agree with our policies and practices, please do not use our Services.
          If you still have any questions or concerns, please contact us at ahmed@gmesolutionsllc.com.
        </p>

        {/* --- SUMMARY OF KEY POINTS --- */}
        {/* You would copy the "SUMMARY OF KEY POINTS" section from your PDF here [1] */}
        <h2>SUMMARY OF KEY POINTS</h2>
        <p>This summary provides key points from our Privacy Notice...</p>
        {/*... more content... */}


        {/* --- TABLE OF CONTENTS --- */}
        {/* You would list the table of contents from your PDF here [1] */}
        <h2>TABLE OF CONTENTS</h2>
        <ol>
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          {/*... more items... */}
          <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
        </ol>

        {/* --- SECTION 1: WHAT INFORMATION DO WE COLLECT? --- */}
        <section>
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3>PERSONAL INFORMATION YOU DISCLOSE TO US</h3>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in
            obtaining information about us or our products and Services...
          </p>
          {/*... Continue with all subsections and text from your PDF for Section 1... */}
          <h3>INFORMATION AUTOMATICALLY COLLECTED</h3>
          <p><strong>In Short:</strong> Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics - is collected automatically when you visit our Services.</p>
          {/*... Continue... */}
        </section>

        {/* --- SECTION 2: HOW DO WE PROCESS YOUR INFORMATION? --- */}
        <section>
          <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
          {/*... Continue with all text from your PDF for Section 2... */}
        </section>
        
        {/* --- ADD ALL OTHER SECTIONS (3 through 17) FROM YOUR PDF HERE --- */}
        {/* For example: */}
        {/* 
        <section>
          <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
          <p>...</p>
        </section>
       ...
        <section>
          <h2>17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>...</p>
        </section>
        */}

        <p className="mt-10 text-sm text-gray-600">
          <strong>Note:</strong> The content above is a structural representation. Please refer to the complete and official Privacy Policy document for GME Solutions LLC for all details.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;