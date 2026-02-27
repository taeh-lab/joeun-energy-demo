import { siteConfig } from "@/config/site"
import { controlRoom } from "@/config/control-room"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-background">{controlRoom.identity.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              {controlRoom.identity.description}
              <br />
              신뢰할 수 있는 신재생에너지 파트너.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              바로가기
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {siteConfig.mainNav.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              연락처
            </h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>
                <span className="text-background/80">전화:</span>{" "}
                <a href={`tel:${siteConfig.contact.tel.replace(/-/g, '')}`} className="transition-colors hover:text-primary">
                  {siteConfig.contact.tel}
                </a>
              </p>
              <p>
                <span className="text-background/80">이메일:</span>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-primary">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-background/80">주소:</span> {siteConfig.contact.address}
              </p>
              <p>
                <span className="text-background/80">운영시간:</span> {siteConfig.contact.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/40">
            {'© 2025 조은에너지. All rights reserved. 이 사이트는 데모 페이지입니다.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
