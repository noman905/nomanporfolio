import React from 'react';
import { NavLink } from "react-router";


const services = [
  {
    title: 'Landing Pages',
    description: 'With React, I build fast, scalable, and dynamic web applications. Whether it\'s a simple landing page or a complex web app, I ensure smooth and interactive user experiences with React on all devices for SAAS and Local Business.',
    skills: ['React.js & tailind CSS for Fast loading', 'State Management with useState', 'RESTful API Integration'],
  },

  
  {
    title: 'Figma to React Development',
    description: 'I design modern, user-friendly interface that are both visually appealing and easy to navigate. From wireframes to prototypes, I ensure your website is intuitive and responsive on all device wheter its is Tablet ,Mobile or Desktop.',
    skills: ['(Figma & Adobe XD)', 'Responsive Design', 'Tailwind CSS'],
  },
  {
    title: 'Web Development',
    description: 'I create modern, responsive websites that work seamlessly across all devices. Whether it\'s a personal portfolio or a business website, I can bring your ideas to life with clean and efficient code.',
    skills: ['Responsive Design', 'HTML, CSS, JavaScript', 'Bootstrap, Tailwind CSS'],
  },
  
];

export const Services = () => {
  return (
    <section id="services" className="bg-black text-[#ebebeb] py-16">
      <div className="max-w-6xl mt-9 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" font-poppins text-4xl md:text-5xl font-extrabold text-center text-[#1de5a2] mb-12">
          My Services
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-black border-2 border-white p-4 rounded-lg shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out w-[96%] sm:w-80 lg:w-96 flex flex-col">
              <h3 className="text-2xl font-semibold text-[#1de5a2] mb-4">{service.title}</h3>
              <p className="text-[#ebebeb]    mb-4 ">{service.description}</p>
              <ul className="text-[#ebebeb] mb-4">
                {service.skills.map((skill, idx) => (
                  <li key={idx} className="mb-2">{skill}</li>
                ))}
              </ul>
            <NavLink to="/contact">  <button className="mt-auto w-full py-2 px-4 bg-transparent text-[#1de5a2] border-2 border-[#1de5a2] font-semibold rounded-md transition duration-300 ease-in-out hover:bg-[#1de5a2] hover:text-black hover:border-transparent">
                Lets Started
              </button> </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
