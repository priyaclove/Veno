"use client";
import { motion } from 'framer-motion';

interface TextSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function TextSection({
  heading,
  subheading,
  content,
  themeColors
}: TextSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-${themeColors.primary}`}>
            {heading}
          </h2>
          
          {subheading && (
            <h3 className="text-xl mb-4">
              {subheading}
            </h3>
          )}
          
          {content && (
            <div className="prose prose-lg max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}