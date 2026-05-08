'use client';

import { motion } from 'framer-motion';
import Icon, { type IconName } from '@/components/ui/Icon';
import CountUp from '@/components/ui/CountUp';
import { stats } from '@/lib/content';
import { fadeUp, VIEWPORT } from '@/lib/animations';

export default function StatsBar() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex flex-col items-center px-6 py-6 text-center"
            >
              <div className="mb-4 rounded-full bg-white/10 p-3.5">
                <Icon name={s.icon as IconName} className="h-6 w-6 text-accent" />
              </div>
              <div className="mb-2 font-lora text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {typeof s.countTo === 'number' ? (
                  <CountUp
                    to={s.countTo}
                    prefix={s.countPrefix ?? ''}
                    suffix={s.countSuffix ?? ''}
                  />
                ) : (
                  s.value
                )}
              </div>
              <div className="font-jakarta text-sm text-blue-200">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
