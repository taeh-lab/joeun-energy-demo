import { Building2, Award, Users, Leaf } from "lucide-react"
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
    <section id="about" className="bg-background py-24">
      <ScrollReveal className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            신뢰할 수 있는 에너지 파트너
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/about-company.jpg"
              alt={`${controlRoom.identity.name} 본사 전경`}
              className="h-80 w-full object-cover lg:h-[420px]"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              지속 가능한 미래를 위한
              <br />
              최적의 에너지 솔루션
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {controlRoom.identity.name}는 신재생에너지 분야의 전문 기업으로, 태양광 발전 시스템의 설계, 시공,
              유지보수는 물론 ESS(에너지저장장치) 솔루션과 에너지 컨설팅까지 원스톱 서비스를
              제공합니다. 풍부한 경험과 검증된 기술력을 바탕으로 고객에게 최적화된 에너지 솔루션을
              제안합니다.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              경기도 파주시에 본사를 두고 전국 각지의 프로젝트를 성공적으로 수행해왔으며, 주택,
              상업시설, 산업단지 등 다양한 분야에서 고객 만족을 실현하고 있습니다.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <item.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-xl font-bold text-foreground">
                    {item.value}
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.suffix}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
