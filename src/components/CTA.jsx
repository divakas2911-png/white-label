import './CTA.css'

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-shapes">
            <div className="cta-shape cta-shape-1" />
            <div className="cta-shape cta-shape-2" />
          </div>
          <div className="cta-content">
            <h2 className="cta-title">Start Scaling With a Trusted White Label Link Building Company</h2>
            <p className="cta-desc">
              Join leading agencies using our white label link building services to deliver high-quality backlinks under their own brand.
              No contracts, no minimum order value — just results from a reputed white label link building company you can rely on.
            </p>
            <div className="cta-actions">
              <a href="https://calendar.app.google/3WcusaLKF1q7T89e9" target="_blank" rel="noopener noreferrer" className="btn-primary btn-cta-main">
                Partner With Us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <p className="cta-fine">Free consultation · No setup fees · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
