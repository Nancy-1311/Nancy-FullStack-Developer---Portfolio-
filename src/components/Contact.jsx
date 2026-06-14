"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
} from "lucide-react";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-neutral-800 py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.5em] text-zinc-500 text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Have a project in mind, an opportunity to discuss, or simply want
            to connect? I'm always open to meaningful conversations and exciting
            collaborations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center"
          >
            <Mail className="mx-auto mb-4 text-cyan-400" size={28} />

            <h3 className="text-white font-semibold mb-3">
              Email
            </h3>

            <a
              href="mailto:nancysingh8864@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              nancysingh8864@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center"
          >
            <Phone className="mx-auto mb-4 text-cyan-400" size={28} />

            <h3 className="text-white font-semibold mb-3">
              Phone
            </h3>

            <a
              href="tel:+916398255135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              +91 6398255135
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center"
          >
            <MapPin className="mx-auto mb-4 text-cyan-400" size={28} />

            <h3 className="text-white font-semibold mb-3">
              Location
            </h3>

            <p className="text-zinc-400">
              Gurgaon, India
            </p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5 mb-16"
        >
          <a
            href="https://github.com/Nancy-1311"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} />
          </a>

          <a
            href="https://profile.indeed.com/p/nancyn-r91xdby"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <SiIndeed size={20} />
          </a>

          <a
            href="https://www.instagram.com/nancykhundia?igsh=MTc5azB5aDB6bmdmdQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>

          <a
            href="mailto:nancysingh8864@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent mb-2">
            NANCY
          </h3>

          <p className="text-zinc-500 mb-4">
            Full Stack Developer
          </p>

          <p className="text-zinc-600 text-sm">
            © 2026 Nancy. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;




