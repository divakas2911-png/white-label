import './Footer.css'

const quickLinks = [
  { label: 'Editorial Link Insertions', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Partner With Us', href: 'https://calendar.app.google/3WcusaLKF1q7T89e9' },
]

const companyLinks = [
  { label: 'About Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partner With Us', href: 'https://calendar.app.google/3WcusaLKF1q7T89e9' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-wl">White Label</span>
              <span className="logo-lbc">Link Building</span>
              <span className="logo-by">by SAASY LINKS</span>
            </a>
            <p className="footer-tagline">
              The White Label Link Building Company Trusted by SEO and Link Building Agencies for High-Quality Backlinks
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/saasy-links/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              {companyLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul>
              <li><a href="mailto:vikas@saasylinks.com">vikas@saasylinks.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SAASY LINKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
