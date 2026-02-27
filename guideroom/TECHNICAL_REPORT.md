# 🛠️ 기술 중간 보고서 (Technical Intermediate Report)

본 보고서는 '양수삼풍에너지' 웹사이트 리뉴얼 프로젝트의 현재 기술적 구현 상태와 아키텍처를 설명합니다.

---

## 1. 기술 스택 (Tech Stack)

신뢰성과 성능을 최우선으로 하는 현대적인 프런트엔드 스택을 채택하였습니다.
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) - 최고의 SEO 성능과 빠른 페이지 로딩 제공
- **Language**: [TypeScript](https://www.typescriptlang.org/) - 코드 안정성 확보 및 유지보수 용이성 극대화
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - 일관된 디자인 시스템 및 빠른 UI 개발
- **Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/) - 검증된 고품질 UI 라이브러리 활용
- **Iconography**: [Lucide React](https://lucide.dev/) - 직관적이고 가독성 높은 아이콘 시스템
- **Deployment**: [Vercel](https://vercel.com/) - 깃허브 연동을 통한 자동 배포 및 글로벌 엣지 네트워크 활용

---

## 2. 핵심 아키텍처: 중앙 관리 시스템 (Control Room)

개발자가 아니더라도 사이트의 핵심 내용을 제어할 수 있도록 **3단계 설정 구조**를 설계했습니다.

1. **Identity & Connectivity (`control-room.ts`)**:
   - 사이트 브랜드명, 로고 텍스트, 지도 API 키, 좌표, 분석 도구 연동을 한곳에서 관리합니다.
2. **Structure & Navigation (`site.ts`)**:
   - 전체 메뉴 구성(Navigation), 연락처 정보, 주소 등 사이트의 뼈대를 담당합니다.
3. **Content & Data (`content.ts`)**:
   - 각 페이지에 들어가는 실제 텍스트, 인사말, 연혁, 사업 분야 데이터를 분리하여 관리합니다.

---

## 3. 주요 구현 기능

- **데이터 기반 자동 렌더링**: 설정 파일 수정 시 헤더, 푸터, 본문이 즉시 업데이트됨.
- **접근성 최적화(UX)**: 어르신들을 위한 큼직한 메뉴 버튼 및 '전체메뉴' 명시적 표기.
- **모듈형 레이아웃**: 공통 컴포넌트(Header, Footer, ScrollReveal) 재사용으로 개발 생산성 향상.
- **커스텀 404 및 안내 페이지**: '서비스 준비 중' 페이지를 통해 전문성 있는 사용자 경험 제공.

---

## 4. 향후 확장 가능성

현재는 **"전화 상담 중심의 무(無)백엔드 MVP"** 구조이나, 향후 다음과 같이 확장이 가능합니다.
- **Headless CMS 연동**: 관리자가 웹에서 직접 내용을 수정할 수 있도록 관리 도구 연결.
- **실시간 상담 챗봇**: 카카오톡 채널이나 실시간 채팅 API 추가.
- **상품 데이터베이스**: 실제 주문 기능이 필요할 경우 Supabase나 Prisma를 통한 백엔드 구축 가능.
