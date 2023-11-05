import '@/styles/globals.css'

// INTERNAL IMPORTS
import { TrackingProvider } from "../context/Tracking";
import { NavBar, Footer } from '@/Components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer />
    </>
  )
}
