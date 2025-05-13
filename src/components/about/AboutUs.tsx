'use client'

import { motion } from 'framer-motion'
import { MailIcon, Users, Lightbulb, BookOpen, BarChart, Shield, ClipboardList } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24 relative">
        {/* Background decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 -z-10"
        >
          <div className="text-red-700 text-[300px] font-bold opacity-20">VX</div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Users className="text-gray-200 w-24 h-24" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4 pt-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              Hiring Made <span className="text-gray-800">Smooth</span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              & <span className="text-gray-800">Transparent</span>
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Empowering businesses with streamlined, trustworthy hiring and advisory services.
          </motion.p>
        </motion.div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-4">
                <BookOpen className="text-red-700 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a mission to redefine talent solutions, Venovox has evolved from a modest venture into a trusted name in the Talent Management space. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey is driven by innovation, client-first thinking, and the relentless pursuit of excellence. Today, we deliver high-impact solutions designed to help your business grow sustainably and ethically.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src="/team-work.jpg" 
              alt="Our team working together"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.section>

        {/* Our Approach */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
          >
            <Image 
              src="/about-team.png" 
              alt="Our consultative approach"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-4">
                <Lightbulb className="text-red-700 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">Our Approach</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Venovox, we partner with you to deeply understand your unique goals and challenges. Our integrated, consultative approach blends human insight with advanced tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in long-term impact, not short-term fixes, ensuring solutions that are not only tailored but future-ready.
            </p>
          </div>
        </motion.section>

        {/* Our Services */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-16 -left-16 -z-10">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <ClipboardList className="text-gray-200 w-32 h-32" />
            </motion.div>
          </div>
          
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
            <span className="relative inline-block">
              <span className="relative z-10">What We Offer</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-red-100 z-0 opacity-70 -mb-1"></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
                <BarChart className="w-24 h-24" />
              </div>
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 relative">
                <Users className="text-red-700 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Human Resource Consulting</h3>
              <p className="text-gray-600 relative z-10">
                End-to-end HR solutions from background verification to training and talent acquisition — tailored for high-performance cultures.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
                <Shield className="w-24 h-24" />
              </div>
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 relative">
                <Lightbulb className="text-red-700 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Advisory & Strategy</h3>
              <p className="text-gray-600 relative z-10">
                Strategic change management and HR planning with actionable insights to scale your business intelligently.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
                <BookOpen className="w-24 h-24" />
              </div>
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 relative">
                <ClipboardList className="text-red-700 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Research & Audit</h3>
              <p className="text-gray-600 relative z-10">
                Deep-dive audits and feasibility studies with risk assessment and compliance checks to boost resilience.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Us CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 opacity-20">
            <MailIcon className="w-32 h-32 text-white" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Hiring?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Our experts are ready to discuss your unique needs and craft a solution that drives results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full hover:bg-gray-100 transition font-medium shadow-md hover:shadow-lg"
            >
              <MailIcon size={18} />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}