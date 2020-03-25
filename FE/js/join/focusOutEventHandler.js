import validationCheck from "./validationCheck.js"
import {fetchRequest} from "../common/fetchRequest.js"
import { joinValueStatus } from "./joinValueStatus.js";
import URL from "../common/url.js"
import WARNING_MESSAGE from "./warningMessage.js"

const userIdHandler = (event, userId) => {
    console.log("userIdHandler");
    const result = validationCheck.checkUserId(userId);

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
    console.log("passwordHandler");
    const result = validationCheck.checkPassword(password);
}

const passwordReconfirmHandler = (event, passwords) => {
    console.log("passwordReconfirmHandler");
    const result = validationCheck.checkPasswordReconfirm(passwords.PASSWORD, passwords.PASSWORD_RECONFIRM);
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
    console.log("genderHandler");
    
    const result = validationCheck.checkGender(gender);

    handleResult(event, result);
}

const emailHandler = (event, email) => {
    console.log("emailHandler");
    let result = validationCheck.checkEmail(email);

    handleResult(event, result);

    if (result.validation === false)
        return

    const data = { userId: email }

    fetchRequest(URL.MOCKUP_URL.EMAIL, data)
        .then(response => response.json())
        .then(response => {
            result.validation = response.validation;

            if (response.validation === false) {
                result.message = WARNING_MESSAGE.EMAIL.ALREADY_JOINED;
            }

            handleResult(event, result);
        });
}

const phoneHandler = (event, phone) => {
    console.log("phoneHandler");
    const result = validationCheck.checkPhone(phone);

    handleResult(event, result);

    if (result.validation === false)
        return

    const data = { phoneNumber: phone }

    fetchRequest(URL.MOCKUP_URL.PHONE, data)
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

export {focusoutEventHandler};