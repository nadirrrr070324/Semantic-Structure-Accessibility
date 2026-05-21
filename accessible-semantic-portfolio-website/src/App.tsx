import SkipLink from "./components/SkipLink";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

/**
 * App — Root component for Alex Morgan's Portfolio
 *
 * Semantic structure:
 * ├── <a> Skip link (WCAG 2.4.1)
 * ├── <header role="banner"> Site header + nav
 * ├── <main id="main-content"> Primary content
 * │   ├── <section> Hero
 * │   ├── <section> About
 * │   ├── <section> Skills
 * │   ├── <section> Projects
 * │   ├── <section> Experience
 * │   └── <section> Contact (with accessible form)
 * └── <footer role="contentinfo"> Site footer
 */
export default function App() {
  return (
    <>
      {/* Skip navigation link — first focusable element */}
      <SkipLink />

      {/* Site-wide header with landmark role="banner" */}
      <Header />

      {/*
        Main content landmark
        id="main-content" is the target for the skip link
      */}
      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="focus:outline-none"
        aria-label="Main content"
      >
        {/* Hero / landing section */}
        <HeroSection />

        {/* About me section */}
        <AboutSection />

        {/* Skills & technologies section */}
        <SkillsSection />

        {/* Projects portfolio section */}
        <ProjectsSection />

        {/* Work experience & testimonials section */}
        <ExperienceSection />

        {/* Contact form section */}
        <ContactSection />
      </main>

      {/* Site-wide footer with landmark role="contentinfo" */}
      <Footer />
    </>
  );
}
