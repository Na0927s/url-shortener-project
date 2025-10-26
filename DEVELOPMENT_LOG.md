### Week 1 (2025.10.27)

#### #### 1 - 프로젝트 초기 설정
- **작업 내용:** Git 리포지토리 초기화 (`git init`). `node_modules`와 `.env` 파일을 무시하도록 `.gitignore` 파일 설정.
- **작업 내용:** 과제 요구 사항인 `GEMINI.md` 파일 추가.
    - **AI 활용:** Gemini와 협력하여 프로젝트 명세서 작성.
- **작업 내용:** `package.json` 파일 추가.
    - **AI 활용:** Gemini CLI가 프로젝트 요구 사항에 맞춰 `dependencies` (express, cors, nanoid) 및 `devDependencies` (nodemon)를 포함한 `package.json` 골격을 생성함.
- **작업 내용:** `npm install`을 실행하여 모든 의존성을 설치하고 `package-lock.json`을 생성하여 버전을 고정함.


#### #### 2 - 백엔드/프론트엔드 골격 생성
- **작업 내용:** `server.js`에 Express 서버 초기화, 포트 설정, `cors`, `express.json`, `express.static` 미들웨어 설정.
    - **AI 활용:** Gemini CLI가 `server.js`의 전체적인 기본 구조를 생성함.
- **작업 내용:** `public/index.html` 파일 생성. (HTML 기본 폼, Tailwind CDN 링크 포함)
    - **AI 활용:** Gemini CLI가 `GEMINI.md` 명세에 따라 반응형 UI를 위한 기본 HTML 뼈대와 스크립트 태그를 생성함.


#### #### 3 - 백엔드 기능 구현
- **작업 내용:** `POST /api/shorten` 엔드포인트 구현. `nanoid`로 코드를 생성하고 `Map` DB에 저장하는 로직 추가.
    - **AI 활용:** AI가 생성한 코드 골격을 기반으로 `nanoid(7)` 호출 및 `urlDatabase.set()` 로직을 완성함.
- **작업 내용:** `GET /:shortCode` 엔드포인트 구현. `Map.get()`으로 `shortCode`를 조회하여 `res.redirect(301, longUrl)`로 리디렉션.
    - **AI 활용:** AI가 `req.params`를 사용한 값 추출, `Map.get()`을 사용한 조회, `res.redirect()` 및 404 오류 처리를 포함한 로직을 생성함.
- **작업 내용:** 서버 측 URL 유효성 검사 로직 강화. `http://` 또는 `https://`로 시작하지 않는 URL은 400 오류를 반환하도록 수정.
    - **학습 내용:** 클라이언트 측 유효성 검사(HTML `type="url"`)에만 의존하지 않고, 항상 서버 측에서도 데이터를 검증해야 함을 배움.


#### #### 4 - 프론트엔드 UI/UX 개발
-   **작업 내용:** AI가 생성한 Tailwind 클래스를 적용하여 UI(헤더, 폼, 버튼, 결과 영역)를 깔끔하게 디자인.
-   **AI 활용:** AI에게 '깔끔한 URL 단축기 UI'를 요청하여 Tailwind 클래스 구조를 생성함.

-   **작업 내용:** `index.html`의 `<script>` 태그 내에 `document.getElementById`를 사용하여 폼, 입력창, 버튼, 결과/오류 영역 등 주요 DOM 요소 선택.
-   **AI 활용:** AI가 HTML 구조에 맞춰 필요한 DOM 선택자 코드를 생성함.


#### #### 5 - 프론트엔드 핵심 로직 구현
-   **작업 내용:** `shortenForm`에 'submit' 이벤트 리스너 추가. `async/await`와 `fetch` API를 사용하여 `/api/shorten` 엔드포인트에 `POST` 요청을 보내는 로직 구현.
-   **AI 활용:** `fetch` API의 `POST` 요청(headers, body, method) 코드 스니펫을 AI가 생성/제공.
-   **학습 내용:** `e.preventDefault()`의 중요성과 `try...catch...finally`를 사용한 비동기 요청 및 버튼 상태(disabled) 관리 방법 학습.

-   **작업 내용:** `displaySuccess(shortUrl)` 및 `displayError(message)` 헬퍼 함수를 구현. API 응답(try/catch)에 따라 적절한 UI(결과 또는 오류 메시지)를 표시하도록 로직 연결.

-   **작업 내용:** '복사' 버튼에 `click` 이벤트 리스너 추가. `document.execCommand('copy')`를 사용하여 단축 URL을 클립보드에 복사하는 기능 구현.
-   **학습 내용:** `setTimeout`을 활용하여 '복사됨!' 텍스트를 2초간 보여주는 등 사용자 경험(UX) 피드백을 제공하는 방법 학습.


#### #### 6 - 문서화
-   **작업 내용:** `README.md` 파일 내용을 작성.
-   **작업 내용:** `DEVELOPMENT_LOG.md`의 '프로젝트 개요', 'AI와의 협업 소감', '최종 결과물 평가' 섹션을 작성하여 개발 일지를 최종 완성함.


3. AI와의 협업 소감

Gemini CLI 활용: GEMINI.md라는 명세서 하나로 package.json의 의존성 설정부터 server.js와 index.html의 복잡한 골격, 그리고 README.md 템플릿까지 단 1분 만에 생성해준 점이 매우 인상적이었다. 특히 백엔드와 프론트엔드 코드를 생성해 주어, 개발 초기 방향 설정에 드는 시간을 획기적으로 줄일 수 있었다.

fetch API나 nanoid 사용법처럼 익숙하지 않은 코드 스니펫을 즉시 생성해 주어, 구글 검색 시간을 크게 줄일 수 있었다.

4. 최종 결과물 평가

달성한 목표: URL 단축(C), 리디렉션(R)의 핵심 기능 2가지를 모두 구현함. (인메모리 DB)


미완성 기능 및 향후 개선 계획

데이터 영속성: 현재는 서버 재시작 시 모든 단축 URL이 사라지는 '인메모리' 방식이다. 향후 MongoDB나 Firebase Firestore 같은 실제 DB에 연결하여 데이터를 영속적으로 저장할 계획이다.

커스텀 코드: 사용자가 직접 shortCode를 지정하는 기능을 추가하고 싶다.
