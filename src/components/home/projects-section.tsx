export function ProjectsSection() {
    return (
      <section id="projects" className="border-t border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Projects that demonstrate modern front-end development, reusable
              components, testing, and performance-focused implementation.
            </p>
          </div>
  
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Project 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  Portfolio Website
                </h3>
  
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Built a production-ready portfolio using Next.js with server-side rendering. 
                  Focused on clean component architecture, performance optimization, and 
                  modern UI implementation using TailwindCSS and TypeScript.
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>TailwindCSS</span>
                  <span>Jest</span>
                  <span>RTL</span>
                </div>
  
                <ul className="mt-5 space-y-2 text-sm text-zinc-400">
                  <li>• Server-rendered architecture</li>
                  <li>• Reusable UI components</li>
                  <li>• Component testing setup</li>
                </ul>

                <p className="mt-4 text-xs text-zinc-500">
                  Demonstrates component architecture, performance awareness, and modern front-end workflows.
                </p>      
              </div>
  
              <div className="mt-6 flex gap-4 text-sm">
                <a href="https://portfolio-orpin-eight-45.vercel.app" className="text-white transition hover:text-zinc-300">
                  View Live →
                </a>
                <a href="https://github.com/rix888/portfolio" className="text-white transition hover:text-zinc-300">
                  View Code →
                </a>
              </div>
            </div>
  
            {/* Project 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  Product Explorer App
                </h3>
  
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Built a product browsing experience with filtering, search, and
                  API data integration. Focused on performance optimization and
                  handling asynchronous data flows.
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Jest</span>
                </div>
  
                <ul className="mt-5 space-y-2 text-sm text-zinc-400">
                  <li>• Search + filtering UX</li>
                  <li>• Async data handling</li>
                  <li>• Performance improvements</li>
                </ul>
              </div>
  
              <div className="mt-6 flex gap-4 text-sm">
                <a href="#" className="text-white transition hover:text-zinc-300">
                  Live Demo
                </a>
                <a href="#" className="text-white transition hover:text-zinc-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }