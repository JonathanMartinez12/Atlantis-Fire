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
          <nav className="flex items-center justify-between py-[12px]" aria-label="Main navigation">
            {/* Logo - 322px x 66.82px */}
            <Link href="/" className="flex items-center" aria-label="Atlantis Fire Protection Home">
              <Image
                src="/Atlantis_logo _horiz.png"
                alt="Atlantis Fire Protection"
                width={322}
                height={67}
                className="w-[322px] h-[67px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-[40px]">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link-text hover:text-coral transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
              <Button href="/contact" variant="primary" size="md">
                CONTACT
              </Button>
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
                <Button href="/contact" variant="primary" size="md" className="w-[158px] mt-[8px]">
                  CONTACT
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
