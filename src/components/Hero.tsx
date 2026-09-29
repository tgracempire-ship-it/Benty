import { firmSubtitle, firmTagline } from '../data/firmData';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline animate-stagger-1">
            <span style={{ display: 'block', color: 'var(--gold)', fontSize: '0.6em', marginBottom: '10px' }}>Hi, I'm Ebenezer.</span>
            {firmTagline.split('.').filter(Boolean).map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line.trim()}.</span>
            ))}
          </h1>
          <p className="hero-subtext animate-stagger-2">{firmSubtitle}</p>
          <div className="hero-buttons animate-stagger-3">
            <button
              className="btn btn-primary btn-animate-click"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </button>
            <button
              className="btn btn-outline btn-animate-click"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
