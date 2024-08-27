import './globals.css'
import type { Metadata } from 'next'
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import AppKitProvider from '@/context'

export const metadata: Metadata = {
  title: 'Mento Discord Wallet Connect',
  description: 'Handling wallet connection for Mento\'s Discord bot.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>
      </body>
    </html>
  )
}