import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Fix: The previous file contained full HTML (<!DOCTYPE html> …) which cannot be parsed as TSX.
 * This rewrite provides a valid React entry (index.tsx-like) that renders the portfolio app.
 * It injects CSS at runtime so you don't need external styles during dev.
 */

// --- Configurable assets ---
const RESUME_URL = "/resume/Andrija_Ikovic_Resume.pdf"; // change if needed
const AVATAR_URL = "/images/andrija-profile.jpg";      // change if needed
const EMAIL = "andrija@example.com";                    // change to your real email

// --- Runtime-injected CSS (single file setup) ---
const CSS = `
:root {
  --bg: #ffffff;
  --fg: #0a0a0a;
  --muted: #6b7280;
  --card: #ffffff;
  --border: #e5e7eb;
  --accent: #111827;
  --radius: 16px;
  --shadow: 0 10px 20px rgba(0,0,0,.05);
  --maxw: 1000px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0a0a0a;
    --fg: #f5f5f5;
    --muted: #9ca3af;
    --card: #0f0f10;
    --border: #1f2937;
    --accent: #ffffff;
    --shadow: 0 10px 20px rgba(0,0,0,.25);
  }
}
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  background: var(--bg); color: var(--fg);
}
a { color: inherit; }
.container { max-width: var(--maxw); margin: 0 auto; padding: 0 16px; }
.btn { display:inline-block; padding: 10px 14px; border:1px solid var(--border); border-radius: 12px; text-decoration:none; box-shadow: var(--shadow); }
.btn.primary { background: var(--accent); color: var(--bg); border-color: transparent; }
.pill { display:inline-flex; align-items:center; gap:8px; padding:6px 10px; border:1px solid var(--border); border-radius:999px; font-size:12px; color:var(--muted); }
.badge { display:inline-flex; padding:6px 10px; border:1px solid var(--border); border-radius:999px; font-size:12px; }
.grid { display:grid; gap:20px; }
.card { border:1px solid var(--border); background: var(--card); border-radius: var(--radius); padding:20px; box-shadow: var(--shadow); }
header.sticky { position: sticky; top:0; backdrop-filter: blur(8px); border-bottom:1px solid var(--border); background: color-mix(in oklab, var(--bg) 80%, transparent); z-index: 50; }
nav a { text-decoration:none; font-size:14px; }
nav a:hover { text-decoration: underline; }
.nav { display:flex; gap:18px; align-items:center; }
.hero { padding: 72px 0; position: relative; }
.hero::before { content:""; position:absolute; inset:0; background: radial-gradient(60% 50% at 50% 10%, rgba(120,119,198,.25), transparent 60%); pointer-events:none; z-index:-1; }
h1 { font-size: clamp(32px, 3vw + 18px, 52px); margin: 0; }
h2 { font-size: clamp(22px, 2vw + 12px, 34px); margin: 0 0 16px; }
p { line-height: 1.6; }
section { scroll-margin-top: 96px; padding: 56px 0; }
.projects { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.timeline { position: relative; border-left: 1px solid var(--border); padding-left: 20px; }
.timeline li { margin-bottom: 24px; }
.dot { position:absolute; left:-9px; top:.35em; width:10px; height:10px; background: var(--bg); border:1px solid var(--border); border-radius:50%; }
.about { display:flex; gap:20px; align-items:center; }
.avatar { width: 96px; height: 96px; border-radius: 999px; border:1px solid var(--border); object-fit: cover; box-shadow: var(--shadow); }
.pdf-frame { width: 100%; aspect-ratio: 8.5 / 11; border:0; border-radius: 12px; }
footer { border-top:1px solid var(--border); padding: 32px 0; color: var(--muted); font-size:14px; }
.muted { color: var(--muted); font-size: 14px; }
@media (max-width: 640px) { .about { flex-direction: column; align-items: start; } }
`;

function StyleInjector() {
  return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}

function Header() {
  return (
    <header className="sticky">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
        <a href="#home" style={{ textDecoration: "none", fontWeight: 600 }}>Andrija Ikovic</a>
        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="pill">Math → Data • FP&A • Risk <span aria-hidden>•</span> Based in Edmonton</div>
        <h1 style={{ marginTop: 12 }}>I turn messy data into clear decisions.</h1>
        <p className="muted" style={{ maxWidth: "62ch", marginTop: 12 }}>
          Math major @ UAlberta. Building data products and time‑series models. Strong focus on finance, energy, and practical analytics.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href={`mailto:${EMAIL}`}>Email me</a>
          <a className="btn" href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={RESUME_URL} download>Download Résumé (PDF)</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <div className="about">
          <img className="avatar" src={AVATAR_URL} alt="Andrija Ikovic profile" />
          <p>
            I’m Andrija, a Math major at the University of Alberta focused on applied analytics in energy and finance. I like turning raw data into crisp, defensible decisions and building small, useful tools along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="grid projects">
          <a className="card" href="https://codeberg.org/your-handle/stockdex" target="_blank" rel="noreferrer noopener">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>Stockdex (Open‑Source Python Finance Library)</h3>
              <span className="muted">↗</span>
            </div>
            <p className="muted" style={{ margin: "8px 0 10px" }}>
              Scrapes fundamentals (FinViz, Macrotrends, JustETF, Digrin, Yahoo), builds clean ETL, and renders dashboards (Sankey, time‑series).
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Python</span>
              <span className="badge">Pandas</span>
              <span className="badge">Plotly</span>
              <span className="badge">ETL</span>
            </div>
          </a>

          <a className="card" href="https://github.com/your-handle/energy-demand-forecasting" target="_blank" rel="noreferrer noopener">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>Energy‑Demand Forecasting</h3>
              <span className="muted">↗</span>
            </div>
            <p className="muted" style={{ margin: "8px 0 10px" }}>
              UK National Grid demand forecasting with feature engineering (lags, Fourier terms, holiday effects) and model comparison.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Time‑Series</span>
              <span className="badge">XGBoost</span>
              <span className="badge">SARIMA</span>
              <span className="badge">Prophet</span>
            </div>
          </a>

          <a className="card" href="https://deltacleaning.ca" target="_blank" rel="noreferrer noopener">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>Delta Cleaning Website</h3>
              <span className="muted">↗</span>
            </div>
            <p className="muted" style={{ margin: "8px 0 10px" }}>
              Small business site with custom forms (EmailJS), branded hero imagery, and lightweight SEO.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JS</span>
            </div>
          </a>

          <a className="card" href="https://ikodb.com" target="_blank" rel="noreferrer noopener">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>Ikodb Rig‑Log Dashboard</h3>
              <span className="muted">↗</span>
            </div>
            <p className="muted" style={{ margin: "8px 0 10px" }}>
              Desktop dashboard to ingest coring drill telemetry, store historicals, and surface risk analytics for a family business.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Python</span>
              <span className="badge">Tkinter</span>
              <span className="badge">PySerial</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        <ol className="timeline" style={{ position: "relative" }}>
          <li style={{ position: "relative" }}>
            <span className="dot" />
            <h3 style={{ margin: ".2em 0 0", fontSize: 16 }}>Software Developer (Ikodb Inc.)</h3>
            <div className="muted" style={{ fontSize: 14 }}>2024 — Present</div>
            <ul style={{ margin: "10px 0 0 18px" }}>
              <li>Built Python/Tkinter rig‑log app with serial ingestion and historical storage.</li>
              <li>Prototyped risk scoring and reporting for drilling ops.</li>
            </ul>
          </li>
          <li style={{ position: "relative" }}>
            <span className="dot" />
            <h3 style={{ margin: ".2em 0 0", fontSize: 16 }}>Math B.Sc., University of Alberta</h3>
            <div className="muted" style={{ fontSize: 14 }}>Expected Aug 2026</div>
            <ul style={{ margin: "10px 0 0 18px" }}>
              <li>Strong upper‑year GPA; interests in time‑series, optimization, and probability.</li>
              <li>Side‑projects in data analytics and forecasting.</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Certifications</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div className="card">
            <h3 className="muted" style={{ textTransform: "uppercase", letterSpacing: ".06em", fontSize: 12, marginTop: 0 }}>Languages</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Python</span>
              <span className="badge">SQL</span>
              <span className="badge">JavaScript/TypeScript</span>
              <span className="badge">HTML/CSS</span>
            </div>
          </div>
          <div className="card">
            <h3 className="muted" style={{ textTransform: "uppercase", letterSpacing: ".06em", fontSize: 12, marginTop: 0 }}>Data/ML</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">NumPy</span>
              <span className="badge">Pandas</span>
              <span className="badge">scikit‑learn</span>
              <span className="badge">XGBoost</span>
              <span className="badge">Prophet</span>
              <span className="badge">TensorFlow/Keras (LSTM)</span>
            </div>
          </div>
          <div className="card">
            <h3 className="muted" style={{ textTransform: "uppercase", letterSpacing: ".06em", fontSize: 12, marginTop: 0 }}>Visualization</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Matplotlib</span>
              <span className="badge">Plotly</span>
              <span className="badge">Power BI</span>
            </div>
          </div>
          <div className="card">
            <h3 className="muted" style={{ textTransform: "uppercase", letterSpacing: ".06em", fontSize: 12, marginTop: 0 }}>Other</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Git</span>
              <span className="badge">Linux</span>
              <span className="badge">cPanel</span>
              <span className="badge">Docker (basic)</span>
              <span className="badge">Tailwind</span>
            </div>
          </div>
          <div className="card">
            <h3 className="muted" style={{ textTransform: "uppercase", letterSpacing: ".06em", fontSize: 12, marginTop: 0 }}>Certifications</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Microsoft Excel Associate</span>
              <span className="badge">FMVA (in progress)</span>
              <span className="badge">CSC (planned)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <h2>Résumé (PDF)</h2>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <p className="muted" style={{ margin: 0 }}>View or download the latest PDF of my résumé.</p>
            <div style={{ display: "flex", gap: 8 }}>
              <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">Open in new tab</a>
              <a className="btn" href={RESUME_URL} download>Download PDF</a>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <iframe className="pdf-frame" src={`${RESUME_URL}#view=FitH`} title="Resume PDF" />
          </div>
          <p className="muted" style={{ marginTop: 8, fontSize: 12 }}>If the PDF doesn’t render, use the buttons above.</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="card">
          <p className="muted" style={{ margin: 0 }}>Reach me at <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>{EMAIL}</a>.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0", color: "var(--muted)", fontSize: 14 }}>
      <div className="container">© {new Date().getFullYear()} Andrija Ikovic. Built with React.</div>
    </footer>
  );
}

function App() {
  return (
    <>
      <StyleInjector />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

// --- Mount reliably even if #root is missing ---
let mount = document.getElementById("root");
if (!mount) {
  mount = document.createElement("div");
  mount.id = "root";
  document.body.appendChild(mount);
}

createRoot(mount!).render(<App />);

// --- Lightweight "tests" (smoke checks) ---
(function runSmokeTests() {
  const tests = [
    { name: "has-hero", pass: !!document.querySelector("#home h1") },
    { name: "has-about", pass: !!document.getElementById("about") },
    { name: "has-projects", pass: !!document.getElementById("projects") },
    { name: "has-experience", pass: !!document.getElementById("experience") },
    { name: "has-skills", pass: !!document.getElementById("skills") },
    { name: "has-resume", pass: !!document.querySelector("#resume iframe") },
    { name: "has-contact-email", pass: !!document.querySelector(`#contact a[href^=mailto]`) },
  ];
  const allPass = tests.every(t => t.pass);
  // Use console instead of throwing to avoid breaking the page in production builds
  // but still surface visibility to the developer.
  if (!allPass) {
    // eslint-disable-next-line no-console
    console.warn("Smoke test failures:", tests.filter(t => !t.pass));
  } else {
    // eslint-disable-next-line no-console
    console.log("All smoke tests passed.");
  }
})();
