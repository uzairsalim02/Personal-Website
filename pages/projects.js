import Link from "next/link";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Aura-Chart",
    description:
      "AI-powered medical scribe and billing assistant built for pediatric and family clinics. HIPAA-compliant automation that helps teams stay focused on care.",
    link: {
      href: "https://drive.google.com/file/d/1YRGE_xnhfZMSDSA-nV-yOXilLrsRDBe6/view?usp=drive_link",
      label: "Aura-Chart Demo",
    },
    preview: {
      gradient: "from-blue-600 via-indigo-500 to-cyan-400",
      label: "Clinical Workflow Automation",
      headline: "Instant SOAP notes & OHIP-ready billing",
      badges: ["Gemini Pro", "Deepgram", "Google Cloud"],
    },
  },
  {
    title: "AI Teaching Assistant",
    description:
      "Retrieval-augmented app that gives students instant answers sourced from their own course material. Built for always-on academic support.",
    link: {
      href: "https://drive.google.com/file/d/1sjZ65qkJFyRE9lZxRNFEvgpMkwUK4XHh/view?usp=drive_link",
      label: "Teaching Assistant Demo",
    },
    preview: {
      gradient: "from-purple-600 via-fuchsia-500 to-rose-400",
      label: "Learning Support",
      headline: "Conversational answers grounded in class notes",
      badges: ["GPT-4o mini", "FAISS", "RAG"],
    },
  },
  {
    title: "PulseStackAI Website",
    description:
      "High-impact landing experience for a health-tech startup revolutionizing clinical documentation. Parallax hero, service stories, and confident storytelling.",
    link: {
      href: "https://www.pulsestack.ai/",
      label: "Visit Website",
    },
    preview: {
      gradient: "from-slate-900 via-slate-800 to-slate-700",
      label: "Brand & Experience",
      headline: "Immersive launchpad for clinical AI innovation",
      badges: ["Responsive", "Parallax", "Story-driven"],
    },
  },
  {
    title: "Ancaster Pediatrics Website",
    description:
      "Warm, patient-first clinic site that gives families clarity on pediatric and breastfeeding services, schedules, and resources.",
    link: {
      href: "https://www.ancasterpediatrics.ca/",
      label: "Visit Website",
    },
    preview: {
      gradient: "from-teal-500 via-emerald-400 to-lime-300",
      label: "Patient Experience",
      headline: "Reassuring design for modern family care",
      badges: ["Accessible", "Responsive", "Content-first"],
    },
  },
];

const cardVariants = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: index * 0.08,
    },
  }),
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-100 text-text p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            Signature Work
          </span>
          <h2 className="text-4xl font-bold text-primary md:text-5xl">
            Portfolio
          </h2>
          <p className="text-lg text-text/80 md:max-w-2xl">
            A curated look at healthcare-focused products infused with human
            centered design, responsible AI, and measurable operational impact.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial="offscreen"
              animate="onscreen"
              custom={index}
              variants={cardVariants}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div
                  className={`relative mb-6 flex aspect-[5/3] flex-col justify-between overflow-hidden bg-gradient-to-br ${item.preview.gradient} p-6 text-white`}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
                    {item.preview.label}
                  </span>
                  <p className="text-xl font-semibold leading-snug md:text-2xl">
                    {item.preview.headline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.preview.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)] opacity-70" />
                </div>
                <div className="flex flex-1 flex-col gap-5 px-6 pb-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-base text-text/80">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center self-start rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-secondary"
                  >
                    {item.link.label}
                    <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}