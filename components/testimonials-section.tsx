"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Kulturah didn't just teach me Spanish—it opened a door to an entirely new worldview. The cultural immersion approach transformed how I connect with others.",
    author: "Marie Laurent",
    role: "Marketing Director",
    location: "Paris, France",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The instructors at Kulturah are exceptional. They understand that language is more than words—it's culture, history, and human connection.",
    author: "David Chen",
    role: "Software Engineer",
    location: "Toronto, Canada",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "My daughter's confidence has soared since joining the youth program. She now speaks three languages and has friends from around the world.",
    author: "Aisha Mohammed",
    role: "Parent",
    location: "London, UK",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#9a7c1a] font-semibold tracking-[0.2em] uppercase text-xs mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0a1f44] leading-tight">
            Stories of
            <span className="italic gradient-text"> transformation</span>
          </h2>
        </div>

        {/* Testimonials Grid - Using shadcn Card with enhanced hover effects */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className={`bg-[#faf8f5] border-0 transition-all duration-700 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-[#b8941f] mb-6" />
                <p className="text-[#0a1f44]/80 font-light leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#b8941f]/20">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#0a1f44] font-semibold">{testimonial.author}</p>
                    <p className="text-[#0a1f44]/50 text-sm">{testimonial.role}</p>
                    <p className="text-[#b8941f] text-xs font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
