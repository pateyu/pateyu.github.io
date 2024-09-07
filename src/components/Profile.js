import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="profile"
      className="flex flex-col justify-start items-center min-h-screen overflow-x-hidenn overflow-hidden relative font-sans pt-4"  
    >
      <div className="section__pic-container z-10 mb-4">
        <img
          src="./img/pfp1.png"
          alt="Yug Patel"
          className="h-60 w-60 md:h-80 md:w-80 rounded-full border-4 border-light-blue" 
        />
      </div>

      {!isMobile ? (
        <svg
          viewBox="0 0 900 125"
          className="mx-auto md:mx-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.text
            x="50%"
            y="25%"  
            textAnchor="middle"
            className="svg-text hello-text text-xl md:text-2xl"
            style={{ animationDelay: "0.5s" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            Hello, I'm
          </motion.text>
          <motion.text
            x="50%"
            y="55%"  
            textAnchor="middle"
            className="svg-text name-text text-2xl md:text-4xl"
            style={{ animationDelay: "1s", fill: "#7FFFD4" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
          >
            Yug Patel
          </motion.text>
          <motion.text
            x="50%"
            y="85%"  
            textAnchor="middle"
            className="svg-subtext text-lg md:text-2xl"
            style={{ animationDelay: "2s" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 3 }}
          >
            Student Developer
          </motion.text>
        </svg>
      ) : (
        <div className="text-center font-Poppins text-white mt-4">
          <p className="text-2xl">Hello, I'm</p>
          <h1 className="text-4xl text-[#7fffd4] font-bold mt-2">Yug Patel</h1>
          <p className="text-xl font-Poppins mt-2">Student Developer</p>
        </div>
      )}

      <div className="flex justify-center gap-5 mt-9">
        <motion.button
          className="bg-light-blue text-dark-navy px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-white hover:text-light-blue transition duration-300 w-36 text-center"
          onClick={() => window.open("./img/resume.pdf")}
          whileHover={{ scale: 1.1 }}
        >
          Download CV
        </motion.button>

        <button
          onClick={() => (window.location.href = "#contact")}
          className="border-2 border-light-blue text-light-blue px-5 py-2 rounded-full font-semibold hover:bg-light-blue hover:text-dark-navy transition duration-300 w-36 text-center"
        >
          Contact
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <img
          src="./img/linkedin.png"
          alt="LinkedIn"
          className="icon h-10 md:h-10 cursor-pointer transform hover:scale-110 transition duration-300"
          style={{ filter: "invert(100%)" }}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/patel-yug")
          }
        />
        <img
          src="./img/github.png"
          alt="Github"
          className="icon h-10 md:h-10 cursor-pointer transform hover:scale-110 transition duration-300"
          style={{ filter: "invert(100%)" }}
          onClick={() => (window.location.href = "https://github.com/pateyu")}
        />
      </div>
    </motion.section>
  );
};

export default Profile;
