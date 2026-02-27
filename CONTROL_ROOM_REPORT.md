# 🏥 웹사이트 관제실 보고서 (Website Control Room Report)

이 프로젝트는 누구나 쉽게 관리하고 확장할 수 있도록 **3단계 중앙 제어 시스템**으로 설계되었습니다. 프로젝트 루트의 `config/` 디렉토리에 있는 파일들을 통해 사이트의 거의 모든 요소를 제어할 수 있습니다.

---

## 1. 관제실 설정 파일 안내

### 🆔 [control-room.ts](file:///c:/Users/tahoon/OneDrive/Desktop/joeun-energy-demo/config/control-room.ts) - **브랜드 & 기술 관제** (NEW!)
사이트의 정체성과 기술적 설정을 모두 관리합니다.
- **아이덴티티(Identity):** 사이트 이름(`name`), 로고 텍스트(`logoText`), 전체 설명 등을 여기서 한 번만 바꾸면 헤더, 푸터, 모든 페이지 본문에 즉시 반영됩니다. (예: 조은에너지 → 나쁜에너지 로 변경 시 전역 반영)
- **지도(Maps):** 카카오/구글 지도 API 키 및 좌표 설정
- **분석(Analytics):** GA ID 및 Vercel 분석 도구 활성화
- **연동(Integrations):** 이메일 문의 수신처 경로 설정
- **기능(Features):** 다크모드, 게시판 노출 여부 등 스위치 역할

### 🗺️ [site.ts](file:///c:/Users/tahoon/OneDrive/Desktop/joeun-energy-demo/config/site.ts) - **구조 및 브랜드 관제**
사이트의 뼈대와 브랜딩을 담당합니다.
- **Navigation:** 메뉴 이름, 연결 링크, 서브 메뉴 계층 구조 (수정 시 Header/Footer 동시 반영)
- **Contact:** 전화번호, 이메일, 주소, 운영시간 등 반복 사용되는 정보
- **Metadata:** 사이트 제목, 설명 등 SEO 관련 정보

### 📝 [content.ts](file:///c:/Users/tahoon/OneDrive/Desktop/joeun-energy-demo/config/content.ts) - **내용물 및 텍스트 관제**
각 페이지의 실제 내용을 관리합니다.
- **Home:** 메인 히어로 문구
- **About:** 인사말, 기업 연혁 데이터
- **Business:** 사업 분야 리스트, 설명, 아이콘 설정

---

## 2. 블록형 템플릿 사용법

이 사이트는 **데이터 기반(Data-driven)**으로 작동합니다. 
- 새로운 메뉴를 추가하고 싶다면? `site.ts`의 `mainNav` 배열에 객체 하나만 추가하세요.
- 지도의 위치를 바꾸고 싶다면? `control-room.ts`의 `location` 좌표만 수정하세요.
- 사업 내용을 바꾸고 싶다면? `content.ts`의 `items` 배열 내용만 수정하세요.

## 3. 사후 관리 및 확장

- **UI 변경:** 컴포넌트(`components/`)만 교체하면 로직은 유지한 채 디자인만 쇄신할 수 있습니다.
- **배포:** 깃허브에 푸시하면 Vercel이 이 관제실 설정들을 읽어 즉시 반영합니다.

> **TIP:** API 키나 민감한 정보는 `control-room.ts`에 직접 넣기보다 환경 변수(`.env`)를 사용하는 것을 권장하지만, 빠른 수정을 위해 관제실 파일 중심의 관리가 가능하도록 구성되어 있습니다.
