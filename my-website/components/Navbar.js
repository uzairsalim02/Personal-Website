import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary/90 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold hover:text-accent transition">
          Uzair Salim
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="text-white hover:text-accent transition hover:scale-105">
            About Me
          </Link>
          <Link href="/projects" className="text-white hover:text-accent transition hover:scale-105">
            Projects
          </Link>
          <Link href="/experience" className="text-white hover:text-accent transition hover:scale-105">
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}