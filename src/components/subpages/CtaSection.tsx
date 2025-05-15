"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CtaSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  ctaButton: {
    text: string;
    href: string;
  };
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function CtaSection({
  heading,
  subheading,
  content,
  ctaButton,
  themeColors
}: CtaSectionProps) {
  return (
    <section className={`py-16 px-4 bg-${themeColors.primary} text-white`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {heading}
          </h2>
          
          {subheading && (
            <h3 className="text-xl mb-4">
              {subheading}
            </h3>
          )}
          
          {content && (
            <p className="text-lg max-w-3xl mx-auto mb-10">
              {content}
            </p>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              href={ctaButton.href} 
              className="inline-block px-8 py-4 rounded-lg bg-white text-lg font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              {ctaButton.text}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}