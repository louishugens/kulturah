"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Globe, Users, BookOpen, Heart } from "lucide-react"

const values = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We embrace the richness of world cultures, preparing learners to thrive in our interconnected world.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Every voice matters. We create spaces where diverse backgrounds come together to learn and grow.",
  },
  {
    icon: BookOpen,
    title: "Innovative Pedagogy",
    description: "Our methods blend traditional wisdom with modern techniques for transformative learning experiences.",
  },
  {
    icon: Heart,
    title: "Cultural Empathy",
    description: "Beyond language, we nurture understanding, respect, and appreciation for all cultures.",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-[#0a1f44] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 animate-float-slow">
        <Image src="/images/artboard-2011.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 animate-float-reverse">
        <Image src="/icon.png" alt="" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-[#b8941f] font-semibold tracking-[0.2em] uppercase text-xs mb-4">Our Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Dedicated to
              <span className="block text-[#b8941f] italic">cultural unity</span>
            </h2>
            <p className="text-white/70 font-light text-lg leading-relaxed mb-8">
              Kulturah was founded on a simple yet powerful belief: language is the bridge that connects us all. We are
              more than an educational organization—we are a movement dedicated to breaking down cultural barriers and
              fostering genuine understanding between people of all backgrounds.
            </p>
            <p className="text-white/70 font-light text-lg leading-relaxed">
              Through innovative pedagogy and immersive experiences, we empower individuals to become confident global
              citizens who celebrate diversity and embrace the beautiful tapestry of world cultures.
            </p>
          </div>

          {/* Right - Values Grid - enhanced card animations */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 group hover-lift ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-[#b8941f] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-[#0a1f44]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
