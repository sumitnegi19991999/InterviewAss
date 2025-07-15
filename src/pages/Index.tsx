import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import JourneySection from '@/components/sections/JourneySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <JourneySection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
