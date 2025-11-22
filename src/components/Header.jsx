import React from "react";
import { FiPhone } from "react-icons/fi";

export default function Header() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto py-6 px-6 flex items-center justify-between">

        {/* Left: Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold tracking-tight text-blue-700 cursor-pointer"
        >
          Digital Agency
        </div>

        {/* Center Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-900 font-medium">

          <span
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Home
          </span>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition px-4 py-2 rounded">
              Services
            </span>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              <span onClick={() => scrollToSection("services")} className="block px-4 py-2 hover:bg-blue-600 hover:text-white rounded-t-lg cursor-pointer">Web Development</span>
              <span onClick={() => scrollToSection("services")} className="block px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">UI/UX</span>
              <span onClick={() => scrollToSection("services")} className="block px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">Branding</span>
              <span onClick={() => scrollToSection("services")} className="block px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">SEO</span>
              <span onClick={() => scrollToSection("services")} className="block px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">Digital Marketing</span>
              <span onClick={() => scrollToSection("services")} className="block px-4 py-2 hover:bg-blue-600 hover:text-white rounded-b-lg cursor-pointer">App Development</span>
            </div>
          </div>

          <span
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            About Us
          </span>

          <span
            onClick={() => scrollToSection("blog")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Blog
          </span>

          <span
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Contact Us
          </span>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
              <FiPhone className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-none">Need help?</p>
              <p className="text-md font-semibold leading-none">+923004051925</p>
            </div>
          </div>

          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
            Discover More +
          </button>
        </div>
      </div>
    </header>
  );
}
