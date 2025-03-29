import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Christian Rubi',
  description: 'Portafolio personal de Christian Rubi',
  keywords: ['portfolio', 'developer', 'designer', 'creative', 'fullstack', 'react', 'frontend', 'nextjs', ],
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
