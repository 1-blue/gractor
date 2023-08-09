# 🎩 기술 스택

| TypeScript | Nest.js | Prisma |
| :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/nestjs/#E0234E" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/prisma/#2D3748" alt="icon" width="75" height="75" /></div> |

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