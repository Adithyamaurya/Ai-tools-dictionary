import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Tools Dictionary",
  description: "Discover the best AI tools for every task",
    generator: 'v0.dev'
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
          <nav className="bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <Link
                href="/"
                className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                AI Tools Dictionary
              </Link>
            </div>
          </nav>
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
