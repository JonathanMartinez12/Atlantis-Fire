import Container from '../layout/Container'
import { ValueCard } from '../ui/Card'

interface Value {
  title: string
  text: string
}

interface ValuesGridProps {
  label?: string
  headline: string
  values: Value[]
}

export default function ValuesGrid({ label, headline, values }: ValuesGridProps) {
  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="text-center mb-12 animate-fade-in">
          {label && (
            <p className="label-text text-navy mb-4">{label}</p>
          )}
          <h2 className="heading-2 text-navy">{headline}</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ValueCard title={value.title} text={value.text} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
