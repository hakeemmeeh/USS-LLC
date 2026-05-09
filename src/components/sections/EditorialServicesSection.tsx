'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/content';
import Icon, { type IconName } from '@/components/ui/Icon';

export default function EditorialServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services-editorial" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Offer</span>
            <h2 className="font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl mt-4">
              Our Support Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-jakarta font-semibold hover:text-accent transition-colors shrink-0"
          >
            View all services <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">
          {/* Left: Interactive List */}
          <div className="flex flex-col gap-2">
            {services.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={service.slug}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative flex w-full items-start gap-6 rounded-2xl p-6 text-left transition-all duration-500 ${
                    isActive
                      ? 'bg-primary shadow-soft-xl border border-primary'
                      : 'bg-white hover:bg-primary-light border border-transparent'
                  }`}
                >
                  <div
                    className={`mt-1 flex shrink-0 items-center justify-center rounded-full p-3 transition-colors duration-500 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}
                  >
                    <Icon name={service.icon as IconName} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-lora text-2xl font-bold transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-text-dark'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ${
                        isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className={`font-jakarta text-sm leading-relaxed text-blue-100`}>
                          {service.desc}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-accent">
                          Learn More <Icon name="arrow-right" className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Sticky Image Reveal */}
          <div className="sticky top-32 hidden lg:block h-[600px] w-full rounded-[2rem] overflow-hidden shadow-soft-xl relative">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-white font-lora text-4xl font-bold">{services[activeIndex].title}</h3>
                   <p className="text-white/90 font-jakarta mt-3 max-w-md">{services[activeIndex].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
