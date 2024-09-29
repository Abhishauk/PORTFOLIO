import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: ""
  });

  // New state for the popup message
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrorMessages({
      ...errorMessages,
      [name]: "" // Clear the error message when the user starts typing
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessages({
        name: formData.name ? "" : "Name is required",
        email: formData.email ? "" : "Email is required",
        message: formData.message ? "" : "Message is required"
      });
      return;
    }

    const user_id = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        user_id
      );

      console.log("EmailJS Response:", response);

      if (response && response.status === 200) {
        // Show the popup message
        setShowPopup(true);
        // Clear the form data
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setErrorMessages({
          message: "Failed to send email. Please try again."
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessages({
        message: "Error sending email. Please try again."
      });
    }
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="mt-20 lg:mt-96 py-96 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-widev text-white">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl p-6 pb-16 lg:pb-20 gap-y-6 flex flex-col items-start"
            onSubmit={handleSubmit}
          >
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ${errorMessages.name &&
                "border-red-500"}`}
              type="text"
              placeholder={errorMessages.name ? errorMessages.name : "Your name"}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ${errorMessages.email &&
                "border-red-500"}`}
              type="text"
              placeholder={errorMessages.email ? errorMessages.email : "Your email"}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              className={`lg:mb-10 mb-8 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none ${errorMessages.message &&
                "border-red-500"}`}
              type="text"
              name="message"
              id=""
              cols={30}
              rows={6}
              placeholder={errorMessages.message ? errorMessages.message : "Your Message"}
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-8 flex items-center text-pink-500 hover:text-white border border-white hover:pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-500"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">Thank You!</h2>
            <p>I will get back to you soon.</p>
            <button 
              onClick={closePopup} 
              className="mt-4 text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
