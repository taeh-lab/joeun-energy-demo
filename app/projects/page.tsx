import { pageContent } from "@/config/content"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">신재생에너지 지원사업</h1>
        <div className="grid gap-12">
          <div id="housing" className="p-8 bg-card rounded-2xl border border-border/50">
            <h2 className="text-2xl font-bold mb-4 text-primary">주택지원사업</h2>
            <p className="text-muted-foreground leading-relaxed">
              에너지공단과 함께하는 주택용 신재생에너지 설치 지원 프로그램입니다. 
              (태양광, 지열 등 자부담금 최소화 솔루션 제공)
            </p>
          </div>
          <div id="building" className="p-8 bg-card rounded-2xl border border-border/50">
            <h2 className="text-2xl font-bold mb-4 text-primary">건물지원사업</h2>
            <p className="text-muted-foreground leading-relaxed">
              상업용 건물, 공장, 축사 등을 위한 대규모 에너지 절감 지원사업입니다.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
