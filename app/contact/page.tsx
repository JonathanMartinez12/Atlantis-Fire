import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'
import { contactContent } from '@/lib/data/siteContent'

export const metadata: Metadata = {
  title: 'Contact Us | Atlantis Fire Protection',
  description:
    'Get in touch with Atlantis Fire Protection. Whether you\'re exploring a partnership or want to learn more about our portfolio, we\'re here to help.',
  openGraph: {
    title: 'Contact Us | Atlantis Fire Protection',
    description:
      'Get in touch with Atlantis Fire Protection for partnership opportunities or inquiries.',
    url: 'https://atlantisfire.com/contact',
    images: [
      {
        url: '/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Atlantis Fire Protection',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={contactContent.hero.headline}
        body={contactContent.hero.body}
        variant="page"
        showImage={false}
      />

      {/* Contact Form */}
      <ContactForm />
    </>
  )
}
