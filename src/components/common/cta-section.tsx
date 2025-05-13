"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = ({ ctaInView }: { ctaInView: boolean }) => {
  return (
    <section id="contact" className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Make <span className="text-red-700">Safer Hires?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of companies that trust Venovox for fast, secure, and global background screening.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-600 transition-all duration-300 flex items-center shadow-lg"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-gray-300 text-gray-800 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-sm"
          >
            Talk to Sales
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Floating Soft Background Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 0.05 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute -bottom-32 right-10 w-[400px] h-[400px] bg-red-700 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default CTA;
