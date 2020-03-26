const getElementValue = (elementId) => {
    let result = null;

    switch(elementId) {
        case "yy":
        case "mm":
        case "dd": {
            result = {YEAR: document.getElementById("yy").value,
                      MONTH: document.getElementById("mm").value,
                      DAY: document.getElementById("dd").value
            };
            break;
        }
        case "favorite": {
            result = document.getElementById(elementId).parentElement.querySelectorAll(".tag");
            break;
        }
        case "agreement": {
            result = document.getElementById(elementId).parentElement.querySelectorAll(".tag");
            break;
        }
        case "pswd2": {
            result = {PASSWORD: document.getElementById("pswd1").value, 
                      PASSWORD_RECONFIRM: document.getElementById(elementId).value};
            break;
        }
        default: {
            result = document.getElementById(elementId).value;
            break;
        }
    }

    return result;
}

export {getElementValue};