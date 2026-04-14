export default function ContactPage() {
    return (
      <main className="min-h-screen">
        <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Contact
          </p>
  
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Let’s connect.
          </h1>
  
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I’m open to front-end engineering opportunities, product-focused web
            work, and conversations around performance, accessibility, and modern
            UI development.
          </p>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a
              href="mailto:rickybdizon@gmail.com"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h2 className="text-lg font-semibold text-white">Email</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                rickybdizon@gmail.com
              </p>
            </a>
  
            <a
              href="https://linkedin.com/in/frederickdizon"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h2 className="text-lg font-semibold text-white">LinkedIn</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Connect with me professionally
              </p>
            </a>
  
            <a
              href="https://github.com/rix888/portfolio"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h2 className="text-lg font-semibold text-white">GitHub</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                View the code behind this project
              </p>
            </a>
          </div>
        </section>
      </main>
    );
  }