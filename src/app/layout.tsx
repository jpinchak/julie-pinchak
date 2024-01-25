import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Show } from '@chakra-ui/react'
import Navbar from './navbar'
import Menu from './menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Julie Pinchak',
  description: "Julie Pinchak's personal page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>
          <Show above='xl'>
            <Navbar />
          </Show>
          <Show below='xl'>
            <Menu />
          </Show>
          {children}
        </Providers>
      </body>
    </html>
  )
}
