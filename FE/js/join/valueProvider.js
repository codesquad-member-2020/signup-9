const getElementValue = (elementId) => {
    if (elementId === "yy" || 
        elementId === "mm" ||
        elementId === "dd") {
            return {YEAR: document.getElementById("yy").value,
                    MONTH: document.getElementById("mm").value,
                    DAY: document.getElementById("dd").value};
    }
    else if (elementId === "favorite") {
        return document.getElementById(elementId).parentElement.querySelectorAll(".tag");
    }
    else if (elementId === "agreement") {
        return document.getElementById(elementId).checked;
    }
    else if (elementId === "pswd2") {
        return {PASSWORD: document.getElementById("pswd1").value, 
                PASSWORD_RECONFIRM: document.getElementById(elementId).value};
    }
    else {
        return document.getElementById(elementId).value;
    }
}

export {getElementValue};