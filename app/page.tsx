import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <>
      {/* ============================================================
          SECTION 1: ABOUT ATLANTIS
          Left cream content (708px) + Right gray image (732px)
          Total height: 715px at 1440px viewport
          Ratio: 49.17% / 50.83%
          ============================================================ */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
          {/* Left Content - Cream Background - 708/1440 = 49.17% */}
          <div
            className="bg-cream w-full lg:w-[49.17%] flex items-center"
            style={{ minHeight: '715px' }}
          >
            <div className="px-[40px] py-[60px] lg:pl-[80px] lg:pr-[40px] max-w-[708px] ml-auto">
              {/* Label - ABOUT ATLANTIS - Avenir Bold 14pt */}
              <p className="label-text text-navy mb-[16px]">ABOUT ATLANTIS</p>

              {/* Headline - 391.87px x 184px - Avenir Demi Bold */}
              <h2
                className="heading-2 text-navy mb-[24px]"
                style={{ maxWidth: '391.87px' }}
              >
                Headline Itam quam aute pro inctaqu ibust.
              </h2>

              {/* Body text - 391.87px x 80px */}
              <p
                className="body-text mb-[32px]"
                style={{ maxWidth: '391.87px' }}
              >
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                quodi doloresequi quaectum ut intem corrovi dendest,
                occabor raeribus eos et porest apiet aut doluptibus
              </p>

              {/* OUR STORY Button - 158px x 34px */}
              <Button href="/about" variant="primary" size="md">
                OUR STORY
              </Button>
            </div>
          </div>

          {/* Right Image Placeholder - Gray - 732/1440 = 50.83% */}
          <div
            className="bg-gray-400 w-full lg:w-[50.83%] flex items-center justify-center"
            style={{ minHeight: '715px' }}
          >
            <span className="text-gray-600 text-[48px] font-avenir font-semibold">1</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: OUR BRANDS
          Light blue background - 1440px x 168px
          Static row of logos
          ============================================================ */}
      <section
        className="w-full"
        style={{ backgroundColor: '#dce8f3' }}
      >
        <div
          className="max-w-[1440px] mx-auto h-[168px] flex items-center px-[40px] lg:px-[80px]"
        >
          {/* OUR BRANDS label - Avenir Demi Bold 28pt - 230.67px x 28px */}
          <div className="flex-shrink-0 mr-[60px]">
            <h2
              className="brand-heading"
              style={{ width: '230.67px' }}
            >
              OUR BRANDS
            </h2>
          </div>

          {/* Logo Row */}
          <div className="flex items-center justify-center flex-1 gap-[80px]">
            {/* Allied FireProtection - 134.27px x 136.90px */}
            <Image
              src="/allied_logo.png"
              alt="Allied Fire Protection"
              width={134}
              height={137}
              className="object-contain"
              style={{ width: '134.27px', height: '136.90px' }}
            />

            {/* McCoy Fire - 137.63px x 137.63px */}
            <Image
              src="/mccoy_fire_logo.png"
              alt="McCoy Fire"
              width={138}
              height={138}
              className="object-contain"
              style={{ width: '137.63px', height: '137.63px' }}
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

      {/* ============================================================
          SECTION 3: OUR MISSION
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
            {/* Label - OUR MISSION - Avenir Bold 14pt */}
            <p className="label-text text-navy mb-[16px]">OUR MISSION</p>

            {/* Headline - 391.67px x 184.08px - Avenir Demi Bold */}
            <h2
              className="heading-2 text-navy mb-[24px]"
              style={{ maxWidth: '391.67px' }}
            >
              Headline Itam quam aute pro inctaqu ibust.
            </h2>

            {/* Body text - 391.67px x 80px */}
            <p
              className="body-text mb-[32px]"
              style={{ maxWidth: '391.67px' }}
            >
              Itam quam aute pro inctaqu ibust, quia sed escima sitata
              quodi doloresequi quaectum ut intem corrovi dendest,
              occabor raeribus eos et porest apiet aut doluptibus
            </p>

            {/* WHY ATLANTIS Button - 158px x 34px */}
            <Button href="/about" variant="primary" size="md">
              WHY ATLANTIS
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: INVESTMENT APPROACH
          Cream background - 1440px x 784px
          Large headline + 2 cards side by side
          ============================================================ */}
      <section className="w-full bg-cream">
        <div
          className="max-w-[1440px] mx-auto flex flex-col items-center justify-center px-[40px] lg:px-[80px] py-[80px]"
          style={{ minHeight: '784px' }}
        >
          {/* Main Headline - 1038px x 92.04px - Avenir Demi Bold centered */}
          <h2
            className="heading-1 text-navy text-center mb-[60px]"
            style={{ maxWidth: '1038px' }}
          >
            Headline Itam quam aute pro inctaqu ibust.
          </h2>

          {/* Two Cards */}
          <div className="flex flex-col md:flex-row gap-[60px] justify-center">
            {/* Card 1 - OUR INVESTOR PROFILE */}
            <div className="flex flex-col items-center" style={{ width: '415.67px' }}>
              {/* Image Placeholder - 415.67px x 259.41px */}
              <div
                className="w-full bg-gray-400 flex items-center justify-center mb-[24px]"
                style={{ width: '415.67px', height: '259.41px' }}
              >
                <span className="text-gray-600 text-[48px] font-avenir font-semibold">3</span>
              </div>

              {/* Card Title - 415.67px x 35px - Avenir Demi Bold 28pt - coral color */}
              <h3
                className="heading-4 text-coral text-center mb-[16px]"
                style={{ width: '415.67px', height: '35px', lineHeight: '35px' }}
              >
                OUR INVESTOR PROFILE
              </h3>

              {/* Card Body - 415.67px x 32.52px */}
              <p
                className="body-text text-center mb-[32px]"
                style={{ width: '415.67px' }}
              >
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                occabor raeribus eos et porest apiet aut doluptibus
              </p>

              {/* INVESTOR Button - 158px x 34px */}
              <Button href="/about" variant="primary" size="md">
                INVESTOR
              </Button>
            </div>

            {/* Card 2 - OUR INVESTMENT PROFILE */}
            <div className="flex flex-col items-center" style={{ width: '415.67px' }}>
              {/* Image Placeholder - 415.67px x 259.41px */}
              <div
                className="w-full bg-gray-400 flex items-center justify-center mb-[24px]"
                style={{ width: '415.67px', height: '259.41px' }}
              >
                <span className="text-gray-600 text-[48px] font-avenir font-semibold">4</span>
              </div>

              {/* Card Title - 415.67px x 35px - Avenir Demi Bold 28pt - coral color */}
              <h3
                className="heading-4 text-coral text-center mb-[16px]"
                style={{ width: '415.67px', height: '35px', lineHeight: '35px' }}
              >
                OUR INVESTMENT PROFILE
              </h3>

              {/* Card Body - 415.67px x 32.52px */}
              <p
                className="body-text text-center mb-[32px]"
                style={{ width: '415.67px' }}
              >
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                occabor raeribus eos et porest apiet aut doluptibus
              </p>

              {/* INVESTMENT Button - 158px x 34px */}
              <Button href="/about" variant="primary" size="md">
                INVESTMENT
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================
          SECTION 5: CASE STUDIES (future)
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
