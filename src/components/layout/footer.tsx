export function Footer() {
    return (
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Frederick Dizon</p>
  
          <div className="flex items-center gap-4">
            <a
              href="mailto:rickybdizon@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
  
            <a
              href="https://linkedin.com/in/frederickdizon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
  
            <a
              href="#"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }