import Footer from '../components/Footer';

export default function ExperiencePage() {
  const projects = [
    { 
      title: 'Absen Projects and Services', 
      type: 'Civil Structural Engineer', 
      location: 'Site Engineering & PEMB',
      desc: 'Managed site engineering, pre-engineered metal buildings (PEMB), site execution, and complex structural engineering deliverables.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // modern architecture/steel
    },
    { 
      title: 'Gruppo Corazonne Consulting', 
      type: 'Project Coordinator', 
      location: 'Strategic Operations',
      desc: 'Oversaw strategic communications, advanced project scheduling, rigorous site inspections, and comprehensive quality control.',
      image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // active construction site
    },
    { 
      title: 'Studio Emodi', 
      type: 'Structural Engineer', 
      location: 'Structural Systems',
      desc: 'Handled detailed site coordination and the design and implementation of robust structural systems.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // blueprints and hardhat
    },
    { 
      title: 'Federal Ministry of Power, Works & Housing', 
      type: 'Professional Postings', 
      location: 'Government Infrastructure',
      desc: 'Completed 4 professional experiences involving precise AutoCAD drafting, construction management, and engineering documentation.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // engineering planning/drafting
    }
  ];

  return (
    <div className="page-standard animate-fade-in">
      <div className="page-header bg-slate">
        <div className="container">
          <h1 className="page-title text-teal">Professional Experience</h1>
          <p className="page-subtitle text-gray">
            A proven track record of structural integrity, precision drafting, and proactive site leadership.
          </p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card reveal-on-scroll">
              <div className="project-img-placeholder" style={{ 
                backgroundImage: `url(${p.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
      </div>
      
      <Footer />
    </div>
  );
}
