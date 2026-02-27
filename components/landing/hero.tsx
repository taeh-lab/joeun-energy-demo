import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { controlRoom } from "@/config/control-room"
import { pageContent } from "@/config/content"

export function Hero() {
  return (
    <section className="mesh-bg relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-[100px] animate-pulse" />
      </div>

      {/* Content */}
      <ScrollReveal className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm border border-white/20">
          <Zap className="h-3 w-3 fill-current" />
          Reliable Energy Partner
        </div>
        <h1 className="mb-6 text-5xl font-black leading-[1.1] text-foreground md:text-7xl lg:text-8xl text-balance tracking-tighter">
          에너지의 미래,
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            새로운 가치를 더하다
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl text-pretty">
          {pageContent.home.hero.description}
          <br className="hidden md:block" />
          {controlRoom.identity.name}가 제안하는 프리미엄 에너지 솔루션.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact">
            <Button
              size="lg"
              className="rounded-full bg-primary px-10 py-8 text-lg font-bold shadow-2xl transition-all hover:scale-105"
            >
              전문가 상담 신청
            </Button>
          </a>
          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/20 bg-white/50 px-10 py-8 text-lg font-bold backdrop-blur-sm transition-all hover:bg-white/80"
            >
              서비스 살펴보기
            </Button>
          </a>
        </div>
      </ScrollReveal>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">Scroll</span>
        <div className="h-12 w-6 rounded-full border-2 border-primary/10 flex justify-center p-1">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
