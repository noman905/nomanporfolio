import { motion } from 'framer-motion';
import { NavLink } from 'react-router';
import './hero.css';

export const Hero = () => {
  return (
    <motion.div
      className="pt-44 sm:pt-[120px] hero tracking-[2px] flex flex-col gap-8 px-1 sm:px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ willChange: 'opacity, transform' }}
    >
      <motion.h1
        className="text-[#dedede] m-auto font-[600] tracking-wide lg:leading-[65px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ willChange: 'opacity, transform' }}
      >
        <span className="font-poppins text-[29px] sm:text-[55px] md:text-[56px] lg:text-[63px]">
          CREATE FAST AND
        </span>
        <br className="sm:inline" />
        <span className="text-[#1de5a2f4] font-poppins text-[29px] sm:text-[45px] md:text-[43px] lg:text-[49px]">
          HIGH PERFORMANCE <br className="sm:inline" /> CUSTOM WEBSITES
        </span>
      </motion.h1>

      <motion.p
        className="font-inter text-[#dedede] text-[16px] sm:text-[15px] md:text-[20px] m-auto max-w-[90%] sm:max-w-[80%]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        style={{ willChange: 'opacity, transform' }}
      >
        Passionate about crafting dynamic websites with <br className="hidden sm:inline" /> 
        HTML, CSS, JavaScript, React, Tailwind CSS
      </motion.p>

      <NavLink to="/contact">  <motion.div
        className="flex justify-center items-center mb-14"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.3 }}
        style={{ willChange: 'opacity, transform' }}
      >
        <motion.button
          className="bg-[#000] h-12 w-32 rounded-2xl text-[#fff] relative overflow-hidden px-4 py-2 border-2 border-[#1de5a2f4] flex justify-center items-center"
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 30px rgba(61,205,147,0.75)',
          }}
          aria-label="Hire me"
          style={{ willChange: 'transform' }}
        >
        <NavLink to="/book-call">  <span className="relative text-[21px] z-10 whitespace-nowrap">Hire me</span> </NavLink>

          <motion.div
            className="absolute inset-0 border-2 border-[#1de5a2f4] rounded-2xl"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform, opacity' }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#201f1ff4] to-[#2e2e2e] opacity-40 rounded-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform, opacity' }}
          />
        </motion.button>
      </motion.div> </NavLink>
    </motion.div> 
  );
};
