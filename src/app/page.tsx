import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/Footer';

// Componentes carregados dinamicamente para melhorar o desempenho
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: true });
const IdealForSection = dynamic(() => import('@/components/sections/IdealForSection'), { ssr: true });
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), { ssr: true });
const HowItWorksSection = dynamic(() => import('@/components/sections/HowItWorksSection'), { ssr: true });
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true });
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'), { ssr: true });
const CtaSection = dynamic(() => import('@/components/sections/CtaSection'), { ssr: true });

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Componentes críticos carregados imediatamente */}
      <Navbar />
      <HeroSection />
      
      {/* Componentes não críticos carregados sob demanda */}
      <AboutSection />
      <IdealForSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
