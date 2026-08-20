import type { ModalType } from '../types';
import { firmSubtitle, firmTagline } from '../data/firmData';

interface HeroProps {
  onOpenModal: (type: ModalType) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline animate-stagger-1">
            {firmTagline.split('.').filter(Boolean).map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line.trim()}.</span>
            ))}
          </h1>
          <p className="hero-subtext animate-stagger-2">{firmSubtitle}</p>
          <div className="hero-buttons animate-stagger-3">
            <button
              className="btn btn-primary btn-animate-click"
              onClick={() => onOpenModal('consultation')}
            >
              Book a Technical Consultation
            </button>
            <button
              className="btn btn-outline btn-animate-click"
              onClick={() => onOpenModal('proposal')}
            >
              Request a Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
