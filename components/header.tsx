"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden">
            <Image
              src="/logo.png"
              alt="Kulturah"
              width={200}
              height={60}
              className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - added underline animation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name} className="text-[#0a1f44] font-light text-sm tracking-wide underline-animate transition-colors hover:text-[#b8941f]">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - enhanced with pulse animation */}
        <div className="hidden md:block">
          <Button className="bg-[#0a1f44] text-white hover:bg-[#b8941f] hover:text-[#0a1f44] transition-all duration-300 px-7 py-5 rounded-full font-medium hover-lift">
            Start Learning
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0a1f44] p-2 hover:bg-[#0a1f44]/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - enhanced animations */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-[#faf8f5] border-t border-[#c5c5c5]/30 shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={link.name} className="text-[#0a1f44] font-light text-lg py-2 border-b border-[#c5c5c5]/20 hover:text-[#b8941f] transition-all" style={{ animationDelay: `${index * 50}ms` }} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#0a1f44] text-white hover:bg-[#b8941f] hover:text-[#0a1f44] transition-all mt-4 rounded-full">
            Start Learning
          </Button>
        </nav>
      </div>
    </header>
  )
}
