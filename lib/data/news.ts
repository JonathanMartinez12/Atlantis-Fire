export interface NewsArticle {
  id: string
  slug: string
  title: string
  date: string
  category: 'Press Release' | 'Company Update' | 'Industry News'
  excerpt: string
  image?: string
  content: {
    subtitle?: string
    location?: string
    body: string[]
    quotes?: {
      text: string
      attribution: string
    }[]
    about?: {
      title: string
      text: string
    }
    contact?: {
      text: string
      details?: string[]
    }
  }
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'bama-fire-acquisition-2026',
    slug: 'bama-fire-protection-acquisition',
    title: 'Atlantis Fire Protection Announces Acquisition of Bama Fire Protection',
    date: 'June 10, 2026',
    category: 'Press Release',
    excerpt: 'Danny Dickinson, Founder and Owner of Bama Fire since 2006, becomes a partner of Atlantis Fire Protection.',
    image: '/bama_logo.png',
    content: {
      location: 'DALLAS',
      subtitle: 'Atlantis Fire Protection adds Bama Fire Protection to its growing fire protection platform',
      body: [
        'Atlantis Fire Protection announced the acquisition of Bama Fire Protection of Birmingham, Alabama, a leading fire safety, extinguisher and suppression company serving the state of Alabama. Founded 20 years ago and led by Owner Danny Dickinson, Bama Fire Protection built an outstanding reputation in the region.',
        'Bama Fire will now be operated in conjunction with Allied Fire Protection, another Atlantis Fire Protection company based in Hanceville, Alabama, while retaining the Bama Fire brand. By combining Allied Fire\'s exceptional fire alarm and sprinkler capabilities with the newly acquired fire extinguisher and suppression services of Bama Fire, the companies can deliver a full suite of fire protection services to customers throughout Alabama.',
      ],
      quotes: [
        {
          text: 'Bama Fire Protection marks the sixth acquisition for Atlantis Fire Protection and is a great fit with Allied Fire. For over 20 years, Bama Fire Founder Danny Dickinson built a loyal customer base delivering a high level of fire extinguisher and suppression services. Allied President Tony Thomas and his team have long admired Bama Fire and had a vision that the combined companies, offering a comprehensive suite of fire protection capabilities, could deliver unmatched service to customers in the great state of Alabama. Bama Fire and Allied Fire now give us an incredible team, a full suite of fire product and services, and a loyal customer base to continuously fuel our rapid growth in Alabama.',
          attribution: 'Patrick Lynch, Chief Executive Officer and Co-Founder of Atlantis Fire',
        },
        {
          text: 'For over 20 years, we built Bama Fire into a company our customers can trust and one the community can rely upon to deliver best-in-class fire extinguisher and suppression. I\'ve known Tony Thomas, Paul Champion and the leadership at Allied Fire and their stellar reputation for quite some time. As I heard Patrick Lynch\'s and Atlantis Fire Protection\'s vision for combining Bama Fire and Allied Fire to service customers for all their fire safety needs, I decided I wanted Bama Fire to be part of that. I look forward to now being a partner in Atlantis Fire, and supporting where I can, as we build one of the best-run, fastest growing platforms in the fire protection industry.',
          attribution: 'Danny Dickinson, Founder and Owner of Bama Fire Protection',
        },
      ],
      about: {
        title: 'About Atlantis Fire',
        text: 'Atlantis Fire aspires to build the highest-quality network of fire protection companies serving enterprise customers throughout the Southeastern United States for all their fire protection needs. Atlantis Fire is headquartered in Dallas, Texas, with offices in Wilmington, North Carolina; Charlotte, North Carolina; Orange Beach, Alabama; Auburn, Alabama; Birmingham, Alabama; Gadsden, Alabama; Myrtle Beach, South Carolina; Pensacola, Florida; and Nashville, Tennessee. Atlantis Fire is financially backed and managed by Lynch Holdings of Dallas, Texas and Capital Alignment Partners of Nashville, Tennessee.',
      },
      contact: {
        text: 'For Regional Fire Protection Companies Wanting More Information on Atlantis Fire Protection, contact:',
      },
    },
  },
]

export const newsContent = {
  hero: {
    label: 'LATEST UPDATES',
    headline: 'News and Happenings',
    body: 'Stay informed with the latest news from Atlantis Fire Protection, including company updates, industry insights, and regional announcements.',
  },
}
