'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { nav, site } from '@/lib/content';
import Icon from '@/components/ui/Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-primary-dark py-2 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm sm:px-8">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-accent"
            aria-label={`Call ${site.phone}`}
          >
            <Icon name="phone" className="h-4 w-4 text-accent" />
            <span className="font-jakarta">{site.phone}</span>
          </a>
          <a
            href={site.emailHref}
            className="flex items-center gap-2 transition-colors hover:text-accent"
            aria-label={`Email ${site.email}`}
          >
            <Icon name="mail" className="h-4 w-4 text-accent" />
            <span className="font-jakarta">{site.email}</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        animate={{ boxShadow: scrolled ? '0 4px 12px rgba(20,31,78,0.08)' : '0 0 0 rgba(0,0,0,0)' }}
        className="sticky top-0 z-50 bg-white"
      >
        <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-3 px-6 py-4 sm:px-8">
          <Link href="/" aria-label={site.name} className="flex min-w-0 max-w-[58%] shrink items-center sm:max-w-none">
            <Image
              src="/logo.png"
              alt={site.name}
              width={320}
              height={130}
              priority
              className="h-11 w-auto max-h-14 max-w-full object-contain object-left md:h-20"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex items-center gap-1 px-3 py-2 font-jakarta text-sm font-medium transition-colors ${
                    active ? 'text-primary' : 'text-text-dark hover:text-primary'
                  }`}
                >
                  {item.label}
                  {item.children ? <Icon name="chevron-down" className="h-3.5 w-3.5" /> : null}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>

                {item.children ? (
                  <AnimatePresence>
                    {openDropdown === item.href ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full min-w-[220px] rounded-xl border border-border bg-white py-2 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 font-jakarta text-sm text-text-mid transition-colors hover:bg-primary-light hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                ) : null}
              </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-primary px-6 py-2.5 font-jakarta text-sm font-semibold text-white transition-colors hover:bg-primary-dark lg:inline-block"
            >
              Get Support
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded-full bg-primary p-2.5 text-white lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-primary-dark text-white lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 pt-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label={site.name}
                className="inline-flex items-center rounded-2xl bg-white px-4 py-2.5 shadow-soft"
              >
                <Image
                  src="/logo.png"
                  alt={site.name}
                  width={280}
                  height={114}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-5 pt-10" aria-label="Mobile">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-lora text-2xl font-semibold transition-colors ${
                      active ? 'text-accent' : 'hover:text-accent'
                    }`}
                  >
                    {item.label}
                    {active ? <span className="h-2 w-2 rounded-full bg-accent" /> : null}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 px-5 py-6">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 font-jakarta text-lg font-semibold"
              >
                <span className="rounded-full bg-accent p-2.5">
                  <Icon name="phone" className="h-5 w-5 text-white" />
                </span>
                {site.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 block w-full rounded-full bg-accent py-3.5 text-center font-jakarta font-semibold text-white"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
