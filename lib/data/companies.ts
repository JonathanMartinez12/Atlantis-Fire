export interface Company {
  id: string
  name: string
  location: string
  tagline: string
  description: string
  testimonial: {
    label: string
    quote: string
    attribution: string
  }
  logo?: string
}

export const companies: Company[] = [
  {
    id: 'allied',
    name: 'Allied',
    location: 'Alabama & Tennessee',
    tagline: 'A rapidly growing fire protection company built on exceptional people and a strong service culture.',
    description: 'Founded in 2022, Allied delivers full-scope fire protection services, including engineering, design, installation, inspection, and service of sprinkler, fire alarm, and special hazard systems. Known for their outstanding team, Allied has quickly become a preferred provider in Alabama and Tennessee. Their culture attracts high-performing technicians and fosters long-term customer relationships, making Allied one of the most promising emerging companies in the region.',
    testimonial: {
      label: 'Words from Allied:',
      quote: 'Over the last several years, I built Allied Fire Protection into one of the fastest-growing fire protection companies serving Alabama and the surrounding area. After hearing Patrick and the Atlantis Fire Protection team\'s vision for deeply involving operators, treating them as partners, and celebrating the individual brands, I knew I wanted to join the Atlantis Fire Protection platform. I look forward to working with Stella Black, Vince McCoy and the other operators at Atlantis Fire Protection to build one of the best-run, fastest growing platforms in the fire protection industry.',
      attribution: '— Tony Thomas, Chief Executive Officer, Allied Fire Protection',
    },
    logo: '/images/allied-logo.png',
  },
  {
    id: 'mccoy',
    name: 'McCoy Fire',
    location: 'Southeast U.S.',
    tagline: 'The trusted problem-solver for complex fire protection challenges.',
    description: 'Since 2000, McCoy Fire has been recognized by fire marshals, inspectors, and industry professionals as the go-to source for resolving difficult sprinkler and fire alarm issues. With over 25 years of service across Alabama, Florida, Georgia, Tennessee, Mississippi, and South Carolina, McCoy provides engineering, design, installation, inspection, and service for sprinkler, fire alarm, and special hazard systems. Their deep technical expertise and reputation for solving challenging problems make McCoy a cornerstone in the Atlantis portfolio.',
    testimonial: {
      label: 'Words from McCoy:',
      quote: 'Over the 20-plus years in business, we have had our share of highs and lows in the industry, but with our team\'s hard work and dedication, we have managed to build one of the fastest-growing fire protection companies in our market. Having put so much of myself into McCoy Fire and Safety, it was a difficult decision to consider selling and partnering with anyone. However, when Patrick and Atlantis Fire described their approach, I saw how unique it would be in the industry. I did not want to miss the opportunity to be one of the first companies and owner-operators on the platform. I am extremely excited to see what the future holds for Atlantis Fire.',
      attribution: '— Vince McCoy, President, McCoy Fire And Safety',
    },
    logo: '/images/mccoy-logo.png',
  },
  {
    id: 'kellers',
    name: "Keller's",
    location: 'Wilmington, NC (Global Capabilities)',
    tagline: 'Industry-leading expertise in the world\'s most complex fire alarm environments.',
    description: 'Established in 1973, Keller\'s is known for its unmatched strength in fire alarm engineering, design, and service. With multiple NICET IV-certified professionals and more than 50 years of history, Keller\'s is trusted by nuclear facilities, government agencies, industrial campuses, and other highly specialized environments. Their longevity, technical excellence, and long-tenured team make Keller\'s one of the most respected fire alarm firms in the industry, serving clients locally, nationally, and globally.',
    testimonial: {
      label: "Words from Keller's:",
      quote: 'My family started Keller\'s 50 years ago, and over that time, we built a brand and company I care deeply about. I constantly get approached to sell our business to financial firms, and it never felt like the right fit. I\'ve known Patrick Lynch for nearly a decade, and the vision for Atlantis Fire and how they want the operators deeply involved, treat them as partners, and celebrate the individual brands was what I wanted for the next chapter of Keller\'s. I couldn\'t be more excited for Keller\'s to join the Atlantis Fire platform.',
      attribution: "— Stella Black, President, Keller's Inc.",
    },
    logo: '/images/kellers-logo.png',
  },
]

export const brandLogos = [
  { name: 'Allied Fire Protection', logo: '/allied_logo.png' },
  { name: 'McCoy Fire', logo: '/mccoy_fire_logo.png' },
  { name: "Keller's", logo: '/kellers_logo.png' },
]
