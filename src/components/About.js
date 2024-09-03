import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col justify-center items-center min-h-screen text-white px-4 md:px-8 py-12 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-light-blue text-2xl md:text-3xl font-bold mb-4 mt-8">
        Get To Know More
      </p>
      <h2 className="text-4xl md:text-6xl font-extrabold mb-12 mt-8 typewriter">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center mt-10">
        <motion.div
          className="section__pic-container"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="img/about.jpg"
            alt="About"
            className="h-64 w-64 md:h-96 md:w-96 rounded-2xl border-4 border-light-blue shadow-lg"
          />
        </motion.div>
        <motion.div
          className="text-container max-w-sm md:max-w-xl mx-3 text-lg md:text-2xl font-bold leading-relaxed"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-gray-300 mb-8">
            Hello! I'm a third-year Computer Science student at Missouri
            University of Science and Technology, who is minoring in
            Mathematics. My passion lies in Artificial Intelligence, Web and App
            Development, Cybersecurity, and Data Science. Through my role as an
            undergraduate research assistant, internships, and personal
            projects, I've gained valuable experience in these fields. I am
            proficient in various programming languages, including C, C++,
            Assembly, Java, Python, JavaScript, MATLAB, C#, and SQL. Beyond
            academics and coding, I enjoy staying active by working out and
            running, indulging in video games, reading, and anime. I also love
            learning history and philosophy, and am a devoted cat lover! I'm
            actively seeking opportunities in the field of computer science and
            would love to connect with professionals to explore potential
            collaborations. Thank you for taking the time to learn about me!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
