import { notFound } from "next/navigation"
import type { Metadata } from "next"
import academyData from "@/data/academyData.json"
import { Suspense } from "react"

// Dynamic imports for section components
import HeroSection from "@/components/academy/HeroSection"
import TextSection from "@/components/academy/TextSection"
import FeaturesSection from "@/components/academy/FeaturesSection"
import InfographicSection from "@/components/academy/InfographicSection"
import ImageWithTextSection from "@/components/academy/ImageWithTextSection"
import FaqSection from "@/components/academy/FaqSection"
import CtaSection from "@/components/academy/CtaSection"
import SectionLoader from "@/components/academy/SectionLoader"

// Type definitions
interface PageProps {
  params: {
    slug: string
  }
}

interface AcademyService {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  estimatedReadTime: number
  lastUpdated: string
  animationStyle: string
  themeColors: {
    primary: string
    accent: string
    background: string
    text: string
  }
  sections: Section[]
}

interface Section {
  id: string
  type: string
  heading: string
  subheading?: string
  content?: string
  ctaButton?: {
    text: string
    href: string
  }
  features?: {
    title: string
    description: string
  }[]
  steps?: {
    title: string
    description: string
  }[]
  imagePosition?: string
  faqs?: {
    question: string
    answer: string
  }[]
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  const service = (academyData.academyServices as AcademyService[]).find((service) => service.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "article",
      publishedTime: service.lastUpdated,
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  }
}

export default function AcademyServicePage({ params }: PageProps) {
  const { slug } = params

  // Find the service that matches the slug
  const service = (academyData.academyServices as AcademyService[]).find((service) => service.slug === slug)

  // If no service is found, return 404
  if (!service) {
    notFound()
  }

  // Format the date for display
  const formattedDate = new Date(service.lastUpdated).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Render the appropriate component based on section type
  const renderSection = (section: Section) => {
    switch (section.type) {
      case "hero":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <HeroSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      case "text":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <TextSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      case "features":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <FeaturesSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      case "infographic":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <InfographicSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      case "imageWithText":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <ImageWithTextSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      case "faq":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <FaqSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      case "cta":
        return (
          <Suspense key={section.id} fallback={<SectionLoader />}>
            <CtaSection section={section} animationStyle={service.animationStyle} />
          </Suspense>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">{service.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Last updated: {formattedDate}</span>
            <span>•</span>
            <span>{service.estimatedReadTime} min read</span>
          </div>
        </header>

        <div className="space-y-16">{service.sections.map((section) => renderSection(section))}</div>
      </article>
    </main>
  )
}
