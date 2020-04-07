import validationCheck from "./validationCheck.js";
import {fetchRequest} from "../common/fetchRequest.js";
import {joinValueStatus} from "./joinValueStatus.js";
import URL from "../common/url.js";
import WARNING_MESSAGE from "./warningMessage.js";
import {KEYVALUE} from "../common/jsonKeyValue.js";

const userIdHandler = (event, userId) => {
    let result = validationCheck.checkUserId(userId);
    const idMsg = document.getElementById("idMsg");

    idMsg.innerHTML = result.message;

    if (result.validation === false) {
        return;
    }

    const data = {"userId": userId}

    fetchRequest(URL.SERVICE_URL.ID, data)
        .then(response => {
            let responseResult = false;

            if (response.status === 204)
                responseResult = true;

            if (responseResult === false) result.message = "이미 사용중인 아이디입니다.";

            idMsg.innerHTML = result.message;

            (result.message !== "이미 사용중인 아이디입니다.") ? changeClass(idMsg, "ok_next_box") : changeClass(idMsg, "error_next_box");
            (result.message !== "이미 사용중인 아이디입니다.") ? joinValueStatus.callChangeValid(event.target.id, true) : joinValueStatus.callChangeValid(event.target.id, false);
        })
}

const passwordHandler = (event, password) => {
    const result = validationCheck.checkPassword(password);
    const pswd1Msg = document.getElementById("pswd1Msg");

    pswd1Msg.innerHTML = result;

    (result === "안전한 비밀번호입니다.") ? changeClass(pswd1Msg, "ok_next_box") : changeClass(pswd1Msg, "error_next_box");
    (result === "안전한 비밀번호입니다.") ? joinValueStatus.callChangeValid(event.target.id, true) : joinValueStatus.callChangeValid(event.target.id, false);
}

const passwordReconfirmHandler = (event, passwords) => {
    const result = validationCheck.checkPasswordReconfirm(passwords.PASSWORD, passwords.PASSWORD_RECONFIRM);
    const pswd2Msg = document.getElementById("pswd2Msg");

    pswd2Msg.innerHTML = result;
    (result === "비밀번호가 일치합니다.") ? changeClass(pswd2Msg, "ok_next_box") : changeClass(pswd2Msg, "error_next_box");
    (result === "비밀번호가 일치합니다.") ? joinValueStatus.callChangeValid(event.target.id, true) : joinValueStatus.callChangeValid(event.target.id, false);
}

const nameHandler = (event, name) => {
    const result = validationCheck.checkName(name);
    const nameMsg = document.getElementById("nameMsg");

    nameMsg.innerHTML = result;
    (result === "") ? joinValueStatus.callChangeValid(event.target.id, true) : joinValueStatus.callChangeValid(event.target.id, false);
}

const birthdayHandler = (event, birthDay) => {
    const result = validationCheck.checkBirthday(birthDay.YEAR, birthDay.MONTH, birthDay.DAY);
    const birthdayMsg = document.getElementById("birthdayMsg");

    birthdayMsg.innerHTML = result;
    (result === "") ? joinValueStatus.callChangeValid(event.target.id, true) : joinValueStatus.callChangeValid(event.target.id, false);
}

const genderHandler = (event, gender) => {
    const result = validationCheck.checkGender(gender);

    handleResult(event, result);
}

const emailHandler = (event, email) => {
    let result = validationCheck.checkEmail(email);

    handleResult(event, result);

    if (result.validation === false)
        return

    const data = {[KEYVALUE.EMAIL]: email};

    fetchRequest(URL.SERVICE_URL.EMAIL, data)
        .then(response => {
            console.log("awefwefwe");
            let responseResult = false;

            if (response.status === 204)
                responseResult = true;


            result.validation = responseResult;

            if (result.validation === false) {
                result.message = WARNING_MESSAGE.EMAIL.ALREADY_JOINED;
            }

            handleResult(event, result);
        })
}

const phoneHandler = (event, phone) => {
    const result = validationCheck.checkPhone(phone);

    handleResult(event, result);

    if (result.validation === false)
        return

    const data = {[KEYVALUE.PHONE]: phone};

    fetchRequest(URL.SERVICE_URL.PHONE, data)
        .then(response => {
            console.log("awefwefwe");
            let responseResult = false;

            if (response.status === 204)
                responseResult = true;

            result.validation = responseResult;

            if (result.validation === false) {
                result.message = WARNING_MESSAGE.PHONE.ALREADY_JOINED;
            }

            handleResult(event, result);
        })
}

const favoriteHandler = (event, favorites) => {
    event.target.value = '';
    const result = validationCheck.checkFavorite(favorites);

    handleResult(event, result);
}

const handleResult = (event, result) => {
    const warningMsgModifier = "Msg";
    const warningMsgElement = event.target.id + warningMsgModifier;
    const targetElement = document.getElementById(warningMsgElement);

    targetElement.innerHTML = result.message;
    joinValueStatus.callChangeValid(event.target.id, result.validation);
}

const focusoutEventHandler = Object.freeze({
    "id": userIdHandler,
    "pswd1": passwordHandler,
    "pswd2": passwordReconfirmHandler,
    "name": nameHandler,
    "yy": birthdayHandler,
    "mm": birthdayHandler,
    "dd": birthdayHandler,
    "gender": genderHandler,
    "email": emailHandler,
    "phoneNo": phoneHandler,
    "favorite": favoriteHandler,
});

function changeClass(element, newClassName) {
    const beforeClassName = element.className;
    element.classList.remove(beforeClassName);
    element.classList.add(newClassName);
}

export {focusoutEventHandler};