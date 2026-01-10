# 🔧 Vercel 배포 문제 해결 가이드

## 404: DEPLOYMENT_NOT_FOUND 오류

이 오류는 여러 원인이 있을 수 있습니다. 아래 단계를 따라 해결하세요.

---

## 1️⃣ Vercel 대시보드에서 배포 상태 확인

1. [https://vercel.com/dashboard](https://vercel.com/dashboard) 접속
2. `fast_builderthon` 프로젝트 클릭
3. **Deployments** 탭에서 배포 목록 확인
4. 최신 배포 클릭하여 **Build Logs** 확인

**확인할 사항:**
- ✅ 배포가 **성공(Ready)** 상태인가?
- ❌ 빌드 오류가 있는가?
- ⚠️ 취소되었거나 실패했는가?

---

## 2️⃣ 빌드 오류가 있는 경우

### 빌드 로그에서 확인할 내용:

- **TypeScript 오류**: `tsc` 컴파일 실패
- **의존성 오류**: `npm install` 실패
- **빌드 스크립트 오류**: `vite build` 실패

### 해결 방법:

1. 로컬에서 빌드 테스트:
```bash
npm install
npm run build
```

2. 오류가 있으면 수정 후 다시 푸시:
```bash
git add .
git commit -m "Fix build errors"
git push
```

---

## 3️⃣ 올바른 URL 확인

Vercel 배포 후 실제 배포 URL을 확인하세요:

1. Vercel 대시보드 → 프로젝트
2. **Deployments** 탭
3. 성공한 배포의 **URL** 클릭
4. 또는 프로젝트 **Settings** → **Domains**에서 확인

**올바른 URL 형식:**
- `https://fast-builderthon.vercel.app`
- `https://fast-builderthon-[hash].vercel.app`

**잘못된 URL 예시:**
- `/deployments/[id]` (이건 배포 관리 페이지)

---

## 4️⃣ 프로젝트 재배포

배포가 실패했거나 문제가 있는 경우:

### 방법 A: GitHub에서 재배포

1. 새로운 커밋 생성:
```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

2. Vercel이 자동으로 재배포 시작

### 방법 B: Vercel 대시보드에서 재배포

1. Vercel 대시보드 → 프로젝트
2. **Deployments** 탭
3. 성공한 배포 옆 **⋯** 메뉴 클릭
4. **Redeploy** 선택

---

## 5️⃣ 프로젝트 설정 재확인

Vercel 프로젝트 설정이 올바른지 확인:

1. Vercel 대시보드 → 프로젝트 → **Settings** → **General**
2. 확인 사항:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

설정이 다르면 **Override** 버튼으로 수정

---

## 6️⃣ vercel.json 파일 확인

프로젝트 루트에 `vercel.json` 파일이 있는지 확인:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

이 파일이 있으면 Vercel이 자동으로 이 설정을 사용합니다.

---

## 7️⃣ Node.js 버전 확인

Vercel이 올바른 Node.js 버전을 사용하는지 확인:

1. 프로젝트에 `.nvmrc` 파일 생성:
```bash
echo "18" > .nvmrc
```

2. 또는 `package.json`에 engines 추가:
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

3. 커밋 후 푸시:
```bash
git add .nvmrc
git commit -m "Set Node.js version"
git push
```

---

## 8️⃣ 새 프로젝트로 재배포 (최후의 수단)

위 방법으로 해결되지 않으면:

1. Vercel 대시보드에서 기존 프로젝트 삭제
2. [https://vercel.com/new](https://vercel.com/new) 접속
3. **Import Git Repository** 클릭
4. `fast_builderthon` 저장소 다시 선택
5. 설정 확인 후 **Deploy**

---

## ✅ 일반적인 해결 순서

1. **Vercel 대시보드에서 빌드 로그 확인**
2. **로컬에서 빌드 테스트** (`npm run build`)
3. **설정 파일 확인** (`vercel.json`)
4. **빈 커밋으로 재배포**
5. **프로젝트 설정 재확인**
6. **새 프로젝트로 재배포** (최후의 수단)

---

## 💡 도움이 필요한 경우

Vercel 공식 문서:
- [Vercel 배포 가이드](https://vercel.com/docs/deployments/overview)
- [Vite 배포 가이드](https://vercel.com/docs/frameworks/vite)

문제가 계속되면 Vercel 대시보드의 빌드 로그를 복사해서 공유해주시면 더 정확한 해결책을 제시할 수 있습니다!

