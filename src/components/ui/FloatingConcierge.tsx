'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/Icon';

export default function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    who: '',
    what: '',
    name: '',
    phone: '',
    email: '',
  });

  const handleSelect = (field: 'who' | 'what', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setStep((s) => s + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to API here
    setStep(4);
  };

  return (
    <div className="fixed right-3 z-50 flex w-[calc(100vw-1.5rem)] max-w-[360px] flex-col items-end bottom-[max(5.5rem,env(safe-area-inset-bottom)+4.5rem)] sm:bottom-6 sm:right-6 sm:w-auto sm:max-w-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-full max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-5 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close concierge"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
              <h3 className="font-lora text-xl font-bold">Care Concierge</h3>
              <p className="mt-1 font-jakarta text-xs text-white/80">
                Let&apos;s find the right support for you.
              </p>
            </div>

            {/* Body */}
            <div className="relative h-[280px] bg-surface/50 p-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-x-6 top-6"
                  >
                    <p className="mb-4 font-jakarta text-[15px] font-semibold text-text-dark">
                      Who are you seeking care for?
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {['Myself', 'A Loved One', 'A Client (Case Manager)'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('who', opt)}
                          className="w-full rounded-xl border border-border/60 bg-white px-4 py-3 text-left font-jakarta text-sm text-text-muted shadow-sm transition-all hover:border-primary hover:text-primary"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-x-6 top-6"
                  >
                    <button
                      onClick={() => setStep(1)}
                      className="mb-3 flex items-center gap-1 font-jakarta text-xs text-text-muted hover:text-primary"
                    >
                      <Icon name="chevron-left" className="h-3 w-3" /> Back
                    </button>
                    <p className="mb-4 font-jakarta text-[15px] font-semibold text-text-dark">
                      What type of support do you need?
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {['245D Services', 'PCA Services', "I'm not sure yet"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect('what', opt)}
                          className="w-full rounded-xl border border-border/60 bg-white px-4 py-3 text-left font-jakarta text-sm text-text-muted shadow-sm transition-all hover:border-primary hover:text-primary"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-x-6 top-6"
                  >
                    <button
                      onClick={() => setStep(2)}
                      className="mb-2 flex items-center gap-1 font-jakarta text-xs text-text-muted hover:text-primary"
                    >
                      <Icon name="chevron-left" className="h-3 w-3" /> Back
                    </button>
                    <p className="mb-4 font-jakarta text-[15px] font-semibold text-text-dark">
                      Where can we reach you?
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-3 py-2.5 font-jakarta text-sm outline-none focus:border-primary"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-3 py-2.5 font-jakarta text-sm outline-none focus:border-primary"
                      />
                      <button
                        type="submit"
                        className="mt-1 w-full rounded-lg bg-accent px-4 py-3 font-jakarta text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-dark"
                      >
                        Request Consultation
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-x-6 top-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Icon name="check" className="h-6 w-6" />
                    </div>
                    <p className="font-lora text-xl font-bold text-text-dark">Thank You!</p>
                    <p className="mt-2 font-jakarta text-sm text-text-muted">
                      We&apos;ve received your request and will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setTimeout(() => setStep(1), 300); // Reset after close animation
                      }}
                      className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 font-jakarta text-sm font-semibold text-white"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-[0_8px_30px_rgba(232,160,32,0.4)] transition-colors hover:bg-accent-dark"
        aria-label="Open care concierge"
      >
        <Icon 
          name={isOpen ? 'x' : 'heart-handshake'} 
          className="h-7 w-7 text-white transition-transform group-hover:scale-110" 
        />
      </motion.button>
    </div>
  );
}
