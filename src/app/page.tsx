import AboutSection from '@/components/sections/AboutSection';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import IdealForSection from '@/components/sections/IdealForSection';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustSection from '@/components/sections/TrustSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <IdealForSection />
      <FeaturesSection />
      <TrustSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
