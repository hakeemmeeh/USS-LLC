'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/content';
import ServiceCard from '@/components/ui/ServiceCard';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="eyebrow">What We&apos;re Offering</span>
          <h2 className="font-lora text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
            Our Main Support Services
          </h2>
          <p className="mt-5 font-jakarta text-lg leading-[1.7] text-text-muted">
            Comprehensive 245D and PCA services delivered with consistency, training, and genuine
            care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
