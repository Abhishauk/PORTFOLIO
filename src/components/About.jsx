import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const About = () => {
  return (
    <section className="section text-gradient py-8 md:py-16 px-4 md:px-8 lg:px-24" id="about">
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-24 flex flex-col items-center">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-no-repeat mix-blend-lighten mb-6 p-8 rounded-lg text-center "
        >
          <h2 className="text-4xl font-bold text-accent mb-4">About Me</h2>
          <h3 className="text-2xl text-white mb-6 max-w-[455px]">
            I'm a MERN Stack Developer with experience.
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-center"
        >
          <div>
            <p className="text-white">
              Hello, I'm a MERN stack developer. I specialize in MongoDB for
              databases, Express.js for server-side logic, React.js for
              dynamic front-end interfaces, and Node.js for server-side
              JavaScript. I'm passionate about crafting efficient web
              applications and thrive in collaborative, innovative
              environments. Let's build something great together!
            </p>
          </div>
          {/* Stats */}
    
        </motion.div>
      </div>
    </section>
  );
};

export default About;
