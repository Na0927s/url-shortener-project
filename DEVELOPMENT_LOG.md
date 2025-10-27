## Week1 (2025.10.27)

## ### 0 - 프로젝트 개요 
- **프로젝트명:** url-shortener-project
- **개발 기간:** 2일
- **목표:** URL 단축, URL 리디렉션, 실시간 유효성 검사 넣기
- **작업 내용**: 긴 URL을 입력하면 7자리의 고유한 단축 코드를 생성하여 제공, URL 리디렉션, 실시간 유효성 검사
- **Gemini CLI 사용 프롬프트**: 나는 rl단축기를 만들고 싶어. Gemini Cli를 통해 만들거고 프론트엔드는 Vanilla JS, HTML, and CsS로 설정하고 백엔드로 Node.js (Express)를 설정하려고 해. Gemini Cli 사용되는 GEMINI.md 파일 만들어줘.

## ### 1 - 프로젝트 초기 설정
- **작업 내용:** Git 리포지토리 초기화 (`git init`). `node_modules`와 `.env` 파일을 무시하도록 `.gitignore` 파일 설정.
- **작업 내용:** 과제 요구 사항인 `GEMINI.md` 파일 추가.
- **AI 활용:** Gemini와 협력하여 프로젝트 명세서 작성.

## ### 2 - package.json 추가 (AI 생성)
- **작업 내용:** `package.json` 파일 추가.
- **AI 활용:** Gemini CLI가 프로젝트 요구 사항에 맞춰 `dependencies` (express, cors, nanoid) 및 `devDependencies` (nodemon)를 포함한 `package.json` 골격을 생성함.

## ### 3 - 의존성 설치 (Lock 파일)
- **작업 내용:** `npm install`을 실행하여 모든 의존성을 설치하고 `package-lock.json`을 생성하여 버전을 고정함.

## ### 4 - server.js 기본 골격 (AI 생성)
- **작업 내용:** `server.js`에 Express 서버 초기화, 포트 설정, `cors`, `express.json`, `express.static` 미들웨어 설정.
- **AI 활용:** Gemini CLI가 `server.js`의 전체적인 기본 구조를 생성함.

## ### 5 - index.html 기본 골격 (AI 생성)
- **작업 내용:** `public/index.html` 파일 생성. (HTML 기본 폼, Tailwind CDN 링크 포함)
- **AI 활용:** Gemini CLI가 `GEMINI.md` 명세에 따라 반응형 UI를 위한 기본 HTML 뼈대와 스크립트 태그를 생성함.

## ### 6 - server.js - 단축 API 엔드포인트 구현
- **작업 내용:** `POST /api/shorten` 엔드포인트 구현. `nanoid`로 코드를 생성하고 `Map` DB에 저장하는 로직 추가.
- **AI 활용:** AI가 생성한 코드 골격을 기반으로 `nanoid(7)` 호출 및 `urlDatabase.set()` 로직을 완성함.

## ### 7 - server.js - 리디렉션 엔드포인트 구현
- **작업 내용:** `GET /:shortCode` 엔드포인트 구현. `Map`에서 URL을 조회하여 `res.redirect(301, longUrl)`로 리디렉션.
- **AI 활용:** `req.params` 사용법과 `res.redirect` 로직은 AI가 생성한 코드를 기반으로 함.

## ### 8 - server.js - URL 유효성 검사 추가
- **작업 내용:** 사용자가 유효하지 않은 URL(예: 'google.com')을 입력하는 것을 방지하기 위해 `startsWith('http')` 유효성 검사 로직을 `server.js`에 추가함.

## ### 9 - index.html - UI 스타일링 완성
- **작업 내용:** `index.html`에 Tailwind 클래스를 적용하여 UI 디자인(다크 모드, 중앙 정렬, 입력창/버튼 스타일)을 완성함.
- **AI 활용:** AI가 제안한 `bg-gray-800`, `rounded-lg`, `shadow-xl` 등 Tailwind 클래스를 활용하여 디자인 완성.

## ### 10 - index.html - JS DOM 연결
- **작업 내용:** `index.html` 스크립트 태그에 `DOMContentLoaded` 리스너 추가. `getElementById`로 폼, 입력창, 버튼 등 DOM 요소 선택 및 `submit` 이벤트 리스너 연결.

## ### 11 - index.html - JS fetch API 연동
- **작업 내용:** `async/await`와 `fetch`를 사용하여 `/api/shorten` 엔드포인트에 `POST` 요청을 보내고 JSON 응답을 받는 로직 구현.
- **AI 활용:** `fetch`의 `POST` 요청 시 `headers`와 `body`를 올바르게 설정하는 코드 스니펫을 Gemini가 생성해줌.

## ### 12 - index.html - JS 로딩 및 결과 표시
- **작업 내용:** API 요청 시 사용자 경험을 위해 버튼 비활성화/활성화 로직 추가. 요청 성공 시 `resultContainer`에 `<a>` 태그로 단축 URL을 표시.

## ### 13 - index.html - JS 오류 처리 개선
- **주요 도전 과제:** 백엔드에서 400 오류를 보내도 프론트엔드 `catch`가 잡지 못함.
- **해결책 (AI 활용):** Gemini에 문의. `fetch`는 네트워크 오류만 `catch`하며, HTTP 오류는 `response.ok`로 확인해야 함을 학습. `if (!response.ok)` 구문을 추가하여 `throw new Error()`로 서버 오류를 수동으로 `catch` 블록에 전달하여 해결.

## ### 14 - README.md 템플릿 추가
- **작업 내용:** 과제 요구 사항인 `README.md` 파일의 템플릿을 추가함.
- **AI 활용:** Gemini CLI가 '기능', '설치 방법', 'AI 활용법' 섹션이 포함된 `README.md` 템플릿을 생성함.

## ### 15 - README.md 내용 작성
- **작업 내용:** `README.md`에 프로젝트의 상세한 기능, `npm install/start` 방법, 사용된 기술 스택, AI 활용을 구체적으로 작성함.

## ### 16 - DEVELOPMENT_LOG.md 템플릿 추가
- **작업 내용:** 과제 요구 사항인 `DEVELOPMENT_LOG.md` 파일 템플릿을 추가함.
- **AI 활용:** Gemini CLI가 과제 사진(`9884.jpg`)의 목차를 기반으로 `DEVELOPMENT_LOG.md` 템플릿을 생성함.

## ### 17 - DEVELOPMENT_LOG.md 작성
- **작업 내용:** `DEVELOPMENT_LOG.md`에 모든 커밋 내용, AI 활용 사례, 문제 해결 과정을 상세히 기록하여 개발 일지를 1차 완성함.
- **작업 내용:** `DEVELOPMENT_LOG.md`에 바이브 코딩 활용 소감, 최종 결과물 평가 일지, 잊었던 프로젝트 개요를 추가로 넣어 2차 완성함.

## ### 18 - README.md 내용 수정
- **작업 내용:** `README.md`의 언어를 한눈에 알아보기 쉽게 한국어로 수정함.



## 바이브 코딩 활용 소감

### AI와의 협업 경험
- **소감:** GEMINI.md라는 명세서 하나로 package.json의 의존성 설정부터 server.js와 index.html의 복잡한 골격, 그리고 README.md 템플릿까지 단 1분 만에 생성해준 점이 매우 인상적이었다. 특히 개발 초기 방향 설정에 드는 시간을 획기적으로 줄일 수 있었다. 또한 어떻게 커밋을 해야 할지 감을 잡지 못해서, 커밋을 생성하기 위해 'Gemini CLI 개발 봇'과의 대화형 시뮬레이션을 했다. AI 봇이 각 단계(커밋 1개 분량)의 작업 내용, Git 명령어, DEVELOPMENT_LOG.md의 기반 내용을 생성해주며 개발 과정을 체계적으로 관리하고 기록하는 데 도움을 주었다. 다만 커밋과 개발일지에 집중하여 전에 만들었던 url단축기 보다 기능이 적다. 하지만 그만큼 깃을 다루는 방법에 익숙해지고 GEMINI.md와 개발일지를 작성하는 방법에 익숙해 지게 되었다고 생각한다. 

### 효과적이었던 프롬프트 패턴
- **소감:** 단답 보다는 최소 두줄을 작성했을 때, '~해줘'라고 끝났을 때 효과적이었다.

### 개선이 필요한 부분
- **소감:** 나의 이해도가 여전히 너무 낮아 응용하기 어렵다는 생각이 들었다. 이 때문에 내가 ai에게 너무 끌려다닌다는 생각이 들었다. cli는 물론이고 깃과 VScode, 우분투를 이해할 수 있도록 노력해야겠다. 또한 Gemini GLI를 응용하여 여러 프로젝트를 만들고 깃과 연동하는 작업을 많이 시도해봐야 겠다. 


## 최종 결과물 평가

### 달성한 목표:
- **기능 구현:** URL 단축(C), 리디렉션(R)의 핵심 기능 2가지를 모두 구현함. (인메모리 DB)

### 미완성 기능 및 향후 개선 계획:
- **데이터 영속성:** 현재는 서버 재시작 시 모든 단축 URL이 사라지는 '인메모리' 방식이다. 향후 데이터를 영속적으로 저장할 수 있도록 바꿀 계획이다.
- **(기능추가)클립보드로 복사 버튼:** 생성된 단축 URL 옆에 '복사' 버튼을 만들어, 클릭 한 번으로 URL을 복사할 수 있게 해주는 기능 추가.
- **(기능추가)단축 URL 히스토리:** 사용자가 만들었던 단축 URL 목록을 브라우저에 저장해서 보여주는 기능 추가.
- **(기능추가)QR 코드 생성:** 단축된 URL을 QR 코드로도 만들어서 보여주는 기능 추가.
- **(기능추가)단축 URL 만료 기능:** 만료 시간을 설정하는 기능 추가.
