# 🔗 마이링크 (MyLink)

> 대학교 과제: 나만의 SNS 및 프로필 링크를 한곳에 모아 보여주는 반응형 웹사이트  
> Linktree 스타일의 모던하고 세련된 개인 링크 허브입니다.

---

## 📌 1. 프로젝트 목표 & 과제 제출 정보
- **프로젝트 명**: 마이링크 (MyLink)
- **GitHub 저장소**: `https://github.com/gyals12-ux/mylink`
- **배포 주소 (GitHub Pages)**: `https://gyals12-ux.github.io/mylink/`

---

## 📁 2. 프로젝트 폴더 구조
저장소 루트 내 `MyLink` 전용 폴더에 모든 핵심 소스코드와 개발 환경이 구성되어 있습니다:

```text
mylink/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포 액션
├── MyLink/                     # 🌟 마이링크 프로젝트 전용 폴더
│   ├── public/                 # 정적 리소스 (아바타, 파비콘)
│   ├── src/                    # 소스코드
│   │   ├── icons.js            # SNS 및 인터랙션 SVG 벡터 아이콘
│   │   ├── main.js             # 렌더링, 다크모드, 클립보드 복사 스크립트
│   │   ├── profile-config.js   # 프로필 정보 & SNS 링크 설정 파일
│   │   └── style.css           # 모바일 퍼스트 반응형 스타일시트
│   ├── index.html              # 메인 HTML5 템플릿
│   ├── package.json            # MyLink 패키지 및 스크립트 설정
│   └── vite.config.js          # Vite 빌더 설정 (base: '/mylink/')
├── .gitignore
├── package.json                # 루트 워크스페이스 편의 스크립트
└── README.md                   # 프로젝트 문서
```

---

## ✨ 3. 주요 기능 및 디자인 특징

- **모바일 중심 반응형 디자인**: 스마트폰 화면에 최적화된 유려한 카드 UI (PC 및 태블릿에서도 최적의 비율 제공)
- **중앙 원형 프로필**: 부드러운 그라데이션 링과 펄스 애니메이션이 적용된 프로필 아바타
- **이름 & 바이오 표시**: 가독성 높은 세련된 타이포그래피 (`김효민의 MyLink`)
- **SNS 링크 버튼 모음**:
  1. **Instagram** (인스타그램 `@hyomin912`)
  2. **YouTube** (유튜브)
  3. **GitHub** (깃허브 `gyals12-ux`)
  4. **Email** (이메일 `gyals12@hanyang.ac.kr`)
- **버튼 인터랙션**: 마우스 호버 시 부드러운 상승(Lift) 및 브랜드 컬러 포인트 애니메이션
- **다크 모드 지원**:
  - 시스템 테마(다크/라이트) 자동 감지
  - 우측 상단 토글 버튼으로 즉시 전환
  - `localStorage`를 통해 사용자 설정 테마 유지
- **내 마이링크 주소 복사**:
  - 원클릭 클립보드 주소 복사 기능
  - 복사 완료 시 세련된 토스트(Toast) 팝업 알림
- **설정 파일 기반 링크 관리**:
  - `MyLink/src/profile-config.js`에서 프로필 정보 및 SNS 주소 손쉽게 변경
  - **주소가 비어있는 버튼은 자동으로 숨김 처리**되어 깔끔한 화면 유지

---

## 🛠️ 4. 기술 스택
- **Language**: HTML5, CSS3, Modern JavaScript (ES Modules)
- **Build Tool**: Vite (빠른 번들링 & HMR 개발 서버)
- **Deployment**: GitHub Pages (GitHub Actions 자동 배포 지원)

---

## ⚙️ 5. SNS 링크 및 프로필 수정 방법

[`MyLink/src/profile-config.js`](file:///c:/Users/user/Desktop/my-link-hy/MyLink/src/profile-config.js) 파일을 열어 원하는 내용으로 수정할 수 있습니다:

```javascript
export const profileConfig = {
  name: "김효민의 MyLink",
  bio: "반갑습니다! 저의 다양한 활동과 SNS 링크를 한곳에서 확인해보세요. ✨",
  avatar: "./avatar.svg",

  links: [
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "@hyomin912",
      url: "https://www.instagram.com/hyomin912",
      color: "#E1306C",
    },
    {
      id: "youtube",
      title: "YouTube",
      url: "", // 비워두면("") 버튼이 자동으로 숨겨집니다.
      color: "#FF0000",
    },
    {
      id: "github",
      title: "GitHub",
      subtitle: "github.com/gyals12-ux",
      url: "https://github.com/gyals12-ux",
      color: "#24292e",
    },
    {
      id: "email",
      title: "Email",
      subtitle: "이메일 보내기",
      url: "gyals12@hanyang.ac.kr",
      color: "#0284c7",
    },
  ],
};
```

---

## 💻 6. 로컬 개발 및 실행

**1) MyLink 폴더 안에서 실행할 때:**
```bash
cd MyLink
npm run dev      # 로컬 개발 서버 실행
npm run build    # 배포용 빌드
npm run preview  # 빌드 결과 미리보기
```

**2) 프로젝트 루트에서 바로 실행할 때:**
```bash
npm run dev      # MyLink 개발 서버 실행
npm run build    # MyLink 배포용 빌드
npm run deploy   # GitHub Pages 배포
```
