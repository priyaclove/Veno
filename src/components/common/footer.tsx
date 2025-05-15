"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {  Mail, Phone, Send } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Resources", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-3">
              {[
                "Background Screening",
                "Employment Verification",
                "Education Checks",
                "Identity Verification",
                "Global Compliance",
                "Risk Assessment",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm md:text-base">+1 (888) 123-4567</p>
                  <p className="text-gray-400 text-xs mt-1">US Toll Free</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm md:text-base">012 800 8888</p>
                  <p className="text-gray-400 text-xs mt-1">Hotline (Local)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm md:text-base">dato.devan@venovox.com</p>
                  <p className="text-gray-600 text-sm md:text-base">kelly@venovox.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              No need for email addresses anywhere. The form is sufficient.
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Venovox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;