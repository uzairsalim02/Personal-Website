import { motion } from "framer-motion";
import { FaHeartbeat, FaLaptopCode, FaUsers, FaFlask } from "react-icons/fa";


const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Pulse Stack",
      duration: "May 2025 – September 2025",
      description: [
        "Designed and implemented a full-stack platform with a React.js client, Python services, PostgreSQL, and Google Cloud (Cloud Run, Firestore, Speech-to-Text).",
        "Integrated OpenAI GPT-4 and Gemini models with tailored prompt engineering to produce accurate, clinician-ready notes and streamline workflows.",
        "Built SQL-driven ingestion and retrieval in Postgres—upserts, JSONB document storage, indexing, and pgvector—for a production-grade RAG medication knowledge base.",
        "Led user-focused discovery, collected clinician feedback, and iterated on UX flows to increase adoption across multiple clinics.",
        "Implemented AES-256 encryption, credential hashing, and secure data storage patterns to meet healthcare compliance requirements.",
        "Co-founded and led delivery of a medical AI assistant (Chrome extension + FastAPI backend) deployed in clinics, reducing physician charting time by 60%.",
        "Leveraged rapid self-learning to ship production features across engineering, product design, and client communication under tight timelines.",
      ],
      icon: <FaHeartbeat className="text-4xl text-primary" />,
    },
    {
      title: "Software Engineer Intern",
      company: "AudienceView",
      duration: "September 2023 – August 2024",
      description: [
        "Contributed to the development of AudienceView Unlimited, a highly configurable event ticketing platform, by working on front-end, back-end, and DevOps tasks.",
        "Developed new features to enhance customer usability, including a seat upgrade functionality and optimizing the purchase flow by streamlining delivery method selection, improving efficiency for thousands of users.",
        "Gained exposure to payment integration systems and led the investigation and resolution of issues related to the CyberSource payment gateway, which improved transaction reliability.",
        "Conducted quality assurance by testing software updates, contributing to a unified payments service release, and developing automated scripts to streamline client migration to the Unified Payment Service (UPS).",
      ],
      icon: <FaLaptopCode className="text-4xl text-primary" />,
    },
    {
      title: "Developer Team Lead",
      company: "Western Developer’s Society",
      duration: "October 2022 – April 2023",
      description: [
        "Led a team of developers to build a website for a local business in London.",
        "Created the GitHub repository and managed it by reviewing pull requests and providing technical support to team members in setting up their environment.",
        "Conducted weekly meetings to ensure the project met requirements and deadlines.",
      ],
      icon: <FaUsers className="text-4xl text-primary" />,
    },
    {
      title: "Research Assistant",
      company: "Durham College AI Hub",
      duration: "June 2022 – September 2022",
      description: [
        "Contributed to the Brantford Bot project by creating flowcharts for the user experience to ensure the developers and the owner of Brantford Pediatrics were on the same page.",
        "Performed User Acceptance testing for the Brantford Bot Project and reported any issues on an Excel database.",
        "Participated in code cleanup and refactoring by assessing the time complexity of algorithms and improving them if possible, as well as removing unnecessary comments.",
      ],
      icon: <FaFlask className="text-4xl text-primary" />,
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

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-100 text-text p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    {experience.icon}
                    <div>
                    <h3 className="text-2xl font-bold text-secondary">
                        {experience.title} · {experience.company}
                    </h3>
                    <p className="text-gray-600">{experience.duration}</p>
                    </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                    {experience.description.map((point, i) => (
                    <li key={i} className="text-lg">
                        {point}
                    </li>
                    ))}
                </ul>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}