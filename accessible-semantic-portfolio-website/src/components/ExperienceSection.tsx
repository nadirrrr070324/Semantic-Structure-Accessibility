import { experience, testimonials } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 lg:py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-16">
          <p aria-hidden="true" className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Career Path
          </p>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Experience
          </h2>
          <div aria-hidden="true" className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="sr-only">Work history timeline</h3>
            <ol
              aria-label="Work experience timeline"
              className="relative border-l border-slate-700/60 space-y-0"
            >
              {experience.map((job, idx) => (
                <li key={job.id} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-900
                      ${idx === 0 ? "bg-sky-400 shadow-lg shadow-sky-500/50" : "bg-slate-600"}`}
                  />

                  <article aria-label={`${job.role} at ${job.company}`}>
                    {/* Period */}
                    <time
                      dateTime={`${job.startDate}/${job.endDate ?? ""}`}
                      className="inline-block text-xs font-semibold tracking-wide text-sky-400 uppercase mb-2"
                    >
                      {job.period}
                    </time>

                    {/* Role & Company */}
                    <h4 className="text-white font-bold text-xl mb-0.5">{job.role}</h4>
                    <p className="text-slate-300 text-sm mb-1">
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${job.company} website (opens in new tab)`}
                        className="hover:text-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                      >
                        {job.company}
                      </a>
                      <span aria-hidden="true" className="mx-2 text-slate-600">·</span>
                      <span className="text-slate-400">{job.location}</span>
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-4">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    <ul
                      role="list"
                      aria-label={`Key achievements at ${job.company}`}
                      className="space-y-2"
                    >
                      {job.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Testimonials */}
          <aside aria-labelledby="testimonials-heading">
            <h3
              id="testimonials-heading"
              className="text-white font-semibold text-lg mb-6"
            >
              What People Say
            </h3>
            <div className="space-y-5">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.id}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 hover:border-sky-500/20 transition-colors"
                >
                  {/* Quote icon */}
                  <span
                    aria-hidden="true"
                    className="block text-sky-400/30 text-4xl font-serif leading-none mb-2"
                  >
                    "
                  </span>
                  <blockquote className="text-slate-300 text-sm leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white text-xs font-bold flex-shrink-0"
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{testimonial.author}</p>
                      <p className="text-slate-500 text-xs">{testimonial.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
