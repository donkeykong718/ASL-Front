import './globals.css'
import '98.css'
import Image from 'next/image'
import ContextProvider from './ContextProvider'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ContextProvider>{children}</ContextProvider>
        <Image id='dummy-footer' src='/assets/images/dummy_footer.png' alt="footer" width={1000}
          height={30} />
      </body>
    </html>
  )
}