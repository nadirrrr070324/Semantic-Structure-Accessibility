import { personalInfo, navLinks } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              aria-label={`${personalInfo.name} — Back to top`}
              className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg mb-4"
            >
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-bold text-sm"
              >
                AM
              </span>
              <span className="text-white font-semibold">Alex Morgan</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting accessible, performant web experiences with a passion for great UX.
            </p>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h2 className="text-white font-semibold text-sm mb-4">Navigation</h2>
            <ul role="list" className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services column */}
          <div>
            <h2 className="text-white font-semibold text-sm mb-4">Services</h2>
            <ul role="list" className="space-y-2">
              {[
                "Web Development",
                "Accessibility Audits",
                "UI/UX Design",
                "Performance Optimization",
                "Code Reviews",
                "Technical Consulting",
              ].map((service) => (
                <li key={service} className="text-slate-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h2 className="text-white font-semibold text-sm mb-4">Connect</h2>
            <nav aria-label="Social media links in footer">
              <ul role="list" className="space-y-2">
                {[
                  { label: "GitHub", href: personalInfo.github },
                  { label: "LinkedIn", href: personalInfo.linkedin },
                  { label: "Twitter/X", href: personalInfo.twitter },
                  { label: "Email", href: `mailto:${personalInfo.email}` },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={
                        social.href.startsWith("http")
                          ? `${social.label} (opens in new tab)`
                          : social.label
                      }
                      className="text-slate-400 hover:text-sky-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            <span aria-label={`Copyright ${currentYear} Alex Morgan. All rights reserved.`}>
              &copy; {currentYear} Alex Morgan. All rights reserved.
            </span>
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span
              className="flex items-center gap-1.5"
              aria-label="Built with accessibility in mind, WCAG 2.2 AA compliant"
            >
              <span aria-hidden="true">♿</span>
              WCAG 2.2 AA
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span aria-label="Built with React and TypeScript">
              Built with React &amp; TypeScript
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              aria-label="Back to top of page"
              className="hover:text-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
