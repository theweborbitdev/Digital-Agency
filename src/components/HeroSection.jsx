import React from "react";
import '../assets/font.css'; // adjust path accordingly
import Hero from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center bg-white p-8">

      {/* Left text with blurred background */}
      <div className="md:w-1/2 p-6 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-lg -z-10"></div>

        <p className="uppercase text-sm font-semibold text-gray-700 mb-4 bg-gray-200 w-fit px-3 py-1 rounded-full">
          Designing for the future
        </p>

        <h1
          style={{ fontFamily: "'Jakarta Sans', sans-serif" }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          Innovative Solutions <br /> For A <span className="text-blue-600">Digital</span> World
        </h1>

        <button className="mt-8 px-6 py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Discover More +
        </button>
      </div>

      {/* Right side image */}
      <div className="md:w-1/2 p-6">
        <img
          src={Hero}
          alt="Team working together"
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
