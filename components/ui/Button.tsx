'use client'

import Link from 'next/link'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 btn-text'

  const variants = {
    primary: 'bg-coral text-white hover:bg-coral-600 focus:ring-coral shadow-md hover:shadow-lg',
    secondary: 'bg-navy text-white hover:bg-navy-600 focus:ring-navy shadow-md hover:shadow-lg',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy',
  }

  // Default button size: 158px x 34px as per design spec
  const sizes = {
    sm: 'w-[130px] h-[30px] text-[12px]',
    md: 'w-[158px] h-[34px] text-[14px]',
    lg: 'w-[180px] h-[40px] text-[14px]',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
