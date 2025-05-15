"use client";
import { motion } from 'framer-motion';

interface DataPoint {
  stage: string;
  timeframe: string;
  activities: string;
  keyMetric: string;
}

interface InfographicSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  dataPoints: DataPoint[];
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function InfographicSection({
  heading,
  subheading,
  content,
  dataPoints = [],
  themeColors
}: InfographicSectionProps) {
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
        
        <div className="relative">
          {/* Connect line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
          
          {dataPoints.map((point, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className="mb-8 md:mb-12 relative"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 mb-4 md:mb-0 md:px-6">
                    <div className={`p-6 rounded-lg shadow-md bg-white border-l-4 border-${themeColors.accent}`}>
                      <h4 className={`text-xl font-semibold mb-2 text-${themeColors.primary}`}>{point.stage}</h4>
                      <p className="text-gray-500 mb-3">{point.timeframe}</p>
                      <p className="mb-3">{point.activities}</p>
                      <p className="font-medium">{point.keyMetric}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <div className={`w-10 h-10 rounded-full bg-${themeColors.primary} flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}