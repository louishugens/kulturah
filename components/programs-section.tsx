"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const programs = [
  {
    title: "Anglè ak Kreyòl",
    subtitle: "English & Haitian Creole",
    description:
      "Master English through the lens of Haitian Creole. Perfect for native Kreyòl speakers looking to achieve fluency in English.",
    image: "/haitian-creole-english-language-learning-classroom.jpg",
    duration: "3-12 months",
    level: "All Levels",
    flag: "🇭🇹",
  },
  {
    title: "Programme d'Anglais",
    subtitle: "English in French",
    description:
      "Apprenez l'anglais avec notre programme francophone. Une approche immersive pour les locuteurs français.",
    image: "/french-english-language-exchange-students-parisian.jpg",
    duration: "3-12 months",
    level: "All Levels",
    flag: "🇫🇷",
  },
  {
    title: "Haitian Creole",
    subtitle: "Kreyòl in English",
    description:
      "Discover the beauty of Haitian Creole. Learn this vibrant language and connect with Haitian culture and heritage.",
    image: "/haitian-culture-class-learning-vibrant-colorful-ca.jpg",
    duration: "2-8 months",
    level: "Beginner+",
    flag: "🇭🇹",
  },
  {
    title: "Inglés en Español",
    subtitle: "English in Spanish",
    description:
      "Domina el inglés con nuestro programa en español. Diseñado para hispanohablantes que buscan fluidez en inglés.",
    image: "/spanish-english-bilingual-classroom-latin-american.jpg",
    duration: "3-12 months",
    level: "All Levels",
    flag: "🇪🇸",
  },
]

export function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="programs" ref={sectionRef} className="py-24 md:py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#9a7c1a] font-semibold tracking-[0.2em] uppercase text-xs mb-4">Our Programs</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0a1f44] leading-tight mb-6">
            One Pedagogy,
            <span className="italic gradient-text"> Many Languages</span>
          </h2>
          <p className="text-[#0a1f44]/60 font-light text-lg">
            Breaking cultural barriers through language. Choose your path to fluency with programs designed for your
            native tongue.
          </p>
        </div>

        {/* Programs Grid - Using shadcn Card component with enhanced animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all pt-0 pb-6 duration-500 hover-lift bg-white ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-3/2 overflow-hidden relative">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a1f44]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 text-3xl">{program.flag}</div>
              </div>

              {/* Content */}
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-[#b8941f]/15 text-[#9a7c1a] hover:bg-[#b8941f]/20 font-medium"
                  >
                    {program.duration}
                  </Badge>
                  <Badge variant="outline" className="border-[#0a1f44]/20 text-[#0a1f44]/60">
                    {program.level}
                  </Badge>
                </div>
                <h3 className="font-serif text-2xl text-[#0a1f44] mb-1 group-hover:text-[#b8941f] transition-colors">
                  {program.title}
                </h3>
                <p className="text-[#9a7c1a] text-sm font-medium mb-3">{program.subtitle}</p>
                <p className="text-[#0a1f44]/60 font-light leading-relaxed mb-6">{program.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#0a1f44] font-medium text-sm hover:text-[#b8941f] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="bg-[#0a1f44] text-white hover:bg-[#b8941f] hover:text-[#0a1f44] transition-all duration-300 px-8 py-6 rounded-full text-base font-medium hover-lift"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
