const appendFocusOutEvent = (target, eventHandlers, getElementValue) => {
    target.addEventListener('focusout', event => {
        if (eventHandlers[event.target.id] !== undefined) {
            eventHandlers[event.target.id](event, getElementValue(event.target.id));
        }
    });
}

const appendClickEvent = (target, eventHandlers, getElementValue) => {
    target.addEventListener('click', event => {
        if (eventHandlers[event.target.id] !== undefined) {
            eventHandlers[event.target.id](event, getElementValue(event.target.id));
        }
    });
}

export {appendFocusOutEvent, appendClickEvent};
