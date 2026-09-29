import type { FaqItem, Metric, TrustItem } from '../types';

export const engineerName = 'Ebenezer David';
export const engineerTitle = 'Civil & Structural Engineer | Project Manager';
export const firmName = 'Ebenezer David';
export const firmTagline = 'Engineering Precision. Structural Integrity. Project Delivery.';
export const firmSubtitle =
  'Delivering expert civil & structural engineering, Pre-Engineered Metal Building (PEMB) execution, and rigorous project controls for high-stakes infrastructure.';
export const contactEmail = 'Benytecons@gmail.com';
export const contactPhone = '+234 706 771 3622';
export const contactAddress = 'Lagos, Nigeria';

export const trustItems: TrustItem[] = [
  { id: 't1', icon: 'shield', text: 'Federal & State Code Compliance' },
  { id: 't2', icon: 'clock',  text: '98% On-Time Project Delivery' },
  { id: 't3', icon: 'person', text: 'State-Certified Leadership' },
  { id: 't4', icon: 'check',  text: 'Zero Compromise on Quality & Safety' },
];

export const metrics: Metric[] = [
  { id: 'm1', value: 150, suffix: '+', label: 'Projects Supervised' },
  { id: 'm2', value: 98,  suffix: '%', label: 'On-Time Delivery Rate' },
  { id: 'm3', value: 100, suffix: '%', label: 'Regulatory Pass Rate' },
  { id: 'm4', value: 4,   suffix: '+', label: 'Tier-1 Engineering Roles' },
];

export const faqItems: FaqItem[] = [
  {
    id: 'f1',
    question: 'What are your typical timelines for structural approvals and submittals?',
    answer:
      'Timelines vary by project complexity and jurisdiction, but my proactive approach to AutoCAD drafting and pre-compliance checks typically accelerates the submittal process by 15–20% compared to industry averages. I integrate approval buffers into MS Project schedules from day one.',
  },
  {
    id: 'f2',
    question: 'How do you handle unexpected site conditions or structural deviations?',
    answer:
      'Construction rarely goes perfectly to plan. My hands-on on-site supervision identifies deviations immediately. I conduct rapid structural calculations to propose sound, compliant engineering solutions that minimize schedule disruption and cost overruns.',
  },
  {
    id: 'f3',
    question: 'Do you offer full project management or dedicated structural consulting?',
    answer:
      'Both. I can engage as a specialized structural design consultant focusing on PEMB and load calculations, or step in as a comprehensive project manager overseeing site supervision, subcontractor coordination, and quality control from groundbreaking to handover.',
  },
  {
    id: 'f4',
    question: 'What types of projects do you specialize in?',
    answer:
      'I specialize in Pre-Engineered Metal Buildings (PEMB), commercial developments, industrial warehouses, civil works, and public infrastructure projects.',
  },
];
