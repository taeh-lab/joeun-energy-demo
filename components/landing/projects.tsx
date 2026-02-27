"use client"

import { useState } from "react"
import { MapPin, Calendar, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const categories = ["전체", "주택용", "상업용", "산업용"]

const projects = [
  {
    title: "파주 주택 태양광",
    location: "경기도 파주시",
    date: "2025.08",
    capacity: "10kW",
    category: "주택용",
    image: "/images/residential_solar_modern_1772098285875.png",
  },
  {
    title: "인천 물류센터 지붕형",
    location: "인천광역시 서구",
    date: "2025.06",
    capacity: "500kW",
    category: "상업용",
    image: "/images/hero-solar.jpg",
  },
  {
    title: "충남 산업단지",
    location: "충청남도 아산시",
    date: "2025.04",
    capacity: "2MW",
    category: "산업용",
    image: "/images/industrial_solar_farm_v2_1772098314348.png",
  },
  {
    title: "경기 스마트팜 태양광",
    location: "경기도 용인시",
    date: "2025.02",
    capacity: "100kW",
    category: "상업용",
    image: "/images/commercial_solar_rooftop_v3_1772098446325.png",
  },
  {
    title: "서울 빌라 베란다형",
    location: "서울특별시 강서구",
    date: "2025.01",
    capacity: "3kW",
    category: "주택용",
    image: "/images/service-consulting.jpg",
  },
  {
    title: "전남 태양광 발전소",
    location: "전라남도 해남군",
    date: "2024.12",
    capacity: "5MW",
    category: "산업용",
    image: "/images/hero-solar.jpg",
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("전체")

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="bg-[#F8F9FD] py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
              Portfolio
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl font-black text-foreground md:text-6xl tracking-tighter leading-none">
              검증된 실적,{/*  */}
              <br />
              <span className="text-muted-foreground/30">안전한 시공</span>
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 rounded-[2rem] bg-white/50 p-1.5 border border-white backdrop-blur-sm self-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2.5 text-sm font-black transition-all ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-white hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <ScrollReveal animation="fade-up" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-black text-primary backdrop-blur-md shadow-lg border border-white/20">
                  {project.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-4 text-2xl font-black text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Location</p>
                    <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-primary opacity-50" />
                      {project.location}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Capacity</p>
                    <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                      <Zap className="h-3 w-3 text-primary opacity-50" />
                      {project.capacity}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
