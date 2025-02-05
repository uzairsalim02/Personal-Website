import Image from "next/image";
import profilePic from "../public/profile.png"; // Add an actual image
/* eslint-disable react/no-unescaped-entities */

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center p-10">
      <Image src={profilePic} alt="Uzair Salim" width={150} height={150} className="rounded-full" />
      <h1 className="text-3xl font-bold mt-4">Hi, I'm Uzair Salim 👋</h1>
      <p className="text-gray-400 max-w-lg mt-2">
        Computer Science student at Western University, passionate about AI, Software Development, and Automation.
      </p>
    </section>
  );
}
