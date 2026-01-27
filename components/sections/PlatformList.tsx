import Container from '../layout/Container'
import Button from '../ui/Button'

interface PlatformListProps {
  label?: string
  headline: string
  intro: string
  items: string[]
  ctaText?: string
  ctaHref?: string
}

export default function PlatformList({
  label,
  headline,
  intro,
  items,
  ctaText,
  ctaHref,
}: PlatformListProps) {
  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            {label && (
              <p className="label-text text-navy mb-4">{label}</p>
            )}
            <h2 className="heading-2 text-navy mb-4">{headline}</h2>
            <p className="body-large">{intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {items.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-2 h-2 bg-coral rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-navy font-medium">{item}</span>
              </div>
            ))}
          </div>

          {ctaText && ctaHref && (
            <div className="text-center">
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
