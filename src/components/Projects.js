import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaFlask,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiAwslambda,
  SiAmazondynamodb,
  SiTypescript,
  SiSupabase,
  SiDocker,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { useInView } from "./useInView";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.3 });

  const projects = [
    {
      title: "StudyBot",
      description:
        "A Discord Study bot with Canvas Integration. Can get assignments, announcements, and more right from discord. ",
      link: "https://github.com/pateyu/AmrtyuBot",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiAmazondynamodb />, name: "DynamoDB" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiAwslambda />, name: "Lambda" },
      ],
    },
    {
      title: "CLAIA",
      description:
        "A CLI Tool with OpenAI integration. Can generate code, text, run commands, and receive answers all from the command line!",
      link: "https://github.com/pateyu/CLAIA",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaGithub />, name: "GitHub" },
      ],
    },
    {
      title: "Global Food Library",
      description:
        "A dynamic culinary platform with personalized recipe management and advanced search capabilities. Comes with dietary filters, ratings, and custom cookbooks.",
      link: "https://github.com/pateyu/CookbookProject",
      skills: [
        { icon: <FaFlask />, name: "Flask" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaDatabase />, name: "SQL" },
      ],
    },
    {
      title: "Linkm.e",
      description:
        "A link-in-bio website with login, link management, profile. Built with React, Supabase, TypeScript, and Tailwind CSS.",
      link: "https://github.com/pateyu/linkm.e",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiSupabase />, name: "Supabase" },
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "This website! Built with React, Tailwind CSS, and Framer Motion.",
      link: "https://github.com/pateyu/pateyu.github.io",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaGithub />, name: "GitHub" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 text-center overflow-x-hidden min-h-screen text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-light-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group block p-2 w-full h-full ${
              projects.length % 2 === 1 &&
              index === projects.length - 1 &&
              "md:col-span-2 lg:col-span-1 lg:col-start-2"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
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
              className="relative z-10 bg-gray-800 p-6 rounded-lg shadow-lg group-hover:shadow-2xl transition-transform transform ease-in-out duration-300 h-64 flex flex-col justify-between"
              initial={{ scale: 1 }}
              animate={inView ? { scale: 1.05 } : {}}
              transition={{ duration: 0.5, delay: projects.length * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4 mt-auto justify-end">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    data-tooltip-id={`tooltip-${index}-${idx}`}
                    className="text-2xl"
                  >
                    {skill.icon}
                    <Tooltip
                      id={`tooltip-${index}-${idx}`}
                      content={skill.name}
                      className="p-1 text-xs rounded-lg"
                    />
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
