import type { Metadata } from 'next'

import localFont from 'next/font/local'

const liberationMono = localFont({
  src: [
    {
      path: '../fonts/liberation_mono/LiberationMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

import Header from '@/components/header/header'
import RightPanel from '@/components/right-panel/right_panel'
import AppSidebar from '@/components/sidebar/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: '_Obiski',
  description: 'Personal portfolio of Obiski, a software developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${liberationMono.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          <SidebarProvider
            style={
              {
                '--sidebar-width': 'calc(var(--sidebar-width-icon))',
              } as React.CSSProperties
            }
            className="block"
          >
            <Header />

            <div className="flex w-full justify-stretch">
              <AppSidebar />

              <main className="w-full max-md:overflow-y-auto md:flex md:items-start md:[&>section]:max-h-screen md:[&>section]:overflow-y-auto">
                <section className="border-border border-r md:w-[70%]">
                  {children}
                </section>

                <section className="max-md:hidden md:w-[40%] lg:w-[30%]">
                  <RightPanel />
                </section>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
