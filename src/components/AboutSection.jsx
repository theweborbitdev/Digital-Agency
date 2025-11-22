import React from "react";
import AboutImage from "../assets/about-image.png"; // replace with your image path
import '../assets/font.css'; // make sure this imports Jakarta Sans

export default function AboutSection() {
  return (
    <section
      className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 p-8 bg-white min-h-screen my-8"
      style={{ fontFamily: "'Jakarta Sans', sans-serif" }}
    >
      
      {/* Left Image without decorative shapes */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={AboutImage}
          alt="Person working on laptop"
          className="rounded-lg shadow-lg object-cover w-full max-w-sm"
        />
      </div>

      {/* Right text and bars */}
      <div className="md:w-1/2 space-y-6">
        <span className="inline-block bg-gray-200 px-4 py-1 rounded-full text-sm font-semibold text-gray-600 shadow-md">
          ABOUT US
        </span>

        <h2 className="text-3xl font-bold leading-tight text-gray-900">
          Transforming Businesses Through <span className="text-blue-600">Software</span> Innovation
        </h2>

        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        </p>

        {/* Skill bars */}
        <div className="space-y-4">
          <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow">
            <div className="p-3 bg-white rounded-lg mr-4">
              {/* Icon placeholder */}
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-9 6h18" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between font-semibold text-gray-900 mb-1">
                <span>Web Development</span>
                <span className="text-blue-600">90%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
                <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow">
            <div className="p-3 bg-white rounded-lg mr-4">
              {/* Icon placeholder */}
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-4 8h8m-12-4h4" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between font-semibold text-gray-900 mb-1">
                <span>Cloud Solutions</span>
                <span className="text-blue-600">80%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
                <div className="h-full w-[80%] bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
