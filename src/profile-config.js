/**
 * =========================================================================
 * 🌟 마이링크 (MyLink) 프로필 & SNS 링크 설정 파일 (Profile Configuration)
 * =========================================================================
 *
 * [수정 안내]
 * 1. 아래의 name, bio, avatar 정보를 본인에게 맞게 수정하세요.
 * 2. links 배열에서 본인의 실제 SNS 및 이메일 주소를 url 항목에 입력하세요.
 *    - Instagram 예시: "https://www.instagram.com/your_id"
 *    - YouTube 예시:   "https://www.youtube.com/@your_channel"
 *    - GitHub 예시:    "https://github.com/your_username"
 *    - Email 예시:     "your.email@university.ac.kr" (이메일은 자동으로 mailto: 로 연결됩니다)
 *
 * ⚠️ [중요: 빈 링크 처리 규칙]
 * - 아직 실제 SNS 계정이 없거나 주소를 입력하지 않은 경우, url을 빈 문자열("")로 비워두세요.
 * - url이 비어있는 버튼은 웹사이트에서 자동으로 안전하게 숨겨집니다.
 * - hideEmptyLinks가 true이면 빈 버튼을 숨기고, false이면 비활성화(클릭 불가) 처리합니다.
 */

export const profileConfig = {
  // 프로필 기본 정보
  name: "MyLink",
  bio: "반갑습니다! 저의 다양한 활동과 SNS 링크를 한곳에서 확인해보세요. ✨",
  
  // 프로필 사진 경로
  // 기본 내장 아바타: "./avatar.svg"
  // 본인 사진 파일(예: profile.jpg)을 public 폴더에 넣고 "./profile.jpg"로 변경하셔도 됩니다.
  avatar: "./avatar.svg",

  // 링크 주소가 비어있을 때 처리 방식: true(화면에서 숨김), false(비활성화 상태로 표시)
  hideEmptyLinks: true,

  // SNS 링크 목록 (Instagram, YouTube, GitHub, Email)
  // 💡 실제 SNS 주소는 아래의 url 항목 따옴표("") 안에 넣어주세요.
  links: [
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "@hyomin912",
      description: "일상 사진과 스토리 둘러보기",
      // 실제 인스타그램 주소를 입력하세요. (비워두면 숨김 처리됨)
      url: "https://www.instagram.com/hyomin912",
      color: "#E1306C",
      badge: "Photo",
    },
    {
      id: "youtube",
      title: "YouTube",
      subtitle: "유튜브 채널",
      description: "영상 콘텐츠 및 브이로그",
      // 실제 유튜브 채널 주소를 입력하세요. (비워두면 숨김 처리됨)
      url: "",
      color: "#FF0000",
      badge: "Video",
    },
    {
      id: "github",
      title: "GitHub",
      subtitle: "github.com/gyals12-ux",
      description: "소스코드 및 개발 프로젝트",
      // 실제 깃허브 프로필 주소
      url: "https://github.com/gyals12-ux",
      color: "#24292e",
      badge: "Dev",
    },
    {
      id: "email",
      title: "Email",
      subtitle: "이메일 보내기",
      description: "협업 제안 및 문의 메일 보내기",
      // 실제 이메일 주소를 입력하세요. (비워두면 숨김 처리됨)
      url: "gyals12@hanyang.ac.kr",
      color: "#0284c7",
      badge: "Contact",
    },
  ],

  // 하단 카피라이트 문구
  footer: {
    text: "© 2026 MyLink. Built with HTML, CSS, JavaScript & Vite.",
    madeWith: "Made for University Project 🎓",
  },
};
