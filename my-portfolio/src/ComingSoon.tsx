import { useNavigate } from 'react-router-dom'
import './CaseStudy.css'

export default function ComingSoonPage() {
  const navigate = useNavigate()

  return (
    <main className="case-study" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        className="cs-back"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          fontFamily: 'inherit',
          alignSelf: 'flex-start',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Go Back
      </button>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '24px',
        paddingBottom: '80px',
      }}>
        <img
          src="/assets/decor_flower.png"
          alt=""
          aria-hidden="true"
          style={{ width: '80px', opacity: 0.75, transform: 'rotate(-15deg)' }}
        />
        <h1 className="cs-title" style={{ marginBottom: 0 }}>Coming Soon</h1>
        <p className="cs-summary" style={{ marginBottom: 0, textAlign: 'center' }}>
          I'm still building this one, check back soon!
        </p>
      </div>
    </main>
  )
}
