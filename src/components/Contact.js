import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "./useInView";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef(null); // Create a ref
  const inView = useInView(contactRef, { threshold: 0.3 }); // Track inView status

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    });
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative py-32 text-center text-white"
    >
      {/* Waves inside the Contact section */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <style>
            {`
              .path-0 {
                animation: pathAnim-0 4s linear infinite;
              }
              .path-1 {
                animation: pathAnim-1 4s ease-in-out infinite;
              }
              @keyframes pathAnim-0 {
                0%, 100% {
                  d: path("M 0,600 L 0,150 C 78.29665071770336,183.42583732057415 156.59330143540672,216.85167464114832 257,221 C 357.4066985645933,225.14832535885168 479.92344497607655,200.01913875598086 585,169 C 690.0765550239234,137.98086124401914 777.7129186602871,101.07177033492823 874,119 C 970.2870813397129,136.92822966507177 1075.2248803827752,209.69377990430624 1171,224 C 1266.7751196172248,238.30622009569376 1353.3875598086124,194.1531100478469 1440,150 L 1440,600 L 0,600 Z");
                }
                50% {
                  d: path("M 0,600 L 0,150 C 83.49282296650719,147.54066985645932 166.98564593301438,145.08133971291866 261,129 C 355.0143540669856,112.91866028708134 459.5502392344498,83.21531100478468 559,99 C 658.4497607655502,114.78468899521532 752.8133971291866,176.05741626794259 846,197 C 939.1866028708134,217.94258373205741 1031.1961722488038,198.555023923445 1130,184 C 1228.8038277511962,169.444976076555 1334.401913875598,159.7224880382775 1440,150 L 1440,600 L 0,600 Z");
                }
              }
              @keyframes pathAnim-1 {
                0%, 100% {
                  d: path("M 0,600 L 0,350 C 118.89952153110048,337.72248803827756 237.79904306220095,325.44497607655506 334,314 C 430.20095693779905,302.55502392344494 503.7033492822966,291.9425837320574 593,286 C 682.2966507177034,280.0574162679426 787.3875598086124,278.78468899521533 887,307 C 986.6124401913876,335.21531100478467 1080.7464114832537,392.9186602870813 1172,405 C 1263.2535885167463,417.0813397129187 1351.6267942583731,383.5406698564593 1440,350 L 1440,600 L 0,600 Z");
                }
                25% {
                  d: path("M 0,600 L 0,350 C 100.89952153110048,340.72248803827756 220.79904306220095,330.44497607655506 315,325 C 410.20095693779905,320.55502392344494 483.7033492822966,305.9425837320574 580,300 C 676.2966507177034,294.0574162679426 787.3875598086124,303.78468899521533 885,330 C 982.6124401913876,356.21531100478467 1070.7464114832537,380.9186602870813 1155,390 C 1240.2535885167463,399.0813397129187 1325.6267942583731,380.5406698564593 1440,350 L 1440,600 L 0,600 Z");
                }
                50% {
                  d: path("M 0,600 L 0,350 C 130.89952153110048,345.72248803827756 250.79904306220095,335.44497607655506 348,330 C 450.20095693779905,324.55502392344494 513.7033492822966,320.9425837320574 610,320 C 706.2966507177034,319.0574162679426 825.3875598086124,330.78468899521533 925,355 C 1022.6124401913876,379.21531100478467 1110.7464114832537,400.9186602870813 1205,410 C 1300.2535885167463,419.0813397129187 1395.6267942583731,385.5406698564593 1440,350 L 1440,600 L 0,600 Z");
                }
                75% {
                  d: path("M 0,600 L 0,350 C 108.89952153110048,340.72248803827756 230.79904306220095,330.44497607655506 330,325 C 428.20095693779905,320.55502392344494 495.7033492822966,308.9425837320574 590,305 C 684.2966507177034,301.0574162679426 787.3875598086124,315.78468899521533 888,330 C 990.6124401913876,344.21531100478467 1080.7464114832537,378.9186602870813 1165,390 C 1250.2535885167463,401.0813397129187 1341.6267942583731,377.5406698564593 1440,350 L 1440,600 L 0,600 Z");
                }
              }
            `}
          </style>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#00d084"></stop>
              <stop offset="95%" stopColor="#0693e3"></stop>
            </linearGradient>
          </defs>

          <path
            className="path-0"
            d="M 0,600 L 0,150 C 78.29665071770336,183.42583732057415 156.59330143540672,216.85167464114832 257,221 C 357.4066985645933,225.14832535885168 479.92344497607655,200.01913875598086 585,169 C 690.0765550239234,137.98086124401914 777.7129186602871,101.07177033492823 874,119 C 970.2870813397129,136.92822966507177 1075.2248803827752,209.69377990430624 1171,224 C 1266.7751196172248,238.30622009569376 1353.3875598086124,194.1531100478469 1440,150 L 1440,600 L 0,600 Z"
            fill="url(#gradient)"
            fillOpacity="0.53"
          ></path>

          <path
            className="path-1"
            d="M 0,600 L 0,350 C 118.89952153110048,337.72248803827756 237.79904306220095,325.44497607655506 334,314 C 430.20095693779905,302.55502392344494 503.7033492822966,291.9425837320574 593,286 C 682.2966507177034,280.0574162679426 787.3875598086124,278.78468899521533 887,307 C 986.6124401913876,335.21531100478467 1080.7464114832537,392.9186602870813 1172,405 C 1263.2535885167463,417.0813397129187 1351.6267942583731,383.5406698564593 1440,350 L 1440,600 L 0,600 Z"
            fill="url(#gradient)"
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-light-blue">Contact Me</h2>
        {submitted ? (
          <p className="text-lg text-light-blue">Thank you for your message!</p>
        ) : (
          <motion.form
            action="https://formspree.io/f/mblrblzy"
            method="POST"
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-700 p-8 rounded-lg shadow-lg relative"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <label
              htmlFor="name"
              className="block text-left text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mb-4 rounded-md bg-gray-800 border border-gray-600 text-white"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="email"
              className="block text-left text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mb-4 rounded-md bg-gray-800 border border-gray-600 text-white"
              placeholder="Your Email"
              required
            />
            <label
              htmlFor="message"
              className="block text-left text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 mb-4 rounded-md bg-gray-800 border border-gray-600 text-white"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-light-blue text-dark-navy px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-dark-navy transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </motion.div>

      <footer className="mt-36 text-white-900 flex justify-center flex-col items-center">
        <p className="mb-1">© 2024 Yug Patel. All Rights Reserved.</p>
        <p className="mb-1">Email: yugbpatel30@gmail.com</p>
        <p className="mb-1">Discord: awmali</p>
      </footer>
    </section>
  );
};

export default Contact;
