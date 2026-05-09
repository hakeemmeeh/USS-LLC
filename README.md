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

### Vercel (recommended — GitHub)

Your repo: [github.com/hakeemmeeh/USS-LLC](https://github.com/hakeemmeeh/USS-LLC).

1. Sign in at [vercel.com](https://vercel.com) (GitHub login is fine).
2. **Add New… → Project** → **Import** `hakeemmeeh/USS-LLC`.
3. Leave defaults: **Framework Preset: Next.js**, **Root Directory:** `./`, **Build:** `next build`, **Output:** (auto).
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = your live URL (use `https://<project>.vercel.app` until you attach a custom domain).
5. Click **Deploy**. Future pushes to `main` deploy automatically.

Optional: set the same `NEXT_PUBLIC_SITE_URL` under **Production** vs **Preview** if you use a custom domain only in production.

### CLI (from your machine)

```bash
npm i -g vercel
vercel login
cd /path/to/uss-llc
vercel        # first time: link project
vercel --prod # production deploy
```

### Other hosts

Any Node host that supports Next.js works. Set `NEXT_PUBLIC_SITE_URL` to the public site URL for correct canonical links, Open Graph, and sitemap.

## License

Private — All rights reserved by United Social Services, LLC unless otherwise agreed.
