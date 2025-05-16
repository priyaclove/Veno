"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqSectionProps {
  section: {
    id: string
    heading: string
    faqs?: {
      question: string
      answer: string
    }[]
  }
  animationStyle: string
}

export default function FaqSection({ section, animationStyle }: FaqSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<string | null>(null)

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
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-all duration-1000 ${
        animationStyle === "fade-up" ? "translate-y-10" : "scale-95"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-10 text-center">{section.heading}</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {section.faqs?.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-black hover:text-red-700 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
