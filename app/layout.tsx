import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://caffarenaeventos.cl'),
  title: {
    default: 'Caffarena Eventos | Celebraciones Extraordinarias en O\'Higgins',
    template: '%s | Caffarena Eventos',
  },
  description: 'Caffarena Eventos: el lugar más exclusivo para matrimonios, graduaciones y eventos corporativos en la Región de O\'Higgins. Una hacienda contemporánea rodeada de naturaleza donde cada celebración se transforma en un recuerdo inolvidable.',
  keywords: [
    'lugares para matrimonios en Rancagua',
    'centro de eventos O\'Higgins',
    'matrimonios en O\'Higgins',
    'salón de eventos Rancagua',
    'graduaciones Rancagua',
    'eventos corporativos O\'Higgins',
    'matrimonios al aire libre Chile',
    'venue matrimonio exclusivo',
    'hacienda eventos Chile',
  ],
  authors: [{ name: 'Caffarena Eventos' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    siteName: 'Caffarena Eventos',
    title: 'Caffarena Eventos | Celebraciones Extraordinarias en O\'Higgins',
    description: 'Una hacienda contemporánea rodeada de naturaleza donde cada celebración se transforma en un recuerdo inolvidable.',
    images: [
      {
        url: '/images/hero-venue.png',
        width: 1200,
        height: 630,
        alt: 'Caffarena Eventos - Venue premium en O\'Higgins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caffarena Eventos | Celebraciones Extraordinarias',
    description: 'Una hacienda contemporánea rodeada de naturaleza donde cada celebración se transforma en un recuerdo inolvidable.',
    images: ['/images/hero-venue.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EventVenue',
              name: 'Caffarena Eventos',
              description: 'Hacienda contemporánea rodeada de naturaleza, especializada en matrimonios, graduaciones y eventos corporativos en O\'Higgins, Chile.',
              url: 'https://caffarenaeventos.cl',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'O\'Higgins',
                addressCountry: 'CL',
              },
              maximumAttendeeCapacity: 300,
              image: 'https://caffarenaeventos.cl/images/hero-venue.png',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-graphite">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
