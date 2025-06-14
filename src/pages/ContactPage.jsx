import React, { useState } from 'react'; // Make sure useState is imported
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPencilAlt, FaCheckCircle } from 'react-icons/fa';

// This is the same reusable component from before
const FormInput = ({ icon, id, type, placeholder, register, error, validation, rows }) => (
  <div className="relative">
    <span className="absolute top-3 left-0 flex items-center pl-3 pointer-events-none text-gray-400">{icon}</span>
    {type === 'textarea' ? (
      <textarea id={id} rows={rows || 4} placeholder={placeholder} className="mt-1 block w-full pl-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900" {...register(id, validation)} />
    ) : (
      <input id={id} type={type} placeholder={placeholder} className="mt-1 block w-full pl-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900" {...register(id, validation)} />
    )}
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  // --- FIX: These lines must be present to create the state variables ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Remember to replace this with your actual Formspree URL
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    }
    setIsSubmitting(false);
  };

  // This part shows a success message after the form is submitted
  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-[60vh] flex items-center justify-center py-12 px-4">
        <div className="text-center bg-white p-12 rounded-xl shadow-2xl">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
          <p className="text-gray-600 mt-2 mb-6">Thank you for reaching out. We will get back to you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // This is the main form view
  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-3">Contact Us</h1>
          <p className="text-lg text-gray-600">Have a question or need to get in touch? Send us a message below.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormInput icon={<FaUser />} id="name" type="text" placeholder="Name*" register={register} error={errors.name} validation={{ required: 'Name is required.' }} />
              <FormInput icon={<FaEnvelope />} id="email" type="email" placeholder="Email Address*" register={register} error={errors.email} validation={{ required: 'Email is required.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format.' } }} />
              <FormInput icon={<FaPencilAlt />} id="message" type="textarea" rows="5" placeholder="Your Message*" register={register} error={errors.message} validation={{ required: 'A message is required.' }} />
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Information</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong className="font-medium">Phone:</strong> <a href="tel:+16785106050" className="text-blue-600 hover:underline">+1 678 510 6050</a></p>
                <p><strong className="font-medium">Email:</strong> <a href="mailto:Ahmed@gmesolutionsllc.com" className="text-blue-600 hover:underline">Ahmed@gmesolutionsllc.com</a></p>
                <p><strong className="font-medium">Location:</strong><br />Lithonia, GA, United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;