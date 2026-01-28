/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/data/siteContent'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://atlantisfire.com'),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description}. We bring together regionally strong fire protection companies, preserving their local identity while empowering them with resources, expertise and long-term stability.`,
  keywords: [
    'fire protection',
    'fire safety',
    'fire alarm',
    'sprinkler systems',
    'fire protection company',
    'family-owned',
    'holding company',
    'fire protection services',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atlantisfire.com',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-avenir antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.name,
              description: siteConfig.description,
              url: 'https://atlantisfire.com',
              logo: 'https://atlantisfire.com/images/logo.png',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://atlantisfire.com/contact',
              },
              areaServed: 'United States',
              serviceType: [
                'Fire Protection Services',
                'Fire Alarm Systems',
                'Sprinkler Systems',
                'Fire Safety Consulting',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
