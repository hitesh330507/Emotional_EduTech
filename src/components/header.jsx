import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#1F2833] py-4 shadow-md fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 md:px-12">
        <Link to="/" className="text-[#66FCF1] text-2xl font-bold">
          MindEase
        </Link>
        <div className="flex space-x-4 text-[#CFC6C7]">
          <Link to="/" className="hover:text-[#45A29E] transition">Home</Link>
          <Link to="/resources" className="hover:text-[#45A29E] transition">Resources</Link>
          <Link to="/chatbot" className="hover:text-[#45A29E] transition">Chatbot</Link>
          <Link to="/contact" className="hover:text-[#45A29E] transition">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
