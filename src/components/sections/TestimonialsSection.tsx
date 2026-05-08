'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '@/lib/content';
import Icon from '@/components/ui/Icon';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-surface py-28 md:py-36">
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-light opacity-40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-light opacity-40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-14 text-center md:mb-16"
        >
          <span className="eyebrow">Our Testimonials</span>
          <h2 className="font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
            Why Families &amp; Partners Choose Us
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -top-8 left-1/2 -z-10 -translate-x-1/2 select-none font-lora text-[220px] leading-none text-primary opacity-[0.06] sm:text-[280px]"
            aria-hidden
          >
            &ldquo;
          </div>

          <div className="relative min-h-[360px] sm:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="mb-7 flex justify-center gap-1.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Icon
                      key={s}
                      name="star"
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                <blockquote className="mb-12 font-lora text-2xl italic leading-[1.5] text-text-dark sm:text-[28px] sm:leading-[1.45] lg:text-[32px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-soft-lg ring-4 ring-white">
                    <span className="font-lora text-xl font-bold text-white">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-jakarta font-semibold text-text-dark">
                      {t.name}
                    </div>
                    <div className="font-jakarta text-sm text-text-muted">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              onClick={() => setActive((i) => (i - 1 + total) % total)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft-lg"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={active === i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((i) => (i + 1) % total)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft-lg"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
