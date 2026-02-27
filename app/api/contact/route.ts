import { NextResponse } from "next/server"

/**
 * 이 파일은 고객의 상담 신청을 처리하는 백엔드 서버 역할의 샘플입니다.
 * URL: /api/contact 로 POST 요청을 보내면 동작합니다.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // 여기서 백엔드 로직이 실행됩니다:
    // 1. 데이터베이스(DB)에 저장하거나
    // 2. 이메일/카톡 알림을 보내거나
    // 3. 엑셀로 저장하거나 등등

    console.log("백엔드에서 받은 데이터:", data)

    // 성공 응답 반환 (JSON 형식)
    return NextResponse.json({
      success: true,
      message: "상담 신청이 백엔드에 성공적으로 도달했습니다!",
      receivedData: data
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "데이터 처리 중 오류가 발생했습니다." 
    }, { status: 400 })
  }
}

/**
 * GET 요청 샘플 (상태 체크용)
 */
export async function GET() {
  return NextResponse.json({ 
    status: "online", 
    message: "양수삼풍에너지 백엔드 서버가 작동 중입니다." 
  })
}
