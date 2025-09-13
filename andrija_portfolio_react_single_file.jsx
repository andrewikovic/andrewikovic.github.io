import React, { useMemo, useState } from "react";

// === Site assets (swap these to your actual paths) ===
const RESUME_URL = "/resume/Andrija_Ikovic_Resume.pdf"; // e.g., public/resume/Andrija_Ikovic_Resume.pdf
const AVATAR_URL = "/images/andrija-profile.jpg"; // e.g., public/images/andrija-profile.jpg


// Single‑file React portfolio with Tailwind classes only (no external UI libs).
// Ready for static hosting (Vercel/Netlify/GitHub Pages). Replace placeholders as needed.

const projectsData = [
  {
    title: "Stockdex (Open‑Source Python Finance Library)",
    tags: ["Python", "Pandas", "Plotly", "ETL"],
    description:
      "Scrapes fundamentals (FinViz, Macrotrends, JustETF, Digrin, Yahoo), builds clean ETL, and renders dashboards (Sankey, time‑series).",
    link: "https://codeberg.org/your-handle/stockdex",
  },
  {
    title: "Energy‑Demand Forecasting",
    tags: ["Time‑Series", "XGBoost", "SARIMA", "Prophet"],
    description:
      "UK National Grid demand forecasting using feature‑engineering (lags, Fourier terms, holiday effects) and model comparison with proper CV.",
    link: "https://github.com/your-handle/energy-demand-forecasting",
  },
  {
    title: "Delta Cleaning Website",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Small business site with custom forms (EmailJS), branded hero imagery, and lightweight SEO.",
    link: "https://deltacleaning.ca",
  },
  {
    title: "Ikodb Rig‑Log Dashboard",
    tags: ["Python", "Tkinter", "PySerial"],
    description:
      "Desktop dashboard to ingest coring drill telemetry, store historicals, and surface risk analytics for a family business.",
    link: "https://ikodb.com",
  },
];

const skills = {
  "Languages": ["Python", "SQL", "JavaScript/TypeScript", "HTML/CSS"],
  "Data/ML": [
    "NumPy",
    "Pandas",
    "scikit‑learn",
    "XGBoost",
    "Prophet",
    "TensorFlow/Keras (LSTM)",
  ],
  "Visualization": ["Matplotlib", "Plotly", "Power BI"],
  "Other": ["Git", "Linux", "cPanel", "Docker (basic)", "Tailwind"],
};

const certifications = [
  "Microsoft Excel Associate",
  "FMVA (in progress)",
  "CSC (planned)",
];

const experiences = [
  {
    role: "Software Developer (Ikodb Inc.)",
    time: "2024 — Present",
    bullets: [
      "Built Python/Tkinter rig‑log app with serial ingestion and historical storage.",
      "Prototyped risk scoring and reporting for drilling ops.",
    ],
  },
  {
    role: "Math B.Sc., University of Alberta",
    time: "Expected Aug 2026",
    bullets: [
      "Strong upper‑year GPA; interests in time‑series, optimization, and probability.",
      "Side‑projects in data analytics and forecasting.",
    ],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm">
      {children}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: (typeof projectsData)[number] }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer noopener"
      className="group block rounded-2xl border p-5 transition hover:shadow-lg focus:outline-none focus:ring-2"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug group-hover:underline">{p.title}</h3>
        <span className="text-sm opacity-70">↗</span>
      </div>
      <p className="mt-2 text-sm opacity-90">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  const themeClass = useMemo(() => (dark ? "dark" : ""), [dark]);

  return (
    <div className={`${themeClass}`}>
      <div className="min-h-screen bg-white text-neutral-900 antialiased transition-colors dark:bg-neutral-950 dark:text-neutral-100">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight">
              Andrija Ikovic
            </a>
            <nav className="hidden gap-6 text-sm sm:flex">
              <a href="#about" className="hover:underline">About</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#resume" className="hover:underline">Resume</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={RESUME_URL}
                className="rounded-xl border px-3 py-1.5 text-sm transition hover:shadow"
              >
                Resume
              </a>
              <button
                onClick={() => setDark((d) => !d)}
                className="rounded-xl border px-3 py-1.5 text-sm transition hover:shadow"
                aria-label="Toggle dark mode"
              >
                {dark ? "☾" : "☀"}
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(120,119,198,0.25),transparent_60%)] dark:bg-[radial-gradient(60%_50%_at_50%_10%,rgba(120,119,198,0.25),transparent_60%)]" />
          <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs opacity-90">
                <span>Math → Data • FP&A • Risk</span>
                <span className="opacity-60">|</span>
                <span>Based in Edmonton</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                I turn messy data into clear decisions.
              </h1>
              <p className="mt-4 max-w-prose text-base opacity-90">
                Math major @ UAlberta. Building data products and time‑series models. Strong focus on
                finance, energy, and practical analytics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-2xl bg-neutral-900 px-5 py-2 text-sm text-white shadow dark:bg-white dark:text-neutral-900">
                  View projects
                </a>
                <a href="mailto:andrija@example.com" className="rounded-2xl border px-5 py-2 text-sm">
                  Email me
                </a>
                <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer" className="rounded-2xl border px-5 py-2 text-sm">
                  LinkedIn
                </a>
                <a href={RESUME_URL} download className="rounded-2xl border px-5 py-2 text-sm">
                  Download Résumé (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <img
              src={AVATAR_URL}
              alt="Andrija Ikovic profile"
              className="h-28 w-28 rounded-full border object-cover shadow"
            />
            <p className="opacity-90">
              I’m Andrija, a Math major at the University of Alberta focused on applied analytics in energy and finance. I like turning raw data into crisp, defensible decisions and building small, useful tools along the way.
            </p>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects">
          <div className="grid gap-5 sm:grid-cols-2">
            {projectsData.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience & Education">
          <ol className="relative border-s">
            {experiences.map((e) => (
              <li key={e.role} className="mb-10 ms-6">
                <span className="absolute -start-3 mt-2 h-5 w-5 rounded-full border bg-white dark:bg-neutral-950" />
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm opacity-80">{e.time}</p>
                <ul className="mt-2 list-disc space-y-1 ps-5 text-sm opacity-95">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills & Certifications */}
        <Section id="skills" title="Skills & Certifications">
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-80">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <Badge key={it}>{it}</Badge>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-80">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Resume (PDF embed) */}
        <Section id="resume" title="Résumé (PDF)">
          <div className="rounded-2xl border p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm opacity-80">View or download the latest PDF of my résumé.</p>
              <div className="flex gap-2">
                <a href={RESUME_URL} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-1.5 text-sm">Open in new tab</a>
                <a href={RESUME_URL} download className="rounded-xl border px-3 py-1.5 text-sm">Download PDF</a>
              </div>
            </div>
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded-xl border">
              <iframe
                title="Resume PDF"
                src={`${RESUME_URL}#view=FitH`}
                className="h-full w-full"
              />
            </div>
            <p className="mt-2 text-xs opacity-60">If the PDF doesn’t render, use the buttons above.</p>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border p-6">
            <p className="opacity-90">
              Reach me at <a href="mailto:andrija@example.com" className="underline">andrija@example.com</a>.
            </p>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t py-10">
          <div className="mx-auto max-w-5xl px-4 text-sm opacity-70">
            © {new Date().getFullYear()} Andrija Ikovic. Built with React + Tailwind.
          </div>
        </footer>
      </div>
    </div>
  );
}
