import { controlRoom } from "./control-room"

export const siteConfig = {
  name: controlRoom.identity.name,
  description: controlRoom.identity.description,
  url: "https://joeunenergy.com",
  ogImage: "https://joeunenergy.com/og.jpg",
  contact: {
    tel: "031-XXX-XXXX", // 실제 번호로 교체 필요
    email: "contact@yangsu-energy.com",
    address: "경기도 양평군 양서면 목왕로 637",
    hours: "연중무휴 (확인 필요)",
  },
  mainNav: [
    {
      title: "회사소개",
      href: "/about",
      items: [
        { title: "인사말", href: "/about#greeting" },
        { title: "기업연혁", href: "/about#history" },
        { title: "주요실적", href: "/about#results" },
        { title: "오시는 길", href: "/about#location" },
      ],
    },
    {
      title: "사업분야",
      href: "/business",
      items: [
        { title: "지열냉난방", href: "/business/geothermal" },
        { title: "태양광발전", href: "/business/solar" },
        { title: "바이오 에너지", href: "/business/bio" },
        { title: "열병합 발전", href: "/business/cogeneration" },
        { title: "에너지재활용시스템(ERS)", href: "/business/ers" },
        { title: "연료전지", href: "/business/fuel-cell" },
      ],
    },
    {
      title: "신재생에너지지원사업",
      href: "/projects",
      items: [
        { title: "주택지원사업", href: "/projects/housing" },
        { title: "건물지원사업", href: "/projects/building" },
      ],
    },
    {
      title: "자료실",
      href: "/resources",
      items: [
        { title: "관련자료", href: "/resources/files" },
        { title: "관련사이트", href: "/resources/sites" },
      ],
    },
    {
      title: "고객센터",
      href: "/cs",
      items: [
        { title: "공지 & 뉴스", href: "/cs/notice" },
        { title: "온라인 문의", href: "/cs/inquiry" },
      ],
    },
  ],
  links: {
    facebook: "#",
    blog: "#",
  },
}

export type SiteConfig = typeof siteConfig
