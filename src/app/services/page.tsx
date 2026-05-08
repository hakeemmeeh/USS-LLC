import Image from 'next/image';
import type { Metadata } from 'next';
import Icon from '@/components/ui/Icon';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import FAQSection from '@/components/sections/FAQSection';
import ServiceCard from '@/components/ui/ServiceCard';
import JsonLd from '@/components/seo/JsonLd';
import { faqs, services, waivers } from '@/lib/content';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Our Services | United Social Services, LLC',
  description:
    '245D Basic and Intensive Support, Personal Care Assistance, Homemaker Support, Respite Care, and Community Living services across Minnesota.',
};

const hcbsBasic = [
  'Daily living skills development',
  'Community participation support',
  'Homemaker tasks and routines',
  'Person-centered planning',
  'Respite for primary caregivers',
];

const hcbsIntensive = [
  'Specialized behavioral support',
  '24-hour and overnight assistance options',
  'Coordination with health professionals',
  'Crisis-aware planning and follow-up',
  'Higher-needs ADL support',
];

const pcaActivities = [
  'Bathing, dressing, and grooming',
  'Mobility and transferring assistance',
  'Toileting and personal hygiene',
  'Medication reminders',
  'Meal preparation and feeding',
  'Light housekeeping and laundry',
];

const homemakerTasks = [
  'Light cleaning and laundry',
  'Meal planning and grocery support',
  'Bed making and tidying living areas',
  'Dishes, kitchen cleanup, and food storage',
  'Organizing personal spaces',
  'Errand support and appointment reminders',
];

const respiteFeatures = [
  'Short-term in-home support',
  'Continuity with the regular care plan',
  'Coverage during family emergencies',
  'Day, evening, or overnight options',
  'Person-centered activities and routines',
  'Coordination with case manager and family',
];

const communityLivingPoints = [
  'Life skills coaching and routines',
  'Community access and meaningful activities',
  'Volunteer and employment readiness',
  'Social connections and relationships',
  'Health, wellness, and safety routines',
  'Self-advocacy and independence building',
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqs)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ])}
      />
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive 245D &amp; PCA Services"
        description="Person-centered home and community-based services delivered by qualified, compassionate staff across Minnesota."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Quick overview grid — clicking a card scrolls down to the matching detail block */}
      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="eyebrow">All Services</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Browse Our Full Service Lineup
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              Tap any service for the full breakdown — what&rsquo;s included, who it&rsquo;s for,
              and how we deliver it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 245D Basic — detail */}
      <section id="245d-basic" className="scroll-mt-32 bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rotate-2 rounded-[36px] bg-primary opacity-[0.06]"
            />
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=85"
              alt="Person-centered support in a Minnesota home"
              width={800}
              height={640}
              className="h-[440px] w-full rounded-[28px] object-cover shadow-soft-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-5 inline-flex rounded-2xl bg-primary-light p-4">
              <Icon name="home" className="h-7 w-7 text-primary" />
            </div>
            <span className="eyebrow">245D Basic Support</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Independence at Home, Built Around You
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              Supportive services for waiver-funded individuals focused on independence, safety,
              and meaningful community participation. Plans are written with you, your family,
              and your case manager.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {hcbsBasic.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 font-jakarta text-sm text-text-dark"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 245D Intensive — detail */}
      <section id="245d-intensive" className="scroll-mt-32 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex rounded-2xl bg-accent-light p-4">
              <Icon name="heart-handshake" className="h-7 w-7 text-accent" />
            </div>
            <span className="eyebrow">245D Intensive Support</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Higher-Touch Support for Complex Needs
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              Specialized services for individuals with more complex behavioral, medical, or
              daily-living needs — delivered by trained staff with strong coordination across the
              care team.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {hcbsIntensive.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 font-jakarta text-sm text-text-dark"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 -rotate-2 rounded-[36px] bg-accent opacity-[0.08]"
            />
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=85"
              alt="Caregiver providing intensive support"
              width={800}
              height={640}
              className="h-[440px] w-full rounded-[28px] object-cover shadow-soft-lg"
            />
          </div>
        </div>
      </section>

      {/* PCA — detail */}
      <section id="pca" className="scroll-mt-32 bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rotate-2 rounded-[36px] bg-primary opacity-[0.06]"
            />
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=85"
              alt="PCA support in a client's home"
              width={800}
              height={640}
              className="h-[440px] w-full rounded-[28px] object-cover shadow-soft-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-5 inline-flex rounded-2xl bg-primary-light p-4">
              <Icon name="user-check" className="h-7 w-7 text-primary" />
            </div>
            <span className="eyebrow">Personal Care Assistance</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Helping People Live Safely &amp; Independently at Home
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              PCA services support seniors and people with disabilities living independently in
              the community. Minnesota DHS authorizes PCA based on assessed needs.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {pcaActivities.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 font-jakarta text-sm text-text-dark"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Homemaker — detail */}
      <section id="homemaker" className="scroll-mt-32 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex rounded-2xl bg-accent-light p-4">
              <Icon name="sparkles" className="h-7 w-7 text-accent" />
            </div>
            <span className="eyebrow">Homemaker Support</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              A Calmer Home, So Life Can Move Forward
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              Help with the everyday tasks that keep a home safe, clean, and functioning — so the
              people we serve can focus on living, not housekeeping. We support household routines
              while respecting choice and privacy.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {homemakerTasks.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2.5 font-jakarta text-sm text-text-dark"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 -rotate-2 rounded-[36px] bg-accent opacity-[0.08]"
            />
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85"
              alt="Tidy, comfortable home environment"
              width={800}
              height={640}
              className="h-[440px] w-full rounded-[28px] object-cover shadow-soft-lg"
            />
          </div>
        </div>
      </section>

      {/* Respite — detail */}
      <section id="respite" className="scroll-mt-32 bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rotate-2 rounded-[36px] bg-primary opacity-[0.06]"
            />
            <Image
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=85"
              alt="Trusted respite care for primary caregivers"
              width={800}
              height={640}
              className="h-[440px] w-full rounded-[28px] object-cover shadow-soft-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-5 inline-flex rounded-2xl bg-primary-light p-4">
              <Icon name="refresh-cw" className="h-7 w-7 text-primary" />
            </div>
            <span className="eyebrow">Respite Care</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Real Rest for Caregivers, Steady Care for Loved Ones
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              Temporary, planned relief so primary caregivers can rest, work, attend appointments,
              or simply take a break — while the person they care for receives consistent,
              compassionate support.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {respiteFeatures.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2.5 font-jakarta text-sm text-text-dark"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Community Living — detail */}
      <section id="community-living" className="scroll-mt-32 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex rounded-2xl bg-accent-light p-4">
              <Icon name="users" className="h-7 w-7 text-accent" />
            </div>
            <span className="eyebrow">Community Living Support</span>
            <h2 className="font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Skills, Connection, and a Bigger World
            </h2>
            <p className="mt-4 font-jakarta leading-relaxed text-text-muted">
              Help building life skills, maintaining routines, and participating more fully in
              home and community life. We support each person to grow into the version of
              themselves they want to become.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {communityLivingPoints.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 font-jakarta text-sm text-text-dark"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 -rotate-2 rounded-[36px] bg-accent opacity-[0.08]"
            />
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=85"
              alt="Community participation and connection"
              width={800}
              height={640}
              className="h-[440px] w-full rounded-[28px] object-cover shadow-soft-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-20 text-center">
            <span className="eyebrow">Waivers We Serve</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              Minnesota HCBS Waiver Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {waivers.map((w) => (
              <div
                key={w.code}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-accent px-4 py-2 font-lora text-lg font-bold text-white">
                  {w.code}
                </div>
                <h3 className="mb-3 font-lora text-lg font-bold text-text-dark">{w.name}</h3>
                <p className="font-jakarta text-sm leading-relaxed text-text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection bg="bg-white" />

      <CTABand />
    </>
  );
}
