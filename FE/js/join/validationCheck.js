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
