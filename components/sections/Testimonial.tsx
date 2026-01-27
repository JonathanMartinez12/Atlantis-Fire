import Container from '../layout/Container'
import Button from '../ui/Button'

interface TestimonialProps {
  quote: string
  attribution: string
  linkText?: string
  linkHref?: string
}

export default function Testimonial({ quote, attribution, linkText, linkHref }: TestimonialProps) {
  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <blockquote className="relative">
            {/* Quote marks */}
            <span className="absolute -top-4 -left-4 text-6xl text-coral opacity-20 font-serif" aria-hidden="true">
              &ldquo;
            </span>
            <p className="text-xl md:text-2xl text-navy font-serif leading-relaxed mb-6 italic">
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="text-gray-600 font-medium">
              {attribution}
            </footer>
          </blockquote>

          {linkText && linkHref && (
            <div className="mt-8">
              <Button href={linkHref} variant="outline" size="md">
                {linkText}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
