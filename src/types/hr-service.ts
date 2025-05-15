// src/types/hr-service.ts

export type HRService = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  estimatedReadTime: number;
  lastUpdated: string;
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
  sections: Section[];
};

export type Section =
  | HeroSection
  | IntroductionSection
  | InfographicSection
  | ChecklistSection
  | ExpertInsightsSection
  | ComparisonTableSection
  | FeaturesSection
  | ImageWithTextSection
  | FAQsSection
  | CTASection;

export type HeroSection = {
  id: string;
  type: "hero";
  heading: string;
  subheading: string;
  content: string;
  ctaButton?: { text: string; href: string };
  image?: { url: string; alt: string };
};

export type IntroductionSection = {
  id: string;
  type: "introduction";
  heading: string;
  content: string;
};

export type InfographicSection = {
  id: string;
  type: "infographic";
  heading: string;
  subheading: string;
  dataPoints: string[];
};

export type ChecklistSection = {
  id: string;
  type: "checklist";
  heading: string;
  subheading: string;
  items: string[];
};

export type ExpertInsightsSection = {
  id: string;
  type: "expertInsights";
  heading: string;
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  content: string;
};

export type ComparisonTableSection = {
  id: string;
  type: "comparisonTable";
  heading: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
};

export type FeaturesSection = {
  id: string;
  type: "features";
  heading: string;
  features: { title: string; description: string }[];
};

export type ImageWithTextSection = {
  id: string;
  type: "imageWithText";
  heading: string;
  content: string;
  image?: { url: string; alt: string };
  imagePosition?: "left" | "right";
};

export type FAQsSection = {
  id: string;
  type: "faqs";
  heading: string;
  faqs: { question: string; answer: string }[];
};

export type CTASection = {
  id: string;
  type: "cta";
  heading: string;
  subheading?: string;
  ctaButton: { text: string; href: string };
};
