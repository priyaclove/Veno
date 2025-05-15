"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Head from "next/head"
import { DollarSign, Users, FileText, Shield, Clock, BarChart4, CheckCircle, ArrowRight, Building, Briefcase, Calculator, Award } from 'lucide-react'

export default function PayrollPEOPage() {
  // Refs for all sections that will have fade-in animations
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
  const currentRefs = sectionRefs.current; // ✅ local copy

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

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
        <title>Professional Payroll & PEO Services | VenoVox</title>
        <meta
          name="description"
          content="VenoVox offers comprehensive payroll management and Professional Employer Organization (PEO) services to streamline your HR operations and ensure compliance."
        />
        <link rel="canonical" href="https://venovox.com/payroll-peo" />
        <meta property="og:title" content="Professional Payroll & PEO Services | VenoVox" />
        <meta
          property="og:description"
          content="Comprehensive payroll management and PEO services to streamline your HR operations and ensure compliance."
        />
        <meta property="og:url" content="https://venovox.com/payroll-peo" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white w-full">
        {/* Hero Section with Lined Background */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Streamlined Payroll & PEO Services
                </h1>
                <p className="mt-6 text-lg text-gray-700">
                  Our comprehensive payroll and Professional Employer Organization (PEO) services help businesses of all
                  sizes manage their workforce more efficiently, reduce administrative burden, and ensure compliance
                  with ever-changing regulations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium flex items-center group transition-all duration-300">
                    Explore Our Services
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero.webp"
                  alt="Professional payroll management services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Payroll Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our payroll solutions are designed to save you time, reduce errors, and ensure compliance with tax laws
              and regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Calculator className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payroll Processing</h3>
              <p className="text-gray-600">
                Accurate and timely processing of your payroll, including direct deposits, tax withholdings, and
                customized reporting.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Automated calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Multiple payment options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Secure processing systems</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <FileText className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Administration</h3>
              <p className="text-gray-600">
                Comprehensive management of payroll taxes, including calculations, filings, and payments to relevant
                authorities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Tax filing and remittance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Year-end tax forms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Tax compliance updates</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <BarChart4 className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting & Analytics</h3>
              <p className="text-gray-600">
                Detailed payroll reports and analytics to help you make informed decisions about your workforce and
                budget.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Custom report generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Labor cost analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Department budgeting tools</span>
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Users className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Self-Service</h3>
              <p className="text-gray-600">
                Empower your employees with secure access to their payroll information, tax documents, and more.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">24/7 portal access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Mobile-friendly interface</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Secure document storage</span>
                </li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Clock className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time & Attendance</h3>
              <p className="text-gray-600">
                Streamlined tracking of employee hours, PTO, and attendance integrated with your payroll system.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Digital time tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">PTO management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Overtime calculations</span>
                </li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Management</h3>
              <p className="text-gray-600">
                Stay compliant with changing payroll regulations, tax laws, and reporting requirements.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Regulatory updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Audit support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Compliance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What is a PEO Section with Dotted Background */}
        <section className="relative bg-gray-50 py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Professional Employer Organization?</h2>
                <p className="text-gray-700 mb-4">
                  A Professional Employer Organization (PEO) provides comprehensive HR solutions for small and
                  medium-sized businesses. Through a co-employment relationship, a PEO helps companies manage employee
                  benefits, payroll, worker, compensation, and HR compliance.
                </p>
                <p className="text-gray-700 mb-6">
                  By partnering with a PEO like VenoVox, you can focus on growing your business while we handle the
                  complex administrative tasks associated with managing your workforce.
                </p>
                <div className="flex items-center mt-8">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                    <Building className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Co-Employment Model</h3>
                    <p className="text-gray-600 text-sm">
                      We share employer responsibilities while you maintain day-to-day control of your staff
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Benefits of Using a PEO</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <DollarSign className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Cost Savings</h4>
                      <p className="text-gray-600 text-sm">
                        Access to enterprise-level benefits at competitive rates, reducing overall HR costs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Reduced Compliance Risk</h4>
                      <p className="text-gray-600 text-sm">
                        Expert guidance on employment laws and regulations to minimize legal exposure
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Enhanced Employee Benefits</h4>
                      <p className="text-gray-600 text-sm">
                        Access to better health insurance, retirement plans, and other benefits
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Time Savings</h4>
                      <p className="text-gray-600 text-sm">
                        Outsource time-consuming HR tasks so you can focus on business growth
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          ref={addToRefs}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose VenoVox for Payroll & PEO Services?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise, cutting-edge technology, and personalized service to deliver exceptional
              payroll and PEO solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Award className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Our team brings decades of experience in payroll management and HR administration across various
                industries.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Briefcase className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                We customize our services to meet your specific business needs, whether you &apos;re a small startup or a
                growing enterprise.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Guarantee</h3>
              <p className="text-gray-600">
                We stay up-to-date with changing regulations to ensure your payroll and HR practices remain compliant.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Users className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Our responsive customer service team is always available to address your questions and concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <BarChart4 className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                Our secure, cloud-based platforms provide real-time access to payroll data and HR information.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <DollarSign className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Our services help you reduce overhead costs while providing better benefits and HR support.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-16">
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black mb-6">Ready to Streamline Your Payroll & HR Operations?</h2>
              <p className="text-lg text-gray-900 max-w-3xl mx-auto mb-8">
                Contact us today to learn how our Payroll and PEO services can help your business save time, reduce
                costs, and focus on growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300">
                  Schedule a Consultation
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
