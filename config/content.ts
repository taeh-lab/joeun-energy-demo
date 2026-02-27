import { controlRoom } from "./control-room"

export const pageContent = {
    home: {
        hero: {
            title: "따뜻한 겨울, 안전한 에너지\n양수삼풍에너지가 함께합니다",
            description: "양평군 양서면의 가정용 연료 소매 전문 기업입니다.\n정직한 용량과 안전한 배달로 보답하겠습니다.",
        }
    },

    about: {
        title: "회사소개",
        greeting: {
            title: "인사말",
            content: `반갑습니다. ${controlRoom.identity.name}입니다.\n\n저희는 경기도 양평군 양서면에 뿌리를 두고, 지역 주민 여러분의 따뜻한 겨울을 책임지는 가정용 연료 소매 전문 기업입니다.\n\n언제나 정직한 마음으로 신속하고 안전하게 에너지를 공급해 드릴 것을 약속드립니다. 지역 사회와 함께 성장하는 믿음직한 파트너가 되겠습니다.`
        },
        history: [
            { year: "2022", event: "양수삼풍에너지 설립" },
            { year: "현재", event: "양평 지역 가정용 연료 공급 서비스 운영 중" }
        ]
    },

    business: {
        title: "주요 서비스",
        description: "가정 및 상업시설을 위한 맞춤형 연료 공급 솔루션",
        items: [
            {
                title: "가정용 연료 소매",
                description: "가정에서 필요로 하는 에너지원을 신속하고 안전하게 집 앞까지 배달해 드립니다.",
                icon: "Truck",
                href: "/business/retail"
            },
            {
                title: "상업용 연료 공급",
                description: "식당, 비닐하우스 등 대량 연료가 필요한 곳에 정기적인 공급 서비스를 제공합니다.",
                icon: "Building",
                href: "/business/commercial"
            },
            {
                title: "안전 점검 서비스",
                description: "연료 공급 시 정기적인 안전 점검을 통해 사고를 미연에 방지합니다.",
                icon: "ShieldCheck",
                href: "/business/safety"
            },
            {
                title: "긴급 배송 시스템",
                description: "갑작스러운 연료 부족 상황에도 빠르게 대응할 수 있는 긴급 배송 망을 운영합니다.",
                icon: "Zap",
                href: "/business/emergency"
            }
        ]
    }
}

export type PageContent = typeof pageContent
