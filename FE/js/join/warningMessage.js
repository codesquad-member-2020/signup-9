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

const FAVORITE = Object.freeze({
    LACK_OF_COUNT: "3개 이상의 관심사를 입력하세요.",
});

const JOIN = Object.freeze({
    ID: "올바른 형식의 중복되지 않은 ID 를 입력해주세요.",
    PASSWORD: "올바른 형식의 비밀번호를 입력해주세요.",
    PASSWORD_RECONFIRM: "비밀번호 재확인을 확인해주세요.",
    NAME: "이름을 입력해주세요.",
    BIRTHDAY: "15세 이상~99세 이하의 올바른 생년월일을 확인해주세요.",
    GENDER: "성별을 입력해주세요.",
    EMAIL: "올바른 형식의 중복되지 않은 E-MAIL 을 입력해주세요.",
    PHONE: "올바른 형식의 중복되지 않은 휴대전화 번호를 입력해주세요.",
    FAVORITE: "관심사를 3개 이상 입력해주세요.",
    AGREEMENT: "약관에 동의해야 가입이 진행됩니다."
});

export default {GENDER, EMAIL, PHONE, FAVORITE, JOIN};