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
    <section id="contact" className="py-20 text-center h-screen   text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-light-blue">Contact Me</h2>
        {submitted ? (
          <p className="text-lg text-light-blue">Thank you for your message!</p>
        ) : (
          <form
            action="https://formspree.io/f/mblrblzy"
            method="POST"
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-700 p-8 rounded-lg shadow-lg"
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
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
