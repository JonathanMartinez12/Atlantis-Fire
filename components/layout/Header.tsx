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
          <Link href="/" className="flex items-center group" aria-label="Atlantis Fire Protection Home">
            <img
              src="/atlantis_logo.png"
              alt="Atlantis Fire Protection"
              className="h-auto w-48 md:w-64"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
