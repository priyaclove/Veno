"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ImageWithTextSectionProps {
  section: {
    id: string
    heading: string
    subheading?: string
    content?: string
    imagePosition?: string
  }
  animationStyle: string
}

export default function ImageWithTextSection({ section, animationStyle }: ImageWithTextSectionProps) {
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
  const isImageRight = section.imagePosition === "right"

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

        <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${isImageRight ? "" : "md:flex-row-reverse"}`}>
          <div className={`mb-8 md:mb-0 ${isImageRight ? "md:order-2" : "md:order-1"}`}>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt={section.heading} fill className="object-cover" />
            </div>
          </div>

          <div className={`${isImageRight ? "md:order-1" : "md:order-2"}`}>
            <div className="prose prose-lg max-w-none text-gray-700">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
