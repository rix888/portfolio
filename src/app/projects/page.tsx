export default function ProjectsPage() {
    return (
      <main className="min-h-screen">
        <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Projects
          </p>
  
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Selected work
          </h1>
  
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A selection of front-end work focused on performance, reusable UI,
            maintainable architecture, and polished user experience.
          </p>
  
          <div className="mt-12 grid gap-6">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Portfolio Website
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                    Built a production-ready portfolio using Next.js, TypeScript, and TailwindCSS. Focused on clean component architecture, responsive UI implementation, multi-page routing, and deployment through Vercel with a GitHub-based workflow.
                  </p>
                </div>
              </div>
  
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>TailwindCSS</span>
                <span>Vercel</span>
                <span>GitHub</span>
              </div>
  
              <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                <li>• Component-based architecture</li>
                <li>• Reusable homepage and layout sections</li>
                <li>• Multi-page routing with App Router</li>
                <li>• Live deployment with auto-deploy workflow</li>
              </ul>
  
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://portfolio-orpin-eight-45.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-zinc-300"
                >
                  View Live →
                </a>
                <a
                  href="https://github.com/rix888/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-zinc-300"
                >
                  View Code →
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    );
  }