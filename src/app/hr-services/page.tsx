import Link from "next/link"
import type { Metadata } from "next"
import hrServicesData from "@/data/hr-services.json"

export const metadata: Metadata = {
  title: "HR Services | Employment Consultant Malaysia",
  description:
    "Professional HR services tailored for Malaysian businesses. Our consultancy offers expert solutions for all your human resource needs.",
}

export default function HRServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">HR Services for Malaysian Businesses</h1>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive human resource solutions tailored to your organisation&apos;s unique needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hrServicesData.hrServices.map((service) => (
                <Link key={service.slug} href={`/hr-services/${service.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-700/80 to-red-600/80 flex items-center justify-center p-6 text-white">
                        <h2 className="text-xl font-bold text-center group-hover:scale-105 transition-transform duration-300">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <p className="text-gray-700 mb-4">{service.seoDescription.substring(0, 120)}...</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">{service.estimatedReadTime} min read</span>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <span className="inline-block text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300 flex items-center">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
