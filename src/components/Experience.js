import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Infosoft Systems Inc.",
      basicDescription:
        "Developed responsive web pages and improved user engagement by 20%.",
      detailedDescription:
        "At Infosoft Systems Inc., I was responsible for developing responsive web pages that led to a 20% increase in user engagement. I collaborated with the design team to create user-friendly interfaces and integrated advanced analytics features that improved decision-making efficiency.",
      duration: "May 2019 - July 2019",
    },
    {
      title: "Student Developer",
      company: "Missouri S&T",
      basicDescription:
        "Worked on various projects, including web applications and data analysis.",
      detailedDescription:
        "As a Student Developer at Missouri S&T, I worked on several projects, including developing web applications and performing data analysis. I gained experience in full-stack development and contributed to key projects that enhanced the university's digital infrastructure.",
      duration: "August 2020 - Present",
    },
    // Add more experiences as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 text-center h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-light-blue">Experience</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer overflow-hidden transition-all duration-500 transform ${
                expandedIndex === index ? "hover:scale-105" : "hover:scale-100"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                height: expandedIndex === index ? "auto" : "200px",
                overflow: expandedIndex === index ? "visible" : "hidden",
              }}
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-light-blue mb-2">{exp.company}</p>
              <p className="text-gray-300 mb-4">
                {expandedIndex === index
                  ? exp.detailedDescription
                  : exp.basicDescription}
              </p>
              <p className="text-gray-500">{exp.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
