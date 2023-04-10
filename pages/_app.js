import Sidebar from '@/js/components/sidebar/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='main-container'>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
