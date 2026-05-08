export const site = {
  name: 'United Social Services, LLC',
  shortName: 'USS',
  tagline: 'Empowering Communities, Enhancing Lives',
  sub: 'Supporting Independence. Promoting Dignity. Strengthening Communities.',
  phone: '651-600-1666',
  phoneHref: 'tel:6516001666',
  email: 'info@unitedsocialservices.com',
  emailHref: 'mailto:info@unitedsocialservices.com',
  address: 'Serving Minnesota Communities',
  established: '2021',
};

export type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  image: string;
};

export const services: ServiceItem[] = [
  {
    slug: '245d-basic',
    title: '245D Basic Support',
    desc: 'Individualized support focused on independence, safety, and community participation for eligible waiver recipients.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&q=80',
  },
  {
    slug: '245d-intensive',
    title: '245D Intensive Support',
    desc: 'Specialized services for individuals with higher or more complex support needs under MN chapter 245D licensing.',
    icon: 'heart-handshake',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
  },
  {
    slug: 'pca',
    title: 'Personal Care Assistance',
    desc: 'Daily activity assistance helping individuals remain safely in their homes based on assessed needs.',
    icon: 'user-check',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    slug: 'homemaker',
    title: 'Homemaker Support',
    desc: 'Help with household tasks and routines that enable a safe, clean, and comfortable home environment.',
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
  },
  {
    slug: 'respite',
    title: 'Respite Care',
    desc: 'Temporary relief for primary caregivers while ensuring continuity of quality care for the individual.',
    icon: 'refresh-cw',
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=400&q=80',
  },
  {
    slug: 'community-living',
    title: 'Community Living Support',
    desc: 'Building life skills, maintaining routines, and participating more fully in home and community activities.',
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80',
  },
];

export const waivers = [
  {
    code: 'BI',
    name: 'Brain Injury',
    desc: 'For individuals with acquired brain injuries living independently in the community.',
  },
  {
    code: 'CAC',
    name: 'Community Alternative Care',
    desc: 'For those who would otherwise require nursing facility level of care.',
  },
  {
    code: 'CADI',
    name: 'Community Access for Disability Inclusion',
    desc: 'For people with physical disabilities under 65 seeking independence.',
  },
  {
    code: 'DD',
    name: 'Developmental Disabilities',
    desc: 'For individuals with developmental disabilities needing community support.',
  },
];

export type Stat = {
  value: string;
  label: string;
  icon: string;
  countTo?: number;
  countSuffix?: string;
  countPrefix?: string;
};

export const stats: Stat[] = [
  { value: '245D', label: 'Licensed by MN DHS', icon: 'shield-check' },
  {
    value: '4',
    label: 'HCBS Waivers Served',
    icon: 'check-circle',
    countTo: 4,
  },
  {
    value: '100%',
    label: 'Person-Centered Plans',
    icon: 'user-circle',
    countTo: 100,
    countSuffix: '%',
  },
  { value: '24/7', label: 'Family Support Line', icon: 'phone' },
];

export const values = [
  {
    icon: 'user-circle',
    title: 'Person-Centered Care',
    desc: "Every service plan is tailored to the individual's unique goals, preferences, and needs.",
  },
  {
    icon: 'shield-check',
    title: 'Qualified & Compassionate Staff',
    desc: 'Dependable, respectful, professional care that promotes confidence and stability.',
  },
  {
    icon: 'building-2',
    title: 'Community Integration',
    desc: 'We support people to build skills and participate fully in their homes and communities.',
  },
  {
    icon: 'handshake',
    title: 'Collaboration & Accountability',
    desc: 'Strong communication with families, case managers, and referral partners.',
  },
];

export const steps = [
  {
    n: '01',
    title: 'Make an Inquiry',
    desc: 'Reach out by phone, email, or our contact form. We listen and answer your questions.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  },
  {
    n: '02',
    title: 'Build Your Support Plan',
    desc: 'We work with you, your family, and case manager to create a personalized plan.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
  {
    n: '03',
    title: 'Start Receiving Support',
    desc: 'Our qualified staff delivers consistent, compassionate care on your terms.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
  },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Family Member',
    stars: 5,
    quote:
      "United Social Services changed our family's life. Professional, caring, and always going the extra mile.",
  },
  {
    name: 'James T.',
    role: 'PCA Recipient',
    stars: 5,
    quote:
      'They actually listen and build the plan around my goals. I feel genuinely respected and supported.',
  },
  {
    name: 'Linda K.',
    role: 'Case Manager',
    stars: 5,
    quote:
      "I've referred several clients and families are always satisfied. Great communication and follow-through.",
  },
];

export const articles = [
  {
    title: 'Understanding 245D Licensing in Minnesota',
    cat: '245D Services',
    img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
  },
  {
    title: 'How PCA Services Support Independent Living',
    cat: 'PCA Services',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    title: 'Navigating HCBS Waivers: BI, CAC, CADI & DD Explained',
    cat: 'Resources',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
  },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Core Values', href: '/about#values' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: '245D HCBS Services', href: '/services#hcbs' },
      { label: 'Personal Care Assistance', href: '/services#pca' },
    ],
  },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
];

export type Partner = {
  name: string;
  /**
   * Path to the logo file in /public — e.g. '/partners/mn-dhs.svg'.
   * If omitted the carousel renders a refined typographic fallback.
   * Drop your own logos in /public/partners/ — only display logos
   * you have authorization to use.
   */
  logo?: string;
  href?: string;
  /** Render width hint for the Image component (height auto). */
  width?: number;
};

export const partners: Partner[] = [
  { name: 'Minnesota DHS', href: 'https://mn.gov/dhs', width: 160 },
  { name: 'Minnesota Disability Hub', href: 'https://disabilityhubmn.org', width: 180 },
  { name: 'Brain Injury Alliance of MN', href: 'https://braininjurymn.org', width: 200 },
  { name: 'The Arc Minnesota', href: 'https://arcminnesota.org', width: 160 },
  { name: 'ARRM', href: 'https://arrm.org', width: 110 },
  { name: 'MN Council on Disability', href: 'https://disability.state.mn.us', width: 200 },
  { name: 'DD Council MN', href: 'https://mncdd.org', width: 160 },
  { name: 'MN Department of Health', href: 'https://health.state.mn.us', width: 200 },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: 'What does it mean that USS is a 245D licensed provider?',
    a: 'Minnesota chapter 245D is the state licensing standard for Home and Community-Based Services (HCBS). Being licensed means we are authorized by the Minnesota Department of Human Services to deliver Basic and Intensive Support Services to eligible waiver recipients, and that we follow standards for staff qualifications, person-centered planning, rights protection, and incident reporting.',
  },
  {
    q: 'Which Minnesota waiver programs do you serve?',
    a: 'We serve recipients on the BI (Brain Injury), CAC (Community Alternative Care), CADI (Community Access for Disability Inclusion), and DD (Developmental Disabilities) waivers. We also support Personal Care Assistance (PCA) recipients authorized through Minnesota DHS.',
  },
  {
    q: 'How do I get started or refer someone?',
    a: 'You can call us at 651-600-1666, email us, or use the contact form. We will listen, answer your questions, and coordinate intake with you, your family, and your case manager. There is no charge to inquire.',
  },
  {
    q: 'Do you accept clients who do not yet have a case manager?',
    a: 'Yes. If you are exploring options, we can help you understand next steps and connect you with resources to determine eligibility and identify a lead agency or case manager.',
  },
  {
    q: 'Does insurance or Medicaid cover your services?',
    a: 'Our 245D and PCA services are funded through Minnesota DHS programs and the HCBS waivers we serve. We do not bill clients directly. Specific authorizations are determined by your case manager, lead agency, and assessment.',
  },
  {
    q: 'How are care plans created?',
    a: 'Every plan is built collaboratively. We listen to the person we serve and the people who matter to them, review assessments and goals, and document a plan that reflects choice, safety, and meaningful community participation. Plans are reviewed and updated regularly.',
  },
  {
    q: 'Are your staff trained and qualified?',
    a: 'Yes. All staff complete the training, background studies, and supervision required by Minnesota 245D and PCA standards. We hire for compassion as well as competency, and we invest in ongoing training.',
  },
  {
    q: 'What service areas do you cover in Minnesota?',
    a: 'We support clients across Minnesota. Coverage and timing depend on staffing capacity in your area — please reach out and we will tell you exactly what we can offer.',
  },
];

export const credentials: { label: string; value: string; icon: string }[] = [
  { label: 'Minnesota DHS License', value: '245D Licensed Provider', icon: 'shield-check' },
  { label: 'HCBS Waivers Served', value: 'BI · CAC · CADI · DD', icon: 'check-circle' },
  { label: 'Service Type', value: 'Basic, Intensive & PCA', icon: 'heart-handshake' },
  { label: 'Coverage', value: 'Statewide Minnesota', icon: 'map-pin' },
  { label: 'Compliance', value: 'HIPAA &amp; MN DHS Standards', icon: 'shield-check' },
  { label: 'Background Studies', value: 'All Staff Cleared', icon: 'user-check' },
];

export const tabContent = [
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
    img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=85',
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
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85',
  },
];
