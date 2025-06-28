import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Real Estate | Trusted Property Dealer in Karachi',
  description: 'Buy, sell, or rent properties in Karachi with our expert real estate services. Trusted by thousands',
  generator: 'Real Estate by Ch Talha',
   icons: {
    icon: '/download.png', // Make sure this file is in the "public" folder
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
