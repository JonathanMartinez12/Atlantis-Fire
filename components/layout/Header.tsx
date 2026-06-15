'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../ui/Button'
import { navigation } from '@/lib/data/siteContent'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Navy Top Bar - 1440px x 50px */}
      <div className="w-full h-[50px] bg-navy" />

      {/* Navigation Bar - white background */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-[32px]">
          <nav className="flex items-center py-[10px]" aria-label="Main navigation">
            {/* Logo - 322px x 66.82px */}
            <Link href="/" className="flex items-center" aria-label="Atlantis Fire Protection Home">
              <Image
                src="/Atlantis_logo _horiz.png"
                alt="Atlantis Fire Protection"
                width={322}
                height={67}
                className="w-[260px] h-[52px]"
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-[50px] flex-1 justify-center">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link-text hover:text-coral transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
              <Button
                onClick={() => window.location.href = 'mailto:info@atlantisfire.com?subject=Inquiry from Atlantis Fire Website'}
                variant="primary"
                size="md"
              >
                GET IN TOUCH
              </Button>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com/company/atlantis-fire-protect/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-coral transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-navy p-[8px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden pb-[16px] border-t border-gray-200">
              <div className="flex flex-col gap-[16px] pt-[16px]">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link-text hover:text-coral transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                ))}
                <Button
                  onClick={() => window.location.href = 'mailto:info@atlantisfire.com?subject=Inquiry from Atlantis Fire Website'}
                  variant="primary"
                  size="md"
                  className="w-[158px] mt-[8px]"
                >
                  GET IN TOUCH
                </Button>

                {/* LinkedIn Icon */}
                <a
                  href="https://linkedin.com/company/atlantis-fire-protect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[8px] text-navy hover:text-coral transition-colors mt-[8px]"
                  aria-label="Visit our LinkedIn page"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-[14px]">LinkedIn</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
