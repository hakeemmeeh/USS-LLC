'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '@/components/ui/Icon';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot?: string;
};

const serviceOptions = [
  '245D Basic Support',
  '245D Intensive Support',
  'Personal Care Assistance',
  'Homemaker Support',
  'Respite Care',
  'Not Sure',
];

type Status = 'idle' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setStatus('idle');
    setServerError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 6000);
        return;
      }

      const payload = (await res.json().catch(() => null)) as
        | { errors?: Record<string, string>; error?: string }
        | null;

      if (payload?.errors) {
        Object.entries(payload.errors).forEach(([field, message]) => {
          setError(field as keyof FormValues, { type: 'server', message });
        });
      } else {
        setServerError(payload?.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('error');
    } catch {
      setServerError('Network error. Please try again or call us directly.');
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <h3 className="mb-2 font-lora text-2xl font-bold text-text-dark">Send Us a Message</h3>
      <p className="mb-6 font-jakarta text-sm text-text-muted">
        We respond promptly during business hours.
      </p>

      <div
        aria-hidden
        className="absolute h-0 w-0 overflow-hidden"
        style={{ position: 'absolute', left: '-9999px' }}
      >
        <label htmlFor="company-website">Company website</label>
        <input
          id="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            {...register('name', { required: 'Please enter your name' })}
            className={inputClass(errors.name)}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
            className={inputClass(errors.email)}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(651) 555-0100"
            {...register('phone', { required: 'Phone is required' })}
            className={inputClass(errors.phone)}
          />
        </Field>

        <Field label="Service Interest" htmlFor="service" error={errors.service?.message}>
          <select
            id="service"
            defaultValue=""
            {...register('service', { required: 'Please select a service' })}
            className={inputClass(errors.service)}
          >
            <option value="" disabled>
              Choose one
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message" htmlFor="message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us how we can help…"
            {...register('message', { required: 'Please add a brief message' })}
            className={inputClass(errors.message)}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-jakarta font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>

      {status === 'success' ? (
        <div
          role="status"
          className="mt-4 flex items-center gap-2 rounded-2xl bg-accent-light px-4 py-3 font-jakarta text-sm text-accent-dark"
        >
          <Icon name="check-circle" className="h-5 w-5" />
          Thank you — we&apos;ll be in touch shortly.
        </div>
      ) : null}

      {status === 'error' && serverError ? (
        <div
          role="alert"
          className="mt-4 flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 font-jakarta text-sm text-red-700"
        >
          <Icon name="x" className="h-5 w-5" />
          {serverError}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block font-jakarta text-sm font-medium text-text-mid">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block font-jakarta text-xs text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function inputClass(error: unknown) {
  return `w-full rounded-xl border bg-white px-4 py-2.5 font-jakarta text-sm text-text-dark placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
    error ? 'border-red-400' : 'border-border focus:border-primary'
  }`;
}
