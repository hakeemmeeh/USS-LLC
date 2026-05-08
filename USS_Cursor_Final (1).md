# United Social Services LLC — Website Build Prompt
# For Cursor AI — Final Version

---

## OBJECTIVE
Build a website for **United Social Services, LLC** that is a **near-exact structural and visual replica of https://wp.xpressbuddy.com/sunnyaid/** — same section order, same layout patterns, same component shapes — but with:
- USS brand colors (navy `#1C2D6E` + amber `#E8A020`) instead of Sunnyaid's green
- USS content and logo instead of Sunnyaid's content
- Next.js 14 + TypeScript + Tailwind + Framer Motion instead of WordPress

**Open https://wp.xpressbuddy.com/sunnyaid/ in a browser tab while building. Every section below maps directly to a section on that page.**

---

## STACK
- Next.js 14 App Router, TypeScript
- Tailwind CSS with custom config below
- Framer Motion for all animations
- Lucide React for icons
- React Hook Form for contact/referral forms
- Google Fonts: `Plus Jakarta Sans` (body) + `Lora` (headings)
- No UI libraries — everything custom

---

## BRAND COLORS (extracted from USS logo)

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#1C2D6E',   // deep navy — main brand color from logo
    dark:    '#141F4E',   // darker navy — footer, CTA dark sections
    mid:     '#2A3F8F',   // medium navy — gradients, hover states  
    light:   '#E8EBF8',   // very light navy tint — section backgrounds
  },
  accent: {
    DEFAULT: '#E8A020',   // warm amber/gold — CTAs, highlights, icons
    dark:    '#C4871A',   // amber hover
    light:   '#FEF5E6',   // soft amber tint
  },
  surface:    '#F8F9FF',   // near-white with cool tint — default page bg
  'text-dark':'#0F1A3E',   // near-black navy — body text
  'text-mid': '#2D3F6B',   // medium navy — subheadings
  'text-muted':'#5A6A8A',  // muted navy-gray — secondary text
  border:     '#D0D8F0',   // light navy border
}
fontFamily: {
  jakarta: ['var(--font-jakarta)', 'sans-serif'],
  lora:    ['var(--font-lora)', 'serif'],
}
```

---

## LOGO
- File: `/public/logo.png` (copy the uploaded logo there)
- Always use `<Image src="/logo.png" alt="United Social Services LLC" />`
- On **light backgrounds**: use as-is (navy on white)
- On **dark navy backgrounds** (footer, mobile menu, CTA band): add `className="brightness-0 invert"` to make it white
- Navbar size: `h-14 w-auto`
- Footer size: `h-12 w-auto`
- Never recreate the logo in text/HTML

---

## FONTS SETUP (app/layout.tsx)
```typescript
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
const jakarta = Plus_Jakarta_Sans({ subsets:['latin'], variable:'--font-jakarta', weight:['400','500','600','700','800'] })
const lora = Lora({ subsets:['latin'], variable:'--font-lora', weight:['400','500','600','700'], style:['normal','italic'] })
// apply both variables to <html> element
```

---

## GLOBAL STYLES (app/globals.css)
```css
body { background: #F8F9FF; color: #0F1A3E; font-family: var(--font-jakarta); }
h1, h2, h3 { font-family: var(--font-lora); }

/* Sunnyaid-style section eyebrow */
.eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-jakarta); font-size: 13px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: #E8A020; margin-bottom: 12px;
}
.eyebrow::before {
  content: ''; display: block; width: 24px; height: 2px; background: #E8A020;
}

/* Dot pattern background (used in hero) */
.dot-pattern {
  background-image: radial-gradient(#D0D8F0 1px, transparent 1px);
  background-size: 24px 24px;
}
```

---

## CONTENT FILE (/src/lib/content.ts)
```typescript
export const site = {
  name: 'United Social Services, LLC',
  tagline: 'Empowering Communities, Enhancing Lives',
  sub: 'Supporting Independence. Promoting Dignity. Strengthening Communities.',
  phone: '651-600-1666',
  email: '',
  address: 'Serving Minnesota Communities',
}

export const services = [
  { title: '245D Basic Support', desc: 'Individualized support focused on independence, safety, and community participation for eligible waiver recipients.', icon: 'home' },
  { title: '245D Intensive Support', desc: 'Specialized services for individuals with higher or more complex support needs under MN chapter 245D licensing.', icon: 'heart-handshake' },
  { title: 'Personal Care Assistance', desc: 'Daily activity assistance helping individuals remain safely in their homes based on assessed needs.', icon: 'user-check' },
  { title: 'Homemaker Support', desc: 'Help with household tasks and routines that enable a safe, clean, and comfortable home environment.', icon: 'sparkles' },
  { title: 'Respite Care', desc: 'Temporary relief for primary caregivers while ensuring continuity of quality care for the individual.', icon: 'refresh-cw' },
  { title: 'Community Living Support', desc: 'Building life skills, maintaining routines, and participating more fully in home and community activities.', icon: 'users' },
]

export const waivers = [
  { code:'BI',   name:'Brain Injury',                        desc:'For individuals with acquired brain injuries living independently in the community.' },
  { code:'CAC',  name:'Community Alternative Care',          desc:'For those who would otherwise require nursing facility level of care.' },
  { code:'CADI', name:'Community Access for Disability Inclusion', desc:'For people with physical disabilities under 65 seeking independence.' },
  { code:'DD',   name:'Developmental Disabilities',          desc:'For individuals with developmental disabilities needing community support.' },
]

export const stats = [
  { value:'245D', label:'Licensed by MN DHS' },
  { value:'4',    label:'Waiver Programs Served' },
  { value:'100%', label:'Person-Centered Plans' },
  { value:'MN',   label:'Statewide Coverage' },
]

export const values = [
  { icon:'user-circle',  title:'Person-Centered Care',          desc:'Every service plan is tailored to the individual\'s unique goals, preferences, and needs.' },
  { icon:'shield-check', title:'Qualified & Compassionate Staff',desc:'Dependable, respectful, professional care that promotes confidence and stability.' },
  { icon:'building',     title:'Community Integration',          desc:'We support people to build skills and participate fully in their homes and communities.' },
  { icon:'handshake',    title:'Collaboration & Accountability', desc:'Strong communication with families, case managers, and referral partners.' },
]

export const steps = [
  { n:'01', title:'Make an Inquiry',        desc:'Reach out by phone, email, or our contact form. We listen and answer your questions.' },
  { n:'02', title:'Build Your Support Plan',desc:'We work with you, your family, and case manager to create a personalized plan.' },
  { n:'03', title:'Start Receiving Support',desc:'Our qualified staff delivers consistent, compassionate care on your terms.' },
]

export const testimonials = [
  { name:'Sarah M.', role:'Family Member',  stars:5, quote:'United Social Services changed our family\'s life. Professional, caring, and always going the extra mile.' },
  { name:'James T.', role:'PCA Recipient',  stars:5, quote:'They actually listen and build the plan around my goals. I feel genuinely respected and supported.' },
  { name:'Linda K.', role:'Case Manager',   stars:5, quote:'I\'ve referred several clients and families are always satisfied. Great communication and follow-through.' },
]

export const articles = [
  { title:'Understanding 245D Licensing in Minnesota',               cat:'245D Services',  img:'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80' },
  { title:'How PCA Services Support Independent Living',             cat:'PCA Services',   img:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80' },
  { title:'Navigating HCBS Waivers: BI, CAC, CADI & DD Explained', cat:'Resources',       img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80' },
]

export const nav = [
  { label:'Home',         href:'/' },
  { label:'About Us',     href:'/about',         children:[{label:'Mission & Vision',href:'/about#mission'},{label:'Core Values',href:'/about#values'}] },
  { label:'Services',     href:'/services',      children:[{label:'245D HCBS Services',href:'/services#hcbs'},{label:'Personal Care Assistance',href:'/services#pca'}] },
  { label:'Who We Serve', href:'/who-we-serve' },
  { label:'Why Choose Us',href:'/why-choose-us' },
  { label:'Contact',      href:'/contact' },
]
```

---

# SECTION-BY-SECTION BUILD — MIRROR SUNNYAID EXACTLY

## ─────────────────────────────────────
## SECTION 0: NAVBAR
## Reference: Top of https://wp.xpressbuddy.com/sunnyaid/
## ─────────────────────────────────────

Sunnyaid has two rows: a thin top bar + the main navbar.

**Top bar** (`bg-primary-dark text-white text-sm py-2`):
```
LEFT:  📞 651-600-1666
RIGHT: 📧 info@unitedsocialservices.com
```

**Main Navbar** (`bg-white sticky top-0 z-50 shadow-sm`):
- Logo image (left) — `h-14 w-auto`
- Nav links (center) — `font-jakarta font-medium text-sm text-text-dark hover:text-primary transition-colors`
- Dropdown menus: white card `rounded-xl shadow-xl border border-border py-2`, each item `px-4 py-2.5 hover:bg-primary-light hover:text-primary`
- CTA button (right): `bg-primary text-white font-jakarta font-semibold text-sm rounded-full px-6 py-2.5 hover:bg-primary-dark`
  Label: "Get Support"

**Mobile** (`lg:hidden`):
- Hamburger icon (Lucide `Menu`) — opens full-screen overlay
- Overlay: `bg-primary-dark` navy, white text, logo top-center (inverted), all nav links stacked, phone number at bottom
- Close button top-right
- Framer Motion: `x: -full` → `x: 0` slide-in

**Scroll behavior:** Add `useScroll` — when scrolled > 80px, add `shadow-md` via Framer Motion

---

## ─────────────────────────────────────
## SECTION 1: HERO
## Reference: First full section at top of Sunnyaid homepage
## ─────────────────────────────────────

Sunnyaid hero: two columns, left = text + stats badges, right = large image with floating shape decorations + small floating cards. Dark background text, image has rounded corners with shapes behind it.

**Implement exactly:**

```jsx
// Layout
<section className="bg-surface dot-pattern min-h-[90vh] flex items-center py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

    {/* LEFT COLUMN */}
    <div>
      {/* Eyebrow — Sunnyaid has a small label pill above headline */}
      <span className="eyebrow">Minnesota 245D & PCA Services</span>

      {/* Headline — Sunnyaid uses large bold heading, 2 lines */}
      <h1 className="font-lora font-bold text-text-dark text-[52px] leading-[1.15] mb-6">
        Empowering <span className="text-primary">Communities,</span><br/>
        Enhancing Lives
      </h1>

      {/* Subtext */}
      <p className="font-jakarta text-text-muted text-lg leading-relaxed mb-8 max-w-[480px]">
        Person-centered home and community-based support services helping
        individuals live safely, independently, and with dignity.
      </p>

      {/* Two CTAs side by side — exactly like Sunnyaid */}
      <div className="flex gap-4 mb-10">
        <Link href="/contact" className="bg-primary text-white font-jakarta font-semibold rounded-full px-7 py-3.5 hover:bg-primary-dark transition-all">
          Get Started
        </Link>
        <Link href="/about" className="border-2 border-primary text-primary font-jakarta font-semibold rounded-full px-7 py-3.5 hover:bg-primary hover:text-white transition-all">
          About Us
        </Link>
      </div>

      {/* Sunnyaid has two small floating stat badges below the CTAs */}
      <div className="flex gap-4">
        {/* Badge 1 */}
        <div className="bg-white rounded-2xl shadow-md px-5 py-3 flex items-center gap-3 border border-border">
          <div className="bg-primary-light rounded-xl p-2">
            <ShieldCheck className="text-primary w-5 h-5" />
          </div>
          <div>
            <div className="font-lora font-bold text-text-dark text-xl">245D</div>
            <div className="font-jakarta text-text-muted text-xs">Licensed Provider</div>
          </div>
        </div>
        {/* Badge 2 */}
        <div className="bg-white rounded-2xl shadow-md px-5 py-3 flex items-center gap-3 border border-border">
          <div className="bg-accent-light rounded-xl p-2">
            <UserCheck className="text-accent w-5 h-5" />
          </div>
          <div>
            <div className="font-lora font-bold text-text-dark text-xl">PCA</div>
            <div className="font-jakarta text-text-muted text-xs">Certified Services</div>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN — image with Sunnyaid-style decorative shapes */}
    <div className="relative">
      {/* Decorative shapes BEHIND image — like Sunnyaid's hero shapes */}
      <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary-light rounded-full opacity-60 -z-10" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent-light rounded-full opacity-60 -z-10" />
      <div className="absolute top-1/2 -right-4 w-24 h-24 bg-primary-light rounded-full opacity-40 -z-10" />

      {/* Main hero image */}
      <Image
        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=85"
        alt="Caregiver supporting a client"
        width={600} height={680}
        className="rounded-3xl object-cover w-full h-[580px] relative z-10 shadow-2xl"
      />

      {/* Sunnyaid has a small floating rating card bottom-left of image */}
      <div className="absolute bottom-8 -left-6 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border">
        <div className="flex items-center gap-2">
          <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}</div>
        </div>
        <div className="font-jakarta font-semibold text-text-dark text-sm mt-0.5">Trusted by Families</div>
        <div className="font-jakarta text-text-muted text-xs">Across Minnesota</div>
      </div>

      {/* Sunnyaid has a second small badge top-right */}
      <div className="absolute top-8 -right-4 z-20 bg-primary rounded-2xl shadow-xl px-4 py-3 text-white">
        <div className="font-lora font-bold text-2xl">MN</div>
        <div className="font-jakarta text-blue-200 text-xs">Statewide</div>
      </div>
    </div>
  </div>
</section>
```

**Framer Motion on hero:**
- Left column: `initial={{ opacity:0, y:40 }}` → `animate={{ opacity:1, y:0 }}` staggered children 0.15s each
- Right image: `initial={{ opacity:0, scale:0.95 }}` → `animate={{ opacity:1, scale:1 }}` 0.8s ease

---

## ─────────────────────────────────────
## SECTION 2: STATS BAR
## Reference: Sunnyaid's dark funfact/counter band
## ─────────────────────────────────────

Sunnyaid has a full-width dark band with 4 stats (icon + number + label) separated by dividers. Replicate exactly:

```jsx
<section className="bg-primary py-10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center py-4 px-6 text-center">
          {/* Icon — Sunnyaid has a small icon above the number */}
          <div className="bg-white/10 rounded-full p-3 mb-3">
            <CheckCircle className="text-accent w-6 h-6" />
          </div>
          {/* Big number/value */}
          <div className="font-lora font-bold text-white text-4xl mb-1">{s.value}</div>
          {/* Label */}
          <div className="font-jakarta text-blue-200 text-sm">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 3: ABOUT
## Reference: Sunnyaid "NDIS Disability Service Provider for 26 Years" section
## ─────────────────────────────────────

Sunnyaid layout: LEFT = large image block with smaller overlapping images, map card, review badges. RIGHT = eyebrow, headline, body, checklist, two CTAs.

**Implement exactly:**

```jsx
<section className="py-24 bg-surface">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT — image composition like Sunnyaid */}
    <div className="relative">
      {/* Main large image */}
      <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85"
        alt="USS caregiver and client" width={560} height={600}
        className="rounded-3xl object-cover w-full h-[520px] shadow-xl" />

      {/* Sunnyaid has a smaller overlapping image — place it bottom-right */}
      <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
        <Image src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80"
          alt="Team member" width={200} height={200} className="object-cover w-full h-full" />
      </div>

      {/* Sunnyaid has review/rating badges overlaid on image */}
      <div className="absolute top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-border">
        <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 fill-accent text-accent"/>)}</div>
        <div className="font-jakarta font-semibold text-text-dark text-sm">4.9/5 Rating</div>
        <div className="font-jakarta text-text-muted text-xs">100+ Families Served</div>
      </div>

      {/* Established badge — bottom left, like Sunnyaid's location card */}
      <div className="absolute -bottom-4 left-6 bg-primary text-white rounded-2xl shadow-xl px-5 py-3">
        <div className="font-lora font-bold text-xl">Est. 2021</div>
        <div className="font-jakarta text-blue-200 text-xs">Minnesota, USA</div>
      </div>
    </div>

    {/* RIGHT — text content */}
    <div>
      <span className="eyebrow">About United Social Services</span>
      <h2 className="font-lora font-bold text-text-dark text-4xl leading-tight mb-6">
        Compassionate, Person-Centered Care in Minnesota
      </h2>
      <p className="font-jakarta text-text-muted leading-relaxed mb-4">
        United Social Services, LLC is a Minnesota-based provider dedicated to helping individuals
        live safely, independently, and with dignity. We specialize in 245D services and Personal
        Care Assistance (PCA), serving people with disabilities, older adults, and individuals who
        need reliable daily support.
      </p>
      <p className="font-jakarta text-text-muted leading-relaxed mb-8">
        Our approach is built on compassion, professionalism, and respect for individual choice.
        We work closely with the people we serve, their families, case managers, and care partners.
      </p>

      {/* Checklist — Sunnyaid style with colored check icons */}
      <ul className="space-y-3 mb-10">
        {['245D Licensed by Minnesota DHS','Serving BI, CAC, CADI & DD Waiver Recipients','Personalized Support Plans for Every Individual','Collaborative Care with Families & Case Managers'].map(item => (
          <li key={item} className="flex items-center gap-3 font-jakarta text-text-dark">
            <div className="bg-accent-light rounded-full p-1 flex-shrink-0">
              <Check className="text-accent w-4 h-4" />
            </div>
            {item}
          </li>
        ))}
      </ul>

      {/* Two CTAs */}
      <div className="flex gap-4">
        <Link href="/about" className="bg-primary text-white rounded-full px-7 py-3.5 font-jakarta font-semibold hover:bg-primary-dark transition-all">
          Learn More
        </Link>
        <Link href="/contact" className="border-2 border-primary text-primary rounded-full px-7 py-3.5 font-jakarta font-semibold hover:bg-primary hover:text-white transition-all">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 4: PARTNERS STRIP
## Reference: Sunnyaid "Trusted by 500+ teams" logo strip
## ─────────────────────────────────────

```jsx
<section className="py-8 bg-primary-light border-y border-border overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
    <p className="font-jakarta text-text-muted text-sm">
      Collaborating with <strong className="text-primary">Minnesota's leading care ecosystem</strong>
    </p>
  </div>
  {/* Auto-scrolling marquee of partner name chips */}
  <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
    {['MN DHS','USAID','UNICEF','UNHCR','MN Health','CADI Network','Brain Injury Alliance MN','DD Council MN',
      'MN DHS','USAID','UNICEF','UNHCR','MN Health','CADI Network','Brain Injury Alliance MN','DD Council MN'].map((p,i) => (
      <span key={i} className="bg-white border border-border rounded-full px-5 py-2 font-jakarta font-semibold text-text-mid text-sm shadow-sm flex-shrink-0">
        {p}
      </span>
    ))}
  </div>
</section>
// Add to globals.css: @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
```

---

## ─────────────────────────────────────
## SECTION 5: SERVICES
## Reference: Sunnyaid "what we're offering / our main services" grid
## ─────────────────────────────────────

Sunnyaid services section: eyebrow + heading + 3-column card grid. Each card has an icon, title, description, image (shows on hover), and "Read More" link. Dark hover state reveals image.

```jsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
      <span className="eyebrow">What We're Offering</span>
      <h2 className="font-lora font-bold text-text-dark text-4xl">Our Main Support Services</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <ServiceCard key={i} service={s} />
      ))}
    </div>
  </div>
</section>
```

**ServiceCard component** (mirrors Sunnyaid service card exactly):
```jsx
// components/ui/ServiceCard.tsx
export function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-3xl p-8 border border-border overflow-hidden
                 hover:bg-primary hover:border-primary transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
    >
      {/* Icon */}
      <div className="bg-primary-light group-hover:bg-white/20 rounded-2xl p-4 inline-flex mb-5 transition-colors">
        {/* render Lucide icon by name */}
        <IconComponent name={service.icon} className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>

      {/* Title */}
      <h3 className="font-lora font-bold text-text-dark group-hover:text-white text-xl mb-3 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-jakarta text-text-muted group-hover:text-blue-200 text-sm leading-relaxed mb-6 transition-colors">
        {service.desc}
      </p>

      {/* Read More link */}
      <Link href={`/services#${service.slug}`}
        className="font-jakarta font-semibold text-primary group-hover:text-accent text-sm flex items-center gap-2 transition-colors">
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Sunnyaid has a service image that appears on hover — bottom right of card */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8, y: hovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden rounded-tl-3xl"
      >
        <Image src={`https://images.unsplash.com/photo-${serviceImages[i]}?w=200&q=80`}
          alt={service.title} width={128} height={128} className="object-cover w-full h-full opacity-60" />
      </motion.div>
    </div>
  )
}
```

---

## ─────────────────────────────────────
## SECTION 6: HOW IT WORKS
## Reference: Sunnyaid "Get started in just 3 steps" section
## ─────────────────────────────────────

Sunnyaid: **dark bg section**, 3 equal columns each with a large rounded image, a number badge top-right of image, title, description. Connecting dashed line between steps on desktop.

```jsx
<section className="py-24 bg-primary relative overflow-hidden">
  {/* Subtle background decoration */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="text-center mb-14">
      <span className="eyebrow">Our Working Process</span>
      <h2 className="font-lora font-bold text-white text-4xl">Get Started in Just 3 Steps</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Dashed connector line — desktop only */}
      <div className="hidden md:block absolute top-32 left-[25%] right-[25%] h-px border-t-2 border-dashed border-white/30 z-0" />

      {steps.map((step, i) => (
        <motion.div
          key={i}
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          className="relative z-10 text-center"
        >
          {/* Image with number badge — exactly like Sunnyaid */}
          <div className="relative inline-block mb-6">
            <Image
              src={stepImages[i]}
              alt={step.title}
              width={280} height={280}
              className="w-64 h-64 object-cover rounded-3xl mx-auto shadow-2xl"
            />
            {/* Step number badge — top right of image, like Sunnyaid */}
            <div className="absolute -top-3 -right-3 bg-accent text-white font-lora font-bold text-xl
                            w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              {step.n}
            </div>
          </div>

          <h3 className="font-lora font-bold text-white text-xl mb-3">{step.title}</h3>
          <p className="font-jakarta text-blue-200 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 7: SERVICE DETAIL TABS
## Reference: Sunnyaid "Getting started with a new plan" / tabs section
## ─────────────────────────────────────

Sunnyaid: side-by-side tabs on left, content + checklist on right (or left/right split). Tabs switch between service plans. Replicate:

```jsx
<section className="py-24 bg-primary-light">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
      <span className="eyebrow">How We Help</span>
      <h2 className="font-lora font-bold text-text-dark text-4xl">Our Core Service Areas</h2>
    </div>

    {/* Tab switcher — pill style */}
    <div className="flex justify-center gap-3 mb-12">
      {['245D Home & Community-Based Services', 'Personal Care Assistance (PCA)'].map((tab, i) => (
        <button key={i} onClick={() => setActiveTab(i)}
          className={`font-jakarta font-semibold text-sm rounded-full px-6 py-3 transition-all
            ${activeTab === i ? 'bg-primary text-white shadow-md' : 'bg-white text-text-muted border border-border hover:border-primary hover:text-primary'}`}>
          {tab}
        </button>
      ))}
    </div>

    {/* Tab content — two columns */}
    <AnimatePresence mode="wait">
      <motion.div key={activeTab} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.4 }}
        className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — text + checklist */}
        <div>
          <h3 className="font-lora font-bold text-text-dark text-2xl mb-4">{tabContent[activeTab].title}</h3>
          <p className="font-jakarta text-text-muted leading-relaxed mb-6">{tabContent[activeTab].body}</p>
          <ul className="space-y-3 mb-8">
            {tabContent[activeTab].points.map((p,i) => (
              <li key={i} className="flex items-start gap-3 font-jakarta text-text-dark text-sm">
                <CheckCircle className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
          <Link href="/services" className="bg-primary text-white rounded-full px-7 py-3.5 font-jakarta font-semibold hover:bg-primary-dark transition-all inline-flex items-center gap-2">
            View Full Service Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* RIGHT — image */}
        <Image src={tabContent[activeTab].img} alt={tabContent[activeTab].title}
          width={560} height={440} className="rounded-3xl object-cover w-full h-[400px] shadow-xl" />
      </motion.div>
    </AnimatePresence>
  </div>
</section>
```

Tab content data:
```typescript
const tabContent = [
  {
    title: '245D Home & Community-Based Services',
    body: 'Under chapter 245D licensing, United Social Services provides both Basic and Intensive Support Services. These individualized services are focused on independence, safety, and community participation for eligible Minnesota waiver recipients.',
    points: [
      'Basic support services for waiver-funded individuals',
      'Intensive support for higher or specialized needs',
      'Homemaker support and daily living assistance',
      'Respite care for families and primary caregivers',
      'Community access and participation support',
      'Person-centered planning aligned with individual goals',
    ],
    img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=85',
  },
  {
    title: 'Personal Care Assistance (PCA) Services',
    body: 'PCA services support seniors and people with disabilities who are living independently in the community. Minnesota DHS authorizes PCA based on assessed needs — helping individuals remain safely in their homes.',
    points: [
      'Assistance with Activities of Daily Living (ADLs)',
      'Bathing, dressing, grooming, and hygiene support',
      'Mobility assistance and transferring',
      'Medication reminders and health monitoring',
      'Meal preparation and nutritional support',
      'Light housekeeping and home safety tasks',
    ],
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85',
  },
]
```

---

## ─────────────────────────────────────
## SECTION 8: VALUES STRIP
## Reference: Sunnyaid "we're home care / Personal Care & Growth" highlight row
## ─────────────────────────────────────

Sunnyaid has a full-width dark band with 3 icon+text items. Replicate:

```jsx
<section className="bg-primary-dark py-10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
      {[
        { icon: <Heart />, title: 'Person-Centered Care', desc: 'Every plan built around the individual' },
        { icon: <ShieldCheck />, title: 'Qualified Support Staff', desc: 'Professional, compassionate, dependable' },
        { icon: <Users />, title: 'Community Integration', desc: 'Building independence and belonging' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4 py-4 px-6">
          <div className="bg-white/10 rounded-2xl p-4 flex-shrink-0">
            {React.cloneElement(item.icon, { className: 'text-accent w-7 h-7' })}
          </div>
          <div>
            <h4 className="font-lora font-bold text-white text-lg">{item.title}</h4>
            <p className="font-jakarta text-blue-200 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 9: TESTIMONIALS
## Reference: Sunnyaid "why clients love us" carousel
## ─────────────────────────────────────

Sunnyaid: `bg-white` section, carousel with photo, name, role, stars, quote, large decorative quote mark.

```jsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
      <span className="eyebrow">Our Testimonials</span>
      <h2 className="font-lora font-bold text-text-dark text-4xl">Why Families & Partners Choose Us</h2>
    </div>

    {/* Carousel — show 1 card on mobile, 3 on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div key={i} variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i}
          className="bg-primary-light rounded-3xl p-8 relative overflow-hidden border border-border">

          {/* Large decorative quote mark — like Sunnyaid */}
          <div className="absolute -top-4 -right-2 font-lora text-[120px] leading-none text-primary opacity-10 select-none">"</div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
          </div>

          {/* Quote */}
          <p className="font-lora italic text-text-dark leading-relaxed mb-6 relative z-10">"{t.quote}"</p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-lora font-bold text-white text-lg">{t.name[0]}</span>
            </div>
            <div>
              <div className="font-jakarta font-semibold text-text-dark">{t.name}</div>
              <div className="font-jakarta text-text-muted text-sm">{t.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 10: ARTICLES / RESOURCES
## Reference: Sunnyaid "browse our articles & resources"
## ─────────────────────────────────────

```jsx
<section className="py-24 bg-surface">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-end mb-12">
      <div>
        <span className="eyebrow">Resources & Updates</span>
        <h2 className="font-lora font-bold text-text-dark text-4xl">Helpful Articles & Resources</h2>
      </div>
      <Link href="/resources" className="font-jakarta font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all">
        View All <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((a, i) => (
        <motion.article key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}
          className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all group cursor-pointer">
          <div className="relative overflow-hidden h-52">
            <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <span className="bg-primary-light text-primary font-jakarta font-semibold text-xs rounded-full px-3 py-1 mb-3 inline-block">
              {a.cat}
            </span>
            <h3 className="font-lora font-bold text-text-dark text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {a.title}
            </h3>
            <span className="font-jakarta font-semibold text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 11: CTA BAND
## Reference: Sunnyaid bottom CTA with image, phone, schedule button
## ─────────────────────────────────────

Sunnyaid: dark section, large heading left, phone + CTA right, decorative image far right. Replicate exactly:

```jsx
<section className="bg-primary-dark py-20 overflow-hidden relative">
  {/* Decorative circle bg */}
  <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_auto_auto] gap-12 items-center relative z-10">
    {/* Left text */}
    <div>
      <span className="eyebrow">Get Started Today</span>
      <h2 className="font-lora font-bold text-white text-4xl leading-tight">
        Ready to Get the Support<br/>You Deserve?
      </h2>
      <p className="font-jakarta text-blue-200 mt-3">
        Schedule a free consultation. We're here to listen and help you find the right services.
      </p>
    </div>

    {/* Contact info — like Sunnyaid "need help" box */}
    <div className="bg-white/10 rounded-3xl p-6 border border-white/20 text-center min-w-[200px]">
      <div className="bg-accent rounded-2xl p-3 inline-flex mb-3">
        <Phone className="text-white w-6 h-6" />
      </div>
      <div className="font-jakarta text-blue-200 text-sm mb-1">Call Us Anytime</div>
      <a href="tel:6516001666" className="font-lora font-bold text-white text-xl hover:text-accent transition-colors">
        651-600-1666
      </a>
    </div>

    {/* CTA button box */}
    <div className="bg-accent rounded-3xl p-6 text-center min-w-[200px]">
      <div className="bg-white/20 rounded-2xl p-3 inline-flex mb-3">
        <Calendar className="text-white w-6 h-6" />
      </div>
      <div className="font-jakarta text-white/80 text-sm mb-3">Ready to start?</div>
      <Link href="/contact"
        className="bg-white text-accent font-jakarta font-bold rounded-full px-6 py-3 hover:bg-accent-light transition-all inline-block text-sm">
        Contact Us Today
      </Link>
    </div>
  </div>
</section>
```

---

## ─────────────────────────────────────
## SECTION 12: FOOTER
## Reference: Sunnyaid footer — 5 columns, dark bg, newsletter
## ─────────────────────────────────────

```jsx
<footer className="bg-primary-dark text-white">
  <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

    {/* Col 1 — Brand */}
    <div className="col-span-2 md:col-span-1">
      <Image src="/logo.png" alt="USS" width={180} height={56} className="h-14 w-auto brightness-0 invert mb-4" />
      <p className="font-jakarta text-blue-300 text-sm leading-relaxed mb-5">
        Empowering Communities, Enhancing Lives. Person-centered home and community-based care across Minnesota.
      </p>
      {/* Social icons */}
      <div className="flex gap-3">
        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="bg-white/10 hover:bg-accent rounded-full p-2 transition-colors">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>

    {/* Col 2 — Quick Links */}
    <div>
      <h4 className="font-jakarta font-semibold text-white text-sm uppercase tracking-widest mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {nav.map(l => <li key={l.href}><Link href={l.href} className="font-jakarta text-blue-300 hover:text-white text-sm transition-colors">{l.label}</Link></li>)}
      </ul>
    </div>

    {/* Col 3 — Our Services */}
    <div>
      <h4 className="font-jakarta font-semibold text-white text-sm uppercase tracking-widest mb-4">Our Services</h4>
      <ul className="space-y-2">
        {services.map(s => <li key={s.slug}><Link href={`/services#${s.slug}`} className="font-jakarta text-blue-300 hover:text-white text-sm transition-colors">{s.title}</Link></li>)}
      </ul>
    </div>

    {/* Col 4 — Waivers We Serve */}
    <div>
      <h4 className="font-jakarta font-semibold text-white text-sm uppercase tracking-widest mb-4">Waivers We Serve</h4>
      <ul className="space-y-2">
        {waivers.map(w => (
          <li key={w.code} className="font-jakarta text-blue-300 text-sm">
            <span className="text-accent font-semibold">{w.code}</span> — {w.name}
          </li>
        ))}
      </ul>
    </div>

    {/* Col 5 — Newsletter */}
    <div>
      <h4 className="font-jakarta font-semibold text-white text-sm uppercase tracking-widest mb-4">Stay Connected</h4>
      <p className="font-jakarta text-blue-300 text-sm mb-4">Get updates on services and community resources.</p>
      <div className="flex flex-col gap-2">
        <input type="email" placeholder="Your email address"
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 font-jakarta text-white text-sm placeholder-blue-300 focus:outline-none focus:border-accent" />
        <button className="bg-accent hover:bg-accent-dark text-white font-jakarta font-semibold text-sm rounded-xl py-2.5 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-white/10 py-5">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
      <p className="font-jakarta text-blue-300 text-sm">© 2025 United Social Services, LLC. All rights reserved.</p>
      <div className="flex gap-6">
        <Link href="/privacy" className="font-jakarta text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="font-jakarta text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</Link>
      </div>
    </div>
  </div>
</footer>
```

---

## FRAMER MOTION VARIANTS (put in /src/lib/animations.ts)

```typescript
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 }
  })
}
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 }
  })
}
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
// ALL scroll animations: viewport={{ once: true, margin: '-80px' }}
```

---

## INNER PAGES (build after homepage is complete)

### /about — mirrors Sunnyaid /about page
1. `bg-primary` page hero banner + breadcrumb
2. Mission block (`bg-primary text-white`) + Vision block (`bg-accent text-white`) side by side
3. Full story section — text left, image right
4. Core Values 4-card grid (`bg-white border border-border rounded-3xl`)
5. CTA Band (reuse component)

### /services — mirrors Sunnyaid /services
1. `bg-primary` page hero
2. Full 245D HCBS section — Basic + Intensive breakdown, examples list
3. Full PCA section
4. Services grid (reuse)
5. Waivers section — 4 expanded cards (BI, CAC, CADI, DD)
6. CTA Band

### /who-we-serve
1. `bg-primary` hero
2. Beneficiary type cards (disabilities, older adults, brain injury, families)
3. Waiver explainer cards — code badge, full name, who qualifies, what it covers
4. "Not sure?" inquiry CTA
5. CTA Band

### /why-choose-us
1. `bg-primary` hero
2. 4 pillars in alternating two-column sections (image left/right)
3. HowItWorks (reuse)
4. Testimonials (reuse)
5. CTA Band

### /contact
1. `bg-primary` hero: "Contact Us"
2. Two columns: left = contact info + map iframe, right = React Hook Form
   - Fields: Full Name, Email, Phone, Service Interest (dropdown: 245D Basic / 245D Intensive / PCA / Homemaker / Respite / Not Sure), Message, Submit
   - Submit button: `bg-primary rounded-full`
3. Case manager referral block: `bg-primary-light rounded-3xl` — "Are you a case manager or referral partner?" + contact prompt

---

## BUILD ORDER FOR CURSOR

```
1. npx create-next-app@latest united-social-services --typescript --tailwind --eslint --app --src-dir
2. npm install framer-motion lucide-react react-hook-form
3. Copy logo.png to /public/logo.png
4. Set up tailwind.config.ts (colors above)
5. Set up app/layout.tsx (fonts + Navbar + Footer)
6. Build Navbar.tsx
7. Build Footer.tsx
8. Build /src/lib/content.ts
9. Build /src/lib/animations.ts
10. Build homepage sections in order (HeroSection → StatsBar → AboutSection → PartnersStrip → ServicesSection → HowItWorks → ServiceDetails → ValuesStrip → TestimonialsSection → NewsSection → CTABand)
11. Build page.tsx composing all sections
12. Build inner pages: /about → /services → /who-we-serve → /why-choose-us → /contact
```

---

## HARD RULES FOR CURSOR

1. **Color is `#1C2D6E` navy** — not teal, not indigo-600, not blue-700. Exact hex only.
2. **Logo is always `<Image src="/logo.png" />`** — never text. On dark bg add `className="brightness-0 invert"`.
3. **Tagline is "Empowering Communities, Enhancing Lives"** — from the actual logo artwork.
4. **No lorem ipsum** — use content.ts for all text.
5. **No shadcn / Radix / MUI** — Tailwind + custom components only.
6. **`viewport={{ once: true }}`** on every scroll animation without exception.
7. **Follow Sunnyaid section order exactly** — do not add sections or reorder.
8. **Mobile-first** — every component must work at 375px.
9. **`next/image`** for every image — no `<img>` tags.
10. **Accessibility** — all images have `alt`, all buttons have `aria-label`, all form fields have `<label>`.
