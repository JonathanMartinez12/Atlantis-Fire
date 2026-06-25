import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { newsArticles } from '@/lib/data/news'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate metadata for each article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found | Atlantis Fire Protection',
    }
  }

  return {
    title: `${article.title} | Atlantis Fire Protection`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://atlantisfire.com/news/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
    },
  }
}

// Generate static paths for all articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: PageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* ============================================================
          SECTION 1: ARTICLE HEADER
          Cream background with article title and metadata
          ============================================================ */}
      <section className="w-full bg-cream py-[80px]">
        <div className="max-w-[1000px] mx-auto px-[40px] lg:px-[80px]">
          {/* Breadcrumb */}
          <div className="mb-[24px]">
            <Link
              href="/news"
              className="font-avenir text-[14px] text-navy hover:text-coral transition-colors duration-200"
            >
              ← Back to News
            </Link>
          </div>

          {/* Category Badge */}
          <span className="inline-block px-[16px] py-[6px] bg-coral text-white text-[12px] font-avenir font-bold uppercase tracking-[0.5px] rounded-[2px] mb-[16px]">
            {article.category}
          </span>

          {/* Label */}
          {article.content.location && (
            <p className="label-text text-navy mb-[16px]">
              {article.content.location}
            </p>
          )}

          {/* Article Title */}
          <h1 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[16px]">
            {article.title}
          </h1>

          {/* Subtitle */}
          {article.content.subtitle && (
            <h2 className="font-avenir font-semibold text-navy text-[18px] md:text-[20px] mb-[24px]">
              {article.content.subtitle}
            </h2>
          )}

          {/* Date */}
          <p className="font-avenir text-[14px] text-gray-600 mb-[24px]">
            {article.date}
          </p>

          {/* Excerpt/Lead */}
          <p className="body-palatino-18 text-black font-semibold italic border-l-4 border-coral pl-[24px] mb-[24px]">
            {article.excerpt}
          </p>

          {/* Article Image */}
          {article.image && (
            <div className="relative w-full max-w-[600px] aspect-[16/9] bg-[#E5EEF8] rounded-[4px] overflow-hidden mt-[40px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-contain p-[40px]"
              />
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 2: ARTICLE BODY
          White background with article content
          ============================================================ */}
      <section className="w-full bg-white py-[80px]">
        <div className="max-w-[900px] mx-auto px-[40px] lg:px-[80px]">
          {/* Body Paragraphs */}
          {article.content.body.map((paragraph, index) => (
            <p key={index} className="body-palatino-18 text-black mb-[24px]">
              {paragraph}
            </p>
          ))}

          {/* Quotes Section */}
          {article.content.quotes && article.content.quotes.length > 0 && (
            <div className="my-[48px]">
              {article.content.quotes.map((quote, index) => (
                <div key={index} className="mb-[40px] last:mb-0">
                  <blockquote className="border-l-4 border-navy pl-[24px] mb-[16px]">
                    <p className="body-palatino-18 text-black italic mb-[16px]">
                      &quot;{quote.text}&quot;
                    </p>
                    <footer className="font-avenir font-semibold text-navy text-[14px]">
                      — {quote.attribution}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          )}

          {/* About Section */}
          {article.content.about && (
            <div className="mt-[60px] pt-[40px] border-t border-gray-200">
              <h3 className="font-avenir font-bold text-navy text-[18px] uppercase mb-[16px]">
                {article.content.about.title}
              </h3>
              <p className="body-palatino-18 text-black mb-[24px]">
                {article.content.about.text}
              </p>
            </div>
          )}

          {/* Contact Section */}
          {article.content.contact && (
            <div className="mt-[40px] pt-[40px] border-t border-gray-200">
              <p className="body-palatino-18 text-black mb-[16px]">
                {article.content.contact.text}
              </p>
              {article.content.contact.details && (
                <div className="space-y-[8px]">
                  {article.content.contact.details.map((detail, index) => (
                    <p key={index} className="font-avenir text-[14px] text-black">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
              <div className="mt-[24px]">
                <a
                  href="mailto:info@atlantisfire.com?subject=Inquiry from Atlantis Fire Website"
                  className="inline-flex items-center justify-center h-[40px] px-[32px] bg-coral text-white font-semibold text-[14px] tracking-[0.5px] rounded-[2px] hover:bg-[#FF8C42] transition-colors duration-200 no-underline"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 3: BACK TO NEWS
          Cream background with navigation
          ============================================================ */}
      <section className="w-full bg-cream py-[60px]">
        <div className="max-w-[900px] mx-auto px-[40px] lg:px-[80px] text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center h-[40px] px-[32px] bg-navy text-white font-semibold text-[14px] tracking-[0.5px] rounded-[2px] hover:bg-[#4A5584] transition-colors duration-200 no-underline"
          >
            ← BACK TO ALL NEWS
          </Link>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: DECORATIVE FOOTER
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
