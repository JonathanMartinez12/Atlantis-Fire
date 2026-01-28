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
                width={322}
                height={67}
                className="h-[120px] w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-[8px]">{siteConfig.description}</p>
            <p className="text-coral font-medium">{siteConfig.tagline}</p>
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
            <Link
              href="/contact"
              className="text-coral hover:text-coral-300 transition-colors duration-200 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[48px] pt-[32px] border-t border-navy-400">
          <p className="text-gray-400 text-[14px] text-center">
            {siteConfig.copyright}
          </p>
        </div>
      </Container>
    </footer>
  )
}
