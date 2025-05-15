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

// Define specific section interfaces
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

// Union type for all possible sections
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
interface TalentAcquisitionService {
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
  talentacquisitionServices: TalentAcquisitionService[];
}

// Helper function to get data from JSON file
function getIntelligenceData(): IntelligenceData {
  const filePath = path.join(process.cwd(), 'src/data/talentData.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

// Helper function to get a specific service by slug
function getServiceBySlug(slug: string): TalentAcquisitionService | undefined {
  const data = getIntelligenceData();
  return data.talentacquisitionServices.find(service => service.slug === slug);
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested talent acquisition service could not be found.',
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const data = getIntelligenceData();

  if (!data?.talentacquisitionServices || !Array.isArray(data.talentacquisitionServices)) {
    throw new Error('Missing or invalid talentacquisitionServices data');
  }

  return data.talentacquisitionServices.map(service => ({
    slug: service.slug,
  }));
}

// Component map with proper typing
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

// Main page component
export default function TalentAcquisitionServicesPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const { animationStyle, themeColors, sections } = service;

  return (
    <main className="min-h-screen">
      <div className={`bg-${themeColors.background} text-${themeColors.text}`}>
        {sections.map((section) => {
          const SectionComponent = SectionComponents[section.type as keyof typeof SectionComponents];

          if (!SectionComponent) {
            console.warn(`No component found for section type: ${section.type}`);
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