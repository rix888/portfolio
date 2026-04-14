export function HeroSection() {
    return (
      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-16">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
        Senior Front-End Engineer
        </p>
  
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
        I build fast, scalable, user-focused web experiences.
        </h1>
  
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        I build responsive interfaces with React, Next.js, TypeScript, and TailwindCSS, with a focus on performance, accessibility, testing, and maintainable UI architecture.
        </p>
  
        <div className="mt-10 flex gap-4">
          <a
            href="/projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition"
          >
            View My Work
          </a>
  
          <a
            href="/resume.pdf" target="_blank" rel="noreferrer"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            View Resume
          </a>

        </div>
      </section>
    );
  }