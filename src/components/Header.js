import React, { useState } from "react";
import Image from "next/image";
import fullLogo from "../images/full_logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0E253D] py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={fullLogo} alt="VetMutual" className="h-10" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-white">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Features</a>
        <a href="#" className="hover:text-gray-300">Blogs</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </nav>

      {/* Call Button */}
      <a href="tel:(877) 830-3103" className="hidden md:flex items-center bg-[#C5403D] text-white px-5 py-2 rounded-full shadow-md hover:bg-red-700">
        <span className="mr-2"><i className="bi bi-telephone"></i></span> (877) 830-3103
      </a>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0E253D] text-white flex flex-col items-left py-4 shadow-lg md:hidden px-[40px]">
          <a href="#" className="py-2 hover:text-gray-300">Home</a>
          <a href="#" className="py-2 hover:text-gray-300">About Us</a>
          <a href="#" className="py-2 hover:text-gray-300">Features</a>
          <a href="#" className="py-2 hover:text-gray-300">Blogs</a>
          <a href="#" className="py-2 hover:text-gray-300">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Header;