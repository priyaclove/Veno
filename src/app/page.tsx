"use client";

import CTA from "@/components/common/cta-section";
import Features from "@/components/home/features-section";
import FindYourNextHire from "@/components/home/find-next-hire-section";
import HeroSection from "@/components/home/hero-section";
import Pricing from "@/components/home/pricing-section";
import RecognizedBy from "@/components/home/recognitions-section";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/testimonials";
import WhyDifferent from "@/components/home/why-venovox-seection";

export default function Home() {
  return (
   <>
   <HeroSection />
   <FindYourNextHire />
   <StatsSection />
   <RecognizedBy />
   < WhyDifferent />
   <Features featuresInView={true} />
   <Testimonials />
   <Pricing pricingInView={true} />
   <CTA ctaInView={true} />
   </>
  );
}