import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { Saira_Condensed } from 'next/font/google'
import { StickyTab } from '@/components/header/StickyTab'
import { getParentData } from '@/services/TabCategories'

const inter = Inter({ subsets: ['latin'] })
const saira_condensed = Saira_Condensed ({ subsets: ['latin'], weight: '400',})

export const metadata = {
  title: 'Monster Notebook | Performans Tutkunlarına Özel Notebook\'lar',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const dataParentCat = await getParentData();
  return (
    <html lang="en">

      <body className={saira_condensed.className}>
        <Header />
        <StickyTab data = {dataParentCat}/>
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
