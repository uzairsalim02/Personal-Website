/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const codeSnippet = `function greet() {
  console.log("Hello, World!");
}`;

const lines = codeSnippet.split("\n");

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const animateCode = async () => {
      for (let i = 0; i < lines.length; i++) {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: i * 0.5 },
        });
      }
    };
    animateCode();
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-100 text-text p-8 pt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-bold text-primary mb-4">
            Hi, I'm <span className="text-accent">Uzair Salim</span>
          </h1>
          <p className="text-xl mb-8">
            A passionate Computer Science student at Western University with experience in software development, AI, and team leadership.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/projects" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
              View Projects
            </Link>
            <Link href="/about" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition">
              Learn More About Me
            </Link>
            <Link href="/projects" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
              My Experience
            </Link>
          </div>
          <div className="mt-12 flex justify-center md:justify-start gap-6">
            <a href="https://github.com/uzairsalim02" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-primary hover:text-secondary transition" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-primary hover:text-secondary transition" />
            </a>
          </div>
        </div>

        {/* Right Side: Code Snippet Animation */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <pre className="text-sm text-gray-200 font-mono">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                className="whitespace-pre-wrap"
              >
                {line}
              </motion.div>
            ))}
            {/* Blinking Cursor */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1"
            >
              |
            </motion.span>
          </pre>
        </div>
      </div>
    </div>
  );
}