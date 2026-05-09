import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <span className="navbar-logo-text">
            <span className="logo-wl">White Label</span>
            <span className="logo-lbc">Link Building</span>
          </span>
          <span className="logo-by">by SAASY LINKS</span>
        </a>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li className="nav-cta-wrapper">
            <a href="https://calendar.app.google/3WcusaLKF1q7T89e9" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setMenuOpen(false)}>Partner With Us</a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
