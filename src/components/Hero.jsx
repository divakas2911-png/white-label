import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-grid-overlay" />
      </div>
      <div className="hero-inner">
        <div className="hero-badge fade-up">
          <span className="badge-dot" />
          Trusted by Leading SEO and Link Building Agencies Worldwide
        </div>
        <h1 className="hero-headline fade-up delay-1">
          The <span className="highlight">White Label Link Building Company</span> Trusted by SEO and Link Building Agencies for High-Quality Backlinks
        </h1>
        <p className="hero-sub fade-up delay-2">
          A fully white-label link building service designed for SEO and Link Building agencies who want results without the overhead.
        </p>
        <div className="hero-actions fade-up delay-3">
          <a href="https://calendar.app.google/3WcusaLKF1q7T89e9" target="_blank" rel="noopener noreferrer" className="btn-primary btn-cube">Partner With Us</a>
        </div>
        <div className="hero-stats fade-up delay-4">
          <div className="stat">
            <span className="stat-num">15K+</span>
            <span className="stat-label">Links Placed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">DR 50+</span>
            <span className="stat-label">Average Domain Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
