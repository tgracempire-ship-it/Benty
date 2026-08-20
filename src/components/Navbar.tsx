import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { ModalType } from '../types';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

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
          <div className="brand-text-top">DAVID</div>
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
        <li className="nav-item-dropdown">
          <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>
            Services <span className="nav-arrow">▾</span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/services#structural" onClick={closeMenu}>Structural Analysis</Link></li>
            <li><Link to="/services#site" onClick={closeMenu}>Site Management</Link></li>
            <li><Link to="/services#quality" onClick={closeMenu}>Quality Control</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/process" className={`nav-link ${isActive('/process')}`} onClick={closeMenu}>
            Process
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        
        {/* Mobile CTA inside menu */}
        <li className="mobile-only-cta">
           <button
             className="btn btn-primary"
             style={{ width: '100%', marginTop: '10px' }}
             onClick={() => {
               onOpenModal('consultation');
               closeMenu();
             }}
           >
             Book Consultation
           </button>
        </li>
      </ul>

      {/* Desktop CTA */}
      <button
        className="btn btn-nav-cta btn-animate-click"
        onClick={() => onOpenModal('consultation')}
      >
        Book Consultation
      </button>
    </nav>
  );
}
