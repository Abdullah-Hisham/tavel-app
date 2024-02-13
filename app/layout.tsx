'use client'

import React from 'react';
import { useState } from 'react';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
};
export const Context=React.createContext()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const[isopen,setopen]=useState(false)
  return (
    <Context.Provider value={[isopen,setopen]}> 
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    </Context.Provider>
  )
}
