// ============================================================
//  Global TypeScript Types & Interfaces
// ============================================================

export interface ServiceCard {
  id: string;
  icon: 'structural' | 'site' | 'quality' | 'scheduling';
  title: string;
  description: string;
  highlight?: string;
}

export interface ExecutionStep {
  step: number;
  label: string;
  title: string;
  description?: string;
  subDescription?: string;
}

export interface TrustItem {
  id: string;
  icon: 'shield' | 'clock' | 'person' | 'check';
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

export type ModalType = 'consultation' | 'proposal' | null;
