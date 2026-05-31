/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박시영",
    nameEn: "Siyeong Park",
    father: "박 홍천",
    mother: "윤 경순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "손지영",
    nameEn: "Jiyoung Son",
    father: "손 영만",
    mother: "박 현리",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-15",
    time: "16:20",
    venue: "더파티움 안양",
    hall: "라포레홀 7층",
    address: "경기도 안양시 동안구 시민대로 311",
    tel: "031-731-5000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/138147430",
      naver: "https://naver.me/IFgdHqLz"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "가까운 사람이 생긴다는 건 그런 것 같습니다.\n둘만 있을 때 요상한 춤을 함께 추고,\n서로의 웃긴 말투를 따라 하며 며칠이고 함께 웃는 것.\n\n나이를 먹어도 영영 자라지 않는 마음이 있다는 게\n어쩌면 행운 같습니다.\n무엇보다도,\n자라지 않는 마음을 편안히 내보일 수 있는 사람이\n곁에 있다는 것이 가장 행운이겠지요.\n\n이제는 그 행운을 서로의 곁에서\n평생 지켜나가고자 합니다.\n저희가 가족이 되어 나아가는 뜻깊은 날,\n따뜻한 마음으로 함께해 주시면 좋겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박 시영", bank: "신한은행", number: "110-321-079764" },
      { role: "아버지", name: "박 홍천", bank: "기업은행", number: "138-020526-02-010" },
      { role: "어머니", name: "윤 경순", bank: "신한은행", number: "110-051-462228" }
    ],
    bride: [
      { role: "신부", name: "손 지영", bank: "하나은행", number: "1002-481-960619" },
      { role: "아버지", name: "손 영만", bank: "제일은행", number: "203-20-186290" },
      { role: "어머니", name: "박 현리", bank: "우리은행", number: "559-153231-02006" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 박시영 ♥ 신부 손지영 결혼합니다",
    description: "2026년 8월 15일, 소중한 분들을 초대합니다."
  }
};
