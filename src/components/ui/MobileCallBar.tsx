'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { site } from '@/lib/content';

export default function MobileCallBar() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShow(latest > 320);
  });

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="mobile-call-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          aria-label="Quick contact"
        >
          <div className="flex gap-2 rounded-full bg-primary-dark p-1.5 shadow-soft-xl">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-jakarta text-sm font-semibold text-white"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call Us
            </a>
            <Link
              href="/contact"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-jakarta text-sm font-semibold text-primary"
            >
              Get Support
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
