'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Container from './Container'
import Button from '../ui/Button'
import { navigation, siteConfig } from '@/lib/data/siteContent'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-navy py-[16px] sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Atlantis Fire Protection Home">
            <Image
              src="/Atlantis_logo _horiz.png"
              alt="Atlantis Fire Protection"
              width={322}
              height={67}
              className="h-[50px] w-auto md:h-[67px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[32px]">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-coral transition-colors duration-200 font-medium tracking-wide"
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
            className="md:hidden text-white p-[8px]"
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
          <div id="mobile-menu" className="md:hidden mt-[16px] pb-[16px] border-t border-navy-400">
            <div className="flex flex-col gap-[16px] pt-[16px]">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-coral transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
              <Button href="/contact" variant="primary" size="md" className="w-full mt-[8px]">
                CONTACT
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
