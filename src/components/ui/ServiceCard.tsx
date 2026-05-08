'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon, { type IconName } from '@/components/ui/Icon';
import type { ServiceItem } from '@/lib/content';

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/services#${service.slug}`}
      aria-label={`Learn more about ${service.title}`}
      className="block h-full"
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35 }}
        className="group relative h-full overflow-hidden rounded-[28px] border border-border/60 bg-white p-9 shadow-soft transition-all duration-500 hover:border-primary hover:bg-primary hover:shadow-soft-xl md:p-10"
      >
        <div className="mb-7 inline-flex rounded-2xl bg-primary-light p-4 transition-colors group-hover:bg-white/15">
          <Icon
            name={service.icon as IconName}
            className="h-7 w-7 text-primary transition-colors group-hover:text-white"
          />
        </div>

        <h3 className="mb-4 font-lora text-2xl font-bold tracking-tight text-text-dark transition-colors group-hover:text-white">
          {service.title}
        </h3>

        <p className="mb-8 font-jakarta text-[15px] leading-[1.7] text-text-muted transition-colors group-hover:text-blue-200">
          {service.desc}
        </p>

        <span className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-primary transition-all group-hover:gap-3 group-hover:text-accent">
          Learn More <Icon name="arrow-right" className="h-4 w-4" />
        </span>

        <motion.div
          animate={{
            opacity: hovered ? 0.5 : 0,
            scale: hovered ? 1 : 0.85,
            y: hovered ? 0 : 16,
          }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 overflow-hidden rounded-tl-[28px]"
        >
          <Image
            src={service.image}
            alt=""
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}
