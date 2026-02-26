import { ArrowRight } from "lucide-react"
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
    <section id="services" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            핵심 사업영역
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Services Grid */}
        <ScrollReveal animation="fade-up" className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  자세히 보기
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
