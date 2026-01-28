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
        <div className="max-w-[896px] mx-auto">
          <div className="text-center mb-[48px] animate-fade-in">
            {label && (
              <p className="label-text text-navy mb-[16px]">{label}</p>
            )}
            <h2 className="heading-2 text-navy mb-[16px]">{headline}</h2>
            <p className="body-large">{intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-[16px] mb-[48px]">
            {items.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-[12px] bg-white p-[16px] rounded-[8px] shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-[8px] h-[8px] bg-coral rounded-full flex-shrink-0" aria-hidden="true" />
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
