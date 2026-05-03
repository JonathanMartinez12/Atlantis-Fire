import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Atlantis Fire Protection',
  description: 'Privacy policy for Atlantis Fire Protection',
  openGraph: {
    title: 'Privacy Policy | Atlantis Fire Protection',
    description: 'Privacy policy for Atlantis Fire Protection',
    url: 'https://atlantisfire.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-cream py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[40px] lg:px-[80px]">
        <h1 className="font-serif text-navy text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[32px]">
          Privacy Policy
        </h1>
        <div className="body-palatino-18 text-black">
          <p className="mb-[24px]">
            Privacy policy content coming soon.
          </p>
          <p>
            For questions about our privacy practices, please contact us at{' '}
            <a
              href="mailto:info@atlantisfire.com"
              className="text-coral hover:underline"
            >
              info@atlantisfire.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
