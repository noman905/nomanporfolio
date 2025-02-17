import React from "react";

const projects = [
  {
    id: 1,
    link:"https://fooddeliverynoman.netlify.app",
    title: "Food Delivery Website",
    description: "A responsive food delivery platform built with React, Tailwind CSS, and Framer Motion. Features smooth animations and real-time search.",
    image: "./project1.png",
  },
  {
    id: 2,
    title: "Earbuds Landing Page",
    link:"https://earbudnoman.netlify.app",
    description: "A high-converting landing page for premium earbuds. Built with React, Tailwind CSS, and Framer Motion for dynamic animations.",
    image: "./project2.png",
  },
  {
    id: 3,
    title: "Gym & Fitness Website",
    link:"https://gymnoman.netlify.app",
    description: "A dynamic gym website designed with React, Tailwind CSS, and Framer Motion. Includes class scheduling and interactive design.",
    image: "./project3.png",
  }
];

export const Projects = () => {
  return (
    <section className="bg-black text-white text-center py-20 px-6">
 <h2 className="text-[#1de5a2f4] font-poppins text-5xl font-bold text-center mb-12">
       My Projects
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black text-[#e5e7eb] p-2 rounded-lg border-2 border-[#e5e7eb] shadow-lg w-[300px] hover:scale-105 transition-all hover:shadow-2xl transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-[#1de5a2f4] hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Button with White Border */}
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="inline-block bg-transparent border-2 border-[#e5e7eb] text-[#e5e7eb] px-6 py-3 rounded-full text-lg hover:bg-[#dddcdc] hover:text-black transition-all duration-300 transform"
        >
          See More Projects
        </a>
      </div>
    </section>
  );
};
