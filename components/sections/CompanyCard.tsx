import Container from '../layout/Container'
import Card from '../ui/Card'
import { Company } from '@/lib/data/companies'

interface CompanyCardProps {
  company: Company
  index: number
}

export default function CompanyCard({ company, index }: CompanyCardProps) {
  const isEven = index % 2 === 0

  return (
    <section className={`${isEven ? 'bg-white' : 'bg-cream'} section-padding`}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-[48px] items-start">
          {/* Company Info */}
          <div className={`${!isEven ? 'lg:order-2' : ''} animate-fade-in-up`}>
            {/* Header */}
            <div className="mb-[24px]">
              <div className="flex items-center gap-[16px] mb-[8px]">
                <h2 className="heading-2 text-navy">{company.name}</h2>
                <span className="bg-navy text-white text-[12px] font-semibold px-[12px] py-[4px] rounded-full">
                  {company.location}
                </span>
              </div>
              <p className="text-[18px] text-coral font-medium italic">{company.tagline}</p>
            </div>

            {/* Description */}
            <p className="body-text mb-[32px]">{company.description}</p>

            {/* Testimonial */}
            <Card variant="cream" className="border-l-[4px] border-coral">
              <p className="label-text text-navy mb-[12px]">{company.testimonial.label}</p>
              <blockquote className="text-navy font-serif italic mb-[16px] leading-relaxed">
                &ldquo;{company.testimonial.quote}&rdquo;
              </blockquote>
              <footer className="text-gray-600 font-medium">
                {company.testimonial.attribution}
              </footer>
            </Card>
          </div>

          {/* Image Placeholder */}
          <div className={`${!isEven ? 'lg:order-1' : ''} animate-slide-in-right`}>
            <div className="bg-gray-400 h-[350px] lg:h-[450px] w-full rounded-[8px] flex items-center justify-center">
              {/* Placeholder for company image */}
              <span className="text-gray-600 text-[18px]">{company.name} Image</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
