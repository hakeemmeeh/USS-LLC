import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { nav, services, site, waivers } from '@/lib/content';

const socials: { name: 'facebook' | 'twitter' | 'linkedin' | 'instagram'; label: string; href: string }[] = [
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'twitter', label: 'Twitter', href: '#' },
  { name: 'linkedin', label: 'LinkedIn', href: '#' },
  { name: 'instagram', label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 py-20 sm:px-8 md:grid-cols-3 md:py-24 lg:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-5 inline-flex rounded-2xl bg-white px-4 py-3 shadow-md">
            <Image
              src="/logo.png"
              alt={site.name}
              width={320}
              height={130}
              className="h-16 w-auto"
            />
          </div>
          <p className="mb-6 font-jakarta text-sm leading-relaxed text-blue-200">
            {site.tagline}. Person-centered home and community-based care across Minnesota.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.label}
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
              >
                <Icon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-jakarta text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-jakarta text-sm text-blue-200 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-jakarta text-sm font-semibold uppercase tracking-widest text-white">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="font-jakarta text-sm text-blue-200 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-jakarta text-sm font-semibold uppercase tracking-widest text-white">
            Waivers We Serve
          </h4>
          <ul className="space-y-2.5">
            {waivers.map((w) => (
              <li key={w.code} className="font-jakarta text-sm text-blue-200">
                <span className="font-semibold text-accent">{w.code}</span> &mdash; {w.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="mb-5 font-jakarta text-sm font-semibold uppercase tracking-widest text-white">
            Stay Connected
          </h4>
          <p className="mb-4 font-jakarta text-sm text-blue-200">
            Get updates on services and community resources.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:px-8 md:flex-row">
          <p className="font-jakarta text-sm text-blue-200">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-jakarta text-sm text-blue-200 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-jakarta text-sm text-blue-200 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
