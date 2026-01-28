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
        <div className={`${isHome && showImage ? 'flex flex-col lg:flex-row gap-6 items-center' : ''}`}>
          {/* Content - 708px x 715px */}
          <div
            className={`${isHome ? 'animate-fade-in-up' : 'max-w-3xl mx-auto text-center animate-fade-in'}`}
            style={isHome ? { width: '708px', minHeight: '715px', maxWidth: '100%' } : undefined}
          >
            {label && (
              <p
                className="label-text text-navy mb-4"
                style={{ width: '230.67px', height: '28px' }}
              >
                {label}
              </p>
            )}
            <h1
              className="heading-1 text-navy mb-6"
              style={{ maxWidth: '391.67px' }}
            >
              {headline}
            </h1>
            {body && (
              <p className="body-large mb-8">
                {body}
              </p>
            )}
            {ctaText && ctaHref && (
              <Button href={ctaHref} variant="primary" size="md">
                {ctaText}
              </Button>
            )}
          </div>

          {/* Image Placeholder - 732px x 715px */}
          {isHome && showImage && (
            <div className="relative animate-slide-in-right hidden lg:block">
              <div
                className="diagonal-clip bg-gray-400 rounded-lg"
                style={{ width: '732px', height: '715px', maxWidth: '100%' }}
                aria-hidden="true"
              >
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
