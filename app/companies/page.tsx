import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'

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
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO / INTRO
          Centered heading and body text on cream background
          ============================================================ */}
      <section className="w-full bg-cream py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[40px] text-center">
          <h1 className="heading-palatino-48 text-navy mb-[24px]">
            A Strong Portfolio of Proven Fire Protection Companies
          </h1>
          <p className="body-palatino-18 text-black max-w-[900px] mx-auto">
            Atlantis Fire is proud to support a growing family of fire protection brands with decades of expertise and strong reputations in their regions. Each company retains its identity while benefiting from the strength and scale of the Atlantis operating platform.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: ALLIED FIRE PROTECTION
          Logo on right (light blue bg), text on left (white bg)
          ============================================================ */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
          {/* Left Content - White Background */}
          <div className="bg-white flex-1 p-[60px] lg:p-[80px]">
            {/* Location Label */}
            <p className="font-avenir font-bold text-navy text-[14px] uppercase tracking-wide mb-[16px]">
              ALABAMA & TENNESSEE
            </p>

            {/* Company Name */}
            <h2 className="heading-palatino-48 text-navy mb-[24px]">
              Allied Fire Protection
            </h2>

            {/* Tagline */}
            <p className="body-palatino-18 text-black font-semibold mb-[24px]">
              A rapidly growing fire protection company built on exceptional people and a strong service culture.
            </p>

            {/* Body Text */}
            <p className="body-palatino-18 text-black mb-[32px]">
              Founded in 2022, Allied delivers full-scope fire protection services, including engineering, design, installation, inspection, and service of sprinkler, fire alarm, and special hazard systems. Known for their outstanding team, Allied has quickly become a preferred provider in Alabama and Tennessee. Their culture attracts high-performing technicians and fosters long-term customer relationships, making Allied one of the most promising emerging companies in the region.
            </p>

            {/* VISIT SITE Button */}
            <Button href="https://www.alliedfireprotection.net" variant="primary" size="md">
              VISIT SITE
            </Button>
          </div>

          {/* Right Logo - Light Blue Background */}
          <div className="bg-[#E5EEF8] flex-1 flex items-center justify-center p-[60px] lg:p-[80px]">
            <div className="relative w-full max-w-[400px]" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/allied_logo.png"
                alt="Allied Fire Protection"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Allied Quote Section - Centered Box with Logo Above */}
      <section className="w-full bg-[#E5EEF8] py-[60px]">
        <div className="max-w-[900px] mx-auto px-[40px]">
          {/* Logo Centered */}
          <div className="flex justify-center mb-[40px]">
            <div className="relative w-[200px]" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/allied_logo.png"
                alt="Allied Fire Protection"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Quote Text */}
          <p className="font-serif italic text-navy text-[16px] leading-relaxed mb-[16px]">
            &quot;Over the last several years, I built Allied Fire Protection into one of the fastest-growing, full-service fire protection service serving Alabama and the surrounding area. After hearing Patrick and the Atlantis Fire Protection team&apos;s vision for deeply investing operators, treating them as partners, and celebrating the individual brands, I knew I wanted to join the Atlantis Fire Protection platform. I look forward to working with Stella Black, Vince McCoy and the other operators at Atlantis Fire Protection to build one of the best-run, fastest growing platforms in the fire protection industry.&quot;
          </p>
          <p className="font-avenir font-semibold text-navy text-[14px]">
            - Tony Thomas, Chief Executive Officer, Allied Fire Protection
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: MCCOY FIRE
          Logo on left (cream bg), text on right (white bg)
          ============================================================ */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse">
          {/* Right Content - White Background */}
          <div className="bg-white flex-1 p-[60px] lg:p-[80px]">
            {/* Location Label */}
            <p className="font-avenir font-bold text-navy text-[14px] uppercase tracking-wide mb-[16px]">
              ALABAMA & TENNESSEE
            </p>

            {/* Company Name */}
            <h2 className="heading-palatino-48 text-navy mb-[24px]">
              McCoy Fire
            </h2>

            {/* Tagline */}
            <p className="body-palatino-18 text-black font-semibold mb-[24px]">
              The trusted problem-solver for complex fire protection challenges.
            </p>

            {/* Body Text */}
            <p className="body-palatino-18 text-black mb-[32px]">
              Since 2000, McCoy Fire has been recognized by fire marshals, inspectors, and industry professionals as the go-to source for resolving difficult sprinkler and fire alarm issues. With over 25 years of service across Alabama, Florida, Georgia, Tennessee, Mississippi, and South Carolina, McCoy provides engineering, design, installation, inspection, and service for sprinkler, fire alarm, and special hazard systems. Their deep technical expertise and reputation for solving challenging problems make McCoy a cornerstone in the Atlantis portfolio.
            </p>

            {/* VISIT SITE Button */}
            <Button href="https://www.mccoyfire.com" variant="primary" size="md">
              VISIT SITE
            </Button>
          </div>

          {/* Left Logo - Cream Background */}
          <div className="bg-cream flex-1 flex items-center justify-center p-[60px] lg:p-[80px]">
            <div className="relative w-full max-w-[300px]" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/mccoy_fire_logo.png"
                alt="McCoy Fire"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* McCoy Quote Section - Centered Box with Logo Above */}
      <section className="w-full bg-cream py-[60px]">
        <div className="max-w-[900px] mx-auto px-[40px]">
          {/* Logo Centered */}
          <div className="flex justify-center mb-[40px]">
            <div className="relative w-[200px]" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/mccoy_fire_logo.png"
                alt="McCoy Fire"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Quote Text */}
          <p className="font-serif italic text-navy text-[16px] leading-relaxed mb-[16px]">
            &quot;Over the 20-plus years in business, we have had our share of highs and lows in the industry, but with our team&apos;s hard work and dedication, we have managed to build one of the fastest-growing fire protection companies in our market. Having put so much of myself into McCoy Fire and Safety, it was a difficult decision to consider selling and partnering with anyone. However, when Patrick described their approach, I saw how unique it would be in the industry. I did not want to miss the opportunity to be one of the first companies and owner-operators on the platform. I am extremely excited to see what the future holds for Atlantis Fire.&quot;
          </p>
          <p className="font-avenir font-semibold text-navy text-[14px]">
            - Vince McCoy, President, McCoy Fire And Safety
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: KELLER'S
          Logo on right (light blue bg), text on left (white bg)
          ============================================================ */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
          {/* Left Content - White Background */}
          <div className="bg-white flex-1 p-[60px] lg:p-[80px]">
            {/* Location Label */}
            <p className="font-avenir font-bold text-navy text-[14px] uppercase tracking-wide mb-[16px]">
              WILMINGTON, NC (Global Capabilities)
            </p>

            {/* Company Name */}
            <h2 className="heading-palatino-48 text-navy mb-[24px]">
              Keller&apos;s
            </h2>

            {/* Tagline */}
            <p className="body-palatino-18 text-black font-semibold mb-[24px]">
              Industry-leading expertise in the world&apos;s most complex fire alarm environments.
            </p>

            {/* Body Text */}
            <p className="body-palatino-18 text-black mb-[32px]">
              Established in 1973, Keller&apos;s is known for its unmatched strength in fire alarm engineering, design, and service. With multiple NICET IV-certified professionals and more than 50 years of history, Keller&apos;s is trusted by nuclear facilities, government agencies, industrial campuses, and other highly specialized environments. Their longevity, technical excellence, and long-tenured team make Keller&apos;s one of the most respected fire alarm firms in the industry, serving clients locally, nationally, and globally.
            </p>

            {/* VISIT SITE Button */}
            <Button href="https://www.kellersllc.com" variant="primary" size="md">
              VISIT SITE
            </Button>
          </div>

          {/* Right Logo - Light Blue Background */}
          <div className="bg-[#E5EEF8] flex-1 flex items-center justify-center p-[60px] lg:p-[80px]">
            <div className="relative w-full max-w-[400px]" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/kellers_logo.png"
                alt="Keller&apos;s LLC"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keller's Quote Section - Centered Box with Logo Above */}
      <section className="w-full bg-[#E5EEF8] py-[60px]">
        <div className="max-w-[900px] mx-auto px-[40px]">
          {/* Logo Centered */}
          <div className="flex justify-center mb-[40px]">
            <div className="relative w-[200px]" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/kellers_logo.png"
                alt="Keller&apos;s LLC"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Quote Text */}
          <p className="font-serif italic text-navy text-[16px] leading-relaxed mb-[16px]">
            &quot;My family started Keller&apos;s 50 years ago, and ever since then, we built our reputation. I care deeply about. I constantly get approached to sell our business to financial firms, and it never feels like the right fit. I&apos;ve known Patrick Lynch for nearly a decade, and the vision for Atlantis Fire and how they want the operators deeply involved, treat them as partners, and celebrate the individual brands was what I wanted for the next chapter of Keller&apos;s. I couldn&apos;t be more excited for Keller&apos;s to join the Atlantis Fire platform.&quot;
          </p>
          <p className="font-avenir font-semibold text-navy text-[14px]">
            - Stella Black, President, Keller&apos;s Inc.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: INTERESTED IN JOINING
          Centered CTA on cream background
          ============================================================ */}
      <section className="w-full bg-cream py-[80px]">
        <div className="max-w-[1000px] mx-auto px-[40px] text-center">
          <h2 className="heading-palatino-48 text-navy mb-[24px]">
            Interested in Joining the Atlantis Family?
          </h2>
          <p className="body-palatino-18 text-black mb-[16px]">
            Atlantis Fire partners with strong fire protection companies that share our values and commitment to operational excellence.
          </p>
          <p className="body-palatino-18 text-black mb-[40px]">
            Contact us to start the conversation
          </p>
          <Button href="/contact" variant="primary" size="md">
            CONTACT
          </Button>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: ORANGE DECORATIVE IMAGE
          ============================================================ */}
      <section className="w-full">
        <div className="w-full relative" style={{ height: '180px' }}>
          <Image
            src="/orange_horizontal_bar.jpg"
            alt="Decorative background"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </>
  )
}
