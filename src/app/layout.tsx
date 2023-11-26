'use client'
import { Inter } from 'next/font/google'
import ContextualHelper from './components/ContextualHelper'
import ShipmentContextProvider from './context/ShipmentContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <ShipmentContextProvider>
        <body className={inter.className}>{children}
          <ContextualHelper/>
        </body>
      </ShipmentContextProvider>
    </html>
  )
}
