import './globals.css'
import '98.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">A Complete Window</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>

          <div className="window-body">
            {children}
          </div>

        </div>
      </body>
    </html>
  )
}
