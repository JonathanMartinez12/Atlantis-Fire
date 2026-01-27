import Link from 'next/link'
import Container from './Container'
import { navigation, siteConfig } from '@/lib/data/siteContent'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Taglines */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              {/* Logo Icon */}
              <div className="w-10 h-10 relative flex-shrink-0">
                <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                  <path
                    d="M10 45 Q10 15, 30 10 Q50 15, 50 45"
                    fill="none"
                    stroke="#4A7CB5"
                    strokeWidth="3"
                  />
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
              <span className="text-white text-lg font-bold tracking-wide">ATLANTIS FIRE PROTECTION</span>
            </Link>
            <p className="text-gray-300 mb-2">{siteConfig.description}</p>
            <p className="text-coral font-medium">{siteConfig.tagline}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <Link
              href="/contact"
              className="text-coral hover:text-coral-300 transition-colors duration-200 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-400">
          <p className="text-gray-400 text-sm text-center">
            {siteConfig.copyright}
          </p>
        </div>
      </Container>
    </footer>
  )
}
