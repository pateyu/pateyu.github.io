import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "AmrtyuBot",
      description:
        "A Discord Study bot with Canvas Integration, Study Timer, and more.",
      link: "https://github.com/pateyu/AmrtyuBot",
    },
    {
      title: "CLAIA",
      description: "A CLI Tool with OpenAI integration. Can generate code, text, run commands, and receive answers all from the command line!",
      link: "https://github.com/pateyu/CLAIA",
    },
    {
      title: "Global Food Library",
      description: "A dynamic culinary platform with personalized recipe management and advanced search capabilities.",
      link: "https://github.com/pateyu/CookbookProject",
    },
    {
      title: "Portfolio Website",
      description:
        "This website! Built with React, Tailwind CSS, and Framer Motion.",
      link: "https://github.com/pateyu/pateyu.github.io",
    },
  ];

  return (
    <section id="projects" className="py-32 text-center text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-light-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block p-2 w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-light-blue block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.4,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <motion.div
              className="relative z-10 bg-gray-800 p-6 rounded-lg shadow-lg group-hover:shadow-2xl transition-transform transform ease-in-out duration-300 h-48 flex flex-col justify-between"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: projects.length * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
