import Link from 'next/link';
import Icon from '@/components/ui/Icon';

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-2xl"
        aria-hidden
      />
      <div className="dot-pattern absolute inset-0 opacity-[0.07]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
        {eyebrow ? <span className="eyebrow text-accent">{eyebrow}</span> : null}
        <h1 className="mb-5 font-lora text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto max-w-2xl font-jakarta text-base leading-[1.7] text-blue-200 sm:text-lg">
            {description}
          </p>
        ) : null}

        {breadcrumbs.length ? (
          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 font-jakarta text-sm text-blue-200"
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 ? (
                  <Icon name="arrow-right" className="h-3 w-3 opacity-50" />
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  );
}
