import React from "react";

const projects = [
  {
    id: 3,
    title: "Gym & Fitness Website",
    link:"https://saasnoman.netlify.app",
    description: "A dynamic gym website designed with React, Tailwind CSS, and Framer Motion. Includes class scheduling and interactive design.",
    image: "./project3.avif",
  },
  {
    id: 1,
    link:"https://fooddeliverynoman.netlify.app",
    title: "Food Delivery Website",
    description: "A responsive food delivery platform built with React, Tailwind CSS, and Framer Motion. Features smooth animations and real-time search.",
    image: "./project1.webp",
  },
  {
    id: 2,
    title: "Earbuds Landing Page",
    link:"https://earbudnoman.netlify.app",
    description: "A high-converting landing page for premium earbuds. Built with React, Tailwind CSS, and Framer Motion for dynamic animations.",
    image: "./project2.webp",
  },
 
];

export const Projects = () => {
  return (
    <section className="bg-black text-white text-center py-20 px-6">
 <h2 className="text-[#1de5a2f4] font-poppins text-5xl font-bold text-center mb-12">
       My Projects
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
           <a href={project.link}
           
           target="_blank" rel="noopener noreferrer"
         >
          <div
            key={project.id}
            className="bg-black text-[#e5e7eb] p-2 rounded-lg border-2 border-[#e5e7eb] shadow-lg w-[300px] hover:scale-105 transition-all hover:shadow-2xl transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl text-[#dedede]  font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <button
             
              className="text-[#1de5a2f4] hover:underline"
              
            >
              View Project
              </button>
          </div>
          </a>
        ))}
      </div>

    
    </section>
  );
};
