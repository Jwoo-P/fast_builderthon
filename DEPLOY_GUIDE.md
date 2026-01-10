# 🚀 Vercel 배포 가이드 (2024 최신)

## 방법 1: Git 저장소를 통한 배포 (추천)

### 1단계: GitHub에 코드 업로드

먼저 프로젝트를 GitHub 저장소에 업로드해야 합니다:

```bash
# Git 초기화 (아직 안 했다면)
git init

# GitHub 저장소 생성 후
git add .
git commit -m "Initial commit"

# GitHub 저장소 주소 추가 (your-username/your-repo-name)
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2단계: Vercel에서 프로젝트 Import

1. [https://vercel.com/new](https://vercel.com/new) 접속
2. **"Import Git Repository"** 클릭
3. GitHub 계정 연결 (처음이면 권한 승인)
4. 업로드한 저장소 선택
5. 프로젝트 설정:
   - **Framework Preset**: Vite (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 입력됨)
   - **Output Directory**: `dist` (자동 입력됨)
   - **Install Command**: `npm install` (자동 입력됨)
6. **"Deploy"** 버튼 클릭

### 3단계: 배포 완료

- 배포가 완료되면 자동으로 `https://your-project-name.vercel.app` 주소가 생성됩니다
- 이후 코드를 푸시할 때마다 자동으로 재배포됩니다

---

## 방법 2: Vercel CLI를 통한 배포 (코드 직접 업로드)

GitHub 없이 바로 배포하고 싶다면:

### 1단계: Vercel CLI 설치

```bash
npm install -g vercel
```

### 2단계: Vercel 로그인

```bash
vercel login
```

브라우저가 열리면 GitHub 계정으로 로그인

### 3단계: 프로젝트 배포

```bash
# 프로젝트 루트 디렉토리에서
vercel

# 또는 프로덕션 배포
vercel --prod
```

- 첫 배포 시 질문들이 나오면 기본값으로 Enter
- 자동으로 `dist` 폴더 인식 및 배포

---

## 방법 3: 드래그 앤 드롭 배포

**⚠️ 주의**: 이 방법은 간단하지만 자동 재배포가 안 됩니다.

1. [https://vercel.com/new](https://vercel.com/new) 접속
2. **"Import Git Repository"** 대신 아래로 스크롤
3. 로컬에서 `dist` 폴더를 압축
4. 압축 파일을 드래그 앤 드롭 (제한적 지원)

---

## 🔧 문제 해결

### "Import Git Repository"가 안 보이는 경우

1. **Vercel 대시보드로 이동**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. 상단 오른쪽의 **"Add New..."** 버튼 클릭
3. 또는 좌측 메뉴에서 **"Projects"** → **"Add New Project"**

### GitHub 저장소가 안 보이는 경우

1. Vercel 계정 설정에서 GitHub 권한 확인
2. [https://vercel.com/account/integrations](https://vercel.com/account/integrations) 접속
3. GitHub 재연결 또는 권한 재승인

### 빌드 에러가 발생하는 경우

- `vercel.json` 파일이 올바르게 설정되어 있는지 확인
- `package.json`의 빌드 스크립트 확인: `"build": "tsc && vite build"`
- Vercel 대시보드에서 빌드 로그 확인

---

## ✅ 확인 사항

배포 전 확인:

- [ ] `npm run build` 로컬에서 성공하는가?
- [ ] `dist` 폴더가 생성되는가?
- [ ] `vercel.json` 파일이 있는가?

---

## 📝 추가 설정 (선택사항)

### 커스텀 도메인 추가

1. Vercel 프로젝트 대시보드 → Settings → Domains
2. 원하는 도메인 입력
3. DNS 설정 안내 따르기

### 환경 변수 설정

1. Vercel 프로젝트 대시보드 → Settings → Environment Variables
2. 필요한 변수 추가

---

**참고**: Vercel UI는 자주 업데이트되므로, 화면이 약간 다를 수 있습니다. 하지만 핵심 단계는 동일합니다!

