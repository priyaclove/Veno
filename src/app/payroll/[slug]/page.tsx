import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { Fragment } from 'react';

import Hero from '@/components/subpages/Hero';
import TextSection from '@/components/subpages/TextSection';
import FeaturesSection from '@/components/subpages/FeaturesSection';
import InfographicSection from '@/components/subpages/InfographicSection';
import CaseStudiesSection from '@/components/subpages/CaseStudiesSection';
import ChecklistSection from '@/components/subpages/ChecklistSection';
import ImageWithTextSection from '@/components/subpages/ImageWithTextSection';
import ComparisonTableSection from '@/components/subpages/ComparisonTableSection';
import ExpertInsightsSection from '@/components/subpages/ExpertInsightsSection';
import FaqSection from '@/components/subpages/FaqSection';
import CtaSection from '@/components/subpages/CtaSection';

// Base interface for all sections
interface BaseSection {
  id: string;
  type: string;
  heading: string;
  subheading?: string;
  content?: string;
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

// Specific section interfaces
interface HeroSection extends BaseSection {
  ctaButton?: {
    text: string;
    href: string;
  };
}
interface FeaturesSection extends BaseSection {
  features?: Array<{
    title: string;
    description: string;
  }>;
}
interface InfographicSection extends BaseSection {
  dataPoints?: Array<{
    stage: string;
    timeframe: string;
    activities: string;
    keyMetric: string;
  }>;
}
interface CaseStudiesSection extends BaseSection {
  cases?: Array<{
    industry: string;
    challenge: string;
    solution: string;
    result: string;
  }>;
}
interface ChecklistSection extends BaseSection {
  items?: Array<{
    title: string;
    description: string;
    required: boolean;
    complexity: string;
  }>;
}
interface ImageWithTextSection extends BaseSection {
  imagePosition?: 'left' | 'right';
}
interface ComparisonTableSection extends BaseSection {
  tableHeaders?: string[];
  tableRows?: Array<{
    [key: string]: string;
  }>;
}
interface ExpertInsightsSection extends BaseSection {
  insights?: Array<{
    topic: string;
    trend: string;
    impact: string;
    expertView: string;
  }>;
}
interface FaqSection extends BaseSection {
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}
interface CtaSection extends BaseSection {
  ctaButton?: {
    text: string;
    href: string;
  };
}

// Union of all sections
type Section = 
  | HeroSection
  | FeaturesSection
  | InfographicSection
  | CaseStudiesSection
  | ChecklistSection
  | ImageWithTextSection
  | ComparisonTableSection
  | ExpertInsightsSection
  | FaqSection
  | CtaSection;

// Main service interface
interface PayrollService {
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
}

interface IntelligenceData {
  PayrollServices?: PayrollService[];
}

// Read JSON data from file
function getIntelligenceData(): IntelligenceData {
  try {
    const filePath = path.join(process.cwd(), 'src/data/payrollData.json');
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return {};
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading or parsing data file:', error);
    return {};
  }
}

// Find a service by slug
function getServiceBySlug(slug: string): PayrollService | undefined {
  const data = getIntelligenceData();
  return data.PayrollServices?.find(service => service.slug === slug);
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested payroll service could not be found.',
    };
  }
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

// Generate static paths
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const data = getIntelligenceData();
  if (!data?.PayrollServices || !Array.isArray(data.PayrollServices)) {
    console.warn('PayrollServices data is missing or invalid.');
    return [];
  }
  return data.PayrollServices.map(service => ({
    slug: service.slug,
  }));
}

// Component map
const SectionComponents = {
  hero: Hero as React.ComponentType<HeroSection>,
  text: TextSection as React.ComponentType<BaseSection>,
  features: FeaturesSection as React.ComponentType<FeaturesSection>,
  infographic: InfographicSection as React.ComponentType<InfographicSection>,
  caseStudies: CaseStudiesSection as React.ComponentType<CaseStudiesSection>,
  checklist: ChecklistSection as React.ComponentType<ChecklistSection>,
  imageWithText: ImageWithTextSection as React.ComponentType<ImageWithTextSection>,
  comparisonTable: ComparisonTableSection as React.ComponentType<ComparisonTableSection>,
  expertInsights: ExpertInsightsSection as React.ComponentType<ExpertInsightsSection>,
  faq: FaqSection as React.ComponentType<FaqSection>,
  cta: CtaSection as React.ComponentType<CtaSection>,
};

// Main component
export default function PayrollServicesPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) return notFound();

  const { animationStyle, themeColors, sections } = service;

  return (
    <main className="min-h-screen">
      <div className="bg-white text-black">
        {sections.map((section) => {
          const SectionComponent = SectionComponents[section.type as keyof typeof SectionComponents];
          if (!SectionComponent) {
            console.warn(`No component found for type: ${section.type}`);
            return null;
          }
          return (
            <Fragment key={section.id}>
              <SectionComponent
                {...section}
                animationStyle={animationStyle}
                themeColors={themeColors}
              />
            </Fragment>
          );
        })}
      </div>
    </main>
  );
}
