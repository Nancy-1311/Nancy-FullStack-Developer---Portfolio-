import React from "react";
import { motion } from "framer-motion";

const JOURNEY = [
  {
    year: "2023",
    role: "Started Programming",
    company: "Learning Phase",
    description:
      "Began my journey into web development by learning HTML, CSS, and JavaScript, building a strong foundation in programming fundamentals and responsive web design.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    year: "2024",
    role: "Frontend Development",
    company: "Frontend Journey",
    description:
      "Developed modern and responsive user interfaces using React.js, Next.js, Tailwind CSS, Bootstrap, GSAP, and Framer Motion while focusing on performance and user experience.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    year: "2025",
    role: "Full Stack Development",
    company: "MERN Stack",
    description:
      "Expanded into backend development with Node.js, Express.js, and MongoDB, building complete MERN stack applications with authentication, CRUD operations, and RESTful APIs.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Authentication",
    ],
  },
  {
    year: "2026",
    role: "Real-World Projects",
    company: "Project Development",
    description:
      "Built and deployed production-ready applications including a Portfolio Website, Kanban Board, Invoice Builder, Recipe CRUD Application, and Authentication & Authorization System.",
    technologies: [
      "Portfolio Website",
      "Learning Management System",
      "AI Coach Platform",
      "Luxury E-Commerce Website",
      "Kanban Board",
      "Invoice Builder",
      "Auth System",
    ],
  },
];

const Experience = () => {
  return (
    <div id="journey" className="border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Journey
      </motion.h2>

      <div>
        {JOURNEY.map((journey, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {journey.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {journey.role} -{" "}
                <span className="text-sm text-purple-100">
                  {journey.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400">
                {journey.description}
              </p>

              {journey.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;



