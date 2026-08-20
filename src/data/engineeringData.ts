import type { ExecutionStep, ServiceCard } from '../types';

export const services: ServiceCard[] = [
  {
    id: 's1',
    icon: 'structural',
    title: 'Structural Analysis & Design',
    description:
      'Optimize designs for safety and cost-effectiveness (e.g., Pre-engineered Metal Buildings)',
    highlight: 'Pre-engineered Metal Buildings',
  },
  {
    id: 's2',
    icon: 'site',
    title: 'Site Management & Supervision',
    description:
      'Proactive oversight, scheduling (MS Project), and safety (PPE Protocols).',
  },
  {
    id: 's3',
    icon: 'quality',
    title: 'Quality Control & Inspections',
    description:
      'Ensure material quality (Concrete Testing) and code compliance (Civil, Structural Inspection).',
  },
  {
    id: 's4',
    icon: 'scheduling',
    title: 'Project Controls & Scheduling',
    description:
      'MS Project milestone tracking, precise scope planning, and proactive risk mitigation.',
  },
];

export const executionSteps: ExecutionStep[] = [
  {
    step: 1,
    label: 'STEP 1:',
    title: 'Consultation & Feasibility',
    description: 'Site analysis, load requirements, regulatory frameworks.',
  },
  {
    step: 2,
    label: 'STEP 2:',
    title: 'Detailed Design & Submittals',
    description: 'AutoCAD drafting',
    subDescription: 'Precise, compliant engineering drawings.',
  },
  {
    step: 3,
    label: 'STEP 3:',
    title: 'Execution & Supervision',
    description: 'On-site leadership',
    subDescription: 'Quality handover and documentation.',
  },
];
