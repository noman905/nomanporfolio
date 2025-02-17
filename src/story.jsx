import React from "react";
import { motion } from "framer-motion"; 
import { NavLink } from "react-router";

export const MyStory = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      {/* Heading */}
      <h2 className="text-[#1de5a2f4] font-poppins text-5xl font-bold text-center mb-12">
        My Journey
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-around gap-12">
        {/* Left Side - Image */}
        <motion.div 
          className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#fffffff4] shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="./noman.png" 
            alt="Noman Afzal" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Story */}
        <motion.div 
          className="text-center md:text-left max-w-xl md:max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white text-lg leading-relaxed">
            I started web development with a passion for creating modern and user-friendly websites.  
            From HTML & CSS to mastering JavaScript & React, I’ve built high-performance  
            websites that <span className="text-[#1de5a2f4]"> help businesses grow and stand out. Let's create something amazing together!</span>
          </p>

          {/* Call to Action */}
          <div className="mt-6">
            <NavLink 
              to="/contact"
              className="inline-block bg-transparent border-2 border-[#1de5a2f4] text-[#1de5a2f4] px-6 py-3 rounded-full text-lg hover:bg-[#1de5a2f4] hover:text-black transition-all duration-300"
            >
              Let's Work Together 🚀
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
