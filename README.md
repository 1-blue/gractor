# 유동인구 관리 서비스
+ ✏️ `Gractor` 과제
+ ⏱️ 프로젝트 기간: `2023/08/07 ~ 2023/08/09`

# 🎩 기술 스택

## 📤 FrontEnd

| TypeScript | React.js | Vite | TailwindCss | React-Query | React-Hook-Form |
| :---: | :---: | :---: | :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/react/#61DAFB" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/vite/#646CFF" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/tailwindcss/#06B6D4" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reactquery/#FF4154" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reacthookform/#EC5990" alt="icon" width="75" height="75" /></div> |

## 📥 BackEnd

| TypeScript | Nest.js | Prisma |
| :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/nestjs/#E0234E" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/prisma/#2D3748" alt="icon" width="75" height="75" /></div> |

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

# 📥 백엔드 구현 체크리스트
## 🗃️ 데이터베이스 구성
- [x] 제한 없음 ( VM에 Mysql 설치 및 사용 )

## 🛣️ 라우트 구성
- [x] Restful
- [x] URI 제한 없음

## ✏️ 테스트 코드
- [x] 각 라우팅을 테스트할 수 있는 코드를 "curl" 명령으로 작성 ( `postman`을 통해서 작성함 )

## 🧮 유동인구 CRUD
### 0️⃣ 생성
```curl
curl --location 'http://test.gractor.com:27801/floating-population' \
--header 'Content-Type: application/json' \
--data '{
    "name": "(주) 그렉터",
    "amount": 12000,
    "date": "2023-08-09T17:00",
    "coords": {
        "latitude": 37.5114116206258,
        "longitude": 127.079687718424
    }
}'
```

### 1️⃣ 모두 조회 ( 같은 위치끼리 그룹화 )
```curl
curl --location 'http://test.gractor.com:27801/floating-population/all'
```

### 2️⃣ 단일 조회
```curl
curl --location 'http://test.gractor.com:27801/floating-population/1'
```

### 3️⃣ 다중 조회 ( 페이지네이션 )
```curl
curl --location 'http://test.gractor.com:27801/floating-population?from=1&size=15'
```

### 4️⃣ 수정
```curl
curl --location --request PATCH 'http://test.gractor.com:27801/floating-population/76' \
--header 'Content-Type: application/json' \
--data '{
    "name": "(주) 그렉터",
    "amount": 26000,
    "date": "2023-08-09T17:00",
    "coords": {
        "latitude": 37.5114116206258,
        "longitude": 127.079687718424
    }
}'
```

### 5️⃣ 삭제
```curl
curl --location --request DELETE 'http://test.gractor.com:27801/floating-population/76'
```

## 🫠 추가 요구 사항
### 0️⃣ Docker
- [ ] UI 서버를 가상화한다.
- [ ] API 서버를 가상화한다.
- [ ] UI 서버 가상화 이미지를 컨테이닝하여 호스트 8000 포트와 연결한다.
- [ ] API 서버 가상화 이미지를 컨테이닝하여 호스트 8000 포트와 연결한다.

### 1️⃣ Nginx
- [ ] FE 서버 ( xxx.com ), BE 서버 ( api.xxx.com ) 도메인 구성
- [ ] FE/BE 서버를 같은 도메인으로 접속하되 Location에  따라 분리 접속할 수 있도록 구성
- [ ] TLS ( HTTPS ) 적용