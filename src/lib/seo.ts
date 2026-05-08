import { site } from '@/lib/content';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://unitedsocialservices.com';

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.name,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email || undefined,
    description:
      'Minnesota-based provider of 245D Home and Community-Based Services and Personal Care Assistance. Licensed by Minnesota DHS.',
    areaServed: {
      '@type': 'State',
      name: 'Minnesota',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'MN',
      addressCountry: 'US',
    },
    foundingDate: site.established,
    slogan: site.tagline,
    knowsAbout: [
      '245D Basic Support Services',
      '245D Intensive Support Services',
      'Personal Care Assistance',
      'Homemaker Support',
      'Respite Care',
      'Brain Injury Waiver',
      'CADI Waiver',
      'CAC Waiver',
      'DD Waiver',
    ],
    sameAs: [],
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
  };
}

export function buildBreadcrumbJsonLd(crumbs: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url ? `${SITE_URL}${c.url}` : undefined,
    })),
  };
}

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
