// src/pages/ContactPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
    // Here you would typically send the data to a backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    reset(); // Reset form fields after submission
  };

  const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900";
  const labelClasses = "block text-sm font-medium text-gray-700";
  const errorClasses = "mt-1 text-xs text-red-600";

  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Need to get in touch with dispatch or request a quote? Reach out below and our team will respond promptly.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Name (required)</label>
                <input
                  type="text"
                  id="name"
                  className={inputClasses}
                  {...register('name', { required: 'Name is required.' })}
                />
                {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>Email (required)</label>
                <input
                  type="email"
                  id="email"
                  className={inputClasses}
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Entered value does not match email format.'
                    }
                  })}
                />
                {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>Message / Freight Details</label>
                <textarea
                  id="message"
                  rows="4"
                  className={inputClasses}
                  {...register('message', { required: 'Message is required.' })}
                ></textarea>
                {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              To request access to or deletion of your personal data, please use the form above and include 'Privacy Request' in your message.
            </p>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Information</h2>
              <p className="text-gray-700 mb-2">
                <strong className="font-medium">Phone:</strong> <a href="tel:+16785106050" className="text-blue-600 hover:underline">+1 678 510 6050</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="font-medium">Email:</strong> <a href="mailto:Ahmed@gmesolutionsllc.com" className="text-blue-600 hover:underline">Ahmed@gmesolutionsllc.com</a>
              </p>
              <p className="text-gray-700">
                <strong className="font-medium">Address:</strong><br />
                1243 Huntington place circle,<br />
                Lithonia GA, 30058, United States
              </p>
            </div>
            {/* Embedded Map Placeholder */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Replace with your actual Google Maps embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0000000000005!2d-84.10000000000001!3d33.71000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzM2LjAiTiA4NMKwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" // Replace with actual GME Solutions LLC coordinates/embed URL
                width="100%"
                height="300"
                style={{ border:0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GME Solutions LLC Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;