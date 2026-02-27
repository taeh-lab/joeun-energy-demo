"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { controlRoom } from "@/config/control-room"

const stats = [
  { value: 500, suffix: "+", label: "시공 완료 건수" },
  { value: 98, suffix: "%", label: "고객 만족도" },
  { value: 12000, suffix: "톤", label: "연간 CO2 절감량" },
  { value: 10, suffix: "년+", label: "업계 경력" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary-foreground md:text-5xl">
      {count.toLocaleString()}
      <span className="text-2xl font-semibold md:text-3xl">{suffix}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-foreground py-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <ScrollReveal className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Achievements
          </p>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            숫자로 보는 {controlRoom.identity.name}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
