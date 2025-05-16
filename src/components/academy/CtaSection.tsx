"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

interface CtaSectionProps {
  section: {
    id: string
    heading: string
    content?: string
    ctaButton?: {
      text: string
      href: string
    }
  }
  animationStyle: string
}

export default function CtaSection({ section, animationStyle }: CtaSectionProps) {
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
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl opacity-0 transition-all duration-1000 ${
        animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">{section.heading}</h2>
        {section.content && <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{section.content}</p>}
        {section.ctaButton && (
          <Link
            href={section.ctaButton.href}
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-4 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            {section.ctaButton.text}
          </Link>
        )}
      </div>
    </section>
  )
}
