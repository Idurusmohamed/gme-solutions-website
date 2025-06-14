import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPencilAlt } from 'react-icons/fa';

// Reusable Input Component (You can move this to its own file in /components if you want)
const FormInput = ({ icon, id, type, placeholder, register, error, validation, rows }) => (
  <div className="relative">
    <span className="absolute top-3 left-0 flex items-center pl-3">
      {icon}
    </span>
    {type === 'textarea' ? (
      <textarea
        id={id}
        rows={rows || 4}
        placeholder={placeholder}
        className="mt-1 block w-full pl-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
        {...register(id, validation)}
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full pl-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
        {...register(id, validation)}
      />
    )}
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // --- FIX: These lines must be present to create the state variables ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // ...
const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    // We now send the data to our OWN backend endpoint
    const response = await fetch('http://localhost:3001/api/contact', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
// ...

  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have a question or need to get in touch? Send us a message below.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Enhanced Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormInput icon={<FaUser className="text-gray-400" />} id="name" type="text" placeholder="Name*" register={register} error={errors.name} validation={{ required: 'Name is required.' }} />
              <FormInput icon={<FaEnvelope className="text-gray-400" />} id="email" type="email" placeholder="Email Address*" register={register} error={errors.email} validation={{ required: 'Email is required.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format.' } }} />
              <FormInput icon={<FaPencilAlt className="text-gray-400" />} id="message" type="textarea" rows="5" placeholder="Your Message / Freight Details*" register={register} error={errors.message} validation={{ required: 'A message is required.' }} />
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details & Map (Styling remains the same, but now feels consistent) */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Information</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong className="font-medium">Phone:</strong> <a href="tel:+16785106050" className="text-blue-600 hover:underline">+1 678 510 6050</a></p>
                <p><strong className="font-medium">Email:</strong> <a href="mailto:Ahmed@gmesolutionsllc.com" className="text-blue-600 hover:underline">Ahmed@gmesolutionsllc.com</a></p>
                <p>
                  <strong className="font-medium">Location:</strong><br />
                  Lithonia GA, 30058, United States
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.579435671151!2d-84.1465220847926!3d33.6934269806963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a9e9a4f9b8b7%3A0x6b15e4f4b1e4f3a0!2s1243%20Huntington%20Pl%20Cir%2C%20Lithonia%2C%20GA%2030058!5e0!3m2!1sen!2sus!4v1684942398241!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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