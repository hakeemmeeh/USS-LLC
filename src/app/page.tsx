import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import AboutSection from '@/components/sections/AboutSection';
import EditorialAbout from '@/components/sections/EditorialAbout';
import PartnersStrip from '@/components/sections/PartnersStrip';
import ServicesSection from '@/components/sections/ServicesSection';
import EditorialServicesSection from '@/components/sections/EditorialServicesSection';
import HowItWorks from '@/components/sections/HowItWorks';
import ServiceDetails from '@/components/sections/ServiceDetails';
import EditorialServiceDetails from '@/components/sections/EditorialServiceDetails';
import TrustCredentials from '@/components/sections/TrustCredentials';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import EditorialTestimonials from '@/components/sections/EditorialTestimonials';
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
      {/* <AboutSection /> */}
      <EditorialAbout />
      <PartnersStrip />
      {/* <ServicesSection /> */}
      <EditorialServicesSection />
      <HowItWorks />
      {/* <ServiceDetails /> */}
      <EditorialServiceDetails />
      <TrustCredentials />
      {/* <TestimonialsSection /> */}
      <EditorialTestimonials />
      <CTABand />
    </>
  );
}
