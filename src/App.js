import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import particlesOptions from "./particles.json";

function App() {
  const [init, setInit] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  useEffect(() => {
    const handleResize = () => {
      setRefresh((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div className="App bg-dark-navy text-white min-h-screen relative">
      {init && <Particles options={particlesOptions} />}
      <div className="relative z-10">
        <Navbar key={refresh} />
        <Profile className="overflow-x-hidden" />
        <About className="overflow-x-hidden" />
        <Experience className="overflow-x-hidden" />
        <Projects  className="overflow-x-hidden"/>
        <Contact className="overflow-x-hidden" />
      </div>
    </div>
  );
}

export default App;
