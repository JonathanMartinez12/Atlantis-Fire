import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import WhyAtlantis from '@/components/sections/WhyAtlantis'
import Portfolio from '@/components/sections/Portfolio'
import Testimonial from '@/components/sections/Testimonial'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { homeContent } from '@/lib/data/siteContent'

const partnerLogos = [
  { name: 'Allied Fire Protection', logo: '/allied_logo.png', width: 134.27, height: 136.90 },
  { name: 'McCoy Fire', logo: '/mccoy_fire_logo.png', width: 137.63, height: 137.63 },
  { name: "Keller's", logo: '/kellers_logo.png', width: 196.11, height: 108.24 },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={homeContent.hero.headline}
        body={homeContent.hero.body}
        ctaText={homeContent.hero.cta}
        ctaHref="/contact"
        variant="home"
      />

      {/* Who We Are Section */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="label-text text-navy mb-4">{homeContent.whoWeAre.label}</p>
              <h2 className="heading-2 text-navy mb-6">{homeContent.whoWeAre.headline}</h2>
              {homeContent.whoWeAre.body.map((paragraph, index) => (
                <p key={index} className="body-large mb-4">{paragraph}</p>
              ))}
              <Button href={homeContent.whoWeAre.link.href} variant="outline" size="md" className="mt-4">
                {homeContent.whoWeAre.link.text}
              </Button>
            </div>

            {/* Image Placeholder */}
            <div className="animate-slide-in-right">
              <div className="diagonal-clip bg-gray-400 h-[350px] lg:h-[450px] w-full rounded-lg flex items-center justify-center">
                <span className="text-gray-600 sr-only">Team image placeholder</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Atlantis Section */}
      <WhyAtlantis
        label={homeContent.whyAtlantis.label}
        headline={homeContent.whyAtlantis.headline}
        cards={homeContent.whyAtlantis.cards}
      />

      {/* Our Mission Section */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Placeholder - 415.67px x 515px */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <div
                className="diagonal-clip-reverse bg-gray-400 rounded-lg flex items-center justify-center"
                style={{ width: '415.67px', height: '515px', maxWidth: '100%' }}
              >
                <span className="text-gray-600 sr-only">Mission image placeholder</span>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 animate-slide-in-right" style={{ maxWidth: '391.67px' }}>
              {/* Label - 230.67px x 28px */}
              <p className="label-text text-navy mb-4" style={{ width: '230.67px', height: '28px' }}>OUR MISSION</p>
              {/* Headline - 391.67px x 184.09px */}
              <h2 className="heading-2 text-navy mb-6" style={{ maxWidth: '391.67px' }}>Headline Itam quam aute pro inctaqu ibust.</h2>
              {/* Description - 391.67px x 60px */}
              <p className="body-large mb-8" style={{ maxWidth: '391.67px', minHeight: '60px' }}>
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                quodi doloresequi quaectum ut intem corrovi dendest,
                occabor raeribus eos et porest apiet aut doluptibus
              </p>
              {/* Button - 158px x 34px */}
              <Button href="/about" variant="primary" size="md">
                WHY ATLANTIS
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Section */}
      <Portfolio
        label={homeContent.portfolio.label}
        headline={homeContent.portfolio.headline}
        intro={homeContent.portfolio.intro}
        stats={homeContent.portfolio.stats}
        ctaText={homeContent.portfolio.cta.text}
        ctaHref={homeContent.portfolio.cta.href}
      />

      {/* Testimonial Section */}
      <Testimonial
        quote={homeContent.testimonial.quote}
        attribution={homeContent.testimonial.attribution}
        linkText={homeContent.testimonial.link.text}
        linkHref={homeContent.testimonial.link.href}
      />

      {/* Investment Approach Section - 1440px x 784px */}
      <section className="bg-cream section-padding" style={{ minHeight: '784px' }}>
        <Container>
          {/* Section title - 1038px x 92.04px */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-2 text-navy mb-8 mx-auto" style={{ maxWidth: '1038px' }}>Headline Itam quam aute pro inctaqu ibust.</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Our Investor Profile - Card width 415.67px */}
            <div className="animate-fade-in-up" style={{ width: '415.67px', maxWidth: '100%' }}>
              {/* Card image - 415.67px x 259.41px */}
              <div
                className="bg-gray-400 rounded-lg mb-6 flex items-center justify-center"
                style={{ width: '415.67px', height: '259.41px', maxWidth: '100%' }}
              >
                <span className="text-gray-600 sr-only">Investor profile image</span>
              </div>
              {/* Card title - 415.67px x 35px */}
              <h3
                className="heading-4 text-navy mb-4 text-center"
                style={{ width: '415.67px', height: '35px', maxWidth: '100%' }}
              >
                OUR INVESTOR PROFILE
              </h3>
              {/* Card description - 415.67px x 32.52px */}
              <p
                className="body-text text-center mb-6"
                style={{ width: '415.67px', minHeight: '32.52px', maxWidth: '100%' }}
              >
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                occabor raeribus eos et porest apiet aut doluptibus
              </p>
              <div className="text-center">
                <Button href="/about" variant="primary" size="md">
                  INVESTOR
                </Button>
              </div>
            </div>

            {/* Our Investment Process - Card width 415.67px */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms', width: '415.67px', maxWidth: '100%' }}>
              {/* Card image - 415.67px x 259.41px */}
              <div
                className="bg-gray-400 rounded-lg mb-6 flex items-center justify-center"
                style={{ width: '415.67px', height: '259.41px', maxWidth: '100%' }}
              >
                <span className="text-gray-600 sr-only">Investment process image</span>
              </div>
              {/* Card title - 415.67px x 35px */}
              <h3
                className="heading-4 text-navy mb-4 text-center"
                style={{ width: '415.67px', height: '35px', maxWidth: '100%' }}
              >
                OUR INVESTMENT PROFILE
              </h3>
              {/* Card description - 415.67px x 32.52px */}
              <p
                className="body-text text-center mb-6"
                style={{ width: '415.67px', minHeight: '32.52px', maxWidth: '100%' }}
              >
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                occabor raeribus eos et porest apiet aut doluptibus
              </p>
              <div className="text-center">
                <Button href="/about" variant="primary" size="md">
                  INVESTMENT
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Section - 391.67px x 92.04px heading */}
      <section className="bg-white section-padding">
        <Container>
          <h2 className="heading-2 text-navy" style={{ maxWidth: '391.67px' }}>
            Case Studies <span className="text-gray-400 font-normal italic" style={{ fontSize: '24px' }}>(future)</span>
          </h2>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        headline={homeContent.cta.headline}
        text={homeContent.cta.text}
        buttonText={homeContent.cta.button.text}
        buttonHref={homeContent.cta.button.href}
      />

      {/* Partners Bar Section - 1440px x 168px */}
      <section className="bg-navy" style={{ height: '168px' }}>
        <Container>
          <div className="flex items-center justify-between h-[168px]">
            {/* Section title - 230.67px x 28px */}
            <h3 className="heading-4 text-white" style={{ width: '230.67px' }}>OUR PARTNERS</h3>

            {/* Partner logos */}
            <div className="flex items-center gap-8">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center"
                  style={{ width: partner.width, height: partner.height }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
