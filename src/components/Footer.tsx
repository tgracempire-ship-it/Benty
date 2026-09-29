export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-strip-modern">
      <div className="container footer-content-wrap">
        <div className="footer-left-info">
          <div className="footer-brand-title">ENGR. EBENEZER DAVID</div>
          <p className="footer-brand-sub">Civil &amp; Structural Engineer &bull; Project Management</p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Ebenezer David. All rights reserved. Engineering precision, safety &amp; compliance.
          </p>
        </div>

        <div className="footer-quick-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
          <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollTo('expertise'); }}>Expertise</a>
          <a href="#methodology" onClick={(e) => { e.preventDefault(); scrollTo('methodology'); }}>Methodology</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Experience</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
