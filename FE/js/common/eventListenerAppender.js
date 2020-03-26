const appendEvent = (target, eventHandlers, getElementValue, eventType) => {
    target.addEventListener(eventType, event => {
        if (eventHandlers[event.target.id] !== undefined) {
            eventHandlers[event.target.id](event, getElementValue(event.target.id));
        }
    });
}

export {appendEvent};
