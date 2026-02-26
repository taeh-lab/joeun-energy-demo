import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Stats } from "@/components/landing/stats"
import { Projects } from "@/components/landing/projects"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
