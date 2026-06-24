import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { newsArticles, newsContent } from '@/lib/data/news'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'News and Happenings | Atlantis Fire Protection',
  description: 'Latest news and updates from Atlantis Fire Protection, including company announcements, industry insights, and regional developments.',
  openGraph: {
    title: 'News and Happenings | Atlantis Fire Protection',
    description: 'Latest news and updates from Atlantis Fire Protection',
    url: 'https://atlantisfire.com/news',
  },
}

export default function NewsPage() {
  // Sort articles by date (newest first)
  const sortedArticles = [...newsArticles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const featuredArticle = sortedArticles[0]
  const otherArticles = sortedArticles.slice(1)

  return (
    <>
      {/* ============================================================
          SECTION 1: HERO
          Cream background with centered headline
          ============================================================ */}
      <section className="w-full bg-cream py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[40px] lg:px-[80px] text-center">
          {/* Label */}
          <p className="label-text text-navy mb-[16px]">
            {newsContent.hero.label}
          </p>

          {/* Heading */}
          <h1 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[24px]">
            {newsContent.hero.headline}
          </h1>

          {/* Body */}
          <p className="body-palatino-18 text-black max-w-[900px] mx-auto">
            {newsContent.hero.body}
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: FEATURED ARTICLE
          White background with two-column layout
          ============================================================ */}
      {featuredArticle && (
        <section className="w-full bg-white py-[80px]">
          <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">
            <div className="flex flex-col lg:flex-row gap-[60px] items-center">
              {/* Left Content */}
              <div className="flex-1">
                {/* Category Badge */}
                <span className="inline-block px-[16px] py-[6px] bg-coral text-white text-[12px] font-avenir font-bold uppercase tracking-[0.5px] rounded-[2px] mb-[16px]">
                  {featuredArticle.category}
                </span>

                {/* Label */}
                <p className="label-text text-navy mb-[16px]">FEATURED NEWS</p>

                {/* Headline */}
                <h2 className="font-serif text-navy text-[32px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
                  {featuredArticle.title}
                </h2>

                {/* Date */}
                <p className="font-avenir text-[14px] text-gray-600 mb-[24px]">
                  {featuredArticle.date}
                </p>

                {/* Excerpt */}
                <p className="body-palatino-18 text-black mb-[32px]">
                  {featuredArticle.excerpt}
                </p>

                {/* Read More Button */}
                <Link href={`/news/${featuredArticle.slug}`}>
                  <Button variant="primary" size="md">
                    READ FULL ARTICLE
                  </Button>
                </Link>
              </div>

              {/* Right Image Placeholder */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-[500px] aspect-[4/3] bg-[#E5EEF8] rounded-[4px] flex items-center justify-center">
                  <svg className="w-[80px] h-[80px] text-navy opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 3: ALL NEWS
          Cream background with article cards grid
          ============================================================ */}
      {otherArticles.length > 0 && (
        <section className="w-full bg-cream py-[80px]">
          <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">
            {/* Section Heading */}
            <h2 className="font-serif text-navy text-[32px] md:text-[36px] lg:text-[42px] leading-tight text-center mb-[60px]">
              Recent News
            </h2>

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
              {otherArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="w-full aspect-[16/10] bg-[#E5EEF8] flex items-center justify-center">
                    <svg className="w-[60px] h-[60px] text-navy opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>

                  {/* Card Content */}
                  <div className="p-[24px]">
                    {/* Category Badge */}
                    <span className="inline-block px-[12px] py-[4px] bg-navy text-white text-[11px] font-avenir font-bold uppercase tracking-[0.5px] rounded-[2px] mb-[12px]">
                      {article.category}
                    </span>

                    {/* Date */}
                    <p className="font-avenir text-[13px] text-gray-600 mb-[12px]">
                      {article.date}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-navy text-[20px] md:text-[22px] leading-tight mb-[12px] group-hover:text-coral transition-colors duration-200">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="body-palatino-18 text-black line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 4: CTA SECTION
          Navy background with centered call-to-action
          ============================================================ */}
      <section className="w-full bg-navy py-[80px]">
        <div className="max-w-[1000px] mx-auto px-[40px] text-center">
          <h2 className="font-serif text-white text-[32px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
            Stay Connected with Atlantis Fire
          </h2>
          <p className="body-palatino-18 text-white mb-[40px]">
            Interested in learning more about our platform or exploring a partnership?
          </p>
          <a
            href="mailto:info@atlantisfire.com?subject=Inquiry from Atlantis Fire Website"
            className="inline-flex items-center justify-center h-[40px] px-[32px] bg-coral text-white font-semibold text-[14px] tracking-[0.5px] rounded-[2px] hover:bg-[#FF8C42] transition-colors duration-200 no-underline"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: DECORATIVE FOOTER
          Orange horizontal bar image
          ============================================================ */}
      <section className="w-full">
        <div className="w-full relative" style={{ height: '180px' }}>
          <Image
            src="/orange_horizontal_bar.jpg"
            alt="Decorative footer"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    </>
  )
}
