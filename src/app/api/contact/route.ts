import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  honeypot?: unknown;
};

function isNonEmptyString(v: unknown, max = 1000): v is string {
  return typeof v === 'string' && v.trim().length > 0 && v.length <= max;
}

function isEmail(v: unknown): v is string {
  return isNonEmptyString(v, 200) && /^\S+@\S+\.\S+$/.test(v);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  if (typeof body.honeypot === 'string' && body.honeypot.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!isNonEmptyString(body.name, 120)) errors.name = 'Name is required';
  if (!isEmail(body.email)) errors.email = 'A valid email is required';
  if (!isNonEmptyString(body.phone, 40)) errors.phone = 'Phone is required';
  if (!isNonEmptyString(body.service, 120)) errors.service = 'Please select a service';
  if (!isNonEmptyString(body.message, 4000)) errors.message = 'Message is required';

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const submission = {
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    phone: (body.phone as string).trim(),
    service: (body.service as string).trim(),
    message: (body.message as string).trim(),
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') ?? '',
  };

  // Hand-off to the real notification provider goes here (Resend, SendGrid,
  // SES, Slack webhook, CRM, etc). Wire it up via environment variables —
  // for example:
  //
  //   await fetch('https://api.resend.com/emails', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       from: 'website@unitedsocialservices.com',
  //       to: process.env.CONTACT_INBOX!,
  //       subject: `New inquiry from ${submission.name}`,
  //       text: JSON.stringify(submission, null, 2),
  //     }),
  //   });
  //
  // Until that's configured we log server-side so the submission isn't lost.
  console.log('[contact] new submission', submission);

  return NextResponse.json({ ok: true });
}
