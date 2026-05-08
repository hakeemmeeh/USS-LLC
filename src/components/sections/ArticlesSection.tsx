'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { articles } from '@/lib/content';
import Icon from '@/components/ui/Icon';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function ArticlesSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Resources &amp; Updates</span>
            <h2 className="font-lora text-3xl font-bold text-text-dark sm:text-4xl">
              Helpful Articles &amp; Resources
            </h2>
          </div>
          <Link
            href="/resources"
            className="group flex items-center gap-2 font-jakarta font-semibold text-primary transition-all hover:gap-3"
          >
            View All <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-white transition-all hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-3 inline-block rounded-full bg-primary-light px-3 py-1 font-jakarta text-xs font-semibold text-primary">
                  {a.cat}
                </span>
                <h3 className="line-clamp-2 mb-3 font-lora text-lg font-bold text-text-dark transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <span className="flex items-center gap-2 font-jakarta text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  Read More <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
