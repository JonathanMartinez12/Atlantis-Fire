import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'cream' | 'white' | 'navy'
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white shadow-md',
    cream: 'bg-cream',
    white: 'bg-white',
    navy: 'bg-navy text-white',
  }

  return (
    <div className={`rounded-lg p-6 md:p-8 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

interface ValueCardProps {
  title: string
  text: string
  className?: string
}

export function ValueCard({ title, text, className = '' }: ValueCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="heading-4 text-navy mb-3">{title}</h3>
      <p className="body-text">{text}</p>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  text: string
  className?: string
}

export function FeatureCard({ title, text, className = '' }: FeatureCardProps) {
  return (
    <Card className={`h-full ${className}`}>
      <h3 className="heading-4 text-navy mb-4">{title}</h3>
      <p className="body-text">{text}</p>
    </Card>
  )
}
