import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Real Estate | Property Dealer in Karachi',
  description:
    'Buy, sell, rent, or invest in properties across Karachi. Trusted real estate agency with expert property dealers.',
  generator: 'Next.js',
  applicationName: 'Real Estate Karachi',
  keywords: [
    'real estate Karachi',
    'property dealers Karachi',
    'houses for sale',
    'plots for sale Karachi',
    'buy apartment Karachi',
    'property investment',
  ],
  authors: [{ name: 'Ch Talha', url: 'https://your-website.com' }],
  creator: 'Ch Talha',
  publisher: 'Real Estate Karachi',

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  icons: {
    icon: '/download.png', 
  },

  openGraph: {
    title: 'Real Estate | Trusted Property Dealer in Karachi',
    description:
      'Discover premium properties, houses, apartments, and plots for sale and rent in Karachi.',
    url: 'https://your-website.com',
    siteName: 'Real Estate Karachi',
    images: [
      {
        url: '/og-image.png', // Put a real image in public folder
        width: 1200,
        height: 630,
        alt: 'Real Estate in Karachi',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Karachi',
    description:
      'Buy, sell, or rent properties in Karachi with top-rated property dealers.',
    creator: '@your_twitter', // optional
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
