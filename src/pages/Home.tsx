import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import ExecutionSteps from '../components/ExecutionSteps';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';
import type { ModalType } from '../types';

interface ContextType {
  openModal: (type: ModalType) => void;
}

export default function Home() {
  const { openModal } = useOutletContext<ContextType>();

  return (
    <main className="page-split animate-fade-in">
      {/* LEFT COLUMN */}
      <div className="col-left">
        <Hero onOpenModal={openModal} />
        <TrustBar />
        <Services variant="left" limit={3} />
        <div className="left-execution-heading">
          <h2>THE EXECUTION ADVANTAGE</h2>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-right">
        <Services variant="right" />
        <ExecutionSteps />
        <CtaBanner onOpenModal={openModal} />
        <Footer />
      </div>
    </main>
  );
}
