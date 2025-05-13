'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Anything’s possible <br />
            <span className="font-light">when you have the</span> <br />
            <span className="text-white font-extrabold">talent</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full"
            >
              Find a job
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-6 py-3 rounded-full"
            >
              Hire talent
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
