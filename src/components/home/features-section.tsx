"use client";

import { motion } from "framer-motion";
import { Shield, Globe, FileCheck, Code, Cloud, Bell } from "lucide-react";

const features = [
  {
    title: "AI-Enhanced Screening",
    description: "Advanced algorithms that detect patterns and anomalies human reviewers might miss.",
    icon: <Shield className="w-8 h-8 text-red-700" />,
  },
  {
    title: "Global Coverage",
    description: "Comprehensive background checks across international borders and jurisdictions.",
    icon: <Globe className="w-8 h-8 text-red-700" />,
  },
  {
    title: "Tamper-Proof Reports",
    description: "Blockchain-secured reports that cannot be altered or falsified.",
    icon: <FileCheck className="w-8 h-8 text-red-700" />,
  },
  {
    title: "Seamless API",
    description: "Integrate our powerful screening tools directly into your existing HR systems.",
    icon: <Code className="w-8 h-8 text-red-700" />,
  },
  {
    title: "Secure Cloud Platform",
    description: "Enterprise-grade security with end-to-end encryption and compliance features.",
    icon: <Cloud className="w-8 h-8 text-red-700" />,
  },
  {
    title: "Instant Notifications",
    description: "Real-time alerts when important information is discovered or verified.",
    icon: <Bell className="w-8 h-8 text-red-700" />,
  },
];

const Features = ({ featuresInView }: { featuresInView: boolean }) => {
  return (
    <section id="features" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Powerful <span className="text-red-700">Features</span>
          </h2>
          <p className="text-[#444444] max-w-2xl mx-auto text-lg">
            Our comprehensive platform offers everything you need for thorough, efficient background screening.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.06)",
                borderColor: "#CC4C4C",
              }}
              className="bg-white p-8 rounded-lg shadow-md border-2 border-transparent transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-[#CC4C4C10] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
              ></motion.div>

              <motion.div whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }} className="mb-5">
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[#444444]">{feature.description}</p>

              <motion.div className="w-0 h-1 bg-red-700 absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
