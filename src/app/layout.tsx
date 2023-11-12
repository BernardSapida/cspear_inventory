import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import TrpcProvider from "@/lib/trpc/Provider";

import Navbar from "@/components/navigation/Navbar";
import { Providers } from '@/components/Providers';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <TrpcProvider>
            <Providers>
              <main className="flex">
                <Navbar />
                <section className='w-full px-5 h-screen overflow-y-auto'>
                  {children}
                </section>
                <Toaster richColors position="top-center" />
              </main>
            </Providers>
          </TrpcProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
