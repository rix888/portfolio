import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-semibold text-white">
          <span className="sm:hidden">FD</span>
          <span className="hidden sm:inline">Frederick Dizon</span>
        </Link>

        {/* <nav className="flex items-center gap-6 text-sm text-zinc-400"> */}
        <nav className="flex items-center gap-3 md:gap-6 text-xs sm:text-sm text-zinc-400">
          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}