import React from "react";
import Hero from '../assets/Hero.png'; // replace with your image path  

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50 font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Text + Form */}
        <div className="flex-1 text-left">
          <div className="inline-block bg-gray-200 shadow-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
            GET IN TOUCH
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Business To <span className="text-blue-600">Growth</span> Please Touch ?
          </h2>

          <p className="text-gray-500 max-w-md mb-10">
            For your car we will do everything advice design in us repairs and maintenance. We are the some preferred.
          </p>

          <form className="max-w-md space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name Here"
                className="flex-1 p-4 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Contact Here"
                className="flex-1 p-4 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email Here"
              className="w-full p-4 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="w-full p-1 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us <span className="text-xl font-bold">+</span>
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative">
          <img
            src={Hero}
            alt="business meeting"
            className="rounded-lg shadow-lg max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
