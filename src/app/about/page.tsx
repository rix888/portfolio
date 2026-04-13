export default function AboutPage() {
    return (
      <main className="min-h-screen">
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            About
          </p>
  
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Front-end engineering with a strong focus on performance, usability,
            and maintainable UI systems.
          </h1>
  
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I’m a Senior Front-End Engineer / Engineering Manager with 9+ years
              of experience building high-performance, conversion-focused web
              applications and leading distributed teams.
            </p>
  
            <p>
              My work has focused on modern front-end development, responsive UI
              architecture, accessibility, experimentation, and performance
              optimization across marketing and product-focused experiences.
            </p>
  
            <p>
              I enjoy building fast, scalable, user-focused interfaces that are
              technically sound, visually polished, and grounded in real business
              outcomes.
            </p>
          </div>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">Performance</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Focused on Core Web Vitals, responsive performance, and efficient
                front-end implementation.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">Accessibility</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Experienced building accessible, compliant experiences across
                browsers, devices, and assistive technologies.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">Testing</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Comfortable using Jest and React Testing Library to support
                reliable, production-ready UI development.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }