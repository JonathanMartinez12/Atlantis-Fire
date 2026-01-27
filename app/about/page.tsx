import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ValuesGrid from '@/components/sections/ValuesGrid'
import PlatformList from '@/components/sections/PlatformList'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import { aboutContent } from '@/lib/data/siteContent'

export const metadata: Metadata = {
  title: 'About Atlantis Fire | Family-Owned Fire Protection Holding Company',
  description:
    'Learn about Atlantis Fire Protection - a family-owned holding company committed to advancing the fire protection industry through strategic investment and a people-first philosophy.',
  openGraph: {
    title: 'About Atlantis Fire | Family-Owned Fire Protection Holding Company',
    description:
      'Learn about Atlantis Fire Protection - a family-owned holding company committed to advancing the fire protection industry.',
    url: 'https://atlantisfire.com/about',
    images: [
      {
        url: '/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Atlantis Fire Protection',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        label={aboutContent.hero.label}
        headline={aboutContent.hero.headline}
        variant="page"
        showImage={false}
      />

      {/* Our Story Section */}
      <section className="bg-white section-padding">
        <Container>
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="body-large mb-6">{aboutContent.story.paragraphs[0]}</p>
            <p className="body-large mb-4">{aboutContent.story.paragraphs[1]}</p>
            <ul className="mb-6 ml-6 space-y-2">
              {aboutContent.story.listItems.map((item, index) => (
                <li key={index} className="body-large flex items-start gap-3">
                  <span className="w-2 h-2 bg-coral rounded-full flex-shrink-0 mt-3" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="body-large">{aboutContent.story.paragraphs[2]}</p>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Purpose Section */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.missionVisionPurpose.map((item, index) => (
              <div
                key={item.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full text-center">
                  <h2 className="heading-3 text-navy mb-4">{item.title}</h2>
                  <p className="body-text">{item.text}</p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <ValuesGrid
        label={aboutContent.values.label}
        headline={aboutContent.values.headline}
        values={aboutContent.values.items}
      />

      {/* Platform Section */}
      <PlatformList
        label={aboutContent.platform.label}
        headline={aboutContent.platform.headline}
        intro={aboutContent.platform.intro}
        items={aboutContent.platform.items}
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      {/* CTA Section */}
      <CTASection
        headline="Ready to Learn More?"
        text="Connect with us to discover how Atlantis Fire can support your fire protection business."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="white"
      />
    </>
  )
}
