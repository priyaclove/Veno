'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const recognizedByLogos = [
  { src: '/napbs-logo.png', alt: 'PBSA Logo' },
  { src: '/md-status.png', alt: 'Malaysia Digital Logo' },
  { src: '/mof.png', alt: 'MOF Registered Company Bumiputra Status Logo' },
  { src: '/hrd.png', alt: 'HRD Corp Logo' },
];

const RecognizedBy = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Recognized By</h2>
        <p className="text-gray-600 mt-2">We are proudly certified and recognized by leading authorities</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto">
        {recognizedByLogos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={70}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecognizedBy;
