import Footer from '../components/Footer';

export default function GalleryPage() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Active Site Inspection' },
    { url: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Structural Planning' },
    { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Steel Framework Erection' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'AutoCAD & Drafting' },
    { url: 'https://images.unsplash.com/photo-1593444078864-77dbbb219b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Quality Assurance Testing' },
    { url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Commercial Development' }
  ];

  return (
    <div className="page-standard animate-fade-in">
      <div className="page-header bg-teal">
        <div className="container">
          <h1 className="page-title">Project Gallery</h1>
          <p className="page-subtitle">
            A visual showcase of our engineering execution and site management.
          </p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-card">
              <div 
                className="gallery-img" 
                style={{ 
                  backgroundImage: `url(${img.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center' /* Prevents heads from being cut off */
                }}
              />
              <div className="gallery-caption">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
