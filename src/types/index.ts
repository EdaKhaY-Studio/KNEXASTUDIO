export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  targetAudience: string;
  problemSolved: string;
  features: string[];
  startingPrice?: string;
  iconName: string;
  badgeText?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  description: string;
  tags: string[];
  isConcept?: boolean;
  imageBgGradient: string;
  demoUrl?: string;
  highlights: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  targetLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'harga' | 'proses' | 'ai' | 'layanan';
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
