'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { tabContent } from '@/lib/content';

export default function EditorialServiceDetails() {
  const [active, setActive] = useState(0);

  return (
    <section id="hcbs" className="relative overflow-x-hidden bg-[#0A101C] py-24 md:py-48">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" aria-hidden />

      <div className="mx-auto max-w-7xl min-w-0 px-6 sm:px-8">
        <div className="mb-16 md:mb-24">
          <span className="eyebrow eyebrow-light mb-4">How We Help</span>
          <h2 className="break-words font-lora text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            Our Core <span className="italic text-accent">Services</span>
          </h2>
        </div>

        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Interactive Service Navigation */}
          <div className="flex min-w-0 flex-col gap-8 lg:col-span-5">
            {tabContent.map((t, i) => {
              const isActive = active === i;
              return (
                <button
                  key={t.title}
                  onClick={() => setActive(i)}
                  className={`group relative flex w-full flex-col text-left transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <div className="mb-4 flex min-w-0 flex-wrap items-center justify-between gap-3">
                    <h3 className={`min-w-0 max-w-[calc(100%-3.5rem)] break-words font-lora text-2xl font-bold transition-all duration-500 sm:text-3xl md:text-4xl ${isActive ? 'text-white' : 'text-white'}`}>
                      {i === 0 ? '245D Services' : 'PCA Services'}
                    </h3>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ${isActive ? 'border-accent bg-accent text-white' : 'border-white/20 text-white'}`}>
                      <Icon name={isActive ? 'arrow-right' : 'plus'} className="h-5 w-5" />
                    </div>
                  </div>
                  
                  {/* Active Content expansion */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pt-2">
                          <p className="mb-6 font-jakarta text-lg leading-relaxed text-blue-200">
                            {t.body}
                          </p>
                          <ul className="mb-8 space-y-4">
                            {t.points.map((p) => (
                              <li key={p} className="flex items-start gap-3 font-jakarta text-white/90">
                                <Icon name="check-circle" className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                                {p}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-white"
                          >
                            View Full Details <Icon name="arrow-right" className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Divider */}
                  <div className={`mt-6 h-px w-full transition-colors duration-500 ${isActive ? 'bg-accent/50' : 'bg-white/10'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Cinematic Image Reveal */}
          <div className="relative h-[min(380px,70vh)] w-full min-w-0 overflow-hidden rounded-[1.75rem] shadow-2xl sm:h-[min(480px,75vh)] sm:rounded-[2rem] lg:col-span-7 lg:h-[700px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={tabContent[active].img}
                  alt={tabContent[active].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Cinematic Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101C]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </motion.div>
            </AnimatePresence>

            {/* Floating content badge over image */}
            <div className="absolute bottom-10 left-10 right-10 rounded-2xl bg-[#0A101C]/60 p-6 backdrop-blur-md ring-1 ring-white/10">
              <p className="font-lora text-2xl font-bold text-white">
                {tabContent[active].title}
              </p>
              <p className="mt-2 font-jakarta text-sm text-blue-200">
                Tailored to your unique goals and environment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
