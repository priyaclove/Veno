"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Head from "next/head"
import {
  Shield,
  FileSearch,
  AlertTriangle,
  BarChart4,
  Lock,
  FileText,
  Scale,
  Briefcase,
  Eye,
  Search,
  ArrowRight,
  Radio,
  Wifi,
  Smartphone,
  Database,
  CreditCard,
  DollarSign,
  Users,
  Building,
} from "lucide-react"

export default function DueDiligencePage() {
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
  const currentRefs = sectionRefs.current; // take a stable snapshot

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
        <title>Corporate Due Diligence & Risk Assessment Services | VenoVox</title>
        <meta
          name="description"
          content="VenoVox offers comprehensive due diligence, risk assessment, compliance, intellectual property protection, and financial crime prevention services for businesses."
        />
        <link rel="canonical" href="https://venovox.com/due_diligence" />
        <meta property="og:title" content="Corporate Due Diligence & Risk Assessment Services | VenoVox" />
        <meta
          property="og:description"
          content="Comprehensive due diligence, risk assessment, compliance, and financial crime prevention services for businesses."
        />
        <meta property="og:url" content="https://venovox.com/due_diligence" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white w-full">
        {/* Due Diligence Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Comprehensive Corporate Due Diligence Services
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Our due diligence services provide thorough investigation and analysis of potential business
                partnerships, acquisitions, and investments. We help you make informed decisions by uncovering hidden
                risks and verifying critical information before you commit to significant business transactions.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                With our meticulous approach, we examine financial records, operational practices, legal compliance, and
                market positioning to give you a complete picture of the entity under review.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/due-deligence.jpg"
                alt="Corporate due diligence meeting with executives reviewing documents"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div
            ref={addToRefs}
            className="mt-16 bg-gray-50 rounded-lg p-8 shadow-md opacity-0 translate-y-10 transition-all duration-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <FileSearch className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Financial Due Diligence</h3>
                  <p className="text-gray-600 mt-1">
                    Comprehensive analysis of financial statements, cash flow, debt structure, and hidden liabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Operational Due Diligence</h3>
                  <p className="text-gray-600 mt-1">
                    Assessment of business operations, supply chain integrity, and operational efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Scale className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Due Diligence</h3>
                  <p className="text-gray-600 mt-1">
                    Review of contracts, litigation history, regulatory compliance, and legal obligations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Commercial Due Diligence</h3>
                  <p className="text-gray-600 mt-1">
                    Market analysis, competitive positioning, and growth potential evaluation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Risk Assessment</h3>
                  <p className="text-gray-600 mt-1">
                    Identification and evaluation of potential risks that could impact business value or operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Search className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Background Investigations</h3>
                  <p className="text-gray-600 mt-1">
                    Thorough vetting of key personnel, management teams, and business partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk & Audit Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/intelligence.jpg"
                alt="Corporate risk assessment and audit process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate Risk Assessment & Audit Services</h2>
              <p className="text-gray-700 mb-4">
                Our risk assessment and audit services help organizations identify, evaluate, and mitigate potential
                threats to their business operations, reputation, and financial stability. We provide a systematic
                approach to risk management that aligns with your strategic objectives.
              </p>
              <p className="text-gray-700 mb-4">
                Through comprehensive audits and assessments, we help you strengthen internal controls, improve
                compliance, and enhance operational efficiency while protecting your organization from emerging threats.
              </p>
            </div>
          </div>

          <div ref={addToRefs} className="mt-16 opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What We Offer?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <AlertTriangle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Enterprise Risk Management</h4>
                    <p className="text-gray-600 mt-2">
                      Development and implementation of comprehensive risk management frameworks tailored to your
                      organization&apos;s specific needs and industry requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <BarChart4 className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Financial Risk Assessment</h4>
                    <p className="text-gray-600 mt-2">
                      Evaluation of financial risks including market volatility, credit exposure, liquidity concerns,
                      and capital adequacy to ensure financial stability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <FileText className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Internal Audit Services</h4>
                    <p className="text-gray-600 mt-2">
                      Independent assessment of internal controls, operational efficiency, and compliance with policies
                      and procedures to identify improvement opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <Shield className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Cybersecurity Risk Assessment</h4>
                    <p className="text-gray-600 mt-2">
                      Evaluation of digital security posture, identification of vulnerabilities, and development of
                      mitigation strategies to protect sensitive data and systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/compliance.jpg"
                alt="Corporate governance and regulatory compliance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate Governance & Regulatory Compliance</h2>
              <p className="text-gray-700 mb-4">
                Our compliance services help organizations navigate the complex landscape of regulatory requirements and
                establish robust governance frameworks. We ensure your business operates within legal parameters while
                maintaining ethical standards and protecting stakeholder interests.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Policy Auditing and AML Monitoring</h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive policy auditing and Anti-Money Laundering (AML) monitoring services to help you
                identify compliance gaps, implement effective controls, and maintain ongoing vigilance against financial
                crimes.
              </p>
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-4">Compliance Success Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                    <p className="text-gray-600 text-sm">Compliance Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">75%</div>
                    <p className="text-gray-600 text-sm">Risk Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                    <p className="text-gray-600 text-sm">Cost Savings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <p className="text-gray-600 text-sm">Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IP Risk Mitigation & Innovation Monitoring</h2>
              <p className="text-gray-700 mb-4">
                Our intellectual property services help organizations protect their valuable innovations, creative
                assets, and proprietary information from infringement and misappropriation. We provide comprehensive
                strategies for IP management, monitoring, and enforcement.
              </p>
              <p className="text-gray-700 mb-4">
                From patents and trademarks to trade secrets and copyrights, we help you identify, secure, and leverage
                your intellectual property assets while monitoring for potential infringements in the marketplace.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">IP Advantages</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Shield className="text-red-600 mr-2" size={18} />
                      <h4 className="font-medium text-gray-900">Asset Protection</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Safeguard your valuable intellectual assets</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Eye className="text-red-600 mr-2" size={18} />
                      <h4 className="font-medium text-gray-900">Infringement Monitoring</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Continuous surveillance for IP violations</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Briefcase className="text-red-600 mr-2" size={18} />
                      <h4 className="font-medium text-gray-900">Competitive Advantage</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Maintain market leadership through IP protection</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <BarChart4 className="text-red-600 mr-2" size={18} />
                      <h4 className="font-medium text-gray-900">Value Creation</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Increase company valuation through IP assets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent z-10"></div>
              <Image
                src="/Innovation.webp"
                alt="Intellectual property protection and innovation monitoring"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Counter Measures Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gray-900 text-white rounded-lg opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Surveillance Countermeasure (TSCM)</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Our Technical Surveillance Countermeasure (TSCM) services help organizations detect, identify, and mitigate
            electronic eavesdropping threats and security vulnerabilities. We protect your sensitive discussions,
            confidential information, and privacy from unauthorized surveillance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <Radio className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">RF Signal Detection</h3>
              <p className="text-gray-400">
                Comprehensive scanning for unauthorized radio frequency transmissions and hidden wireless devices.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <Wifi className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">Network Security Analysis</h3>
              <p className="text-gray-400">
                Identification of vulnerabilities in wireless networks and detection of rogue access points.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <Smartphone className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">Mobile Device Inspection</h3>
              <p className="text-gray-400">
                Examination of smartphones and tablets for spyware, malware, and unauthorized monitoring apps.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <Eye className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">Physical Inspection</h3>
              <p className="text-gray-400">
                Thorough examination of premises for hidden cameras, microphones, and other surveillance devices.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <Lock className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">Secure Room Creation</h3>
              <p className="text-gray-400">
                Establishment of TSCM-cleared spaces for confidential meetings and sensitive discussions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <Shield className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">Preventive Consulting</h3>
              <p className="text-gray-400">
                Expert guidance on implementing proactive measures to prevent electronic eavesdropping.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300">
              Learn More About Our TSCM Services
            </button>
          </div>
        </section>

        {/* Financial Crime Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Crime Prevention & Detection</h2>
              <p className="text-gray-700 mb-4">
                Our financial crime services help organizations protect themselves from fraud, money laundering,
                corruption, and other financial misconduct. We combine advanced analytics, forensic expertise, and
                industry knowledge to identify suspicious activities and strengthen preventive controls.
              </p>
              <p className="text-gray-700 mb-4">
                From transaction monitoring and fraud detection to anti-money laundering (AML) compliance and
                investigations, we provide comprehensive solutions to safeguard your financial integrity and reputation.
              </p>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Financial-crime.jpg"
                alt="Financial crime prevention and detection services"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            ref={addToRefs}
            className="mt-12 bg-gray-50 rounded-lg p-8 shadow-md opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Database className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Transaction Monitoring</h4>
                  <p className="text-gray-600 mt-1">
                    Advanced analytics to identify suspicious patterns and anomalies in financial transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCard className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Fraud Detection & Prevention</h4>
                  <p className="text-gray-600 mt-1">
                    Comprehensive strategies to identify and mitigate various types of financial fraud.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <DollarSign className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Anti-Money Laundering (AML)</h4>
                  <p className="text-gray-600 mt-1">
                    Robust systems and controls to prevent, detect, and report money laundering activities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FileSearch className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Forensic Investigations</h4>
                  <p className="text-gray-600 mt-1">
                    Expert examination of financial records to uncover evidence of misconduct or fraud.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Due Diligence on Third Parties</h4>
                  <p className="text-gray-600 mt-1">
                    Thorough vetting of business partners, vendors, and other third parties for financial crime risks.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Compliance Program Development</h4>
                  <p className="text-gray-600 mt-1">
                    Design and implementation of effective financial crime compliance frameworks and controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Protect Your Business?</h2>
                <p className="text-gray-700 mb-4">
                  Contact our team of experts today to discuss how our comprehensive due diligence, risk assessment, and
                  compliance services can help safeguard your organization&apos;s assets, reputation, and future.
                </p>
                <p className="text-gray-700 mb-8">We&apos;ll respond within 24 hours to schedule your consultation.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium flex items-center group transition-all duration-300">
                  Get in Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/hero.webp"
                  alt="Contact our risk assessment and due diligence experts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
