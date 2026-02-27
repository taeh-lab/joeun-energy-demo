"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { controlRoom } from "@/config/control-room"
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
      className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 transition-all duration-500 ${
        isScrolled ? "top-6" : "top-4"
      }`}
    >
      <nav
        className={`flex items-center justify-between px-6 py-3 transition-all duration-500 ${
          isScrolled
            ? "glass rounded-full shadow-2xl py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:rotate-12 shadow-lg">
            <Zap className="h-6 w-6" />
          </div>
          <span className={`text-xl font-bold tracking-tighter transition-colors drop-shadow-sm ${
            isScrolled ? "text-foreground" : "text-white md:text-white"
          }`}>
            {controlRoom.identity.logoText}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden items-center gap-8 md:flex`}>
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-bold transition-all hover:text-primary drop-shadow-sm ${
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href={`tel:${siteConfig.contact.tel}`} className="hidden sm:block">
            <Button
              variant={isScrolled ? "default" : "secondary"}
              className="rounded-full px-6 font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              상담하기
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 transition-all md:hidden shadow-lg ${
              isScrolled 
                ? "bg-primary/20 text-primary border border-primary/20" 
                : "bg-white/20 text-white backdrop-blur-md border border-white/30"
            }`}
          >
            <span className="text-base font-black">{isMobileOpen ? "닫기" : "메뉴"}</span>
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 mt-4 w-full origin-top transform transition-all duration-500 md:hidden ${
          isMobileOpen ? "rotate-0 scale-100 opacity-100" : "pointer-events-none -rotate-2 scale-95 opacity-0"
        }`}
      >
        <div className="glass overflow-hidden rounded-[2.5rem] p-6 shadow-2xl border-white/30">
          <div className="flex flex-col gap-3">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-between rounded-[2rem] bg-white/60 p-7 text-2xl font-black text-foreground transition-all hover:bg-primary/10 active:scale-[0.98] border border-white/50"
              >
                {item.title}
                <ChevronDown className="-rotate-90 h-6 w-6 opacity-30" />
              </Link>
            ))}
            <Link
              href={`tel:${siteConfig.contact.tel}`}
              className="mt-4 flex items-center justify-center gap-3 rounded-[2rem] bg-primary py-6 text-xl font-black text-primary-foreground shadow-2xl shadow-primary/30 transition-transform active:scale-95"
            >
              <Phone className="h-6 w-6 fill-current" />
              지금 바로 상담하기
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
