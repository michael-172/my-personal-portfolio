import React from "react";
import { FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">
          Port<span className="text-red-500">folio.</span>
        </h2>
        <div className="flex space-x-8 mb-6">
          <a href="#" className="hover:text-red-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-red-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-red-500 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-red-500 transition">
            Portfolio
          </a>
          <a href="#blog" className="hover:text-red-500 transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-red-500 transition">
            Contract
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-2xl hover:text-red-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-red-500 transition">
            <FaDribbble />
          </a>
          <a href="#" className="text-2xl hover:text-red-500 transition">
            <FaBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
