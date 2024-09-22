import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@/assets/css/styles.css";
import AuthProvider from './context/AuthProvider'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import Head from 'next/head';

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
    
    <AuthProvider>
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </Head>
      <body
      >
          <Navbar />
          <div className="bg-gradient-to-r bg-slate-900 text-gray-200">
            {children}
          </div>
          <div className="w-screen bg-[#202430]">
            <Footer />
          </div>
        
      </body>
    </html>
    </AuthProvider>
  )
}
