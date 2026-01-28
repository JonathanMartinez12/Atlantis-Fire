import Hero from '@/components/sections/Hero'
import WhyAtlantis from '@/components/sections/WhyAtlantis'
import Portfolio from '@/components/sections/Portfolio'
import Testimonial from '@/components/sections/Testimonial'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { homeContent } from '@/lib/data/siteContent'

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
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="label-text text-navy mb-[16px]">{homeContent.whoWeAre.label}</p>
              <h2 className="heading-2 text-navy mb-[24px]">{homeContent.whoWeAre.headline}</h2>
              {homeContent.whoWeAre.body.map((paragraph, index) => (
                <p key={index} className="body-large mb-[16px]">{paragraph}</p>
              ))}
              <Button href={homeContent.whoWeAre.link.href} variant="outline" size="md" className="mt-[16px]">
                {homeContent.whoWeAre.link.text}
              </Button>
            </div>

            {/* Image Placeholder */}
            <div className="animate-slide-in-right">
              <div className="diagonal-clip bg-gray-400 h-[350px] lg:h-[450px] w-full rounded-[8px] flex items-center justify-center">
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
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            {/* Image Placeholder */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <div className="diagonal-clip-reverse bg-gray-400 h-[350px] lg:h-[450px] w-full rounded-[8px] flex items-center justify-center">
                <span className="text-gray-600 sr-only">Mission image placeholder</span>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <p className="label-text text-navy mb-[16px]">OUR MISSION</p>
              <h2 className="heading-2 text-navy mb-[24px]">Headline Itam quam aute pro inctaqu ibust.</h2>
              <p className="body-large mb-[32px]">
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                quodi doloresequi quaectum ut intem corrovi dendest,
                occabor raeribus eos et porest apiet aut doluptibus
              </p>
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

      {/* Investment Approach Section */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="text-center mb-[48px] animate-fade-in">
            <h2 className="heading-2 text-navy mb-[32px]">Headline Itam quam aute pro inctaqu ibust.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-[32px] max-w-[1024px] mx-auto">
            {/* Our Investor Profile */}
            <div className="animate-fade-in-up">
              <div className="bg-gray-400 h-[250px] w-full rounded-[8px] mb-[24px] flex items-center justify-center">
                <span className="text-gray-600 sr-only">Investor profile image</span>
              </div>
              <h3 className="heading-4 text-navy mb-[16px] text-center">OUR INVESTOR PROFILE</h3>
              <p className="body-text text-center mb-[24px]">
                Itam quam aute pro inctaqu ibust, quia sed escima sitata
                occabor raeribus eos et porest apiet aut doluptibus
              </p>
              <div className="text-center">
                <Button href="/about" variant="primary" size="md">
                  INVESTOR
                </Button>
              </div>
            </div>

            {/* Our Investment Process */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gray-400 h-[250px] w-full rounded-[8px] mb-[24px] flex items-center justify-center">
                <span className="text-gray-600 sr-only">Investment process image</span>
              </div>
              <h3 className="heading-4 text-navy mb-[16px] text-center">OUR INVESTMENT PROCESS</h3>
              <p className="body-text text-center mb-[24px]">
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

      {/* Case Studies Section */}
      <section className="bg-white section-padding">
        <Container>
          <h2 className="heading-2 text-navy">Case Studies <span className="text-gray-400 font-normal italic text-[24px]">(future)</span></h2>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        headline={homeContent.cta.headline}
        text={homeContent.cta.text}
        buttonText={homeContent.cta.button.text}
        buttonHref={homeContent.cta.button.href}
      />
    </>
  )
}
