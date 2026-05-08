'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { fadeUp, slideLeft, slideRight, VIEWPORT } from '@/lib/animations';

const checklist = [
  '245D Licensed by Minnesota DHS',
  'Serving BI, CAC, CADI & DD Waiver Recipients',
  'Personalized Support Plans for Every Individual',
  'Collaborative Care with Families & Case Managers',
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85"
            alt="USS caregiver and client"
            width={600}
            height={620}
            className="h-[540px] w-full rounded-[28px] object-cover shadow-soft-xl"
          />

          <div className="absolute -bottom-10 -right-10 hidden h-52 w-52 overflow-hidden rounded-3xl border-[6px] border-white shadow-soft-lg sm:block">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80"
              alt="USS team member"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -right-4 top-8 rounded-2xl border border-border/60 bg-white/95 p-5 shadow-soft-lg backdrop-blur sm:-right-8">
            <div className="mb-1.5 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="font-jakarta text-sm font-semibold text-text-dark">4.9/5 Rating</div>
            <div className="font-jakarta text-xs text-text-muted">100+ Families Served</div>
          </div>

          <div className="absolute -bottom-6 left-8 rounded-2xl bg-primary px-6 py-3.5 text-white shadow-soft-lg">
            <div className="font-lora text-xl font-bold leading-none">Est. 2021</div>
            <div className="mt-1 font-jakarta text-xs text-blue-200">Minnesota, USA</div>
          </div>
        </motion.div>

        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <span className="eyebrow">About United Social Services</span>
          <h2 className="mb-8 font-lora text-4xl font-bold leading-[1.15] tracking-tight text-text-dark sm:text-5xl">
            Compassionate, Person-Centered Care in Minnesota
          </h2>
          <p className="mb-5 font-jakarta leading-[1.75] text-text-muted">
            United Social Services, LLC is a Minnesota-based provider dedicated to helping
            individuals live safely, independently, and with dignity. We specialize in 245D services
            and Personal Care Assistance (PCA), serving people with disabilities, older adults, and
            individuals who need reliable daily support.
          </p>
          <p className="mb-10 font-jakarta leading-[1.75] text-text-muted">
            Our approach is built on compassion, professionalism, and respect for individual choice.
            We work closely with the people we serve, their families, case managers, and care
            partners.
          </p>

          <ul className="mb-12 space-y-4">
            {checklist.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="flex items-center gap-3.5 font-jakarta text-text-dark"
              >
                <span className="flex-shrink-0 rounded-full bg-accent-light p-1.5">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-primary px-8 py-4 font-jakarta font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-soft-xl"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-primary px-8 py-4 font-jakarta font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
