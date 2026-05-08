'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { tabContent } from '@/lib/content';

export default function ServiceDetails() {
  const [active, setActive] = useState(0);
  const item = tabContent[active];

  return (
    <section id="hcbs" className="bg-primary-light py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="eyebrow">How We Help</span>
          <h2 className="font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
            Our Core Service Areas
          </h2>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-3" role="tablist">
          {tabContent.map((t, i) => (
            <button
              key={t.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full px-7 py-3.5 font-jakarta text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-primary text-white shadow-soft-lg'
                  : 'border border-border/70 bg-white text-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {i === 0 ? '245D Home & Community-Based Services' : 'Personal Care Assistance (PCA)'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
          >
            <div>
              <h3 className="mb-5 font-lora text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                {item.title}
              </h3>
              <p className="mb-8 font-jakarta leading-[1.75] text-text-muted">{item.body}</p>
              <ul className="mb-10 space-y-3.5">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 font-jakarta text-[15px] text-text-dark"
                  >
                    <Icon
                      name="check-circle"
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-jakarta font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-soft-xl"
              >
                View Full Service Details <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>

            <Image
              src={item.img}
              alt={item.title}
              width={800}
              height={600}
              className="h-[420px] w-full rounded-[28px] object-cover shadow-soft-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
