# United Social Services, LLC — Website

Marketing site for **United Social Services, LLC** (Minnesota 245D and PCA services), built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and React Hook Form.

## Requirements

- Node.js **18.18+** or **20.x** (LTS recommended)
- npm 9+

## Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local if you need a custom NEXT_PUBLIC_SITE_URL for local testing.
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | ESLint (Next.js config)  |
| `npm run typecheck` | TypeScript check, no emit |

## Project layout

- `src/app/` — routes, layouts, API route handlers
- `src/components/` — UI and section components
- `src/lib/` — shared content and helpers
- `public/` — static assets (`logo.png`, partner logo placeholders)

## Internal preview routes

- `/preview/heroes` — stacked hero layout experiments (optional; can be removed before launch).

## Push to GitHub

Create an empty repository on GitHub (no README/license if you already have them here), then:

```bash
git remote add origin https://github.com/YOUR_ORG/YOUR_REPO.git
git push -u origin main
```

Replace the URL with your repository. If GitHub creates `master` by default, either rename the default branch to `main` in the repo settings or run `git branch -M main` before the first push.

## Deploy

Compatible with [Vercel](https://vercel.com) or any Node host that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` in the hosting environment to your production domain.

## License

Private — All rights reserved by United Social Services, LLC unless otherwise agreed.
