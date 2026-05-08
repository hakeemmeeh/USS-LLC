'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import CountUp from '@/components/ui/CountUp';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="dot-pattern relative overflow-hidden bg-surface py-16 md:py-20 lg:py-24">
      {/* Nude + original cool surface blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_0%_100%,rgba(244,228,214,0.72)_0%,transparent_52%),radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(232,235,248,0.85)_0%,transparent_50%),linear-gradient(165deg,rgba(250,246,241,0.95)_0%,rgba(248,249,255,0.35)_38%,rgba(248,249,255,0.92)_62%,rgba(241,234,226,0.45)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-0 h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/[0.1] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-14 xl:gap-20">
          {/* Left — Sunnyaid-style copy stack */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-xl lg:max-w-none"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-white px-4 py-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Best Minnesota 245D &amp; PCA services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-lora text-[2.125rem] font-bold leading-[1.12] tracking-tight text-text-dark sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              We&apos;re here for your whole{' '}
              <span className="text-primary">Minnesota</span>{' '}
              <span className="text-accent-dark">245D &amp; PCA</span> journey
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-jakarta text-base leading-relaxed text-text-muted sm:text-lg"
            >
              We&apos;re here for every step — person-centered home and community-based support so
              you can live safely, independently, and with dignity across Minnesota.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 font-jakarta text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg sm:px-10 sm:py-4 sm:text-[15px]"
              >
                Book an appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-white px-8 py-3.5 font-jakarta text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white sm:px-10 sm:py-4 sm:text-[15px]"
              >
                About us
              </Link>
            </motion.div>

            {/* Stat row — mirrors Sunnyaid 00+ / 00% blocks */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-primary/10 pt-10 sm:gap-10"
            >
              <div>
                <p className="font-lora text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  <CountUp to={4} suffix="+" />
                </p>
                <p className="mt-1.5 font-jakarta text-sm font-medium text-text-muted">
                  HCBS waiver programs served
                </p>
              </div>
              <div>
                <p className="font-lora text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  <CountUp to={100} suffix="%" />
                </p>
                <p className="mt-1.5 font-jakarta text-sm font-medium text-text-muted">
                  Person-centered care plans
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — image + stacked review cards (Sunnyaid-style) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative">
              {/* Layered shape frame (image sits inside) */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 -z-10 rotate-[4deg] rounded-[40px] bg-primary opacity-[0.07] sm:-inset-4 sm:rounded-[44px] lg:-inset-5"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-1.5 -z-10 -rotate-[3deg] rounded-[36px] border-2 border-accent/45 sm:-inset-2 sm:rounded-[40px] lg:-inset-3"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-4 -z-10 h-24 w-24 rounded-[18px] sm:-right-6 sm:h-32 sm:w-32"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(28,45,110,0.2) 1.5px, transparent 1.5px)',
                  backgroundSize: '14px 14px',
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-3 -top-3 -z-10 h-14 w-14 rounded-2xl bg-accent/90 shadow-sm sm:-left-4 sm:-top-4 sm:h-16 sm:w-16"
              />

              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1100&q=85"
                alt="Caregiver supporting a client in their home"
                width={760}
                height={640}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative z-10 h-[400px] w-full rounded-[1.75rem] object-cover shadow-soft-xl sm:h-[460px] sm:rounded-[28px] lg:h-[min(540px,58vh)] lg:max-h-[580px]"
              />

              {/* Floating card — reviews (like Sunnyaid 4.6 / 4.8 blocks) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -left-2 bottom-[18%] z-20 w-[min(100%,260px)] rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:-left-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-lora text-2xl font-bold text-text-dark sm:text-3xl">4.9</p>
                    <p className="font-jakarta text-xs text-text-muted sm:text-sm">Family reviews</p>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="star" className="h-3.5 w-3.5 fill-accent text-accent sm:h-4 sm:w-4" />
                      ))}
                    </div>
                    <span className="font-jakarta text-[11px] font-medium text-text-muted">Minnesota</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute -right-1 top-[10%] z-20 max-w-[220px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:-right-3 sm:max-w-[240px] sm:p-5"
              >
                <p className="font-lora text-xl font-bold text-text-dark sm:text-2xl">245D</p>
                <p className="mt-1 font-jakarta text-xs leading-snug text-text-muted sm:text-sm">
                  Licensed provider — Basic &amp; Intensive support
                </p>
                <div className="mt-3 flex items-center gap-2 border-t border-border/60 pt-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="h-3 w-3 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="font-jakarta text-[11px] text-text-muted">Trusted care</span>
                </div>
              </motion.div>

              {/* Small secondary image overlap (Sunnyaid layered photos feel) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="absolute -bottom-5 right-4 z-20 hidden w-[38%] overflow-hidden rounded-xl border-4 border-white shadow-lg sm:block lg:-bottom-6 lg:right-8"
                aria-hidden
              >
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                  alt=""
                  width={280}
                  height={200}
                  className="aspect-[5/4] h-auto w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip — Sunnyaid “Trusted by 500+ teams…” */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl text-center font-jakarta text-sm text-text-muted sm:mt-16 sm:text-base"
        >
          Trusted by{' '}
          <strong className="font-semibold text-primary">families &amp; case managers</strong>{' '}
          to deliver consistent, compassionate{' '}
          <strong className="font-semibold text-primary">245D &amp; PCA</strong> support statewide.
        </motion.p>
      </div>
    </section>
  );
}
