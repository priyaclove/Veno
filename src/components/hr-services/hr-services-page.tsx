// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Clock, Calendar } from "lucide-react";

// // Define the types for our JSON structure
// type HRService = {
//   slug: string;
//   title: string;
//   seoTitle: string;
//   seoDescription: string;
//   estimatedReadTime: number;
//   lastUpdated: string;
//   animationStyle: string;
//   themeColors: {
//     primary: string;
//     accent: string;
//     background: string;
//     text: string;
//   };
//   sections: Section[];
// };

// type Section = {
//   id: string;
//   type: string;
//   heading: string;
//   subheading?: string;
//   content: string;
//   features?: Feature[];
//   faqs?: FAQ[];
//   ctaButton?: CTAButton;
//   imagePosition?: string;
//   dataPoints?: DataPoint[];
//   items?: ChecklistItem[];
//   insights?: ExpertInsight[];
//   tableHeaders?: string[];
//   tableRows?: TableRow[];
// };

// type Feature = {
//   title: string;
//   description: string;
// };

// type FAQ = {
//   question: string;
//   answer: string;
// };

// type CTAButton = {
//   text: string;
//   href: string;
// };

// type DataPoint = {
//   stage: string;
//   timeframe: string;
//   activities: string;
//   keyMetric: string;
// };

// type ChecklistItem = {
//   title: string;
//   description: string;
//   required?: boolean;
//   impact?: string;
//   complexity?: string;
//   risk?: string;
//   implementation?: string;
// };

// type ExpertInsight = {
//   topic: string;
//   trend: string;
//   impact: string;
//   expertView: string;
// };

// type TableRow = {
//   [key: string]: string;
// };

// export default function HRServicePage({ service }: { service: HRService }) {
//   // Animation variants based on the service's animationStyle
//   const getAnimationVariant = (style: string) => {
//     switch (style) {
//       case "fade-up":
//         return {
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         };
//       case "fade-in":
//         return {
//           hidden: { opacity: 0 },
//           visible: { opacity: 1, transition: { duration: 0.6 } },
//         };
//       case "slide-right":
//         return {
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//         };
//       case "slide-left":
//         return {
//           hidden: { opacity: 0, x: 50 },
//           visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//         };
//       case "slide-up":
//         return {
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         };
//       case "zoom-in":
//         return {
//           hidden: { opacity: 0, scale: 0.9 },
//           visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
//         };
//       default:
//         return {
//           hidden: { opacity: 0 },
//           visible: { opacity: 1, transition: { duration: 0.6 } },
//         };
//     }
//   };

//   // Format date for display
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   // Component to render each section based on its type
//   const renderSection = (section: Section, index: number) => {
//     const ref = useRef(null);
//     const [sectionRef, inView] = useInView({
//       triggerOnce: false,
//       threshold: 0.1,
//     });
//     const controls = useAnimation();
//     console.log(section);

//     useEffect(() => {
//       if (inView) {
//         controls.start("visible");
//       }
//     }, [controls, inView]);

//     const animationVariant = getAnimationVariant(service.animationStyle);

//     // Function to render content with line breaks
//     const renderContent = (content: string) => {
//       return content.split("\n\n").map((paragraph, i) => (
//         <p key={i} className="mb-4 text-gray-700 leading-relaxed">
//           {paragraph}
//         </p>
//       ));
//     };

//     switch (section.type) {
//       case "hero":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600 text-white"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-4xl mx-auto text-center">
//                 <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                   {section.heading}
//                 </h1>
//                 {section.subheading && (
//                   <p className="text-xl md:text-2xl mb-6 text-white/90">
//                     {section.subheading}
//                   </p>
//                 )}
//                 <p className="text-lg mb-8 text-white/80">{section.content}</p>
//                 {section.ctaButton && (
//                   <Link
//                     href={section.ctaButton.href}
//                     className="inline-block bg-white text-red-700 font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300"
//                   >
//                     {section.ctaButton.text}
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "text":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-white"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-4xl mx-auto">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
//                   {section.heading}
//                 </h2>
//                 <div className="prose prose-lg max-w-none">
//                   {renderContent(section.content)}
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "features":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-gray-50"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-4xl mx-auto text-center mb-12">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                   {section.heading}
//                 </h2>
//                 {section.subheading && (
//                   <p className="text-lg text-gray-600">{section.subheading}</p>
//                 )}
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {section.features?.map((feature, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={controls}
//                     variants={{
//                       visible: {
//                         opacity: 1,
//                         y: 0,
//                         transition: { delay: i * 0.1, duration: 0.5 },
//                       },
//                     }}
//                     className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                   >
//                     <h3 className="text-xl font-semibold mb-3 text-red-700">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-700">{feature.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "infographic":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-white"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-5xl mx-auto">
//                 <div className="text-center mb-12">
//                   <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                     {section.heading}
//                   </h2>
//                   {section.subheading && (
//                     <p className="text-lg text-gray-600">
//                       {section.subheading}
//                     </p>
//                   )}
//                   <p className="mt-4 text-gray-700">{section.content}</p>
//                 </div>

//                 <div className="relative">
//                   {/* Timeline line */}
//                   <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform -translate-x-1/2"></div>

//                   {section.dataPoints?.map((point, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={controls}
//                       variants={{
//                         visible: {
//                           opacity: 1,
//                           y: 0,
//                           transition: { delay: i * 0.2, duration: 0.6 },
//                         },
//                       }}
//                       className={`flex flex-col md:flex-row items-center mb-12 ${
//                         i % 2 === 0
//                           ? "md:flex-row-reverse text-right"
//                           : "text-left"
//                       }`}
//                     >
//                       <div className="md:w-1/2 p-4">
//                         <div
//                           className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600 ${
//                             i % 2 === 0 ? "md:ml-8" : "md:mr-8"
//                           }`}
//                         >
//                           <h3 className="text-xl font-semibold mb-2 text-red-700">
//                             {point.stage}
//                           </h3>
//                           <p className="text-sm text-gray-500 mb-3">
//                             {point.timeframe}
//                           </p>
//                           <p className="text-gray-700 mb-3">
//                             {point.activities}
//                           </p>
//                           <p className="text-sm font-semibold text-red-600">
//                             {point.keyMetric}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white relative z-10">
//                         {i + 1}
//                       </div>
//                       <div className="md:w-1/2"></div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "checklist":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-gray-50"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-4xl mx-auto">
//                 <div className="text-center mb-12">
//                   <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                     {section.heading}
//                   </h2>
//                   {section.subheading && (
//                     <p className="text-lg text-gray-600">
//                       {section.subheading}
//                     </p>
//                   )}
//                   <p className="mt-4 text-gray-700">{section.content}</p>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
//                   <ul className="space-y-6">
//                     {section.items?.map((item, i) => (
//                       <motion.li
//                         key={i}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={controls}
//                         variants={{
//                           visible: {
//                             opacity: 1,
//                             x: 0,
//                             transition: { delay: i * 0.1, duration: 0.5 },
//                           },
//                         }}
//                         className="flex gap-4"
//                       >
//                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center mt-1">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-semibold text-gray-900 flex items-center">
//                             {item.title}
//                             {item.required && (
//                               <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
//                                 Required
//                               </span>
//                             )}
//                           </h3>
//                           <p className="text-gray-700 mt-1">
//                             {item.description}
//                           </p>
//                           {(item.complexity ||
//                             item.impact ||
//                             item.risk ||
//                             item.implementation) && (
//                             <div className="flex flex-wrap gap-2 mt-2">
//                               {item.complexity && (
//                                 <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
//                                   Complexity: {item.complexity}
//                                 </span>
//                               )}
//                               {item.impact && (
//                                 <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
//                                   Impact: {item.impact}
//                                 </span>
//                               )}
//                               {item.risk && (
//                                 <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
//                                   Risk: {item.risk}
//                                 </span>
//                               )}
//                               {item.implementation && (
//                                 <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
//                                   Implementation: {item.implementation}
//                                 </span>
//                               )}
//                             </div>
//                           )}
//                         </div>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "expertInsights":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-white"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-4xl mx-auto">
//                 <div className="text-center mb-12">
//                   <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                     {section.heading}
//                   </h2>
//                   {section.subheading && (
//                     <p className="text-lg text-gray-600">
//                       {section.subheading}
//                     </p>
//                   )}
//                   <p className="mt-4 text-gray-700">{section.content}</p>
//                 </div>

//                 <div className="grid gap-8">
//                   {section.insights?.map((insight, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={controls}
//                       variants={{
//                         visible: {
//                           opacity: 1,
//                           y: 0,
//                           transition: { delay: i * 0.2, duration: 0.6 },
//                         },
//                       }}
//                       className="bg-gray-50 rounded-lg p-6 shadow-md"
//                     >
//                       <h3 className="text-xl font-semibold mb-4 text-red-700">
//                         {insight.topic}
//                       </h3>
//                       <div className="grid md:grid-cols-3 gap-4">
//                         <div className="bg-white p-4 rounded shadow-sm">
//                           <h4 className="text-sm font-semibold text-gray-500 mb-2">
//                             TREND
//                           </h4>
//                           <p className="text-gray-800">{insight.trend}</p>
//                         </div>
//                         <div className="bg-white p-4 rounded shadow-sm">
//                           <h4 className="text-sm font-semibold text-gray-500 mb-2">
//                             IMPACT
//                           </h4>
//                           <p className="text-gray-800">{insight.impact}</p>
//                         </div>
//                         <div className="bg-white p-4 rounded shadow-sm">
//                           <h4 className="text-sm font-semibold text-gray-500 mb-2">
//                             EXPERT VIEW
//                           </h4>
//                           <p className="text-gray-800">{insight.expertView}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "comparisonTable":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-gray-50"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-5xl mx-auto">
//                 <div className="text-center mb-12">
//                   <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                     {section.heading}
//                   </h2>
//                   {section.subheading && (
//                     <p className="text-lg text-gray-600">
//                       {section.subheading}
//                     </p>
//                   )}
//                   <p className="mt-4 text-gray-700">{section.content}</p>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full bg-white rounded-lg shadow-md">
//                     <thead>
//                       <tr>
//                         {section.tableHeaders?.map((header, i) => (
//                           <th
//                             key={i}
//                             className="px-6 py-4 bg-red-700 text-white text-left"
//                           >
//                             {header}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {section.tableRows?.map((row, i) => (
//                         <motion.tr
//                           key={i}
//                           initial={{ opacity: 0 }}
//                           animate={controls}
//                           variants={{
//                             visible: {
//                               opacity: 1,
//                               transition: { delay: i * 0.1, duration: 0.5 },
//                             },
//                           }}
//                           className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                         >
//                           {section.tableHeaders?.map((header, j) => (
//                             <td
//                               key={j}
//                               className="border-t px-6 py-4 text-gray-700"
//                             >
//                               {row[header.toLowerCase()]}
//                             </td>
//                           ))}
//                         </motion.tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "imageWithText":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-white"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div
//                 className={`max-w-5xl mx-auto flex flex-col ${
//                   section.imagePosition === "right"
//                     ? "md:flex-row"
//                     : "md:flex-row-reverse"
//                 } gap-8 items-center`}
//               >
//                 <div className="md:w-1/2">
//                   <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
//                     {section.heading}
//                   </h2>
//                   <div className="prose prose-lg max-w-none">
//                     {renderContent(section.content)}
//                   </div>
//                 </div>
//                 <div className="md:w-1/2">
//                   <div className="rounded-lg overflow-hidden shadow-lg">
//                     <Image
//                       src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(
//                         section.heading
//                       )}`}
//                       alt={section.heading}
//                       width={600}
//                       height={400}
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "faq":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-gray-50"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-4xl mx-auto">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900">
//                   {section.heading}
//                 </h2>

//                 <div className="space-y-6">
//                   {section.faqs?.map((faq, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={controls}
//                       variants={{
//                         visible: {
//                           opacity: 1,
//                           y: 0,
//                           transition: { delay: i * 0.1, duration: 0.5 },
//                         },
//                       }}
//                       className="bg-white rounded-lg shadow-md overflow-hidden"
//                     >
//                       <details className="group">
//                         <summary className="flex justify-between items-center p-6 cursor-pointer">
//                           <h3 className="text-lg font-semibold text-gray-900">
//                             {faq.question}
//                           </h3>
//                           <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-300">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                               />
//                             </svg>
//                           </span>
//                         </summary>
//                         <div className="px-6 pb-6 pt-0 text-gray-700">
//                           <p>{faq.answer}</p>
//                         </div>
//                       </details>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         );

//       case "cta":
//         return (
//           <motion.section
//             key={section.id}
//             ref={sectionRef}
//             initial="hidden"
//             animate={controls}
//             variants={animationVariant}
//             className="py-16 bg-gradient-to-r from-red-700 to-red-600 text-white"
//           >
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="max-w-3xl mx-auto text-center">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-6">
//                   {section.heading}
//                 </h2>
//                 <p className="text-lg mb-8 text-white/90">{section.content}</p>
//                 {section.ctaButton && (
//                   <Link
//                     href={section.ctaButton.href}
//                     className="inline-block bg-white text-red-700 font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300"
//                   >
//                     {section.ctaButton.text}
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </motion.section>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-white">
//       {/* Page header with metadata */}
//       <div className="bg-gray-50 py-4 border-b">
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <Clock className="h-4 w-4 mr-1" />
//                 <span>{service.estimatedReadTime} min read</span>
//               </div>
//               <div className="flex items-center">
//                 <Calendar className="h-4 w-4 mr-1" />
//                 <span>Updated: {formatDate(service.lastUpdated)}</span>
//               </div>
//             </div>
//             <div className="mt-2 sm:mt-0">
//               <nav className="flex" aria-label="Breadcrumb">
//                 <ol className="inline-flex items-center space-x-1 md:space-x-3">
//                   <li className="inline-flex items-center">
//                     <Link href="/" className="text-gray-700 hover:text-red-600">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <div className="flex items-center">
//                       <span className="mx-2 text-gray-400">/</span>
//                       <Link
//                         href="/hr-services"
//                         className="text-gray-700 hover:text-red-600"
//                       >
//                         HR Services
//                       </Link>
//                     </div>
//                   </li>
//                   <li aria-current="page">
//                     <div className="flex items-center">
//                       <span className="mx-2 text-gray-400">/</span>
//                       <span className="text-gray-500">{service.title}</span>
//                     </div>
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Render all sections */}
//       {service.sections.map((section, index) => renderSection(section, index))}

//       {/* Schema.org JSON-LD structured data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Service",
//             name: service.title,
//             description: service.seoDescription,
//             provider: {
//               "@type": "Organization",
//               name: "Employment Consultant Malaysia",
//               url: "https://example.com",
//             },
//             serviceType: "HR Consultancy",
//             areaServed: {
//               "@type": "Country",
//               name: "Malaysia",
//             },
//           }),
//         }}
//       />
//     </div>
//   );
// }


