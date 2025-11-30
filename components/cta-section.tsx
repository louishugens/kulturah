"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Newsletter signup:", email)
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-[#0a1f44] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-32 h-32 opacity-5 animate-float">
          <Image src="/images/artboard-2011.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-[10%] w-40 h-40 opacity-5 animate-float-reverse">
          <Image src="/images/artboard-2013.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
          <Image src="/images/artboard-2011.png" alt="" fill className="object-contain animate-float-slow" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[#b8941f] font-semibold tracking-[0.3em] uppercase text-xs mb-6">
            <Sparkles className="w-4 h-4" />
            Begin Your Journey
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Ready to explore
            <span className="block italic text-[#b8941f]">a thousand cultures?</span>
          </h2>
          <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed mb-10">
            Join our global community of learners and start your journey toward fluency and cultural understanding.
            Subscribe to receive updates on new programs and exclusive learning resources.
          </p>

          {/* Newsletter Form - enhanced with loading state */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-6 focus:border-[#b8941f] focus:ring-[#b8941f] transition-all"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-[#b8941f] text-[#0a1f44] hover:bg-white transition-all duration-300 px-8 py-6 rounded-full font-semibold group hover-lift disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Subscribe"}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-white/40 text-sm font-light">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
