import './App.css'

/* ---- SVG Icon Components ---- */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="LinkedIn">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="GitHub">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="Email">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6 C18 10 14 13 12 13 10 13 6 10 2 6" fill="none" />
  </svg>
)

/* ---- K-Drama Card Visual ---- */
const KDramaCard = () => (
  <div className="project-card card-kdrama animate-in animate-in-delay-4">
    <div className="card-kdrama-inner">
      <div className="card-kdrama-header">
        <span className="card-title">2024 WRAPPED</span>
        <span className="card-subtitle">K-Drama<br />Wrapped</span>
      </div>
      <div className="card-kdrama-body">
        <div className="card-kdrama-visual">
          <div className="bar-chart">
            {[55, 38, 70, 45, 60, 35, 65, 42, 58, 48, 72, 30].map((h, i) => (
              <div
                key={i}
                className="bar"
                style={{
                  height: `${h}%`,
                  background: i % 3 === 0
                    ? 'rgba(255,255,255,0.85)'
                    : i % 3 === 1
                      ? 'rgba(220, 80, 80, 0.7)'
                      : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
          <div className="card-year-badge">2024</div>
        </div>
      </div>
    </div>
  </div>
)

/* ---- Illustrated/WIP Card ---- */
const IllustrationCard = () => (
  <div className="project-card card-illustration animate-in animate-in-delay-5">
    {/* Dashed circle doodle */}
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    >
      <circle
        cx="45" cy="45" r="38"
        stroke="#a0998e"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <circle cx="45" cy="20" r="5" fill="#a0998e" />
      <circle cx="65" cy="55" r="4" fill="#a0998e" />
      <circle cx="28" cy="60" r="3" fill="#a0998e" />
      <path
        d="M45 20 C55 30 68 45 65 55"
        stroke="#a0998e"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        fill="none"
      />
      <path
        d="M65 55 C58 68 38 70 28 60"
        stroke="#a0998e"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        fill="none"
      />
    </svg>
    <p className="card-illustration-label">
      more coming<br />soon ✦
    </p>
  </div>
)

/* ---- Main App ---- */
function App() {
  return (
    <div className="home-page">


      {/* ── Navigation ── */}
      <nav className="top-nav" role="navigation" aria-label="Main navigation">
        <a href="/" className="nav-logo animate-in animate-in-delay-1" aria-label="Grace Ilori — Home">
          GRACE ILORI
        </a>
        <a
          href="/resume.pdf"
          className="nav-resume animate-in animate-in-delay-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume (opens in new tab)"
        >
          RESUME
        </a>
      </nav>

      {/* ── Hero ── */}
      <main className="hero-section" id="hero">
        {/* Main heading with sticker accents */}
        <div className="heading-row animate-in animate-in-delay-2">
          <div className="sticker-wrap">
            <img
              src="/assets/decor_flower.png"
              alt=""
              className="sticker sticker-flower"
              aria-hidden="true"
              style={{ '--rot': '-15deg' } as React.CSSProperties}
            />
            <span className="sticker-note" aria-hidden="true">
              my current obsession... <br />
              brick flowers
            </span>
          </div>
          <h1 className="hero-heading">
            Hi, I&rsquo;m Grace
          </h1>
          <div className="sticker-wrap">
            <img
              src="/assets/decor_peng.png"
              alt=""
              className="sticker sticker-peng"
              aria-hidden="true"
              style={{ '--rot': '11.4deg' } as React.CSSProperties}
            />
            <span className="sticker-note sticker-note--peng" aria-hidden="true">
              just peng :)
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle animate-in animate-in-delay-3">
          4th year Computer Science student at the University of Calgary
        </p>

        {/* Tagline */}
        <p className="hero-tagline animate-in animate-in-delay-3">
          Thinking, designing, building where it matters. These days{' '}
          <a
            href="https://ilab.ucalgary.ca"
            className="accent-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="iLab at University of Calgary"
          >
            @iLab
          </a>
        </p>

        {/* Project Cards */}
        <div className="cards-section" role="region" aria-label="Featured projects">
          <KDramaCard />
          <IllustrationCard />
          {/* See all card */}
          <div
            className="card-see-all animate-in animate-in-delay-6"
            role="button"
            tabIndex={0}
            aria-label="See all projects"
          >
            <span className="card-see-all-text">see all →</span>
          </div>
        </div>
      </main>

      {/* ── Footer / Social ── */}
      <footer className="footer-section" role="contentinfo">
        <nav
          className="social-icons animate-in animate-in-delay-6"
          aria-label="Social links"
        >
          <a
            href="https://www.linkedin.com/in/grace-ilori/"
            className="social-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
            id="linkedin-link"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/graceeilori"
            className="social-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-tooltip="GitHub"
            id="github-link"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:grace.ilori@ucalgary.ca"
            className="social-icon-link"
            aria-label="Email Grace"
            data-tooltip="Email"
            id="email-link"
          >
            <MailIcon />
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App
