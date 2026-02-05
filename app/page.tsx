import Image from 'next/image'
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="label-text text-navy mb-4">{homeContent.whoWeAre.label}</p>
              <h2 className="heading-2 text-navy mb-6">{homeContent.whoWeAre.headline}</h2>
              {homeContent.whoWeAre.body.map((paragraph, index) => (
                <p key={index} className="body-large mb-8">{paragraph}</p>
              ))}
              <Button href={homeContent.whoWeAre.link.href} variant="outline" size="md" className="mt-4">
                {homeContent.whoWeAre.link.text}
              </Button>
            </div>

            {/* Image */}
            <div className="animate-slide-in-right">
              <div className="diagonal-clip rounded-lg overflow-hidden h-[350px] lg:h-[450px] w-full">
                <Image
                  src="/pictureone.jpg"
                  alt="Atlantis Fire Protection team"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <div className="diagonal-clip-reverse rounded-lg overflow-hidden h-[350px] lg:h-[450px] w-full">
                <Image
                  src="/picturetwo.jpg"
                  alt="Our mission at Atlantis Fire Protection"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <p className="label-text text-navy mb-4">OUR MISSION</p>
              <h2 className="heading-2 text-navy mb-6">Headline Itam quam aute pro inctaqu ibust.</h2>
              <p className="body-large mb-8">
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
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-2 text-navy mb-8">Headline Itam quam aute pro inctaqu ibust.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Our Investor Profile */}
            <div className="animate-fade-in-up">
              <div className="rounded-lg overflow-hidden h-[250px] w-full mb-6">
                <Image
                  src="/picturethree.jpg"
                  alt="Our investor profile"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-4 text-navy mb-4 text-center">OUR INVESTOR PROFILE</h3>
              <p className="body-text text-center mb-6">
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
              <div className="rounded-lg overflow-hidden h-[250px] w-full mb-6">
                <Image
                  src="/picturefour.jpg"
                  alt="Our investment process"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-4 text-navy mb-4 text-center">OUR INVESTMENT PROCESS</h3>
              <p className="body-text text-center mb-6">
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
          <h2 className="heading-2 text-navy">Case Studies <span className="text-gray-400 font-normal italic text-2xl">(future)</span></h2>
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
