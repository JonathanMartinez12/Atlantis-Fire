import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <>
      {/* ============================================================
          SECTION 1: ABOUT ATLANTIS
          Cream content on left + image on right
          Image extends to edge of screen
          ============================================================ */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content - Cream Background - approximately 60% */}
          <div
            className="bg-cream w-full lg:w-[60%] flex items-center"
            style={{ minHeight: '600px' }}
          >
            <div className="px-[40px] py-[60px] lg:pl-[80px] lg:pr-[60px] max-w-[700px] ml-auto lg:ml-[80px]">
              {/* Label - ABOUT ATLANTIS - Avenir Bold 14pt */}
              <p className="label-text text-navy mb-[16px]">ABOUT ATLANTIS</p>

              {/* Headline - Serif font (Playfair Display) */}
              <h2
                className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[24px]"
                style={{ maxWidth: '500px' }}
              >
                Where Founder-Built Companies Grow Stronger.
              </h2>

              {/* Body text */}
              <p
                className="body-text mb-[32px]"
                style={{ maxWidth: '500px' }}
              >
                Atlantis Fire is a family-owned holding company committed to advancing the fire protection industry through strategic investment, world-class operational support and a people-first philosophy. We bring together regionally strong fire protection companies, preserving their local identity while empowering them with resources, expertise and long-term stability.
              </p>

              {/* OUR STORY Button - 158px x 34px */}
              <Button href="/about" variant="primary" size="md">
                OUR STORY
              </Button>
            </div>
          </div>

          {/* Thin vertical white gap */}
          <div className="hidden lg:block w-[4px] bg-white" style={{ minHeight: '600px' }} />

          {/* Right Image Placeholder - extends to edge */}
          <div
            className="bg-gray-400 w-full lg:flex-1 flex items-center justify-center"
            style={{ minHeight: '600px' }}
          >
            <span className="text-gray-600 text-[48px] font-avenir font-semibold">1</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: OUR COMPANIES
          White box with label, then light blue bar with logos
          ============================================================ */}
      {/* White area with OUR COMPANIES label */}
      <section className="w-full bg-white py-[30px]">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">
          <h2 className="label-text text-navy">OUR COMPANIES</h2>
        </div>
      </section>

      {/* Light blue bar with logos */}
      <section
        className="w-full"
        style={{ backgroundColor: '#dce8f3' }}
      >
        <div className="w-full py-[40px]">
          {/* Logo Row - centered and evenly spaced */}
          <div className="flex items-center justify-center gap-[60px] md:gap-[120px] lg:gap-[200px] px-[40px]">
            {/* Allied FireProtection */}
            <Image
              src="/allied_logo.png"
              alt="Allied Fire Protection"
              width={150}
              height={150}
              className="object-contain h-[100px] md:h-[130px] w-auto"
            />

            {/* McCoy Fire */}
            <Image
              src="/mccoy_fire_logo.png"
              alt="McCoy Fire"
              width={150}
              height={150}
              className="object-contain h-[100px] md:h-[130px] w-auto"
            />

            {/* Keller's LLC */}
            <Image
              src="/kellers_logo.png"
              alt="Keller&apos;s LLC"
              width={200}
              height={110}
              className="object-contain h-[80px] md:h-[100px] w-auto"
            />
          </div>
        </div>
      </section>

      {/* Cream transition */}
      <section className="w-full bg-cream py-[30px]" />

      {/* ============================================================
          SECTION 3: WHO WE ARE
          Image on left (415.67px x 515px) + Content on right
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center py-[80px] px-[40px] lg:px-[80px]">
          {/* Left Image Placeholder - 415.67px x 515px */}
          <div
            className="flex-shrink-0 bg-gray-400 flex items-center justify-center mb-[40px] lg:mb-0 lg:mr-[80px]"
            style={{ width: '415.67px', height: '515px' }}
          >
            <span className="text-gray-600 text-[48px] font-avenir font-semibold">2</span>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Headline - Avenir Demi Bold */}
            <h2
              className="heading-2 text-navy mb-[24px]"
              style={{ maxWidth: '450px' }}
            >
              Who We Are
            </h2>

            {/* Body text */}
            <p
              className="body-text mb-[32px]"
              style={{ maxWidth: '450px' }}
            >
              Atlantis Fire was founded to give fire protection business owners a founder-friendly option. We believe in protecting our companies&apos; legacies, valuing their people and ensuring the long-term success of their customers and communities. We maintain the strength, independence, and reputation of each local brand while providing the structure and support of a fully integrated fire protection platform.
            </p>

            {/* LEARN MORE Button - 158px x 34px */}
            <Button href="/about" variant="primary" size="md">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: WHY ATLANTIS
          Full-width white box (edge to edge) inside cream background
          4 columns with titles and descriptions
          ============================================================ */}
      <section className="w-full bg-cream py-[40px]">
        {/* Full-width white box */}
        <div className="w-full bg-white py-[60px] px-[40px] lg:px-[80px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Title - Serif italic style */}
            <h2 className="font-serif italic text-navy text-[48px] text-center mb-[60px]">
              Why Atlantis
            </h2>

            {/* 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
              {/* Column 1 */}
              <div className="text-center">
                <h3 className="font-avenir font-semibold text-navy text-[18px] mb-[12px]">
                  Family-Owned &<br />Founder-Friendly
                </h3>
                <p className="body-text text-center">
                  We are not private equity. We invest for longevity rather than short-term gains.
                </p>
              </div>

              {/* Column 2 */}
              <div className="text-center">
                <h3 className="font-avenir font-semibold text-navy text-[18px] mb-[12px]">
                  People at<br />the Center
                </h3>
                <p className="body-text text-center">
                  We believe strong companies begin with strong teams.
                </p>
              </div>

              {/* Column 3 */}
              <div className="text-center">
                <h3 className="font-avenir font-semibold text-navy text-[18px] mb-[12px]">
                  Shared Expertise.<br />Local Identity.
                </h3>
                <p className="body-text text-center">
                  We support each company&apos;s growth without diluting their legacy.
                </p>
              </div>

              {/* Column 4 */}
              <div className="text-center">
                <h3 className="font-avenir font-semibold text-navy text-[18px] mb-[12px]">
                  Operational Scale<br />with Local Service
                </h3>
                <p className="body-text text-center">
                  Each company benefits from shared systems, best practices, and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: OUR PORTFOLIO & EXPERTISE
          Cream background with two cards + testimonial
          ============================================================ */}
      <section className="w-full bg-cream">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px] py-[60px]">
          {/* Two Cards Side by Side */}
          <div className="flex flex-col md:flex-row gap-[24px] justify-center mb-[48px]">
            {/* Card 1 - OUR PORTFOLIO */}
            <div className="flex flex-col items-center" style={{ maxWidth: '500px' }}>
              {/* Image Placeholder */}
              <div
                className="w-full bg-gray-400 flex items-center justify-center mb-[24px]"
                style={{ height: '280px' }}
              >
                <span className="text-gray-600 text-[48px] font-avenir font-semibold">3</span>
              </div>

              {/* Card Title - Navy uppercase */}
              <h3 className="font-avenir font-bold text-navy text-[20px] uppercase tracking-wide text-center mb-[16px]">
                OUR PORTFOLIO
              </h3>

              {/* Card Body */}
              <p className="body-text text-center">
                Atlantis Fire is the parent company to a growing group of exceptional fire protection brands across the U.S., each with deep regional roots and technical expertise.
              </p>
            </div>

            {/* Card 2 - TOTAL COMBINED EXPERTISE */}
            <div className="flex flex-col items-center" style={{ maxWidth: '500px' }}>
              {/* Image Placeholder */}
              <div
                className="w-full bg-gray-400 flex items-center justify-center mb-[24px]"
                style={{ height: '280px' }}
              >
                <span className="text-gray-600 text-[48px] font-avenir font-semibold">4</span>
              </div>

              {/* Card Title - Navy uppercase */}
              <h3 className="font-avenir font-bold text-navy text-[20px] uppercase tracking-wide text-center mb-[16px]">
                TOTAL COMBINED EXPERTISE
              </h3>

              {/* Card Body */}
              <p className="body-text text-center">
                With 81 years of combined operating history, our companies bring deep technical knowledge across fire alarm, sprinkler, and special hazard systems—supported by NICET-certified engineering teams and a culture built on safety, quality, and operational excellence.
              </p>
            </div>
          </div>

          {/* OUR COMPANIES Button - centered */}
          <div className="flex justify-center mb-[60px]">
            <Button href="/companies" variant="primary" size="md">
              OUR COMPANIES
            </Button>
          </div>

          {/* Testimonial Quote */}
          <div className="max-w-[1100px] mx-auto text-center">
            <p className="font-serif italic text-navy text-[18px] md:text-[20px] leading-relaxed mb-[16px]">
              As I heard Patrick and the Atlantis Fire Protection team&apos;s vision for how they want the operators deeply involved, treat them as partners, and celebrate the individual brands, I knew I wanted to join the Atlantis Fire Protection platform.
            </p>
            <p className="font-avenir font-semibold text-navy text-[16px]">
              - Tony Thomas, Chief Executive Officer, Allied Fire Protection
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: CASE STUDIES (future)
          ============================================================ */}
      <section className="w-full bg-white py-[64px] md:py-[96px]">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">
          <h2 className="heading-2 text-navy">
            Case Studies <span className="text-gray-400 font-normal italic text-[24px]">(future)</span>
          </h2>
        </div>
      </section>
    </>
  )
}
