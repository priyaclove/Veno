"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  heading: string;
  subheading?: string;
  content?: string;
  ctaButton?: {
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

export default function Hero({
  heading,
  subheading,
  content,
  ctaButton,
  themeColors
}: HeroProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={`py-20 px-4 bg-${themeColors.background}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-${themeColors.primary}`}>
            {heading}
          </h1>
          
          {subheading && (
            <h2 className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {subheading}
            </h2>
          )}
          
          {content && (
            <p className="text-lg max-w-3xl mx-auto mb-10">
              {content}
            </p>
          )}
          
          {ctaButton && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={ctaButton.href}
                className={`inline-block px-8 py-4 rounded-lg bg-${themeColors.primary} hover:bg-${themeColors.accent} text-white font-medium text-lg transition-colors duration-300`}
              >
                {ctaButton.text}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}