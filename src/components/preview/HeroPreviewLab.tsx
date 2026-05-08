'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import Icon from '@/components/ui/Icon';
import { fadeUp, VIEWPORT } from '@/lib/animations';

const HERO_IMG =
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1100&q=85';

const VARIANTS = [
  {
    id: 'trust',
    label: '1 · Navy band',
    hint: 'Headline on navy · photo overlaps',
  },
  {
    id: 'editorial',
    label: '2 · Editorial',
    hint: 'Asymmetric clip · amber line',
  },
  {
    id: 'glass',
    label: '3 · Story panel',
    hint: 'Photo + gradient · glass text',
  },
  { id: 'bento', label: '4 · Bento', hint: 'Collage + proof tiles' },
  {
    id: 'motion',
    label: '5 · Motion polish',
    hint: 'Parallax · eyebrow underline · drift',
  },
] as const;

type HeroCTAsProps = { className?: string; inverse?: boolean };

function HeroCTAs({ className, inverse }: HeroCTAsProps) {
  const primary = inverse
    ? 'rounded-full bg-accent px-7 py-3.5 font-jakarta text-sm font-semibold text-white shadow-soft-lg hover:bg-accent-dark sm:px-8 sm:py-4'
    : 'rounded-full bg-primary px-7 py-3.5 font-jakarta text-sm font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-soft-xl sm:px-8 sm:py-4';
  const ghost = inverse
    ? 'rounded-full border-2 border-white/70 bg-white/5 px-7 py-3.5 font-jakarta text-sm font-semibold text-white backdrop-blur hover:bg-white/15 sm:px-8 sm:py-4'
    : 'rounded-full border-2 border-primary px-7 py-3.5 font-jakarta text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white sm:px-8 sm:py-4';
  return (
    <div className={`flex flex-wrap gap-3 sm:gap-4 ${className ?? ''}`}>
      <Link href="/contact" className={primary}>
        Get Started
      </Link>
      <Link href="/about" className={ghost}>
        About Us
      </Link>
    </div>
  );
}

function TrustNavyBand() {
  return (
    <section className="relative min-h-[min(88vh,720px)] overflow-hidden bg-white">
      <div className="relative bg-gradient-to-b from-primary via-primary to-[#24367a] pb-28 pt-14 text-white md:pb-36 md:pt-18">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(232,160,32,0.18),transparent_70%)]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="mb-5 font-jakarta text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100/95">
            Minnesota 245D &amp; PCA Services
          </p>
          <h1 className="font-lora text-[clamp(2rem,5vw,3.35rem)] font-bold leading-[1.06] tracking-tight">
            Empowering{' '}
            <span className="text-accent">Communities,</span>
            <br />
            Enhancing Lives
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-jakarta text-base leading-relaxed text-blue-100/90 md:text-lg">
            Person-centered home and community-based support services helping individuals live
            safely, independently, and with dignity.
          </p>
          <HeroCTAs className="mt-8 justify-center" inverse />
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-jakarta text-xs font-medium backdrop-blur">
              Licensed 245D
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-jakarta text-xs font-medium backdrop-blur">
              PCA-certified
            </span>
            <span className="rounded-full border border-accent/50 bg-accent/20 px-4 py-1.5 font-jakarta text-xs font-medium text-accent">
              Waivers: BI · CAC · CADI · DD
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-20 max-w-5xl px-6 pb-14 sm:-mt-24 sm:px-8 md:pb-18">
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white p-2 shadow-soft-xl md:p-3">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[22px] md:aspect-[21/11]">
            <Image src={HERO_IMG} alt="" fill className="object-cover object-center" sizes="96vw" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
              <div className="rounded-2xl border border-white/40 bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-0.5 font-jakarta text-xs font-semibold text-text-dark">
                  Trusted by families statewide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialSplit() {
  return (
    <section className="relative min-h-[min(88vh,760px)] overflow-hidden bg-surface py-14 md:py-18">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="max-w-[22rem] border-l-[3px] border-accent pl-5 md:max-w-none md:border-l-[4px] md:pl-6">
            <motion.span variants={fadeUp} className="inline-block font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Minnesota · 245D &amp; PCA
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-lora text-[clamp(2.1rem,4.8vw,3.35rem)] font-bold leading-[1.06] tracking-tight text-text-dark"
            >
              Empowering Communities,
              <br />
              <span className="relative inline-block bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
                Enhancing Lives
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-jakarta text-base leading-relaxed text-text-muted md:text-[17px]"
            >
              Home and community-based support built around dignity, safety, and what matters most
              to each person we serve.
            </motion.p>
            <motion.div variants={fadeUp}>
              <HeroCTAs className="mt-8" />
            </motion.div>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[520px] lg:max-w-none"
            style={{
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 92%)',
            }}
          >
            <div aria-hidden className="absolute inset-6 -z-10 rounded-[32px] bg-primary/15 blur-2xl" />
            <Image
              src={HERO_IMG}
              alt="Caregiver supporting a client"
              width={760}
              height={640}
              className="h-[min(58vw,420px)] w-full rounded-none object-cover shadow-soft-xl sm:h-[min(52vw,480px)] lg:h-[560px]"
            />
            <div className="absolute right-8 top-8 rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
              <p className="font-lora text-lg font-bold text-primary">USS</p>
              <p className="font-jakarta text-[11px] text-text-muted">Person-centered · MN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlassStoryPanel() {
  return (
    <section className="relative min-h-[min(92vh,800px)] overflow-hidden bg-neutral-900">
      <Image
        src={HERO_IMG}
        alt=""
        fill
        priority
        className="object-cover object-[60%_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10162b] via-[#10162b]/88 to-transparent sm:via-[#10162b]/75" />

      <div className="relative z-10 mx-auto flex max-w-7xl min-h-[inherit] flex-col justify-center px-6 py-16 sm:px-8 md:py-20">
        <div className="max-w-xl rounded-[28px] border border-white/12 bg-white/10 p-8 shadow-soft-xl backdrop-blur-md md:p-10">
          <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Minnesota 245D &amp; PCA
          </p>
          <h1 className="mt-5 font-lora text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] tracking-tight text-white">
            Empowering <span className="text-accent">Communities,</span>
            <br />
            Enhancing Lives
          </h1>
          <p className="mt-6 font-jakarta text-base leading-relaxed text-blue-50/92">
            Person-centered services so people can remain independent, respected, and supported at
            home and in community.
          </p>
          <HeroCTAs className="mt-8" />

          <div className="mt-8 flex flex-wrap gap-2">
            {['245D', 'PCA', 'Waivers', 'Statewide MN'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 font-jakarta text-xs font-medium text-white/90"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoLite() {
  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden bg-surface dot-pattern py-14 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-8">
        <div className="flex flex-col justify-center lg:col-span-5 lg:row-span-2 lg:pr-6">
          <span className="eyebrow">Minnesota 245D &amp; PCA</span>
          <h1 className="mt-5 font-lora text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] tracking-tight text-text-dark">
            Empowering <span className="text-primary">Communities,</span>
            <br />
            Enhancing Lives
          </h1>
          <p className="mt-5 font-jakarta text-base leading-relaxed text-text-muted">
            Reliable, compassionate staff and plans built with families and case managers.
          </p>
          <HeroCTAs className="mt-8" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:row-span-2 lg:gap-4 lg:self-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5 }}
            className="relative sm:col-span-2 h-[280px] overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-soft-xl sm:h-[320px] lg:h-[min(520px,56vh)]"
          >
            <Image
              src={HERO_IMG}
              alt="Caregiving support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 96vw, 45vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-6 pt-28">
              <p className="font-lora text-lg font-semibold text-white">
                Trusted home &amp; community support
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl border border-border bg-white p-6 shadow-soft"
          >
            <Icon name="shield-check" className="mb-3 h-6 w-6 text-primary" />
            <p className="font-lora text-xl font-bold text-text-dark">245D</p>
            <p className="font-jakarta text-xs text-text-muted">Licensed provider</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent-light to-white p-6 shadow-soft"
          >
            <Icon name="user-check" className="mb-3 h-6 w-6 text-accent-dark" />
            <p className="font-lora text-xl font-bold text-text-dark">PCA</p>
            <p className="font-jakarta text-xs text-text-muted">Assessed daily living support</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MotionSignature() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 40]);

  const imgAnimate = useMemo(
    () =>
      reduceMotion
        ? {}
        : { scale: [1, 1.03, 1] },
    [reduceMotion]
  );
  const imgTransition = reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' as const };

  return (
    <section
      ref={ref}
      className="relative min-h-[min(90vh,780px)] overflow-hidden bg-surface py-14 md:py-22"
    >
      <motion.div
        style={{ y: blobY }}
        aria-hidden
        className="pointer-events-none absolute -left-16 top-[15%] h-72 w-72 rounded-full bg-accent-light blur-3xl opacity-75"
      />
      <motion.div
        style={{ y: blobY2 }}
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-[18%] h-80 w-80 rounded-full bg-primary-light blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto grid max-w-[88rem] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.14 } } }}>
          <motion.div variants={fadeUp} className="relative mb-7 inline-flex">
            <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Minnesota 245D &amp; PCA Services
            </span>
            <motion.span
              className="pointer-events-none absolute bottom-[-6px] left-0 right-8 h-[2px] origin-left rounded-full bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mb-7 font-lora text-[clamp(2.25rem,5vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-text-dark"
          >
            Empowering <span className="text-primary">Communities,</span>
            <br />
            Enhancing Lives
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-10 max-w-md font-jakarta text-[17px] leading-relaxed text-text-muted">
            Person-centered care that fits real homes, real schedules, and real goals across
            Minnesota.
          </motion.p>

          <motion.div variants={fadeUp}>
            <HeroCTAs />
          </motion.div>
        </motion.div>

        <div className="relative">
          <div aria-hidden className="absolute inset-[-10px] -z-10 rounded-[44px] border-2 border-dashed border-primary/20 rotate-[2deg]" />
          <motion.div
            className="relative overflow-hidden rounded-[28px] shadow-soft-xl"
            animate={reduceMotion ? undefined : imgAnimate}
            transition={imgTransition}
          >
            <Image
              src={HERO_IMG}
              alt="Caregiver supporting a client"
              width={900}
              height={720}
              className="relative z-10 h-[min(75vw,360px)] w-full object-cover sm:h-[460px] lg:h-[560px]"
              sizes="(max-width: 1024px) 96vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5 }}
            className="absolute -bottom-5 left-4 z-20 rounded-2xl border border-border bg-white px-5 py-3 shadow-soft-lg"
          >
            <p className="font-jakarta text-xs font-semibold uppercase tracking-wide text-text-muted">
              Motion preview
            </p>
            <p className="font-jakarta text-sm text-text-dark">Scroll + soft image drift</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HeroPreviewLab() {
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  const blocks = [
    { ...VARIANTS[0], Component: TrustNavyBand },
    { ...VARIANTS[1], Component: EditorialSplit },
    { ...VARIANTS[2], Component: GlassStoryPanel },
    { ...VARIANTS[3], Component: BentoLite },
    { ...VARIANTS[4], Component: MotionSignature },
  ] as const;

  return (
    <div className="min-h-screen bg-neutral-950 pb-20">
      <div className="sticky top-0 z-[100] border-b border-white/10 bg-neutral-950/95 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Compare all · pick one to ship
            </p>
            <h1 className="font-lora text-xl font-bold text-white md:text-2xl">
              Hero concepts (scroll to compare)
            </h1>
            <p className="mt-2 max-w-xl font-jakarta text-sm leading-relaxed text-white/65">
              All five layouts are below. Tap a jump link to skip to an option; then tell us which
              number you want on the homepage (
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-accent">
                HeroSection.tsx
              </code>
              ).
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-2.5 font-jakarta text-sm font-medium text-white transition hover:bg-white/12"
          >
            ← Back to site
          </Link>
        </div>

        <nav
          aria-label="Jump to hero option"
          className="mx-auto mt-4 flex max-w-7xl flex-wrap gap-2 border-t border-white/10 pt-4"
        >
          {blocks.map((b, i) => (
            <a
              key={b.id}
              href={`#preview-${b.id}`}
              className="rounded-full bg-white/10 px-3 py-1.5 font-jakarta text-xs font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-accent hover:text-white hover:ring-accent sm:px-4 sm:text-sm"
            >
              {i + 1}. {b.label.replace(/^\d+ · /, '')}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-[1200px] space-y-10 px-4 pt-8 sm:px-6">
        {blocks.map((b, i) => (
          <article key={b.id} id={`preview-${b.id}`} className="scroll-mt-36">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 px-1">
              <h2 className="font-lora text-lg font-bold text-white md:text-xl">
                <span className="text-accent">{i + 1}.</span>{' '}
                {b.label.replace(/^\d+ · /, '')}
              </h2>
              <p className="font-jakarta text-sm text-white/55">{b.hint}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl ring-4 ring-black/60">
              <b.Component />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
