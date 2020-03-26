import validationCheck from "./validationCheck.js"
import {fetchRequest} from "../common/fetchRequest.js"
import {joinValueStatus} from "./joinValueStatus.js";

const resetHandler = (event, value) => {
    console.log("resetHandler");

    const result = confirm("초기화 하시겠습니까?");

    if (result) {
    }
    else {
    }
}

const joinHandler = (event, value) => {
    console.log("joinHandler");

    alert("todo");
}

const agreementHandler = (event, checked) => {
    console.log("agreementHandler");
    const result = validationCheck.checkAgreement(checked);
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

export {clickEventHandler};