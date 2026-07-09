import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudy.css'

/* Tag color map (shared with Projects.tsx) */
const tagStyles: Record<string, React.CSSProperties> = {
  RESEARCH: { color: 'var(--accent-army)' },
  DEVELOPMENT: { color: 'var(--accent-teal)' },
  UX: { color: 'var(--accent-lavender)' },
}

const projects = [
  {
    id: 'family-of-buttons',
    number: '01',
    tagline: 'Mapping Team Dynamics',
    title: 'A Family of Buttons',
    description:
      'To get to know our team members, we were tasked with designing a web application where the core interaction revolves around exactly one button per team member. We designed an interactive planetary system where each teammate is represented by a unique planet, using orbiting moons to highlight our individual quirks and shared interests.',
    system:
      'An interactive space environment featuring click logic to reveal team info, animated orbits, and a central sun that intensifies its glow when the selected team members share similarities.',
    tech: ['Figma', 'Inkscape', 'React', 'Next.js'],
    image: '/assets/cpsc-581/family-cover.png',
    liveUrl: 'https://cpsc-button-project.vercel.app/',
    caseStudyUrl: 'https://gracei.vercel.app/button-project',
  },
  {
    id: 'rbrick',
    number: '02',
    tagline: 'Remote CAD Collaboration',
    title: 'RBrick',
    description:
      'RBrick is a synchronous, remote learning system designed to help experts teach CAD novices without relying on basic video calls or screen sharing. By selecting LEGO brick-building as our domain, we built a 3D environment that handles the core teaching loop automatically, allowing the expert to only intervene when the student strictly needs help.',
    system:
      'A custom 3D workspace featuring grid-snapping bricks and ghost overlays, paired with a real-time dashboard that sends physical haptic alerts to the user\'s phone upon completing a layer.',
    tech: ['Figma', 'Three.js', 'Next.js', 'Socket.IO'],
    image: '/assets/cpsc-581/rbrick-cover.png',
    liveUrl: 'https://rbrick.vercel.app/',
    caseStudyUrl: 'https://gracei.vercel.app/cad-expertise',
  },
  {
    id: 'convivium',
    number: '03',
    tagline: 'Autonomous Hosting through Physical Computing',
    title: 'Convivium',
    description:
      'Convivium is a physical computing project designed to improve the experience of eating together by giving autonomy back to the host. Instead of building tools for the host to actively manage, my team and I augmented everyday objects to sense their own state and communicate passively.',
    system:
      'We built a smart induction mat and pot that tracks remaining food weight and temperature, alongside an automated beverage dispenser that uses RFID glass tags to manage drink limits without host intervention.',
    tech: ['Arduino', 'TinkerCAD'],
    image: '/assets/cpsc-581/convivium-cover.png',
    caseStudyUrl: 'https://gracei.vercel.app/aug-experience',
  },
]

const tocLinks = projects.map((p) => ({
  id: p.id,
  label: p.title,
}))

export default function Cpsc581Page() {
  const tags = ['DEVELOPMENT', 'UX']
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    const sections = document.querySelectorAll('section.cpsc-section')
    sections.forEach((s) => observer.observe(s))

    return () => {
      sections.forEach((s) => observer.unobserve(s))
    }
  }, [])

  return (
    <main className="case-study" id="case-cpsc-581">
      {/* Back link */}
      <Link to="/projects" className="cs-back animate-in animate-in-delay-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        All Projects
      </Link>

      {/* Tags */}
      <div className="cs-tags animate-in animate-in-delay-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="cs-tag"
            style={{ color: tagStyles[tag]?.color }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Title + Browse Link */}
      <div className="cs-header-container">
        <h1 className="cs-title animate-in animate-in-delay-2">CPSC 581 Collection</h1>
        <div className="cs-actions animate-in animate-in-delay-3">
          <a
            href="https://gracei.vercel.app/"
            className="cs-action cs-action--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Full Portfolio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <p className="cs-summary animate-in animate-in-delay-3">
        Visual design, embodied interaction, and physical computing.
      </p>

      {/* Main Reading Area */}
      <div className="cs-reading">
        {/* Sticky Sidebar TOC */}
        <nav className="cs-toc" aria-label="Table of contents">
          <span className="cs-toc-label">Projects</span>
          <a
            href="#context"
            className={`cs-toc-link ${activeSection === 'context' ? 'cs-toc-link--active' : ''}`}
          >
            Context
          </a>
          {tocLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`cs-toc-link ${activeSection === link.id ? 'cs-toc-link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Content */}
        <div className="cs-content">
          {/* Context */}
          <section id="context" className="cpsc-section cs-section">
            <h2 className="cs-section-title">Context</h2>
            <p className="cs-body">
              The following projects were created for CPSC 581, an advanced human-computer interaction
              course. The core objective of these projects was to step outside the bounds of traditional,
              screen-based UX and to solve open-ended design challenges through novel, unconventional
              interactions. Working in a tight-knit team, we tackled everything from embodied interactions
              in 3D environments to Arduino-powered physical computing.
            </p>
          </section>

          {/* Project Cards */}
          {projects.map((project) => (
            <section
              key={project.id}
              id={project.id}
              className="cpsc-section cs-section"
            >
              {/* Full-width cover */}
              {project.liveUrl ? (
                <a href={project.liveUrl} className="cpsc-card-cover" target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={`${project.title} cover`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="cpsc-card-cover">
                  <img
                    src={project.image}
                    alt={`${project.title} cover`}
                    loading="lazy"
                  />
                </div>
              )}

              {/* Card body */}
              <div className="cpsc-card-body">
                <div className="cpsc-card-meta">
                  <span className="cpsc-card-number">{project.number}</span>
                  <h2 className="cpsc-card-title">{project.title}</h2>
                  <a href={project.caseStudyUrl} className="cpsc-card-cta" target="_blank" rel="noopener noreferrer">
                    Read the case study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <span className="cpsc-card-tagline">{project.tagline}</span>
                <p className="cpsc-card-desc">{project.description}</p>
                <p className="cpsc-card-desc cpsc-card-system">
                  {project.system}
                </p>
                <span className="cpsc-card-tech">
                  {project.tech.join(' · ')}
                </span>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* View Next Project */}
      <div className="cs-next-project">
        <span className="cs-next-label">Next Project</span>
        <Link to="/projects/kdrama-wrapped" className="cs-next-card">
          <div className="cs-next-cover">
            <img src="/assets/project-cover-kdrama-wrapped-v4.png" alt="K-Drama Wrapped cover" />
          </div>
          <div className="cs-next-info">
            <span className="cs-next-title">
              K-Drama Wrapped
            </span>
            <span className="cs-next-desc">A Spotify-Wrapped inspired recap for K-drama watchers.</span>
          </div>
        </Link>
      </div>
    </main>
  )
}
