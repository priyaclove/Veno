"use client";
import { motion } from 'framer-motion';

interface ComparisonTableSectionProps {
  heading: string;
  subheading?: string;
  content?: string;
  tableHeaders: string[];
  tableRows: Record<string, string>[];
  animationStyle: string;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export default function ComparisonTableSection({
  heading,
  subheading,
  content,
  tableHeaders,
  tableRows,
  themeColors
}: ComparisonTableSectionProps) {
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
        
        <motion.div
          className="overflow-auto rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="min-w-full bg-white">
            <thead className={`bg-${themeColors.primary} text-white`}>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-3 px-4 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {Object.keys(row).map((key, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`} className="py-3 px-4 border-t">
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}