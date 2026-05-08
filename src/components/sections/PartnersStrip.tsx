'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { partners, type Partner } from '@/lib/content';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function PartnersStrip() {
  const doubled = [...partners, ...partners];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1A2E] to-[#162040] py-20 md:py-24">
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Accent glow */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-14 text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/[0.04] px-4 py-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-accent backdrop-blur-sm sm:text-[11px]">
            <Icon name="award" className="h-3.5 w-3.5" />
            Recognition &amp; Affiliations
          </span>
          <h2 className="mt-5 font-lora text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted Across Minnesota
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-jakarta text-sm leading-relaxed text-white/50 sm:text-base">
            We partner with Minnesota&apos;s leading organizations to ensure the highest
            standards of care and compliance.
          </p>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div aria-hidden className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0F1A2E] to-transparent sm:w-32" />
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#162040] to-transparent sm:w-32" />

          <div
            className="flex w-max items-center gap-16 whitespace-nowrap py-4"
            style={{ animation: 'marquee 45s linear infinite' }}
            aria-label="Partners and affiliations"
          >
            {doubled.map((p, i) => (
              <PartnerItem key={`${p.name}-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Bottom accent divider */}
        <div aria-hidden className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
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
      className="h-10 w-auto opacity-40 grayscale transition-all duration-500 hover:opacity-90 hover:grayscale-0"
    />
  ) : (
    <span className="relative flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-3.5 font-jakarta text-sm font-semibold tracking-tight text-white/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.07] hover:text-white/90 sm:text-base">
      <span className="h-2 w-2 rounded-full bg-accent/60" aria-hidden />
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
