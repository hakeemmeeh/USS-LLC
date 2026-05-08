import type { Metadata } from 'next';
import HeroPreviewLab from '@/components/preview/HeroPreviewLab';

export const metadata: Metadata = {
  title: 'Hero concepts (preview)',
  description: 'Internal preview of USS homepage hero layout options.',
  robots: { index: false, follow: false },
};

export default function HeroPreviewPage() {
  return <HeroPreviewLab />;
}
