import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Benjamin Vink - Product Marketing Manager',
  description: 'Strategic Product Marketing Manager with 15+ years driving growth across SaaS, FinTech & B2B. Passionate about sustainable marketing strategies that create positive impact.',
  keywords: 'product marketing, growth marketing, SaaS marketing, fintech marketing, sustainability marketing, marketing manager',
  authors: [{ name: 'Benjamin Vink' }],
  openGraph: {
    title: 'Benjamin Vink - Product Marketing Manager',
    description: 'Strategic Product Marketing Manager driving sustainable growth with 15+ years of proven results',
    url: 'https://benjaminvink.com',
    siteName: 'Benjamin Vink Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Vink - Product Marketing Manager',
    description: 'Strategic Product Marketing Manager driving sustainable growth with 15+ years of proven results',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  )
}