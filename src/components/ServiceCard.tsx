// Inline SVG icons for each service type
const ServiceIcon = ({ type }: { type: string }) => {
  if (type === 'structural') return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <rect x="1" y="15" width="5" height="12" fill="white" opacity="0.9" />
      <rect x="8" y="10" width="5" height="17" fill="white" />
      <rect x="15" y="6" width="5" height="21" fill="white" opacity="0.9"/>
      <rect x="22" y="2" width="5" height="25" fill="white" opacity="0.8"/>
      <polyline points="3,15 10,10 17,6 24,2" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5"/>
      <line x1="0" y1="27" x2="28" y2="27" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
  if (type === 'site') return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <circle cx="14" cy="8" r="4" fill="white" opacity="0.9"/>
      <path d="M6 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="white" opacity="0.7"/>
      <ellipse cx="14" cy="14" rx="9" ry="3" fill="white" opacity="0.2"/>
      <path d="M6 14 Q6 8 14 8 Q22 8 22 14" fill="white" opacity="0.5"/>
      <line x1="5" y1="14" x2="23" y2="14" stroke="white" strokeWidth="2"/>
      <rect x="17" y="17" width="7" height="9" rx="1" fill="white" opacity="0.8"/>
      <line x1="19" y1="20" x2="22" y2="20" stroke="#2a9db5" strokeWidth="1"/>
      <line x1="19" y1="22" x2="22" y2="22" stroke="#2a9db5" strokeWidth="1"/>
    </svg>
  );
  if (type === 'quality') return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <rect x="1" y="1" width="26" height="26" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="1" y1="10" x2="27" y2="10" stroke="white" strokeWidth="0.8" opacity="0.4"/>
      <line x1="1" y1="19" x2="27" y2="19" stroke="white" strokeWidth="0.8" opacity="0.4"/>
      <line x1="10" y1="1" x2="10" y2="27" stroke="white" strokeWidth="0.8" opacity="0.4"/>
      <line x1="19" y1="1" x2="19" y2="27" stroke="white" strokeWidth="0.8" opacity="0.4"/>
      <polyline points="4,20 8,24 16,13 24,16" fill="none" stroke="white" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="23" cy="5" r="4" fill="#EFA526"/>
      <polyline points="21,5 22.5,6.5 25.5,3.5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  // scheduling
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <rect x="1" y="5" width="26" height="22" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="8" y1="1" x2="8" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="1" x2="20" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="1" y1="12" x2="27" y2="12" stroke="white" strokeWidth="1"/>
      <rect x="5" y="16" width="8" height="3" rx="1" fill="white" opacity="0.8"/>
      <rect x="5" y="21" width="12" height="3" rx="1" fill="#EFA526" opacity="0.9"/>
      <circle cx="22" cy="20" r="4" fill="white" opacity="0.15" stroke="white" strokeWidth="1"/>
      <polyline points="20,20 21.5,21.5 24.5,18.5" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
};

interface ServiceCardComponentProps {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
  variant?: 'left' | 'right';
}

export default function ServiceCardComponent({
  icon, title, description, highlight, variant = 'left'
}: ServiceCardComponentProps) {
  return (
    <div className={`service-card service-card--${variant} reveal-on-scroll`}>
      <div className="service-card-icon">
        <ServiceIcon type={icon} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">
        {highlight
          ? description.replace(highlight, '')
          : description}
        {highlight && <strong>{highlight}</strong>}
      </p>
    </div>
  );
}
