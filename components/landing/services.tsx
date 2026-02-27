import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const services = [
  {
    number: "01",
    title: "태양광 시공",
    description:
      "주택용, 상업용, 산업용 태양광 발전 시스템의 설계부터 시공, 인허가까지 원스톱 서비스를 제공합니다. 최적의 발전 효율을 위한 맞춤형 설계를 진행합니다.",
    image: "/images/service-install.jpg",
    tags: ["주택용 태양광", "상업용 태양광", "자가소비형"],
  },
  {
    number: "02",
    title: "ESS 솔루션",
    description:
      "에너지저장장치(ESS)를 통해 발전된 전력을 효율적으로 저장하고 관리합니다. 피크 부하 관리, 비상 전원 등 다양한 용도에 맞춤 솔루션을 제공합니다.",
    image: "/images/service-ess.jpg",
    tags: ["에너지 저장", "피크 관리", "비상 전원"],
  },
  {
    number: "03",
    title: "에너지 컨설팅",
    description:
      "정부 지원사업 안내, 투자 수익률 분석, 최적의 에너지 솔루션 설계 등 전문 컨설턴트가 고객 맞춤형 상담을 제공합니다.",
    image: "/images/commercial_solar_rooftop_v3_1772098446325.png",
    tags: ["지원사업 안내", "수익률 분석", "맞춤 설계"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 bg-foreground text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
              Core Business
            </p>
          </div>
          <h2 className="text-4xl font-black text-white md:text-6xl tracking-tighter leading-none mb-8">
            성공을 위한{/*  */}
            <br />
            비즈니스 솔루션
          </h2>
          <p className="max-w-2xl text-lg font-medium text-white/50 leading-relaxed text-pretty">
            양수삼풍에너지는 단순한 연료 공급을 넘어, 고객의 비즈니스 안정성과 효율성을 위한 
            최신 에너지 기술과 관리 시스템을 제공합니다.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-6 md:grid-rows-2">
          {/* Main Service Card */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-[3rem] bg-zinc-900 border border-white/5 p-10 transition-all hover:border-primary/50">
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-auto">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
                  <ArrowRight className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-black mb-4">가정용 연료 소매 전문</h3>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  철저한 안전 관리와 정직한 정량 공급을 원칙으로 합니다. 
                  양평 지역 가정 어디든 신속하게 배송해 드리는 시스템을 갖추고 있습니다.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-2">
                {["정량공급", "안전배송", "지역밀착"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-xs font-bold border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Secondary Card 1 */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-[3rem] bg-primary p-10 transition-all hover:scale-[1.02] shadow-2xl shadow-primary/20">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 text-white">상업용 대량 공급</h3>
              <p className="text-primary-foreground/80 font-medium">대형 업장 및 시설을 위한 정기 공급망 운영</p>
              <Button variant="secondary" className="mt-6 rounded-full font-bold px-6">문의하기</Button>
            </div>
            <Zap className="absolute bottom-[-20px] right-[-20px] h-40 w-40 text-white/10 -rotate-12" />
          </div>

          {/* Secondary Card 2 */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-[3rem] bg-zinc-900 border border-white/5 p-10 transition-all hover:border-accent/50">
            <div className="relative z-10 flex items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2 text-white">안전 점검 & 관리</h3>
                <p className="text-white/40 font-medium">최고의 전문가들이 제안하는 화재 및 가스 안전 점검 시스템</p>
              </div>
              <div className="h-20 w-20 rounded-[2rem] bg-accent/20 flex items-center justify-center border border-accent/20">
                <ArrowRight className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
