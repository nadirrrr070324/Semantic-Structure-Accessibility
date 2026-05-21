export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Developer & UI/UX Designer",
  tagline: "Building accessible, performant, and beautiful web experiences.",
  email: "hello@alexmorgan.dev",
  phone: "+1 (555) 012-3456",
  location: "San Francisco, CA",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  twitter: "https://twitter.com/alexmorgan_dev",
  resumeUrl: "/resume.pdf",
  bio: `I'm a passionate full-stack developer with 6+ years of experience crafting digital products that are fast, accessible, and visually stunning. I specialize in React, TypeScript, and Node.js ecosystems, with a deep commitment to WCAG accessibility standards.`,
  bioExtended: `When I'm not writing code, you'll find me contributing to open-source projects, speaking at local meetups, or exploring the intersection of design systems and developer experience.`,
};

export const skills = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Web Accessibility (WCAG)"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  },
  {
    category: "Design & Tools",
    icon: "🎨",
    items: ["Figma", "Design Systems", "Git & GitHub", "Docker", "CI/CD", "Storybook"],
  },
  {
    category: "Testing",
    icon: "🧪",
    items: ["Jest", "React Testing Library", "Cypress", "Playwright", "axe-core", "Lighthouse"],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "AccessiCart",
    description:
      "A fully WCAG 2.2 AA-compliant e-commerce platform built with Next.js and TypeScript. Features keyboard navigation, screen-reader optimization, and high-contrast mode.",
    longDescription:
      "Led the accessibility audit and remediation for a 50k+ product catalog, achieving a Lighthouse accessibility score of 100.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "WCAG 2.2"],
    githubUrl: "https://github.com/alexmorgan/accessicart",
    liveUrl: "https://accessicart.demo",
    featured: true,
    category: "Full-Stack",
    gradient: "from-sky-500 to-indigo-600",
    icon: "🛒",
  },
  {
    id: "proj-2",
    title: "DesignSynth",
    description:
      "An AI-powered design token generator that bridges the gap between Figma design systems and production code. Exports to CSS variables, Tailwind, and Style Dictionary.",
    longDescription:
      "Reduced design-to-code handoff time by 60% for teams using this tool in production.",
    tags: ["React", "OpenAI API", "Node.js", "Figma API", "Style Dictionary"],
    githubUrl: "https://github.com/alexmorgan/designsynth",
    liveUrl: "https://designsynth.demo",
    featured: true,
    category: "Tool",
    gradient: "from-violet-500 to-fuchsia-600",
    icon: "🎨",
  },
  {
    id: "proj-3",
    title: "Habitat Dashboard",
    description:
      "A real-time environmental monitoring dashboard for smart home devices. Features live WebSocket data, interactive charts, and an accessible data table with ARIA live regions.",
    longDescription:
      "Monitors 200+ data points per second across multiple IoT sensors with sub-100ms UI updates.",
    tags: ["React", "WebSockets", "D3.js", "Express", "MQTT"],
    githubUrl: "https://github.com/alexmorgan/habitat",
    liveUrl: "https://habitat.demo",
    featured: false,
    category: "Frontend",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🏡",
  },
  {
    id: "proj-4",
    title: "DocuFlow CLI",
    description:
      "A developer CLI tool that auto-generates accessible, SEO-optimized documentation websites from JSDoc comments and Markdown files.",
    longDescription:
      "Used by 1,200+ developers on npm. Generates documentation with semantic HTML and structured data out of the box.",
    tags: ["Node.js", "TypeScript", "Markdown", "Semantic HTML", "CLI"],
    githubUrl: "https://github.com/alexmorgan/docuflow",
    liveUrl: "https://docuflow.demo",
    featured: false,
    category: "Tool",
    gradient: "from-amber-500 to-orange-600",
    icon: "📄",
  },
  {
    id: "proj-5",
    title: "ScholarPath",
    description:
      "An inclusive online learning platform designed for users with disabilities. Implements captions, audio descriptions, adjustable reading speeds, and dyslexia-friendly fonts.",
    longDescription:
      "Partnered with the National Federation of the Blind during development. Serves 8,000+ active learners.",
    tags: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "WCAG 2.1 AAA"],
    githubUrl: "https://github.com/alexmorgan/scholarpath",
    liveUrl: "https://scholarpath.demo",
    featured: true,
    category: "Full-Stack",
    gradient: "from-rose-500 to-pink-600",
    icon: "📚",
  },
  {
    id: "proj-6",
    title: "PulseMetrics API",
    description:
      "A high-performance analytics REST API handling 10M+ events per day. Includes rate limiting, caching layers, and comprehensive OpenAPI documentation.",
    longDescription:
      "99.99% uptime over 18 months with auto-scaling infrastructure on AWS.",
    tags: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS", "OpenAPI"],
    githubUrl: "https://github.com/alexmorgan/pulsemetrics",
    liveUrl: "https://pulsemetrics.demo",
    featured: false,
    category: "Backend",
    gradient: "from-cyan-500 to-blue-600",
    icon: "📊",
  },
];

export const experience = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "Veritas Technologies",
    companyUrl: "https://veritas.com",
    period: "Jan 2022 — Present",
    startDate: "2022-01",
    endDate: null,
    location: "San Francisco, CA (Hybrid)",
    description:
      "Lead engineer on the customer-facing dashboard serving 500k+ users. Spearheaded accessibility initiative that brought the platform from WCAG A to WCAG 2.2 AA compliance.",
    highlights: [
      "Reduced Lighthouse accessibility score gaps by 100% across 40+ pages",
      "Built a reusable component library with 95% test coverage",
      "Mentored 3 junior engineers; introduced pair programming culture",
      "Decreased page load time by 45% through code splitting and lazy loading",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Nimbus Creative Studio",
    companyUrl: "https://nimbus.studio",
    period: "Mar 2020 — Dec 2021",
    startDate: "2020-03",
    endDate: "2021-12",
    location: "Remote",
    description:
      "Built interactive marketing sites and web applications for Fortune 500 clients. Collaborated closely with designers to implement pixel-perfect, accessible UI components.",
    highlights: [
      "Delivered 12+ client projects on time and within budget",
      "Established accessibility testing workflow using axe-core and NVDA",
      "Created internal Figma-to-code design token pipeline",
      "Improved average Lighthouse performance score from 62 to 94",
    ],
  },
  {
    id: "exp-3",
    role: "Junior Web Developer",
    company: "BrightByte Solutions",
    companyUrl: "https://brightbyte.io",
    period: "Jun 2018 — Feb 2020",
    startDate: "2018-06",
    endDate: "2020-02",
    location: "Austin, TX",
    description:
      "Developed and maintained WordPress and custom PHP/React websites for small to mid-size businesses. First introduction to semantic HTML and SEO best practices.",
    highlights: [
      "Rebuilt company's main website, improving SEO rankings by 3 positions",
      "Introduced Git version control workflow to the development team",
      "Built custom WordPress plugins for 8 client sites",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "B.S. Computer Science",
    institution: "University of Texas at Austin",
    period: "2014 — 2018",
    honors: "Magna Cum Laude, Dean's List",
    description: "Focused on Human-Computer Interaction and Software Engineering.",
  },
];

export const certifications = [
  { id: "cert-1", name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { id: "cert-2", name: "Certified Professional in Accessibility Core Competencies (CPACC)", issuer: "IAAP", year: "2022" },
  { id: "cert-3", name: "Google UX Design Certificate", issuer: "Google / Coursera", year: "2021" },
];

export const testimonials = [
  {
    id: "test-1",
    quote:
      "Alex transformed our platform's accessibility from an afterthought to a genuine strength. The attention to detail and empathy for diverse users was remarkable.",
    author: "Sarah Chen",
    role: "VP of Engineering, Veritas Technologies",
    avatar: "SC",
  },
  {
    id: "test-2",
    quote:
      "Working with Alex was a masterclass in clean architecture. The codebase they left behind is something our team still references as the gold standard.",
    author: "Marcus Williams",
    role: "CTO, Nimbus Creative Studio",
    avatar: "MW",
  },
  {
    id: "test-3",
    quote:
      "Alex's ability to communicate complex technical concepts to non-technical stakeholders made our project a resounding success.",
    author: "Priya Patel",
    role: "Product Manager, ScholarPath",
    avatar: "PP",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
