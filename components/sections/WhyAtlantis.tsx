import Container from '../layout/Container'
import { FeatureCard } from '../ui/Card'

interface WhyAtlantisCard {
  title: string
  text: string
}

interface WhyAtlantisProps {
  label?: string
  headline: string
  cards: WhyAtlantisCard[]
}

export default function WhyAtlantis({ label, headline, cards }: WhyAtlantisProps) {
  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="text-center mb-[48px] animate-fade-in">
          {label && (
            <p className="label-text text-navy mb-[16px]">{label}</p>
          )}
          <h2 className="heading-2 text-navy">{headline}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard title={card.title} text={card.text} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
