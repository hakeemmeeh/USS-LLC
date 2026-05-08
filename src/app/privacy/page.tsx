import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | United Social Services, LLC',
  description:
    'How United Social Services collects, uses, shares, and protects information about the people we serve and visitors to our website.',
};

const lastUpdated = 'January 1, 2025';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: '1. Overview',
    body: [
      `${site.name} ("USS", "we", "us", or "our") is committed to protecting the privacy of clients, families, partners, and visitors to our website. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding that information.`,
      'This policy applies to information we collect through our website, contact and referral forms, phone calls, emails, and any service-related interactions you have with us.',
    ],
  },
  {
    heading: '2. Information We Collect',
    body: [
      'Information you provide directly: name, email, phone number, address, service interest, case manager details, and any information you include in messages, intake forms, or referral submissions.',
      'Protected health information (PHI): when we provide services, we may collect health-related information necessary to deliver care and comply with Minnesota DHS, 245D, and HCBS waiver requirements.',
      'Automatically collected information: limited technical data such as device type, browser, pages visited, and IP address, used to operate and improve the site.',
    ],
  },
  {
    heading: '3. How We Use Information',
    body: [
      'To respond to inquiries, deliver requested services, and coordinate care with families and case managers.',
      'To meet legal, regulatory, accreditation, and licensing obligations under Minnesota chapter 245D, HIPAA, and applicable state and federal laws.',
      'To improve our website, services, and internal operations.',
      'To send service-related updates, when you have requested them or when required for care continuity.',
    ],
  },
  {
    heading: '4. How We Share Information',
    body: [
      'We do not sell personal information. We may share information only as needed to deliver services, including with: assigned case managers, lead agencies, contracted clinical or administrative partners, payers (such as Minnesota DHS), and qualified caregivers.',
      'We may disclose information when legally required, such as to government regulators, in response to valid legal process, or to protect the safety of clients, staff, or the public.',
      'Service providers (such as secure hosting, communications, and scheduling platforms) act on our behalf under written agreements that require appropriate safeguards.',
    ],
  },
  {
    heading: '5. How We Protect Information',
    body: [
      'We use administrative, physical, and technical safeguards designed to protect personal and health information, including access controls, training, encryption in transit, and policies aligned with HIPAA and Minnesota privacy requirements.',
      'No system is perfectly secure. If we become aware of an incident affecting your information, we will notify you as required by law.',
    ],
  },
  {
    heading: '6. Your Rights & Choices',
    body: [
      'You may request access to, correction of, or deletion of personal information we hold about you, subject to legal and recordkeeping requirements.',
      'You can opt out of non-essential communications at any time by replying to a message or contacting us using the information below.',
      'For PHI, your rights under HIPAA are described in our Notice of Privacy Practices, available on request.',
    ],
  },
  {
    heading: '7. Cookies & Analytics',
    body: [
      'Our website may use minimal cookies and privacy-respecting analytics to understand how visitors use the site. You can control cookies through your browser settings.',
    ],
  },
  {
    heading: '8. Children\u2019s Privacy',
    body: [
      'Our website is not directed at children under 13. When we provide services to minors, information is collected and handled through our service intake processes with appropriate consent from a parent or guardian.',
    ],
  },
  {
    heading: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The "Last updated" date below indicates when it was last revised. Material changes will be communicated through our website or directly when appropriate.',
    ],
  },
  {
    heading: '10. Contact Us',
    body: [
      `Questions about this Privacy Policy or our practices? Contact us at ${site.phone} or ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle the information you share with us."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
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
