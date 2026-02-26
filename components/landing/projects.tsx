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
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Projects
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            주요 시공 실적
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <ScrollReveal animation="fade-up" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-lg font-bold text-foreground">{project.title}</h3>
                <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-primary" />
                    {project.capacity}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
