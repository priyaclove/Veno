import type React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  Gem,
  GraduationCap,
  Search,
  Shield,
  Target,
  Users,
} from "lucide-react"
import type { Metadata } from "next"

// SEO metadata
export const metadata: Metadata = {
  title: "Talent Acquisition & Academy | Professional Recruitment Services | Venovox",
  description:
    "Leverage Venovox's expert talent acquisition services and training academy to find, develop, and retain top talent for your business.",
  keywords:
    "talent acquisition, recruitment services, corporate training, employee development, hiring solutions, talent strategy",
}

// Component for feature card
// interface FeatureCardProps {
//   icon: React.ReactNode
//   title: string
//   description: string
//   index: number
// }

// function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
//   return (
//     <div
//       className="group relative flex flex-col p-6 bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       <div className="p-3 rounded-full bg-gray-100 w-fit mb-4 transition-colors duration-300 group-hover:bg-red-100">
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600 flex-1">{description}</p>
//       <div className="h-0.5 w-0 bg-red-600 mt-4 transition-all duration-300 group-hover:w-full"></div>
//     </div>
//   )
// }

// Component for approach step
interface ApproachStepProps {
  number: number
  title: string
  description: string
}

function ApproachStep({ number, title, description }: ApproachStepProps) {
  return (
    <div className="flex relative">
      <div className="mr-6 flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg transition-transform duration-300 hover:scale-110">
          {number}
        </div>
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {number < 5 && (
        <div className="absolute left-6 top-12 w-px h-full -ml-px bg-gray-300">
          <div className="absolute left-0 top-0 w-px h-0 bg-red-600 transition-all duration-1000 group-hover:h-full"></div>
        </div>
      )}
    </div>
  )
}

export default function TalentAcquisitionAcademy() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-red-600 text-white rounded-full font-medium text-sm mb-4 animate-pulse">
              Strategic Recruitment Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Smart Hiring Starts with Smart Strategy
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-xl">
              Find, develop, and retain top talent with our comprehensive talent acquisition services and corporate
              academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md transition-all duration-300 hover:bg-red-700"
              >
                Find Top Talent
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-all duration-300"
              >
                Explore Academy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Venovox 3 Card Block */}
      <section id="learn-more" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-gray-100 text-red-600 rounded-full font-medium text-sm mb-2">
              Why Choose Venovox
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Talent Acquisition Excellence</h2>
            <p className="text-lg text-gray-600">
              Our specialized approach combines industry expertise, advanced technology, and personalized service to
              deliver exceptional talent solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Target className="h-8 w-8 text-red-600" />,
                title: "Strategic Approach",
                description:
                  "Data-driven recruitment strategies tailored to your specific industry, company size, and hiring objectives.",
              },
              {
                icon: <Users className="h-8 w-8 text-red-600" />,
                title: "Talent Network",
                description:
                  "Access to a vast network of pre-screened candidates across multiple industries and specializations.",
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-red-600" />,
                title: "Training Excellence",
                description:
                  "Comprehensive training programs to develop your existing workforce and new hires for optimal performance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col p-6 bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-3 mb-4 rounded-full bg-gray-50 w-fit transition-colors duration-300 group-hover:bg-red-50">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="h-0.5 w-24 bg-red-600 mt-4 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zig-Zag Format Section 1 */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full font-medium text-sm mb-2">
                Talent Acquisition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Expert Recruitment Services</h2>
              <p className="text-lg text-gray-700">
                Our specialized team helps you find the perfect candidates for your organization&apos;s needs, from
                entry-level positions to executive leadership roles.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive candidate screening and assessment",
                  "Industry-specific recruitment expertise",
                  "Permanent, contract, and temporary staffing solutions",
                  "Executive search and leadership recruitment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
              >
                Learn more about our recruitment services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative order-first md:order-last">
              <div className="absolute -inset-4 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                <Image
                  src="/hero.webp"
                  alt="Recruitment specialists conducting interview"
                  width={700}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zig-Zag Format Section 2 */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                <Image
                  src="/hero.webp"
                  alt="Corporate training session"
                  width={700}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full font-medium text-sm mb-2">
                Corporate Academy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Develop Your Workforce</h2>
              <p className="text-lg text-gray-700">
                Our comprehensive training programs help develop skilled professionals ready to contribute to your
                organization&apos;s success from day one.
              </p>
              <ul className="space-y-3">
                {[
                  "Customized training curricula for various roles and industries",
                  "Professional development for existing employees",
                  "Leadership and management training",
                  "Technical skills development and certification programs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#academy"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
              >
                Explore our academy programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative w-full py-16 md:py-24 bg-gray-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1600')] bg-cover bg-center opacity-5"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-gray-200 text-red-600 rounded-full font-medium text-sm mb-2">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">A Proven Approach to Talent Acquisition</h2>
            <p className="text-lg text-gray-600">
              Our systematic recruitment methodology ensures we find the perfect match for your organization&apos;s unique
              needs.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0 group">
              {[
                {
                  number: 1,
                  title: "Needs Assessment",
                  description:
                    "We begin by thoroughly understanding your company culture, requirements, and the specific skills needed for the role.",
                },
                {
                  number: 2,
                  title: "Strategic Sourcing",
                  description:
                    "Using our extensive network and advanced search techniques, we identify qualified candidates who match your requirements.",
                },
                {
                  number: 3,
                  title: "Rigorous Screening",
                  description:
                    "Candidates undergo comprehensive evaluations, including skills assessments, behavioral interviews, and reference checks.",
                },
                {
                  number: 4,
                  title: "Candidate Presentation",
                  description:
                    "We present a shortlist of top candidates with detailed profiles highlighting their qualifications and cultural fit.",
                },
                {
                  number: 5,
                  title: "Onboarding Support",
                  description:
                    "Once selected, we assist with the offer process and provide continued support throughout the onboarding journey.",
                },
              ].map((item) => (
                <ApproachStep
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preferred Because Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full font-medium text-sm mb-2">
              Our Difference
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Preferred Because We Deliver</h2>
            <p className="text-lg text-gray-600">
              What sets our talent acquisition services apart from traditional recruitment agencies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Specialized recruiters with deep knowledge of your industry's unique requirements and challenges.",
                icon: <Briefcase className="h-8 w-8 text-red-600" />,
              },
              {
                title: "Quality Over Quantity",
                description: "We focus on finding the perfect match rather than flooding you with resumes.",
                icon: <Award className="h-8 w-8 text-red-600" />,
              },
              {
                title: "Data-Driven Approach",
                description:
                  "Utilizing advanced analytics and market intelligence to optimize your recruitment strategy.",
                icon: <Search className="h-8 w-8 text-red-600" />,
              },
              {
                title: "Long-Term Partnership",
                description: "We build ongoing relationships to understand your evolving talent needs.",
                icon: <Users className="h-8 w-8 text-red-600" />,
              },
              {
                title: "Comprehensive Solutions",
                description: "End-to-end services from job analysis to onboarding and training.",
                icon: <Gem className="h-8 w-8 text-red-600" />,
              },
              {
                title: "Risk Mitigation",
                description: "Thorough vetting processes to ensure candidates meet all compliance requirements.",
                icon: <Shield className="h-8 w-8 text-red-600" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-3 mb-4 rounded-full bg-white w-fit transition-colors duration-300 group-hover:bg-red-50">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="h-0.5 w-12 bg-red-600 mt-4 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Services */}
      <section id="academy" className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-gray-200 text-red-600 rounded-full font-medium text-sm mb-2">
              Our Academy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Comprehensive Training Solutions</h2>
            <p className="text-lg text-gray-600">
              Develop your workforce with our specialized training programs designed to enhance skills and improve
              performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Leadership Development",
                description: "Comprehensive programs to develop effective leaders at all levels of your organization.",
                pattern: "bg-[radial-gradient(gray_1px,transparent_1px)] bg-[size:16px_16px]",
              },
              {
                title: "Technical Skills Training",
                description: "Specialized training in industry-specific technical skills and certifications.",
                pattern: "bg-[linear-gradient(45deg,gray_1px,transparent_1px,transparent_10px)] bg-[size:10px_10px]",
              },
              {
                title: "Onboarding Programs",
                description: "Structured onboarding to accelerate new employee integration and productivity.",
                pattern: "bg-[linear-gradient(to_right,gray_1px,transparent_1px)] bg-[size:10px_10px]",
              },
              {
                title: "Soft Skills Development",
                description: "Communication, teamwork, and other essential interpersonal skills training.",
                pattern:
                  "bg-[radial-gradient(circle_at_center,gray_1px,transparent_1px,transparent_10px)] bg-[size:10px_10px]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${item.pattern} bg-opacity-10 hover:bg-none border border-gray-100`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center mt-4 text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80"></div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Transform Your Talent Strategy Today</h2>
            <p className="text-lg text-gray-300">
              Partner with Venovox to elevate your recruitment and training processes.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-medium rounded-md text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-red-600/30 animate-pulse hover:animate-none"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-gray-400 text-sm mt-6">
              Discover how our tailored talent solutions can drive your business forward.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
