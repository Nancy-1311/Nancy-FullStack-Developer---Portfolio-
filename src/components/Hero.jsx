import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
    },
  },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="border-b border-neutral-900 pb-16 pt-28 lg:pb-24 lg:pt-36"
    >
      <div className="flex flex-wrap items-center">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* NAME */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight sm:text-7xl lg:mt-16 lg:text-8xl xl:text-9xl"
            >
              NANCY
            </motion.h1>

            {/* ROLE */}
            <motion.h2
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-violet-400 to-purple-600 bg-clip-text text-transparent text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl"
            >
              Full Stack Developer
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-2xl text-base leading-relaxed tracking-normal text-neutral-300 sm:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* DOWNLOAD RESUME BUTTON */}
            <motion.div
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <a
                href="/Nancy%20Resume%20(2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-8 py-3 text-sm font-medium text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Download Resume
              </a>
            </motion.div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="mt-12 flex justify-center lg:mt-0">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{
                scale: 1.03,
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />

              <img
                src={profilePic}
                alt="Nancy"
                className="relative z-10 w-full h-[500px] max-w-md object-contain transition-all duration-500 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

