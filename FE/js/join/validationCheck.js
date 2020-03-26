import WARNING_MESSAGE from "./warningMessage.js"

const checkUserId = (userId) => {
    const idCheck =  /^[a-z0-9-_]{5,20}$/;
    if(userId==="") return "필수 정보입니다.";
    if (!idCheck.test(userId)) return "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";

    return "사용 가능한 아이디입니다.";
}

const checkPassword = (password) => {
    const pswdLengthCheck =  /.{8,16}$/;
    const pswdUpperCheck = /^(?=.*[A-Z])/;
    const pswdNumberCheck = /^(?=.*[0-9])/;
    const pswdSpecialCheck = /^(?=.*[!@#$%^*+=-])/;

    if(password==="") return "필수 정보입니다.";
    if(!pswdLengthCheck.test(password)) return "8자 이상 16자 이하로 입력해주세요.";
    if(!pswdUpperCheck.test(password)) return "영문 대문자를 최소 1자 이상 포함해주세요.";
    if(!pswdNumberCheck.test(password)) return "숫자를 최소 1자 이상 포함해주세요.";
    if(!pswdSpecialCheck.test(password)) return "특수문자를 최소 1자 이상 포함해주세요.";

    return "안전한 비밀번호입니다."
}

const checkPasswordReconfirm = (password, reconfirmPassword) => {
    if(reconfirmPassword==="") return "필수 정보입니다.";
    if(password===reconfirmPassword) return "비밀번호가 일치합니다.";
    return "비밀번호가 일치하지 않습니다.";
}

const checkName = (name) => {
    if(name==="") return "필수 정보입니다.";
    return "";
}

const checkBirthday = (year, month, day) => {
    return;
}

const checkGender = (gender) => {
    let resultValue = false;
    let messageValue = "";

    if (typeof gender == 'undefined' || !gender || gender.length === 0 || gender === "" || !/[^\s]/.test(gender) || /^\s*$/.test(gender) || gender.replace(/\s/g,"") === "")
    {
        resultValue = false;
        messageValue = WARNING_MESSAGE.GENDER.NOT_SELECTED;
    }
    else
    {
        resultValue = true;
    }

    return {validation: resultValue, message: messageValue};
}

const checkEmail = (email) => {
    let resultValue = false;
    let messageValue = "";

    if (typeof email == 'undefined' || !email || email.length === 0 || email === "" || !/[^\s]/.test(email) || /^\s*$/.test(email) || email.replace(/\s/g,"") === "") {
        resultValue = false;
        messageValue = WARNING_MESSAGE.EMAIL.NOT_ENTERED;
    }
    else if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
        resultValue = true;
    }
    else {
        resultValue = false;
        messageValue = WARNING_MESSAGE.EMAIL.WRONG_EXPRESSION;
    }

    return {validation: resultValue, message: messageValue};
}

const checkPhone = (phone) => {
    let resultValue = false;
    let messageValue = "";

    if (typeof phone == 'undefined' || !phone || phone.length === 0 || phone === "" || !/[^\s]/.test(phone) || /^\s*$/.test(phone) || phone.replace(/\s/g,"") === "") {
        resultValue = false;
        messageValue = WARNING_MESSAGE.PHONE.NOT_ENTERED;
    }
    else if (/^010\d{3,4}\d{4}$/.test(phone)) {
        resultValue = true;
    }
    else {
        resultValue = false;
        messageValue = WARNING_MESSAGE.PHONE.WRONG_EXPRESSION;
    }

    return {validation: resultValue, message: messageValue};
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
