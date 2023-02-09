# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 : 김청훈

## 개요

1. [결과물](#결과물)
   1. [배포 링크](#배포-링크)
   2. [로컬 실행 방법](#로컬-실행-방법)
2. [구현 요구 사항](#구현-요구-사항)
3. [설치 패키지 및 개발 환경](#설치-패키지-및-개발-환경)
4. [프로젝트 트리 구조](#프로젝트-트리-구조)
   1. [폴더를 구분한 기준](#폴더를-구분한-기준)
5. [과제 진행 시 주안점](#과제-진행-시-주안점)
6. [한계점 및 개선 사항](#한계점-및-개선-사항)

<br/>

---

## 결과물

### 배포 링크

[https://clean-teach.github.io/wanted-pre-onboarding-frontend](https://clean-teach.github.io/wanted-pre-onboarding-frontend)

### 로컬 실행 방법

1. 컴퓨터에 레파지토리 받기
2. 터미털 창에서 해당 경로로 이동 후 `yarn start`로 로컬 서버 실행

<br/>

---

## 구현 요구 사항

### **1. 로그인 / 회원가입**

- [x] `/signup` 경로에 회원가입 기능을 개발
- [x] `/signin` 경로에 로그인 기능을 개발
  - [x] 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성
    - [x] 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
    - [x] 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
    - [x] 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
    - [x] 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요
- [ ] 두 페이지의 UI는 동일해도 무방
- **Assignment 1**
  - [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현
    - [x] 이메일 조건: `@` 포함
    - [x] 비밀번호 조건: 8자 이상
    - [x] 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위를 지양해주세요)
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- **Assignment 2**
  - [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동
- **Assignment 3**
  - [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
        → 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
    - [x] 응답받은 JWT는 로컬 스토리지에 저장
- **Assignment 4**
  - [x] 로그인 여부에 따른 리다이렉트 처리를 구현
    - [x] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면
          → `/todo` 경로로 리다이렉트
    - [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면
          → `/signin` 경로로 리다이렉트

### **2. TO DO LIST**

- **Assignment 5**
  - [x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
  - [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
  - [x] TODO는 `<li>` tag를 이용해 감싸주세요
- **Assignment 6**
  - [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
    - [x] TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여
    - [x] TODO 추가 button에는 `data-testid="new-todo-add-button"`
           속성을 부여
  - [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
- **Assignment 7**
  - [x] TODO의 체크박스를 통해 완료 여부를 수정
- **Assignment 8**
  - [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
    - [x] 수정 버튼에는 `data-testid="modify-button"` 속성을 부여
    - [x] 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여
- **Assignment 9**
  - [x] 투두 리스트의 삭제 기능을 구현
    - [x] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제
- **Assignment 10**
  - [x] 투두 리스트의 수정 기능을 구현
    - [x] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
    - [x] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
    - [x] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
      - [x] 수정 input창에는 `data-testid="modify-input"` 속성을 부여
    - [x] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시
      - [x] 제출버튼에는 `data-testid="submit-button"` 속성을 부여
      - [x] 취소버튼에는 `data-testid="cancel-button"` 속성을 부여
    - [x] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트
    - [x] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화

<br/>

---

## 설치 패키지 및 개발 환경

- `create-react-app` : 리액트 쉽게 사용
- `typescript` : 타입으로 보호되는 안전한 코딩
- `react-router-dom@6.4` : 싱글 페이지 어플리케이션에서 라우트 별로 페이지를 나눠서 관리
- `styled-components` : 컴포넌트 별 스타일 설정
  - `npm i --save-dev @types/styled-components` : 타입 스크립트 환경에서 `styled-components` 사용
- `react-hook-form` : 리액트환경에서 Form UI 쉽게 관리
- `axios` : API Fetch 작업 편리하게 하기
- `recoil` : atom 단위 전역 상태관리
- `gh-pages` : 배포

<br/>

---

## 프로젝트 트리 구조

src

- index.tsx
- react-app-env.d.ts
- apis
  - auth.ts
  - todo.ts
- assets
  - styles
    - GlobalStyle.tsx
    - styled.d.ts
    - theme.ts
- atoms
  - atoms.ts
- components
  - App.tsx
  - layouts
    - HeaderContainer.tsx
    - HeaderPresentational.tsx
  - pages
    - auths
      - SignInContainer.tsx
      - SignInPresentational.tsx
      - SignUpContainer.tsx
      - SignUpPresentational.tsx
    - todos
      - TodoListContainer.tsx
      - TodoListPresentational.tsx
  - todos
    - CreateTodoContainer.tsx
    - CreateTodoPresentational.tsx
    - TodoItemContainer.tsx
    - TodoItemPresentational.tsx
- hooks
  - auth
    - CheckAccess.tsx
- router
  - ReturnComponentByAccess.tsx
  - Router.tsx
- types
  - apiTypes.ts
  - atomsTypes.ts
  - authComponentTypes.ts
  - todoComponentTypes.ts
- utils
  - regexp.ts
  - strings.ts

### 폴더를 구분한 기준

- container-presenter pattern 을 기본으로 컴포넌트를 분류 하였습니다.
  - `styled-components` 를 사용하여 컴포넌트 별로 CSS를 관리 하였고,
  - 공통 Style 은 따로 `assets` 폴더에 분리 하였습니다.

<br/>

---

## 과제 진행 시 주안점

- 요건 사항에 정확하게 맞는 구현을 하려고 노력 하였습니다.
- 협업 등을 위하여 클린 코드를 지향 하였습니다.
  - 변수명, 함수명 등 네이밍을 명확하게 하기 위하여 노력 하였습니다.
  - 일관된 트리구조를 만드려고 노력하였으며, 파일 구조 또한 로직과 뷰를 분리 하였습니다.
    - 복잡하지 않은 프로젝트였기 때문에, 응집도를 높여서 불필요한 파일 분류는 피했습니다.
    - 같은 이유로 추상화도 필요한 만큼만 하였습니다.
- 화려하지는 않더라도 최소한 불편하지 않을 정도의 가독성 있는 UI를 지향하였습니다.
- 작업 과정을 체계적으로 관리하고 업무 소통을 위하여, Notion에 작업 과정을 기록 하였습니다.
  - 이에 따라서 Git 커밋을 세부 과제별로 나눴으며,
  - 조금 더 충실한 README.md 파일 작성에 신경을 썼습니다.

<br/>

---

## 한계점 및 개선 사항

- 로그인 상태에 따른 URL 분기를 렌더링 마감 시점에서 한다면, 인유저 페이지를 먼저 제공 한 다음 리다이렉트 하는 개념이기 때문에 보안상 적절하지 않았습니다.
  1. `"/"` 경로의 `App.tsx` 컴포넌트에서 1차로 로컬스토리지의 access_token을 확인하여, 해당하는 라우트로 리다이렉트 했습니다.
  2. **To do**페이지의 경우 회원 전용 페이지이기 때문에, **Router 단위**에서 토큰 여부에 따라 다른 컴포넌트를 랜더링 하는 컴포넌트 자체를 랜더링 하여 보호 하였습니다.
- 응답 받은 `access_token` 을 사용해서 재차 인증하는 방법?
  1.  해당 과제에서 `access_token` 을 다시 대입하여 재인증 하는 API는 제공 받지 않았습니다.
  2.  상태로 관리한다면, 어차피 새로고침 시 초기화 되기 때문에 로컬 스토리지로 관리 하여야 힙니다.
  3.  때문에 화면 랜더링을 위해서 현재 로그인 상태 정도만 관리 하였습니다.
- gh-pages로 배포 한다면 SPA를 지원하지 않는다.
  - github.io/TwitterClone/my-page 에서 새로고침을 할 때 인식하지 못하고 모두 404 page 로 뜨게 되는데 따라서 404.html을 만들어서 해당 URL을 쿼리 스트링으로 변환하고 다시 원래의 주소로 변환하는 방법이 있습니다. (MIT license 의 오픈 소스)
- 오류 상황이나, 로딩 중 일 때 조금 더 디테일 한 피드백을 제공하고 싶습니다.
