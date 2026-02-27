import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { controlRoom } from "@/config/control-room"

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-solar.jpg"
          alt="태양광 발전소 전경"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <ScrollReveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
          Renewable Energy Solutions
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          깨끗한 에너지로
          <br />
          밝은 미래를 만듭니다
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
          태양광 시공부터 ESS 솔루션, 에너지 컨설팅까지.
          <br className="hidden md:block" />
          {controlRoom.identity.name}가 함께하는 지속 가능한 에너지 전환.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-6 text-base font-semibold hover:bg-primary/90"
            >
              무료 상담 신청
            </Button>
          </a>
          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              서비스 알아보기
            </Button>
          </a>
        </div>
      </ScrollReveal>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        aria-label="아래로 스크롤"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
