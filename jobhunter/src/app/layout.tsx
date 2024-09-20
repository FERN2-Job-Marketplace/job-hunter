import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job Hunter',
  description: 'Hunt Your Slave!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      >
        <AuthProvider>
          <Navbar />
          <div className="bg-gradient-to-r bg-slate-900 text-gray-200">
            {children}
          </div>
          <div className="w-screen bg-[#202430]">
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
