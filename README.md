# 사이트명
JiYoung's To Do List
<br>

## 👩‍💻 프로젝트 소개
https://github.com/Zzzzyoung/nbc-project-todolist 에서 발전시킨 프로젝트입니다. 기존에 JavaScript로 작성했던 Todolist를 TypeScript를 이용해 다시 작성하였습니다. <br>
Todolist를 추가할 수 있으며, 삭제가 가능합니다. 완료/취소 버튼을 통해 Todolist의 완료 여부에 따라 Todolist의 목록을 분리할 수 있습니다.
－ 홈 화면
![image](https://github.com/Zzzzyoung/nbc-project-todolist-typescript/assets/154482077/e46478d0-1594-45a1-a8c6-e794ef4e2eb8)
<br>

## 🖇️ 배포 링크

### - vercel<br>
https://nbc-project-todolist-typescript.vercel.app/

<br>

## ⏲️ 개발 기간
- 2024.03.07 ~ 03.08
<br>

## 💻 개발환경
- <img alt="React" src ="https://img.shields.io/badge/React-444444.svg?&style=for-the-badge&logo=React&logoColor=react"/> ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white) <img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
- Github
- VScode
<br>

## 📌 주요 기능
- **Todo 항목 추가 하기**
    - 사용자가 새로운 Todo 항목을 입력하고 추가 할 수 있는 기능
- **Todo 항목 목록 표시 기능**
    - 각 Todo 항목은 고유 식별자를 가짐
- **Todo 삭제 하기**
    - 삭제 시 사용자에게 삭제 확인 요청
- **Todo 완료 상태 표시 기능**
    - 사용자가 Todo 항목을 완료했음을 표시
<br>

## ✔️ 필수 요구 사항
- 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 변경
- Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 **취소**, isDone이 false 이면 라벨을 **완료**로 조건부 렌더링
- odo의 상태가 **Working**이면 위쪽에 위치하고, **Done**이면 아래쪽에 위치하도록 구현
- Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬
- 반복되는 컴포넌트를 찾아서 컴포넌트 분리
<br>

## ✔️ 선택 요구 사항
- [X] 레벨1 : React 이용 Todolist
- [X] 레벨2 : RTK 이용 Todolist
- [X] 레벨3 : RTK + json-server 이용 Todolist
- [X] 레벨4 : RTK + redux thunk 이용 Todolist
- [X] 레벨5 : RTK + react-query 이용 Todolist
- [X] 레벨6 : RTK + tanstack-query 이용 Todolist
<br>

## 🧩 컴포넌트
```
src
├── apis
│   └── todoApi.ts                 # axios를 사용하여 서버로 HTTP 요청
├── assets
├── components
│   ├── hooks                      # useQuery, useMutation 관련 폴더
│   │   ├── keys.constant.ts       # queryKey
│   │   ├── mutationFunctions.ts   # mutationFn 
│   │   ├── queryFuctions.ts       # queryFn
│   │   └── useQuery.ts            # useQuery
│   ├── layout                     
│   │   ├── Footer.tsx             # 푸터
│   │   └── Header.tsx             # 헤더
│   ├── todo
│   │   ├── TodoController.tsx     # todo 폴더 내 컴포넌트 제어
│   │   ├── TodoForm.tsx           # 새로운 Todo 추가
│   │   ├── TodoItem.tsx           # 각 Todo 아이템마다 삭제 및 상태 변경(완료/취소)
│   │   └── TodoList.tsx           # 완료된 항목과 진행 중인 항목으로 나누어 현재 Todo 목록 표시
│   └── types
│       └── todo.d.tsx             # 타입 정의
├── redux
│   ├── config
│   │   └── configStore.ts         # redux의 스토어 설정
│   └── modules
│       └── todoSlice.ts           # RTK를 사용하여 Todo 애플리케이션의 상태를 관리하는 리덕스 슬라이스
│   └── hooks.ts
├── styles
│   ├── FooterStyle.ts             # 푸터 스타일
│   ├── GlobalStyle.ts             # 전역 스타일
│   ├── HeaderStyle.tsx            # 헤더 스타일
│   ├── TodoControllerStyle.ts     # 투두 컨트롤러 스타일
│   ├── TodoFormStyle.ts           # 투두 폼 스타일
│   ├── TodoITemStyle.ts           # 투두 아이템 스타일
│   └── TodoListStyle.jsx          # 투두 리스트 스타일
├── App.tsx
└── index.tsx
db.json
```
<br>

## Create React App + TypeScript 만들기 시작 위한 방법
### 프로젝트 생성하기
npx create-react-app '프로젝트 명' --template typescript

### 프로젝트 실행하기
#### 프로젝트 폴더로 이동하기
cd '프로젝트 명'
#### 프로젝트 실행하기
npm start
