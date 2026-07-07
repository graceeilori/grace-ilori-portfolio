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
    cover: '/assets/project-cover-kdrama-wrapped-v4.png',
    liveUrl: 'https://kdramawrapped.com/',
    codeUrl: 'https://github.com/graceeilori/kdrama-wrapped',
    details: {
      tools: ['React', 'TypeScript', 'Figma'],
      duration: '1 week',
      year: '2025',
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
            </div>

            <p className="cs-body">
              Inspired by the design and purpose of Spotify Wrapped, I set out to build K-Drama Wrapped
              so that people can transform their raw viewing data into a highly visual
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
              I established a <span className="highlighted-word-ux">pastel-driven color palette</span> featuring soft pinks, blues, and yellows,
              and paired <span className="highlighted-word-ux">Bricolage Grotesque</span> for punchy headings with <span className="highlighted-word-ux">Reenie Beanie</span> for handwriting-style accents.
              To give the algorithmic "Vibes" a distinct personality, I created custom, hand-drawn vector illustrations,
              such as a magnifying glass for the "Detective" and a lotus for the "Healing Soul," using <span className="highlighted-word-ux">Figma Draw</span>.
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

            <motion.div
              className="cs-recap-showcase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="cs-recap-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                  <motion.div
                    key={num}
                    className="cs-recap-card-slot"
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <img
                      src={`/assets/kdrama-wrapped/recap-card-${num}.png`}
                      alt={`K-Drama Wrapped recap card ${num}`}
                      className="cs-recap-card-img"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </section>

          {/* Development */}
          <section id="development" className="cs-section">
            <h2 className="cs-section-title">Development</h2>
            <p className="cs-body">
              I built the application using <span className="highlighted-word-development">React</span>, <span className="highlighted-word-development">TypeScript</span>, and <span className="highlighted-word-development">Next.js</span>, and deployed it on <span className="highlighted-word-development">Vercel</span>.
              To accelerate the development cycle and translate my UI mockups into components efficiently,
              I used <span className="highlighted-word-development">Figma MCP</span> for design implementation and <span className="highlighted-word-development">Antigravity IDE</span> for
              AI-assisted coding. While these tools allowed me to ship the front-end rapidly,
              the biggest technical challenge was figuring out how to take a user's messy,
              copy-pasted list of watched dramas and turn it into standardized data I could use
              to calculate their stats. I was able to solve the challenge by implementing the following:
            </p>

            <ul className="cs-custom-bullets">
              <motion.li
                className="cs-custom-bullet"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="cs-bullet-shape cs-bullet-shape--1" />
                <div className="cs-bullet-content">
                  <span className="cs-bullet-title">API Integration & Normalization</span>
                  <span className="cs-bullet-text">
                    I used the <span className="highlighted-word-development">TMDB API</span> as the central source of truth.
                    When a user inputs a drama title, the app queries the API to fetch the official metadata.
                    This ensured accurate calculations for total episodes and runtimes.  I also added a "Did you mean?" fallback system so users
                    don't hit a frustrating dead end if their spelling doesn't perfectly match the database.
                  </span>
                </div>
              </motion.li>
              <motion.li
                className="cs-custom-bullet"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <span className="cs-bullet-shape cs-bullet-shape--2" />
                <div className="cs-bullet-content">
                  <span className="cs-bullet-title">Genre Inferencing</span>
                  <span className="cs-bullet-text">
                    Because default TMDB genre tags are designed for broad global cinema, they fail to
                    capture the specific tropes of Korean television. I wrote a script
                    that evaluates a drama's metadata keywords and existing genres against a rule-based mapping system. By scanning for localized keywords, the script dynamically
                    infers and assigns custom, community-recognized tags (such as Fantasy or Slice of Life).
                  </span>
                </div>
              </motion.li>
              <motion.li
                className="cs-custom-bullet"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <span className="cs-bullet-shape cs-bullet-shape--3" />
                <div className="cs-bullet-content">
                  <span className="cs-bullet-title">The Vibe Algorithm</span>
                  <span className="cs-bullet-text">
                    To determine a user's overarching viewing personality, I built a custom classification
                    script based on a series of nested conditional rules. The algorithm tallies the user's
                    genre frequencies and passes them through a decision tree that evaluates dominant
                    genres while applying specific constraints (e.g., ensuring a user watched a minimum number
                    of thrillers before qualifying as a Detective). It also includes title-specific overrides,
                    boosting certain categories if specific, highly influential dramas are found in their top
                    history, before ultimately mapping the user to one of the five archetypes.
                  </span>
                </div>
              </motion.li>
            </ul>
          </section>

          {/* Insights */}
          <section id="insights" className="cs-section">
            <h2 className="cs-section-title">Insights</h2>
            <p className="cs-body">
              This project taught me a lot about building for delight. While the end goal was a
              fun, shareable social experience, relying on a global API for niche television
              metadata meant navigating some real-world data constraints.
            </p>
            <p className="cs-body">
              One challenge I couldn't completely solve was ongoing broadcasts. The API
              returns the projected total episode count rather than the currently aired count,
              which means the calculated watch hours for unfinished, currently airing shows
              can sometimes be artificially inflated.
            </p>
          </section>

          {/* Impact */}
          <section id="impact" className="cs-section">
            <h2 className="cs-section-title">Impact</h2>
            <p className="cs-body">
              Within the first week of launch (last week of December 2025), the community response was overwhelming with people sharing their recaps
              especially on Twitter (X).
            </p>

            <div className="cs-image-group">
              <div className="cs-image-slot">
                <img src="/assets/kdrama-wrapped/twitter-collage.png" alt="Collage of tweets sharing K-Drama Wrapped on X" />
              </div>
            </div>

            <div className="cs-stats-row">
              <div className="cs-stat">
                <span className="cs-stat-number">200+</span>
                <span className="cs-stat-label">Users in first week</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-number">8</span>
                <span className="cs-stat-label">Days to build &amp; ship</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* View Next Project */}
      <div className="cs-next-project">
        <span className="cs-next-label">Next Project</span>
        <Link to="/coming-soon" className="cs-next-card">
          <div className="cs-next-cover">
            <img src="/assets/project-cover-asd-journey.png" alt="ASD Journey cover" />
          </div>
          <div className="cs-next-info">
            <span className="cs-next-title">
              ASD Journey
            </span>
            <span className="cs-next-desc">Mapping the surgical journey of patients with Adult Spinal Deformity.</span>
          </div>
        </Link>
      </div>
    </main>
  )
}
