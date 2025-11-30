import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <section className="hero-section text-center">
        <h1 className="text-5xl font-bold text-gray-800">Pluimmers</h1>
        <p className="text-xl text-gray-600 mt-2">Your trusted partner in quality services.</p>
      </section>
      <section className="about-section my-12">
        <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-2">Pluimmers is dedicated to providing top-notch services that cater to your needs.</p>
      </section>
      <section className="services-section my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <h2 className="text-3xl font-semibold text-gray-800 col-span-full">What We Do</h2>
        <div className="service-card p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold">Service 1</h3>
          <p>High quality service description.</p>
        </div>
        <div className="service-card p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold">Service 2</h3>
          <p>High quality service description.</p>
        </div>
        <div className="service-card p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold">Service 3</h3>
          <p>High quality service description.</p>
        </div>
      </section>
      <section className="contact-section my-12">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Email" className="border p-2 rounded w-full mb-4" />
          <textarea placeholder="Your Message" className="border p-2 rounded w-full mb-4" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;