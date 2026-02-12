import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Atlantis Fire | Family-Owned Fire Protection Holding Company',
  description:
    'Learn about Atlantis Fire Protection - a family-owned holding company committed to advancing the fire protection industry through strategic investment and a people-first philosophy.',
  openGraph: {
    title: 'About Atlantis Fire | Family-Owned Fire Protection Holding Company',
    description:
      'Learn about Atlantis Fire Protection - a family-owned holding company committed to advancing the fire protection industry.',
    url: 'https://atlantisfire.com/about',
    images: [
      {
        url: '/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Atlantis Fire Protection',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
          SECTION 1: OUR STORY
          Text on left, image on right
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row py-[80px] px-[40px] lg:px-[80px]">
          {/* Left Content */}
          <div className="flex-1 lg:mr-[60px] mb-[40px] lg:mb-0">
            {/* Label - ABOUT ATLANTIS */}
            <p className="label-text text-navy mb-[16px]">ABOUT ATLANTIS</p>

            {/* Headline - Our Story */}
            <h1 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[32px]">
              Our Story
            </h1>

            {/* Body text - First paragraph */}
            <p className="body-palatino-18 text-black mb-[24px]">
              Atlantis Fire was created by industry veterans who recognized a gap in the fire protection M&A landscape. Many owners wanted to retire or grow, but they were wary of private equity models that prioritize speed over stewardship and corporate priorities over people. Atlantis offers a different path.
            </p>

            {/* Subheading - We acquire and support */}
            <p className="body-palatino-18 text-black font-semibold mb-[12px]">
              We acquire and support companies the right way:
            </p>

            {/* Bullet points */}
            <ul className="mb-[24px] space-y-[8px]">
              <li className="body-palatino-18 text-black flex items-start gap-[12px]">
                <span className="w-[8px] h-[8px] bg-coral rounded-full flex-shrink-0 mt-[12px]" />
                <span>by respecting their legacy,</span>
              </li>
              <li className="body-palatino-18 text-black flex items-start gap-[12px]">
                <span className="w-[8px] h-[8px] bg-coral rounded-full flex-shrink-0 mt-[12px]" />
                <span>investing deeply in their people,</span>
              </li>
              <li className="body-palatino-18 text-black flex items-start gap-[12px]">
                <span className="w-[8px] h-[8px] bg-coral rounded-full flex-shrink-0 mt-[12px]" />
                <span>and focusing on long-term, sustainable growth.</span>
              </li>
            </ul>

            {/* Final paragraph */}
            <p className="body-palatino-18 text-black mb-[32px]">
              Today, Atlantis Fire serves as a home for fire protection businesses that value expertise, culture, and industry integrity.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative" style={{ minHeight: '500px' }}>
            <Image
              src="/about_page_picture.jpeg"
              alt="About Atlantis Fire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: MISSION / VISION / PURPOSE
          Three dark blue cards on light blue background
          ============================================================ */}
      <section className="w-full" style={{ backgroundColor: '#6B8DC7' }}>
        <div className="max-w-[1440px] mx-auto py-[80px] px-[40px] lg:px-[80px]">
          <div className="grid md:grid-cols-3 gap-[32px]">
            {/* Mission Card */}
            <div className="bg-navy p-[40px] text-center">
              <h2 className="font-avenir font-bold text-white text-[24px] uppercase mb-[24px]">
                MISSION
              </h2>
              <p className="body-palatino-18 text-white">
                To build a nationwide platform of fire protection companies grounded in technical excellence, shared expertise, and a culture that puts people first.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-navy p-[40px] text-center">
              <h2 className="font-avenir font-bold text-white text-[24px] uppercase mb-[24px]">
                VISION
              </h2>
              <p className="body-palatino-18 text-white">
                To become the most trusted family-owned fire protection group in the country, recognized for our operational integrity, respect for local brands, and commitment to safeguarding the communities we serve.
              </p>
            </div>

            {/* Purpose Card */}
            <div className="bg-navy p-[40px] text-center">
              <h2 className="font-avenir font-bold text-white text-[24px] uppercase mb-[24px]">
                PURPOSE
              </h2>
              <p className="body-palatino-18 text-white">
                To preserve and strengthen great fire protection companies by providing the resources, stability, and partnership they need to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: OUR VALUES
          Five columns on white background
          ============================================================ */}
      <section className="w-full bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">
          {/* Heading */}
          <h2 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight text-center mb-[60px]">
            Our Values
          </h2>

          {/* 5 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[40px]">
            {/* Integrity */}
            <div className="text-center">
              <h3 className="font-avenir font-bold text-navy text-[18px] uppercase mb-[16px]">
                INTEGRITY
              </h3>
              <p className="body-palatino-18 text-black">
                We lead with honesty and transparency.
              </p>
            </div>

            {/* Accountability */}
            <div className="text-center">
              <h3 className="font-avenir font-bold text-navy text-[18px] uppercase mb-[16px]">
                ACCOUNTABILITY
              </h3>
              <p className="body-palatino-18 text-black">
                We stand behind our companies and our people.
              </p>
            </div>

            {/* Expertise */}
            <div className="text-center">
              <h3 className="font-avenir font-bold text-navy text-[18px] uppercase mb-[16px]">
                EXPERTISE
              </h3>
              <p className="body-palatino-18 text-black">
                We elevate technical excellence across the entire portfolio.
              </p>
            </div>

            {/* Collaboration */}
            <div className="text-center">
              <h3 className="font-avenir font-bold text-navy text-[18px] uppercase mb-[16px]">
                COLLABORATION
              </h3>
              <p className="body-palatino-18 text-black">
                We encourage shared knowledge and support across all companies.
              </p>
            </div>

            {/* Safety */}
            <div className="text-center">
              <h3 className="font-avenir font-bold text-navy text-[18px] uppercase mb-[16px]">
                SAFETY
              </h3>
              <p className="body-palatino-18 text-black">
                Life safety drives every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: THE ATLANTIS PLATFORM
          Cream background with bullet points
          ============================================================ */}
      <section className="w-full bg-cream py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[40px] lg:px-[80px]">
          {/* Heading */}
          <h2 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight text-center mb-[16px]">
            The Atlantis Platform
          </h2>

          {/* Subheading */}
          <p className="font-avenir font-bold text-navy text-[16px] uppercase text-center mb-[48px]">
            WE ENSURE OUR COMPANIES THRIVE BY SUPPORTING THEM IN:
          </p>

          {/* Two columns of bullet points */}
          <div className="grid md:grid-cols-2 gap-x-[80px] gap-y-[20px] mb-[48px]">
            {/* Left column */}
            <div className="space-y-[20px]">
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Strategic leadership support</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Operational system integration</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Technician development and recruiting</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Enhanced safety and compliance processes</p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-[20px]">
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Engineering resources & NICET-certified expertise</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Procurement advantages</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Best-practice sharing</p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="w-[24px] h-[24px] bg-coral flex-shrink-0" />
                <p className="body-palatino-18 text-black">Regional expansion support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: READY TO LEARN MORE
          White section with CTA
          ============================================================ */}
      <section className="w-full bg-white py-[80px]">
        <div className="max-w-[1063px] mx-auto px-[40px] text-center">
          {/* Heading */}
          <h2 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[24px]">
            Ready to Learn More?
          </h2>

          {/* Body text */}
          <p className="body-palatino-18 text-black mb-[40px]">
            Connect with us to discover how Atlantis Fire can support your fire protection business.
          </p>

          {/* CONTACT Button */}
          <Button href="/contact" variant="primary" size="md">
            CONTACT
          </Button>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: ORANGE DECORATIVE IMAGE
          ============================================================ */}
      <section className="w-full">
        <div className="w-full relative" style={{ height: '180px' }}>
          <Image
            src="/orange_horizontal_bar.jpg"
            alt="Decorative background"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </>
  )
}
