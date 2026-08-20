import Footer from '../components/Footer';

export default function ProjectsPage() {
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
    <div className="page-standard animate-fade-in">
      <div className="page-header bg-slate">
        <div className="container">
          <h1 className="page-title text-teal">Projects & Experience</h1>
          <p className="page-subtitle text-gray">
            A proven track record of structural integrity, precision drafting, and proactive site leadership.
          </p>
        </div>
      </div>
      
      <div className="container page-content">
        <h2 style={{ color: 'var(--teal)', fontSize: '28px', marginBottom: '30px', textAlign: 'center' }} className="reveal-on-scroll">Professional Experience</h2>
        <div className="projects-grid">
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
        
        <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--slate)' }}>
          <h2 style={{ color: 'var(--teal)', fontSize: '28px', marginBottom: '15px', textAlign: 'center' }} className="reveal-on-scroll">Project Gallery</h2>
          <p style={{ textAlign: 'center', color: 'var(--gray-text)', marginBottom: '40px' }} className="reveal-on-scroll">
            A visual showcase of our engineering execution and site management.
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
      </div>
      
      <Footer />
    </div>
  );
}
