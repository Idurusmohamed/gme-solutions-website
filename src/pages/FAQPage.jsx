// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What types of freight services do you offer?",
    answer: "We specialize in reliable Full Truckload (FTL) freight services, including both short regional hauls and long-haul over-the-road (OTR) deliveries across the United States."
  },
  {
    question: "What is your main service area?",
    answer: "Our headquarters are in Lithonia, GA, but we proudly serve all 48 contiguous states. We handle nationwide shipments with precision and care."
  },
  {
    question: "How do I get a quote for my shipment?",
    answer: "The best way to get a quote is to fill out our 'Request A Quote' form on the website. Please provide as much detail as possible, including pickup/delivery locations, freight description, and weight/dimensions, and our team will get back to you promptly."
  },
  {
    question: "Can I track my shipment?",
    answer: "We utilize a real-time dispatch system for coordination and internal load tracking. For specific customer-facing tracking details on your shipment, please contact our dispatch team with your shipment ID."
  },
  {
    question: "What makes GME Solutions LLC different?",
    answer: "We combine the personalized, responsive service of a small, family-run operation with the reliability and reach of a national carrier. Our commitment to safety, on-time delivery, and transparent communication sets us apart."
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
      >
        <span>{faq.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-gray-600">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const FAQPage = () => {
  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;