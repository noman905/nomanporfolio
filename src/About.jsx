import { motion } from "framer-motion";
import { NavLink } from "react-router";

export const About = () => {
  return (
    <motion.section
      className="bg-black p-3 tracking-[2px] md:p-8 flex justify-center flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once when in viewport
      transition={{ duration: 0.4, ease: "easeOut" }} // Smoother and faster transition
      style={{ willChange: "opacity" }} // Optimized for performance
    >
      {/* Title */}
      <h2 className="text-[#1de5a2f4] pt-16 font-poppins text-5xl font-bold text-center mb-12">
        About Me
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center gap-10 justify-evenly w-full max-w-6xl">
        {/* Profile Image (Lazy Loading and Reduced Repaint Triggers) */}
        <motion.img
          src="./noman.webp" 
          
          className="h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[310px] md:w-[310px] rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth scale-in
          alt="Profile"
          style={{ willChange: "opacity, transform" }} // GPU acceleration
        />

        {/* Text Section (Optimized Transitions) */}
        <motion.div
          className="flex flex-col justify-center gap-5 px-4 md:w-[80%] md:m-auto lg:m-3 lg:w-[50%] text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once when in viewport
          transition={{ duration: 0.4, ease: "easeOut" }} // Shorter duration for smoother entry
          style={{ willChange: "opacity, transform" }}
        >
          <h2 className="text-[#dbdbdb] text-center text-2xl sm:text-3xl md:text-[30px] lg:flex-start font-semibold">
            FRONTEND DEVELOPER
          </h2>

          <p className="text-[#eee7e7]   text-lg text-justify  sm:text-lg md:text-lg lg:text-[1.125rem] lg:text-start lg:ml-[48px] leading-relaxed lg:mt-6">
            I am Noman Afzal, a front-end developer. I create modern, responsive, and user-friendly websites that enhance user experience. My focus is on delivering <span className="text-[#1de5a2f4]"> high-quality web solutions that meet client needs. Let’s work together to build something amazing!</span>
          </p>

          <div className="mt-6">
            <NavLink
              to="/contact"
              className="inline-block m-auto lg:ml-12 bg-transparent border-2 border-[#1de5a2f4] text-[#1de5a2f4] px-6 py-3 rounded-full text-lg hover:bg-[#1de5a2f4] hover:text-black transition-all duration-300"
            >
              Let's Work Together 🚀
            </NavLink>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
