const checkUserId = (userId) => {
    return;
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
    let resultValue = false;
    let messageValue = "";

    if (typeof gender == 'undefined' || !gender || gender.length === 0 || gender === "" || !/[^\s]/.test(gender) || /^\s*$/.test(gender) || gender.replace(/\s/g,"") === "")
    {
        resultValue = false;
        messageValue = "성별을 선택해주세요.";
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
        messageValue = "이메일 주소를 입력해주세요."
    }
    else if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
        resultValue = true;
    }
    else {
        resultValue = false;
        messageValue = "이메일 주소를 다시 확인해주세요."
    }

    return {validation: resultValue, message: messageValue};
}

const checkPhone = (phone) => {
    let resultValue = false;
    let messageValue = "";

    if (typeof phone == 'undefined' || !phone || phone.length === 0 || phone === "" || !/[^\s]/.test(phone) || /^\s*$/.test(phone) || phone.replace(/\s/g,"") === "") {
        resultValue = false;
        messageValue = "휴대폰 번호를 입력해주세요."
    }
    else if (/^010\d{3,4}\d{4}$/.test(phone)) {
        resultValue = true;
    }
    else {
        resultValue = false;
        messageValue = "형식에 맞지 않은 번호입니다."
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
