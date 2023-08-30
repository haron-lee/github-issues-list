## Github Issues List

facebook의 react Github Repo의 issue를 댓글이 높은 순으로 볼 수 있는 사이트

## 🔗 배포 링크

https://github-issue-news.netlify.app/

<br>

<img width="2327" alt="image" src="https://github.com/haron-lee/github-issues-list/assets/88657261/f77e2c2b-143f-46b9-9c15-17b1d42b42dd">

## 👑 목표

특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹사이트 구축

### Assignment 1 이슈 목록

> - 이슈 목록 화면 가져오기 API 활용
> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
> - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

=> octokit 라이브러리를 사용, useOctokit custom hook을 만들어 response에서 렌더링 시 필요한 데이터만 필터링 하여 return 후 Home 컴포넌트에서 데이터 받아와서 렌더링

<br>

### Assignment 2 다섯번째 셀마다 광고 이미지 출력

> - 다섯번째 셀마다 광고 이미지 출력

=> issues 데이터를 map으로 각각 IssueItem 컴포넌트로 렌더링 해줄 때 Ad props(boolean)를 전달, issues 데이터의 index가 3과 같거나 크고 (index - 3) % 4가 0과 같을 때는 true를 전달하여 Ad props가 true이면 이미지 배열에서의 이미지를 랜덤으로 렌더링

<br>

### Assignment 3 무한 스크롤

> - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

=> octokit의 url 중 `page=${pagenum}`안에 무한 스크롤 시 넣어줄 currentPage useState 값을 handleScroll 함수에서 scroll이 바닥에 닿을 때마다 +1 해주어 새로운 데이터를 불러와서 렌더링. debounce 기능을 위해 setTimeout 사용

<br>

### Assignment 4 이슈 상세 화면

> - 이슈의 상세 내용 표시
> - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문’ 표시

=> 각 IssueItem을 클릭 할 경우 IssueItem에서 navigate로 /detail/:id로 이동하면서 state로 해당 item의 데이터를 전달 후 렌더링

<br>

### Assignment 5 공통 헤더

> - 두 페이지는 공통 헤더를 공유
> - 헤더에는 Organization / Repository Name이 표시

=> header 컴포넌트를 App.tsx에서 모든 경로에서 공통적으로 사용

<br>

### Assignment 6 데이터 요청 중 로딩 표시

> - 데이터 요청 중 로딩 표시

=> Skeleton 컴포넌트 생성 하여 useOctokit안의 getOctokit 함수가 실행될 때 isLoading useState값으로 데이터 요청 시작시 false, 요청 성공시 true로 변경 되면서 false일 동안 skeleton 컴포넌트를 렌더링

<br>

### Assignment 7 에러 화면 구현

> - 에러 화면 구현

=> 없는 경로일 경우 404 페이지 띄워주기, ErrorBoundary로 에러 통제하기

<br>

### Assignment 8 마크다운 렌더링 라이브러리

> - 마크다운 렌더링 라이브러리 사용

=> react-markdown 라이브러리를 사용하여 렌더링 할 때 `<ReactMarkdown>`으로 감싸서 렌더링

<br>

## ⚙️ 실행 방법

```
npm install
npm run start
```

<br>

## 📂 폴더 구조

```
project-root/
│
├── public/ # 정적 파일들
│ ├── index.html
│ └── manifest.json
│
├── src/
│ ├── components/
│ ├── hooks/
│ ├── api/
│ ├── assets/
│ ├── pages/
│ ├── router/
│ ├── utils/
│ ├── App.tsx
│ ├── types.ts
│ ├── custom.d.ts
│ ├── index.tsx
│ └── GlobalStyle.ts
│
├── .env
├── .gitignore
├── .prettierrc.js
├── .eslintrc
├── package.json
├── tsconfig.json
└── README.md


```

<br>

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Typescript-blue?style=square"/><img src="https://img.shields.io/badge/Octokit-184D66?style=square"/> <img src="https://img.shields.io/badge/React-61DAFB?style=square&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=square&logo=GitHub&logoColor=white"/><img src="https://img.shields.io/badge/git-F05032?style=square&logo=git&logoColor=white">
