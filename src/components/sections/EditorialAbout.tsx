'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Icon from '@/components/ui/Icon';
import { fadeUp, VIEWPORT } from '@/lib/animations';

const checklist = [
  '245D Licensed by Minnesota DHS',
  'Serving BI, CAC, CADI & DD Waiver Recipients',
  'Personalized Support Plans for Every Individual',
  'Collaborative Care with Families & Case Managers',
];

export default function EditorialAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" className="relative overflow-hidden bg-surface py-32 md:py-48" ref={containerRef}>
      {/* Background abstract elements */}
      <div className="absolute left-0 top-0 h-full w-full opacity-30" aria-hidden>
        <div className="absolute -left-[20%] top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          
          {/* Left Column: Asymmetrical Overlapping Images */}
          <div className="relative h-[min(520px,85vh)] w-full min-w-0 overflow-hidden sm:h-[min(600px,88vh)] lg:h-[800px]">
            {/* Primary Large Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute left-0 top-0 h-[75%] w-[85%] overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=90"
                alt="Caregiver holding patient's hands"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>

            {/* Secondary Overlapping Image (Parallaxing opposite direction) */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-10 right-0 h-[45%] w-[60%] overflow-hidden rounded-3xl border-8 border-surface shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=85"
                alt="Smiling healthcare worker"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Glassmorphic Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-3 z-10 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:bottom-10 sm:left-4 sm:p-5"
            >
              <div className="mb-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="font-lora text-lg font-bold text-text-dark">4.9/5 Rating</div>
              <div className="font-jakarta text-sm text-text-muted">Families Across MN</div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="relative z-20 min-w-0">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
              <span className="eyebrow mb-6">Our Manifesto</span>
              
              <h2 className="mb-8 break-words font-lora text-3xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-[3.5rem]">
                Compassionate Care Is Not A Service. <br />
                <span className="text-primary italic">It&apos;s A Standard.</span>
              </h2>
              
              <p className="mb-6 font-jakarta text-lg leading-[1.8] text-text-muted">
                United Social Services, LLC is a Minnesota-based provider dedicated to helping
                individuals live safely, independently, and with dignity. We specialize in 245D services
                and Personal Care Assistance (PCA).
              </p>
              
              <p className="mb-10 font-jakarta text-lg leading-[1.8] text-text-muted">
                Our approach is built on compassion, professionalism, and respect for individual choice.
                We work closely with the people we serve, their families, and case managers to ensure every need is met.
              </p>

              {/* Elevated Checklist */}
              <ul className="mb-12 grid gap-5 sm:grid-cols-2">
                {checklist.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5"
                  >
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-accent/10 p-1.5">
                      <Icon name="check" className="h-4 w-4 text-accent" />
                    </span>
                    <span className="font-jakarta text-sm font-semibold leading-relaxed text-text-dark">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-jakarta text-sm font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-soft-xl"
                >
                  Learn Our Story
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary/20 px-8 py-4 font-jakarta text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/5"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
