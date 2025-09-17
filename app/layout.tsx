import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/lib/ThemeContext'

export const metadata: Metadata = {
  title: '4 Sports Elite Training - Jonathan Mensah | Professional Soccer Training Columbus',
  description: 'Elite soccer training with former Columbus Crew Captain Jonathan Mensah. 16+ years professional experience, MLS Cup winner, Ghana international. Located at Warner Woods Park, Columbus, OH.',
  keywords: 'Jonathan Mensah, Columbus Crew, 4 Sports, elite soccer training, professional soccer coaching, Columbus soccer, Ghana national team, MLS Cup winner, Warner Woods Park',
  authors: [{ name: '4 Sports Elite Training' }],
  openGraph: {
    title: '4 Sports Elite Training - Jonathan Mensah | Professional Soccer Training Columbus',
    description: 'Elite soccer training with former Columbus Crew Captain Jonathan Mensah. 16+ years professional experience, MLS Cup winner, Ghana international.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4 Sports Elite Training - Jonathan Mensah | Professional Soccer Training Columbus',
    description: 'Elite soccer training with former Columbus Crew Captain Jonathan Mensah. 16+ years professional experience, MLS Cup winner, Ghana international.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white dark:bg-dark-900 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 