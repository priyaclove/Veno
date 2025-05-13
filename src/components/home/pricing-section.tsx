"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: 29,
    features: ["Essential background checks", "Standard support", "Basic verification tools"],
    popular: false,
  },
  {
    title: "Professional",
    price: 59,
    features: ["Advanced screening", "Priority support", "API integration"],
    popular: true,
  },
  {
    title: "Enterprise",
    price: 99,
    features: ["Full-service verification", "Dedicated account manager", "Custom solutions"],
    popular: false,
  },
];

const Pricing = ({ pricingInView }: { pricingInView: boolean }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={pricingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-[#E63946]">Pricing</span>
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg">
            Choose the plan that works best for your business needs.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 transition-colors ${!isAnnual ? "text-black font-bold" : "text-[#666666]"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-[#E5E5E5] transition-all"
            >
              <span className="sr-only">Toggle pricing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-[#E63946] transition-all ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 transition-colors ${isAnnual ? "text-black font-bold" : "text-[#666666]"}`}>
              Annual <span className="text-[#E63946] text-sm font-normal">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                y: -8,
                boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.12)",
              }}
              className={`bg-white rounded-lg border-2 overflow-hidden transition-all duration-300 relative ${
                plan.popular ? "border-[#E63946]" : "border-[#E5E5E5]"
              }`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#E63946] text-white text-xs font-bold px-3 py-1 uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? plan.price * 12 * 0.8 : plan.price}</span>
                  <span className="text-[#666666]">{isAnnual ? "/year" : "/month"}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#E63946] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-[#666666]">{feature}</span>
                    </li>
                  ))}
                </ul>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
