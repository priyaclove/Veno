'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FindYourNextHire: React.FC = () => {
  return (
    <>
      {/* First Section (Image Left, Text Right) */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 py-16 bg-white">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 mb-10 md:mb-0"
        >
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <Image src="/next-hire.webp" alt="Team" width={700} height={450} className="rounded-2xl" />
            {/* Red Curved Line Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-6 -right-6 w-40 h-40 border-t-4 border-r-4 border-red-500 rounded-tr-full pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:pl-12"
        >
          <h2 className="text-4xl font-semibold text-black mb-6">Find your next hire</h2>
          <ul className="space-y-4 mb-8">
            {[
              "Preview recruiter-assessed and AI-matched candidates",
              "Book a consultation with one of our recruiters to discuss your hiring needs",
              "Get dedicated expert support at every step of the way",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="bg-white border border-gray-300 rounded-md p-1 shadow-sm">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-gray-700">{text}</p>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-all"
          >
            Preview candidates
          </motion.button>
        </motion.div>
      </section>

      {/* Second Section (Text Left, Image Right) */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 py-16 bg-white">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:pr-12"
        >
          <h2 className="text-4xl font-semibold text-black mb-6">Consulting solutions to drive business impact</h2>
          <ul className="space-y-4 mb-8">
            {[
              "Develop a clear vision and strategy ",
              "Enhance business performance with critical technologies and processes ",
              "Implement a plan or manage operations ",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="bg-white border border-gray-300 rounded-md p-1 shadow-sm">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-gray-700">{text}</p>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-all"
          >
            Preview candidates
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 mt-10 md:mt-0"
        >
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <Image src="/next-hire-1.webp" alt="Team" className="rounded-2xl object-cover" width={700} height={450} />
            {/* Red Curved Line Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-6 -right-6 w-40 h-40 border-t-4 border-r-4 border-red-500 rounded-tr-full pointer-events-none"
            />
          </div>
        </motion.div>
      </section>

        <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 py-16 bg-white">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 mb-10 md:mb-0"
        >
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <Image src="/next-hire-3.webp" alt="Team" width={700} height={450} className="rounded-2xl" />
            {/* Red Curved Line Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-6 -right-6 w-40 h-40 border-t-4 border-r-4 border-red-500 rounded-tr-full pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:pl-12"
        >
          <h2 className="text-4xl font-semibold text-black mb-6">Make the career move you want</h2>
          <ul className="space-y-4 mb-8">
            {[
              "Preview recruiter-assessed and AI-matched candidates",
              "Book a consultation with one of our recruiters to discuss your hiring needs",
              "Get dedicated expert support at every step of the way",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="bg-white border border-gray-300 rounded-md p-1 shadow-sm">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-gray-700">{text}</p>
              </li>
            ))}
          </ul>



          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-all"
          >
            Preview candidates
          </motion.button>
        </motion.div>
      </section>

      
    </>
  );
};

export default FindYourNextHire;
