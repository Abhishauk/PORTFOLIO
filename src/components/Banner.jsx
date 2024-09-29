import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex flex-col items-center justify-center bg-light-border py-6 lg:py-12 px-4 lg:px-24"
      id="home"
    >
      <div className="container mx-auto py-6 lg:py-12 px-4 lg:px-24 ">
        <div className="text-center font-secondary p-6 border-light-border rounded-lg">
          <motion.img
            src={require("../assets/profile-pic.png")}
            alt="Profile Picture"
            className="rounded-full w-32 h-32 lg:w-48 lg:h-48 mb-4 mx-auto"
          />

          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[42px] font-bold leading-[0.8] lg:text-[72px] text-accent"
          >
            <span>ABHISHA UK</span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-5 mb-6 text-[30px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1] text-white"
          >
            <span className="mr-4">I am a</span>
            <TypeAnimation
              sequence={[
                "Mern Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node js Developer",
                2000
              ]}
              speed={50}
              className="text-accent text-pink-500"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0 text-white"
          />
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center mb-12 mx-auto lg:mx-0"
          >
            <div className="flex items-center gap-x-4">
              {" "}<button
                type="button"
                className="flex items-center text-pink-500 hover:text-white border border-white hover:pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-500"
              >
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer text-white font-secondary"
                >
                  Contact
                </Link>
              </button>
              <button
                type="button"
                className="flex items-center justify-center text-pink-500 hover:text-white border border-pink-500 hover:pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-500"
              >
                <a
                  href="/AbhishaUK.pdf"
                  className="cursor-pointer text-white font-secondary"
                  download="Abhisha-uk.pdf"
                >
                  Resume
                </a>
              </button>
            </div>
            <div className="flex items-center justify-center text-[20px] gap-x-6 mt-5">
              <a href="https://github.com/Abhishauk" className="text-accent">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abhisha-uk-8a32aa258/"
                className="text-accent"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:ukabhisha@gmail.com" className="text-accent">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
