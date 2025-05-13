"use client";
 import { useCallback } from "react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Venovox transformed our hiring process! The AI-powered system is incredibly efficient and has reduced our onboarding time by 65%.",
    role: "HR Manager",
    company: "TechCorp Inc."
  },
  {
    name: "Jane Smith",
    feedback: "The verification speed is impressive. No more waiting for manual checks! Our team can now focus on strategic initiatives rather than paperwork.",
    role: "Startup Founder",
    company: "InnovateLabs"
  },
  {
    name: "Michael Brown",
    feedback: "Highly recommend Venovox. The support team is fantastic, and the technology is cutting-edge. Integration was seamless and the results speak for themselves.",
    role: "CEO",
    company: "Growth Ventures"
  },
];

const TestimonialsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

const total = testimonials.length;

const nextTestimonial = useCallback(() => {
  if (isAnimating) return;
  setDirection("right");
  setIsAnimating(true);
  setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
}, [isAnimating, total]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

useEffect(() => {
  const interval = setInterval(() => {
    nextTestimonial();
  }, 7000);
  return () => clearInterval(interval);
}, [nextTestimonial, isAnimating]); // ✅ Add nextTestimonial here


  // Indicators for current testimonial
  const Indicators = () => (
    <div className="flex justify-center mt-8 space-x-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            if (isAnimating) return;
            setDirection(index > currentIndex ? "right" : "left");
            setIsAnimating(true);
            setCurrentIndex(index);
          }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? "bg-red-600 w-6" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-16 bg-gray-100 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

        <div className="relative flex flex-col items-center">
          {/* Testimonial Card */}
          <div 
            className={`w-full max-w-4xl mx-auto mb-8 relative overflow-hidden ${
              isAnimating ? 'pointer-events-none' : ''
            }`}
          >
            <div
              className={`
                bg-white rounded-lg shadow-xl transform transition-all duration-500 
                ${isAnimating && direction === "right" ? "-translate-x-full opacity-0" : ""}
                ${isAnimating && direction === "left" ? "translate-x-full opacity-0" : ""}
              `}
            >
              <div className="p-2">
                <div className="border-l-4 border-red-600 p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-6 text-6xl text-gray-200 opacity-60 font-serif">
                    &ldquo;
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="relative z-10">
                    <p className="text-gray-700 text-lg md:text-xl italic mb-6 leading-relaxed">
                      &ldquo;{currentTestimonial.feedback}&ldquo;
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg text-gray-900">{currentTestimonial.name}</h3>
                        <p className="text-sm text-gray-600">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <button 
              onClick={prevTestimonial} 
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <Indicators />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;