import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold text-white">
          Frederick Dizon
        </Link>

        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>

          <a
            href="/resume.pdf"
            className="rounded-full border border-white/10 px-4 py-2 text-zinc-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}