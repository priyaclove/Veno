"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Head from "next/head"
import {
  CheckCircle,
  Shield,
  Search,
  Users,
  Brain,
  TrendingUp,
  FileSearch,
  Briefcase,
  BarChart4,
  RefreshCw,
  ArrowRight,
} from "lucide-react"

export default function HRServicesPage() {
  // Refs for all sections that will have fade-in animations
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

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

  // Observe all section refs
  currentRefs.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    currentRefs.forEach((ref) => {
      if (ref) observer.unobserve(ref);
    });
  };
}, []);

  // Add section to refs array
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <>
      <Head>
        <title>Professional HR Services | Streamlined Hiring Solutions | VenoVox</title>
        <meta
          name="description"
          content="VenoVox offers comprehensive HR services including streamlined hiring solutions, background checks, NLE assessments, and organizational change management."
        />
        <link rel="canonical" href="https://venovox.com/hr_services" />
        <meta property="og:title" content="Professional HR Services | VenoVox" />
        <meta
          property="og:description"
          content="Comprehensive HR services including hiring solutions, background checks, and organizational change management."
        />
        <meta property="og:url" content="https://venovox.com/hr_services" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white w-full">
        {/* Hero Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Find The Most Streamlined Hiring Solutions With Us
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Our comprehensive HR services are designed to optimize your hiring process, ensure compliance, and build
                a stronger workforce through advanced assessment techniques and thorough background screening.
              </p>
              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center group transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/hero.webp"
                alt="Professional HR team in a meeting discussing hiring solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Optimized Hiring Practice */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Streamlined Hiring Solutions</h2>
              <p className="text-gray-700 mb-4">
                Our optimized hiring practices help you identify and secure top talent efficiently. We combine
                traditional HR expertise with modern technology to streamline your recruitment process from start to
                finish.
              </p>
              <p className="text-gray-700 mb-4">By implementing our proven methodologies, companies typically see:</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>40% reduction in time-to-hire metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Significant decrease in employee turnover</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Higher quality candidates through precise screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Improved team cohesion and workplace culture</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/hero.webp"
                alt="Streamlined hiring process in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quote Highlight */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 md:p-12 rounded-lg border-l-4 border-red-600">
            <blockquote className="text-2xl md:text-3xl font-medium text-center text-gray-800 italic">
              &apos;The last thing you need in your future, is an employee with a past.&apos;
            </blockquote>
            <p className="text-center mt-4 text-gray-600 font-medium">— VenoVox HR Philosophy</p>
          </div>
        </section>

        {/* Background Screening */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Workforce Background Checks</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.webp"
                alt="Comprehensive background screening process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Our thorough background screening services help you make informed hiring decisions and mitigate
                potential risks. We provide comprehensive checks that comply with all relevant regulations while
                delivering fast, accurate results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Criminal History Verification</h3>
                    <p className="text-gray-600">Multi-jurisdictional checks at local, state, and federal levels</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileSearch className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Employment & Education Verification</h3>
                    <p className="text-gray-600">Confirm credentials and work history accuracy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Search className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Reference Checks</h3>
                    <p className="text-gray-600">In-depth conversations with previous employers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart4 className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Credit & Financial History</h3>
                    <p className="text-gray-600">For positions with financial responsibilities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workplace Investigation */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Modern Workforce Investigation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6">
                Our workplace investigation services help organizations address concerns promptly and professionally. We
                conduct thorough, impartial investigations that protect both your company and employees while
                maintaining confidentiality.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Shield className="text-red-600 mr-2" size={20} />
                    <h3 className="font-semibold text-gray-900">Integrity</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Unbiased investigations conducted with the highest ethical standards
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Users className="text-red-600 mr-2" size={20} />
                    <h3 className="font-semibold text-gray-900">Privacy</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Confidential process that protects all parties involved</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <FileSearch className="text-red-600 mr-2" size={20} />
                    <h3 className="font-semibold text-gray-900">Thoroughness</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Comprehensive evidence gathering and documentation</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="text-red-600 mr-2" size={20} />
                    <h3 className="font-semibold text-gray-900">Resolution</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Clear recommendations for appropriate action</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.webp"
                alt="Professional workplace investigation process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What We Offer</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our comprehensive suite of HR services is designed to optimize your workforce management and create a more
            productive, harmonious workplace environment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Search className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Candidate Screening</h3>
              <p className="text-gray-600">
                Comprehensive background checks and credential verification to ensure quality hires.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Brain className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NLE Assessment</h3>
              <p className="text-gray-600">
                Advanced personality and aptitude testing to match candidates to your company culture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <FileSearch className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Workplace Investigations</h3>
              <p className="text-gray-600">Thorough, impartial investigations of workplace incidents and concerns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <RefreshCw className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Reengineering</h3>
              <p className="text-gray-600">Optimization of HR workflows to increase efficiency and effectiveness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Users className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Change Management</h3>
              <p className="text-gray-600">
                Strategic guidance for implementing organizational changes with minimal disruption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Briefcase className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Executive Recruitment</h3>
              <p className="text-gray-600">Specialized search services for leadership and executive positions.</p>
            </div>
          </div>
        </section>

        {/* Workforce Analysis (NLE) */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Corporate Neuro-Linguistic Enneagram Assessment
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8 text-center">
              Our proprietary NLE Assessment goes beyond traditional personality tests to provide deeper insights into
              candidate behavior, communication styles, and potential fit within your organization.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NLE vs. Traditional Assessments</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">NLE Advantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Combines multiple assessment frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Analyzes communication patterns and preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Identifies stress responses and adaptability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Provides team compatibility insights</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">MBTI/DISC Limitations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Single-dimensional assessment approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Limited predictive value for job performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Minimal insight into adaptability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Generic recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of NLE */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of NLE</h2>
              <p className="text-gray-700 mb-6">
                Our Neuro-Linguistic Enneagram assessment provides unique insights that help you build stronger teams
                and improve workplace dynamics. Here&apos;s how NLE can transform your organization:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Improved Team Composition</h3>
                    <p className="text-gray-600">Create balanced teams with complementary strengths</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Communication</h3>
                    <p className="text-gray-600">Understand and adapt to different communication styles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Conflict Reduction</h3>
                    <p className="text-gray-600">Identify potential friction points before they become issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Leadership Development</h3>
                    <p className="text-gray-600">Tailor coaching to individual communication patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduced Turnover</h3>
                    <p className="text-gray-600">Better cultural fit leads to higher retention rates</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.webp"
                alt="Team assessment and analysis process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Long-term Benefits */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Long-term Corporate Benefits</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Implementing our HR solutions delivers lasting advantages that extend far beyond the hiring process.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <TrendingUp className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Increased Productivity</h3>
              <p className="text-gray-600">
                Better-matched employees perform at higher levels and contribute more effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Users className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved Culture</h3>
              <p className="text-gray-600">
                Strategic hiring creates a more cohesive and positive workplace environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Shield className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">Thorough screening and assessment reduces potential workplace issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <BarChart4 className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Lower turnover and higher productivity translate to significant cost savings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Brain className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Boost</h3>
              <p className="text-gray-600">Diverse, well-matched teams generate more creative solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <RefreshCw className="text-red-600 mb-4" size={28} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adaptability</h3>
              <p className="text-gray-600">Teams built with our methods respond better to change and challenges.</p>
            </div>
          </div>
        </section>

        {/* Change Management + HRPR */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <RefreshCw className="text-red-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Organizational Change Management</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our change management services help organizations navigate transitions smoothly and effectively. We
                provide structured approaches to implementing new processes, technologies, or organizational structures
                while minimizing disruption and resistance.
              </p>
              <p className="text-gray-700 mb-4">
                Our methodology includes comprehensive stakeholder analysis, tailored communication strategies, and
                ongoing support to ensure changes are embraced and sustained throughout your organization.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Stakeholder mapping and engagement planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Resistance management strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Training and support program development</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-red-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">HRPR – Human Resource Process Reengineering</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our HRPR services help organizations optimize their HR processes for maximum efficiency and
                effectiveness. We analyze your current workflows, identify bottlenecks and inefficiencies, and implement
                streamlined solutions that save time and resources.
              </p>
              <p className="text-gray-700 mb-4">
                By reengineering your HR processes, we help you create systems that better serve both your employees and
                your organizational goals while reducing administrative burden.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Comprehensive HR process audit and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Technology integration and automation recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Implementation support and process documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Get In Touch */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.webp"
                alt="Contact our HR services team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Our HR Experts</h2>
              <p className="text-gray-700 mb-6">
                Ready to transform your HR processes and build a stronger workforce? Our team of experienced HR
                professionals is here to help you develop customized solutions that address your specific challenges and
                goals.
              </p>
              <p className="text-gray-700 mb-8">
                Schedule a consultation today to discuss how our services can benefit your organization.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium flex items-center group transition-all duration-300">
                Connect With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
