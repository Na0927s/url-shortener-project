### Week1 (2025.10.27)

#### #### 1 - 프로젝트 초기 설정
- **작업 내용:** Git 리포지토리 초기화 (`git init`). `node_modules`와 `.env` 파일을 무시하도록 `.gitignore` 파일 설정.
- **작업 내용:** 과제 요구 사항인 `GEMINI.md` 파일 추가.
- **AI 활용:** Gemini와 협력하여 프로젝트 명세서 작성.

#### #### 2 - package.json 추가 (AI 생성)
- **작업 내용:** `package.json` 파일 추가.
- **AI 활용:** Gemini CLI가 프로젝트 요구 사항에 맞춰 `dependencies` (express, cors, nanoid) 및 `devDependencies` (nodemon)를 포함한 `package.json` 골격을 생성함.

#### #### 3 - 의존성 설치 (Lock 파일)
- **작업 내용:** `npm install`을 실행하여 모든 의존성을 설치하고 `package-lock.json`을 생성하여 버전을 고정함.

#### #### 4 - server.js 기본 골격 (AI 생성)
- **작업 내용:** `server.js`에 Express 서버 초기화, 포트 설정, `cors`, `express.json`, `express.static` 미들웨어 설정.
- **AI 활용:** Gemini CLI가 `server.js`의 전체적인 기본 구조를 생성함.

#### #### 5 - index.html 기본 골격 (AI 생성)
- **작업 내용:** `public/index.html` 파일 생성. (HTML 기본 폼, Tailwind CDN 링크 포함)
- **AI 활용:** Gemini CLI가 `GEMINI.md` 명세에 따라 반응형 UI를 위한 기본 HTML 뼈대와 스크립트 태그를 생성함.

#### #### 6 - server.js - 단축 API 엔드포인트 구현
- **작업 내용:** `POST /api/shorten` 엔드포인트 구현. `nanoid`로 코드를 생성하고 `Map` DB에 저장하는 로직 추가.
- **AI 활용:** AI가 생성한 코드 골격을 기반으로 `nanoid(7)` 호출 및 `urlDatabase.set()` 로직을 완성함.

#### #### 7 - server.js - 리디렉션 엔드포인트 구현
- **작업 내용:** `GET /:shortCode` 엔드포인트 구현. `Map`에서 URL을 조회하여 `res.redirect(301, longUrl)`로 리디렉션.
- **AI 활용:** `req.params` 사용법과 `res.redirect` 로직은 AI가 생성한 코드를 기반으로 함.

#### #### 8 - server.js - URL 유효성 검사 추가
- **작업 내용:** 사용자가 유효하지 않은 URL(예: 'google.com')을 입력하는 것을 방지하기 위해 `startsWith('http')` 유효성 검사 로직을 `server.js`에 추가함.

#### #### 9 - index.html - UI 스타일링 완성
- **작업 내용:** `index.html`에 Tailwind 클래스를 적용하여 UI 디자인(다크 모드, 중앙 정렬, 입력창/버튼 스타일)을 완성함.
- **AI 활용:** AI가 제안한 `bg-gray-800`, `rounded-lg`, `shadow-xl` 등 Tailwind 클래스를 활용하여 디자인 완성.

#### #### 10 - index.html - JS DOM 연결
- **작업 내용:** `index.html` 스크립트 태그에 `DOMContentLoaded` 리스너 추가. `getElementById`로 폼, 입력창, 버튼 등 DOM 요소 선택 및 `submit` 이벤트 리스너 연결.

#### #### 11 - index.html - JS fetch API 연동
- **작업 내용:** `async/await`와 `fetch`를 사용하여 `/api/shorten` 엔드포인트에 `POST` 요청을 보내고 JSON 응답을 받는 로직 구현.
- **AI 활용:** `fetch`의 `POST` 요청 시 `headers`와 `body`를 올바르게 설정하는 코드 스니펫을 Gemini가 생성해줌.

#### #### 12 - index.html - JS 로딩 및 결과 표시
- **작업 내용:** API 요청 시 사용자 경험을 위해 버튼 비활성화/활성화 로직 추가. 요청 성공 시 `resultContainer`에 `<a>` 태그로 단축 URL을 표시.

#### #### 13 - index.html - JS 오류 처리 개선
- **주요 도전 과제:** 백엔드에서 400 오류를 보내도 프론트엔드 `catch`가 잡지 못함.
- **해결책 (AI 활용):** Gemini에 문의. `fetch`는 네트워크 오류만 `catch`하며, HTTP 오류는 `response.ok`로 확인해야 함을 학습. `if (!response.ok)` 구문을 추가하여 `throw new Error()`로 서버 오류를 수동으로 `catch` 블록에 전달하여 해결.

#### #### 14 - README.md 템플릿 추가
- **작업 내용:** 과제 요구 사항인 `README.md` 파일의 템플릿을 추가함.
- **AI 활용:** Gemini CLI가 '기능', '설치 방법', 'AI 활용법' 섹션이 포함된 `README.md` 템플릿을 생성함.

#### #### 15 - README.md 내용 작성
- **작업 내용:** `README.md`에 프로젝트의 상세한 기능, `npm install/start` 방법, 사용된 기술 스택, AI 활용 경험을 구체적으로 작성함.

#### #### 16 - DEVELOPMENT_LOG.md 템플릿 추가
- **작업 내용:** 과제 요구 사항인 `DEVELOPMENT_LOG.md` 파일 템플릿을 추가함.
- **AI 활용:** Gemini CLI가 과제 사진(`9884.jpg`)의 목차를 기반으로 `DEVELOPMENT_LOG.md` 템플릿을 생성함.

#### #### 17 - DEVELOPMENT_LOG.md 최종 작성
- **작업 내용:** `DEVELOPMENT_LOG.md`에 1~17단계까지의 모든 커밋 내용, AI 활용 사례, 문제 해결 과정을 상세히 기록하여 개발 일지를 최종 완성함.