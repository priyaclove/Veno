"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { Users, FileText, Shield, BarChart4, CheckCircle, ArrowRight, ChevronDown, BookOpen, Clipboard, Building, UserPlus, FileCheck, UserCheck, Handshake } from 'lucide-react'

export default function SMEHRConsultingPage() {
  // Refs for all sections that will have fade-in animations
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  useEffect(() => {
    // Set up intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10")
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
const currentRefs = sectionRefs.current; // ✅ take a snapshot

currentRefs.forEach((ref) => {
  if (ref) observer.observe(ref);
});

return () => {
  currentRefs.forEach((ref) => {
    if (ref) observer.unobserve(ref);
  });
};
  }, [])

  // Add section to refs array
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>SME HR Consulting Services | VenoVox</title>
        <meta
          name="description"
          content="VenoVox offers specialized HR consulting services for small and medium enterprises (SMEs), helping you build effective HR strategies, policies, and practices."
        />
        <link rel="canonical" href="https://venovox.com/sme-hr-consulting" />
        <meta property="og:title" content="SME HR Consulting Services | VenoVox" />
        <meta
          property="og:description"
          content="Specialized HR consulting services for small and medium enterprises (SMEs) to build effective HR strategies and practices."
        />
        <meta property="og:url" content="https://venovox.com/sme-hr-consulting" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white w-full">
        {/* Hero Section with Dark Background */}
        <section className="bg-gray-900 py-20">
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  HR Consulting Tailored for Small & Medium Enterprises
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                  We provide specialized HR solutions designed specifically for the unique challenges faced by small and
                  medium-sized businesses. Our consultants help you build effective HR strategies, policies, and
                  practices that drive growth and employee satisfaction.
                </p>
                <div className="mt-8">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center group transition-all duration-300">
                    Discover Our Approach
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/hero.webp"
                  alt="SME HR consulting services"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help SMEs Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.4' fillRule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5V0zm1 5v1H5v-1h1z'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">How We Help Small & Medium Enterprises</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our consultants bring enterprise-level HR expertise to SMEs, providing practical solutions that address
                your specific challenges and growth objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div
                ref={addToRefs}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-10"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HR Strategy Development</h3>
                <p className="text-gray-600 mb-4">
                  We help you create a comprehensive HR strategy aligned with your business goals, company culture, and
                  growth plans.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Workforce planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Talent acquisition strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Performance management frameworks</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div
                ref={addToRefs}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-10"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy & Procedure Development</h3>
                <p className="text-gray-600 mb-4">
                  We create clear, compliant HR policies and procedures tailored to your business needs and industry
                  requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Employee handbooks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Workplace policies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Compliance documentation</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div
                ref={addToRefs}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-10"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Risk Management</h3>
                <p className="text-gray-600 mb-4">
                  We help you navigate complex employment laws and regulations to minimize legal risks and ensure
                  compliance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Regulatory compliance audits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Employment law guidance</span>
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div
                ref={addToRefs}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-10"
                style={{ transitionDelay: "400ms" }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Talent Acquisition & Retention</h3>
                <p className="text-gray-600 mb-4">
                  We develop effective recruitment strategies and retention programs to help you attract and keep top
                  talent.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Recruitment process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Employer branding strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Employee engagement initiatives</span>
                  </li>
                </ul>
              </div>

              {/* Card 5 */}
              <div
                ref={addToRefs}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-10"
                style={{ transitionDelay: "500ms" }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart4 className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Management</h3>
                <p className="text-gray-600 mb-4">
                  We design performance management systems that drive productivity, engagement, and professional
                  development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Goal-setting frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Review process development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Performance improvement plans</span>
                  </li>
                </ul>
              </div>

              {/* Card 6 */}
              <div
                ref={addToRefs}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-10"
                style={{ transitionDelay: "600ms" }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Development</h3>
                <p className="text-gray-600 mb-4">
                  We create targeted training programs that build skills, improve performance, and prepare employees for
                  advancement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Skills gap analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Leadership development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Succession planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Process Timeline */}
        <section className="py-20 bg-gray-50">
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Optimized Hiring Process for SMEs</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our consultants help you implement a streamlined, effective hiring process that attracts top talent
                while saving time and resources.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div
                      ref={addToRefs}
                      className="bg-white p-6 rounded-lg shadow-md inline-block opacity-0 translate-y-10 transition-all duration-500"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Analysis & Description</h3>
                      <p className="text-gray-600">
                        We help you define clear job requirements, responsibilities, and qualifications to attract the
                        right candidates.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold md:mx-4">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="flex items-center">
                      <Clipboard className="text-red-600 mr-3" size={24} />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block">
                    <div className="flex items-center justify-end">
                      <UserPlus className="text-red-600 ml-3" size={24} />
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold md:mx-4">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <div
                      ref={addToRefs}
                      className="bg-white p-6 rounded-lg shadow-md inline-block opacity-0 translate-y-10 transition-all duration-500"
                      style={{ transitionDelay: "200ms" }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Recruitment Strategy</h3>
                      <p className="text-gray-600">
                        We develop targeted recruitment strategies using the most effective channels for your industry
                        and position type.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div
                      ref={addToRefs}
                      className="bg-white p-6 rounded-lg shadow-md inline-block opacity-0 translate-y-10 transition-all duration-500"
                      style={{ transitionDelay: "300ms" }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Screening & Selection</h3>
                      <p className="text-gray-600">
                        We implement efficient screening processes to identify the most qualified candidates while
                        saving you time.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold md:mx-4">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="flex items-center">
                      <FileCheck className="text-red-600 mr-3" size={24} />
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block">
                    <div className="flex items-center justify-end">
                      <UserCheck className="text-red-600 ml-3" size={24} />
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold md:mx-4">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <div
                      ref={addToRefs}
                      className="bg-white p-6 rounded-lg shadow-md inline-block opacity-0 translate-y-10 transition-all duration-500"
                      style={{ transitionDelay: "400ms" }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Interviewing & Assessment</h3>
                      <p className="text-gray-600">
                        We design structured interview processes and assessment methods to evaluate candidates
                        effectively.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div
                      ref={addToRefs}
                      className="bg-white p-6 rounded-lg shadow-md inline-block opacity-0 translate-y-10 transition-all duration-500"
                      style={{ transitionDelay: "500ms" }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer & Negotiation</h3>
                      <p className="text-gray-600">
                        We help you create competitive offers and navigate negotiations to secure top talent within your
                        budget.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold md:mx-4">
                    5
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="flex items-center">
                      <Handshake className="text-red-600 mr-3" size={24} />
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block">
                    <div className="flex items-center justify-end">
                      <Users className="text-red-600 ml-3" size={24} />
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold md:mx-4">
                    6
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div
                      ref={addToRefs}
                      className="bg-white p-6 rounded-lg shadow-md inline-block opacity-0 translate-y-10 transition-all duration-500"
                      style={{ transitionDelay: "600ms" }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Onboarding & Integration</h3>
                      <p className="text-gray-600">
                        We develop effective onboarding programs that help new hires become productive quickly and
                        integrate into your culture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HR Policy/Legal FAQ Accordion */}
        <section
          ref={addToRefs}
          className="py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">HR Policy & Legal FAQ</h2>
              <p className="mt-4 text-lg text-gray-600">
                Common questions about HR policies, employment law, and compliance for small and medium enterprises.
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(0)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    What HR policies are essential for small businesses?
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transition-transform duration-200 ${
                      openAccordion === 0 ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === 0 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-3">
                      Even small businesses need certain essential HR policies to protect both the company and its
                      employees. The most important policies include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Employment at-will statement</strong> - Clarifies the employment relationship
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Anti-discrimination and harassment policies</strong> - Required by law
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Time off and leave policies</strong> - Including sick leave and vacation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Code of conduct</strong> - Sets expectations for workplace behavior
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Health and safety policies</strong> - Ensures workplace safety compliance
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(1)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    How can SMEs stay compliant with changing employment laws?
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transition-transform duration-200 ${
                      openAccordion === 1 ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === 1 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-3">
                      Staying compliant with employment laws is challenging for SMEs with limited resources. Here are effective strategies:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Regular legal reviews</strong> - Schedule quarterly reviews of your policies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>HR consulting services</strong> - Partner with experts who track legal changes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Industry associations</strong> - Join groups that provide compliance updates
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Compliance calendar</strong> - Create reminders for filing deadlines
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(2)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    What are the most common HR compliance issues for SMEs?
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transition-transform duration-200 ${
                      openAccordion === 2 ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === 2 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-3">
                      Small and medium businesses frequently encounter these compliance challenges:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Employee misclassification</strong> - Incorrectly classifying employees as contractors
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Wage and hour violations</strong> - Overtime, minimum wage, and break time errors
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Inadequate documentation</strong> - Poor record-keeping for employment decisions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Inconsistent policy enforcement</strong> - Applying rules differently across employees
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(3)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    When should an SME hire its first HR professional?
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transition-transform duration-200 ${
                      openAccordion === 3 ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === 3 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-3">
                      The timing for hiring an HR professional depends on several factors. Consider bringing in HR expertise when:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Employee count reaches 15-20</strong> - This is often the tipping point
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Leadership spends too much time on HR issues</strong> - Taking focus from core business
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Experiencing high turnover</strong> - Indicating potential HR-related issues
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Rapid growth phase</strong> - When hiring needs increase significantly
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Many SMEs start with part-time HR consultants before hiring full-time staff, which can be a cost-effective approach.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(4)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    How can SMEs create effective employee handbooks?
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transition-transform duration-200 ${
                      openAccordion === 4 ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === 4 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-3">
                      An effective employee handbook serves as both a legal safeguard and a cultural guide. To create one:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Include required policies</strong> - Anti-harassment, equal opportunity, etc.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Reflect your company culture</strong> - Use language that matches your values
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Keep it accessible</strong> - Digital versions with searchable content
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Review annually</strong> - Update to reflect changing laws and company policies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">
                          <strong>Get legal review</strong> - Have an employment attorney review before distribution
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-16">
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your HR Approach?</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Our SME HR consulting services can help you build effective HR strategies, policies, and practices that
                drive growth and employee satisfaction.
              </p>
              <button className="bg-transparent hover:bg-red-600 text-red-500 hover:text-white px-8 py-4 rounded-md font-medium border-2 border-red-500 hover:border-red-600 transition-all duration-300">
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
