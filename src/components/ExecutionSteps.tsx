import { executionSteps } from '../data/engineeringData';

// Step illustration SVGs
const StepIllustration = ({ step }: { step: number }) => {
  if (step === 1) return (
    <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
      <circle cx="30" cy="26" r="18" fill="#EAF7FA" stroke="#2a9db5" strokeWidth="1.5"/>
      <circle cx="22" cy="26" r="2.5" fill="#2a9db5"/>
      <circle cx="30" cy="26" r="2.5" fill="#2a9db5"/>
      <circle cx="38" cy="26" r="2.5" fill="#2a9db5"/>
      <path d="M24 44 L30 52 L36 44" fill="#EAF7FA" stroke="#2a9db5" strokeWidth="1.2"/>
    </svg>
  );
  if (step === 2) return (
    <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
      <rect x="8" y="10" width="44" height="38" rx="3" fill="#EAF7FA" stroke="#2a9db5" strokeWidth="1.5"/>
      <line x1="8" y1="20" x2="52" y2="20" stroke="#2a9db5" strokeWidth="0.8" opacity="0.4"/>
      <line x1="8" y1="30" x2="52" y2="30" stroke="#2a9db5" strokeWidth="0.8" opacity="0.4"/>
      <line x1="8" y1="40" x2="52" y2="40" stroke="#2a9db5" strokeWidth="0.8" opacity="0.4"/>
      <line x1="20" y1="10" x2="20" y2="48" stroke="#2a9db5" strokeWidth="0.8" opacity="0.4"/>
      <line x1="36" y1="10" x2="36" y2="48" stroke="#2a9db5" strokeWidth="0.8" opacity="0.4"/>
      <rect x="38" y="4" width="7" height="18" rx="1"
        transform="rotate(30 38 4)" fill="#EFA526"/>
      <polygon points="50,39 55,47 46,44" fill="#0F3E4D"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
      <circle cx="20" cy="16" r="6" fill="#EAF7FA" stroke="#2a9db5" strokeWidth="1.5"/>
      <path d="M10 40 C10 30 30 30 30 40" fill="#EAF7FA" stroke="#2a9db5" strokeWidth="1.5"/>
      <ellipse cx="20" cy="14" rx="8" ry="3.5" fill="#2a9db5" opacity="0.35"/>
      <path d="M12 14 Q12 7 20 7 Q28 7 28 14" fill="#2a9db5"/>
      <rect x="10" y="13" width="20" height="2.5" rx="1" fill="#0F3E4D"/>
      <rect x="33" y="20" width="20" height="22" rx="2" fill="#EAF7FA" stroke="#2a9db5" strokeWidth="1.5"/>
      <rect x="36" y="24" width="5" height="5" fill="#2a9db5" opacity="0.4"/>
      <rect x="44" y="24" width="5" height="5" fill="#2a9db5" opacity="0.4"/>
      <rect x="36" y="31" width="5" height="5" fill="#2a9db5" opacity="0.4"/>
      <rect x="44" y="31" width="5" height="5" fill="#2a9db5" opacity="0.4"/>
      <rect x="39" y="36" width="7" height="6" fill="#0F3E4D" opacity="0.35"/>
    </svg>
  );
};

export default function ExecutionSteps() {
  return (
    <section className="execution-section" id="process">
      <h2 className="section-heading">THE EXECUTION ADVANTAGE</h2>
      <div className="steps-row">
        {executionSteps.map((s, i) => (
          <div key={s.step} className="step-item">
            <div className="step-illustration">
              <StepIllustration step={s.step} />
            </div>
            <div className="step-label">{s.label}</div>
            <div className="step-title">{s.title}</div>
            {s.description && <div className="step-desc">{s.description}</div>}
            {/* Arrow between steps */}
            {i < executionSteps.length - 1 && (
              <span className="step-arrow">›</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
