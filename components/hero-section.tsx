"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf8f5]">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating decorative elements */}
        <div
          className="absolute top-32 left-[10%] w-20 h-20 opacity-10 animate-float"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        >
          <Image src="/images/artboard-2013.png" alt="" fill className="object-contain rounded-full" />
        </div>
        <div
          className="absolute top-48 right-[15%] w-16 h-16 opacity-10 animate-float-reverse"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            animationDelay: "1s",
          }}
        >
          <Image src="/images/artboard-2011.png" alt="" fill className="object-contain rounded-full" />
        </div>
        <div
          className="absolute bottom-40 left-[20%] w-14 h-14 opacity-10 animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
            animationDelay: "2s",
          }}
        >
          <Image src="/images/artboard-2013.png" alt="" fill className="object-contain rounded-full" />
        </div>
        <div
          className="absolute bottom-60 right-[10%] w-24 h-24 opacity-10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px)`,
            animationDelay: "0.5s",
          }}
        >
          <Image src="/images/artboard-2011.png" alt="" fill className="object-contain rounded-full" />
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#b8941f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0a1f44]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className={`text-[#9a7c1a] font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A Thousand Cultures, One Method
          </p>

          {/* Main Headline - updated gold color */}
          <h1
            className={`font-serif font-semibold text-5xl md:text-7xl lg:text-8xl text-[#0a1f44] leading-[1.2] mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Breaking barriers
            <span className="block italic gradient-text text-[#ddaf37]">through language</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-[#0a1f44]/70 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kulturah brings the world together through immersive language learning and cultural exchange. Discover a
            pedagogy that celebrates diversity and empowers global citizens.
          </p>

          {/* CTA Buttons - enhanced with micro-interactions */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-[#0a1f44] text-white hover:bg-[#b8941f] hover:text-[#0a1f44] transition-all duration-300 px-8 py-6 rounded-full text-base font-medium group hover-lift"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0a1f44] text-[#0a1f44] hover:bg-[#0a1f44] hover:text-white transition-all duration-300 px-8 py-6 rounded-full text-base font-medium bg-transparent hover-lift"
            >
              Learn Our Story
            </Button>
          </div>
        </div>

        {/* Hero Image - enhanced with better animations */}
        <div
          className={`mt-16 md:mt-24 relative transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl hover-scale">
              <Image
                src="/hero-image.png"
                alt="Students learning together at Kulturah"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#ddaf37] rounded-full flex items-center justify-center animate-float shadow-xl animate-pulse-glow">
              <Image src="/icon.png" alt="" width={72} height={72} className="object-cover rounded-full" />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#0a1f44] rounded-full flex items-center justify-center animate-float-reverse shadow-xl">
              <Image src="/images/artboard-2011.png" alt="" width={52} height={52} className="object-contain rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator - enhanced animation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="text-[#0a1f44]/50 hover:text-[#b8941f] transition-colors flex flex-col items-center gap-2"
          >
            <span className="text-xs font-light tracking-wider">Scroll</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
