# 🎩 기술 스택

| TypeScript | React.js | Vite | TailwindCss | React-Query | React-Hook-Form |
| :---: | :---: | :---: | :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/react/#61DAFB" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/vite/#646CFF" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/tailwindcss/#06B6D4" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reactquery/#FF4154" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reacthookform/#EC5990" alt="icon" width="75" height="75" /></div> |

# 📤 프론트엔드 구현 체크리스트
## 👻 공통 로직
- [x] 레이아웃
- [x]  페이지 라우팅

## 📋 대시보드 페이지
### 0️⃣ 지도
- [x] 그렉터 지도 중앙
- [x] 마커 클릭 시 "위치 목록" 컴포넌트의 같은 항목 선택 상태로 변경
- [x] 마커 클릭 시 선택 상태로 변경 ( 선택 - 빨강 / 미선택 - 파랑 )

### 1️⃣ 총 유동인구 통계
- [x] 총 유동인구 통계 ( 평균 )

### 2️⃣ 위치 목록
- [x] 선택과 미선택 구분
- [x] 선택한 항목을 지도의 중앙으로 설정
- [x] 선택한 항목의 마커가 선택상태로 변경

### 3️⃣ 시간별 유동인구
- [x] "위치 목록" 컴포넌트의 선택된 항복에 맞는 시간별 통계 표시 ( 00시 ~ 23시 )

## 📊 유동인구현황 페이지
### 0️⃣ 데이터 테이블
- [x] 페이지네이션 ( 기본 1페이지 )
- [x] 열 ( 이름, 유동인구, 시간 )
- [x] 행 클릭 시 선택 상태
- [x] 선택한 행이 있으면 편집/삭제 버튼
- [x] 등록 버튼은 등록 페이지
- [x] 편집 버튼은 편집 페이지
- [x] 삭제 버튼은 삭제 대화창

### 1️⃣ 삭제 대화창
- [x] 삭제할 데이터에 대한 정보 표시
- [x] 뒷 화면은 가려짐
- [x] 취소/확인 버튼 및 기능

## 🗃️ 유동인구관리 페이지
- [x] 이름/위도/경도/유동인구/저장시간
- [x] 수정의 경우라면 기존 데이터 불러오기 + 시간 편집에 포커스
- [x] 취소 및 저장
