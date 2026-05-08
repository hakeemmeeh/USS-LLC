import Image from 'next/image';
import type { Metadata } from 'next';
import Icon, { type IconName } from '@/components/ui/Icon';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import { values } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us | United Social Services, LLC',
  description:
    'Learn about United Social Services, LLC — a Minnesota provider of 245D and PCA services delivering person-centered, compassionate community-based care.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Compassionate Care, Rooted in Community"
        description="United Social Services, LLC is a Minnesota-based provider of 245D and PCA services committed to dignity, independence, and quality care."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <section id="mission" className="bg-white py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2">
          <div className="rounded-3xl bg-primary p-10 text-white shadow-lg">
            <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-4">
              <Icon name="heart" className="h-7 w-7 text-accent" />
            </div>
            <h2 className="mb-3 font-lora text-2xl font-bold sm:text-3xl">Our Mission</h2>
            <p className="font-jakarta leading-relaxed text-blue-200">
              To deliver compassionate, person-centered home and community-based services that
              empower individuals to live with independence, dignity, and a meaningful sense of
              belonging in their communities.
            </p>
          </div>
          <div className="rounded-3xl bg-accent p-10 text-white shadow-lg">
            <div className="mb-5 inline-flex rounded-2xl bg-white/20 p-4">
              <Icon name="shield-check" className="h-7 w-7 text-white" />
            </div>
            <h2 className="mb-3 font-lora text-2xl font-bold sm:text-3xl">Our Vision</h2>
            <p className="font-jakarta leading-relaxed text-white/90">
              A Minnesota where every individual — regardless of ability or age — has access to
              consistent, dignified, and high-quality support that helps them thrive at home and
              participate fully in community life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mb-6 font-lora text-3xl font-bold leading-tight text-text-dark sm:text-4xl">
              Building a Care Provider Around the People We Serve
            </h2>
            <p className="mb-4 font-jakarta leading-relaxed text-text-muted">
              United Social Services, LLC was founded to fill a clear gap: families and case
              managers needed a 245D and PCA provider who treated every person as an individual,
              not a case file. We built USS around three principles &mdash; listening first,
              planning together, and delivering reliable care.
            </p>
            <p className="mb-4 font-jakarta leading-relaxed text-text-muted">
              Today, we serve recipients across Minnesota under BI, CAC, CADI, and DD waivers as
              well as PCA programs. Each plan is built collaboratively with the person, their
              family, and their case manager.
            </p>
            <p className="font-jakarta leading-relaxed text-text-muted">
              Whether the goal is more independence, safer routines, or simply a better day, our
              team shows up with consistency, training, and genuine care.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=85"
              alt="USS team supporting a client"
              width={700}
              height={620}
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-primary px-5 py-3 text-white shadow-xl">
              <div className="font-lora text-xl font-bold">Est. 2021</div>
              <div className="font-jakarta text-xs text-blue-200">Minnesota, USA</div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-20 text-center">
            <span className="eyebrow">Our Core Values</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              The Principles That Guide Our Care
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-primary-light p-4">
                  <Icon name={v.icon as IconName} className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-lora text-lg font-bold text-text-dark">{v.title}</h3>
                <p className="font-jakarta text-sm leading-relaxed text-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
