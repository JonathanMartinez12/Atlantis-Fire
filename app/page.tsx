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
          <div className="hidden lg:block w-[24px] bg-white" style={{ minHeight: '600px' }} />

          {/* Right Image - extends to edge */}
          <div
            className="w-full lg:flex-1 relative"
            style={{ minHeight: '600px' }}
          >
            <Image
              src="/pictureone.jpg"
              alt="About Atlantis"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: OUR COMPANIES
          White box with label (108.33px x 55px), then light blue bar with logos
          Design specs: 1440px x 180px for logo section, background #e5eef8
          ============================================================ */}
      {/* White area with OUR COMPANIES label - 55px height */}
      <section className="w-full bg-white" style={{ minHeight: '55px', paddingTop: '18px', paddingBottom: '18px' }}>
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[108.33px]">
          <h2 className="label-avenir-18 text-navy">OUR COMPANIES</h2>
        </div>
      </section>

      {/* Light blue bar with logos - 1440px x 180px */}
      <section
        className="w-full"
        style={{ backgroundColor: '#e5eef8', minHeight: '180px' }}
      >
        <div className="w-full h-full flex items-center" style={{ minHeight: '180px' }}>
          {/* Logo Row - evenly distributed spacing */}
          <div className="flex items-center justify-evenly px-[40px] lg:px-[108.33px] w-full">
            {/* Allied FireProtection - 117.58px x 120px */}
            <Image
              src="/allied_logo.png"
              alt="Allied Fire Protection"
              width={118}
              height={120}
              className="object-contain"
              style={{ width: '117.58px', height: '120px' }}
            />

            {/* McCoy Fire - 120px x 120px */}
            <Image
              src="/mccoy_fire_logo.png"
              alt="McCoy Fire"
              width={120}
              height={120}
              className="object-contain"
              style={{ width: '120px', height: '120px' }}
            />

            {/* Keller's LLC - 196.11px x 108.24px */}
            <Image
              src="/kellers_logo.png"
              alt="Keller&apos;s LLC"
              width={196}
              height={108}
              className="object-contain"
              style={{ width: '196.11px', height: '108.24px' }}
            />
          </div>
        </div>
      </section>

      {/* Cream transition */}
      <section className="w-full bg-cream py-[30px]" />

      {/* ============================================================
          SECTION 3: WHO WE ARE
          Image on left (521.67px x 401.10px) + Content on right (521.67px x 224.81px)
          Design specs: cream background, Palatino 48pt italic title
          ============================================================ */}
      <section className="w-full bg-cream">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center py-[55px] px-[40px] lg:px-[108.33px]">
          {/* Left Image - 521.67px x 401.10px */}
          <div
            className="flex-shrink-0 relative mb-[40px] lg:mb-0 lg:mr-[80px]"
            style={{ width: '521.67px', height: '401.10px' }}
          >
            <Image
              src="/picturetwo.jpg"
              alt="Fire Protection Equipment"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content - 521.67px x 224.81px text area */}
          <div className="flex-1" style={{ maxWidth: '521.67px' }}>
            {/* Headline - Palatino 48pt italic */}
            <h2 className="heading-palatino-48 mb-[24px]">
              Who We Are
            </h2>

            {/* Body text - Palatino 18pt */}
            <p className="body-palatino-18 mb-[24px]">
              Atlantis Fire was founded to give fire protection business owners a founder-friendly option. We believe in protecting our companies&apos; legacies, valuing their people and ensuring the long-term success of their customers and communities.
            </p>

            <p className="body-palatino-18 mb-[32px]">
              We maintain the strength, independence, and reputation of each local brand while providing the structure and support of a fully integrated fire protection platform.
            </p>

            {/* LEARN MORE Button - 182.50px x 40px */}
            <Button href="/about" variant="primary" size="lg">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: WHY ATLANTIS
          Full-width white box (edge to edge) inside cream background
          4 columns with titles and descriptions
          Design specs: 1440px x 640.04px total, title 846.67px x 97.49px
          ============================================================ */}
      <section className="w-full bg-cream py-[40px]">
        {/* Full-width white box - 1440px max width */}
        <div className="w-full bg-white py-[60px] px-[40px] lg:px-[80px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Title - Palatino 48pt italic */}
            <h2 className="heading-palatino-48 text-center mb-[60px]">
              Why Atlantis
            </h2>

            {/* 4 Columns - 1200px x 147.75px content area */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
              {/* Column 1 */}
              <div className="text-center">
                <h3 className="heading-palatino-24 text-black mb-[12px]">
                  Family-Owned &<br />Founder-Friendly
                </h3>
                <p className="body-palatino-18 text-black text-center">
                  We are not private equity. We invest for longevity rather than short-term gains.
                </p>
              </div>

              {/* Column 2 */}
              <div className="text-center">
                <h3 className="heading-palatino-24 text-black mb-[12px]">
                  People at<br />the Center
                </h3>
                <p className="body-palatino-18 text-black text-center">
                  We believe strong companies begin with strong teams.
                </p>
              </div>

              {/* Column 3 */}
              <div className="text-center">
                <h3 className="heading-palatino-24 text-black mb-[12px]">
                  Shared Expertise.<br />Local Identity.
                </h3>
                <p className="body-palatino-18 text-black text-center">
                  We support each company&apos;s growth without diluting their legacy.
                </p>
              </div>

              {/* Column 4 */}
              <div className="text-center">
                <h3 className="heading-palatino-24 text-black mb-[12px]">
                  Operational Scale<br />with Local Service
                </h3>
                <p className="body-palatino-18 text-black text-center">
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
              {/* Image */}
              <div
                className="w-full relative mb-[24px]"
                style={{ height: '280px' }}
              >
                <Image
                  src="/picturethree.jpg"
                  alt="Our Portfolio"
                  fill
                  className="object-cover"
                />
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
              {/* Image */}
              <div
                className="w-full relative mb-[24px]"
                style={{ height: '280px' }}
              >
                <Image
                  src="/picturefour.jpg"
                  alt="Total Combined Expertise"
                  fill
                  className="object-cover"
                />
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
            <p className="font-serif italic text-black text-[18px] md:text-[20px] leading-relaxed mb-[16px]">
              As I heard Patrick and the Atlantis Fire Protection team&apos;s vision for how they want the operators deeply involved, treat them as partners, and celebrate the individual brands, I knew I wanted to join the Atlantis Fire Protection platform.
            </p>
            <p className="font-avenir font-semibold text-black text-[16px]">
              - Tony Thomas, Chief Executive Officer, Allied Fire Protection
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: READY TO CONNECT
          White section with centered text and CTA button
          Design specs: 1063.33px x 44.81px content area, full width section
          ============================================================ */}
      <section className="w-full bg-white py-[80px]">
        <div className="max-w-[1063px] mx-auto px-[40px] text-center">
          {/* Heading - Palatino 48pt */}
          <h2 className="heading-palatino-48 mb-[24px]">
            Ready to Connect?
          </h2>

          {/* Body text - Palatino 18pt */}
          <p className="body-palatino-18 mb-[40px]">
            Whether you&apos;re exploring a partnership or want to learn more about our portfolio, we&apos;re here to help.
          </p>

          {/* CONTACT Button */}
          <Button href="/contact" variant="primary" size="md">
            CONTACT
          </Button>
        </div>
      </section>

      {/* ============================================================
          SECTION: GRADIENT IMAGE PLACEHOLDER
          Orange/gradient decorative image section
          Design specs: 1440px x 431.55px
          ============================================================ */}
      <section className="w-full">
        <div
          className="w-full bg-gray-400 flex items-center justify-center"
          style={{ height: '431.55px' }}
        >
          <span className="text-gray-600 text-[24px] font-avenir">Gradient Image Placeholder</span>
        </div>
      </section>

    </>
  )
}
