import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Gala 2026',
  description: 'Frontend application for Gala 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
