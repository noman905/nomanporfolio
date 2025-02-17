import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';

export const Skills = () => {
  return (
    <motion.section
      className="bg-black p-8 text-center tracking-[2px] flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <h2 className=" font-poppins   text-[#1de5a2f4] text-4xl lg:text-5xl font-bold text-center mb-12">
        My Skills
      </h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {/* HTML */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#e34c26] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaHtml5 className="text-6xl mb-2" />
          <h3 className="text-lg">HTML</h3>
        </motion.div>
        
        {/* CSS */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#1572b6] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaCss3Alt className="text-6xl mb-2" />
          <h3 className="text-lg">CSS</h3>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#f7df1e] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaJs className="text-6xl mb-2" />
          <h3 className="text-lg">JavaScript</h3>
        </motion.div>

        {/* React.js */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#61dafb] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaReact className="text-6xl mb-2" />
          <h3 className="text-lg">React.js</h3>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#38bdf8] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SiTailwindcss className="text-6xl mb-2" />
          <h3 className="text-lg">Tailwind CSS</h3>
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#7952b3] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SiBootstrap className="text-6xl mb-2" />
          <h3 className="text-lg">Bootstrap</h3>
        </motion.div>

        {/* Git */}
        <motion.div
          className="skill-card flex flex-col items-center justify-center text-[#f1502f] p-4"
          whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaGithub className="text-6xl mb-2" />
          <h3 className="text-lg">Git</h3>
        </motion.div>
      </div>
    </motion.section>
  );
};
