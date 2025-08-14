import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const fullCommand = 'echo "Hello World"';

  // Typing effect for command only
  useEffect(() => {
    if (typedCommand.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(fullCommand.slice(0, typedCommand.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand, fullCommand]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Set scrolled state for header border
      setScrolled(window.scrollY > 50);
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      title: "StudyBot",
      description: "Discord Study bot with Canvas Integration. Get assignments, announcements, and more right from discord.",
      tech: ["Python", "DynamoDB", "Docker", "Lambda"],
      github: "https://github.com/pateyu/AmrtyuBot",
      year: "2024"
    },
    {
      title: "CLAIA",
      description: "CLI Tool with OpenAI integration. Generate code, text, run commands, and receive answers from the command line.",
      tech: ["JavaScript", "Node.js", "GitHub"],
      github: "https://github.com/pateyu/CLAIA",
      year: "2024"
    },
    {
      title: "Savorly",
      description: "A full-stack application where users can create accounts to publish, save, and discover community-shared recipes.",
      tech: ["Flask", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/pateyu/Savorly",
      year: "2023"
    },
    {
      title: "Linkm.e",
      description: "Link-in-bio website with login, link management, and profiles. Built with the T3 stack.",
      tech: ["React", "TypeScript", "Supabase"],
      github: "https://github.com/pateyu/linkm.e",
      year: "2023"
    },
  ];

  const experiences = [
    {
      title: "Computer Vision/Data Science Co-op",
      company: "Hunter Engineering Company",
      period: "May 2025 – Present",
      location: "Remote",
      description: "Led technical enhancements of Hunter's ANPR system, boosting accuracy by 10% with a two-stage recognition model using YOLOv9 and Vision Transformer. Developed data pipeline with active learning, cutting manual annotation by 75%."
    },
    {
      title: "Machine Learning Programmer",
      company: "U.S. Geological Survey (USGS)",
      period: "Jan 2025 – Present", 
      location: "Rolla, MO",
      description: "Developed automated ML workflows for geospatial analysis, reducing processing time from weeks to hours. Slashed compute time by 60% using CUDA-accelerated parallel processing on HPC environments."
    },
    {
      title: "CS Research Intern",
      company: "National Science Foundation",
      period: "May 2024 – Aug 2024",
      location: "Rolla, MO", 
      description: "Designed multi-modal data acquisition platform for cognitive load analysis with sub-millisecond EEG/PPG synchronization. Implemented power-efficient Convolutional Spiking Neural Network achieving 40% noise reduction."
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Dept. of Computer Science, Missouri S&T",
      period: "Jan 2024 – May 2024",
      location: "Rolla, MO",
      description: "Engineered a data pipeline to process and annotate over 47,000 disaster-related tweets. Developed a model combining a transformer base with Conv1D and custom attention layers that boosted classification F1-score to 89%, a 33% improvement over baseline models."
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Dept. of Biological Sciences, Missouri S&T",
      period: "Aug 2023 – Mar 2024",
      location: "Rolla, MO",
      description: "Developed computational simulations to model the reproductive cycles of C. elegans. Designed and trained a computer vision model for automated classification of C. elegans dauer larvae from microscope imagery."
    },
    {
      title: "Software Developer",
      company: "Infosoft Systems Inc.",
      period: "May 2023 – Aug 2023",
      location: "St. Louis, MO",
      description: "Developed a full-stack web application for a client, handling both front-end and back-end implementation."
    }
  ];

  return (
    <div className="bg-black text-gray-300 font-mono overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/80 transition-all duration-300 ${
        scrolled ? 'border-b border-gray-800/50' : 'border-b border-transparent'
      }`}>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Terminal Command - Show on all screens */}
            <div className="text-green-400 text-xs sm:text-sm lg:text-base font-mono">
              <span className="text-green-400">yug</span>
              <span className="text-gray-500">@</span>
              <span className="text-green-400">portfolio</span>
              <span className="text-gray-500">:~$ </span>
              <span className="text-gray-300">{typedCommand}</span>
              <span className="animate-pulse">|</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-12">
              {['about', 'work', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index)}
                  className={`text-sm lg:text-base transition-colors duration-300 hover:scale-105 transform ${
                    currentSection === index ? 'text-green-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-sm`}>
          <div className="px-4 sm:px-6 md:px-8 py-6 space-y-4">
            {['about', 'work', 'projects', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className={`block w-full text-left py-3 px-4 rounded-lg text-base transition-all duration-300 transform hover:scale-105 ${
                  currentSection === index 
                    ? 'text-green-400 bg-green-400/10 border-l-2 border-green-400' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: Combined Hero/About */}
      <section className="section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-screen-xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Yug Patel
                </h1>
                <div className="text-sm sm:text-base lg:text-lg text-green-400 leading-relaxed">
                  Computer Vision/Data Science Co-Op @ Hunter Engineering Company | Computer Science Student @ Missouri S&T
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                Computer Science student at Missouri S&T graduating Spring 2026. 
                Currently working on computer vision systems and automated ML workflows.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">Spring 2026</div>
                  <div className="text-xs lg:text-sm text-gray-500">Graduation</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">3.8+</div>
                  <div className="text-xs lg:text-sm text-gray-500">GPA</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">4+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Internships/Research</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">10+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Projects</div>
                </div>
              </div>

              <div className="flex space-x-6 pt-4">
                <a 
                  href="https://github.com/pateyu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-green-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/patel-yug" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-green-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:yugbpatel30@gmail.com" 
                  className="text-gray-500 hover:text-green-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
              <div className="w-64 sm:w-72 md:w-80 lg:w-80 h-64 sm:h-72 md:h-80 lg:h-80 rounded-full border-2 border-green-400/20 p-2 transition-all duration-300">
                <img 
                  src="/linkedin.jfif" 
                  alt="Yug Patel"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </section>

      {/* Section 2: Work Experience */}
      <section className="section min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-screen-lg w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-12 sm:mb-16 text-center">
            Experience
          </h2>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group hover:bg-gray-900/30 p-6 sm:p-8 rounded-lg transition-all duration-300 border-l-2 border-green-400/0 hover:border-green-400/50">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-green-400 font-medium text-sm sm:text-base">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{exp.location}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-mono bg-gray-800/50 px-3 py-1 rounded-full mt-2 lg:mt-0 self-start">
                    {exp.period}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section className="section min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-screen-xl w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-12 sm:mb-16 text-center">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 lg:p-8 border border-gray-800 hover:border-green-400 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-green-400/10 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 flex items-center">
                    {project.title}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 font-mono bg-gray-800/50 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 sm:px-3 py-1 border border-gray-700 text-gray-400 rounded-full group-hover:border-green-400/50 group-hover:text-green-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="section min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-screen-xl w-full text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
            Get In Touch
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            I am actively seeking full-time and internship opportunities. I am also open to discussing graduate school opportunities and research collaborations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
            {/* Email Card */}
            <a 
              href="mailto:yugbpatel30@gmail.com"
              className="group p-6 sm:p-8 border border-gray-800 hover:border-green-400 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-green-400/10 transform hover:-translate-y-1"
            >
              <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-xs sm:text-sm">yugbpatel30@gmail.com</p>
            </a>
            
            {/* GitHub Card */}
            <a 
              href="https://github.com/pateyu"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 border border-gray-800 hover:border-green-400 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-green-400/10 transform hover:-translate-y-1"
            >
              <Github className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-xs sm:text-sm">@pateyu</p>
            </a>
            
            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/patel-yug"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 border border-gray-800 hover:border-green-400 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-green-400/10 transform hover:-translate-y-1"
            >
              <Linkedin className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-xs sm:text-sm">patel-yug</p>
            </a>
          </div>
          
          <div className="flex items-center justify-center mt-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">
                Open to work & graduate opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Built with React, Tailwind CSS, and lots of cha ☕
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2025 Yug Patel
          </p>
        </div>
      </footer>

      {/* Section Indicators - Hidden on mobile */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSection === index 
                  ? 'bg-green-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;