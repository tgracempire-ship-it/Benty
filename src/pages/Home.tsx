import { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { contactEmail } from '../data/firmData';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const projects = [
    { 
      title: 'Absen Projects and Services', 
      type: 'Civil Structural Engineer', 
      location: 'Site Engineering & PEMB',
      desc: 'Managed site engineering, pre-engineered metal buildings (PEMB), site execution, and complex structural engineering deliverables.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'Gruppo Corazonne Consulting', 
      type: 'Project Coordinator', 
      location: 'Strategic Operations',
      desc: 'Oversaw strategic communications, advanced project scheduling, rigorous site inspections, and comprehensive quality control.',
      image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'Studio Emodi', 
      type: 'Structural Engineer', 
      location: 'Structural Systems',
      desc: 'Handled detailed site coordination and the design and implementation of robust structural systems.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'Federal Ministry of Power, Works & Housing', 
      type: 'Professional Postings', 
      location: 'Government Infrastructure',
      desc: 'Completed 4 professional experiences involving precise AutoCAD drafting, construction management, and engineering documentation.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Active Site Inspection' },
    { url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Structural Planning' },
    { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Steel Framework Erection' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'AutoCAD & Drafting' },
    { url: 'https://images.unsplash.com/photo-1593444078864-77dbbb219b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Quality Assurance Testing' },
    { url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Commercial Development' }
  ];

  return (
    <main className="animate-fade-in" style={{ paddingBottom: '0' }}>
      
      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Hero onOpenModal={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }} />
      </section>

      {/* Services / Expertise */}
      <section id="services" style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <h2 style={{ color: 'var(--teal)', fontSize: '32px', marginBottom: '40px', textAlign: 'center' }} className="reveal-on-scroll">My Expertise</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Services variant="left" limit={3} />
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section id="projects" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'var(--teal)', fontSize: '32px', marginBottom: '30px', textAlign: 'center' }} className="reveal-on-scroll">Professional Experience</h2>
          <div className="projects-grid" style={{ marginBottom: '80px' }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card reveal-on-scroll">
                <div className="project-img-placeholder" style={{ 
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center',
                  borderBottom: '1px solid #E2E8F0'
                }}>
                </div>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <span className="project-badge">{p.type}</span>
                  <p className="project-loc" style={{ color: '#0F3E4D', fontWeight: 600, marginBottom: '8px' }}>{p.location}</p>
                  <p className="project-loc" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: 'var(--teal)', fontSize: '32px', marginBottom: '15px', textAlign: 'center' }} className="reveal-on-scroll">Project Gallery</h2>
          <p style={{ textAlign: 'center', color: 'var(--gray-text)', marginBottom: '40px' }} className="reveal-on-scroll">
            A visual showcase of my engineering execution and site management.
          </p>
          
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-card reveal-on-scroll">
                <div 
                  className="gallery-img" 
                  style={{ 
                    backgroundImage: `url(${img.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                  }}
                />
                <div className="gallery-caption">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 0', background: 'var(--slate)' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--teal)', fontSize: '32px', marginBottom: '15px', textAlign: 'center' }} className="reveal-on-scroll">Get in Touch</h2>
          <p style={{ textAlign: 'center', color: 'var(--gray-text)', marginBottom: '40px' }} className="reveal-on-scroll">
            Ready to discuss your next project? Send me a message below.
          </p>

          <div className="contact-form-card reveal-on-scroll" style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <form className="modal-form animated-form" action={`https://formsubmit.co/${contactEmail}`} method="POST">
              <input type="hidden" name="_subject" value="New Inquiry from Portfolio Website" />
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
                <label htmlFor="message" className="floating-label">How can I help?</label>
                <span className="input-highlight"></span>
              </div>
              
              <button type="submit" className="btn-primary btn-animate-click" style={{ width: '100%', marginTop: '10px' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
