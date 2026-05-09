'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/content';
import Icon from '@/components/ui/Icon';

const testimonialImages = [
  'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800&q=80', // Caregiver and patient smiling
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80', // Holding hands, emotional care
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', // Healthcare worker conversing warmly
];

export default function EditorialTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 8000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const t = testimonials[active];
  const activeImage = testimonialImages[active % testimonialImages.length];

  return (
    <section className="relative overflow-hidden bg-[#0F1A2E] py-24 md:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" aria-hidden />

      <div className="mx-auto max-w-7xl min-w-0 px-6 sm:px-8">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Side: Cinematic Portrait */}
          <div 
            className="relative h-[min(380px,70vw)] w-full min-w-0 overflow-hidden rounded-[1.5rem] shadow-2xl sm:h-[min(420px,65vw)] sm:rounded-[2rem] lg:h-[650px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage}
                  alt={t.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E]/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Editorial Quote & Controls */}
          <div 
            className="flex min-w-0 flex-col justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="eyebrow mb-6 text-white/50 border-white/20">Stories of Care</span>
            
            <div className="relative mb-12">
              <Icon 
                name="heart-handshake" 
                className="absolute -top-6 -left-6 h-20 w-20 text-white/5" 
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8 flex gap-1.5">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Icon
                        key={s}
                        name="star"
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <blockquote className="break-words font-lora text-2xl italic leading-tight text-white sm:text-3xl lg:text-[2.75rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-10">
                    <div className="font-jakarta text-lg font-bold text-white tracking-wide">
                      {t.name}
                    </div>
                    <div className="font-jakarta text-sm uppercase tracking-widest text-accent mt-1">
                      {t.role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Premium Navigation Controls */}
            <div className="mt-4 flex min-w-0 flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => setActive((i) => (i - 1 + total) % total)}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all hover:bg-white hover:text-[#0F1A2E]"
                >
                  <Icon name="chevron-left" className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActive((i) => (i + 1) % total)}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all hover:bg-white hover:text-[#0F1A2E]"
                >
                  <Icon name="chevron-right" className="h-5 w-5" />
                </button>
              </div>

              {/* Progress Line */}
              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:ml-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      active === i ? 'w-16 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
