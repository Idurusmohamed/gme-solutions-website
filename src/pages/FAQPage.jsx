import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi'; // Using a cleaner icon

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

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Default first item to be open

  return (
    <div className="border-b border-gray-200"> {/* Use borders for separation instead of shadows for a cleaner look */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6"
      >
        <span className={`text-lg font-medium ${isOpen ? 'text-blue-600' : 'text-gray-800'} transition-colors duration-300`}>
          {faq.question}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown className={`w-6 h-6 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`} />
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
            <p className="pb-5 pt-1 px-6 text-gray-600 leading-relaxed"> {/* Lighter text, more line-height */}
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
    <div className="bg-white py-12 md:py-20 px-4"> {/* Changed to white for a seamless feel */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700"> {/* Branded header color */}
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500 mt-4">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg border border-gray-200"> {/* Container for the FAQs */}
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;