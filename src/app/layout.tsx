import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// SEO Metadata
export const metadata: Metadata = {
  title: 'DBinnovates | Full-Stack Developer & Software Engineer',
  description:
    'Professional web development, mobile apps, and AI automation solutions by David Banjo. Specializing in React, Next.js, and custom software development.',
  keywords: [
    'Full-Stack Developer',
    'Web Development',
    'Mobile App Development',
    'AI Automation',
    'React',
    'Next.js',
    'DBinnovates',
    'David Banjo',
  ],
  authors: [{ name: 'David Banjo' }],
  creator: 'DBinnovates',
  metadataBase: new URL('https://dbinnovates.com'), // Update with your actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dbinnovates.com',
    title: 'DBinnovates | Full-Stack Developer',
    description: 'Professional web development and software engineering services',
    siteName: 'DBinnovates',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DBinnovates Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DBinnovates | Full-Stack Developer',
    description: 'Professional web development and software engineering services',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter">
        {children}
        
        {/* Google Analytics - Replace YOUR_GA_MEASUREMENT_ID with your actual GA4 ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}

