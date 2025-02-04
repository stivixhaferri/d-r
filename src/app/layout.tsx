import { ClerkProvider} from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'D&R Services',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
     
      <html lang="en">
        <body className='w-full overflow-x-hidden'>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    
    </ClerkProvider>
  )
}