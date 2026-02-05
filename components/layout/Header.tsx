'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import Button from '../ui/Button'
import { navigation, siteConfig } from '@/lib/data/siteContent'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-navy py-4 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Atlantis Fire Protection Home">
            {/* Logo Icon */}
            <div className="w-12 h-12 relative flex-shrink-0">
              <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                {/* Outer circle/arch */}
                <path
                  d="M10 45 Q10 15, 30 10 Q50 15, 50 45"
                  fill="none"
                  stroke="#4A7CB5"
                  strokeWidth="3"
                />
                {/* Inner flame */}
                <path
                  d="M25 48 Q20 38, 25 28 Q30 20, 30 15 Q30 20, 35 28 Q40 38, 35 48 Q32 42, 30 45 Q28 42, 25 48"
                  fill="#C84B31"
                />
                <path
                  d="M28 48 Q26 42, 28 35 Q30 30, 30 25 Q30 30, 32 35 Q34 42, 32 48 Q31 44, 30 46 Q29 44, 28 48"
                  fill="#E8A04C"
                />
              </svg>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-white text-xl md:text-2xl font-bold tracking-wide">ATLANTIS</span>
              <span className="text-coral text-sm md:text-base font-semibold tracking-widest">FIRE PROTECTION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
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
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-navy-400">
            <div className="flex flex-col gap-4 pt-4">
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
              <Button href="/contact" variant="primary" size="md" className="w-full mt-2">
                CONTACT
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
