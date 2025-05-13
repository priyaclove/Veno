"use client";

import { motion } from "framer-motion";

const steps = [
  {
    traditional: "Traditional Step 1",
    venovox: "Venovox Step 1",
  },
  {
    traditional: "Traditional Step 2",
    venovox: "Venovox Step 2",
  },
  {
    traditional: "Traditional Step 3",
    venovox: "Venovox Step 3",
  },
  {
    traditional: "Traditional Step 4",
    venovox: "Venovox Step 4",
  },
];

const WhyDifferent = () => {
  return (
    <section className="w-full bg-[#f8f9fb] py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
        Why Venovox Is Different
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Connector lines */}
        {steps.map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-red-500"
            style={{
              top: `${i * 140 + 65}px`,
              width: "120px",
              zIndex: 0,
            }}
          />
        ))}

        <div className="grid md:grid-cols-2 gap-y-16 relative z-10">
          {/* Traditional Steps */}
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-gray-100 rounded-lg px-6 py-5 shadow text-left"
              >
                <h3 className="font-semibold text-lg text-gray-800">{step.traditional}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Slow, manual processes with outdated technology
                </p>
              </motion.div>
            ))}
          </div>

          {/* Venovox Steps */}
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border border-red-500 rounded-lg px-6 py-5 shadow text-left bg-white"
              >
                <h3 className="font-semibold text-lg text-black">{step.venovox}</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Automated, AI-powered verification in real-time
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
