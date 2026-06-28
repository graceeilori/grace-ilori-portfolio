import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import svgData from './svg-data.json'
import './CaseStudy.css'


/* Tag color map (shared with Projects.tsx) */
const tagStyles: Record<string, React.CSSProperties> = {
  RESEARCH: { color: 'var(--accent-army)' },
  DEVELOPMENT: { color: 'var(--accent-teal)' },
  UX: { color: 'var(--accent-lavender)' },
}

export default function KDramaWrappedPage() {
  const project = {
    title: 'K-Drama Wrapped',
    summary: 'A Spotify-Wrapped inspired recap for K-drama watchers.',
    tags: ['DEVELOPMENT', 'UX'],
    cover: '/assets/project-cover-kdrama-wrapped-v2.png',
    liveUrl: 'https://kdramawrapped.com/',
    codeUrl: 'https://github.com/graceeilori/kdrama-wrapped',
    details: {
      tools: ['React', 'TypeScript', 'Figma'],
      duration: '1 week',
      year: '2025',
      readTime: '4 min read',
    },
  }

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

    const sections = document.querySelectorAll('section.cs-section')
    sections.forEach((s) => observer.observe(s))

    return () => {
      sections.forEach((s) => observer.unobserve(s))
    }
  }, [])

  return (
    <main className="case-study" id="case-kdrama-wrapped">
      {/* Back link */}
      <Link to="/projects" className="cs-back animate-in animate-in-delay-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        All Projects
      </Link>

      {/* Tags */}
      <div className="cs-tags animate-in animate-in-delay-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="cs-tag"
            style={{ color: tagStyles[tag]?.color }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Title + Summary + Action Links */}
      <div className="cs-header-container">
        <h1 className="cs-title animate-in animate-in-delay-2">{project.title}</h1>
        <div className="cs-actions animate-in animate-in-delay-3">
          <a
            href={project.liveUrl}
            className="cs-action cs-action--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={project.codeUrl}
            className="cs-action cs-action--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <p className="cs-summary animate-in animate-in-delay-3">{project.summary}</p>

      {/* Cover Image */}
      <div className="cs-cover animate-in animate-in-delay-4">
        <img src={project.cover} alt={`${project.title} cover`} />
      </div>

      {/* Project Details Row (add project type) */}
      <div className="cs-details animate-in animate-in-delay-5">
        <div className="cs-detail">
          <span className="cs-detail-label">Tools</span>
          <span className="cs-detail-value">{project.details.tools.join(', ')}</span>
        </div>
        <div className="cs-detail">
          <span className="cs-detail-label">Duration</span>
          <span className="cs-detail-value">{project.details.duration}</span>
        </div>
        <div className="cs-detail">
          <span className="cs-detail-label">Year</span>
          <span className="cs-detail-value">{project.details.year}</span>
        </div>
        <div className="cs-detail">
          <span className="cs-detail-label">Read Time</span>
          <span className="cs-detail-value">{project.details.readTime}</span>
        </div>
      </div>

      {/* Main Reading Area */}
      <div className="cs-reading">
        {/* Sticky Sidebar TOC */}
        <nav className="cs-toc" aria-label="Table of contents">
          <span className="cs-toc-label">Table of Contents</span>
          <a href="#context" className={`cs-toc-link ${activeSection === 'context' ? 'cs-toc-link--active' : ''}`}>Context</a>
          <a href="#design" className={`cs-toc-link ${activeSection === 'design' ? 'cs-toc-link--active' : ''}`}>Design</a>
          <a href="#development" className={`cs-toc-link ${activeSection === 'development' ? 'cs-toc-link--active' : ''}`}>Development</a>
          <a href="#insights" className={`cs-toc-link ${activeSection === 'insights' ? 'cs-toc-link--active' : ''}`}>Insights</a>
          <a href="#impact" className={`cs-toc-link ${activeSection === 'impact' ? 'cs-toc-link--active' : ''}`}>Impact</a>
        </nav>

        {/* Content Sections */}
        <div className="cs-content">
          {/* Context */}
          <section id="context" className="cs-section">
            <h2 className="cs-section-title">Context</h2>
            <p className="cs-body">
              K-Drama Wrapped is a web application that allows fans to generate a personalized, shareable
              year-end recap of their viewing habits. K-drama watchers typically track their viewing history
              across platforms, from unstandardized native Notes apps to more sophisticated database sites
              like MyDramaList.
            </p>

            <p className="cs-body">
              However, while MyDramaList offers a year-end recap, it is extremely "data-heavy," presenting
              users with extensive statistical breakdowns. A common problem remained: there was no visually
              engaging, personality-driven way to look back on your long list of watched dramas per year.
              As an avid watcher myself, I had the long-list problem, like everyone else.
            </p>

            <div className="cs-image-group">
              <div className="cs-image-slot">
                <img src="/assets/notes-app-screenshot.png" alt="Notes app with unstructured drama tracking" />
                <span className="cs-image-caption">Tracking dramas in Google Keep</span>
              </div>
              <div className="cs-image-slot">
                <img src="/assets/twitter-context-screenshot.png" alt="Twitter conversation about K-drama tracking" />
                <span className="cs-image-caption">Community discussion on Twitter</span>
              </div>
            </div>

            <p className="cs-body">
              Inspired by the design and purpose of Spotify Wrapped, I set out to build K-Drama Wrapped
              so that members of the community could transform their raw viewing data into a highly visual
              and socially engaging format.
            </p>
          </section>

          {/* Design */}
          <section id="design" className="cs-section">
            <h2 className="cs-section-title">Design</h2>
            <p className="cs-body">
              My early high-fidelity explorations played with a heavy, dark-mode film strip aesthetic.
              I ultimately pivoted to a warm, feel-good "scrapbook" style to better match the cozy,
              emotional connection fans have with these shows. The introduction slide design
              was simplified to emphasize content generated from the user’s lists that would be
              viewed in the coming slides, instead of showcasing film strips that may contain
              dramas users are not even familiar with.
            </p>
            <div className="cs-image-group">
              <div className="cs-image-slot cs-image-slot--full">
                <img src="/assets/kdrama-wrapped/design-evolution.png" alt="Early mockup to final design of K-Drama Wrapped" />
              </div>
            </div>

            <p className="cs-body">
              To ensure visual consistency across the dynamic recaps, I built a lightweight design system in Figma.
              I established a pastel-driven color palette featuring soft pinks, blues, and yellows,
              and paired Bricolage Grotesque for punchy headings with Reenie Beanie for handwriting-style accents.
              To give the algorithmic "Vibes" a distinct personality, I created custom, hand-drawn vector illustrations,
              such as a magnifying glass for the "Detective" and a lotus for the "Healing Soul," using Figma Draw.
              Finally, I designed tags for 13 genres using open source icons.
            </p>
            <div className="cs-kdrama-design-showcase">
              <h3 className="cs-kdrama-title">Your Vibe</h3>
              <div className="cs-kdrama-cards">
                {[
                  { id: 'hopelessromantic', label: '#hopelessromantic', color: '#f75591', bg: '#f8e3e9' },
                  { id: 'detective', label: '#detective', color: '#485ce7', bg: '#e1e4fc' },
                  { id: 'timetraveler', label: '#timetraveler', color: '#f5b741', bg: '#f6f1df' },
                  { id: 'wanderer', label: '#wanderer', color: '#ea534c', bg: '#f4e2e0' },
                  { id: 'healingsoul', label: '#healingsoul', color: '#8655e6', bg: '#ebe1f8' },
                ].map((card, index) => (
                  <motion.div
                    key={card.id}
                    className="cs-kdrama-card-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                  >
                    <svg
                      viewBox={(svgData as any)[card.id].viewBox}
                      className="cs-kdrama-card"
                      style={{ backgroundColor: card.bg }}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {(svgData as any)[card.id].paths.map((path: any, i: number) => (
                        <motion.path
                          key={i}
                          d={path.d}
                          stroke={path.stroke}
                          strokeWidth={path.strokeWidth}
                          strokeLinecap={path.strokeLinecap}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1.5, delay: index * 0.15 + 0.3, ease: "easeInOut" }}
                        />
                      ))}
                    </svg>
                    <span className="cs-kdrama-hashtag" style={{ color: card.color }}>
                      {card.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="cs-kdrama-marquee-wrapper">
                <motion.div
                  className="cs-kdrama-marquee-track"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                  {[
                    'action', 'comedy', 'drama', 'fantasy', 'historical', 'legal', 'med',
                    'melodrama', 'romance', 'school', 'sci', 'sol', 'thriller', 'youth',
                    'action', 'comedy', 'drama', 'fantasy', 'historical', 'legal', 'med',
                    'melodrama', 'romance', 'school', 'sci', 'sol', 'thriller', 'youth'
                  ].map((genre, i) => (
                    <img
                      key={i}
                      src={`/assets/kdrama-wrapped/slide3-genre-icon-${genre}.svg`}
                      alt={genre}
                      className="cs-kdrama-marquee-icon"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            <p className="cs-body">
              Each recap card is designed to stand on its own as a shareable image.
            </p>
            <div className="cs-image-group">
              <div className="cs-image-slot cs-image-slot--full">
                <img src="/assets/kdrama-wrapped/design-slides.png" alt="Final design of K-Drama Wrapped" />
              </div>
            </div>

          </section>

          {/* Development */}
          <section id="development" className="cs-section">
            <h2 className="cs-section-title">Development</h2>
            <p className="cs-body">
              I started by mapping out the data pipeline — scraping public MyDramaList profiles,
              normalizing the data, and computing the stats that would feel most delightful to see.
              The front-end is a single-page React app with animated card transitions that mimic
              the Spotify Wrapped swipe-through experience.
            </p>
            <div className="cs-image-group">
              <div className="cs-image-slot">
                <img src="/assets/project-cover-kdrama-wrapped.png" alt="Early wireframes and flow mapping" />
                <span className="cs-image-caption">Early wireframes and user flow</span>
              </div>
              <div className="cs-image-slot">
                <img src="/assets/project-cover-kdrama-wrapped-v2.png" alt="Component architecture" />
                <span className="cs-image-caption">Final card component system</span>
              </div>
            </div>
            <p className="cs-body">
              The trickiest part was handling inconsistent data from scraped profiles — missing
              entries, different date formats, incomplete watch histories. I built a normalizer
              that gracefully degrades, so the experience still feels complete even with gaps.
            </p>
          </section>

          {/* Insights */}
          <section id="insights" className="cs-section">
            <h2 className="cs-section-title">Insights</h2>
            <p className="cs-body">
              The project taught me a lot about building for delight — the stats themselves are
              simple, but the presentation and shareability are what made people care. Wrapping
              data in a story format completely changed how users engaged with it.
            </p>
            <p className="cs-body">
              Designing for screenshots meant rethinking layout constraints. Every card had to
              work as a standalone image — no relying on surrounding context or navigation.
              That constraint pushed the design to be bolder and more self-contained.
            </p>
          </section>

          {/* Impact */}
          <section id="impact" className="cs-section">
            <h2 className="cs-section-title">Impact</h2>
            <p className="cs-body">
              K-Drama Wrapped resonated far beyond what I expected. Within the first week of
              launch, the community response was overwhelming — people were sharing their recaps
              across Twitter, Reddit, and Instagram stories.
            </p>
            <div className="cs-stats-row">
              <div className="cs-stat">
                <span className="cs-stat-number">2,400+</span>
                <span className="cs-stat-label">Users in first month</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-number">7</span>
                <span className="cs-stat-label">Days to build &amp; ship</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-number">85%</span>
                <span className="cs-stat-label">Shared their recap</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* View Next Project */}
      <div className="cs-next-project">
        <span className="cs-next-label">Next Project</span>
        <Link to="#" className="cs-next-card">
          <div className="cs-next-cover">
            <img src="/assets/project-cover-asd-journey.png" alt="ASD Journey cover" />
          </div>
          <div className="cs-next-info">
            <span className="cs-next-title">
              ASD Journey
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="cs-next-desc">Mapping the surgical journey of patients with Adult Spinal Deformity.</span>
          </div>
        </Link>
      </div>
    </main>
  )
}
