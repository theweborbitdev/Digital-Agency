import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

        {/* Left: Logo & About */}
        <div className="md:w-1/3">
          <Link to="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
            Digital Agency
          </Link>
          <p className="text-white/90 leading-relaxed mb-4">
            We provide modern web solutions to help your business grow. 
            From web development to branding, we are your digital partner.
          </p>
          <div className="flex gap-4 text-xl">
            <FiFacebook className="cursor-pointer hover:text-blue-300 transition" />
            <FiTwitter className="cursor-pointer hover:text-blue-300 transition" />
            <FiInstagram className="cursor-pointer hover:text-blue-300 transition" />
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-300 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-300 transition">Services</Link></li>
            <li><Link to="/projects" className="hover:text-blue-300 transition">Projects</Link></li>
            <li><Link to="/blog" className="hover:text-blue-300 transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="flex items-center mb-3">
            <FiPhone className="mr-3 text-xl" />
            <span>+92 300 4051925</span>
          </div>
          <div className="flex items-center mb-3">
            <FiMail className="mr-3 text-xl" />
            <span>info@Digitalagency.com</span>
          </div>
          <p className="mt-4 text-white/80">
            &copy; {new Date().getFullYear()} Digita Agency. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
