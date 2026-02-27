"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

import { siteConfig } from "@/config/site"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-shadow duration-300 ${isScrolled ? "shadow-[0_0_15px_rgba(var(--primary),0.5)]" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span
            className={`text-lg font-bold transition-colors ${isScrolled ? "text-foreground" : "text-card"
              }`}
          >
            조은에너지
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {siteConfig.mainNav.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-card/90 hover:text-card"
                  }`}
              >
                {link.title}
              </Link>
              {link.items && (
                <div className="absolute left-0 top-full hidden w-48 flex-col bg-card shadow-lg group-hover:flex">
                  {link.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="px-4 py-2 text-xs hover:bg-muted"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:1544-8972" className="hidden items-center gap-2 md:flex">
            <Button
              variant="default"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Phone className="mr-1.5 h-4 w-4" />
              1544-8972
            </Button>
          </a>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-card"}`}
            aria-label={isMobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-card md:hidden max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile navigation">
            {siteConfig.mainNav.map((link) => (
              <div key={link.href} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary border-b border-border/50"
                >
                  {link.title}
                </Link>
                {link.items && (
                  <div className="flex flex-col pl-4">
                    {link.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="py-2 text-xs text-muted-foreground hover:text-primary"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={`tel:${siteConfig.contact.tel.replace(/-/g, '')}`} className="mt-4">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="mr-1.5 h-4 w-4" />
                전화 상담: {siteConfig.contact.tel}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
