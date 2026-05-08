import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms of Service | United Social Services, LLC',
  description:
    'The terms governing your use of the United Social Services website and online resources.',
};

const lastUpdated = 'January 1, 2025';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: '1. Acceptance of Terms',
    body: [
      `By accessing or using the ${site.name} website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: '2. Informational Use Only',
    body: [
      'The content on this website is provided for general information about our services, eligibility, and processes. It is not medical, legal, or clinical advice and should not be relied on as a substitute for individualized professional care.',
      'Eligibility for 245D, PCA, and HCBS waiver services is determined by Minnesota DHS, lead agencies, and qualified assessors. Information on this site is not a guarantee of services.',
    ],
  },
  {
    heading: '3. Intellectual Property',
    body: [
      `All content, branding, logos, and materials on this website, unless otherwise noted, are owned by ${site.name} or our licensors and are protected by applicable intellectual property laws. You may not copy, reproduce, or redistribute content from this site without prior written permission, except for personal, non-commercial reference use.`,
    ],
  },
  {
    heading: '4. Acceptable Use',
    body: [
      'You agree not to use the site in any way that is unlawful, infringes the rights of others, disrupts service, attempts to gain unauthorized access, or transmits malicious software.',
      'When submitting forms, you agree to provide accurate information and to refrain from submitting content that is harmful, deceptive, or infringing.',
    ],
  },
  {
    heading: '5. Third-Party Links & Resources',
    body: [
      'Our website may contain links to third-party websites or resources for convenience. We do not endorse and are not responsible for the content, policies, or practices of those third parties.',
    ],
  },
  {
    heading: '6. Disclaimers',
    body: [
      'The website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement.',
    ],
  },
  {
    heading: '7. Limitation of Liability',
    body: [
      `To the fullest extent permitted by law, ${site.name} and its staff, contractors, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website.`,
    ],
  },
  {
    heading: '8. Modifications',
    body: [
      'We may modify these Terms from time to time. The "Last updated" date below indicates when this page was last revised. Continued use of the website after changes constitutes acceptance of the updated Terms.',
    ],
  },
  {
    heading: '9. Governing Law',
    body: [
      'These Terms are governed by the laws of the State of Minnesota, without regard to its conflict-of-laws principles. Any disputes will be resolved in the state or federal courts located in Minnesota, unless otherwise required by law.',
    ],
  },
  {
    heading: '10. Contact',
    body: [
      `Questions about these Terms? Contact us at ${site.phone} or ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Please read these terms before using our website."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <p className="mb-10 font-jakarta text-sm text-text-muted">Last updated: {lastUpdated}</p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 font-lora text-2xl font-bold text-text-dark">{s.heading}</h2>
                <div className="space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="font-jakarta leading-relaxed text-text-mid">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
