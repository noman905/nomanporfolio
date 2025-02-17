import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> }
];

export const TechScroller=()=> {
  return (
    <div className="bg-[#000000] py-10 flex overflow-hidden relative">
      <motion.div
        className="flex space-x-16"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      >
        {techStack.map((tech, index) => (
          <div key={index}>{tech.icon}</div>
        ))}
      </motion.div>
    </div>
  );
}
