# AI Directors의 포트폴리오

기존에 제작했었던 프로덕트들을 한곳에 모아서 제공합니다

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
│   ├── components/       # React 컴포넌트
│   │   └── ProjectCard.tsx
│   ├── data/            # 데이터 파일
│   │   └── projects.ts
│   ├── types/           # TypeScript 타입 정의
│   │   └── types.ts
│   ├── App.tsx          # 메인 앱 컴포넌트
│   ├── main.tsx         # 앱 진입점
│   └── index.css        # 전역 스타일
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 레이아웃
- **다크 모드 지원**: 시스템 설정에 따라 자동으로 다크 모드 적용
- **모던한 UI**: Tailwind CSS를 활용한 세련된 카드 기반 디자인
- **타입 안전성**: TypeScript로 작성된 타입 안전한 코드

## 🔧 기술 스택

- **React 18**: 사용자 인터페이스 라이브러리
- **TypeScript**: 타입 안전성 보장
- **Vite**: 빠른 빌드 도구
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크

## 📝 서비스 목록

1. **사주킹** - AI 기반 사주 운세 서비스
2. **타로킹** - 온라인 타로 카드 점 서비스
3. **토지맥** - 부동산 정보 제공 플랫폼
4. **보드게임 기반 웹앱** - 온라인 보드게임 플랫폼
5. **개인 브랜딩용 카드뉴스 생성앱** - 카드뉴스 제작 도구
6. **피트니스 서비스 웹앱** - AI 기반 피트니스 코칭

## 🌐 웹 호스팅 배포 가이드

프로덕션 빌드가 완료되었습니다. 다음 중 하나의 방법으로 웹 호스팅할 수 있습니다:

### 1️⃣ Vercel (추천) ⭐

**가장 간단하고 빠른 방법**

#### 방법 A: Git 저장소를 통한 배포 (자동 재배포 지원)

1. **GitHub에 코드 업로드** (필수):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

2. [https://vercel.com/new](https://vercel.com/new) 접속
3. **"Import Git Repository"** 클릭
4. GitHub 계정 연결 (처음이면 권한 승인)
5. 업로드한 저장소 선택
6. 프로젝트 설정 확인:
   - Framework Preset: **Vite** (자동 감지)
   - Build Command: `npm run build` (자동 입력)
   - Output Directory: `dist` (자동 입력)
7. **"Deploy"** 클릭 → 완료!

#### 방법 B: Vercel CLI로 직접 배포

```bash
# Vercel CLI 설치
npm install -g vercel

# 로그인
vercel login

# 배포
vercel --prod
```

**참고**: [https://vercel.com/new](https://vercel.com/new) 페이지에서는 "Add New Project" 대신 **"Import Git Repository"** 버튼을 클릭하세요!

**장점:**
- ✅ 무료 (개인 프로젝트)
- ✅ 자동 HTTPS
- ✅ 전 세계 CDN
- ✅ 자동 배포 (Git push 시)
- ✅ 커스텀 도메인 지원

**설정 파일:** `vercel.json` (이미 생성됨)

---

### 2️⃣ Netlify

**Vercel과 유사한 간단한 방법**

1. [Netlify](https://www.netlify.com)에 회원가입
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 선택 또는 `dist` 폴더 드래그 앤 드롭
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy 클릭

**장점:**
- ✅ 무료
- ✅ 자동 HTTPS
- ✅ 폼 처리 기능
- ✅ 커스텀 도메인 지원

**설정 파일:** `netlify.toml` (이미 생성됨)

---

### 3️⃣ GitHub Pages

**GitHub 저장소와 통합된 무료 호스팅**

**사전 설정:**
1. `vite.config.ts`에 base 경로 추가 (필요시):
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/' // 저장소 이름과 동일하게
})
```

**배포 방법:**
1. GitHub 저장소에 코드 푸시
2. Settings → Pages 이동
3. Source: GitHub Actions 선택
4. `.github/workflows/deploy.yml` 파일이 자동 실행

**장점:**
- ✅ 완전 무료
- ✅ GitHub과 통합
- ✅ GitHub Actions로 자동 배포

**설정 파일:** `.github/workflows/deploy.yml` (이미 생성됨)

---

### 4️⃣ Cloudflare Pages

**무료 + 빠른 전 세계 CDN**

1. [Cloudflare Pages](https://pages.cloudflare.com) 접속
2. "Create a project" 클릭
3. GitHub 저장소 연결
4. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy 클릭

**장점:**
- ✅ 무료
- ✅ 매우 빠른 전 세계 CDN
- ✅ 자동 HTTPS
- ✅ 커스텀 도메인 지원

---

### 📦 로컬에서 빌드 확인

배포 전 로컬에서 빌드 결과 확인:

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

---

### 🔧 수동 배포 (일반 웹 호스팅)

일반 웹 호스팅 서비스(FTP 기반 등)를 사용하는 경우:

1. `npm run build` 실행
2. `dist` 폴더의 모든 파일을 웹 서버의 루트 디렉토리에 업로드
3. `.htaccess` 파일 생성 (Apache 서버인 경우):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 💡 추천 배포 순서

1. **빠르게 시작**: Vercel (5분 내 완료)
2. **GitHub과 통합**: GitHub Pages
3. **최고 성능**: Cloudflare Pages

모든 설정 파일이 준비되어 있으니, 위 플랫폼 중 하나를 선택해 배포하시면 됩니다!

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

