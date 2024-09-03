import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <motion.div
            className="text-3xl font-extrabold"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            Yug Patel
          </motion.div>
        </div>
        <ul className="hidden md:flex gap-8 text-lg list-none">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-light-blue transition duration-300 font-extrabold"
              >
                {item}
              </a>
            </motion.li>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              id="ham-nav"
              className="md:hidden flex flex-col items-center text-white fixed inset-0 z-50 pt-24"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ul className="menu-links flex flex-col items-center mt-8 gap-8 text-lg">
                {["About", "Experience", "Projects", "Contact"].map(
                  (item, index) => (
                    <li key={item} className={`${index === 0 ? "mt-12" : ""}`}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={toggleMenu}
                        className="hover:text-light-blue transition duration-300 font-extrabold"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
