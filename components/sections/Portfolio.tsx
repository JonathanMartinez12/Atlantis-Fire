import Container from '../layout/Container'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { brandLogos } from '@/lib/data/companies'

interface PortfolioProps {
  label?: string
  headline: string
  intro: string
  stats: {
    title: string
    text: string
  }
  ctaText: string
  ctaHref: string
}

export default function Portfolio({ label, headline, intro, stats, ctaText, ctaHref }: PortfolioProps) {
  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Content */}
          <div className="animate-fade-in-up">
            {label && (
              <p className="label-text text-navy mb-4">{label}</p>
            )}
            <h2 className="heading-2 text-navy mb-6">{headline}</h2>
            <p className="body-large mb-8">{intro}</p>

            {/* Stats Box */}
            <Card className="mb-8 text-left">
              <h3 className="heading-4 text-navy mb-3">{stats.title}</h3>
              <p className="body-text">{stats.text}</p>
            </Card>

            <Button href={ctaHref} variant="outline" size="md">
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>

      {/* Full-width Logo Carousel */}
      <div className="w-full overflow-hidden mt-12">
        <p className="label-text text-navy mb-6 text-center">OUR BRANDS</p>
        <div className="flex animate-scroll-x gap-16">
          {/* First set of logos */}
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex-shrink-0 flex items-center justify-center h-24 w-48"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brandLogos.map((brand) => (
            <div
              key={`${brand.name}-duplicate`}
              className="flex-shrink-0 flex items-center justify-center h-24 w-48"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
