import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    title: "CS Student Ambassador",
    company: "Missouri University of Science and Technology",
    content: () => (
      <p>
        As a Computer Science Student Ambassador at Missouri S&T, I provide
        prospective students and their families with an inside look at the
        Computer Science program. My responsibilities include:
        <ul className="list-disc ml-5">
          <li>
            Campus Tours: Leading personalized tours of the Computer Science
            department, showcasing key facilities, labs, and resources.
          </li>
          <li>
            Curriculum Guidance: Assisting students in understanding the
            Computer Science degree curriculum, explaining course requirements,
            elective options, and helping them navigate potential academic
            paths.
          </li>
          <li>
            Class Planning: Offering insights into course selection and advising
            on how to structure their schedules to balance core requirements
            with electives, minors, or double majors.
          </li>
          <li>
            Q&A Sessions: Engaging with students and their parents to answer
            questions about the program, college life, and career prospects in
            the field of computer science.
          </li>
        </ul>
      </p>
    ),
    duration: "Mar 2024 - Present",
  },
  {
    title: "Undergraduate Researcher",
    company:
      "Missouri University of Science and Technology - Biological Sciences",
    content: () => (
      <p>
        Worked under Dr. Andrea Scharf to develop a comprehensive simulation
        program for modeling the life cycles of C. elegans. Designed and built a
        web application capable of running and comparing multiple simultaneous
        simulations, with integrated real-time data collection and
        visualization. Implemented a data pipeline for efficient data processing
        and storage, enabling in-depth analysis of simulation results. Currently
        expanding the system to include the predatory organism P. pacificus
      </p>
    ),
    duration: "Oct 2023 - Present",
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Missouri University of Science and Technology - Computer Science",
    content: () => (
      <p>
        In the Department of Computer Science, I worked with Dr. Madria and PhD
        student Ademola Adesokan. I annotated disaster-related tweets with
        metadata to enhance classification accuracy. I assisted in developing
        and implementing a machine learning model to classify tweets into
        different first responder categories: Firefighter, EMS, or Police. I
        created a web demo to visualize annotated tweets and model outputs.
        <br></br>
        <br></br>
        For the 2024-2025 academic school year, I was one of eleven student
        selected to receive the Dean's Undergraduate Research Scholarship. I
        will continue working with Dr. Madria, and my plan for this year is to
        build a model that can perform sentiment analysis on tweets and predict
        their political voting preferences.
        <br></br>
        <br></br>I am also continuing my NSF-REU work with Dr. Sid. After we get
        real-world task-performance and EEG/PPG data from participants, we will
        build and publish a paper on using a Convolutional Spiking Neural
        Network to predict cognitive workload.
      </p>
    ),
    duration: "Jan 2024 - Present",
  },
  {
    title: "Undergraduate Research Intern",
    company: "National Science Foundation (NSF)",
    content: () => (
      <p>
        During my NSF-REU internship under the mentorship of Dr. Sid Nadendla, I
        contributed to a research project aimed at enhancing soldier performance
        by understanding cognitive workload and physiological responses. In this
        role, I developed a testbed using Python and MATLAB to assess cognitive
        load in real-time, integrating EEG (Enobio 20) and PPG (Polar Verity
        Sense) sensors. Additionally, I led the front-end and back-end
        development for cognitive tasks such as the Flanker N-back and Multiple
        Object Tracking (MOT) tasks, using Python and JavaScript. My
        responsibilities also included developing efficient data processing and
        analysis pipelines to handle incoming EEG and PPG data in real-time.
      </p>
    ),
    duration: "May 2024 - Aug 2024",
  },
  {
    title: "Flooring Sales",
    company: "Menards",
    content: () => (
      <p>
        As a Flooring Salesman at Menards, I excelled in building strong
        customer relationships by actively listening to their needs and
        providing tailored recommendations. My communication and interpersonal
        skills allowed me to guide customers through the entire selection
        process, ensuring they found the perfect flooring solutions for their
        homes. I consistently met sales targets by fostering trust and
        delivering a satisfactory shopping experience that kept customers coming
        back.
      </p>
    ),
    duration: "Aug 2023 - Nov 2023",
  },
  {
    title: "Web Developer Intern",
    company: "InfoSoft Systems Inc.",
    content: () => (
      <p>
        Developed responsive web pages using HTML, CSS, and JavaScript, ensuring
        mobile responsiveness and optimized load times. Collaborated closely
        with the design team to create visually appealing and user-friendly
        interfaces, resulting in a 20% increase in user engagement. Integrated
        advanced analytics features, enabling the collection of user behavior
        data that improved decision-making efficiency and informed design
        adjustments, enhancing overall user experience.
      </p>
    ),
    duration: "Jun 2023 - Aug 2023",
  },
];


function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

function Experience() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="experience" className="py-32 text-center text-white">
      <motion.h2
        className="text-4xl font-bold mb-16 text-light-blue"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={`card-${exp.title}-${exp.company}-${id}`}
            onClick={() => setActive(exp)}
            className="p-8 flex flex-col justify-center rounded-xl cursor-pointer bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:bg-light-blue dark:hover:bg-light-blue h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center h-full justify-between">
              <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                {exp.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {exp.company}
              </p>
            </div>
          </motion.div>
        ))}
      </ul>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-md h-full w-full z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="fixed inset-0 overflow-y-auto z-[102]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center min-h-full p-4">
                <motion.div
                  ref={ref}
                  className="w-full max-w-[500px] sm:max-w-[40%] h-auto max-h-[70vh] sm:h-[50vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl shadow-lg p-8"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-4">
                    <h3 className="text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </h3>
                    <div className="mt-4 text-center">
                      <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        {active.company}
                      </p>
                      <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-2">
                        {active.duration}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 relative px-4 text-left overflow-y-auto max-h-[70vh]">
                    <div className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed dark:text-neutral-400">
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-32"></div>{" "}

    </section>
  );
}

export default Experience;