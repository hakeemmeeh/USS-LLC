'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { site } from '@/lib/content';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-28 md:py-36">
      <div
        className="absolute -right-24 top-0 h-[36rem] w-[36rem] -translate-y-1/3 translate-x-1/4 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] translate-y-1/3 -translate-x-1/4 rounded-full bg-primary-mid/40 blur-3xl"
        aria-hidden
      />
      <div className="dot-pattern absolute inset-0 opacity-[0.06]" aria-hidden />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8"
      >
        <span className="eyebrow eyebrow-light justify-center">Get Started Today</span>

        <h2 className="mb-6 font-lora text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
          Ready to Get the Support
          <br />
          You Deserve?
        </h2>

        <p className="mx-auto mb-10 max-w-xl font-jakarta text-lg leading-[1.7] text-blue-200">
          Schedule a free, no-obligation conversation. We&apos;ll listen, answer your questions,
          and help you find the right path forward.
        </p>

        <div className="flex flex-col items-center gap-5">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-9 py-4 font-jakarta text-base font-semibold text-white shadow-soft-xl transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            <Icon name="calendar" className="h-5 w-5" />
            Schedule a Free Consultation
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>

          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-jakarta text-sm text-blue-200 transition-colors hover:text-accent"
          >
            <Icon name="phone" className="h-4 w-4" />
            or call us at{' '}
            <span className="font-semibold tracking-wide text-white">{site.phone}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
