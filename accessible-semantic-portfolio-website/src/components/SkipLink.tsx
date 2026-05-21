/**
 * SkipLink — WCAG 2.4.1 "Bypass Blocks" success criterion.
 * Allows keyboard-only users to skip repetitive navigation.
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
        focus:px-5 focus:py-3
        focus:bg-sky-500 focus:text-white
        focus:text-sm focus:font-semibold
        focus:rounded-lg focus:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-white
        transition-all
      "
    >
      Skip to main content
    </a>
  );
}
