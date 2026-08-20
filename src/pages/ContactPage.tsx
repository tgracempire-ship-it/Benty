import { useState } from 'react';
import Footer from '../components/Footer';
import { contactEmail, contactPhone, contactAddress } from '../data/firmData';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="page-standard animate-fade-in">
      <div className="page-header bg-slate">
        <div className="container">
          <h1 className="page-title text-teal">Contact Us</h1>
          <p className="page-subtitle text-gray">
            Get in touch with our engineering team for consultations and proposals.
          </p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="contact-grid">
           
           {/* Direct Contact Info */}
           <div className="contact-info-card">
              <h2>Reach Out Directly</h2>
              <div className="info-item">
                 <span className="info-icon">✉️</span>
                 <div>
                    <strong>Email</strong>
                    <p>{contactEmail}</p>
                 </div>
              </div>
              <div className="info-item">
                 <span className="info-icon">📞</span>
                 <div>
                    <strong>Phone</strong>
                    <p>{contactPhone}</p>
                 </div>
              </div>
              <div className="info-item">
                 <span className="info-icon">📍</span>
                 <div>
                    <strong>Headquarters</strong>
                    <p style={{ whiteSpace: 'pre-line' }}>{contactAddress}</p>
                 </div>
              </div>
           </div>

           {/* Embedded Form */}
           <div className="contact-form-card">
              <h2>Send an Email Proposal</h2>
              <form className="modal-form animated-form" action={`https://formsubmit.co/${contactEmail}`} method="POST">
                <input type="hidden" name="_subject" value="New Inquiry from Website Contact Page" />
                <input type="hidden" name="_captcha" value="true" />
                
                <div className="form-group floating-label-group">
                  <input type="text" id="name" name="name" required className="floating-input" value={formData.name} onChange={handleChange} />
                  <label htmlFor="name" className="floating-label">Full Name</label>
                  <span className="input-highlight"></span>
                </div>
                
                <div className="form-group floating-label-group">
                  <input type="email" id="email" name="email" required className="floating-input" value={formData.email} onChange={handleChange} />
                  <label htmlFor="email" className="floating-label">Work Email</label>
                  <span className="input-highlight"></span>
                </div>
                
                <div className="form-group floating-label-group">
                  <textarea id="message" name="message" rows={4} required className="floating-textarea" value={formData.message} onChange={handleChange}></textarea>
                  <label htmlFor="message" className="floating-label">How can we help?</label>
                  <span className="input-highlight"></span>
                </div>
                
                <button type="submit" className="btn-primary btn-animate-click" style={{ width: '100%', marginTop: '10px' }}>
                  Send Message
                </button>
              </form>
           </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
