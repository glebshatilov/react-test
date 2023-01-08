import { ReactNode } from 'react'
import Header from '@/layouts/header/Header/Header.js'
import Footer from '@/layouts/footer/Footer/Footer.js'
import './DefaultLayout.scss'

interface Props {
  children: ReactNode
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="default-layout">
      <header className="default-layout__header">
        <Header />
      </header>
      <main className="default-layout__main">
        {children}
      </main>
      <footer className="default-layout__footer">
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
