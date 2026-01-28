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
        <div className="max-w-[896px] mx-auto text-center animate-fade-in">
          <blockquote className="relative">
            {/* Quote marks */}
            <span className="absolute -top-[16px] -left-[16px] text-[60px] text-coral opacity-20 font-serif" aria-hidden="true">
              &ldquo;
            </span>
            <p className="text-[20px] md:text-[24px] text-navy font-serif leading-relaxed mb-[24px] italic">
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="text-gray-600 font-medium">
              {attribution}
            </footer>
          </blockquote>

          {linkText && linkHref && (
            <div className="mt-[32px]">
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
