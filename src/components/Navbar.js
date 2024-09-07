import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <motion.nav
        id="navbar"
        className="flex justify-between items-center text-white sticky top-0 w-full h-24 z-50 px-8 backdrop-blur"
        initial={{ opacity: 0, y: -50 }}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 0.8 }}     
      >
        <div className="flex items-center">
          <img
            src="img/YP.png"
            alt="Yug Patel logo"
            className="logo h-20 w-20 mr-4"
            style={{ filter: "invert(100%)" }}
          />
          <div className="text-3xl font-extrabold">
            Yug Patel
          </div>
        </div>
        <ul className="hidden md:flex gap-8 text-lg list-none">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-light-blue transition duration-300 font-extrabold"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex items-center">
          <div className="ham-icon cursor-pointer" onClick={toggleMenu}>
            <span
              className={`block w-8 h-1 bg-white mb-1 transform transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white mb-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transform transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-lg">
          <nav
            id="ham-nav"
            className="md:hidden flex flex-col items-center text-white fixed inset-0 z-50 pt-24"
          >
            <ul className="menu-links flex flex-col items-center mt-8 gap-8 text-lg">
              {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                <li key={item} className={`${index === 0 ? "mt-12" : ""}`}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="hover:text-light-blue transition duration-300 font-extrabold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
