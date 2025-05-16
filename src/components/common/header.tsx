"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const navData = {
  logo: "/venovox-logo.png",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
{
    name: "HR Services",
    path: "/hr-services",
    subItems: [
      { name: "Employee Onboarding", path: "/hr-services/employee-onboarding" },
      { name: "HR Policy Development", path: "/hr-services/hr-policy-development" },
      { name: "Performance Management", path: "/hr-services/performance-management" },
      { name: "Employee Engagement", path: "/hr-services/employee-engagement" },
      { name: "Workplace Compliance", path: "/hr-services/workplace-compliance" },
    ]
  },
  {
    name: "Intelligence",
    path: "/intelligence",
    subItems: [
      { name: "Background Screening", path: "/intelligence/background-screening" },
      { name: "Employee Verification", path: "/intelligence/employee-verification" },
      { name: "Fraud & Risk Assessment", path: "/intelligence/fraud-risk-assessment" },
      { name: "Workplace Investigation", path: "/intelligence/workplace-investigation" },
    ]
  },
    { 
      name: "Payroll", 
      path: "/payroll",
      subItems: [
        { name: "Payroll Processing", path: "/payroll/payroll-processing" },
        { name: "EPF/SOCSO Compliance", path: "/payroll/epf-socso-compliance" },
        { name: "Payslip Management", path: "/payroll/payslip-management" },
        { name: "Tax Filing Services", path: "/payroll/tax-filing-services" }
      ]
    },
    { 
      name: "Talent Acquisition", 
      path: "/talent-acquisition",
      subItems: [
        { name: "Executive Search", path: "/talent-acquisition/executive-search" },
        { name: "Contract Staffing", path: "/talent-acquisition/contract-staffing" },
        { name: "Permanent Recruitment", path: "/talent-acquisition/permanent-recruitment" },
        { name: "Internship Programs", path: "/talent-acquisition/internship-programs" },
        { name: "Candidate Screening", path: "/talent-acquisition/candidate-screening" }
      ]
    },
    { 
      name: "Academy", 
      path: "/academy",
      subItems: [
        { name: "Training Programs", path: "/academy/training-programs" },
        { name: "Certifications", path: "/academy/certifications" },
        { name: "Workshops", path: "/academy/workshops" },
        { name: "Soft Skills Training", path: "/academy/soft-skills-training" },
        { name: "Corporate Training Solutions", path: "/academy/corporate-training-solutions" }
      ]
    },
    { name: "Publication", path: "/publication" },
    { name: "Contact Us", path: "/contact-us" },
  ]
};

export default function Navbar() {
  const pathname = usePathname();
  const [, setIsScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const controls = useAnimation();
  const navRef = useRef(null);

  const isActive = (path: string) => {
    return pathname === path || 
           (path !== '/' && pathname.startsWith(path));
  };

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
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

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
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
                const hasSubItems = item.subItems && item.subItems.length > 0;
                
                return (
                  <motion.div
                    key={item.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={menuItemVariants}
                    className="relative group"
                    onMouseEnter={() => hasSubItems && setOpenDropdown(item.name)}
                    onMouseLeave={() => hasSubItems && setOpenDropdown(null)}
                  >
                    <div className="relative">
                      <Link
                        href={item.path}
                        className={`px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 nav-item flex items-center ${
                          active 
                            ? "text-red-600 font-semibold active" 
                            : "text-gray-700 hover:text-red-600"
                        }`}
                      >
                        {item.name}
                        {hasSubItems && (
                          <ChevronDown 
                            size={16} 
                            className={`ml-1 transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </Link>
                      {active && !hasSubItems && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-red-600 w-full"
                          layoutId="navbar-underline"
                          initial={{ opacity: 0, width: "0%" }}
                          animate={{ opacity: 1, width: "100%" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      )}
                    </div>

                    {hasSubItems && (
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            className="absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                          >
                            <div className="py-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className={`block px-4 py-2 text-sm ${
                                    isActive(subItem.path)
                                      ? 'bg-red-50 text-red-600'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
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
              className="px-4 pt-2 pb-4 space-y-1 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navData.menuItems.map((item, i) => {
                const active = isActive(item.path);
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isDropdownOpen = openDropdown === item.name;
                
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
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <Link
                          href={item.path}
                          className={`flex-1 px-4 py-3 rounded-lg text-base font-medium ${
                            active
                              ? "text-red-600 bg-red-50 shadow-sm"
                              : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                        {hasSubItems && (
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="p-2 rounded-md text-gray-500 hover:text-red-600"
                          >
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-200 ${
                                isDropdownOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      
                      {hasSubItems && (
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              className="pl-4 mt-1 space-y-1"
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className={`block px-4 py-2 text-sm rounded-lg ${
                                    isActive(subItem.path)
                                      ? 'bg-red-50 text-red-600'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                                  }`}
                                >
                                  <div className="flex items-center">
                                    <ChevronRight size={14} className="mr-2" />
                                    {subItem.name}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
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