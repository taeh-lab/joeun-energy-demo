import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "sonner"
import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: '조은에너지 - 신뢰할 수 있는 신재생에너지 파트너',
  description: '태양광 시공, ESS 솔루션, 에너지 컨설팅까지. 조은에너지와 함께 지속 가능한 미래를 만들어 갑니다.',
  keywords: ["태양광 설치", "에너지 솔루션", "ESS", "신재생에너지", "조은에너지", "파주 태양광"],
  generator: 'v0.app',
  openGraph: {
    title: "조은에너지 | 최적의 태양광 & 에너지 솔루션 파트너",
    description: "신재생에너지 전문 기업 조은에너지입니다.",
    url: "https://joeunenergy.com",
    siteName: "조은에너지",
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
