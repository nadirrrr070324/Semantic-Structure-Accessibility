import { useState } from "react";
import { projects } from "../data/portfolio";

type FilterCategory = "All" | "Full-Stack" | "Frontend" | "Backend" | "Tool";
const filterCategories: FilterCategory[] = ["All", "Full-Stack", "Frontend", "Backend", "Tool"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 lg:py-32 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-10">
          <p aria-hidden="true" className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Featured Projects
          </h2>
          <div aria-hidden="true" className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
        </header>

        {/* Filter Tabs */}
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                ${activeFilter === cat
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                  : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50"
                }`}
            >
              {cat}
              <span className="sr-only"> projects</span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <p role="status" className="text-slate-400 text-center py-16">
            No projects found in this category.
          </p>
        ) : (
          <ul
            role="list"
            aria-label={`${activeFilter === "All" ? "All" : activeFilter} projects`}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => {
              const isExpanded = expandedId === project.id;
              return (
                <li key={project.id}>
                  <article
                    aria-labelledby={`proj-title-${project.id}`}
                    className={`group h-full bg-slate-800/50 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl
                      ${project.featured
                        ? "border-sky-500/20 hover:border-sky-500/50 hover:shadow-sky-500/10"
                        : "border-slate-700/50 hover:border-slate-600"
                      }`}
                  >
                    {/* Card header gradient */}
                    <div
                      aria-hidden="true"
                      className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
                    />

                    <div className="p-6 flex flex-col h-full">
                      {/* Icon & badges */}
                      <div className="flex items-start justify-between mb-4">
                        <span
                          aria-hidden="true"
                          className="text-3xl"
                        >
                          {project.icon}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.featured && (
                            <span
                              aria-label="Featured project"
                              className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium"
                            >
                              Featured
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-full bg-slate-700 text-slate-400 text-xs">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        id={`proj-title-${project.id}`}
                        className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors"
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Expanded detail */}
                      <div
                        id={`proj-detail-${project.id}`}
                        role="region"
                        aria-label={`More details about ${project.title}`}
                        hidden={!isExpanded}
                        className="mb-4"
                      >
                        {isExpanded && (
                          <p className="text-slate-300 text-sm leading-relaxed bg-slate-700/40 rounded-lg p-3 border border-slate-600/50">
                            {project.longDescription}
                          </p>
                        )}
                      </div>

                      {/* Tags */}
                      <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <li key={tag}>
                            <span className="inline-block px-2 py-0.5 rounded bg-slate-700/60 text-slate-400 text-xs font-mono">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/50">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`proj-detail-${project.id}`}
                          onClick={() => setExpandedId(isExpanded ? null : project.id)}
                          className="text-xs text-slate-400 hover:text-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                        >
                          {isExpanded ? "Less info ↑" : "More info ↓"}
                        </button>
                        <div className="ml-auto flex items-center gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                          >
                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            Code
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo (opens in new tab)`}
                            className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                          >
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub (opens in new tab)"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700 hover:border-slate-600 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
