import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import Icon, { type IconName } from '@/components/ui/Icon';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import { waivers, site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Who We Serve | United Social Services, LLC',
  description:
    'USS supports people with disabilities, older adults, brain injury survivors, and families across Minnesota under BI, CAC, CADI, and DD waivers and PCA programs.',
};

const audiences: { icon: IconName; title: string; desc: string; img: string }[] = [
  {
    icon: 'users',
    title: 'People with Disabilities',
    desc: 'Adults and youth with developmental, physical, or intellectual disabilities seeking community-based support.',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
  },
  {
    icon: 'heart',
    title: 'Older Adults',
    desc: 'Seniors who want to remain safely and independently in their own home with assistance through PCA.',
    img: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=600&q=80',
  },
  {
    icon: 'shield-check',
    title: 'Brain Injury Survivors',
    desc: 'Individuals living with acquired brain injuries served under the BI waiver.',
    img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
  },
  {
    icon: 'handshake',
    title: 'Families & Caregivers',
    desc: 'Family members and primary caregivers needing respite, coordination, and dependable backup support.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Care That Meets People Where They Are"
        description="We support a wide range of Minnesotans through 245D waivers and Personal Care Assistance — always with a person-centered approach."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Serve' }]}
      />

      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-20 text-center">
            <span className="eyebrow">Who Benefits From Our Services</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              Communities &amp; Individuals We Support
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="group flex gap-5 overflow-hidden rounded-3xl border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="mb-3 inline-flex rounded-xl bg-primary-light p-2">
                    <Icon name={a.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-lora text-lg font-bold text-text-dark">{a.title}</h3>
                  <p className="font-jakarta text-sm leading-relaxed text-text-muted">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-20 text-center">
            <span className="eyebrow">HCBS Waivers</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              Minnesota Waiver Programs We Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-jakarta text-text-muted">
              Each waiver has its own eligibility and scope. Our team helps families and case
              managers navigate the right fit for the people they serve.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {waivers.map((w) => (
              <div
                key={w.code}
                className="flex gap-5 rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-accent font-lora text-xl font-bold text-white">
                  {w.code}
                </div>
                <div>
                  <h3 className="mb-2 font-lora text-xl font-bold text-text-dark">{w.name}</h3>
                  <p className="font-jakarta text-sm leading-relaxed text-text-muted">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="rounded-3xl bg-primary-light p-10 text-center">
            <h2 className="mb-3 font-lora text-2xl font-bold text-text-dark sm:text-3xl">
              Not sure which waiver or service applies?
            </h2>
            <p className="mx-auto mb-6 max-w-xl font-jakarta text-text-muted">
              Reach out and we&apos;ll help you understand your options. We work directly with
              families and case managers to find the right path forward.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 font-jakarta font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Make an Inquiry
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-jakarta font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
