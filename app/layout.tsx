import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Noto_Sans_TC } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto",
})

export const metadata: Metadata = {
  title: "傅聖祐 | Full-Stack Developer",
  description:
    "傅聖祐的個人網站 - 國立中央大學資訊管理學系，專注於全端開發，擅長 Node.js、Vue.js、Python 等技術。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansTC.variable} font-sans`}>{children}</body>
    </html>
  )
}

