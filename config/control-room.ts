/**
 * WEBSITE CONTROL ROOM (관제실)
 * ----------------------------
 * 이 파일은 웹사이트의 핵심 연동 기능(API, 분석, 외부 서비스)을 한곳에서 관리합니다.
 * 템플릿 사용 시 이 곳의 설정만 변경하면 모든 페이지에 반영됩니다.
 */

export const controlRoom = {
  // 1. 지도 서비스 (Kakao Maps 등)
  maps: {
    provider: "kakao", // "kakao" | "google"
    apiKey: "YOUR_KAKAO_MAP_API_KEY", // 실제 API 키로 교체 필요
    location: {
      lat: 37.8105, // 위도 (경기도 파주시)
      lng: 126.9248, // 경도
      title: "조은에너지 본사",
    },
    zoomLevel: 3,
  },

  // 2. 분석 및 통계 (Analytics)
  analytics: {
    googleAnalyticsId: "", // G-XXXXXXXXXX
    vercelAnalyticsEnabled: true,
  },

  // 3. 문의 폼 수신처 (External Form Service)
  integrations: {
    formspreeId: "", // https://formspree.io/f/YOUR_ID
    emailNotification: "info@joeunenergy.com",
  },

  // 4. 기능 플래그 (Feature Toggles)
  features: {
    showNoticeBoard: true,
    showOnlineInquiry: true,
    darkModeEnabled: false,
  },
}

export type ControlRoomConfig = typeof controlRoom
