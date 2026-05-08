import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import AboutSection from '@/components/sections/AboutSection';
import PartnersStrip from '@/components/sections/PartnersStrip';
import ServicesSection from '@/components/sections/ServicesSection';
import HowItWorks from '@/components/sections/HowItWorks';
import ServiceDetails from '@/components/sections/ServiceDetails';
import TrustCredentials from '@/components/sections/TrustCredentials';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTABand from '@/components/sections/CTABand';
import JsonLd from '@/components/seo/JsonLd';
import { faqs } from '@/lib/content';
import { buildFaqJsonLd } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqs)} />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <PartnersStrip />
      <ServicesSection />
      <HowItWorks />
      <ServiceDetails />
      <TrustCredentials />
      <TestimonialsSection />
      <CTABand />
    </>
  );
}
