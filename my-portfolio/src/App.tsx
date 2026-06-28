import { Link } from 'react-router-dom'
import './App.css'

export default function HomePage() {
  return (
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

      {/* Portfolio Sections */}
      <div className="sections-row" role="region" aria-label="Portfolio Sections">
        {/* PROJECTS — with peek cards */}
        <Link to="/projects" className="section-nav" id="nav-projects">
          <span className="section-link">Projects</span>
          <div className="peek-cards" aria-hidden="true">
            <img
              src="/assets/project-peak-cpsc-581-v2.png"
              alt=""
              className="peek-card peek-card--1"
            />
            <img
              src="/assets/project-peak-asd-journey.png"
              alt=""
              className="peek-card peek-card--2"
            />
            <img
              src="/assets/project-peak-kdrama-wrapped.png"
              alt=""
              className="peek-card peek-card--3"
            />
          </div>
        </Link>

        <img src="/assets/star_1.svg" alt="" className="section-star" aria-hidden="true" />

        {/* EXPERIENCE — text hover only for now, peek-ready */}
        <a href="#" className="section-nav" id="nav-experience">
          <span className="section-link">Experience</span>
        </a>

        <img src="/assets/star_2.svg" alt="" className="section-star" aria-hidden="true" />

        {/* PLAYGROUND — text hover only for now, peek-ready */}
        <a href="#" className="section-nav" id="nav-playground">
          <span className="section-link">Playground</span>
        </a>
      </div>
    </main>
  )
}
