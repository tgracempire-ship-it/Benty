import { useOutletContext } from 'react-router-dom';
import Services from '../components/Services';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';
import type { ModalType } from '../types';

export default function ServicesPage() {
  const { openModal } = useOutletContext<{ openModal: (t: ModalType) => void }>();

  return (
    <div className="page-standard animate-fade-in">
      <div className="page-header bg-teal">
        <div className="container">
          <h1 className="page-title">Our Engineering Services</h1>
          <p className="page-subtitle">
            Comprehensive civil and structural engineering solutions for industrial and commercial projects.
          </p>
        </div>
      </div>
      
      <div className="container page-content">
        <Services variant="right" />
        
        <div className="service-details">
          {/* Detailed descriptions can go here */}
          <div className="detail-card">
            <h3>Pre-Engineered Metal Buildings (PEMB)</h3>
            <p>We are industry leaders in designing and analyzing complex PEMB structures, ensuring maximum cost-efficiency without compromising on structural integrity or safety codes.</p>
          </div>
          <div className="detail-card">
            <h3>Rigorous Quality Control</h3>
            <p>From concrete slump testing to final load inspections, our certified engineers perform strict on-site testing to guarantee every material meets rigorous federal and state standards.</p>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '40px' }}>
         <CtaBanner onOpenModal={openModal} />
      </div>
      <Footer />
    </div>
  );
}
