'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import CountUp from '@/components/ui/CountUp';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#0F1A2E]">
      {/* Full-bleed cinematic background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1800&q=90"
          alt="Caregiver supporting a client in their home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic gradient overlay — dark from left, fading to transparent right */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0F1A2E]/90 via-[#0F1A2E]/75 to-transparent"
        />
        {/* Additional bottom gradient for depth */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E]/60 via-transparent to-[#0F1A2E]/20"
        />
        {/* Subtle warm color wash */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 sm:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left — main content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="max-w-2xl py-16 lg:py-20"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-white/[0.08] px-5 py-2.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-accent shadow-sm backdrop-blur-md sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Best Minnesota 245D &amp; PCA services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 font-lora text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]"
            >
              We&apos;re here for your
              <br className="hidden sm:block" /> whole{' '}
              <span className="text-accent">Minnesota</span>
              <br />
              <span className="relative inline-block">
                <span className="text-white">245D &amp; PCA</span>
                {/* Gold underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-accent"
                />
              </span>{' '}
              journey
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg font-jakarta text-base leading-relaxed text-white/70 sm:text-lg"
            >
              We&apos;re here for every step — person-centered home and community-based support so
              you can live safely, independently, and with dignity across Minnesota.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-9 py-4 font-jakarta text-sm font-semibold text-white shadow-[0_4px_24px_rgba(232,160,32,0.35)] transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_8px_32px_rgba(232,160,32,0.45)] sm:px-10 sm:text-[15px]"
              >
                Book an appointment
                <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/[0.06] px-9 py-4 font-jakarta text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/[0.12] sm:px-10 sm:text-[15px]"
              >
                About us
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={fadeUp}
              className="mt-10 font-jakarta text-sm text-white/40"
            >
              Trusted by{' '}
              <strong className="font-semibold text-white/60">families &amp; case managers</strong>{' '}
              across Minnesota
            </motion.p>
          </motion.div>

          {/* Right — vertical stats column with gold divider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex"
          >
            <div className="flex items-center gap-8">
              {/* Gold vertical divider line */}
              <div className="h-[320px] w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent" />

              {/* Stats stack */}
              <div className="flex flex-col gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="font-lora text-5xl font-bold tracking-tight text-white">
                    <CountUp to={4} suffix="+" />
                  </p>
                  <p className="mt-2 font-jakarta text-sm font-medium text-white/50">
                    HCBS Waiver
                    <br />
                    Programs Served
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                >
                  <p className="font-lora text-5xl font-bold tracking-tight text-accent">
                    <CountUp to={100} suffix="%" />
                  </p>
                  <p className="mt-2 font-jakarta text-sm font-medium text-white/50">
                    Person-Centered
                    <br />
                    Care Plans
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center gap-1">
                    <p className="font-lora text-5xl font-bold tracking-tight text-white">4.9</p>
                    <Icon name="star" className="mb-1 h-5 w-5 fill-accent text-accent" />
                  </div>
                  <p className="mt-2 font-jakarta text-sm font-medium text-white/50">
                    Family
                    <br />
                    Reviews
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile stats bar — visible only on smaller screens */}
      <div className="relative z-10 border-t border-white/10 bg-[#0F1A2E]/80 backdrop-blur-md lg:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-6 py-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            className="text-center"
          >
            <p className="font-lora text-3xl font-bold text-white">
              <CountUp to={4} suffix="+" />
            </p>
            <p className="mt-1 font-jakarta text-xs text-white/50">Programs Served</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="font-lora text-3xl font-bold text-accent">
              <CountUp to={100} suffix="%" />
            </p>
            <p className="mt-1 font-jakarta text-xs text-white/50">Person-Centered</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-1">
              <p className="font-lora text-3xl font-bold text-white">4.9</p>
              <Icon name="star" className="h-3.5 w-3.5 fill-accent text-accent" />
            </div>
            <p className="mt-1 font-jakarta text-xs text-white/50">Family Reviews</p>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom edge gradient for smooth transition to next section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-surface to-transparent"
      />
    </section>
  );
}
