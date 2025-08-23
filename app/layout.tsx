import type { Metadata } from 'next'
import { Open_Sans, Lato } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const lato = Lato({ 
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anibal Cuevas - Full Stack Developer Portfolio',
  description: 'Full-stack developer with expertise in sales and marketing, combining technical skills with business insights.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Anibal Cuevas' }],
  creator: 'Anibal Cuevas',
  openGraph: {
    title: 'Anibal Cuevas - Full Stack Developer Portfolio',
    description: 'Full-stack developer with expertise in sales and marketing, combining technical skills with business insights.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anibal Cuevas - Full Stack Developer Portfolio',
    description: 'Full-stack developer with expertise in sales and marketing, combining technical skills with business insights.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-background text-white">
        {children}
      </body>
    </html>
  )
}
