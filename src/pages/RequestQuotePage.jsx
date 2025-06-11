import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBoxOpen, FaWeightHanging, FaCalendarAlt, FaStar, FaCheckCircle } from 'react-icons/fa';

// Helper component for styled input fields with icons
const FormInput = ({ icon, id, type, placeholder, register, error, validation }) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      {icon}
    </span>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="mt-1 block w-full pl-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
      {...register(id, validation)}
    />
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

const RequestQuotePage = () => {
  const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm({
    mode: 'onChange'
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false); // <-- 1. New state for success screen
  const steps = [
    { name: "Contact", fields: ["fullName", "companyName", "email", "phoneNumber"] },
    { name: "Shipment", fields: ["pickupLocation", "deliveryLocation", "freightDescription", "weightDimensions"] },
    { name: "Final Details", fields: ["preferredPickupDate", "specialHandling"] }
  ];

  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const onSubmit = (data) => {
    {/*console.log('Form Data Submitted:', data);*/} // For debugging, you can log the data to the console
    // Here you would typically send the data to your backend or an API endpoint
    alert('Quote request submitted! We will get back to you soon.');
    setIsSubmitted(true); // <-- 2. Show success screen instead of resetting immediately
  };

  const resetForm = () => {
    reset();
    setCurrentStep(0);
    setIsSubmitted(false);
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20 px-4 flex items-center">
      <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full">
        {/* Conditional Rendering: Show form or success message */}
        {isSubmitted ? (
          <div className="text-center">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
            <p className="text-gray-600 mt-2 mb-6">Your quote request has been sent successfully. We will be in touch shortly.</p>
            <button
              onClick={resetForm}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
            >
              Submit Another Quote
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Request A Quote</h1>
            <p className="text-center text-gray-500 mb-8">Let's get your freight moving in 3 simple steps.</p>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="relative h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
                  // <-- 3. Update progress bar logic
                  style={{ width: `${isSubmitted ? '100%' : ((currentStep) / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 text-right mt-2">Step {currentStep + 1} of {steps.length}</p>
            </div>
            {/* Form Steps... (rest of the form code is the same) */}
            <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <section className="space-y-5">
                  <h2 className="text-xl font-semibold text-gray-800">1. Contact Information</h2>
                  <FormInput icon={<FaUser className="text-gray-400" />} id="fullName" type="text" placeholder="Full Name*" register={register} error={errors.fullName} validation={{ required: 'Full Name is required.' }} />
                  <FormInput icon={<FaBuilding className="text-gray-400" />} id="companyName" type="text" placeholder="Company Name*" register={register} error={errors.companyName} validation={{ required: 'Company Name is required.' }} />
                  <FormInput icon={<FaEnvelope className="text-gray-400" />} id="email" type="email" placeholder="Email Address*" register={register} error={errors.email} validation={{ required: 'Email is required.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format.' } }} />
                  <FormInput icon={<FaPhone className="text-gray-400" />} id="phoneNumber" type="tel" placeholder="Phone Number*" register={register} error={errors.phoneNumber} validation={{ required: 'Phone Number is required.' }} />
                </section>
              )}

              {currentStep === 1 && (
                <section className="space-y-5">
                  <h2 className="text-xl font-semibold text-gray-800">2. Shipment Details</h2>
                  <FormInput icon={<FaMapMarkerAlt className="text-gray-400" />} id="pickupLocation" type="text" placeholder="Pickup Location (City, State, Zip)*" register={register} error={errors.pickupLocation} validation={{ required: 'Pickup Location is required.' }} />
                  <FormInput icon={<FaMapMarkerAlt className="text-gray-400" />} id="deliveryLocation" type="text" placeholder="Delivery Location (City, State, Zip)*" register={register} error={errors.deliveryLocation} validation={{ required: 'Delivery Location is required.' }} />
                  <FormInput icon={<FaBoxOpen className="text-gray-400" />} id="freightDescription" type="text" placeholder="Freight Description*" register={register} error={errors.freightDescription} validation={{ required: 'Freight Description is required.' }} />
                  <FormInput icon={<FaWeightHanging className="text-gray-400" />} id="weightDimensions" type="text" placeholder="Estimated Weight / Dimensions*" register={register} error={errors.weightDimensions} validation={{ required: 'Weight/Dimensions are required.' }} />
                </section>
              )}

              {currentStep === 2 && (
                <section className="space-y-5">
                  <h2 className="text-xl font-semibold text-gray-800">3. Final Details</h2>
                  <FormInput icon={<FaCalendarAlt className="text-gray-400" />} id="preferredPickupDate" type="date" placeholder="Preferred Pickup Date" register={register} error={errors.preferredPickupDate} />
                  <FormInput icon={<FaStar className="text-gray-400" />} id="specialHandling" type="text" placeholder="Special Handling Requirements" register={register} error={errors.specialHandling} />
                </section>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              className={`px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-300 transition-opacity duration-300 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Next Step
              </button>
            )}
            {currentStep === steps.length - 1 && (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
              >
                Submit Quote Request
              </button>
            )}
          </div>
        </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestQuotePage;