import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const fontMono = GeistMono;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ebe9e2' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: 'Express - Maritime Supply Solutions',
  description: 'Professional vessel supply and maritime logistics services for Damietta Port',
  generator: 'Express',
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
      <body className={`font-sans antialiased w-full max-w-[100vw] overflow-x-hidden`}>
        <div className="w-full overflow-x-hidden">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
