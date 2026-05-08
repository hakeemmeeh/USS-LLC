'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { faqs } from '@/lib/content';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function FAQSection({
  heading = 'Frequently Asked Questions',
  eyebrow = 'Got Questions?',
  bg = 'bg-surface',
}: {
  heading?: string;
  eyebrow?: string;
  bg?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`${bg} py-28 md:py-36`}>
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-16 text-center md:mb-20"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-jakarta text-lg leading-[1.7] text-text-muted">
            Quick answers to the questions families and case managers ask us most often.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const expanded = open === i;
            return (
              <motion.div
                key={f.q}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className={`overflow-hidden rounded-[20px] border bg-white transition-all ${
                  expanded
                    ? 'border-primary shadow-soft-lg'
                    : 'border-border/60 shadow-soft hover:border-primary/30'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                  className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left transition-colors"
                >
                  <span className="font-lora text-base font-bold tracking-tight text-text-dark sm:text-lg">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                      expanded ? 'bg-primary text-white' : 'bg-primary-light text-primary'
                    }`}
                  >
                    <Icon name="chevron-down" className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 font-jakarta leading-[1.75] text-text-mid">{f.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
