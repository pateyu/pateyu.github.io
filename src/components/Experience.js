import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "./useInView";
const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company:
      "Department of Biology, Missouri University of Science and Technology",
    content: () => (
      <p>
        Developed a comprehensive simulation program to model complex life
        cycles and behaviors of microorganisms in a dynamic environment, in
        collaboration with a team of biologists, ensuring biological accuracy.
        Designed and built a user-friendly web application capable of running
        and comparing multiple simulations concurrently, with integrated
        real-time data collection and visualization, facilitating
        cross-disciplinary research. Integrated an automated data pipeline with
        the web application for real-time data processing, storage, and
        analysis, improving efficiency and enabling deeper insights across
        biological models.
      </p>
    ),
    duration: "Oct 2023 - Present",
  },
  {
    title: "NSF-REU Research Intern",
    company: "Missouri University of Science and Technology",
    content: () => (
      <p>
        Engineered a testbed to assess cognitive load using real-time EEG (brain
        activity) and PPG (heart rate) sensor data, with precise synchronization
        of wearable devices to ensure high accuracy in data collection. Led the
        development of 2 out of 3 cognitive tasks, handling both frontend and
        backend components, resulting in enhanced performance and system
        efficiency. Integrated EEG (via MATLAB) and PPG (via BLE) sensors,
        enabling real-time physiological data capture and analysis for cognitive
        load prediction. Planned and initiated the development of a
        Convolutional Spiking Neural Network (CSNN) model to predict cognitive
        workload, leveraging EEG and PPG data for accurate real-time insights.
      </p>
    ),
    duration: "May 2024 - Aug 2024",
  },
  {
    title: "Undergraduate Researcher",
    company:
      "Department of Computer Science, Missouri University of Science and Technology",
    content: () => (
      <p>
        Web scraped and annotated over 27,000 disaster-related tweets with
        metadata (location, time, severity), applying text normalization and
        handling imbalanced data to build a high-quality dataset for first
        responder classification. Developed and fine-tuned a RoBERTa-based
        machine learning model that achieved an accuracy of up to 98% in
        classifying first responders across various crisis events. Built an
        interactive web application to visualize datasets and model predictions,
        improving accessibility and providing actionable insights for
        researchers and emergency responders.
      </p>
    ),
    duration: "Jan 2024 - Present",
  },
  {
    title: "Web Developer",
    company: "Infosoft Systems Inc.",
    content: () => (
      <p>
        Developed responsive web pages using HTML, CSS, and JavaScript, ensuring
        mobile responsiveness, optimized load times, and adherence to web
        accessibility standards. Collaborated closely with the design team to
        create visually appealing and user-friendly interfaces, resulting in a
        20% increase in user engagement. Integrated data analytics features to
        track user behavior, enabling data-driven decisions and real-time design
        adjustments that enhanced the overall user experience.
      </p>
    ),
    duration: "Jun 2023 - Aug 2023",
  },
  {
    title: "CS Student Ambassador",
    company: "Missouri University of Science and Technology",
    content: () => (
      <p>
        As a Computer Science Student Ambassador, I guide prospective students
        and their families through an insider’s perspective of the program. My
        responsibilities include:
        <ul className="list-disc ml-5">
          <li>
            Leading personalized tours, showcasing key Computer Science
            facilities and resources.
          </li>
          <li>
            Providing curriculum guidance and helping students navigate course
            requirements, electives, and academic paths.
          </li>
          <li>
            Advising on class planning to balance core requirements with
            electives, minors, or double majors.
          </li>
          <li>
            Engaging in Q&A sessions, answering questions about the program,
            college life, and career opportunities in computer science.
          </li>
        </ul>
      </p>
    ),
    duration: "Mar 2024 - Present",
  },
  {
    title: "Flooring Sales",
    company: "Menards",
    content: () => (
      <p>
        Delivered personalized customer service, providing tailored flooring
        recommendations that consistently met customer needs. Built strong
        customer relationships, which helped meet sales targets and fostered
        repeat business.
      </p>
    ),
    duration: "Aug 2023 - Nov 2023",
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
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.3 });

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
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 text-center overflow-x-hidden min-h-screen text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-16 text-light-blue"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={`card-${exp.title}-${exp.company}-${id}`}
            onClick={() => setActive(exp)}
            className="p-12 flex flex-col justify-center rounded-xl cursor-pointer bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:bg-light-blue dark:hover:bg-light-blue h-64"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
                  className="w-full max-w-[700px] sm:max-w-[40%] h-auto max-h-[70vh] sm:h-[70vh] flex flex-col justify-center bg-white dark:bg-neutral-900 sm:rounded-3xl shadow-lg p-12"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col items-center text-center h-[40%] justify-center">
                    <h3 className="text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </h3>
                    <div className="mt-4">
                      <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        {active.company}
                      </p>
                      <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-2 pb-3">
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
      <div className="mb-32"></div>
    </section>
  );
}

export default Experience;
