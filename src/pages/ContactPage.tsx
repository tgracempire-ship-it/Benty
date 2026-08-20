import { useState } from 'react';
import Footer from '../components/Footer';
import { contactEmail, contactPhone, contactAddress } from '../data/firmData';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = '15551234567'; 
    const text = `*New Contact Page Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
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
              <h2>Send a Message via WhatsApp</h2>
              <form className="modal-form animated-form" onSubmit={handleWhatsappSubmit}>
                <div className="form-group floating-label-group">
                  <input type="text" id="name" required className="floating-input" value={formData.name} onChange={handleChange} />
                  <label htmlFor="name" className="floating-label">Full Name</label>
                  <span className="input-highlight"></span>
                </div>
                
                <div className="form-group floating-label-group">
                  <input type="email" id="email" required className="floating-input" value={formData.email} onChange={handleChange} />
                  <label htmlFor="email" className="floating-label">Work Email</label>
                  <span className="input-highlight"></span>
                </div>
                
                <div className="form-group floating-label-group">
                  <textarea id="message" rows={4} required className="floating-textarea" value={formData.message} onChange={handleChange}></textarea>
                  <label htmlFor="message" className="floating-label">How can we help?</label>
                  <span className="input-highlight"></span>
                </div>
                
                <button type="submit" className="btn-primary btn-animate-click" style={{ width: '100%', marginTop: '10px', background: '#25D366' }}>
                  Open WhatsApp
                </button>
              </form>
           </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
