"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageWithTextSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  imagePosition?: 'left' | 'right';
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function ImageWithTextSection({
  heading,
  subheading,
  content,
  imagePosition = 'right',
  themeColors
}: ImageWithTextSectionProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder image - replace with your actual image */}
              <Image 
                src="/api/placeholder/800/450" 
                alt={heading}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
      </div>
    </section>
  );
}