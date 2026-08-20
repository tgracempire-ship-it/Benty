import type { FaqItem, Metric, TrustItem } from '../types';

export const firmName = 'David Engineering & Consulting';
export const firmTagline = 'Engineering Precision. Structural Integrity. Project Delivery.';
export const firmSubtitle =
  'Expert Civil, Structural Engineering, and Project Management for your critical infrastructure. Ensure safety and compliance.';
export const contactEmail = 'info@davidengineering.com';
export const contactPhone = '+1 (555) 123-4567';
export const contactAddress = '100 Structural Blvd, Suite 400\nEngineering City, ST 12345';

export const trustItems: TrustItem[] = [
  { id: 't1', icon: 'shield', text: 'Federal Regulatory Compliance' },
  { id: 't2', icon: 'clock',  text: 'On-Time Completion' },
  { id: 't3', icon: 'person', text: 'State-Certified Engineers' },
  { id: 't4', icon: 'check',  text: 'Quality Control Excellence' },
];

export const metrics: Metric[] = [
  { id: 'm1', value: 98,  suffix: '%', label: 'On-Time Project Delivery Rate' },
  { id: 'm2', value: 100, suffix: '%', label: 'Regulatory Compliance Pass Rate' },
  { id: 'm3', value: 150, suffix: '+', label: 'Projects Supervised' },
  { id: 'm4', value: 0,   suffix: '',  label: 'Compromises on Safety' },
];

export const faqItems: FaqItem[] = [
  {
    id: 'f1',
    question: 'What are your typical timelines for regulatory approvals and submittals?',
    answer:
      'Timelines vary by project complexity and jurisdiction, but our proactive approach to AutoCAD drafting and pre-compliance checks typically accelerates the submittal process by 15–20% compared to industry averages. We build approval buffers into our MS Project schedules from day one.',
  },
  {
    id: 'f2',
    question: 'How do you handle unexpected site conditions or structural deviations?',
    answer:
      'Construction rarely goes perfectly to plan. Our on-site supervision is designed to identify deviations immediately. We utilize rapid-response engineering analysis to propose structurally sound, compliant solutions that minimize schedule disruption and cost overruns.',
  },
  {
    id: 'f3',
    question: 'Do you offer full project management or just design consulting?',
    answer:
      'Both. We can engage as a specialized structural design consultant focusing on PEMB and load calculations, or step in as comprehensive project managers overseeing site supervision, subcontractor coordination, and quality control from inception to handover.',
  },
  {
    id: 'f4',
    question: 'What types of projects do you typically work on?',
    answer:
      'We specialize in Pre-Engineered Metal Buildings (PEMB), industrial facilities, commercial structures, infrastructure projects, and civil works. Our team has experience across multiple sectors including manufacturing, logistics, healthcare, and government infrastructure.',
  },
];
