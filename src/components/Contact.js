import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
    <section id="contact" className="relative py-32 text-center text-white">
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
                animation: pathAnim-1 4s linear infinite;
              }
              @keyframes pathAnim-0 {
                0% { d: path("M 0,600 L 0,150 C 78.29665071770336,183.42583732057415 156.59330143540672,216.85167464114832 257,221 C 357.4066985645933,225.14832535885168 479.92344497607655,200.01913875598086 585,169 C 690.0765550239234,137.98086124401914 777.7129186602871,101.07177033492823 874,119 C 970.2870813397129,136.92822966507177 1075.2248803827752,209.69377990430624 1171,224 C 1266.7751196172248,238.30622009569376 1353.3875598086124,194.1531100478469 1440,150 L 1440,600 L 0,600 Z"); }
                50% { d: path("M 0,600 L 0,150 C 83.49282296650719,147.54066985645932 166.98564593301438,145.08133971291866 261,129 C 355.0143540669856,112.91866028708134 459.5502392344498,83.21531100478468 559,99 C 658.4497607655502,114.78468899521532 752.8133971291866,176.05741626794259 846,197 C 939.1866028708134,217.94258373205741 1031.1961722488038,198.555023923445 1130,184 C 1228.8038277511962,169.444976076555 1334.401913875598,159.7224880382775 1440,150 L 1440,600 L 0,600 Z"); }
                100% { d: path("M 0,600 L 0,150 C 78.29665071770336,183.42583732057415 156.59330143540672,216.85167464114832 257,221 C 357.4066985645933,225.14832535885168 479.92344497607655,200.01913875598086 585,169 C 690.0765550239234,137.98086124401914 777.7129186602871,101.07177033492823 874,119 C 970.2870813397129,136.92822966507177 1075.2248803827752,209.69377990430624 1171,224 C 1266.7751196172248,238.30622009569376 1353.3875598086124,194.1531100478469 1440,150 L 1440,600 L 0,600 Z"); }
              }
              @keyframes pathAnim-1 {
                0% { d: path("M 0,600 L 0,350 C 118.89952153110048,337.72248803827756 237.79904306220095,325.44497607655506 334,314 C 430.20095693779905,302.55502392344494 503.7033492822966,291.9425837320574 593,286 C 682.2966507177034,280.0574162679426 787.3875598086124,278.78468899521533 887,307 C 986.6124401913876,335.21531100478467 1080.7464114832537,392.9186602870813 1172,405 C 1263.2535885167463,417.0813397129187 1351.6267942583731,383.5406698564593 1440,350 L 1440,600 L 0,600 Z"); }
                50% { d: path("M 0,600 L 0,350 C 108.89952153110048,337.72248803827756 217.79904306220095,325.44497607655506 314,314 C 410.20095693779905,302.55502392344494 483.7033492822966,291.9425837320574 573,286 C 662.2966507177034,280.0574162679426 767.3875598086124,278.78468899521533 867,307 C 966.6124401913876,335.21531100478467 1060.7464114832537,392.9186602870813 1152,405 C 1243.2535885167463,417.0813397129187 1331.6267942583731,383.5406698564593 1420,350 L 1440,600 L 0,600 Z"); }
                100% { d: path("M 0,600 L 0,350 C 118.89952153110048,337.72248803827756 237.79904306220095,325.44497607655506 334,314 C 430.20095693779905,302.55502392344494 503.7033492822966,291.9425837320574 593,286 C 682.2966507177034,280.0574162679426 787.3875598086124,278.78468899521533 887,307 C 986.6124401913876,335.21531100478467 1080.7464114832537,392.9186602870813 1172,405 C 1263.2535885167463,417.0813397129187 1351.6267942583731,383.5406698564593 1440,350 L 1440,600 L 0,600 Z"); }
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
        animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
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

      {/* Footer should be inside the waves for mobile */}
      <footer className="mt-36 text-white-900 flex justify-center flex-col items-center">
        <p className="mb-1">© 2024 Yug Patel. All Rights Reserved.</p>
        <p className="mb-1">Email: yugbpatel30@gmail.com</p>
        <p className="mb-1">Discord: awmali</p>
      </footer>
    </section>
  );
};

export default Contact;
