"use client";
import { motion } from 'framer-motion';

interface Case {
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

interface CaseStudiesSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  cases: Case[];
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function CaseStudiesSection({
  heading,
  subheading,
  content,
  cases,
  themeColors
}: CaseStudiesSectionProps) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-2 bg-${themeColors.primary}`}></div>
              <div className="p-6">
                <h4 className={`text-xl font-semibold mb-4 text-${themeColors.primary}`}>
                  {caseItem.industry}
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-1">Challenge:</h5>
                    <p className="text-sm">{caseItem.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-1">Solution:</h5>
                    <p className="text-sm">{caseItem.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-1">Result:</h5>
                    <p className="text-sm">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}