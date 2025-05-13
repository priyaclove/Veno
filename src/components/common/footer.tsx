"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Pricing", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-red-700 transition-colors duration-200">
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
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Criminal Background Checks",
                "Employment Verification",
                "Education Verification",
                "Credit Checks",
                "Global Screening",
                "Identity Verification",
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-600 hover:text-red-700 transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Global Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Global Offices</h3>
            <ul className="space-y-4">
              {[
                { city: "New York", address: "123 Broadway, NY 10001" },
                { city: "London", address: "456 Oxford St, London W1C" },
                { city: "Singapore", address: "78 Shenton Way, Singapore" },
                { city: "Sydney", address: "90 Pitt Street, Sydney NSW" },
              ].map((office) => (
                <li key={office.city} className="flex">
                  <MapPin className="h-5 w-5 text-red-700 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium block">{office.city}</span>
                    <span className="text-gray-500 text-sm">{office.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700"
                required
              />
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700"
                required
              ></textarea>
              <button type="submit" className="w-full py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition">
                Send Message
              </button>
            </form>

            <div className="mt-6">
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-red-700 mr-2" />
                <span className="text-gray-600">contact@venovox.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-700 mr-2" />
                <span className="text-gray-600">+1 (888) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
