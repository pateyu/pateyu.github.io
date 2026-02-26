import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Download,
  ArrowRight
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "FlightNet",
      description: "A Graph Neural Network (GNN) to model and predict flight delay propagation across the U.S. aviation network. Achieved 10x lower prediction error than a strong XGBoost baseline.",
      tech: ["PyTorch Geometric", "GNN", "Pandas"],
      github: "https://github.com/pateyu/FlightNet",
    },
    {
      title: "Cognitive Workload Testbed",
      description: "Reconfigurable testbed assessing cognitive workload by synchronizing multi-modal data from EEG and PPG sensors with customizable cognitive tasks.",
      tech: ["Python", "MATLAB", "JavaScript"],
      github: "https://github.com/sid-nadendla/CogWorkload_ReconfigTestbed",
      paper: "https://nemo.asee.org/public/conferences/365/papers/49221/view",
    },
    {
      title: "StudyBot",
      description: "A serverless Discord bot with Canvas integration, providing students with real-time access to assignments and announcements.",
      tech: ["Python", "AWS Lambda", "DynamoDB"],
      github: "https://github.com/pateyu/AmrtyuBot",
    },
    {
      title: "HomeLab",
      description: "Personal Linux server with Docker-managed services for media, cloud, and development. Hosted local LLMs with RAG pipelines for personal AI assistants.",
      tech: ["Docker", "Linux", "LLaMA", "Nextcloud"],
      static: true,
    },
    {
      title: "PiNet",
      description: "Configured a Raspberry Pi hub using Home Assistant to automate IoT devices, deploying Pi-hole for ad-blocking and Grafana for network monitoring.",
      tech: ["Raspberry Pi", "Home Assistant", "Grafana"],
      static: true,
    },
    {
      title: "Savorly",
      description: "Social platform for recipe sharing where users build a personal 'digital cookbook' by publishing creations or saving favorites.",
      tech: ["Flask", "SQLite", "Tailwind CSS"],
      github: "https://github.com/pateyu/Savorly",
    },
    {
      title: "Linkm.e",
      description: "A full-stack link-in-bio website with user authentication, link management, and public profiles.",
      tech: ["React", "TypeScript", "Supabase"],
      github: "https://github.com/pateyu/linkm.e",
    },
    {
      title: "CLAIA",
      description: "CLI tool utilizing the OpenAI API to generate code, draft text, and execute shell commands through natural language prompts.",
      tech: ["JavaScript", "Node.js", "OpenAI API"],
      github: "https://github.com/pateyu/CLAIA",
    },
  ];

  const experiences = [
    {
      title: "Computer Vision/Data Science Co-op",
      company: "Hunter Engineering Company",
      period: "May 2025 – Jan 2026",
      description: "Enhanced ANPR system by fine-tuning YOLOv9 and adding a Vision Transformer, boosting accuracy by 10%. Built active learning pipelines cutting manual annotation by 75%.",
    },
    {
      title: "Machine Learning Programmer",
      company: "U.S. Geological Survey (USGS)",
      period: "Jan 2025 – Aug 2025",
      description: "Developed automated ML workflows for large-scale geospatial analysis, reducing processing time from weeks to hours. Engineered a feature extraction pipeline for terabyte-scale data.",
    },
    {
      title: "CS Research Intern",
      company: "National Science Foundation",
      period: "May 2024 – Aug 2024",
      description: "Designed a low-latency multi-modal EEG/PPG acquisition platform. Built real-time signal processing pipelines and implemented an on-device Convolutional Spiking Neural Network.",
    },
    {
      title: "Undergrad Research Assistant (CS)",
      company: "Missouri S&T",
      period: "Jan 2024 – May 2024",
      description: "Developed a deep learning model to classify 47k+ disaster-related tweets, achieving 89% F1 and improving on baseline models by 33%.",
    },
    {
      title: "Undergrad Research Assistant (Bio)",
      company: "Missouri S&T",
      period: "Aug 2023 – Mar 2024",
      description: "Led computational simulations of C. elegans reproductive cycles and trained a YOLOv8 model to automate classification of larval stages.",
    }
  ];

//   const writings = [
//     {
//       title: "Fine-tuning YOLOv9 for Edge Devices",
//       date: "Feb 2026",
//       description: "A deep dive into optimizing object detection models for real-time inference on constrained hardware.",
//       link: "#" 
//     },
//     {
//       title: "Building a Serverless Discord Bot with AWS",
//       date: "Nov 2025",
//       description: "Lessons learned while migrating AmrtyuBot to AWS Lambda and DynamoDB for zero-maintenance scaling.",
//       link: "#"
//     }
//   ];

  const navItems = ["about", "experience", "projects"];

  return (
    <div className="bg-[#050505] text-gray-400 font-mono min-h-screen selection:bg-green-400/20 selection:text-green-400 antialiased">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md py-5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <div className="text-sm cursor-pointer" onClick={scrollToTop}>
            <span className="text-green-400 font-medium">yug@portfolio</span>
            <span className="text-gray-600 ml-1">~$</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-gray-500 hover:text-green-400 transition-colors lowercase"
              >
                {item}
              </button>
            ))}
            <a 
              href="/Yug_Patel_Resume.pdf" 
              download 
              className="text-sm text-gray-400 hover:text-green-400 border border-gray-800 hover:border-green-400/50 px-3 py-1 rounded transition-all lowercase"
            >
              resume
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-green-400 transition-colors">
            {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#050505] px-6 py-4 flex flex-col space-y-4 border-b border-gray-900 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left text-sm text-gray-400 hover:text-green-400 lowercase"
              >
                {item}
              </button>
            ))}
            <a 
              href="/Yug_Patel_Resume.pdf" 
              download 
              className="text-left text-sm text-gray-400 hover:text-green-400 lowercase"
            >
              resume
            </a>
          </div>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-32 space-y-28">
        
        {/* About Section */}
        <section id="about" className="pt-12 scroll-mt-32">
            <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-10">
                <div className="flex-1">
                
                <h1 className="text-3xl md:text-4xl text-green-400 font-bold mb-6 tracking-tight">
                    Yug Patel
                </h1>
                
                <p className="text-sm leading-relaxed text-gray-400 mb-8 max-w-2xl">
                    Computer Science student at Missouri S&T graduating Spring 2026. 
                    Currently building computer vision systems, automated ML workflows, and exploring deep learning architectures.
                </p>
                
                <div className="flex items-center space-x-6">
                    <a href="https://github.com/pateyu" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-400 transition-colors" aria-label="GitHub">
                    <Github size={18} strokeWidth={1.5} />
                    </a>
                    <a href="https://www.linkedin.com/in/patel-yug" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-400 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a href="mailto:yugbpatel30@gmail.com" className="text-gray-500 hover:text-green-400 transition-colors" aria-label="Email">
                    <Mail size={18} strokeWidth={1.5} />
                    </a>
                    <a href="/Yug_Patel_Resume.pdf" download className="text-gray-500 hover:text-green-400 transition-colors" aria-label="Download Resume">
                    <Download size={18} strokeWidth={1.5} />
                    </a>
                </div>
                </div>

                {/* Profile Picture */}
                <div className="w-32 h-32 md:w-44 md:h-44 shrink-0">
                <img 
                    src="/linkedin.jfif" 
                    alt="Yug Patel" 
                    className="w-full h-full object-cover rounded-full border border-gray-800 p-1" 
                />
                </div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <h2 className="text-lg font-bold text-gray-100 mb-10 tracking-tight">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-2 md:gap-8 group">
                <div className="text-sm text-green-400/90 font-medium pt-1">{exp.period}</div>
                <div className="md:col-span-3">
                  <h3 className="text-gray-200 text-base font-medium mb-1 group-hover:text-green-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-gray-500 text-sm mb-3">{exp.company}</div>
                  <p className="text-sm leading-relaxed text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <h2 className="text-lg font-bold text-gray-100 mb-10 tracking-tight">Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-2 md:gap-8 group">
                 <div className="text-xs text-green-400/80 pt-1.5 leading-relaxed md:pr-4">
                  {project.tech.join(" • ")}
                </div>
                
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-gray-200 text-base font-medium group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
                          <Github size={16} strokeWidth={1.5} />
                        </a>
                      )}
                      {project.paper && (
                        <a href={project.paper} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
                          <ExternalLink size={16} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writing / Blog Section
        <section id="writing" className="scroll-mt-32">
          <h2 className="text-lg font-bold text-gray-100 mb-10 tracking-tight">Writing</h2>
          <div className="space-y-12">
            {writings.map((post, index) => (
              <a 
                key={index} 
                href={post.link} 
                className="grid md:grid-cols-4 gap-2 md:gap-8 group block"
              >
                <div className="text-sm text-gray-500 font-medium pt-1 transition-colors group-hover:text-gray-400">
                  {post.date}
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-gray-200 text-base font-medium group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-400" strokeWidth={2} />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section> */}

      </main>

      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-900/50 mt-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Yug Patel. 
           {/* Views are my own, not my employer's. */}
          </p>
          <a 
            href="mailto:yug.patel@zohomail.com" 
            className="hover:text-green-400 transition-colors"
          >
            yug.patel@zohomail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;