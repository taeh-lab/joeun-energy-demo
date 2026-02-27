import { Building2, Award, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { controlRoom } from "@/config/control-room"

const highlights = [
  {
    icon: Building2,
    title: "설립",
    value: "2015",
    suffix: "년",
  },
  {
    icon: Award,
    title: "시공 실적",
    value: "500",
    suffix: "건+",
  },
  {
    icon: Users,
    title: "전문 인력",
    value: "50",
    suffix: "명+",
  },
  {
    icon: Leaf,
    title: "CO2 절감",
    value: "12,000",
    suffix: "톤",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      
      <ScrollReveal className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
              The Identity
            </p>
          </div>
          <h2 className="text-4xl font-black text-foreground md:text-6xl tracking-tighter leading-none">
            신뢰와 혁신으로{/*  */}
            <br />
            <span className="text-muted-foreground/30">사업의 가치를 높입니다</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Image & Stats Bento */}
          <div className="grid gap-6">
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="/images/about-company.jpg"
                alt={`${controlRoom.identity.name} 본사`}
                className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-sm font-bold text-white/70 uppercase tracking-widest">Since 2022</p>
                <h4 className="text-2xl font-black text-white">{controlRoom.identity.name}</h4>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.slice(0, 2).map((item) => (
                <div key={item.title} className="glass bento-card border-primary/10">
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                  <p className="text-3xl font-black text-foreground">
                    {item.value}
                    <span className="text-lg opacity-30 ml-1">{item.suffix}</span>
                  </p>
                  <p className="text-sm font-bold text-muted-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pt-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-foreground leading-tight">
                  고객의 만족을 최우선으로,<br />
                  양평 지역을 대표하는 에너지 파트너
                </h3>
                <p className="text-lg font-medium leading-relaxed text-muted-foreground/80 text-pretty">
                  {controlRoom.identity.name}는 지역 소상공인과 주민 여러분의 실질적인 에너지 비용 절감과 안전한 공급을 목표로 합니다.
                  현대적인 시스템과 신속한 서비스를 바탕으로 에너지 유통의 새로운 기준을 제시합니다.
                </p>
              </div>

              <div className="grid gap-6">
                {highlights.slice(2).map((item) => (
                  <div key={item.title} className="flex items-center gap-6 p-6 rounded-3xl bg-white/50 border border-white transition-all hover:bg-white shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{item.title}</p>
                      <p className="text-xl font-bold text-foreground">
                        {item.value}{item.suffix} <span className="text-sm font-medium text-muted-foreground/50">달성</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button size="lg" className="rounded-full px-8 py-7 font-bold text-lg shadow-xl shadow-primary/20">
                  자세한 회사소개 보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
