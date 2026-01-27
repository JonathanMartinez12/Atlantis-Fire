import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import CompanyCard from '@/components/sections/CompanyCard'
import CTASection from '@/components/sections/CTASection'
import { companies } from '@/lib/data/companies'
import { companiesContent } from '@/lib/data/siteContent'

export const metadata: Metadata = {
  title: 'Our Portfolio | Atlantis Fire Protection Companies',
  description:
    'Discover our portfolio of proven fire protection companies including Allied Fire Protection, McCoy Fire, and Keller\'s. Each company brings decades of expertise and strong regional reputations.',
  openGraph: {
    title: 'Our Portfolio | Atlantis Fire Protection Companies',
    description:
      'Discover our portfolio of proven fire protection companies with decades of expertise.',
    url: 'https://atlantisfire.com/companies',
    images: [
      {
        url: '/images/og-companies.png',
        width: 1200,
        height: 630,
        alt: 'Atlantis Fire Protection Portfolio Companies',
      },
    ],
  },
}

export default function CompaniesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={companiesContent.hero.headline}
        body={companiesContent.hero.body}
        variant="page"
        showImage={false}
      />

      {/* Company Cards */}
      {companies.map((company, index) => (
        <CompanyCard key={company.id} company={company} index={index} />
      ))}

      {/* CTA Section */}
      <CTASection
        headline={companiesContent.cta.headline}
        text={companiesContent.cta.text}
        buttonText={companiesContent.cta.button.text}
        buttonHref={companiesContent.cta.button.href}
      />
    </>
  )
}
