export interface TestimonialData {
  id: number;
  name: string;
  role?: string;
  text: string;
  rating: number;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  savings: string;
}

export interface BenefitData {
  id: number;
  title: string;
  description: string;
  iconName: string;
}