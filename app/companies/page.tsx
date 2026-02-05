import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import { brandLogos } from '@/lib/data/companies'
import { homeContent } from '@/lib/data/siteContent'

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
  const whyAtlantisCards = homeContent.whyAtlantis.cards

  return (
    <>
      {/* OUR PORTFOLIO Header Section - 1440px x 180px */}
      <section className="bg-cream" style={{ minHeight: '180px', paddingTop: '55px', paddingBottom: '55px' }}>
        <Container>
          <div className="flex flex-col justify-center" style={{ minHeight: '108.33px' }}>
            {/* Avenir Bold 18pt ALL CAPS header - 196.67px x 40px */}
            <h2
              className="avenir-label text-navy mb-2"
              style={{ height: '40px', display: 'flex', alignItems: 'center' }}
            >
              OUR PORTFOLIO
            </h2>
            {/* Total Combined Experience - Avenir Bold 18pt ALL CAPS */}
            <p
              className="avenir-label text-navy"
              style={{ height: '40px', display: 'flex', alignItems: 'center' }}
            >
              TOTAL COMBINED EXPERIENCE
            </p>
          </div>
        </Container>
      </section>

      {/* Company Logos Section - Light Blue Background #e5eef8 */}
      <section
        style={{
          backgroundColor: '#e5eef8',
          minHeight: '180px',
          paddingTop: '15px',
          paddingBottom: '15px'
        }}
      >
        <Container>
          {/* Logo container - 1440px x 180px equivalent with responsive scaling */}
          <div
            className="flex items-center justify-center gap-8 md:gap-16 lg:gap-24"
            style={{ minHeight: '150px' }}
          >
            {/* Allied Fire Protection Logo - ~117.69px width */}
            <div
              className="flex items-center justify-center"
              style={{ width: '117.69px', height: '120px' }}
            >
              <Image
                src="/allied_logo.png"
                alt="Allied Fire Protection"
                width={118}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>

            {/* McCoy Fire Logo - ~120px width */}
            <div
              className="flex items-center justify-center"
              style={{ width: '120px', height: '120px' }}
            >
              <Image
                src="/mccoy_fire_logo.png"
                alt="McCoy Fire"
                width={120}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Keller's LLC Logo - ~196.11px x 108.24px */}
            <div
              className="flex items-center justify-center"
              style={{ width: '196.11px', height: '108.24px' }}
            >
              <Image
                src="/kellers_logo.png"
                alt="Keller's LLC"
                width={196}
                height={108}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are Section - 1440px x 624.20px */}
      <section
        className="bg-cream"
        style={{ minHeight: '624.20px', paddingTop: '15px', paddingBottom: '15px' }}
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-center" style={{ minHeight: '594.20px' }}>
            {/* Left: Fire Extinguisher Image - 521.67px x 401.10px */}
            <div
              className="flex items-center justify-center"
              style={{ maxWidth: '521.67px', height: '401.10px' }}
            >
              <div
                className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden"
                style={{ width: '521.67px', height: '401.10px' }}
              >
                {/* Placeholder for fire extinguisher image - using a gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2v4h-4V2H9v2.17l-3.83 3.83L4 9.17V22h16V9.17l-1.17-1.17L15 4.17V2h-1zm3 18H7V10h10v10zm-5-8a2 2 0 100 4 2 2 0 000-4z"/>
                    </svg>
                    <span className="text-sm">Fire Safety Image</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Who We Are Content - 521.67px width */}
            <div style={{ maxWidth: '521.67px' }}>
              {/* Headline - Palatino 48pt - 521.67px x 97.49px */}
              <h2
                className="palatino-headline text-navy mb-6"
                style={{ maxWidth: '521.67px', minHeight: '97.49px' }}
              >
                Who We Are
              </h2>

              {/* Body Text - Palatino 18pt - 521.67px x 224.91px */}
              <div
                className="palatino-body text-gray-700 mb-8"
                style={{ maxWidth: '521.67px', minHeight: '224.91px' }}
              >
                <p className="mb-4">
                  Atlantis Fire was founded to give fire protection business owners a founder-friendly option. We believe in protecting our companies&apos; legacies, valuing their people and ensuring the long-term success of their customers and communities.
                </p>
                <p>
                  We maintain the strength, independence, and reputation of each local brand while providing the structure and support of a fully integrated fire protection platform.
                </p>
              </div>

              {/* LEARN MORE Button - 182.50px x 40px */}
              <Link
                href="/about"
                className="inline-block bg-coral text-white font-semibold uppercase tracking-wider px-6 py-3 hover:bg-coral-600 transition-colors"
                style={{ minWidth: '182.50px', height: '40px', lineHeight: '16px' }}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Atlantis Section - 1440px x 840.04px */}
      <section
        className="bg-white"
        style={{ minHeight: '400px', paddingTop: '60px', paddingBottom: '60px' }}
      >
        <Container>
          {/* Headline - Palatino 48pt centered - 846.67px x 97.49px */}
          <div className="text-center mb-12">
            <h2
              className="palatino-headline text-navy mx-auto"
              style={{ maxWidth: '846.67px', minHeight: '97.49px' }}
            >
              Why Atlantis
            </h2>
          </div>

          {/* 4-Column Grid - 1200px x 147.75px */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
            style={{ maxWidth: '1200px', minHeight: '147.75px' }}
          >
            {whyAtlantisCards.map((card, index) => (
              <div key={index} className="text-center px-4">
                {/* Palatino Bold 24pt Headline */}
                <h3 className="palatino-subheadline text-navy mb-4">
                  {card.title}
                </h3>
                {/* Palatino 18pt Body Copy */}
                <p className="palatino-body text-gray-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
