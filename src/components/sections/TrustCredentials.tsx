'use client';

import { motion } from 'framer-motion';
import Icon, { type IconName } from '@/components/ui/Icon';
import { credentials } from '@/lib/content';
import { fadeUp, scaleIn, VIEWPORT } from '@/lib/animations';

/* Warm accent colors for each credential card icon background */
const cardAccents = [
  'bg-primary',
  'bg-accent',
  'bg-[#2A7D6B]',
  'bg-primary',
  'bg-accent-dark',
  'bg-[#8B5E3C]',
];

export default function TrustCredentials() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          'linear-gradient(165deg, #F5F0EA 0%, #F0EAE0 35%, #FFFFFF 65%, #F5F0EA 100%)',
      }}
    >
      {/* Decorative warm blurs - Optimized using CSS radial gradients instead of expensive blur filters */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-[500px] w-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-32 h-[450px] w-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,213,192,0.3) 0%, transparent 70%)',
        }}
      />
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(28,45,110,0.5) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-sm sm:text-[11px]">
            <Icon name="shield-check" className="h-3.5 w-3.5" />
            Credentials &amp; Compliance
          </span>
          <h2 className="mt-6 font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
            Licensed, Trained &amp; Accountable
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-jakarta text-lg leading-[1.7] text-text-muted">
            We meet the standards Minnesota families and case managers expect — and we&apos;re
            transparent about exactly how.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              custom={i}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="group relative flex items-center gap-5 overflow-hidden rounded-[20px] border border-[#E8DFD4]/80 bg-white/95 p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(28,45,110,0.1)]"
            >
              {/* Warm gradient hover fill */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5F0EA]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                className={`relative z-10 flex-shrink-0 rounded-2xl p-3.5 transition-all duration-300 ${cardAccents[i % cardAccents.length]} group-hover:scale-105 group-hover:shadow-lg`}
              >
                <Icon name={c.icon as IconName} className="h-6 w-6 text-white" />
              </span>
              <div className="relative z-10">
                <div className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  {c.label}
                </div>
                <div
                  className="mt-1 font-lora text-base font-bold text-text-dark"
                  dangerouslySetInnerHTML={{ __html: c.value }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner — warm nude tone with primary accents */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative mt-14 overflow-hidden rounded-[28px] border border-[#E0D5C8]/60"
          style={{
            background:
              'linear-gradient(135deg, #F0E8DC 0%, #EDE4D8 40%, #E8DFD4 100%)',
          }}
        >
          {/* Accent highlight strip */}
          <div aria-hidden className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="flex flex-col items-start gap-6 p-8 pl-10 sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:pl-12">
            <div className="flex items-start gap-5">
              <span className="flex-shrink-0 rounded-2xl bg-primary p-3.5 shadow-lg">
                <Icon name="shield-check" className="h-6 w-6 text-white" />
              </span>
              <div>
                <h3 className="font-lora text-xl font-bold text-text-dark">
                  Verify Our License or Request Documentation
                </h3>
                <p className="mt-1.5 font-jakarta text-sm leading-[1.7] text-text-muted">
                  Case managers and families can request our 245D license, insurance certificates,
                  staff training summaries, and policies on request.
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 rounded-full bg-primary px-7 py-3.5 font-jakarta text-sm font-semibold text-white shadow-[0_4px_16px_rgba(28,45,110,0.25)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_8px_24px_rgba(28,45,110,0.35)]"
            >
              Request Documents
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
