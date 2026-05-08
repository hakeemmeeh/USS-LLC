# Partner Logos

Drop logo files for each partner / affiliation in this folder, then reference
them from `src/lib/content.ts` via the `logo` field on the corresponding
`Partner` entry, e.g.:

```ts
{ name: 'Minnesota DHS', logo: '/partners/mn-dhs.svg', href: 'https://mn.gov/dhs', width: 160 },
```

If `logo` is omitted, the carousel renders a refined typographic fallback for
that partner (their name in serif type), so you can ship without all logos in
place.

## Recommended file specs

- **Format:** SVG strongly preferred (lossless, scales). PNG with transparent
  background is fine. Avoid JPG — the white box ruins the look.
- **Color:** Use the official single-color or full-color version. The carousel
  applies a soft `grayscale + 60% opacity` filter that goes to full color on
  hover, so monochrome marks blend beautifully and brand colors pop on hover.
- **Height:** designed for ~40px tall. SVGs scale; for PNG, export at 80–96px
  height (2x) for retina sharpness.
- **Padding:** include ~8% transparent padding around the mark so logos don't
  visually collide during marquee scroll.
- **Filename:** lowercase kebab-case, e.g. `mn-dhs.svg`, `arc-mn.svg`.

## Important — only display logos you have permission to use

Displaying a third-party logo in a "partners" / "affiliations" section
implies a relationship. Only include logos for organizations you actually
partner with, are accredited by, are licensed by, or have explicit written
permission to display. In particular:

- **Minnesota DHS** — you are licensed by them (245D). Referring to your
  licensure is fine. Re-displaying their official logo on your site may have
  specific usage rules; check the MN DHS branding/communications guidelines
  before embedding the actual logo.
- **Government / charity logos** (USAID, UNICEF, UNHCR, etc.) — only display
  if you have a documented partnership and authorization. Otherwise leave
  them out — there's no upside to claiming a relationship you can't back up,
  and it creates legal risk.
- **Member orgs** (The Arc, ARRM, BIA-MN, etc.) — most member orgs have a
  member-badge or "we're a member" mark you can request.

When in doubt, stick to the typographic fallback — it still looks premium and
is fully truthful.
