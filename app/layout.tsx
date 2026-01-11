import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Tools Dictionary",
  description: "Discover the best AI tools for every task",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <nav className="bg-white border-b border-gray-200 shadow-sm"></nav>
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-50 border-t py-6 mt-8">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} AI Tools Dictionary • Discover the best AI tools</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
