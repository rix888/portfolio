export function SkillsSection() {
    return (
      <section className="border-t border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              What I build for
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              I focus on front-end systems that balance performance,
              accessibility, testing, and maintainable UI architecture.
            </p>
          </div>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-xl font-semibold text-white">Performance</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                I build for speed, stability, and strong Core Web Vitals with an
                emphasis on clean, scalable front-end implementation.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-xl font-semibold text-white">Accessibility</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                I care about usable, compliant experiences that work across
                browsers, devices, and assistive technologies.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-xl font-semibold text-white">Testing</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                I use Jest and React Testing Library to validate component
                behavior and support production-ready delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }