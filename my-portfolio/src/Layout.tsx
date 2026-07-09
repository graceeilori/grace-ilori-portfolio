import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

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

export default function Layout() {
  return (
    <div className="page-shell">
      <ScrollToTop />
      {/* ── Navigation ── */}
      <nav className="top-nav" role="navigation" aria-label="Main navigation">
        <a href="/" className="nav-logo animate-in animate-in-delay-1" aria-label="Grace Ilori — Home">
          GRACE ILORI
        </a>
        {/* <a
          href="/resume.pdf"
          className="nav-resume animate-in animate-in-delay-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume (opens in new tab)"
        >
          RESUME
        </a> */}
      </nav>

      {/* ── Page Content ── */}
      <Outlet />

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
