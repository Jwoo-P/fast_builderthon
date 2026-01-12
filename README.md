# 2026 FASTCAMPUS AI HACKERTHON - AI Directors Portfolio

패스트캠퍼스 빌더톤 2026 참가 포트폴리오입니다. 문제를 정의하고 기술로 해결한 6가지 프로젝트와 혁신적인 아이디어들을 소개합니다.

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
.
├── src/
│   ├── components/              # React 컴포넌트
│   │   ├── ProjectCard.tsx      # 프로젝트 카드 컴포넌트
│   │   ├── ProjectModal.tsx     # 프로젝트 상세 모달
│   │   └── InnovationIdeaCard.tsx # 혁신 아이디어 카드
│   ├── data/                    # 데이터 파일
│   │   ├── projects.ts          # 프로젝트 데이터
│   │   └── innovationIdeas.ts   # 혁신 아이디어 데이터
│   ├── types.ts                 # TypeScript 타입 정의
│   ├── App.tsx                  # 메인 앱 컴포넌트
│   ├── main.tsx                 # 앱 진입점
│   └── index.css                # 전역 스타일
├── public/                      # 정적 파일
│   ├── *.png                    # 프로젝트 이미지
│   └── fc-logo-dark-mode.svg    # 로고
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 레이아웃
- **다크 테마**: 어두운 배경색(#130f40)을 활용한 모던한 디자인
- **프로젝트 섹션 구분**:
  - **Representative Project**: 메인 프로젝트(사주킹)를 대형 카드로 강조 표시
  - **Sub Projects**: 나머지 프로젝트들을 그리드 레이아웃으로 표시
  - **Innovation Ideas**: 향후 개발 예정인 혁신적인 아이디어들을 소개
- **인터랙티브 모달**: 프로젝트 클릭 시 상세 정보(문제 정의, 해결 방안, 기술적 도전)를 모달로 표시
- **타입 안전성**: TypeScript로 작성된 타입 안전한 코드
- **성능 최적화**: 이미지 lazy loading 및 최적화된 렌더링

## 🔧 기술 스택

- **React 18**: 사용자 인터페이스 라이브러리
- **TypeScript**: 타입 안전성 보장
- **Vite**: 빠른 빌드 도구
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크

## 📝 프로젝트 목록

### Representative Project
1. **사주킹 (SajuKing)** - GPT-5.2와 Gemini-3.0을 결합한 AI 운세 에이전트
   - 2030 MZ세대 타겟, 스토리텔링 기반 사주 해석
   - Zero-Login 아키텍처, 확률적 생시 추론 알고리즘
   - [서비스 링크](https://www.sajuking.store/)

### Sub Projects
2. **FitFlow AI Coach** - AI 기반 피트니스 코칭 서비스
3. **타로킹 (TarotKing)** - Gemini 3.0 Pro 기반 초개인화 타로 상담 에이전트
   - [서비스 링크](https://taroking.store/)
4. **Archive Gram** - 개인 브랜딩용 카드뉴스 생성 앱
5. **토지맥 (LandMaek)** - VQ 모델과 위성 데이터를 활용한 AI 부동산 가치 분석 플랫폼
   - [서비스 링크](https://www.tojimak.com/)
6. **열네 밤의 꿈 (Fourteen Nights Dream)** - Socket.io 기반 실시간 멀티플레이어 웹 보드게임
   - [서비스 링크](https://boardgame-tc-frontend.vercel.app/)

### Innovation Ideas
- **Memory Tales** - 아이 사진을 맞춤형 동화책으로 제작하는 연간 구독 서비스
- **매력진단소 (Charm Lab)** - AI 기반 연애 코칭 플랫폼
- **스마트 재고 관리** - 사물인식과 OCR 기술로 유통기한 자동 관리 시스템

## 🎯 프로젝트 특징

각 프로젝트는 다음 구조로 상세 정보를 제공합니다:
- **문제 정의 (Problem)**: 해결하고자 하는 실제 문제 상황
- **해결 방안 (Solution)**: 기술적 접근 및 구현 방법
- **기술적 도전 (Challenge)**: 개발 과정에서 마주한 한계와 해결책

## 📄 라이선스

이 프로젝트는 2026 패스트캠퍼스 빌더톤 참가 포트폴리오 목적으로 제작되었습니다.

