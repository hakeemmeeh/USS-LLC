'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
        setTimeout(() => setDone(false), 4000);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email address"
        required
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 font-jakarta text-sm text-white placeholder-blue-300 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-xl bg-accent py-2.5 font-jakarta text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
      >
        {done ? 'Subscribed!' : 'Subscribe'}
      </button>
    </form>
  );
}
