import { useState } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { contactEmail, contactPhone, contactAddress } from '../data/firmData';

export default function Home() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    projectType: 'Structural Design & PEMB', 
    message: '' 
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const workHistory = [
    {
      company: 'Absen Projects and Services',
      role: 'Civil Structural Engineer',
      focus: 'Site Engineering & Pre-Engineered Metal Buildings (PEMB)',
      period: 'Major Commercial & Industrial Engagements',
      desc: 'Directed hands-on site execution, structural steel erection, PEMB load distribution analysis, and structural concrete quality checks for large-span commercial facilities.',
      highlights: ['PEMB Frame Erection', 'Foundation Stress Analysis', 'Subcontractor Alignment', 'Safety Compliance']
    },
    {
      company: 'Gruppo Corazonne Consulting',
      role: 'Project Coordinator',
      focus: 'Strategic Operations & Multi-Disciplinary Site Oversight',
      period: 'High-Velocity Project Delivery',
      desc: 'Orchestrated strategic site inspections, comprehensive quality control audits, MS Project critical-path scheduling, and cross-functional engineering communications.',
      highlights: ['Critical Path Method (CPM)', 'QA/QC Inspections', 'Material Procurement QA', 'Stakeholder Reporting']
    },
    {
      company: 'Studio Emodi',
      role: 'Structural Engineer',
      focus: 'Structural Systems Design & Site Implementation',
      period: 'Specialized Architectural & Civil Works',
      desc: 'Executed complex load calculations, AutoCAD construction drafting, structural reinforcement detailing, and technical resolution for challenging site conditions.',
      highlights: ['Reinforced Concrete Detailing', 'AutoCAD Drafting', 'Load-Bearing Analysis', 'Site Coordination']
    },
    {
      company: 'Federal Ministry of Power, Works & Housing',
      role: 'Professional Postings & Supervision',
      focus: 'Government Infrastructure & Public Civil Works',
      period: '4 Professional Postings Completed',
      desc: 'Delivered precise AutoCAD drafting, construction verification, standard building code compliance audits, and comprehensive technical documentation for public infrastructure.',
      highlights: ['Regulatory Compliance', 'Public Infrastructure', 'AutoCAD Documentation', 'Material Verification']
    }
  ];

  const expertiseList = [
    {
      id: 'exp-1',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 22h16M2 18h20M12 2v16M7 7l5-5 5 5M7 17l5-5 5 5" />
        </svg>
      ),
      title: 'Structural Analysis & PEMB Design',
      desc: 'Specializing in Pre-Engineered Metal Buildings (PEMB), steel frame load distribution, and structural optimization for industrial warehouses, hangars, and commercial complexes.'
    },
    {
      id: 'exp-2',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Site Supervision & Safety Protocols',
      desc: 'Proactive on-site leadership, daily field execution logs, zero-compromise PPE safety governance, and strict adherence to structural engineering standards.'
    },
    {
      id: 'exp-3',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Project Controls & Milestone Tracking',
      desc: 'Advanced schedule planning using MS Project, milestone management, critical-path analysis, and budget risk mitigation to guarantee on-time completion.'
    },
    {
      id: 'exp-4',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: 'Quality Control & AutoCAD Drafting',
      desc: 'Rigorous concrete slump/cylinder compression testing, rebar placement verification, and high-precision AutoCAD construction submittal drawings.'
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Consultation & Feasibility',
      phase: 'Diagnostic & Scope',
      desc: 'Thorough evaluation of project scope, soil mechanics, structural loads, regulatory mandates, and structural material constraints.'
    },
    {
      step: '02',
      title: 'Precision Design & Submittals',
      phase: 'AutoCAD & Engineering Specs',
      desc: 'Detailed structural modeling, Pre-Engineered Metal Building calculations, drafting, and regulatory pre-compliance submittal packages.'
    },
    {
      step: '03',
      title: 'Site Leadership & Execution',
      phase: 'Field Supervision & QA/QC',
      desc: 'Hands-on on-site direction, subcontractor management, continuous quality inspections, and milestone handover with zero compromises.'
    }
  ];

  const galleryImages = [
    { 
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'Pre-Engineered Steel Framework Erection',
      tag: 'PEMB Steel'
    },
    { 
      url: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'On-Site Engineering Inspection & Quality Audit',
      tag: 'Field Supervision'
    },
    { 
      url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'Structural Reinforcement & Foundation Detailing',
      tag: 'Reinforced Concrete'
    },
    { 
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'AutoCAD Civil Submittal Drawings & Blueprint Planning',
      tag: 'CAD Drafting'
    },
    { 
      url: 'https://images.unsplash.com/photo-1593444078864-77dbbb219b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'Concrete Slump & Compression Quality Testing',
      tag: 'Material Testing'
    },
    { 
      url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'Commercial Building Shell & Handover Execution',
      tag: 'Commercial Projects'
    }
  ];

  return (
    <main className="landing-wrapper animate-fade-in">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. EXECUTIVE CREDIBILITY RIBBON */}
      <section className="credibility-ribbon">
        <div className="container ribbon-flex">
          <div className="ribbon-item">
            <span className="ribbon-icon">🛡</span>
            <div>
              <strong>Federal Regulatory Compliance</strong>
              <span>Pre-approved engineering standards</span>
            </div>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <span className="ribbon-icon">⏱</span>
            <div>
              <strong>98% On-Time Project Delivery</strong>
              <span>MS Project milestone governance</span>
            </div>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <span className="ribbon-icon">👷</span>
            <div>
              <strong>State-Certified Leadership</strong>
              <span>Rigorous site oversight &amp; safety</span>
            </div>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <span className="ribbon-icon">🧪</span>
            <div>
              <strong>Zero Quality Compromises</strong>
              <span>Concrete testing &amp; weld verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT EBENEZER SECTION */}
      <section id="about" className="section-block bg-white">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-card reveal-on-scroll">
              <div className="about-photo-wrapper">
                <img 
                  src="/ebenezer-portrait.jpg" 
                  alt="Engr. Ebenezer David supervising site" 
                  className="about-portrait-img"
                />
                <div className="experience-badge-float">
                  <span className="badge-big-num">150+</span>
                  <span className="badge-big-label">Sites Supervised Across Nigeria</span>
                </div>
              </div>
            </div>

            <div className="about-text-content reveal-on-scroll">
              <span className="section-eyebrow">ABOUT ENGR. EBENEZER DAVID</span>
              <h2 className="section-main-heading">
                Bridging the Gap Between Analytical Engineering Theory &amp; Real-World Construction Execution.
              </h2>

              <p className="about-lead-paragraph">
                I am a dedicated Civil &amp; Structural Engineer and Project Manager with extensive experience 
                in Pre-Engineered Metal Buildings (PEMB), complex concrete detailing, and rigorous field management. 
                Whether calculating structural load distributions in AutoCAD or managing subcontractors on a live site under strict PPE safety standards, 
                my focus is always on engineering precision, longevity, and budget adherence.
              </p>

              <div className="core-pillars-grid">
                <div className="pillar-box">
                  <span className="pillar-check">✓</span>
                  <div>
                    <h4>Pre-Engineered Metal Buildings (PEMB)</h4>
                    <p>Complete structural design, fabrication coordination, and on-site steel assembly oversight.</p>
                  </div>
                </div>

                <div className="pillar-box">
                  <span className="pillar-check">✓</span>
                  <div>
                    <h4>AutoCAD Drafting &amp; Submittals</h4>
                    <p>Precise, code-compliant drawings that accelerate regulatory submittals by 15-20%.</p>
                  </div>
                </div>

                <div className="pillar-box">
                  <span className="pillar-check">✓</span>
                  <div>
                    <h4>Concrete &amp; Material Quality Assurance</h4>
                    <p>Comprehensive slump testing, cube compression verification, and structural steel audits.</p>
                  </div>
                </div>

                <div className="pillar-box">
                  <span className="pillar-check">✓</span>
                  <div>
                    <h4>Schedule &amp; Cost Control (MS Project)</h4>
                    <p>Critical path method (CPM) planning that ensures timely handover without cost creep.</p>
                  </div>
                </div>
              </div>

              <div className="about-action-row">
                <a href="#contact" className="btn btn-primary btn-animate-click">
                  Discuss a Project with Ebenezer
                </a>
                <a 
                  href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-teal btn-animate-click"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE EXPERTISE / SERVICES */}
      <section id="expertise" className="section-block bg-offwhite">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-eyebrow">SPECIALIZED COMPETENCIES</span>
            <h2 className="section-main-heading">Core Engineering Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive structural engineering, on-site supervision, and project controls tailored for commercial and industrial developers.
            </p>
          </div>

          <div className="expertise-cards-grid">
            {expertiseList.map((item) => (
              <div key={item.id} className="expertise-card reveal-on-scroll">
                <div className="expertise-icon-container">
                  {item.icon}
                </div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-desc">{item.desc}</p>
                <div className="expertise-footer">
                  <a href="#contact" className="expertise-link">
                    Inquire About Service &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY (THE EXECUTION ADVANTAGE) */}
      <section id="methodology" className="section-block bg-teal-dark text-white">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-eyebrow text-gold">THE EXECUTION ADVANTAGE</span>
            <h2 className="section-main-heading text-white">Ebenezer's 3-Step Project Delivery Model</h2>
            <p className="section-subtitle text-gray-light">
              A systematic engineering methodology ensuring absolute safety, regulatory approval, and seamless project execution.
            </p>
          </div>

          <div className="methodology-steps-grid">
            {methodologySteps.map((m, idx) => (
              <div key={idx} className="methodology-card reveal-on-scroll">
                <div className="methodology-step-badge">{m.step}</div>
                <span className="methodology-phase">{m.phase}</span>
                <h3 className="methodology-title">{m.title}</h3>
                <p className="methodology-desc">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="methodology-banner reveal-on-scroll">
            <div className="methodology-banner-content">
              <h3>Ready to plan your next commercial or infrastructure project?</h3>
              <p>Get in touch for a comprehensive feasibility and structural consultation.</p>
            </div>
            <a href="#contact" className="btn btn-gold btn-animate-click">
              Book a Technical Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED PROFESSIONAL WORK HISTORY */}
      <section id="experience" className="section-block bg-white">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-eyebrow">CAREER TRACK RECORD</span>
            <h2 className="section-main-heading">Verified Professional Experience</h2>
            <p className="section-subtitle">
              A proven history of successful field executions, structural calculations, and multi-million naira infrastructure projects.
            </p>
          </div>

          <div className="work-history-grid">
            {workHistory.map((work, idx) => (
              <div key={idx} className="history-card reveal-on-scroll">
                <div className="history-header">
                  <div>
                    <span className="history-role-badge">{work.role}</span>
                    <h3 className="history-company">{work.company}</h3>
                    <p className="history-focus">{work.focus}</p>
                  </div>
                  <span className="history-period">{work.period}</span>
                </div>

                <p className="history-desc">{work.desc}</p>

                <div className="history-tags">
                  {work.highlights.map((tag, tIdx) => (
                    <span key={tIdx} className="history-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISUAL PROJECT GALLERY */}
      <section id="gallery" className="section-block bg-offwhite">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-eyebrow">VISUAL EVIDENCE</span>
            <h2 className="section-main-heading">Field Execution &amp; Site Gallery</h2>
            <p className="section-subtitle">
              Photographic documentation of active PEMB framework erections, AutoCAD drawings, and quality control procedures.
            </p>
          </div>

          <div className="gallery-masonry-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item-card reveal-on-scroll">
                <div 
                  className="gallery-item-photo" 
                  style={{ backgroundImage: `url(${img.url})` }}
                >
                  <span className="gallery-tag-float">{img.tag}</span>
                </div>
                <div className="gallery-item-info">
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DIRECT CONTACT & CONSULTATION FORM */}
      <section id="contact" className="section-block bg-slate-subtle">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-eyebrow">INITIATE CONSULTATION</span>
            <h2 className="section-main-heading">Contact Engr. Ebenezer David</h2>
            <p className="section-subtitle">
              Send your project specifications directly to Ebenezer's inbox, or connect via WhatsApp for urgent inquiries.
            </p>
          </div>

          <div className="contact-section-split">
            {/* Direct Channels Card */}
            <div className="contact-direct-card reveal-on-scroll">
              <h3>Direct Channels</h3>
              <p className="direct-subtitle">
                Ebenezer is available for structural design consulting, PEMB supervision, and comprehensive project management.
              </p>

              <div className="contact-details-list">
                <div className="detail-item">
                  <div className="detail-icon-circle">✉️</div>
                  <div>
                    <strong>Direct Email</strong>
                    <a href={`mailto:${contactEmail}`} className="detail-link">{contactEmail}</a>
                    <small>Monitored daily &bull; 24h response time</small>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon-circle">📞</div>
                  <div>
                    <strong>Business Line &amp; WhatsApp</strong>
                    <a href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="detail-link">
                      {contactPhone}
                    </a>
                    <small>Direct phone calls and WhatsApp messaging</small>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon-circle">📍</div>
                  <div>
                    <strong>Location &amp; Operations</strong>
                    <p className="detail-text">{contactAddress}</p>
                    <small>Active across Lagos and nation-wide deployments</small>
                  </div>
                </div>
              </div>

              <div className="contact-guarantee-box">
                <span className="guarantee-icon">🛡</span>
                <p>
                  <strong>Confidentiality Assured:</strong> All project drawings, feasibility studies, and site documents submitted are treated with strict professional confidentiality.
                </p>
              </div>

              <a 
                href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp-full btn-animate-click"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>

            {/* Email Form Card */}
            <div className="contact-form-glass-card reveal-on-scroll">
              <h3>Submit a Project Proposal or Inquiry</h3>
              <p className="form-helper-text">
                Your message is sent directly to Ebenezer's engineering inbox.
              </p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <span className="success-check-icon">✓</span>
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>Engr. Ebenezer David will review your project details and respond within 24 hours.</p>
                </div>
              ) : (
                <form 
                  className="modern-portfolio-form" 
                  action={`https://formsubmit.co/${contactEmail}`} 
                  method="POST"
                  onSubmit={() => setFormSubmitted(true)}
                >
                  <input type="hidden" name="_subject" value="New Engineering Proposal from Portfolio" />
                  <input type="hidden" name="_captcha" value="true" />
                  
                  <div className="form-row-two-col">
                    <div className="form-input-container">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="e.g. Arc. Oluwaseun Adeleke"
                        value={formData.name} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className="form-input-container">
                      <label htmlFor="email">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="e.g. adeleke@consortium.ng"
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>

                  <div className="form-row-two-col">
                    <div className="form-input-container">
                      <label htmlFor="phone">Phone / WhatsApp Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="e.g. +234 803 123 4567"
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className="form-input-container">
                      <label htmlFor="projectType">Service Required *</label>
                      <select 
                        id="projectType" 
                        name="projectType" 
                        value={formData.projectType} 
                        onChange={handleChange}
                      >
                        <option value="Structural Design & PEMB">Structural Design &amp; PEMB</option>
                        <option value="On-Site Construction Supervision">On-Site Construction Supervision</option>
                        <option value="Quality Control & Concrete Testing">Quality Control &amp; Concrete Testing</option>
                        <option value="Full Project Management (MS Project)">Full Project Management (MS Project)</option>
                        <option value="AutoCAD Drafting & Submittals">AutoCAD Drafting &amp; Submittals</option>
                        <option value="General Engineering Consultation">General Engineering Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-input-container">
                    <label htmlFor="message">Project Scope &amp; Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      placeholder="Please describe project type, site location, timeline, and required deliverables..."
                      value={formData.message} 
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-full btn-animate-click">
                    Send Inquiry to Ebenezer &rarr;
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
