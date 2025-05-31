import React from 'react';
import { useForm } from 'react-hook-form';

const RequestQuotePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data Submitted:', data);
    // Here you would typically send the data to a backend server or email service
    alert('Quote request submitted! We will get back to you soon.');
    // You might want to reset the form here: reset(); (import reset from useForm)
  };

  // Basic styling for error messages
  const errorStyle = { color: 'red', fontSize: '0.9em', marginTop: '0.2em' };
  const inputStyle = { display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.3rem', marginBottom: '0.3rem', border: '1px solid #ccc', boxSizing: 'border-box' };
  const labelStyle = { display: 'block', marginBottom: '0.8rem', fontWeight: 'bold' };


  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <h2>Request A Quote</h2>
      <p>Please fill out the form below, and we'll get back to you with a quote as soon as possible.</p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Contact Information - Fields from your current site [3] and report */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="fullName" style={labelStyle}>Full Name*</label>
          <input 
            type="text" 
            id="fullName"
            style={inputStyle}
            {...register('fullName', { required: 'Full Name is required.' })} 
          />
          {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="companyName" style={labelStyle}>Company Name*</label>
          <input 
            type="text" 
            id="companyName"
            style={inputStyle}
            {...register('companyName', { required: 'Company Name is required.' })} 
          />
          {errors.companyName && <p style={errorStyle}>{errors.companyName.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={labelStyle}>Email Address*</label>
          <input 
            type="email" 
            id="email"
            style={inputStyle}
            {...register('email', { 
              required: 'Email is required.', 
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Entered value does not match email format.'
              } 
            })} 
          />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phoneNumber" style={labelStyle}>Phone Number*</label>
          <input 
            type="tel" 
            id="phoneNumber"
            style={inputStyle}
            {...register('phoneNumber', { required: 'Phone Number is required.' })} 
          />
          {errors.phoneNumber && <p style={errorStyle}>{errors.phoneNumber.message}</p>}
        </div>

        {/* Shipment Origin - Fields from your current site [3] and report */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="pickupLocation" style={labelStyle}>Pickup Location (City, State, Zip)*</label>
          <input 
            type="text" 
            id="pickupLocation"
            style={inputStyle}
            {...register('pickupLocation', { required: 'Pickup Location is required.' })} 
          />
          {errors.pickupLocation && <p style={errorStyle}>{errors.pickupLocation.message}</p>}
        </div>

        {/* Shipment Destination - Fields from your current site [3] and report */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="deliveryLocation" style={labelStyle}>Delivery Location (City, State, Zip)*</label>
          <input 
            type="text" 
            id="deliveryLocation"
            style={inputStyle}
            {...register('deliveryLocation', { required: 'Delivery Location is required.' })} 
          />
          {errors.deliveryLocation && <p style={errorStyle}>{errors.deliveryLocation.message}</p>}
        </div>
        
        {/* Shipment Details - Fields from your current site [3] and report */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="freightDescription" style={labelStyle}>Freight Description*</label>
          <textarea 
            id="freightDescription"
            style={{...inputStyle, minHeight: '80px'}}
            {...register('freightDescription', { required: 'Freight Description is required.' })} 
          />
          {errors.freightDescription && <p style={errorStyle}>{errors.freightDescription.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="weightDimensions" style={labelStyle}>Estimated Total Weight / Dimensions*</label>
          <input 
            type="text" 
            id="weightDimensions"
            style={inputStyle}
            {...register('weightDimensions', { required: 'Weight/Dimensions are required.' })} 
          />
          {errors.weightDimensions && <p style={errorStyle}>{errors.weightDimensions.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="preferredPickupDate" style={labelStyle}>Preferred Pickup Date</label>
          <input 
            type="date" 
            id="preferredPickupDate"
            style={inputStyle}
            {...register('preferredPickupDate')} 
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="specialHandling" style={labelStyle}>Special Handling Requirements (e.g., liftgate, fragile)</label>
          <textarea 
            id="specialHandling"
            style={{...inputStyle, minHeight: '60px'}}
            {...register('specialHandling')} 
          />
        </div>
        
        <button type="submit" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit Quote Request
        </button>
      </form>
    </div>
  );
};

export default RequestQuotePage;