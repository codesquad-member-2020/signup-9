import validationCheck from "./validationCheck.js"
import {fetchRequest} from "../common/fetchRequest.js"
import {joinValueStatus} from "./joinValueStatus.js";
import URL from "../common/url.js";
import { KEYVALUE } from "../common/jsonKeyValue.js";
import { ELEMENT_ID, ELEMENT_CLASS } from "../common/constant.js";
import WARNING_MESSAGE from "./warningMessage.js";

const resetHandler = (event, value) => {
    console.log("resetHandler");

    const result = confirm("초기화 하시겠습니까?");

    if (result) {
    }
    else {
    }
}

const joinHandler = (event, value) => {
    const checkResult = checkValueAvailable();

    if (checkResult.resultValue === false) {
        alert(checkResult.messageValue)
        return;
    }

    const idValue = document.getElementById(ELEMENT_ID.ID).value;
    const passWordValue = document.getElementById(ELEMENT_ID.PASSWORD).value;
    const nameValue = document.getElementById(ELEMENT_ID.NAME).value;
    const genderValue = document.getElementById(ELEMENT_ID.GENDER).value;
    const yearValue = document.getElementById(ELEMENT_ID.YEAR).value;
    const monthValue = document.getElementById(ELEMENT_ID.MONTH).value;
    const dayValue = document.getElementById(ELEMENT_ID.DAY).value;
    const emailValue = document.getElementById(ELEMENT_ID.EMAIL).value;
    const phoneValue = document.getElementById(ELEMENT_ID.PHONE).value;
    const favorites = document.querySelectorAll(ELEMENT_CLASS.FAVORITE_CONTENT);
    const favoriteValue = []

    favorites.forEach(element => {
        favoriteValue.push(element.innerHTML)
    });

    const data = {
        [KEYVALUE.ID]: idValue,
        [KEYVALUE.PASSWORD]: passWordValue,
        [KEYVALUE.NAME]: nameValue,
        [KEYVALUE.GENDER]: genderValue,
        [KEYVALUE.BIRTHDAY]: yearValue + "-" + monthValue + '-' + dayValue,
        [KEYVALUE.EMAIL]: emailValue,
        [KEYVALUE.PHONE]: phoneValue,
        [KEYVALUE.FAVORITE]: favoriteValue
    };

    fetchRequest(URL.SERVICE_URL.JOIN, data)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        });
}

const agreementHandler = (event, checked) => {
    console.log("agreementHandler");
    const result = validationCheck.checkAgreement(checked);

    joinValueStatus.callChangeValid(event.target.id, checked);
}

const closeHandler = (event, favorites) => {
    let tagList = document.querySelectorAll(".tag");
    let findResult = false;

    const favoriteContainer = event.target.parentElement;

    Array.prototype.forEach.call(tagList, function(element, index) {
        if(element === event.target.parentElement) {
            favoriteContainer.parentElement.removeChild(element);
            findResult = true;

            return;
        }
    });

    tagList = document.querySelectorAll(".tag");

    const result = validationCheck.checkFavorite(tagList);
    const targetElement = document.getElementById("favoriteMsg");

    targetElement.innerHTML = result.message;
    joinValueStatus.callChangeValid("favorite", result.validation);
}

const clickEventHandler = Object.freeze({
    "btnReset": resetHandler,
    "btnJoin": joinHandler,
    "agreement": agreementHandler,
    "closeBtn": closeHandler
});

const checkValueAvailable = () => {
    if (joinValueStatus.userIdValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.ID};
    }
    else if (joinValueStatus.passwordValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.PASSWORD};
    }
    else if (joinValueStatus.passwordReconfirmValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.PASSWORD_RECONFIRM};
    }
    else if (joinValueStatus.nameValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.NAME};
    }
    else if (joinValueStatus.birthdayValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.BIRTHDAY};
    }
    else if (joinValueStatus.genderValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.GENDER};
    }
    else if (joinValueStatus.emailValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.EMAIL};
    }
    else if (joinValueStatus.phoneValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.PHONE};
    }
    else if (joinValueStatus.favoriteValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.FAVORITE};
    }
    else if (joinValueStatus.agreementValid() === false) {
        return {resultValue: false, messageValue: WARNING_MESSAGE.JOIN.AGREEMENT};
    }
}

export {clickEventHandler};