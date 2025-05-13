"use client";

import { useState } from "react";

// ✅ Define Prop Types
interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  iconType: "flexible" | "permanent" | "workforce" | "outsourcing";
}

// ✅ Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, iconType }) => {
  const [isHovered, setIsHovered] = useState(false);

  // ✅ SVG Icon Selector
  const getIcon = () => {
    switch (iconType) {
      case "flexible":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="50" cy="30" r="20" stroke="#E3252B" strokeWidth="3" />
            <polyline points="50,18 50,30 60,35" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,30 L30,60" stroke="#E3252B" strokeWidth="3" />
            <path d="M20,30 L40,30" stroke="#E3252B" strokeWidth="3" />
            <path d="M20,40 L30,40" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,60 L30,70" stroke="#E3252B" strokeWidth="3" />
            <path d="M25,70 L35,70" stroke="#E3252B" strokeWidth="3" />
          </svg>
        );
      case "permanent":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M60,25 C60,15 50,10 40,15 C30,20 30,35 40,40 C50,45 60,40 60,30" stroke="#E3252B" strokeWidth="3" />
            <circle cx="30" cy="25" r="8" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,35 L30,60" stroke="#E3252B" strokeWidth="3" />
            <path d="M20,40 L30,40" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,60 L40,60" stroke="#E3252B" strokeWidth="3" />
            <path d="M40,45 L40,60" stroke="#E3252B" strokeWidth="3" />
            <path d="M40,45 L45,45" stroke="#E3252B" strokeWidth="3" />
          </svg>
        );
      case "workforce":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="20" y="25" width="40" height="30" rx="3" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,35 L50,35" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,45 L45,45" stroke="#E3252B" strokeWidth="3" />
            <circle cx="30" cy="15" r="5" stroke="#E3252B" strokeWidth="3" />
            <circle cx="50" cy="15" r="5" stroke="#E3252B" strokeWidth="3" />
            <path d="M30,20 L30,25" stroke="#E3252B" strokeWidth="3" />
            <path d="M50,20 L50,25" stroke="#E3252B" strokeWidth="3" />
          </svg>
        );
      case "outsourcing":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M20,25 L60,25" stroke="#E3252B" strokeWidth="3" />
            <path d="M20,40 L60,40" stroke="#E3252B" strokeWidth="3" />
            <path d="M20,55 L60,55" stroke="#E3252B" strokeWidth="3" />
            <circle cx="30" cy="25" r="5" fill="#E3252B" />
            <circle cx="50" cy="40" r="5" fill="#E3252B" />
            <circle cx="35" cy="55" r="5" fill="#E3252B" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center h-full transition-all duration-300 transform ${
        isHovered ? "scale-105 shadow-xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6">{getIcon()}</div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="mt-auto">
        <button
          className={`py-3 px-6 rounded-md font-semibold transition-colors duration-300 ${
            isHovered ? "bg-red-600 text-white" : "bg-gray-800 text-white"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// ✅ Section Wrapper
const RecruitmentServicesSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Recruitment Solutions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Unlock your business potential with our dedicated recruitment solutions. Learn more about our full
            catalog of offerings for organizations of any size across any industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Flexible Placement"
            description="We manage the entire flexible placement recruitment process, from candidate search to payroll and administration."
            buttonText="TEMPORARY PLACEMENT"
            iconType="flexible"
          />
          <ServiceCard
            title="Permanent Recruitment"
            description="From sourcing to shortlisting, to specialized talent selection and mass recruitment, we guarantee the right match."
            buttonText="PERMANENT PLACEMENT"
            iconType="permanent"
          />
          <ServiceCard
            title="Workforce Management"
            description="Expert management of large contingent workforces, ensuring productivity, compliance and cost efficiency."
            buttonText="WORKFORCE SOLUTIONS"
            iconType="workforce"
          />
          <ServiceCard
            title="Outsourcing"
            description="Whether it's RPO, BPO, HR Service, or more, we’ve got you covered."
            buttonText="OUTSOURCING"
            iconType="outsourcing"
          />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentServicesSection;
