import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AmrtyuBot",
      description:
        "A Discord Study bot with Canvas Integration, Study Timer, and more.",
      link: "https://github.com/pateyu/AmrtyuBot",
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application to track and manage personal finances.",
      link: "https://github.com/yourusername/finance-tracker",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects, skills, and contact information.",
      link: "https://github.com/yourusername/portfolio-website",
    },
  ];

  return (
    <section id="projects" className="py-20 text-center h-screen text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-light-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-blue hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
