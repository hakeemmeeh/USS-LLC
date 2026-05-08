import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'United Social Services, LLC — Empowering Communities, Enhancing Lives';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(135deg, #1C2D6E 0%, #141F4E 60%, #2A3F8F 100%)',
          padding: 80,
          justifyContent: 'space-between',
          color: '#ffffff',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: '#E8A020',
              borderRadius: 999,
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#E8A020',
              fontWeight: 700,
            }}
          >
            United Social Services, LLC
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Empowering Communities, Enhancing Lives
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#D0D8F0',
              maxWidth: 900,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Minnesota 245D &amp; PCA Provider — person-centered home and community-based care.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 28,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div style={{ display: 'flex', gap: 24, fontSize: 22, color: '#D0D8F0' }}>
            <span>245D Licensed</span>
            <span>BI · CAC · CADI · DD</span>
            <span>PCA</span>
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#E8A020',
              fontWeight: 700,
            }}
          >
            unitedsocialservices.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
