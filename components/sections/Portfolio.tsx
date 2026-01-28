import Image from 'next/image'
import Container from '../layout/Container'
import Button from '../ui/Button'
import Card from '../ui/Card'

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

const brandLogos = [
  { name: 'Allied Fire Protection', logo: '/allied_logo.png', width: 134.27, height: 136.90 },
  { name: 'McCoy Fire', logo: '/mccoy_fire_logo.png', width: 137.63, height: 137.63 },
  { name: "Keller's", logo: '/kellers_logo.png', width: 196.11, height: 108.24 },
]

export default function Portfolio({ label, headline, intro, stats, ctaText, ctaHref }: PortfolioProps) {
  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Content - 391.67px text width */}
          <div className="animate-fade-in-up" style={{ maxWidth: '391.67px' }}>
            {label && (
              <p className="label-text text-navy mb-4" style={{ width: '230.67px', height: '28px' }}>{label}</p>
            )}
            <h2 className="heading-2 text-navy mb-6">{headline}</h2>
            {/* Body text - 391.67px x 60px */}
            <p className="body-large mb-8" style={{ maxWidth: '391.67px', minHeight: '60px' }}>{intro}</p>

            {/* Stats Box */}
            <Card className="mb-8">
              <h3 className="heading-4 text-navy mb-3">{stats.title}</h3>
              <p className="body-text">{stats.text}</p>
            </Card>

            {/* Button - 158px x 34px */}
            <Button href={ctaHref} variant="outline" size="md">
              {ctaText}
            </Button>
          </div>

          {/* Logo Grid */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="label-text text-navy mb-6">OUR BRANDS</p>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                {brandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center justify-center"
                    style={{ width: brand.width, height: brand.height }}
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
