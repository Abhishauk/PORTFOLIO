/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const MySkills = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 70 },
    { name: "MongoDB", percentage: 80 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "APIs", percentage: 80 },
    { name: "Express", percentage: 75 },
    { name: "Git", percentage: 90 }
  ];

  return (
    <section className="section" id="my-skills">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* Skill Headings */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center"
          >
            <h2 className="h2 text-accent mb-6">My Skills</h2>
          </motion.div>
        </div>

        {/* Skill Boxes */}
        <div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-wrap gap-4 justify-center"
          >
            {skills.map((skill, index) =>
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-md text-center w-48"
              >
                {" "}{/* Set width for better alignment */}
                <h3 className="text-white text-lg font-bold">{skill.name}</h3>
                <div className="w-20 h-2 bg-gray-300 mt-2 rounded-full mx-auto">
                  {/* Progress */}
                  <div
                    className="h-full bg-pink-500 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                {/* Percentage Text */}
                <p className="text-white text-sm mt-2">{skill.percentage}%</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
