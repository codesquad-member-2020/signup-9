const checkUserId = (userId) => {
    const idCheck =  /^[a-z0-9-_]{5,20}$/;
    if(userId==="") return "필수 정보입니다.";
    if (!idCheck.test(userId)) return "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";

    return "사용 가능한 아이디입니다.";
}

const checkPassword = (password) => {
    return;
}

const checkPasswordReconfirm = (password, reconfirmPassword) => {
    return;
}

const checkName = (name) => {
    return;
}

const checkBirthday = (year, month, day) => {
    return;
}

const checkGender = (gender) => {
    return;
}

const checkEmail = (email) => {
    return;
}

const checkPhone = (phone) => {
    return;
}

const checkFavorite = (favorites) => {
    return;
}

const checkAgreement = (checked) => {
    return
}

export default {checkUserId, checkPassword, checkPasswordReconfirm,
                checkName, checkBirthday, checkGender,
                checkEmail, checkPhone, checkFavorite, checkAgreement};
