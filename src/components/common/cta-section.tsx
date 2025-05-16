'use client';

import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Array of promotional messages that will rotate randomly
const promoMessages = [
  "Top Rated Employment Consultant in Petaling Jaya",
  "100% Success Rate in Job Placements Across Malaysia",
  "Special Offer: Free Resume Review for New Clients",
  "Professional Recruitment Services in Petaling Jaya",
  "Fast-Track Your Career with Malaysia's Leading Job Consultants"
];

export default function StickyPromoBar() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check for mobile screens and handle resizing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll position
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200); 
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % promoMessages.length);
    }, 8000); 
    
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/0128008888', '_blank');
  };

  const barPosition = isMobile && isScrolled ? 'bottom-0' : 'top-0';
  const barHeight = '70px'; 

  return (
    <div className={`sticky-promo-bar ${barPosition}`}>
      <style jsx global>{`
        /* Add space for the promo bar based on position */
        body {
          padding-top: ${!isMobile || (isMobile && !isScrolled) ? barHeight : '0'};
          padding-bottom: ${isMobile && isScrolled ? barHeight : '0'};
        }
        
        /* Make navbar position adjust */
        header.fixed {
          top: ${!isMobile || (isMobile && !isScrolled) ? barHeight : '0'} !important;
        }
        
        /* The sticky bar itself */
        .sticky-promo-bar {
          position: fixed;
          left: 0;
          width: 100%;
          height: ${barHeight};
          background: linear-gradient(to right, #1a1a1a, #2c2c2c, #8b0000);
          color: white;
          z-index: 50;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        
        .sticky-promo-bar.top-0 {
          top: 0;
        }
        
        .sticky-promo-bar.bottom-0 {
          bottom: 0;
        }
        
        @media (max-width: 768px) {
          /* Mobile-specific styles */
          .sticky-bar-mobile-button {
            padding: 4px 10px;
            font-size: 13px;
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1 overflow-hidden whitespace-nowrap text-sm md:text-base">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {promoMessages[currentMessage]}
            </motion.div>
          </div>
          
          <button 
            onClick={openWhatsApp}
            className="sticky-bar-mobile-button flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-full text-white text-xs md:text-sm font-medium transition-colors border border-red-400"
          >
            <MessageSquare size={isMobile ? 14 : 16} className="text-white" />
            <span className="hidden md:inline">WhatsApp</span>
            <span className="md:hidden">012 800 8888</span>
          </button>
        </div>
      </div>
    </div>
  );
}