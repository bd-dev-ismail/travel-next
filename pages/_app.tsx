import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Component/Header/Header'
import Link from 'next/link'
import Footer from '../Component/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return <div data-theme='light'>
    
     <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
}
