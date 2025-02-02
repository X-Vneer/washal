import type { Metadata } from "next"
import { Tajawal } from "next/font/google"

import "./globals.css"

import { AuthProvider } from "@/providers/auth/auth-context"
import { NextUiProvider } from "@/providers/next-ui"

import Register from "@/components/auth/register"
import Footer from "@/components/common/footer"
import Header from "@/components/common/header"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import MyReactQueryProvider from "@/providers/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const tajwal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Four Seasons Hotel",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajwal.className}>
        <NextUiProvider>
          <AuthProvider>
            <MyReactQueryProvider>
              <Header />
              {children}
              <Footer />
              <Register />
              <ReactQueryDevtools initialIsOpen={false} />
            </MyReactQueryProvider>
          </AuthProvider>
        </NextUiProvider>
      </body>
    </html>
  )
}
