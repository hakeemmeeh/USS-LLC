import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import FAQSection from '@/components/sections/FAQSection';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/seo/JsonLd';
import { articles, faqs } from '@/lib/content';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Resources & Articles | United Social Services, LLC',
  description:
    'Educational resources on 245D services, PCA programs, Minnesota HCBS waivers, and what to expect from a person-centered care provider.',
};

const externalResources: { name: string; href: string; desc: string }[] = [
  {
    name: 'Minnesota DHS — Disability Services',
    href: 'https://mn.gov/dhs/people-we-serve/people-with-disabilities/',
    desc: 'Statewide programs, eligibility, and waiver information from the Minnesota Department of Human Services.',
  },
  {
    name: 'MN HCBS Waivers Overview',
    href: 'https://mn.gov/dhs/people-we-serve/people-with-disabilities/services/home-community/programs-and-services/hcbs-waivers.jsp',
    desc: 'Side-by-side overview of BI, CAC, CADI, and DD waiver programs.',
  },
  {
    name: 'MN Disability Hub',
    href: 'https://disabilityhubmn.org/',
    desc: 'Free, person-centered help finding resources, benefits, and supports.',
  },
  {
    name: 'Brain Injury Alliance of Minnesota',
    href: 'https://braininjurymn.org/',
    desc: 'Support, education, and advocacy for survivors of brain injury and their families.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqs)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: '/' },
          { name: 'Resources', url: '/resources' },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Articles &amp; Helpful Links"
        description="Plain-language guides on 245D services, PCA, and Minnesota HCBS waivers."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />

      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12">
            <span className="eyebrow">Articles</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              From Our Knowledge Base
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-primary-light px-3 py-1 font-jakarta text-xs font-semibold text-primary">
                    {a.cat}
                  </span>
                  <h3 className="line-clamp-2 mb-3 font-lora text-lg font-bold text-text-dark transition-colors group-hover:text-primary">
                    {a.title}
                  </h3>
                  <span className="flex items-center gap-2 font-jakarta text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    Read More <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12">
            <span className="eyebrow">External Resources</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              Trusted Minnesota &amp; National Links
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {externalResources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <span className="flex-shrink-0 rounded-2xl bg-primary-light p-3 transition-colors group-hover:bg-primary">
                  <Icon
                    name="arrow-right"
                    className="h-5 w-5 text-primary transition-colors group-hover:text-white"
                  />
                </span>
                <div>
                  <h3 className="mb-1 font-lora text-lg font-bold text-text-dark transition-colors group-hover:text-primary">
                    {r.name}
                  </h3>
                  <p className="font-jakarta text-sm leading-relaxed text-text-muted">{r.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTABand />
    </>
  );
}
