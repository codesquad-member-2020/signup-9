# signup-9
회원가입 프로젝트 - 9팀

## 9팀 그라운드 룰 
### 온라인 모임 일시 및 장소 
- 월 ~ 금 오전 10:00 행아웃 출근! 
- 지각 시 2000원.

### 커밋 메세지 형식 
- [FEAT]: 개선하거나 신기능 추가
- [BUG]: 버그 수정
- [DOCUMENTATION]: 문서화 관련된 작업
- [TEST]: 새로운 유닛테스트를 추가하거나 기존 테스트를 수정
- [BUILD]: 빌드 프로세스 관련 코드 혹은 스크립트를 수정
- [REFACTOR]: 코드를 정리하거나 리팩토링한 작업

### 기능 별 JSON 형식 
- 중복 userId 확인 : 
```
Request : { "userId" : "guswns1659"}
Response : { "userId" : "guswns1659", "vaildation" : "true"}
```

- 중복 email 확인 : 
```
Request : { "email" : "guswns1659@naver.com"}
Response : { "email" : "guswns1659@naver.com", "vaildation" : "true"}
```

- Phone number : 
```
Request : { "phoneNumber" : "01012341234" }
Response : { "phoneNumber" : "01012341234", "vaildation" : "true" } 
```

- **(추후논의)로그인** : 
```
Request : { "userId" : "guswns1659", "password" : "1234" }
Response : 로그인 성공 시 main.html / 로그인 실패 시 { "userId" : "guswns1659", "vaildation" : "false" }
```

- **(추후논의)회원가입** : 

```
Request : 
{ "userId" : "guswns1659",
  "password" : "1234",
  "Gender" : "0"
  "BirthDate" : "1970-09-10"
   ....., 
  "favorite" : ['관심사1', '관심사2', '관심사3']}

Response : main.html
```

### URL 
- 중복 ID 확인 : POST 37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/user-id-vaildation
- 중복 EMAIL 확인 : POST 37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/email-vaildation
- 중복 핸드폰 번호 확인 : POST 37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/phone-number-vaildation
- 가입하기 : POST 37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/user-registration
- 로그인 : POST 37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/login
