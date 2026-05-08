'use client';

import { motion } from 'framer-motion';
import Icon, { type IconName } from '@/components/ui/Icon';
import { credentials } from '@/lib/content';
import { fadeUp, scaleIn, VIEWPORT } from '@/lib/animations';

export default function TrustCredentials() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-20"
        >
          <span className="eyebrow">Credentials &amp; Compliance</span>
          <h2 className="font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
            Licensed, Trained &amp; Accountable
          </h2>
          <p className="mx-auto mt-5 font-jakarta text-lg leading-[1.7] text-text-muted">
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
              className="group flex items-center gap-5 rounded-[20px] border border-border/60 bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary hover:shadow-soft-lg"
            >
              <span className="flex-shrink-0 rounded-2xl bg-primary p-3.5 transition-colors group-hover:bg-accent">
                <Icon name={c.icon as IconName} className="h-6 w-6 text-white" />
              </span>
              <div>
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 rounded-[28px] bg-primary-light p-8 sm:p-10"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex-shrink-0 rounded-2xl bg-primary p-3.5">
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
              className="flex-shrink-0 rounded-full bg-primary px-7 py-3.5 font-jakarta text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-soft-lg"
            >
              Request Documents
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
