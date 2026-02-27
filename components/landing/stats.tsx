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
    <section id="stats" className="relative overflow-hidden bg-[#0A0C10] py-32">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <ScrollReveal className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary/50" />
            <p className="text-sm font-black uppercase tracking-[0.4em] text-primary">
              Impact
            </p>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl tracking-tighter text-balance">
            숫자로 증명하는{/*  */}
            <br />
            기업의 가치
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="mb-4 inline-block transition-transform duration-500 group-hover:scale-110">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
