import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"

export default function CSPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">고객센터</h1>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div id="notice">
            <h2 className="text-2xl font-bold mb-6">공지 & 뉴스</h2>
            <div className="divide-y divide-border">
              {[1, 2, 3].map((i) => (
                <div key={i} className="py-4 hover:bg-muted/30 transition-colors px-2 rounded-lg cursor-pointer">
                  <span className="text-xs text-primary font-semibold mb-1 block">NOTICE</span>
                  <p className="font-medium">준비 중인 공지사항입니다. {i}</p>
                  <span className="text-xs text-muted-foreground">2026-02-27</span>
                </div>
              ))}
            </div>
          </div>

          <div id="inquiry" className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">온라인 문의</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">성함</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="이름을 입력하세요" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">연락처</label>
                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">문의내용</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="문의 사항을 입력해 주세요"></textarea>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
