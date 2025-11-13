import Image from "next/image";
import profilePic from "../public/profile.png"; // Add an actual image
/* eslint-disable react/no-unescaped-entities */

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-16 text-center">
      <Image
        src={profilePic}
        alt="Uzair Salim"
        width={160}
        height={160}
        className="rounded-full border-4 border-white shadow-xl"
        priority
      />
      <div className="flex flex-col items-center gap-4">
        <span className="text-base font-semibold uppercase tracking-[0.3em] text-primary/80">
          Hi, I'm Uzair Salim
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-primary md:text-5xl">
          Building the next generation of AI tools for healthcare and education.
        </h1>
        <p className="max-w-2xl text-lg text-text/80">
          Founder of PulseStackAI, and creator of Aura-Chart, an AI-powered medical scribe for pediatric clinics.
        </p>
        <p className="max-w-2xl text-lg text-text/80">
          Passionate about human-centered design, intelligent systems, and the intersection of AI, medicine, and
          meaning.
        </p>
      </div>
    </section>
  );
}
