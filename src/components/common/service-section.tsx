// components/ServiceCards.tsx
import React from 'react';
import Image from 'next/image';

const ServiceCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <Image src="/path-to-icon/placement-icon.svg" alt="Placement" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">Flexible Placement</h3>
          <p className="text-center text-gray-600 mt-2">
            We manage the entire flexible placement recruitment process, from candidate search to payroll and administration.
          </p>
        </div>
        <div className="bg-gray-100 text-center py-2">
          <a href="#" className="text-blue-600 hover:underline">Temporary Placement</a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <Image src="/path-to-icon/recruitment-icon.svg" alt="Recruitment" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">Permanent Recruitment</h3>
          <p className="text-center text-gray-600 mt-2">
            From sourcing to shortlisting, to specialized talent selection and mass recruitment, we guarantee the right match.
          </p>
        </div>
        <div className="bg-gray-100 text-center py-2">
          <a href="#" className="text-blue-600 hover:underline">Permanent Placement</a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <Image src="/path-to-icon/diversity-icon.svg" alt="Diversity" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">Diversity & Inclusion</h3>
          <p className="text-center text-gray-600 mt-2">
            Use our expertise to find the most diverse and capable talent in the market.
          </p>
        </div>
        <div className="bg-gray-100 text-center py-2">
          <a href="#" className="text-blue-600 hover:underline">Diversity & Inclusion</a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <Image src="/path-to-icon/training-icon.svg" alt="Training" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">Training</h3>
          <p className="text-center text-gray-600 mt-2">
            Future-proof your workforce with training, upskilling, and reskilling.
          </p>
        </div>
        <div className="bg-gray-100 text-center py-2">
          <a href="#" className="text-blue-600 hover:underline">Training</a>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <Image src="/path-to-icon/outsourcing-icon.svg" alt="Outsourcing" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">Outsourcing</h3>
          <p className="text-center text-gray-600 mt-2">
            Whether it&apos;s RPO, BPO, HR Service, or more, we have got you covered.
          </p>
        </div>
        <div className="bg-gray-100 text-center py-2">
          <a href="#" className="text-blue-600 hover:underline">Outsourcing</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
