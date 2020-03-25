const GENDER = Object.freeze({
    NOT_SELECTED: "성별을 선택해주세요."
});

const EMAIL = Object.freeze({
    NOT_ENTERED: "이메일 주소를 입력해주세요.",
    WRONG_EXPRESSION: "이메일 주소를 다시 확인해주세요.",
    ALREADY_JOINED: "중복된 이메일 주소입니다.",
});

const PHONE = Object.freeze({
    NOT_ENTERED: "휴대폰 번호를 입력해주세요.",
    WRONG_EXPRESSION: "형식에 맞지 않은 번호입니다.",
    ALREADY_JOINED: "중복된 이메일 주소입니다.",
});


export default {GENDER, EMAIL, PHONE};