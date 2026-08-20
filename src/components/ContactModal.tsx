import { useState, useEffect } from 'react';
import type { ModalType } from '../types';

interface ContactModalProps {
  type: ModalType;
  onClose: () => void;
}

export default function ContactModal({ type, onClose }: ContactModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  if (!type) return null;

  const title = type === 'consultation' 
    ? 'Book a Technical Consultation' 
    : 'Request a Proposal';

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">&times;</button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-desc">
          Fill out the form below and our engineering team will get back to you within 24 hours.
        </p>
        
        <form className="modal-form animated-form" action="https://formsubmit.co/Benytecons@gmail.com" method="POST">
          <input type="hidden" name="_subject" value={`New Inquiry: ${title}`} />
          <input type="hidden" name="_captcha" value="true" />
          
          <div className="form-group floating-label-group">
            <input 
              type="text" 
              id="name" 
              name="name"
              required 
              value={formData.name}
              onChange={handleChange}
              className="floating-input"
            />
            <label htmlFor="name" className="floating-label">Full Name</label>
            <span className="input-highlight"></span>
          </div>
          
          <div className="form-group floating-label-group">
            <input 
              type="email" 
              id="email" 
              name="email"
              required 
              value={formData.email}
              onChange={handleChange}
              className="floating-input"
            />
            <label htmlFor="email" className="floating-label">Work Email</label>
            <span className="input-highlight"></span>
          </div>
          
          <div className="form-group floating-label-group">
            <input 
              type="text" 
              id="company" 
              name="company"
              required 
              value={formData.company}
              onChange={handleChange}
              className="floating-input"
            />
            <label htmlFor="company" className="floating-label">Company / Organization</label>
            <span className="input-highlight"></span>
          </div>
          
          <div className="form-group floating-label-group">
            <textarea 
              id="message" 
              name="message"
              rows={3} 
              required 
              value={formData.message}
              onChange={handleChange}
              className="floating-textarea"
            ></textarea>
            <label htmlFor="message" className="floating-label">Project Details</label>
            <span className="input-highlight"></span>
          </div>
          
          <button type="submit" id="submit-btn" className="btn-primary btn-animate-click" style={{ width: '100%', marginTop: '15px' }}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
