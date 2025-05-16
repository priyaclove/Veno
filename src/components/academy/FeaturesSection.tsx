"use client"

import { useEffect, useRef } from "react"

interface FeaturesSectionProps {
  section: {
    id: string
    heading: string
    subheading?: string
    features?: {
      title: string
      description: string
    }[]
  }
  animationStyle: string
}

export default function FeaturesSection({ section, animationStyle }: FeaturesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={section.id}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-all duration-1000 ${
        animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{section.heading}</h2>
          {section.subheading && <p className="text-xl text-gray-700">{section.subheading}</p>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.features?.map((feature, index) => (
            <div
              key={index}
           ref={(el) => {
  featureRefs.current[index] = el
}}

              className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm opacity-0 transition-all duration-500 delay-${index * 100} ${
                animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
