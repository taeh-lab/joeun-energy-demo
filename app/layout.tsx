import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "sonner"
import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.description}`,
  description: siteConfig.description,
  keywords: ["태양광 설치", "에너지 솔루션", "ESS", "신재생에너지", "조은에너지", "파주 태양광"],
  generator: 'v0.app',
  openGraph: {
    title: `${siteConfig.name} | 최적의 태양광 & 에너지 솔루션 파트너`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d8a5e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>
        {children}
        <Analytics />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
