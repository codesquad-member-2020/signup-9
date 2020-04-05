import {getElementValue} from "./valueProvider.js"
import {focusoutEventHandler} from "./focusOutEventHandler.js"
import {clickEventHandler} from "./clickEventHandler.js"
import {inputEventHandler} from "./inputEventHandler.js"
import {appendEvent} from "../common/eventListenerAppender.js";

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('join_form');
    appendEvent(rootElement, focusoutEventHandler, getElementValue, 'focusout');
    appendEvent(rootElement, clickEventHandler, getElementValue, 'click');
    appendEvent(rootElement, inputEventHandler, getElementValue, 'input');
});