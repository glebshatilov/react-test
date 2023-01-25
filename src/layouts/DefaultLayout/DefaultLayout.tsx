import { Outlet } from 'react-router-dom'
import Header from '@/layouts/header/Header/Header.js'
import Footer from '@/layouts/footer/Footer/Footer.js'
import './DefaultLayout.scss'

function DefaultLayout() {
  return (
    <div className="default-layout">
      <header className="default-layout__header">
        <Header />
      </header>
      <main className="default-layout__main">
        <Outlet />
      </main>
      <footer className="default-layout__footer">
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
