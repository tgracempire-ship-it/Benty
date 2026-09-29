import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Brand */}
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <div className="brand-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#0F3E4D" />
            <path d="M10 10 H20 C28 10 30 15 30 20 C30 25 28 30 20 30 H10 Z"
              fill="none" stroke="white" strokeWidth="2.5" />
            <line x1="10" y1="10" x2="10" y2="30" stroke="white" strokeWidth="2.5" />
            <line x1="10" y1="20" x2="22" y2="20" stroke="#EFA526" strokeWidth="1.5" />
          </svg>
        </div>
        <div>
          <div className="brand-text-top">EBENEZER</div>
          <div className="brand-text-bottom">Engineering &amp; Consulting</div>
        </div>
      </Link>
      
      {/* Mobile Toggle */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Nav links */}
      <ul className={`navbar-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
        <li>
          <a href="#services" className="nav-link" onClick={closeMenu}>
            Expertise
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            Experience & Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact Me
          </a>
        </li>
        
        {/* Mobile CTA inside menu */}
        <li className="mobile-only-cta">
           <button
             className="btn btn-primary"
             style={{ width: '100%', marginTop: '10px' }}
             onClick={() => {
               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
               closeMenu();
             }}
           >
             Hire Me
           </button>
        </li>
      </ul>

      {/* Desktop CTA */}
      <button
        className="btn btn-nav-cta btn-animate-click"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Hire Me
      </button>
    </nav>
  );
}
