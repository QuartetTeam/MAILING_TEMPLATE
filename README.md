## 자격저격의 메일링 서비스 템플릿

### 1. 프로젝트 정보

- 기술스택 : React, TypeScript, Vite
- 나머지는 추후 결정 예정

### 2. 프로젝트 설명

- 자격저격의 메일링 서비스 구독 시 사용할 템플릿입니다.

### 3. 프로젝트 폴더 구조

```
/src
├── assets
│ └── styles // 컴포넌트별, 공통 스타일 코드
├── components
│ ├── ExamDay.tsx // 시험일 알림 템플릿
│ ├── ReceiptDay.tsx // 접수기간 시작 알림 템플릿
│ └── index.ts // 프로젝트 진입점
├── App.tsx // 기본 페이지 (템플릿 컴포넌트 표시 여부)
└── main.tsx  // 애플리케이션 최초 실행 모듈
```

### 4. 프로젝트 실행

```
npm install
```

```
npm run dev
```

## Github 형상 관리

### 1. 커밋 메시지 규칙

```
<타입> 리스트
✨ Feat             : 새로운 기능 추가
🚧 Progress         : 작업 진행 중인 코드
🎯 Fix              : 코드 수정
🐛 Bug              : 버그 수정
🎨 Design           : CSS 등 사용자 UI 디자인 변경
💄 Style            : 코드 포맷 변경, 세미 콜론 누락 (비즈니스 로직 변경 X)
♻️ Refactor         : 프로덕션 코드 리팩토링
💡 Comment          : 필요한 주석 추가 및 변경
📋 Docs             : 문서 수정 (문서 추가, 수정, 삭제, README)
✅ Test             : 테스트 추가, 테스트 리팩토링 (비즈니스 로직 변경 X)
🔖 Chore            : 빌드 태스크 업데이트, 패키지 매니저 설정할 경우 (비즈니스 로직 변경 X)
📝 Rename           : 파일 혹은 폴더명을 수정, 옮기는 작업만
🔥 Remove           : 사용하지 않는 파일 혹은 폴더를 삭제하는 경우
📌 Init             : 초기 생성
🚑 !BREAKING CHANGE : 커다란 API 혹은 로직 변경
🔔 Merge Request    : Merge Request 생성(Branch 병합, Conflict 해결 등)
```

### 2. PR 기록 남기기

- 코드 품질을 검증하기 위해 feature 브랜치에서 단위 테스트 완료 후 dev 브랜치로 올릴떄는 Pull Request합니다.
