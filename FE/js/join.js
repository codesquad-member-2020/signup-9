import {getElementValue} from "./valueProvider.js"
import {focusoutEventHandler} from "./focusOutEventHandler.js"
import {clickEventHandler} from "./clickEventHandler.js"
import {appendFocusOutEvent, appendClickEvent} from "./eventListenerAppender.js";

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('join_form');
    appendFocusOutEvent(rootElement, focusoutEventHandler, getElementValue);
    appendClickEvent(rootElement, clickEventHandler, getElementValue);
});