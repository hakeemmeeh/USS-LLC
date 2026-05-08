import Image from 'next/image';
import { partners, type Partner } from '@/lib/content';

export default function PartnersStrip() {
  const doubled = [...partners, ...partners];
  return (
    <section className="overflow-hidden bg-surface py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center sm:px-8">
        <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Recognition &amp; Affiliations Across Minnesota
        </p>
      </div>
      <div
        className="flex w-max items-center gap-14 whitespace-nowrap"
        style={{ animation: 'marquee 45s linear infinite' }}
        aria-label="Partners and affiliations"
      >
        {doubled.map((p, i) => (
          <PartnerItem key={`${p.name}-${i}`} partner={p} />
        ))}
      </div>
    </section>
  );
}

function PartnerItem({ partner }: { partner: Partner }) {
  const content = partner.logo ? (
    <Image
      src={partner.logo}
      alt={partner.name}
      width={partner.width ?? 160}
      height={48}
      className="h-10 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
    />
  ) : (
    <span className="font-lora text-lg font-semibold tracking-tight text-text-mid/55 transition-colors duration-300 hover:text-primary sm:text-xl">
      {partner.name}
    </span>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
        className="flex flex-shrink-0 items-center"
      >
        {content}
      </a>
    );
  }
  return <span className="flex flex-shrink-0 items-center">{content}</span>;
}
