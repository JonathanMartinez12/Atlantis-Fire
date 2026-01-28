import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { navigation, siteConfig } from '@/lib/data/siteContent'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Taglines */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-4">
              {/* Logo - scaled down for footer */}
              <div className="relative flex-shrink-0" style={{ width: '200px', height: '42px' }}>
                <Image
                  src="/atlantis_logo.png"
                  alt="Atlantis Fire Protection"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
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
