import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    '',
    '/about',
    '/services',
    '/who-we-serve',
    '/why-choose-us',
    '/contact',
    '/resources',
    '/privacy',
    '/terms',
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path.startsWith('/services') || path.startsWith('/contact') ? 0.9 : 0.7,
  }));
}
