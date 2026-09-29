import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* Brand with Avatar */}
      <a href="#hero" className="navbar-brand" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
        <div className="brand-avatar-wrap">
          <img 
            src="/ebenezer-avatar.jpg" 
            alt="Ebenezer David" 
            className="brand-avatar-img"
          />
          <span className="status-indicator" title="Available for projects"></span>
        </div>
        <div>
          <div className="brand-text-top">EBENEZER DAVID</div>
          <div className="brand-text-bottom">Civil &amp; Structural Engineer</div>
        </div>
      </a>
      
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
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
            About
          </a>
        </li>
        <li>
          <a href="#expertise" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('expertise'); }}>
            Expertise
          </a>
        </li>
        <li>
          <a href="#methodology" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('methodology'); }}>
            Methodology
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>
            Experience
          </a>
        </li>
        <li>
          <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Contact
          </a>
        </li>
        
        {/* Mobile CTA inside menu */}
        <li className="mobile-only-cta">
           <button
             className="btn btn-primary"
             style={{ width: '100%', marginTop: '10px' }}
             onClick={() => scrollTo('contact')}
           >
             Hire Ebenezer
           </button>
        </li>
      </ul>

      {/* Desktop CTA */}
      <button
        className="btn btn-nav-cta btn-animate-click"
        onClick={() => scrollTo('contact')}
      >
        Hire Ebenezer
      </button>
    </nav>
  );
}
