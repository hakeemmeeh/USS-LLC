import type { Metadata } from 'next';
import Icon from '@/components/ui/Icon';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/sections/CTABand';
import ContactForm from '@/components/ui/ContactForm';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact Us | United Social Services, LLC',
  description:
    'Contact United Social Services to learn about 245D and PCA services. Phone: 651-600-1666. We serve Minnesota communities statewide.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have questions about services, eligibility, or referrals? Reach out — we&apos;re here to listen."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Reach Out</span>
            <h2 className="mb-5 font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              We&apos;re Here to Help
            </h2>
            <p className="mb-8 font-jakarta leading-relaxed text-text-muted">
              Whether you&apos;re a family member exploring services, a case manager making a
              referral, or a person looking for support — we&apos;d love to hear from you.
            </p>

            <div className="mb-10 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="rounded-2xl bg-primary p-3">
                  <Icon name="phone" className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="font-jakarta text-xs uppercase tracking-widest text-text-muted">
                    Phone
                  </div>
                  <div className="font-lora text-lg font-bold text-text-dark">{site.phone}</div>
                </div>
              </a>

              <a
                href={site.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="rounded-2xl bg-accent p-3">
                  <Icon name="mail" className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="font-jakarta text-xs uppercase tracking-widest text-text-muted">
                    Email
                  </div>
                  <div className="font-lora text-lg font-bold text-text-dark">{site.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                <span className="rounded-2xl bg-primary-mid p-3">
                  <Icon name="map-pin" className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="font-jakarta text-xs uppercase tracking-widest text-text-muted">
                    Service Area
                  </div>
                  <div className="font-lora text-lg font-bold text-text-dark">{site.address}</div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-md">
              <iframe
                title="Minnesota service area map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2837428.5!2d-94.2!3d46.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x8e9d1b5d2c1c6e!2sMinnesota%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="rounded-3xl bg-primary-light p-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex-shrink-0 rounded-2xl bg-primary p-4">
                <Icon name="handshake" className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="mb-2 font-lora text-2xl font-bold text-text-dark">
                  Are you a case manager or referral partner?
                </h2>
                <p className="font-jakarta leading-relaxed text-text-muted">
                  We work directly with case managers across Minnesota. Reach out and we&apos;ll
                  respond promptly with intake details, current capacity, and next steps.
                </p>
              </div>
              <a
                href={site.phoneHref}
                className="rounded-full bg-primary px-8 py-4 font-jakarta font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
