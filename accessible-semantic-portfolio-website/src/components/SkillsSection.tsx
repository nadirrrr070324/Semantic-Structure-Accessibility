import { skills } from "../data/portfolio";

const proficiencyData = [
  { label: "React & TypeScript", level: 96, color: "bg-sky-400" },
  { label: "Node.js & Backend", level: 88, color: "bg-indigo-400" },
  { label: "UI/UX & Design", level: 82, color: "bg-violet-400" },
  { label: "Accessibility (WCAG)", level: 95, color: "bg-emerald-400" },
  { label: "DevOps & CI/CD", level: 74, color: "bg-amber-400" },
  { label: "Testing & QA", level: 91, color: "bg-rose-400" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 lg:py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-16">
          <p aria-hidden="true" className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Skills & Technologies
          </h2>
          <div aria-hidden="true" className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
        </header>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Technology Stack</h3>
            <div className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Technology skill categories">
              {skills.map((category) => (
                <article
                  key={category.category}
                  role="listitem"
                  aria-label={`${category.category} skills`}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 hover:border-sky-500/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span aria-hidden="true" className="text-xl">{category.icon}</span>
                    <h4 className="text-white font-semibold text-sm">{category.category}</h4>
                  </div>
                  <ul role="list" className="space-y-2">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors"
                      >
                        <span
                          aria-hidden="true"
                          className="w-1.5 h-1.5 rounded-full bg-sky-400/60 flex-shrink-0"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Proficiency bars */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Proficiency Levels</h3>
            <div className="space-y-6" role="list" aria-label="Skill proficiency levels">
              {proficiencyData.map((skill) => (
                <div key={skill.label} role="listitem">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm font-medium">{skill.label}</span>
                    <span
                      className="text-slate-400 text-xs font-mono"
                      aria-label={`${skill.level} percent proficiency`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  {/* Accessible progress bar */}
                  <div
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.label}: ${skill.level}% proficiency`}
                    className="w-full h-2 bg-slate-700/60 rounded-full overflow-hidden"
                  >
                    <div
                      aria-hidden="true"
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools / Quick chips */}
            <div className="mt-10">
              <h3 className="text-white font-semibold text-sm mb-4">Also experienced with</h3>
              <ul
                role="list"
                aria-label="Additional tools and technologies"
                className="flex flex-wrap gap-2"
              >
                {[
                  "Webpack", "Vite", "Prisma", "tRPC", "Redis", "AWS Lambda",
                  "Vercel", "Netlify", "GitHub Actions", "Terraform", "Kubernetes",
                  "Figma Tokens", "Storybook", "MSW", "Zod",
                ].map((tool) => (
                  <li key={tool}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono hover:border-sky-500/40 hover:text-sky-400 transition-colors cursor-default">
                      {tool}
                    </span>
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
