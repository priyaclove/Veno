"use client"

import { useEffect, useRef } from "react"

interface TextSectionProps {
  section: {
    id: string
    heading: string
    content?: string
  }
  animationStyle: string
}

export default function TextSection({ section, animationStyle }: TextSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Split content by newline characters to create paragraphs
  const paragraphs = section.content?.split("\n\n") || []

  return (
    <section
      ref={sectionRef}
      id={section.id}
      className={`py-12 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-all duration-1000 ${
        animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6">{section.heading}</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
