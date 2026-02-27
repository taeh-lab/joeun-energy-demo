export const pageContent = {
    home: {
        hero: {
            title: "Harmony With Nature",
            subtitle: "더 깨끗한 자연, 더 살기 좋은 세상\n친환경 에너지 전문기업 조은에너지가 만들어 갑니다.",
        },
    },
    about: {
        title: "회사소개",
        greeting: {
            title: "인사말",
            content: "조은에너지는 신재생에너지 전문 기업으로서 고객의 신뢰를 최우선으로 합니다.",
        },
        history: [
            { year: "2024", event: "에너지공단 태양광발전 및 지열냉난방 주택, 건물 지원사업 추진" },
            // Add more history items from reference
        ],
    },
    business: {
        title: "사업분야",
        items: [
            {
                id: "geothermal",
                title: "지열냉난방",
                description: "지하를 구성하는 토양, 암반 그리고 지하수가 가지고 있는 열에너지",
                icon: "thermometer",
            },
            {
                id: "solar",
                title: "태양광발전",
                description: "태양광을 직접 전기에너지로 변환시키는 발전방식",
                icon: "sun",
            },
            // Add others...
        ],
    },
}

export type PageContent = typeof pageContent
