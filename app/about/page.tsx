import { siteConfig } from "@/config/site"
import { pageContent } from "@/config/content"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function AboutPage() {
  const { about } = pageContent

  return (
    <main className="min-h-screen pt-24">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">{about.title}</h1>
        
        <div id="greeting" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{about.greeting.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
            {about.greeting.content}
          </p>
        </div>

        <div id="history" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">기업연혁</h2>
          <div className="space-y-6">
            {about.history.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="font-bold text-primary min-w-[60px]">{item.year}</span>
                <span className="text-muted-foreground">{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="location" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">오시는 길</h2>
          <p className="mb-4 text-muted-foreground">{siteConfig.contact.address}</p>
          <div className="aspect-video w-full bg-muted rounded-xl flex items-center justify-center">
            {/* Map placeholder */}
            <span className="text-muted-foreground">지도 영역 (API 연결 필요)</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
