# 📤 GitHub에 코드 푸시하기

## 1단계: Git 설치

Git이 설치되어 있지 않으므로 먼저 설치해야 합니다.

### 방법 A: Git 공식 사이트에서 설치 (추천)

1. [https://git-scm.com/download/win](https://git-scm.com/download/win) 접속
2. 자동으로 Windows용 설치 파일 다운로드
3. 다운로드한 파일 실행
4. 설치 과정에서 기본 설정으로 "Next" 클릭 (특별히 변경할 필요 없음)
5. 설치 완료 후 **새로운 터미널 창** 열기

### 방법 B: winget으로 설치 (PowerShell)

```powershell
winget install --id Git.Git -e --source winget
```

설치 후 **새로운 터미널 창**을 열어야 합니다.

---

## 2단계: Git 초기화 및 커밋

Git 설치 후 다음 명령어들을 실행하세요:

```bash
# 1. 프로젝트 디렉토리로 이동
cd D:\fast_builderthon

# 2. Git 초기화
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 번째 커밋
git commit -m "Initial commit"

# 5. GitHub 저장소 연결
git remote add origin https://github.com/Jwoo-P/fast_builderthon.git

# 6. 기본 브랜치를 main으로 설정
git branch -M main

# 7. GitHub에 푸시
git push -u origin main
```

**⚠️ 중요**: `git push` 시 GitHub 로그인 정보를 입력해야 합니다.

---

## 3단계: GitHub 인증 (Personal Access Token 필요)

GitHub은 2021년 8월부터 비밀번호 대신 **Personal Access Token (PAT)**을 사용합니다.

### Personal Access Token 생성:

1. GitHub 접속 → 우측 상단 프로필 클릭 → **Settings**
2. 좌측 메뉴 맨 아래 **Developer settings** 클릭
3. **Personal access tokens** → **Tokens (classic)** 클릭
4. **Generate new token** → **Generate new token (classic)** 클릭
5. 설정:
   - **Note**: `fast_builderthon` (아무 이름이나 OK)
   - **Expiration**: 원하는 기간 선택 (90 days 권장)
   - **Select scopes**: ✅ **repo** 체크 (자동으로 하위 항목 체크됨)
6. **Generate token** 클릭
7. **⚠️ 토큰을 복사**하세요! (한 번만 보여줍니다)

### 푸시할 때 사용:

```bash
git push -u origin main
```

- Username: `Jwoo-P` (GitHub 사용자명)
- Password: **위에서 복사한 Personal Access Token** 입력

---

## 4단계: Vercel에서 배포

GitHub에 푸시가 완료되면:

1. [https://vercel.com/new](https://vercel.com/new) 접속
2. **"Import Git Repository"** 클릭
3. GitHub 계정 연결 (처음이면 권한 승인)
4. **`fast_builderthon`** 저장소 선택
5. 프로젝트 설정 확인:
   - Framework Preset: **Vite** (자동 감지)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **"Deploy"** 클릭

배포 완료 후 `https://fast-builderthon.vercel.app` 같은 주소가 생성됩니다!

---

## 🚀 빠른 참고 명령어

### 이후 코드 수정 후 업로드할 때:

```bash
git add .
git commit -m "코드 변경 내용 설명"
git push
```

### Vercel 자동 배포

GitHub에 푸시하면 Vercel이 자동으로 재배포합니다!

---

## ❓ 문제 해결

### "git: command not found" 오류
- Git을 설치한 후 **새로운 터미널 창**을 열었는지 확인
- 또는 컴퓨터 재시작

### "remote origin already exists" 오류
```bash
git remote remove origin
git remote add origin https://github.com/Jwoo-P/fast_builderthon.git
```

### "Authentication failed" 오류
- Personal Access Token을 정확히 입력했는지 확인
- 토큰이 만료되지 않았는지 확인

---

## 💡 대안: GitHub Desktop 사용

명령어가 어렵다면 **GitHub Desktop** 앱을 사용할 수도 있습니다:

1. [https://desktop.github.com](https://desktop.github.com) 다운로드
2. GitHub 계정으로 로그인
3. "Add" → "Add existing repository"
4. `D:\fast_builderthon` 선택
5. "Publish repository" 클릭

GitHub Desktop을 사용하면 Personal Access Token 없이도 쉽게 푸시할 수 있습니다!

