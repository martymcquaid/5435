import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
      <form className="mt-4">
        <input type="text" placeholder="Your Email" className="border p-2 rounded w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 rounded w-full mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;