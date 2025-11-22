import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Testimonials from "./../assets/Testimonials.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ali Ahmad",
    text: "Let us be a part of your personal and professional growth by providing an effective way to learn. Let us be a part of your growth by a fun and effective way.",
    image: "/Testimonials.jpg",
  },
  {
    id: 2,
    name: "Sohaib",
    text: "Let us be a part of your personal and professional growth by providing an effective way to learn. Let us be a part of your growth by a fun and effective way.",
    image: "/Testimonials.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full py-12 bg-[#f8fafc] text-center">
      {/* Label */}
      <div className="inline-block px-6 py-2 bg-gray-200 rounded-full shadow-md mb-6 text-sm font-medium">
        Testimonial
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-10">
        What Client <span className="text-blue-600">Think</span> About Us?
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-[560px] bg-white p-8 rounded-2xl shadow-lg text-left"
          >
            {/* Image */}
            <img
              src={Testimonials}
              alt="client"
              className="w-20 h-20 object-cover rounded-lg mb-4"
            />

            {/* Quote Icon */}
            <FaQuoteLeft className="text-2xl text-blue-600 opacity-40 mb-3" />

            {/* Text */}
            <p className="text-gray-500 leading-relaxed mb-3">{item.text}</p>

            {/* Name */}
            <h4 className="text-blue-600 font-semibold text-lg mb-2">
              {item.name}
            </h4>

            {/* Stars */}
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-3">
        <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
}
