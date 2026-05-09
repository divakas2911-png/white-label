import './Services.css'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#1c1917"/>
        <path d="M10 16H22M10 12H18M10 20H20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'High-Authority Placements',
    desc: 'Every editorial link insertion is placed on vetted, high-DR websites with real organic traffic. No PBNs, no spam — only genuine publications.',
    tags: ['DR 50+', 'Real Traffic', 'Vetted Sites'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#1c1917"/>
        <path d="M16 10V22M10 16H22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="7" stroke="#f59e0b" strokeWidth="2"/>
      </svg>
    ),
    title: 'Niche-Relevant Content',
    desc: 'Links are embedded within topically relevant, already-indexed editorial content — giving your clients maximum link equity from aged, trusted pages.',
    tags: ['Contextual', 'Niche Relevant', 'Indexed Pages'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#1c1917"/>
        <path d="M12 12H20V20H12Z" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 15H22V22H15Z" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Natural Anchor Text',
    desc: 'We use diverse, natural anchor text profiles tailored to each campaign. No footprints, no over-optimization — just safe, effective link placements.',
    tags: ['Safe Anchors', 'Diverse Profile', 'Manual Review'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#1c1917"/>
        <path d="M10 13H22M10 17H18M10 21H20M14 9L16 11L18 9" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'White-Labeled Reporting',
    desc: 'Receive detailed, brandable reports with live URLs, domain metrics, and traffic data. Present everything to your clients as your own work.',
    tags: ['Your Brand', 'Live URLs', 'Full Metrics'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <div className="section-header">
          <span className="section-tag">White Label SEO Link Building</span>
          <h2 className="section-title">White Label Editorial Links — Our Core Service</h2>
          <p className="section-desc">
            Our white label SEO link building service places contextual editorial links on high-authority sites. Every white label backlink is branded as your own and delivered with full reporting.
          </p>
        </div>
        <div className="services-grid">
          {features.map((s, i) => (
            <div className="service-card" key={s.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span className="service-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
