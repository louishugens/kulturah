"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: "50+", label: "Languages Taught" },
  { number: "10,000+", label: "Students Worldwide" },
  { number: "95%", label: "Satisfaction Rate" },
  { number: "25+", label: "Countries Reached" },
]

function AnimatedCounter({ target, isVisible }: { target: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const numericPart = Number.parseInt(target.replace(/[^0-9]/g, ""))
  const suffix = target.replace(/[0-9,]/g, "")

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = numericPart / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericPart) {
        setCount(numericPart)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericPart])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-24 bg-[#b8941f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0a1f44 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0a1f44] font-bold mb-2">
                <AnimatedCounter target={stat.number} isVisible={isVisible} />
              </p>
              <p className="text-[#0a1f44]/80 font-medium text-sm md:text-base tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
