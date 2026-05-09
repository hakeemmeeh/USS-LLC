import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import ScrollProgress from '@/components/ui/ScrollProgress';
import MobileCallBar from '@/components/ui/MobileCallBar';
import FloatingConcierge from '@/components/ui/FloatingConcierge';
import { buildLocalBusinessJsonLd, SITE_URL } from '@/lib/seo';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'United Social Services, LLC | Empowering Communities, Enhancing Lives',
    template: '%s | United Social Services, LLC',
  },
  description:
    'Minnesota-based 245D and PCA provider delivering person-centered home and community-based services. Serving BI, CAC, CADI, and DD waiver recipients statewide.',
  keywords: [
    '245D Minnesota',
    'PCA Services',
    'Home Care Minnesota',
    'BI Waiver',
    'CADI Waiver',
    'Disability Services',
  ],
  openGraph: {
    type: 'website',
    siteName: 'United Social Services, LLC',
    locale: 'en_US',
    url: SITE_URL,
    title: 'United Social Services, LLC | Empowering Communities, Enhancing Lives',
    description:
      'Minnesota 245D & PCA provider — person-centered home and community-based care across Minnesota.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Social Services, LLC',
    description:
      'Minnesota 245D & PCA provider — person-centered home and community-based care.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C2D6E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${lora.variable}`}>
      <body className="min-h-screen min-w-0 overflow-x-clip bg-surface text-text-dark antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:font-jakarta focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="min-w-0">
          {children}
        </main>
        <Footer />
        <FloatingConcierge />
        <MobileCallBar />
        <JsonLd data={buildLocalBusinessJsonLd()} />
      </body>
    </html>
  );
}
