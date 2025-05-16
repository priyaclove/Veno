"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

interface HeroSectionProps {
  section: {
    id: string
    heading: string
    subheading?: string
    content?: string
    ctaButton?: {
      text: string
      href: string
    }
  }
  animationStyle: string
}

export default function HeroSection({ section, animationStyle }: HeroSectionProps) {
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

  return (
    <section
      ref={sectionRef}
      id={section.id}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-white text-center opacity-0 transition-all duration-1000 ${
        animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">{section.heading}</h2>
        {section.subheading && <p className="text-xl sm:text-2xl text-gray-700 mb-6">{section.subheading}</p>}
        {section.content && <p className="text-gray-700 mb-8 leading-relaxed">{section.content}</p>}
        {section.ctaButton && (
          <Link
            href={section.ctaButton.href}
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
          >
            {section.ctaButton.text}
          </Link>
        )}
      </div>
    </section>
  )
}
