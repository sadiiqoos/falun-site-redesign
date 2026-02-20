"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "Hem" },
    { href: "#meny", label: "Pizzameny" },
    { href: "#your-choice", label: "Your Choice" },
    { href: "#tillbehor", label: "Tillbehör" },
    { href: "#kontakt", label: "Kontakt" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="American Take Away Logo" className="h-12 md:h-14 w-auto object-contain" />
            <span className="hidden sm:block text-white text-sm leading-tight">
              it's your american
              <br />
              pizza place
            </span>
          </a>

          {/* Desktop Nav - Navigation links in center/right */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  index === 0 ? "text-red-500 hover:text-red-400" : "text-white hover:text-red-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full">
              <a href="tel:023-22044">
                <Phone className="h-4 w-4 mr-2" />
                023-220 44
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-white/20 mt-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium py-2 ${
                  index === 0 ? "text-red-500" : "text-white hover:text-red-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full mt-2 rounded-full">
              <a href="tel:023-22044">
                <Phone className="h-4 w-4 mr-2" />
                Ring & Beställ: 023-220 44
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
