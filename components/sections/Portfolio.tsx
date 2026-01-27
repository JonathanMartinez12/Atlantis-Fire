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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="animate-fade-in-up">
            {label && (
              <p className="label-text text-navy mb-4">{label}</p>
            )}
            <h2 className="heading-2 text-navy mb-6">{headline}</h2>
            <p className="body-large mb-8">{intro}</p>

            {/* Stats Box */}
            <Card className="mb-8">
              <h3 className="heading-4 text-navy mb-3">{stats.title}</h3>
              <p className="body-text">{stats.text}</p>
            </Card>

            <Button href={ctaHref} variant="outline" size="md">
              {ctaText}
            </Button>
          </div>

          {/* Logo Grid */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="label-text text-navy mb-6">OUR BRANDS</p>
              <div className="grid grid-cols-3 gap-6 items-center">
                {brandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center justify-center p-4 h-24"
                  >
                    {/* Logo placeholder */}
                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500 text-center px-2">{brand.name}</span>
                    </div>
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
