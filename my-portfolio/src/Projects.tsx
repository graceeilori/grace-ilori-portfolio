import './Projects.css'

/* ---- Project Data ---- */
const projects = [
  {
    id: 'kdpredict',
    link: '#',
    image: '/assets/project-cover-kdpredict.png',
    year: 'ONGOING',
    title: 'KDpredict',
    description: 'Visualizing Kidney Failure and Mortality Risk.',
    tags: ['RESEARCH', 'DEVELOPMENT', 'UX'],
  },
  {
    id: 'cpsc-581',
    link: '#',
    image: '/assets/project-cover-cpsc-581.png',
    year: '2026',
    title: 'CPSC 581 Collection',
    description: 'Visual design, embodied interaction, and physical computing.',
    tags: ['DEVELOPMENT', 'UX'],
  },
  {
    id: 'kdrama-wrapped',
    link: '/projects/kdrama-wrapped',
    image: '/assets/project-cover-kdrama-wrapped-v2.png',
    year: '2025',
    title: 'K-Drama Wrapped',
    description: 'A Spotify-Wrapped inspired recap for K-drama watchers.',
    tags: ['DEVELOPMENT', 'UX'],
  },
  {
    id: 'asd-journey',
    link: '#',
    image: '/assets/project-cover-asd-journey.png',
    year: '2025',
    title: 'ASD Journey',
    description: 'Mapping the surgical journey of patients with Adult Spinal Deformity.',
    tags: ['RESEARCH'],
  },
]

const tagStyles: Record<string, React.CSSProperties> = {
  RESEARCH: { color: 'var(--accent-army)' },
  DEVELOPMENT: { color: 'var(--accent-teal)' },
  UX: { color: 'var(--accent-lavender)' },
};

/* ---- Projects Page ---- */
export default function ProjectsPage() {
  return (
    <main className="projects-page" id="projects">
      {/* Page Header */}
      <header className="projects-header animate-in animate-in-delay-2">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          a running log of what I've researched, designed, and shipped
        </p>
      </header>

      {/* Project Cards */}
      <section className="projects-list">
        {projects.map((project, index) => (
          <article
            key={project.id}
            onClick={() => {
              if (project.link !== "#") {
                window.location.href = project.link;
              }
            }}
            className={`proj-card animate-in animate-in-delay-${Math.min(index + 3, 6)}`}
          >
            {/* Image flips sides on even/odd */}
            <div className={`proj-card-image ${index % 2 !== 0 ? 'proj-card-image--right' : ''}`}>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
            </div>

            {/* Text content */}
            <div className="proj-card-text">
              <span className={`proj-year-badge ${project.year === 'ONGOING' ? 'proj-year-badge--ongoing' : ''}`}>
                {project.year}
              </span>
              <h2 className="proj-card-title">{project.title}</h2>
              <p className="proj-card-desc">{project.description}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag"
                    style={{ color: tagStyles[tag]?.color }}>#{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
