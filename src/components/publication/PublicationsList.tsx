'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';


import publications from '@/data/publications.json';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  }
};

const tagVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#b91c1c",
    color: "#fff",
    transition: { duration: 0.2 }
  }
};

const PublicationsList = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center text-red-700"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Latest Publications
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <Link href={`/publications/${publication.slug}`}>
                <motion.div variants={hoverVariants}>
                  {/* Image with animation */}
                  <motion.div 
                    className="h-48 bg-gray-200 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-red-50 to-gray-100">
                      <span className="text-gray-400">Featured Image</span>
                    </div>
                  </motion.div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {publication.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={tagVariants}
                          whileHover="hover"
                          className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.h2 
                      className="text-xl font-bold mb-2"
                      whileHover={{ color: "#b91c1c" }}
                      transition={{ duration: 0.2 }}
                    >
                      {publication.title}
                    </motion.h2>

                    <motion.p 
                      className="text-gray-600 mb-4"
                      whileHover={{ color: "#4b5563" }}
                    >
                      {publication.excerpt}
                    </motion.p>

                   <motion.div 
  className="flex justify-between items-center text-sm text-gray-500"
  whileHover={{ x: 5 }}
>
  <span>By {publication.author}</span>
  <span>{new Intl.DateTimeFormat('en-GB').format(new Date(publication.date))}</span>
</motion.div>

                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationsList;