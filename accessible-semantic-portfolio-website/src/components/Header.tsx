import { useState, useEffect, useRef } from "react";
import { navLinks, personalInfo } from "../data/portfolio";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  /* Scroll listener for header glass effect */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active-section tracking via IntersectionObserver */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Close menu when clicking outside */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* Trap focus and close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Smooth scroll with history update
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div
        ref={navRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            aria-label={`${personalInfo.name} — Back to top`}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          >
            <span
              aria-hidden="true"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-bold text-sm shadow-md group-hover:shadow-sky-500/30 transition-shadow"
            >
              AM
            </span>
            <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
              Alex Morgan
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1"
          >
            <ul role="list" className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                        ${isActive
                          ? "text-sky-400"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-sky-400"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={personalInfo.resumeUrl}
              download
              aria-label="Download Alex Morgan's resume (PDF)"
              className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Resume ↓
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuBtnRef}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span aria-hidden="true" className="block w-5 space-y-1.5">
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation">
            <ul role="list" className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                        ${isActive
                          ? "text-sky-400 bg-sky-500/10"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
