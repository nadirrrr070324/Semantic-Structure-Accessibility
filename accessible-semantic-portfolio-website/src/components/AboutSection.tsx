import { personalInfo, certifications, education } from "../data/portfolio";

const stats = [
  { value: "6+", label: "Years Experience", icon: "📅" },
  { value: "40+", label: "Projects Shipped", icon: "🚀" },
  { value: "100", label: "Lighthouse Score", icon: "♿" },
  { value: "1.2k+", label: "npm Downloads", icon: "📦" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 lg:py-32 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-16">
          <p aria-hidden="true" className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            About Me
          </h2>
          <div aria-hidden="true" className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 leading-relaxed">
                {personalInfo.bioExtended}
              </p>
            </div>

            {/* Contact info */}
            <address className="not-italic mt-8 space-y-3">
              <h3 className="text-white font-semibold mb-4">Get in touch directly</h3>
              {[
                {
                  icon: (
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email address",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: (
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone number",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
                },
                {
                  icon: (
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: personalInfo.location,
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex-shrink-0"
                  >
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      aria-label={`${item.label}: ${item.value}`}
                      className="text-slate-300 hover:text-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span aria-label={`${item.label}: ${item.value}`} className="text-slate-300">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </address>
          </div>

          {/* Stats, Education & Certs */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div
              aria-label="Career statistics"
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 text-center hover:border-sky-500/30 transition-colors"
                >
                  <p aria-hidden="true" className="text-2xl mb-1">{stat.icon}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span aria-hidden="true">🎓</span> Education
              </h3>
              {education.map((edu) => (
                <article
                  key={edu.id}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5"
                  aria-label={`${edu.degree} from ${edu.institution}`}
                >
                  <h4 className="text-white font-semibold">{edu.degree}</h4>
                  <p className="text-sky-400 text-sm mt-0.5">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.period} · {edu.honors}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.description}</p>
                </article>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span aria-hidden="true">🏅</span> Certifications
              </h3>
              <ul role="list" className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.id}
                    className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0"
                    />
                    <div>
                      <p className="text-white text-sm font-medium">{cert.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
