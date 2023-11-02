import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layouts/Navbar'
import Container from '@/components/layouts/Container'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  ) 
  
  
}
