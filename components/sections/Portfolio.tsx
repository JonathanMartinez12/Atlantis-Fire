import Image from 'next/image'
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
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...brandLogos, ...brandLogos]

  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="grid lg:grid-cols-2 gap-[48px] items-start">
          {/* Content */}
          <div className="animate-fade-in-up">
            {label && (
              <p className="label-text text-navy mb-[16px]">{label}</p>
            )}
            <h2 className="heading-2 text-navy mb-[24px]">{headline}</h2>
            <p className="body-large mb-[32px]">{intro}</p>

            {/* Stats Box */}
            <Card className="mb-[32px]">
              <h3 className="heading-4 text-navy mb-[12px]">{stats.title}</h3>
              <p className="body-text">{stats.text}</p>
            </Card>

            <Button href={ctaHref} variant="outline" size="md">
              {ctaText}
            </Button>
          </div>

          {/* Logo Carousel */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-[8px] p-[32px] shadow-sm overflow-hidden">
              <p className="label-text text-navy mb-[24px]">OUR BRANDS</p>

              {/* Infinite Scroll Container */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-infinite">
                  {duplicatedLogos.map((brand, index) => (
                    <div
                      key={`${brand.name}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center px-[24px] h-[96px] min-w-[200px]"
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={160}
                        height={80}
                        className="max-h-[80px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
