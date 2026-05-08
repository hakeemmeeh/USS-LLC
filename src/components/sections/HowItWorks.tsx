'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { steps } from '@/lib/content';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 md:py-36">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-white blur-2xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center md:mb-24">
          <span className="eyebrow">Our Working Process</span>
          <h2 className="font-lora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get Started in Just 3 Steps
          </h2>
          <p className="mt-5 font-jakarta text-lg leading-[1.7] text-blue-200">
            A simple, transparent process — from your first inquiry to ongoing support.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          <div
            className="absolute left-[18%] right-[18%] top-36 z-0 hidden border-t-2 border-dashed border-white/25 md:block"
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative z-10 text-center"
            >
              <div className="relative mb-8 inline-block">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={320}
                  height={320}
                  className="mx-auto h-64 w-64 rounded-[28px] object-cover shadow-soft-xl sm:h-72 sm:w-72"
                />
                <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-primary bg-accent font-lora text-xl font-bold text-white shadow-soft-lg">
                  {step.n}
                </div>
              </div>

              <h3 className="mb-4 font-lora text-2xl font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs font-jakarta text-[15px] leading-[1.7] text-blue-200">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
