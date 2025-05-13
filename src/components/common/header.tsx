"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const navData = {
  logo: "/venovox-logo.png",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "HR Services", path: "/hr-services" },
    { name: "Intelligence", path: "/intelligence" },
    { name: "Payroll", path: "/payroll" },
    { name: "Talent Acquisition", path: "/talent-acquisition" },
    { name: "Academy", path: "/academy" },
    { name: "Publication", path: "/publication" },
    { name: "Contact Us", path: "/contact-us" },
  ]
};

export default function Navbar() {
  const pathname = usePathname();
  const [, setIsScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const navRef = useRef(null);

  const isActive = (path: string) => {
    return pathname === path || 
           (path !== '/' && pathname.startsWith(path));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        controls.start({
          height: "70px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        });
      } else {
        controls.start({
          height: "90px",
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          boxShadow: "none"
        });
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.header 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm"
      initial={{ height: "90px", backgroundColor: "rgba(255, 255, 255, 0.98)" }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial="initial"
            animate="animate"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <div className="h-16 w-16 relative logo-hover">
                <Image
                  src={navData.logo}
                  alt="Venovox Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            <AnimatePresence>
              {navData.menuItems.map((item, i) => {
                const active = isActive(item.path);
                return (
                  <motion.div
                    key={item.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={menuItemVariants}
                    className="relative"
                  >
                    <Link
                      href={item.path}
                      className={`px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 nav-item ${
                        active 
                          ? "text-red-600 font-semibold active" 
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {item.name}
                      {active && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-red-600 w-full"
                          layoutId="navbar-underline"
                          initial={{ opacity: 0, width: "0%" }}
                          animate={{ opacity: 1, width: "100%" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none ${isMenuOpen ? 'hamburger-active' : ''}`}
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg border-t border-gray-100 mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-4 pt-2 pb-4 space-y-2 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navData.menuItems.map((item, i) => {
                const active = isActive(item.path);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" }
                    }}
                    exit={{ 
                      opacity: 0,
                      x: -20,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${
                        active
                          ? "text-red-600 bg-red-50 shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      }`}
                    >
                      <span>{item.name}</span>
                      {active && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.05 + 0.2, type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ChevronDown size={16} className="text-red-600" />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}