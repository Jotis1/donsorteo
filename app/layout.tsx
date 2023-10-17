import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { NavBar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Don Sorteo',
  description: 'La mejor páginas de sorteos en España.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='no-scrollbar'>
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
