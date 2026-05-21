import { useState, useId, useRef } from "react";
import { personalInfo } from "../data/portfolio";

type FormField = "name" | "email" | "subject" | "budget" | "message" | "consent";

interface FormState {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const budgetOptions = [
  { value: "", label: "Select a budget range (optional)" },
  { value: "lt-5k", label: "Less than $5,000" },
  { value: "5k-10k", label: "$5,000 – $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "gt-50k", label: "$50,000+" },
  { value: "discuss", label: "Let's discuss" },
];

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  } else if (values.subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  if (!values.consent) {
    errors.consent = "You must agree to the privacy policy to proceed.";
  }

  return errors;
}

export default function ContactSection() {
  const formId = useId();
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const firstErrorRef = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => ({ ...prev, [name]: fieldValue }));

    if (name === "message") setCharCount((fieldValue as string).length);

    // Clear error on change if field was touched
    if (touched[name as FormField]) {
      const newErrors = validate({ ...form, [name]: fieldValue });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] || "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] || "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched: Partial<Record<FormField, boolean>> = {};
    (Object.keys(form) as FormField[]).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus first error field for screen readers
      const firstErrorField = document.querySelector<HTMLElement>("[aria-invalid='true']");
      firstErrorRef.current = firstErrorField;
      firstErrorField?.focus();
      return;
    }

    setSubmitStatus("loading");

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1800));

    // Simulate success (in production, call your API here)
    setSubmitStatus("success");
    setForm({ name: "", email: "", subject: "", budget: "", message: "", consent: false });
    setTouched({});
    setErrors({});
    setCharCount(0);
  };

  const inputBase = `
    w-full bg-slate-800/60 border rounded-xl px-4 py-3 text-white text-sm
    placeholder:text-slate-500
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-slate-900
  `;
  const inputValid = `border-slate-700/60 hover:border-slate-600 focus:border-sky-500 focus:ring-sky-500/30`;
  const inputError = `border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/30 bg-rose-500/5`;

  const fieldClass = (field: FormField) =>
    `${inputBase} ${errors[field] && touched[field] ? inputError : inputValid}`;

  const errorId = (field: FormField) => `${formId}-${field}-error`;
  const labelId = (field: FormField) => `${formId}-${field}-label`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 lg:py-32 bg-slate-800/30"
    >
      {/* ARIA live region for status announcements */}
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {submitStatus === "success" && "Your message has been sent successfully. I'll be in touch soon!"}
        {submitStatus === "error" && "There was an error sending your message. Please try again."}
        {submitStatus === "loading" && "Sending your message, please wait."}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-16">
          <p aria-hidden="true" className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Let's Talk
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Get In Touch
          </h2>
          <div aria-hidden="true" className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
        </header>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info sidebar */}
          <aside
            aria-label="Contact information"
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Let's build something great together
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you have a project in mind, need an accessibility audit, or just want to
                connect — my inbox is always open. I typically respond within 24 hours.
              </p>
            </div>

            {/* Direct contact items */}
            <address className="not-italic space-y-4">
              {[
                {
                  icon: (
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: (
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
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
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        aria-label={`${item.label}: ${item.value}`}
                        className="text-slate-300 text-sm hover:text-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </address>

            {/* Availability */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                />
                <span className="text-emerald-400 text-sm font-medium">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to freelance projects, full-time roles, and consulting engagements.
                Average response time: <strong className="text-slate-300">under 24 hours</strong>.
              </p>
            </div>

            {/* Social links */}
            <nav aria-label="Social media contact links">
              <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Connect online
              </h4>
              <ul role="list" className="space-y-3">
                {[
                  { label: "GitHub", href: personalInfo.github, username: "@alexmorgan" },
                  { label: "LinkedIn", href: personalInfo.linkedin, username: "in/alexmorgan" },
                  { label: "Twitter/X", href: personalInfo.twitter, username: "@alexmorgan_dev" },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label}: ${social.username} (opens in new tab)`}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-sky-500/30 hover:bg-slate-800 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                      <span className="text-slate-500 text-xs font-mono group-hover:text-sky-400 transition-colors">
                        {social.username}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitStatus === "success" ? (
              /* Success state */
              <div
                role="alert"
                aria-live="assertive"
                className="flex flex-col items-center justify-center text-center py-20 px-8 bg-slate-800/50 border border-emerald-500/20 rounded-2xl"
              >
                <div
                  aria-hidden="true"
                  className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6"
                >
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-8 max-w-sm">
                  Thanks for reaching out! I'll review your message and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="px-6 py-3 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                aria-describedby={`${formId}-form-desc`}
                className="space-y-6 bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6 sm:p-8"
              >
                <p id={`${formId}-form-desc`} className="text-slate-400 text-sm">
                  Fields marked with <abbr title="required" aria-label="required">*</abbr> are required.
                </p>

                {/* Error summary */}
                {Object.values(errors).some(Boolean) && Object.keys(touched).length > 0 && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4"
                  >
                    <p className="text-rose-400 text-sm font-semibold mb-2">
                      Please correct the following errors:
                    </p>
                    <ul role="list" className="space-y-1">
                      {Object.entries(errors)
                        .filter(([, msg]) => msg)
                        .map(([field, msg]) => (
                          <li key={field} className="text-rose-300 text-xs">
                            <a
                              href={`#${formId}-${field}`}
                              className="underline hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-400 rounded"
                            >
                              {msg}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      id={labelId("name")}
                      htmlFor={`${formId}-name`}
                      className="block text-slate-300 text-sm font-medium mb-2"
                    >
                      Full Name <span aria-hidden="true" className="text-rose-400">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id={`${formId}-name`}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? errorId("name") : undefined}
                      className={fieldClass("name")}
                      placeholder="Jane Smith"
                    />
                    {errors.name && touched.name && (
                      <p
                        id={errorId("name")}
                        role="alert"
                        className="mt-1.5 text-rose-400 text-xs flex items-center gap-1"
                      >
                        <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      id={labelId("email")}
                      htmlFor={`${formId}-email`}
                      className="block text-slate-300 text-sm font-medium mb-2"
                    >
                      Email Address <span aria-hidden="true" className="text-rose-400">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id={`${formId}-email`}
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? errorId("email") : undefined}
                      className={fieldClass("email")}
                      placeholder="jane@example.com"
                    />
                    {errors.email && touched.email && (
                      <p
                        id={errorId("email")}
                        role="alert"
                        className="mt-1.5 text-rose-400 text-xs flex items-center gap-1"
                      >
                        <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    id={labelId("subject")}
                    htmlFor={`${formId}-subject`}
                    className="block text-slate-300 text-sm font-medium mb-2"
                  >
                    Subject <span aria-hidden="true" className="text-rose-400">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id={`${formId}-subject`}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={!!(errors.subject && touched.subject)}
                    aria-describedby={errors.subject && touched.subject ? errorId("subject") : undefined}
                    className={fieldClass("subject")}
                    placeholder="Accessibility audit for our platform"
                  />
                  {errors.subject && touched.subject && (
                    <p
                      id={errorId("subject")}
                      role="alert"
                      className="mt-1.5 text-rose-400 text-xs flex items-center gap-1"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label
                    id={labelId("budget")}
                    htmlFor={`${formId}-budget`}
                    className="block text-slate-300 text-sm font-medium mb-2"
                  >
                    Project Budget
                    <span className="ml-2 text-slate-500 text-xs font-normal">(optional)</span>
                  </label>
                  <select
                    id={`${formId}-budget`}
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={`${formId}-budget-hint`}
                    className={`${fieldClass("budget")} cursor-pointer appearance-none`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.2em", paddingRight: "2.5rem" }}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-800">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <p id={`${formId}-budget-hint`} className="mt-1.5 text-slate-500 text-xs">
                    This helps me tailor my proposal to your needs.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      id={labelId("message")}
                      htmlFor={`${formId}-message`}
                      className="block text-slate-300 text-sm font-medium"
                    >
                      Message <span aria-hidden="true" className="text-rose-400">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <span
                      aria-live="polite"
                      aria-label={`${charCount} characters entered`}
                      className={`text-xs font-mono ${charCount > 1000 ? "text-rose-400" : "text-slate-500"}`}
                    >
                      {charCount} / 1000
                    </span>
                  </div>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    required
                    aria-required="true"
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={[
                      errors.message && touched.message ? errorId("message") : "",
                      `${formId}-message-hint`,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    maxLength={1000}
                    className={`${fieldClass("message")} resize-y min-h-[140px]`}
                    placeholder="Tell me about your project, goals, and timeline. The more detail, the better!"
                  />
                  <p id={`${formId}-message-hint`} className="mt-1.5 text-slate-500 text-xs">
                    Minimum 20 characters. Maximum 1,000 characters.
                  </p>
                  {errors.message && touched.message && (
                    <p
                      id={errorId("message")}
                      role="alert"
                      className="mt-1 text-rose-400 text-xs flex items-center gap-1"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy consent checkbox */}
                <fieldset>
                  <legend className="sr-only">Privacy consent</legend>
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        id={`${formId}-consent`}
                        name="consent"
                        checked={form.consent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-invalid={!!(errors.consent && touched.consent)}
                        aria-describedby={errors.consent && touched.consent ? errorId("consent") : `${formId}-consent-hint`}
                        className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-slate-900 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`${formId}-consent`}
                        className="text-slate-400 text-sm leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/privacy"
                          className="text-sky-400 hover:text-sky-300 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                          tabIndex={0}
                        >
                          Privacy Policy
                        </a>{" "}
                        and consent to my data being processed to respond to my inquiry.{" "}
                        <span aria-hidden="true" className="text-rose-400">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <p id={`${formId}-consent-hint`} className="text-slate-500 text-xs mt-0.5">
                        Your data will never be shared with third parties.
                      </p>
                      {errors.consent && touched.consent && (
                        <p
                          id={errorId("consent")}
                          role="alert"
                          className="mt-1 text-rose-400 text-xs flex items-center gap-1"
                        >
                          <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  aria-disabled={submitStatus === "loading"}
                  aria-describedby={`${formId}-submit-hint`}
                  className={`
                    w-full flex items-center justify-center gap-2.5 px-6 py-4
                    text-sm font-semibold text-white rounded-xl
                    transition-all duration-200
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50
                    ${submitStatus === "loading"
                      ? "bg-sky-600/50 cursor-not-allowed"
                      : "bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
                    }
                  `}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Message…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
                <p id={`${formId}-submit-hint`} className="text-slate-500 text-xs text-center">
                  No spam, ever. I'll only use your information to reply to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
