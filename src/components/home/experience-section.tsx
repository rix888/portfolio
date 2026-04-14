export function ExperienceSection() {
    return (
      <section className="border-t border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Selected experience
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Highlights from roles focused on performance, conversion,
              accessibility, and front-end leadership.
            </p>
          </div>
  
          <div className="mt-12 grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Senior Manager, Front End Engineering
                  </h3>
                  <p className="text-sm text-zinc-400">Volt Lighting</p>
                </div>
                <p className="text-sm text-zinc-500">2022 – March 2026</p>
              </div>
  
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Led front-end initiatives including a Magento migration to Hyvä,
                improving performance and Core Web Vitals. Built scalable UI
                components and optimized product display logic for improved
                merchandising flexibility.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Senior Manager, Front End Engineering
                  </h3>
                  <p className="text-sm text-zinc-400">
                    University of Arizona Global Campus
                  </p>
                </div>
                <p className="text-sm text-zinc-500">2020 – 2022</p>
              </div>
  
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Led front-end development for marketing platforms, improved
                conversion rates through experimentation, and maintained
                accessibility standards above industry benchmarks.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Front-End Web Specialist
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Seminole Hard Rock Hotel & Casino
                  </p>
                </div>
                <p className="text-sm text-zinc-500">2018 – 2019</p>
              </div>
  
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Improved mobile UX performance, reducing bounce rate and
                increasing engagement. Developed interactive features and
                implemented analytics tracking for marketing performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }