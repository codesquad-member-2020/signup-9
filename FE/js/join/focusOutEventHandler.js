import validationCheck from "./validationCheck.js";
import {fetchRequest} from "../common/fetchRequest.js";
import {joinValueStatus} from "./joinValueStatus.js";
import URL from "../common/url.js";
import WARNING_MESSAGE from "./warningMessage.js";
import {KEYVALUE} from "../common/jsonKeyValue.js";

const userIdHandler = (event, userId) => {
    const result = validationCheck.checkUserId(userId);
    const idMsg = document.getElementById("idMsg");
    
    idMsg.innerHTML = result;
  
    (result === "사용 가능한 아이디입니다.") ? changeClass(idMsg, "ok_next_box") : changeClass(idMsg, "error_next_box");

    //document.getElementById("idMsg").innerHTML= result;

    // server 로 유효성 검사 요청
    // const data = {userId: "test"}

    // fetchRequest("http://37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/phone-number-vaildation", data)
    // .then(response => response.json())
    // .then(suggestionData => {
    //     console.log(suggestionData);
    // });
}

const passwordHandler = (event, password) => {
    const result = validationCheck.checkPassword(password);
    const pswd1Msg = document.getElementById("pswd1Msg");

    pswd1Msg.innerHTML = result;

    (result === "안전한 비밀번호입니다.") ? changeClass(pswd1Msg, "ok_next_box") : changeClass(pswd1Msg, "error_next_box");

}

const passwordReconfirmHandler = (event, passwords) => {
    const result = validationCheck.checkPasswordReconfirm(passwords.PASSWORD, passwords.PASSWORD_RECONFIRM);
    pswd2Msg.innerHTML = result;
    (result === "비밀번호가 일치합니다.") ? changeClass(pswd2Msg, "ok_next_box") : changeClass(pswd2Msg, "error_next_box");  
}

const nameHandler = (event, name) => {
    console.log("nameHandler");
    const result = validationCheck.checkName(name);
}

const birthdayHandler = (event, birthDay) => {
    console.log("birthdayHandler");
    const result = validationCheck.checkBirthday(birthDay.YEAR, birthDay.MONTH, birthDay.DAY);
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
        .then(response => response.json())
        .then(response => {
            console.log(response);
            result.validation = response.validation;

            if (response.validation === false) {
                result.message = WARNING_MESSAGE.EMAIL.ALREADY_JOINED;
            }

            handleResult(event, result);
        });
}

const phoneHandler = (event, phone) => {
    const result = validationCheck.checkPhone(phone);

    handleResult(event, result);

    if (result.validation === false)
        return

    const data = {[KEYVALUE.PHONE]: phone};

    fetchRequest(URL.SERVICE_URL.PHONE, data)
        .then(response => response.json())
        .then(response => {
            result.validation = response.validation;

            if (response.validation === false) {
                result.message = WARNING_MESSAGE.PHONE.ALREADY_JOINED;
            }

            handleResult(event, result);
        });
}

const favoriteHandler = (event, favorites) => {
    console.log("favoriteHandler");
    const result = validationCheck.checkFavorite(favorites);
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