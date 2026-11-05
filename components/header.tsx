"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-zinc-900 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-24 w-60">
              <Image src="/logo-main.png" alt="Bygg & Plattsättning Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Hem
            </Link>
            <Link href="/om-oss" className="hover:text-orange-500 transition-colors">
              Om oss
            </Link>
            <Link href="/tjanster" className="hover:text-orange-500 transition-colors">
              Tjänster
            </Link>
            <Link href="/kontakt" className="hover:text-orange-500 transition-colors">
              Kontakta oss
            </Link>
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors ml-4"
            >
              KONTAKTA OSS
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-zinc-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hem
            </Link>
            <Link
              href="/om-oss"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link
              href="/tjanster"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link
              href="/kontakt"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakta oss
            </Link>
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              KONTAKTA OSS
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
