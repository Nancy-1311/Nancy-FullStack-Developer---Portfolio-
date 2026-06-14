import React from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: "Learning Management System",
    image:
      "https://images.unsplash.com/photo-1542744095-0d53267d353e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Full stack learning management platform with authentication, course management, secure backend APIs, user dashboards, and scalable MERN architecture.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
  },


   {
    title: "AI Career Coach Platform",
    image:
      "https://plus.unsplash.com/premium_photo-1726079248075-2b50954971fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Developed a full-stack AI-powered career preparation platform enabling users to practice mock interviews, analyze resumes, improve ATS scores, generate cover letters, build professional resumes, and receive personalized career roadmaps. Integrated Gemini AI for intelligent content generation, implemented JWT-based authentication, protected routes, PDF report generation, and analytics dashboards for interview performance tracking",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Gemini AI",
      "JWT Authentication",
      "Tailwind CSS",
      " REST APIs",
      "Recharts",
    ],
  },

  {
    title: "Luxury E-Commerce Website",
    image:
      "https://images.unsplash.com/photo-1763872011479-aa293bf083a8?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Developed a premium e-commerce platform for luxury fragrance products with product collections, featured products, shopping cart, wishlist, and user authentication functionality. Designed a responsive and visually appealing user interface with modern animations, seamless navigation, and optimized user experience. Implemented dynamic product management, state handling, and reusable React components to ensure scalability and maintainability.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "React Router",
      "Context API",
      "Responsive Design",
    ],
  },

  {
    title: "Kanban Board",
    image:
      "https://plus.unsplash.com/premium_photo-1682126252712-1d98e031a71a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Developed an interactive Kanban Board application for task and workflow management, enabling users to organize tasks across different stages such as To Do, In Progress, and Done. Implemented drag-and-drop functionality, dynamic task updates, and responsive UI components to improve productivity and workflow visualization. Built with modern React concepts and state management for a seamless user experience.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind Css",
      "HTML5",
      "React Hooks",
      "Vite",

    ],
  },

  {
    title: "Invoice Builder",
    image:
      "https://plus.unsplash.com/premium_photo-1679920155510-1f238318756e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Developed a responsive Invoice Builder web application that enables users to create, manage, and generate professional invoices in real time. Implemented dynamic invoice calculations, itemized billing, tax and total amount computation, and PDF export functionality. Designed an intuitive user interface with efficient state management to streamline invoice creation and improve user productivity.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "Vite",
      "React Hooks",
      "jsPDF",
      "Local Storage"
    ],
  },


];

const Projects = () => {
  return (
    <div id='projects' className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
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
              <img
                src={project.image}
                width={150}
                height={150}
                className="mb-6 rounded"
                alt={project.title}
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400">
                {project.description}
              </p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

