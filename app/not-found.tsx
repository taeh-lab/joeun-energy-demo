import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex items-center justify-center p-6 pt-32">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="relative">
            <div className="text-9xl font-bold text-primary/10 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-foreground">서비스 준비 중입니다</h1>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            요청하신 페이지는 현재 정성스럽게 제작 중입니다.<br />
            빠른 시일 내에 더 좋은 모습으로 찾아뵙겠습니다.
          </p>

          <div className="pt-4">
            <Link href="/">
              <Button size="lg" className="h-16 px-10 text-xl font-bold gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-primary text-primary-foreground">
                <Home className="w-6 h-6" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
