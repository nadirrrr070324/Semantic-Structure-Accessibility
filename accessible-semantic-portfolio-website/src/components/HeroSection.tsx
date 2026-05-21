import { personalInfo } from "../data/portfolio";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Decorative background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
      />

      {/* Radial gradient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]"
      />

      {/* Floating accent blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            {/* Status badge */}
            <div
              role="status"
              aria-label="Availability status: Open to work"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
              />
              Available for new opportunities
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-light mb-4">
              {personalInfo.title}
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); handleScroll("#projects"); }}
                aria-label="View my featured projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50"
              >
                View My Work
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
                aria-label="Go to contact form"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10">
              <span className="text-slate-500 text-sm">Find me on:</span>
              <nav aria-label="Social media links">
                <ul role="list" className="flex items-center gap-3">
                  {[
                    {
                      label: "GitHub profile",
                      href: personalInfo.github,
                      icon: (
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      label: "LinkedIn profile",
                      href: personalInfo.linkedin,
                      icon: (
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Twitter/X profile",
                      href: personalInfo.twitter,
                      icon: (
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <figure className="relative">
              {/* Decorative ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/20 blur-xl"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-full border border-sky-500/30"
              />
              <img
                src="/images/profile.jpg"
                alt="Alex Morgan — professional headshot"
                width={380}
                height={380}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top shadow-2xl shadow-sky-500/10"
                loading="eager"
                decoding="async"
              />
              {/* Stats badge */}
              <div
                aria-label="6 years of experience"
                className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-0 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="text-xs text-slate-400">Years Exp.</p>
              </div>
            </figure>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
