import "./header.css"
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[70px] flex bg-[#000000]  justify-between md:justify-between items-center px-3 md:px-10 fixed top-0 left-0 z-[90]">
        {/* Logo Section */}
        <div className="flex gap-3 items-center">
          
          <h1 className="text-[16px] text-[#fff] md:text-[27px] font-extrabold hover:text-green-400 ">NOMAN AFZAL</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex  gap-10 text-[#faf8f8]">
          <NavLink to="/"><li className="hover:text-green-400">Home</li>    </NavLink>
          <NavLink to="/projects"><li className="hover:text-green-400">Projects</li></NavLink>
          <NavLink to="/services"><li className="hover:text-green-400">Services</li></NavLink>
          <NavLink to="/about"><li className="hover:text-green-400">About</li></NavLink>
        </ul>

        {/* Get Started Button (Always Visible, Hidden in Mobile Menu) */}
        <div className={`flex ${menuOpen ? "hidden" : "flex"}`}>
        <NavLink to="/contact">   <motion.button
            className="bg-[#000] h-12 w-[118px] rounded-2xl text-[#fff] relative overflow-hidden px-1 py-1 border-2 border-[#1de5a2f4]"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(61,205,147,0.75)",
            }}
          >
           <span className="relative text-[18px] z-10">Contact Me</span>

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
                repeatType: "loop",
                ease: "easeInOut",
              }}
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
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.button> </NavLink>
        </div>

        {/* Hamburger Menu Button (Tablet & Mobile) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#0f1c19] w-[70%] p-6 flex flex-col items-center text-white space-y-6 transform transition-transform duration-300 z-[100] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setMenuOpen(false)} className="self-end text-2xl">
          <FaTimes />
        </button>
        <ul className="flex flex-col gap-6 text-lg">
        <NavLink to="/">  <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">Home</li>     </NavLink>
        <NavLink to="/projects">  <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">Projects</li></NavLink>
        <NavLink to="/services">  <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">Services</li></NavLink>
        <NavLink to="/about">  <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">About</li></NavLink>
        </ul>
      </div>
    </>
  );
};















// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";

// export const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full h-[70px] flex bg-[#0f1c19]  justify-between items-center px-6 md:px-10">
//         {/* Logo Section */}
//         <div className="flex gap-3 items-center">
//           <img className="h-[55px] w-[55px] rounded-full" src="./Preview.png" alt="Logo" />
//           <h1 className="text-2xl text-[rgb(255,255,255)] font-extrabold">Nomix</h1>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-10 text-[#faf8f8]">
//           <li>Home</li>
//           <li>Projects</li>
//           <li>Services</li>
//           <li>About</li>
//         </ul>

//         {/* Get Started Button (Always Visible, Hidden in Mobile Menu) */}
//         <div className={`flex ${menuOpen ? "hidden" : "flex"}`}>
//           <motion.button
//             className="bg-[#000] h-12 w-[118px] rounded-2xl text-[#fff] relative overflow-hidden px-1 py-1 border-2 border-[#1de5a2f4]"
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0 0 30px rgba(61,205,147,0.75)",
//             }}
//           >
//             <span className="relative z-10">Get Started</span>
//           </motion.button>
//         </div>

//         {/* Hamburger Menu Button (Tablet & Mobile) */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile & Tablet Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-[#0f1c19] w-[70%] p-6 flex flex-col items-center text-white space-y-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
//       >
//         <button onClick={() => setMenuOpen(false)} className="self-end text-2xl">
//           <FaTimes />
//         </button>
//         <ul className="flex flex-col gap-6 text-lg">
//           <li onClick={() => setMenuOpen(false)}>Home</li>
//           <li onClick={() => setMenuOpen(false)}>Projects</li>
//           <li onClick={() => setMenuOpen(false)}>Services</li>
//           <li onClick={() => setMenuOpen(false)}>About</li>
//         </ul>
//       </div>
//     </>
//   );
// };




