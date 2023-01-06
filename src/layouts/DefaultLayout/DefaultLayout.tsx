import Header from '@/components/layouts/Header/Header.js'
import Footer from '@/components/layouts/Footer/Footer.js'
import './DefaultLayout.scss'

function DefaultLayout({ children }) {
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
