import { services } from '../data/engineeringData';
import ServiceCardComponent from './ServiceCard';

interface ServicesProps {
  variant?: 'left' | 'right';
  limit?: number;
}

export default function Services({ variant = 'left', limit }: ServicesProps) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className={`services-section services-section--${variant}`} id="services">
      {variant === 'right' && (
        <h2 className="section-heading">SERVICES</h2>
      )}
      <div className={`service-cards-grid service-cards-grid--${variant}`}>
        {displayed.map((s) => (
          <ServiceCardComponent
            key={s.id}
            icon={s.icon}
            title={s.title}
            description={s.description}
            highlight={s.highlight}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}
