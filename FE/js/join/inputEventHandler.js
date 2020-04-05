import validationCheck from "./validationCheck.js"
import {fetchRequest} from "../common/fetchRequest.js"
import {joinValueStatus} from "./joinValueStatus.js";

const favoriteHandler = (event, favorites) => {
    const inputString = event.target.value;

    if (inputString.charAt(0) !== ',' && inputString.charAt(inputString.length-1) ===',') {
        const slicedString = inputString.slice(0, -1);

        const appendContent = `
        <div class="tag">
            <span class="favoriteContent">${slicedString}</span>
            <i class="material-icons" id="closeBtn">close</i>
        </div>
        `;

        event.target.insertAdjacentHTML('beforebegin', appendContent);
        event.target.value = ''
    }
    else if (inputString.charAt(0) === ',') {
        event.target.value = ''
    }
}

const agreementHandler = (event, checked) => {
    joinValueStatus.callChangeValid(event.target.id, checked);
}

const commonInputHander = (event) => {
    joinValueStatus.callChangeValid(event.target.id, false);
}

const inputEventHandler = Object.freeze({
    "favorite": favoriteHandler,
    "commonInputHandler": commonInputHander,
    "agreement": agreementHandler
});

export {inputEventHandler};