import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#1de5a2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Logo or Branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-3xl font-poppins font-semibold text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
            NOMAN AFZAL
            </h3>
            <p className="mt-2 text-sm text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
              Building the future with passion
            </p>
          </div>

          {/* Social Links with Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[#1de5a2] pt-4 text-center">
          <p className="text-sm text-white hover:text-[#1de5a2] transition duration-300 ease-in-out">
            &copy; {new Date().getFullYear()} NOMAN AFZAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
