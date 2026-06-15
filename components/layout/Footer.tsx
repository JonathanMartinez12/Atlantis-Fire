'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { navigation, siteConfig } from '@/lib/data/siteContent'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-[48px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {/* Logo and Taglines */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-[16px]">
              <Image
                src="/reverse_atlantis.png"
                alt="Atlantis Fire Protection"
                width={500}
                height={104}
                className="h-[180px] w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-[8px]">{siteConfig.description}</p>
            <p className="font-medium" style={{ color: '#FF6B35' }}>{siteConfig.tagline}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-[16px]">Quick Links</h3>
            <ul className="space-y-[8px]">
              {navigation.footer.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-coral transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-[16px]">Contact</h3>
            <button
              onClick={() => window.location.href = 'mailto:info@atlantisfire.com?subject=Inquiry from Atlantis Fire Website'}
              className="font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 text-left block mb-[16px]"
              style={{ color: '#FF6B35' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C42'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FF6B35'}
            >
              Get in Touch
            </button>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/company/atlantis-fire-protect/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] text-gray-300 hover:text-white transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-[14px]">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[48px] pt-[32px] border-t border-navy-400">
          <p className="text-gray-400 text-[14px] text-center">
            © Copyright 2026 Atlantis Fire Protection, LLC |{' '}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <a href="mailto:info@atlantisfire.com" className="hover:text-white transition-colors">
              info@atlantisfire.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
