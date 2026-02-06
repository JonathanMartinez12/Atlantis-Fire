import Container from '../layout/Container'
import Button from '../ui/Button'

interface HeroProps {
  label?: string
  headline: string
  body?: string
  ctaText?: string
  ctaHref?: string
  variant?: 'home' | 'page'
  showImage?: boolean
}

export default function Hero({
  label,
  headline,
  body,
  ctaText,
  ctaHref,
  variant = 'home',
  showImage = true,
}: HeroProps) {
  const isHome = variant === 'home'

  return (
    <section className={`${isHome ? 'bg-cream' : 'bg-cream'} section-padding overflow-hidden`}>
      <Container>
        <div className={`${isHome && showImage ? 'grid lg:grid-cols-2 gap-[48px] items-center' : ''}`}>
          {/* Content */}
          <div className={`${isHome ? 'animate-fade-in-up' : 'max-w-[768px] mx-auto text-center animate-fade-in'}`}>
            {label && (
              <p className="label-text text-navy mb-[16px]">{label}</p>
            )}
            <h1 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[24px]">
              {headline}
            </h1>
            {body && (
              <p className="body-large mb-[32px]">
                {body}
              </p>
            )}
            {ctaText && ctaHref && (
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaText}
              </Button>
            )}
          </div>

          {/* Image Placeholder */}
          {isHome && showImage && (
            <div className="relative animate-slide-in-right hidden lg:block">
              <div className="diagonal-clip bg-gray-400 h-[400px] lg:h-[500px] w-full rounded-[8px]" aria-hidden="true">
                {/* Placeholder for hero image */}
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <span className="sr-only">Team or office image placeholder</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
