import ExecutionSteps from '../components/ExecutionSteps';
import Footer from '../components/Footer';

export default function ProcessPage() {
  return (
    <div className="page-standard animate-fade-in">
      <div className="page-header bg-teal">
        <div className="container">
          <h1 className="page-title">The Execution Advantage</h1>
          <p className="page-subtitle">
            Our strict 3-step methodology guarantees precision from drafting to handover.
          </p>
        </div>
      </div>
      
      <div className="container page-content" style={{ padding: '60px 24px' }}>
         <ExecutionSteps />
         
         <div className="process-details" style={{ marginTop: '60px' }}>
            <h2 className="section-heading">Why Our Process Works</h2>
            <div className="process-grid">
               <div className="process-text">
                  <h3>Seamless MS Project Integration</h3>
                  <p>We tie every structural milestone directly into your master MS Project schedule. By identifying critical path dependencies early, we prevent downstream delays.</p>
               </div>
               <div className="process-text">
                  <h3>Proactive Field Engineering</h3>
                  <p>Our engineers don't just sit in the office. Active site supervision means we catch deviations from AutoCAD drafts instantly, preventing costly rework.</p>
               </div>
            </div>
         </div>
      </div>
      
      <Footer />
    </div>
  );
}
