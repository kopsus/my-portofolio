"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// import { FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { webProjects } from "./data/webProject";
import { designProjects } from "./data/designProject";
import me from "../public/me.jpg";

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState<"web" | "design">("web");
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute animate-pulse w-2 h-2 bg-white/50 rounded-full top-1/3 left-1/4 blur-sm"></div>
        <div className="absolute animate-ping w-3 h-3 bg-white/30 rounded-full top-2/3 right-1/3 blur-sm"></div>
        <div className="absolute animate-pulse w-1.5 h-1.5 bg-white/40 rounded-full top-1/2 left-2/3 blur-sm"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-2xl p-8 sm:p-10 w-[90%] max-w-4xl flex flex-col items-center text-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/60 shadow-xl mb-4"
        >
          <img src={me} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

        {/* Name */}
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl drop-shadow-md">
          Tegar Setio
        </h1>

        {/* Role */}
        <p className="text-white/80 mt-2 text-lg sm:text-xl drop-shadow-sm">
          Full Stack Developer <span className="mx-1">•</span> UI/UX Designer
        </p>

        {/* Social Icons */}
        {/* <div className="flex gap-6 mt-6">
          <a
            href="https://wa.me/0882005090497"
            target="_blank"
            className="text-white/70 hover:text-white text-2xl transition hover:scale-105 duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:tegarsetio02@gmail.com"
            target="_blank"
            className="text-white/70 hover:text-white text-2xl transition hover:scale-105 duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/kopsus"
            target="_blank"
            className="text-white/70 hover:text-white text-2xl transition hover:scale-105 duration-300"
          >
            <FaGithub />
          </a>
        </div> */}

        {/* Tabs */}
        <div className="mt-8 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-inner gap-2 border border-white/30">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-6 py-2 rounded-full text-sm font-semibold cursor-pointer ${
              activeTab === "web"
                ? "bg-indigo-500 text-white shadow-lg"
                : "text-white/70 hover:bg-indigo-100/20"
            } transition-all`}
          >
            Web Projects
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-2 rounded-full text-sm font-semibold cursor-pointer ${
              activeTab === "design"
                ? "bg-indigo-500 text-white shadow-lg"
                : "text-white/70 hover:bg-indigo-100/20"
            } transition-all`}
          >
            Design Projects
          </button>
        </div>

        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {(activeTab === "web" ? webProjects : designProjects).map(
              (project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="group relative p-2 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Hover effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-md"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h2 className="text-lg font-bold drop-shadow-md">
                      {project.title}
                    </h2>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:translate-y-1/2 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </motion.a>
              )
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
