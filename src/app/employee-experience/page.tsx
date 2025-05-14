"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import {
  Users,
  BookOpen,
  Award,
  BarChart4,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  MessageSquare,
  Briefcase,
  Target,
  TrendingUp,
  Zap,
  Heart,
  ThumbsUp,
  ChevronLeft,
} from "lucide-react"

export default function EmployeeExperiencePage() {
  // Refs for all sections that will have fade-in animations
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "The training program completely transformed how our managers approach leadership. We've seen measurable improvements in team performance and employee satisfaction.",
      author: "Sarah Johnson",
      position: "HR Director, TechCorp Inc.",
      rating: 5,
    },
    {
      quote:
        "The employee experience framework helped us identify and address key pain points in our organization. Our retention rates have improved by 35% in just six months.",
      author: "Michael Chen",
      position: "COO, Innovate Solutions",
      rating: 5,
    },
    {
      quote:
        "The performance tracking tools provided clear insights into our team's strengths and areas for improvement. It's been invaluable for our growth strategy.",
      author: "Jessica Williams",
      position: "Team Lead, Global Ventures",
      rating: 4,
    },
  ]

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
const currentRefs = sectionRefs.current;

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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <>
      <Head>
        <title>Employee Experience & Training Services | VenoVox</title>
        <meta
          name="description"
          content="VenoVox offers comprehensive employee experience and training services to help organizations build engaged, productive, and loyal workforces."
        />
        <link rel="canonical" href="https://venovox.com/employee-experience" />
        <meta property="og:title" content="Employee Experience & Training Services | VenoVox" />
        <meta
          property="og:description"
          content="Comprehensive employee experience and training services to help organizations build engaged, productive, and loyal workforces."
        />
        <meta property="og:url" content="https://venovox.com/employee-experience" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white w-full">
        {/* Hero Section with Blur Card Layout */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                transform: "rotate(5deg)",
              }}
            ></div>
          </div>
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Elevate Your Employee Experience & Training
                  </h1>
                  <p className="mt-6 text-lg text-gray-700">
                    We help organizations create exceptional employee experiences and develop effective training
                    programs that drive engagement, productivity, and retention.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium flex items-center group transition-all duration-300">
                      Explore Our Services
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        size={18}
                      />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium transition-all duration-300">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-red-100 rounded-2xl transform rotate-6"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-2xl transform -rotate-6"></div>
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hero.webp"
                    alt="Employee training and development workshop"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manager Training Section */}
        <section className="py-20 bg-gray-50">
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Comprehensive Manager Training Programs</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our manager training programs equip leaders with the skills and knowledge they need to build
                high-performing teams and create positive work environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/hero.webp"
                    alt="Manager leadership training session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Training Impact</h3>
                    <TrendingUp className="text-red-600" size={20} />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Team Performance</span>
                        <span className="text-sm font-medium text-gray-700">+42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Employee Retention</span>
                        <span className="text-sm font-medium text-gray-700">+35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Engagement Scores</span>
                        <span className="text-sm font-medium text-gray-700">+58%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Development Modules</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-lg mr-4">
                        <Users className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Team Building & Collaboration</h4>
                        <p className="text-gray-600">
                          Learn strategies for building cohesive teams, fostering collaboration, and managing team
                          dynamics effectively.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-lg mr-4">
                        <MessageSquare className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Communication & Feedback</h4>
                        <p className="text-gray-600">
                          Develop advanced communication skills and learn how to provide constructive feedback that
                          drives improvement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-lg mr-4">
                        <Target className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Performance Management</h4>
                        <p className="text-gray-600">
                          Master the art of setting clear expectations, monitoring progress, and coaching for improved
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-lg mr-4">
                        <Briefcase className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Conflict Resolution</h4>
                        <p className="text-gray-600">
                          Learn effective techniques for managing workplace conflicts and turning disagreements into
                          opportunities for growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Tracking Section */}
        <section ref={addToRefs} className="py-20 opacity-0 translate-y-10 transition-all duration-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Performance Tracking & Development</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our performance tracking tools and development frameworks help organizations measure, analyze, and
                improve employee performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gray-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Performance Framework</h3>
                  <p className="text-gray-700 mb-6">
                    Our holistic approach to performance management goes beyond traditional metrics to capture the full
                    spectrum of employee contributions and development needs.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-lg mr-4">
                        <Target className="text-red-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Goal Alignment</h4>
                        <p className="text-gray-600 text-sm">
                          Connect individual goals to team and organizational objectives for greater impact
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-lg mr-4">
                        <BarChart4 className="text-red-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Data-Driven Insights</h4>
                        <p className="text-gray-600 text-sm">
                          Leverage analytics to identify patterns and opportunities for improvement
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-lg mr-4">
                        <MessageSquare className="text-red-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Continuous Feedback</h4>
                        <p className="text-gray-600 text-sm">
                          Replace annual reviews with ongoing conversations about performance and growth
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-lg mr-4">
                        <BookOpen className="text-red-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Development Planning</h4>
                        <p className="text-gray-600 text-sm">
                          Create personalized growth plans that align with career aspirations and business needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Comparison</h3>
                  <p className="text-gray-700 mb-8">
                    See how our performance management approach compares to traditional methods:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900">Employee Engagement</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Traditional</span>
                            <span className="text-sm text-gray-600">45%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gray-400 h-3 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Our Approach</span>
                            <span className="text-sm text-gray-600">87%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-red-600 h-3 rounded-full" style={{ width: "87%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900">Goal Achievement</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Traditional</span>
                            <span className="text-sm text-gray-600">62%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gray-400 h-3 rounded-full" style={{ width: "62%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Our Approach</span>
                            <span className="text-sm text-gray-600">91%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-red-600 h-3 rounded-full" style={{ width: "91%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900">Employee Retention</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Traditional</span>
                            <span className="text-sm text-gray-600">73%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gray-400 h-3 rounded-full" style={{ width: "73%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Our Approach</span>
                            <span className="text-sm text-gray-600">94%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-red-600 h-3 rounded-full" style={{ width: "94%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Experience Framework */}
        <section className="py-20 bg-gray-50">
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Comprehensive Employee Experience Framework</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our holistic approach addresses every touchpoint in the employee journey to create meaningful, engaging
                experiences that drive satisfaction and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recruitment & Onboarding</h3>
                <p className="text-gray-600 mb-4">
                  Create positive first impressions with streamlined recruitment and comprehensive onboarding
                  experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Candidate experience design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Structured onboarding programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">New hire integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning & Development</h3>
                <p className="text-gray-600 mb-4">
                  Foster continuous growth with personalized learning opportunities and career development pathways.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Skills gap analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Personalized learning plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Career progression frameworks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wellbeing & Support</h3>
                <p className="text-gray-600 mb-4">
                  Prioritize employee health and wellbeing with comprehensive support programs and resources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Mental health initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Work-life balance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Wellness resources</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recognition & Rewards</h3>
                <p className="text-gray-600 mb-4">
                  Celebrate achievements and contributions with meaningful recognition and reward systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Peer recognition platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Performance-based rewards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Milestone celebrations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication & Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Foster open dialogue and continuous improvement through effective communication channels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Transparent communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Feedback mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Pulse surveys and analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Culture & Belonging</h3>
                <p className="text-gray-600 mb-4">
                  Build inclusive environments where employees feel valued, respected, and connected to your mission.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Values alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Diversity and inclusion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Community building</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Workspace & Technology</h3>
                <p className="text-gray-600 mb-4">
                  Create enabling environments with thoughtful workspace design and intuitive technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Workspace optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Digital experience design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Productivity tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership & Management</h3>
                <p className="text-gray-600 mb-4">
                  Develop effective leaders who inspire, support, and empower their teams to excel.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Leadership development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Coaching and mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">Change management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Feedback Testimonial Carousel */}
        <section ref={addToRefs} className="py-20 opacity-0 translate-y-10 transition-all duration-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-gray-600">
                Hear from organizations that have transformed their employee experience with our services.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="absolute top-0 left-0 w-20 h-20 bg-red-100 rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
                <ThumbsUp className="text-red-600" size={24} />
              </div>

              <div className="ml-12 mt-4">
                <div className="flex mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-red-500" size={20} fill="#ef4444" />
                  ))}
                </div>

                <blockquote className="text-xl italic text-gray-800 mb-6">
                  &apos;{testimonials[activeTestimonial].quote}&apos;
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/testimonials/${activeTestimonial}`}
                      alt="Client portrait"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].author}</p>
                    <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].position}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <ChevronLeft className="text-gray-600" size={20} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full ${activeTestimonial === index ? "bg-red-600" : "bg-gray-300"}`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <ChevronRight className="text-gray-600" size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Floating Card */}
        <section className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                transform: "rotate(-5deg)",
              }}
            ></div>
          </div>
          <div
            ref={addToRefs}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:-translate-y-2 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your Employee Experience?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our team of experts is ready to help you create engaging, productive workplaces where employees
                    thrive and businesses succeed.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium flex items-center group transition-all duration-300">
                    Schedule a Consultation
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      size={18}
                    />
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-100 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-100 rounded-full"></div>
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/hero.webp"
                      alt="Happy, engaged team in a modern office environment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
