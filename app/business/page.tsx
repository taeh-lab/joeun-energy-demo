import { pageContent } from "@/config/content"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BusinessPage() {
  const { business } = pageContent

  return (
    <main className="min-h-screen pt-24">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">{business.title}</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {business.items.map((item) => (
            <div 
              key={item.id} 
              id={item.id}
              className="group p-8 border border-border/50 rounded-2xl bg-card hover:shadow-2xl hover:border-primary/30 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {/* Icon mapping could be added here */}
                <div className="h-6 w-6 font-bold">Icon</div>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>
              <Link href={`/business/${item.id}`}>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                  자세히 보기
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
