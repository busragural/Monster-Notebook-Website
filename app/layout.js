import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { Saira_Condensed } from 'next/font/google'
import { StickyTab } from '@/components/StickyTab'

const inter = Inter({ subsets: ['latin'] })
const saira_condensed = Saira_Condensed ({ subsets: ['latin'], weight: '400',})

export const metadata = {
  title: 'Monster Notebook | Performans Tutkunlarına Özel Notebook\'lar',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={saira_condensed.className}>
        <Header />
        <StickyTab/>
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
