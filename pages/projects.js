import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Speech to Text Chrome Extension",
    description: "A Chrome extension leveraging AssemblyAI's API for real-time speech-to-text transcription with a user-friendly overlay interface.",
  },
  {
    title: "AI-Driven Teaching Assistant",
    description: "An AI-powered tool that provides 24/7 support to students using Python, MongoDB, LangChain, and OpenAI's API.",
  },
  {
    title: "Recipe Management Terminal App",
    description: "A terminal-based app written in Java using SQLite to manage and organize recipes.",
  },
  {
    title: "Automated Crypto Trader",
    description: "A group project for cryptocurrency trading brokers to automate trades based on predefined rules.",
  },
  {
    title: "Raspberry Pi Bluetooth Attendance Tracker",
    description: "A terminal-based app written in C++ for Raspberry Pi to track attendance using Bluetooth devices.",
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-100 text-text p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-lg">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}