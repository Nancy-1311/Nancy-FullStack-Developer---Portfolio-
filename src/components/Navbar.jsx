import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between ">

        {/* Logo */}
        <a href="#home">
          <h1 className="text-3xl font-black tracking-tight bg-white bg-clip-text text-transparent hover:scale-105 transition duration-300"
          >
            NK
          </h1>
        </a>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-base font-extralight tracking-[0.08em] text-zinc-300 hover:text-cyan-400 transition duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Nancy-1311"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://profile.indeed.com/p/nancyn-r91xdby"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
          >
            <SiIndeed size={18} />
          </a>

          <a
            href="https://www.instagram.com/nancykhundia?igsh=MTc5azB5aDB6bmdmdQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

