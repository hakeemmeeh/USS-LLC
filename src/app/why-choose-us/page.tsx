import Image from 'next/image';
import type { Metadata } from 'next';
import Icon, { type IconName } from '@/components/ui/Icon';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import HowItWorks from '@/components/sections/HowItWorks';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Why Choose Us | United Social Services, LLC',
  description:
    'Why families and case managers choose USS — person-centered planning, qualified staff, community integration, and dependable communication.',
};

const pillars: { icon: IconName; title: string; body: string; img: string }[] = [
  {
    icon: 'user-circle',
    title: 'Truly Person-Centered Planning',
    body: 'Every plan we deliver starts with the individual — their goals, preferences, routines, and the people who matter to them. We listen first, document carefully, and revise as needs evolve.',
    img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=85',
  },
  {
    icon: 'shield-check',
    title: 'Qualified, Trained, Compassionate Staff',
    body: 'Our team is screened, trained, and supervised to meet 245D and PCA standards. More importantly, we hire for compassion — because consistent, respectful care is what truly changes lives.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85',
  },
  {
    icon: 'building-2',
    title: 'Community Integration That Works',
    body: 'We don\u2019t just provide care in a home — we help people build skills, attend appointments, participate in activities, and meaningfully engage with their communities.',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=85',
  },
  {
    icon: 'handshake',
    title: 'Reliable Communication With Partners',
    body: 'Case managers and families consistently tell us the same thing: USS communicates. We document, follow through, escalate when needed, and treat partners as part of the care team.',
    img: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800&q=85',
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Care You Can Actually Count On"
        description="Four pillars that drive everything we do — for the people we serve, their families, and our partners."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Why Choose Us' }]}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-4">
          {pillars.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={p.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={600}
                    className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
                  />
                </div>
                <div className={reverse ? 'lg:order-1' : ''}>
                  <div className="mb-5 inline-flex rounded-2xl bg-primary-light p-4">
                    <Icon name={p.icon} className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mb-4 font-lora text-3xl font-bold text-text-dark sm:text-4xl">
                    {p.title}
                  </h2>
                  <p className="font-jakarta leading-relaxed text-text-muted">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <HowItWorks />
      <TestimonialsSection />
      <CTABand />
    </>
  );
}
