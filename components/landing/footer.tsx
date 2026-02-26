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
              <span className="text-lg font-bold text-background">조은에너지</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              깨끗한 에너지로 밝은 미래를 만듭니다.
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
              {[
                { label: "회사소개", href: "#about" },
                { label: "사업영역", href: "#services" },
                { label: "시공 실적", href: "#projects" },
                { label: "무료 상담", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
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
                <a href="tel:1544-8972" className="transition-colors hover:text-primary">
                  1544-8972
                </a>
              </p>
              <p>
                <span className="text-background/80">이메일:</span>{" "}
                <a href="mailto:info@joeunenergy.com" className="transition-colors hover:text-primary">
                  info@joeunenergy.com
                </a>
              </p>
              <p>
                <span className="text-background/80">주소:</span> 경기도 파주시 법원읍
              </p>
              <p>
                <span className="text-background/80">운영시간:</span> 월-금 09:00 ~ 18:00
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
