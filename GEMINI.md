프로젝트: URL 단축기 (Node.js + Vanilla JS)

이 GEMINI.md 파일은 Node.js(Express) 백엔드와 Vanilla JS 프론트엔드를 갖춘 URL 단축기 애플리케이션을 생성하기 위한 명세입니다. 과제 요구 사항인 README.md와 DEVELOPMENT_LOG.md 템플릿을 포함합니다.

1. Git 무시 파일: .gitignore

경로: .gitignore

프롬프트:
Node.js 프로젝트를 위한 표준 .gitignore 파일을 생성합니다. node_modules와 .env 파일을 포함해야 합니다.

node_modules/
.env


2. 백엔드 설정: package.json

경로: package.json

프롬프트:
Node.js 프로젝트를 위한 package.json 파일을 생성합니다.

type: module (ES 모듈 import 구문 사용)

main: server.js

scripts:

start: node server.js

dev: nodemon server.js

dependencies:

express: "^4.0.0"

cors: "^2.8.5"

nanoid: "^5.0.0" (고유한 단축 코드 생성용)

devDependencies:

nodemon: "^3.0.0"

3. 백엔드 서버: server.js

경로: server.js

프롬프트:
Node.js Express 서버를 server.js 파일로 생성합니다. 이 서버는 URL 단축 API 로직을 처리하고 프론트엔드 정적 파일을 제공합니다.

요구 사항:

모듈 가져오기: express, cors, nanoid (ESM import 사용). path와 URL 내장 모듈도 가져옵니다.

초기화: Express 앱을 초기화하고 PORT를 3000번으로 설정합니다.

인메모리 DB: const urlDatabase = new Map();를 사용해 단축 URL을 저장합니다.

미들웨어:

app.use(cors()): 모든 도메인에서의 요청을 허용합니다.

app.use(express.json()): JSON 요청 본문을 파싱합니다.

app.use(express.static('public')): public 디렉터리에서 정적 파일(index.html)을 제공합니다.

API 엔드포인트 1: POST /api/shorten

req.body에서 longUrl을 받습니다.

nanoid(7)을 사용하여 7자리의 shortCode를 생성합니다.

urlDatabase에 [shortCode, longUrl]을 저장합니다.

http://localhost:3000/과 shortCode를 조합하여 전체 shortUrl을 생성합니다.

{ shortUrl: '...' } 형식의 JSON으로 응답합니다.

간단한 URL 유효성 검사(예: startsWith('http'))를 포함합니다.

API 엔드포인트 2: GET /:shortCode

req.params에서 shortCode를 가져옵니다.

urlDatabase에서 shortCode를 조회합니다.

longUrl이 존재하면 res.redirect(301, longUrl)을 사용하여 리디렉션합니다.

존재하지 않으면 404 Not Found 오류를 응답합니다.

서버 실행: app.listen으로 서버를 시작하고 콘솔에 로그를 남깁니다.

4. 프론트엔드: public/index.html

경로: public/index.html

프롬프트:
URL 단축기 프론트엔드를 위한 단일 HTML 파일을 생성합니다. 모든 HTML, CSS(Tailwind 사용), JavaScript는 이 파일 안에 포함되어야 합니다. 과제 요구 사항인 반응형 디자인을 Tailwind 클래스로 구현해야 합니다.

요구 사항:

HTML (기본 구조):

<!DOCTYPE html> (lang="ko")

<meta name="viewport" content="width=device-width, initial-scale=1.0"> (반응형 필수)

<title>URL 단축기</title>

<script src="https://cdn.tailwindcss.com"></script> (Tailwind CDN)

HTML (본문):

<body>에 어두운 테마 적용: bg-gray-900 text-white min-h-screen flex items-center justify-center font-sans

메인 컨테이너: div (예: bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md mx-4 sm:mx-0)

제목 <h1>: '초간단 URL 단축기' (text-3xl font-bold text-center mb-6)

<form id="shorten-form">:

<input type="url" id="long-url" ...> (예: w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500, placeholder="단축할 긴 URL을 붙여넣으세요...", required)

<button type="submit" id="submit-button" ...> (예: w-full p-3 mt-4 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50) '단축하기' 텍스트.

결과 표시 영역: <div id="result-container" class="mt-6 text-center h-10"></div>

JavaScript (<body> 끝의 <script> 태그):

DOMContentLoaded 이벤트 리스너를 사용하거나 스크립트 태그를 body 끝에 둡니다.

DOM 요소 선택: shortenForm, longUrlInput, submitButton, resultContainer.

shortenForm에 submit 이벤트 리스너 추가.

이벤트 리스너 로직:

event.preventDefault()

버튼 비활성화: submitButton.disabled = true; submitButton.textContent = '처리 중...';

resultContainer 초기화.

fetch('/api/shorten', { ... })로 POST 요청 (JSON body 포함).

성공 시 (.then): resultContainer에 클릭 가능한 <a> 태그로 단축 URL 표시. (예: result.innerHTML = \<p>단축 URL: <a href="${data.shortUrl}" target="\_blank" class="text-blue-400 hover:underline"\>${data.shortUrl}</a></p>``)

오류 시 (.catch): resultContainer에 오류 메시지 표시. (예: result.innerHTML = \<p class="text-red-400">오류가 발생했습니다.</p>``)

마지막 (.finally): 버튼 활성화 및 텍스트 복원.

5. 프로젝트 문서: README.md

경로: README.md

프롬프트:
과제 제출용 README.md 파일의 템플릿을 생성합니다.

요구 사항:

프로젝트 제목

주요 기능 목록

설치 및 실행 방법 (git clone, npm install, npm start)

사용한 기술 스택 (Node.js, Express, Vanilla JS, Tailwind CSS, Gemini CLI)

API 엔드포인트 설명 (POST /api/shorten, GET /:shortCode)

개발 과정에서의 AI 활용 방법 (과제 요구 사항) - (섹션만 생성하고 내용은 비워둠)

6. 개발 일지: DEVELOPMENT_LOG.md

경로: DEVELOPMENT_LOG.md

프롬프트:
과제 제출용 DEVELOPMENT_LOG.md 파일의 템플릿을 생성합니다. (과제 이미지 9884.jpg의 형식을 따름)

요구 사항:

# 개발 일지 제목

## 프로젝트 개요 (프로젝트명, 개발 기간, 목표)

## 개발 과정

### Week 1 (날짜)

#### #### Day 1 - 프로젝트 기획

**작업 내용:**

**Gemini CLI 사용 프롬프트:**

**결과 및 수정사항:**

**학습 내용:**

**AI 활용:** (비워둠)

(Day 2, Day 3 템플릿도 간단히 추가)

## 최종 결과물 평가 (비워둠)

## AI와의 협업 경험 소감 (비워둠)