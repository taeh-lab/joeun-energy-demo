import { siteConfig } from "@/config/site"
import { pageContent } from "@/config/content"
import { controlRoom } from "@/config/control-room"
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
          <h2 className="text-2xl font-semibold mb-4">오시는 길 (관제실 설정 반영)</h2>
          <p className="mb-4 text-muted-foreground">{siteConfig.contact.address}</p>
          <div className="aspect-video w-full bg-muted rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-border p-8 text-center">
            <div className="mb-4 text-primary font-bold">
               [ {controlRoom.maps.location.title} ]
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              위도: {controlRoom.maps.location.lat}<br/>
              경도: {controlRoom.maps.location.lng}<br/><br/>
              API 연동을 원하시면 <code className="bg-white px-1 py-0.5 rounded text-primary">config/control-room.ts</code> 파일의 <code className="bg-white px-1 py-0.5 rounded text-primary">apiKey</code>를 설정해 주세요.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
