import validationCheck from "./validationCheck.js"
import {fetchRequest} from "./fetchRequest.js"

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

const clickEventHandler = Object.freeze({
    "btnReset": resetHandler,
    "btnJoin": joinHandler,
    "agreement": agreementHandler
});

export {clickEventHandler};