export default function Footer() {
  return (
    <footer className="footer-strip" style={{ background: 'var(--teal)', color: 'white', padding: '24px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
        <div className="footer-text">
          <p style={{ margin: 0, opacity: 0.8 }}>&copy; 2026 Benty Engineering & Consulting. All rights reserved.</p>
        </div>
        <select className="lang-select" aria-label="Language selector">
          <option>Select language</option>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>
    </footer>
  );
}
