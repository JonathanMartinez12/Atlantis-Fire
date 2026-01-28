'use client'

import { useState, FormEvent } from 'react'
import Container from '../layout/Container'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Button from '../ui/Button'
import { isValidEmail } from '@/lib/utils'

interface FormData {
  fullName: string
  email: string
  companyName: string
  phone: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <section className="bg-white section-padding">
        <Container>
          <div className="max-w-[672px] mx-auto text-center animate-fade-in">
            <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-[24px]">
              <svg
                className="w-[32px] h-[32px] text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="heading-3 text-navy mb-[16px]">Thank You!</h2>
            <p className="body-large mb-[32px]">
              Your message has been sent successfully. We&apos;ll get back to you soon.
            </p>
            <Button
              onClick={() => {
                setIsSuccess(false)
                setFormData({
                  fullName: '',
                  email: '',
                  companyName: '',
                  phone: '',
                  message: '',
                })
              }}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="max-w-[672px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-[24px] animate-fade-in">
            <Input
              label="Full Name"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange('fullName')}
              error={errors.fullName}
              placeholder="Your full name"
            />

            <Input
              label="Email Address"
              type="email"
              required
              value={formData.email}
              onChange={handleChange('email')}
              error={errors.email}
              placeholder="your@email.com"
            />

            <Input
              label="Company Name"
              type="text"
              value={formData.companyName}
              onChange={handleChange('companyName')}
              placeholder="Your company (optional)"
            />

            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleChange('phone')}
              placeholder="(555) 123-4567 (optional)"
            />

            <Textarea
              label="Message"
              required
              value={formData.message}
              onChange={handleChange('message')}
              error={errors.message}
              placeholder="How can we help you?"
              rows={5}
            />

            <div className="pt-[16px]">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
