// src/pages/RequestQuotePage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const RequestQuotePage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data Submitted:', data);
    // Here you would typically send the data to a backend server or email service
    alert('Quote request submitted! We will get back to you soon.');
    reset(); // Reset form fields after submission
  };

  // Tailwind classes for common form elements
  const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900";
  const labelClasses = "block text-sm font-medium text-gray-700";
  const errorClasses = "mt-1 text-xs text-red-600";

  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4"> {/* Page background and padding */}
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg"> {/* Form container with white background, padding, shadow */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          Request A Quote
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please fill out the form below, and we'll get back to you with a quote as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6"> {/* Tailwind for spacing between form groups */}
          {/* Contact Information */}
          <div>
            <label htmlFor="fullName" className={labelClasses}>Full Name*</label>
            <input 
              type="text" 
              id="fullName"
              className={inputClasses}
              {...register('fullName', { required: 'Full Name is required.' })} 
            />
            {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="companyName" className={labelClasses}>Company Name*</label>
            <input 
              type="text" 
              id="companyName"
              className={inputClasses}
              {...register('companyName', { required: 'Company Name is required.' })} 
            />
            {errors.companyName && <p className={errorClasses}>{errors.companyName.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>Email Address*</label>
            <input 
              type="email" 
              id="email"
              className={inputClasses}
              {...register('email', { 
                required: 'Email is required.', 
                pattern: {
                  value: /^\S+@\S+\.\S+$/, // More robust email regex
                  message: 'Entered value does not match email format.'
                } 
              })} 
            />
            {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className={labelClasses}>Phone Number*</label>
            <input 
              type="tel" 
              id="phoneNumber"
              className={inputClasses}
              {...register('phoneNumber', { required: 'Phone Number is required.' })} 
            />
            {errors.phoneNumber && <p className={errorClasses}>{errors.phoneNumber.message}</p>}
          </div>

          {/* Shipment Origin */}
          <div>
            <label htmlFor="pickupLocation" className={labelClasses}>Pickup Location (City, State, Zip)*</label>
            <input 
              type="text" 
              id="pickupLocation"
              className={inputClasses}
              {...register('pickupLocation', { required: 'Pickup Location is required.' })} 
            />
            {errors.pickupLocation && <p className={errorClasses}>{errors.pickupLocation.message}</p>}
          </div>

          {/* Shipment Destination */}
          <div>
            <label htmlFor="deliveryLocation" className={labelClasses}>Delivery Location (City, State, Zip)*</label>
            <input 
              type="text" 
              id="deliveryLocation"
              className={inputClasses}
              {...register('deliveryLocation', { required: 'Delivery Location is required.' })} 
            />
            {errors.deliveryLocation && <p className={errorClasses}>{errors.deliveryLocation.message}</p>}
          </div>
          
          {/* Shipment Details */}
          <div>
            <label htmlFor="freightDescription" className={labelClasses}>Freight Description*</label>
            <textarea 
              id="freightDescription"
              rows="3" // Added rows for better initial height
              className={inputClasses}
              {...register('freightDescription', { required: 'Freight Description is required.' })} 
            ></textarea>
            {errors.freightDescription && <p className={errorClasses}>{errors.freightDescription.message}</p>}
          </div>

          <div>
            <label htmlFor="weightDimensions" className={labelClasses}>Estimated Total Weight / Dimensions*</label>
            <input 
              type="text" 
              id="weightDimensions"
              className={inputClasses}
              {...register('weightDimensions', { required: 'Weight/Dimensions are required.' })} 
            />
            {errors.weightDimensions && <p className={errorClasses}>{errors.weightDimensions.message}</p>}
          </div>

          <div>
            <label htmlFor="preferredPickupDate" className={labelClasses}>Preferred Pickup Date</label>
            <input 
              type="date" 
              id="preferredPickupDate"
              className={inputClasses}
              {...register('preferredPickupDate')} 
            />
          </div>

          <div>
            <label htmlFor="specialHandling" className={labelClasses}>Special Handling Requirements (e.g., liftgate, fragile)</label>
            <textarea 
              id="specialHandling"
              rows="2" // Added rows for better initial height
              className={inputClasses}
              {...register('specialHandling')} 
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuotePage;