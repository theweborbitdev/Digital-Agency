import React from "react";
import { FiArrowRight } from "react-icons/fi";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const blogs = [
  {
    id: 1,
    title: "How AI is Changing The Future",
    text: "Discover how artificial intelligence is transforming industries and empowering teams.",
    image: project1,
  },
  {
    id: 2,
    title: "Top 10 Tips for Developers",
    text: "Simple and effective tips every developer should follow to improve productivity.",
    image: project2,
  },
  {
    id: 3,
    title: "Why Teamwork Matters",
    text: "Collaboration is at the heart of success. Learn why teamwork matters more than ever.",
    image: project3,
  },
];

export default function BlogSection() {
  return (
    <div className="w-full py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Row */}
        <div className="flex items-center justify-between mb-12 relative">

          {/* Centered Recent Blog Badge */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="inline-block bg-gray-200 px-4 py-2 rounded-full font-medium text-sm">
              Recent Blog
            </div>
          </div>

          {/* Right Arrow */}
          <div className="ml-auto text-blue-600 text-xl cursor-pointer transition-transform duration-300 hover:translate-x-2">
            <FiArrowRight />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-5">
                  {blog.text}
                </p>

                {/* Read More with Arrow */}
                <div className="flex items-center text-blue-600 font-medium cursor-pointer group">
                  Read More
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
