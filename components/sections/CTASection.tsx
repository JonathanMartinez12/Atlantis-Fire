import Container from '../layout/Container'
import Button from '../ui/Button'

interface CTASectionProps {
  headline: string
  text: string
  buttonText: string
  buttonHref: string
  variant?: 'cream' | 'white' | 'navy'
}

export default function CTASection({
  headline,
  text,
  buttonText,
  buttonHref,
  variant = 'cream',
}: CTASectionProps) {
  const bgColors = {
    cream: 'bg-cream',
    white: 'bg-white',
    navy: 'bg-navy',
  }

  const textColors = {
    cream: 'text-navy',
    white: 'text-navy',
    navy: 'text-white',
  }

  const bodyColors = {
    cream: 'text-gray-600',
    white: 'text-gray-600',
    navy: 'text-gray-200',
  }

  return (
    <section className={`${bgColors[variant]} section-padding`}>
      <Container>
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className={`heading-2 ${textColors[variant]} mb-4`}>{headline}</h2>
          <p className={`body-large ${bodyColors[variant]} mb-8`}>{text}</p>
          <Button
            href={buttonHref}
            variant={variant === 'navy' ? 'primary' : 'primary'}
            size="lg"
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  )
}
