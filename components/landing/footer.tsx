import { Zap } from "lucide-react"
import { siteConfig } from "@/config/site"
import { controlRoom } from "@/config/control-room"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-4 lg:grid-cols-5">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/20">
                <Zap className="h-6 w-6 stroke-[3]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                {controlRoom.identity.logoText}
              </span>
            </Link>
            <p className="max-w-xs text-lg font-medium leading-relaxed text-white/40 mb-8 text-pretty">
              {controlRoom.identity.description}
              <br />
              양평 지역의 미래를 여는 에너지 파트너.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders could go here */}
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors hover:bg-primary/20 hover:text-primary cursor-pointer text-white/50 hover:text-white">
                <Zap className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-white/80">
              Sitemap
            </h4>
            <nav className="flex flex-col gap-4">
              {siteConfig.mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 font-bold transition-all hover:text-primary hover:translate-x-1"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact 1 */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-white/80">
              Contact
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-black text-white/20 uppercase mb-2 tracking-widest">Address</p>
                <p className="text-white/60 font-bold">{siteConfig.contact.address}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-black text-white/20 uppercase mb-2 tracking-widest">Phone</p>
                  <a href={`tel:${siteConfig.contact.tel.replace(/-/g, '')}`} className="text-lg font-black text-white transition-colors hover:text-primary">
                    {siteConfig.contact.tel}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-black text-white/20 uppercase mb-2 tracking-widest">Operating Hours</p>
                  <p className="text-white/60 font-bold">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-white/20 tracking-widest">
            © 2026 {controlRoom.identity.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs font-bold text-white/10 hover:text-white/30 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs font-bold text-white/10 hover:text-white/30 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
