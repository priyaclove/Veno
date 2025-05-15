"use client";
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  features: Feature[];
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function FeaturesSection({
  heading,
  subheading,
  content,
  features,
  themeColors
}: FeaturesSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-4 text-${themeColors.primary}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {heading}
          </motion.h2>
          
          {subheading && (
            <motion.h3
              className="text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subheading}
            </motion.h3>
          )}
          
          {content && (
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md border-t-4 border-${themeColors.accent}`}
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <h4 className={`text-xl font-semibold mb-3 text-${themeColors.primary}`}>
                {feature.title}
              </h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}