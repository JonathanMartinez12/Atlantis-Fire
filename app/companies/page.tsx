import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { brandLogos } from '@/lib/data/companies'
import { homeContent, companiesContent } from '@/lib/data/siteContent'

export const metadata: Metadata = {
  title: 'Our Portfolio | Atlantis Fire Protection Companies',
  description:
    'Discover our portfolio of proven fire protection companies including Allied Fire Protection, McCoy Fire, and Keller\'s. Each company brings decades of expertise and strong regional reputations.',
  openGraph: {
    title: 'Our Portfolio | Atlantis Fire Protection Companies',
    description:
      'Discover our portfolio of proven fire protection companies with decades of expertise.',
    url: 'https://atlantisfire.com/companies',
    images: [
      {
        url: '/images/og-companies.png',
        width: 1200,
        height: 630,
        alt: 'Atlantis Fire Protection Portfolio Companies',
      },
    ],
  },
}

export default function CompaniesPage() {
  const { whoWeAre, whyAtlantis, portfolio } = homeContent

  return (
    <>
      {/* OUR PORTFOLIO Section - Light Blue Background */}
      <section className="bg-[#e5eef8]" style={{ minHeight: '180px' }}>
        <div className="max-w-[1440px] mx-auto px-4 py-[55px]">
          {/* Section Label - Avenir Bold 18pt ALL CAPS */}
          <div className="mb-8">
            <p
              className="avenir-label text-navy"
              style={{
                width: '196.67px',
                height: '40px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              OUR PORTFOLIO
            </p>
          </div>

          {/* Company Logos Row */}
          <div
            className="flex items-center justify-start gap-16 flex-wrap"
            style={{ maxWidth: '1280px' }}
          >
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center"
                style={{
                  width: brand.name === "Keller's" ? '195.11px' : '120px',
                  height: '120px'
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.name === "Keller's" ? 195 : 120}
                  height={120}
                  className="object-contain max-h-[120px]"
                />
              </div>
            ))}
          </div>

          {/* Total Combined Experience Section */}
          <div className="mt-16">
            {/* Section Label - Avenir Bold 18pt ALL CAPS */}
            <p
              className="avenir-label text-navy mb-4"
              style={{
                height: '40px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {portfolio.stats.title.toUpperCase()}
            </p>

            {/* Description Text - Palatino 18pt */}
            <p
              className="palatino-body text-gray-700"
              style={{ maxWidth: '800px' }}
            >
              {portfolio.stats.text}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Cream Background */}
      <section className="bg-cream" style={{ minHeight: '624px', paddingTop: '55px', paddingBottom: '55px' }}>
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Image Placeholder - Left Side */}
            <div
              className="w-full lg:w-1/2 bg-gray-300 flex items-center justify-center"
              style={{
                width: '521.67px',
                height: '401.10px',
                maxWidth: '100%'
              }}
            >
              <span className="text-gray-500 palatino-body">Image placeholder</span>
            </div>

            {/* Content - Right Side */}
            <div
              className="w-full lg:w-1/2"
              style={{ maxWidth: '521.67px' }}
            >
              {/* Headline - Palatino 48pt */}
              <h2
                className="palatino-headline mb-6"
                style={{
                  width: '521.67px',
                  maxWidth: '100%'
                }}
              >
                {whoWeAre.headline}
              </h2>

              {/* Body Text - Palatino 18pt */}
              <div
                className="space-y-4 mb-8"
                style={{
                  width: '521.67px',
                  maxWidth: '100%'
                }}
              >
                {whoWeAre.body.map((paragraph, index) => (
                  <p key={index} className="palatino-body text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Learn More Button */}
              <Link
                href={whoWeAre.link.href}
                className="inline-block bg-coral text-white font-semibold uppercase tracking-wide px-6 py-3 hover:bg-coral-600 transition-colors"
                style={{
                  width: '152.50px',
                  height: '40px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {whoWeAre.link.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Atlantis Section - White/Cream Background */}
      <section className="bg-white" style={{ minHeight: '340px', paddingTop: '55px', paddingBottom: '55px' }}>
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Section Headline - Palatino 48pt centered */}
          <div
            className="text-center mb-12"
            style={{ maxWidth: '848.67px', margin: '0 auto 48px' }}
          >
            <h2 className="palatino-headline italic">
              {whyAtlantis.headline}
            </h2>
          </div>

          {/* 4 Column Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ maxWidth: '1280px', margin: '0 auto' }}
          >
            {whyAtlantis.cards.map((card, index) => (
              <div
                key={index}
                className="text-center"
                style={{ maxWidth: '280px', margin: '0 auto' }}
              >
                {/* Column Headline - Palatino Bold 24pt */}
                <h3
                  className="palatino-headline-sm mb-4"
                  style={{ minHeight: '60px' }}
                >
                  {card.title}
                </h3>

                {/* Column Body - Palatino 18pt */}
                <p className="palatino-body text-gray-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer spacing handled by Footer component */}
    </>
  )
}
