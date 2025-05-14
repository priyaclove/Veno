import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  CalendarClock,
  CheckCircle,
  CreditCard,
  Gem,
  PiggyBank,
  Shield,
  Truck,
  Zap,
} from "lucide-react"
import type { Metadata } from "next"

// SEO metadata
export const metadata: Metadata = {
  title: "Payroll & PEO Services | Streamlined HR Solutions | Venovox",
  description:
    "Simplify your business operations with Venovox's comprehensive payroll and PEO services. Reduce costs, ensure compliance, and focus on growth.",
  keywords:
    "payroll services, PEO services, HR outsourcing, employee benefits, compliance management, payroll management firm",
}

export default function PayrollPEOServices() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-transparent"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
                Simplify Payroll.
                <span className="text-red-600"> Empower</span> Your Business.
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Comprehensive payroll and PEO solutions that reduce administrative burden, ensure compliance, and help
                your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md transition-all duration-300 hover:bg-red-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Payroll management dashboard"
                  width={700}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Outsource Payroll */}
      <section id="learn-more" className="relative w-full py-16 bg-gray-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Business team discussing payroll solutions"
                  width={700}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent"></div>
              </div>
              <div className="absolute -right-4 -bottom-4 flex items-center justify-center w-20 h-20 bg-red-600 rounded-full text-white animate-bounce-slow">
                <PiggyBank className="h-10 w-10" />
              </div>
              <div className="absolute -left-4 -top-4 flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full text-white animate-bounce-slow delay-150">
                <CalendarClock className="h-8 w-8" />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full font-medium text-sm mb-2">
                Why Outsource
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Focus on Growth, Not Paperwork</h2>
              <p className="text-gray-600 text-lg">
                Payroll administration can consume valuable time and resources that could be better spent on core
                business activities. Outsourcing to a professional payroll service provider offers numerous advantages.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    icon: <CreditCard className="h-5 w-5 text-red-600" />,
                    title: "Cost Savings",
                    description: "Reduce expenses associated with maintaining an in-house payroll department",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-red-600" />,
                    title: "Compliance Management",
                    description: "Stay updated with changing tax laws and regulations",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-red-600" />,
                    title: "Increased Efficiency",
                    description: "Streamline processes and eliminate payroll processing errors",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Comprehensive HR Solutions</h2>
            <p className="text-lg text-gray-600">
              Our expert team delivers tailored payroll and PEO services to help your business operate more efficiently
              while reducing overhead costs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-red-600" />,
                title: "Admin & Benefits",
                description:
                  "Full-service employee benefits administration including health insurance, retirement plans, and other valuable benefits.",
                delay: "0",
              },
              {
                icon: <Shield className="h-8 w-8 text-red-600" />,
                title: "Compliance Management",
                description:
                  "Stay compliant with ever-changing employment laws and regulations, reducing risk of penalties and legal issues.",
                delay: "150",
              },
              {
                icon: <Truck className="h-8 w-8 text-red-600" />,
                title: "Recruitment Solutions",
                description:
                  "End-to-end recruitment support from job posting to onboarding, helping you find and retain top talent.",
                delay: "300",
              },
              {
                icon: <Gem className="h-8 w-8 text-red-600" />,
                title: "Performance Management",
                description:
                  "Comprehensive tools and strategies to monitor, evaluate, and improve employee performance.",
                delay: "450",
              },
              {
                icon: <Zap className="h-8 w-8 text-red-600" />,
                title: "HR Technology",
                description: "Cutting-edge HR technology solutions to streamline processes and enhance efficiency.",
                delay: "600",
              },
              {
                icon: <PiggyBank className="h-8 w-8 text-red-600" />,
                title: "Cost Reduction",
                description:
                  "Strategic initiatives to optimize resources and reduce operational expenses across your organization.",
                delay: "750",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-6 bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  animationDelay: `${item.delay}ms`,
                }}
              >
                <div className="p-3 rounded-full bg-red-50 w-fit mb-4 transition-colors duration-300 group-hover:bg-red-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 flex-1">{item.description}</p>
                <div className="h-1 w-0 bg-red-600 mt-4 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a PEO Section */}
      <section className="relative w-full py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What is a <span className="text-red-600">PEO</span> and How Can It Help?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A Professional Employer Organization (PEO) provides comprehensive HR solutions to small and medium-sized
              businesses. By entering a co-employment relationship, your company can outsource employee management tasks
              such as:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Employee benefits administration",
                "Payroll processing and tax filing",
                "HR compliance and risk management",
                "Workers' compensation",
                "Employee training and development",
                "Recruiting and onboarding",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-8">
              By partnering with Venovox&apos;s PEO services, businesses can reduce costs, minimize administrative burdens,
              and provide competitive benefits packages that help attract and retain top talent.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md transition-all duration-300 hover:bg-red-700"
            >
              Learn More About Our PEO Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* HR Technology & Services Carousel */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">HR Technology & Services</h2>
            <p className="text-lg text-gray-600">
              Discover our cutting-edge HR technology solutions designed to streamline processes and enhance efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "HRIS Platform",
                description: "Comprehensive human resource information system to centralize employee data management.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Time & Attendance",
                description: "Automated tracking solutions to monitor employee hours, time off, and scheduling.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Onboarding System",
                description: "Streamlined digital onboarding to improve the new employee experience.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Support Highlight */}
      <section className="w-full py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Trusted by Businesses</h2>
            <p className="text-lg text-gray-600">See what our clients say about our payroll and PEO services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Switching to Venovox's payroll services was one of the best business decisions we've made. The time we've saved on administrative tasks has allowed us to focus on growing our company.",
                author: "Sarah Johnson",
                position: "CEO, Innovate Tech",
                delay: "0",
              },
              {
                quote:
                  "As a small business owner, compliance was always a concern. With Venovox's PEO services, I no longer worry about keeping up with changing regulations. Their team handles everything professionally.",
                author: "Michael Chen",
                position: "Owner, Pacific Designs",
                delay: "200",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl"
                style={{
                  animationDelay: `${item.delay}ms`,
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-red-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">&apos;{item.quote}&apos;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold text-gray-900">{item.author}</p>
                    <p className="text-gray-600 text-sm">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Streamline Your HR & Payroll?</h2>
            <p className="text-lg text-gray-300">
              Join hundreds of businesses that trust Venovox for their payroll and PEO needs.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-medium rounded-md text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-red-600/20"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-gray-400 text-sm mt-6">No commitments. Find the perfect solution for your business.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
