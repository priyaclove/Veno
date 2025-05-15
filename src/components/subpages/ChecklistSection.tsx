"use client";
import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

interface ChecklistItem {
  title: string;
  description: string;
  required: boolean;
  complexity?: string; // Made optional
}

interface ChecklistSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  items: ChecklistItem[];
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function ChecklistSection({
  heading,
  subheading,
  content,
  items,
  themeColors,
}: ChecklistSectionProps) {
  const getComplexityColor = (complexity?: string) => {
    if (!complexity) return 'text-gray-500';

    switch (complexity.toLowerCase()) {
      case 'low':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section className="py-16 px-4">
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
              className="text-xl mb-4"
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
              className="text-lg max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {item.required ? (
                    <CheckCircle className={`text-${themeColors.primary} w-6 h-6`} />
                  ) : (
                    <Circle className="text-gray-400 w-6 h-6" />
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    {item.complexity && (
                      <span className={`text-sm font-medium ${getComplexityColor(item.complexity)}`}>
                        {item.complexity} Complexity
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
