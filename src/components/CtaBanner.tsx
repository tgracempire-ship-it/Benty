import type { ModalType } from '../types';

interface CtaBannerProps {
  onOpenModal: (type: ModalType) => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  return (
    <section className="cta-banner" id="cta">
      <h2>READY TO SECURE YOUR PROJECT'S SUCCESS?</h2>
      <button 
        className="btn-cta-gold"
        onClick={() => onOpenModal('proposal')}
      >
        Request a Structural Engineering Proposal
      </button>
    </section>
  );
}
