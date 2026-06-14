import React from "react";
import { motion } from "framer-motion";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiGreensock,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  {
    icon: <SiHtml5 className="text-7xl text-orange-500" />,
    name: "HTML5",
    duration: 2,
  },
  {
    icon: <SiCss3 className="text-7xl text-blue-500" />,
    name: "CSS3",
    duration: 2.2,
  },
  {
    icon: <SiJavascript className="text-7xl text-yellow-400" />,
    name: "JavaScript",
    duration: 2.4,
  },
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    name: "React.js",
    duration: 2.6,
  },
  {
    icon: <TbBrandNextjs className="text-7xl text-white" />,
    name: "Next.js",
    duration: 2.8,
  },
  {
    icon: <BiLogoTailwindCss className="text-7xl text-cyan-300" />,
    name: "Tailwind CSS",
    duration: 3,
  },
  {
    icon: <SiBootstrap className="text-7xl text-purple-500" />,
    name: "Bootstrap",
    duration: 3.2,
  },
  {
    icon: <FiFramer className="text-7xl text-pink-400" />,
    name: "Framer Motion",
    duration: 3.4,
  },
  {
    icon: <SiGreensock className="text-7xl text-green-400" />,
    name: "GSAP",
    duration: 3.6,
  },
  {
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    name: "Node.js",
    duration: 3.8,
  },
  {
    icon: <SiExpress className="text-7xl text-neutral-300" />,
    name: "Express.js",
    duration: 4,
  },
  {
    icon: <SiMongodb className="text-7xl text-green-600" />,
    name: "MongoDB",
    duration: 4.2,
  },
];

const Tech = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="flex w-40 flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            {tech.icon}

            <p className="mt-4 text-center text-sm font-medium text-neutral-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
