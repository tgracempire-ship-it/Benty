import { contactPhone } from '../data/firmData';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-portfolio" id="hero">
      <div className="hero-portfolio-container">
        {/* LEFT COLUMN: Executive Profile Copy */}
        <div className="hero-left-col">
          <div className="availability-badge animate-stagger-1">
            <span className="pulsing-dot"></span>
            Available for Engineering &amp; Project Consultations
          </div>

          <h1 className="hero-name animate-stagger-1">
            <span className="hero-eyebrow">Civil &amp; Structural Engineer · Project Manager</span>
            EBENEZER DAVID
            <span className="hero-gold-headline">Engineering Precision. Structural Integrity. Real-World Execution.</span>
          </h1>

          <p className="hero-lead animate-stagger-2">
            With over 150+ supervised sites across commercial developments and critical infrastructure, 
            I bridge the gap between rigorous AutoCAD design theory, Pre-Engineered Metal Building (PEMB) 
            erection, and zero-compromise site safety.
          </p>

          <div className="hero-pills-list animate-stagger-2">
            <span className="hero-pill">🏗 PEMB &amp; Steel Structures</span>
            <span className="hero-pill">📐 AutoCAD Precision Drafting</span>
            <span className="hero-pill">⏱ MS Project Controls</span>
            <span className="hero-pill">🛡 100% Code Compliance</span>
          </div>

          <div className="hero-cta-group animate-stagger-3">
            <button
              className="btn btn-primary btn-animate-click"
              onClick={() => scrollTo('contact')}
            >
              Hire Ebenezer / Request Proposal
            </button>
            <button
              className="btn btn-outline-teal btn-animate-click"
              onClick={() => scrollTo('experience')}
            >
              View Work History
            </button>
            <a
              href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-whatsapp btn-animate-click"
              title="Chat directly on WhatsApp"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <span>Quick WhatsApp</span>
            </a>
          </div>

          <div className="hero-metrics-row animate-stagger-3">
            <div className="hero-metric-box">
              <span className="metric-number">150+</span>
              <span className="metric-label">Sites Supervised</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-box">
              <span className="metric-number">98%</span>
              <span className="metric-label">On-Time Delivery</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-box">
              <span className="metric-number">100%</span>
              <span className="metric-label">Code Pass Rate</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Ebenezer's Portrait Card */}
        <div className="hero-right-col animate-fade-in">
          <div className="portrait-card-wrapper">
            {/* Glowing Accent Glow */}
            <div className="portrait-glow-halo"></div>

            <div className="portrait-main-frame">
              <img 
                src="/ebenezer-portrait.jpg" 
                alt="Engr. Ebenezer David on site" 
                className="portrait-full-img"
              />

              {/* Floating Glass Badge 1: Top Right */}
              <div className="floating-badge badge-top-right">
                <span className="badge-icon">🏗</span>
                <div>
                  <strong>PEMB &amp; Steel Specialist</strong>
                  <small>Structural Engineering Execution</small>
                </div>
              </div>

              {/* Floating Glass Badge 2: Bottom Left */}
              <div className="floating-badge badge-bottom-left">
                <span className="badge-icon">📍</span>
                <div>
                  <strong>Active in Lagos Infrastructure</strong>
                  <small>Commercial &amp; Civil Works</small>
                </div>
              </div>

              {/* Floating Glass Badge 3: Bottom Right Pill */}
              <div className="floating-badge badge-bottom-right">
                <span className="badge-icon">🛡</span>
                <div>
                  <strong>Zero Safety Compromises</strong>
                  <small>Rigorous QA/QC Protocols</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
