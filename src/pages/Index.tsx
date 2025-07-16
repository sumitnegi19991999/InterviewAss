import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import JourneySection from "@/components/sections/JourneySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CareerServicesSection from "@/components/sections/BuildYourCareer";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <CareerServicesSection />
      <WhyUs />
      <FAQ />
      {/* <JourneySection /> */}
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
