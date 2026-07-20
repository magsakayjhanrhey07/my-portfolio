"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl mx-auto px-6 pt-10 pb-8"
    >
      <div className="flex items-center gap-6">
        <img
          src="/avatar.jpg"
          alt="Jhan Rhey S. Magsakay"
          className="w-28 h-28 rounded-full object-cover border-4 border-purple-500/60 flex-shrink-0"
        />
        <div>
          <h1 className="text-2xl font-bold leading-snug">
            Hey, I'm Jhan Rhey. Aspiring Junior QA Engineer.{" "}
            <span className="inline-flex items-center gap-1 align-middle text-xs bg-emerald-900/40 text-emerald-400 px-2 py-1 rounded-full border border-emerald-700 ml-1">
              Open to work
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
            <span className="flex items-center gap-1">Plaridel, Bulacan</span>
            <a href="mailto:MagsakayJhanrhey07@gmail.com" className="flex items-center gap-1 hover:text-white">
              Email
            </a>
            <span className="flex items-center gap-1">+639364529721</span>
            <a href="https://www.linkedin.com/in/jhan-rhey-magsakay-300920416/" className="flex items-center gap-1 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/yourname" className="flex items-center gap-1 hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-lg">
        Computer Engineering graduate with hands-on QA experience gained during OJT — testing web applications, identifying bugs, verifying functionality, and documenting issues across multiple client sites. Strong foundation in Python, JavaScript, and version control (Git/GitHub). Looking to start my career as a Junior QA Engineer and grow into automation testing.
      </p>

      <a href="/Resume-Magsakay, Jhan Rhey S..pdf" download className="inline-flex items-center gap-2 text-sm px-4 py-2 mt-5 rounded-full bg-emerald-700 hover:bg-emerald-600 transition text-white font-medium">
        Download Resume
      </a>
    </motion.section>
  );
}