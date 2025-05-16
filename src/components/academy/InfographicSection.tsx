"use client"

import { useEffect, useRef } from "react"

interface InfographicSectionProps {
  section: {
    id: string
    heading: string
    subheading?: string
    content?: string
    steps?: {
      title: string
      description: string
    }[]
  }
  animationStyle: string
}

export default function InfographicSection({ section, animationStyle }: InfographicSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

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

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      stepRefs.current.forEach((ref) => {
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{section.heading}</h2>
          {section.subheading && <p className="text-xl text-gray-700 mb-4">{section.subheading}</p>}
          {section.content && <p className="text-gray-700">{section.content}</p>}
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {section.steps?.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className={`md:grid md:grid-cols-2 md:gap-8 relative opacity-0 transition-all duration-500 ${
                  animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Circle indicator for desktop */}
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-red-600 transform -translate-x-1/2 z-10"></div>

                <div className={`md:text-right ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div
                    className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* Empty div for layout when step is on right */}
                {index % 2 === 1 && <div></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
