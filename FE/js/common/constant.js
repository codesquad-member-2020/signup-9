const ELEMENT_ID = Object.freeze({
    ID: "id",
    PASSWORD: "pswd1",
    PASSWORD_RECONFIRM: "pswd2",
    NAME: "name",
    YEAR: "yy",
    MONTH: "mm",
    DAY: "dd",
    GENDER: "gender",
    EMAIL: "email",
    PHONE: "phoneNo",
    FAVORITE: "favorite",
    AGREE: "agreement"
});

const ELEMENT_CLASS = Object.freeze({
    FAVORITE_CONTENT: ".favoriteContent",
});

const ERR_MSG_ELEMENT_ID = Object.freeze({
    "id": "idMsg",
    "pswd1": "pswd1Msg",
    "pswd2": "pswd2Msg",
    "name": "nameMsg",
    "yy": "birthdayMsg",
    "mm": "birthdayMsg",
    "dd": "birthdayMsg",
    "gender": "genderMsg",
    "email": "emailMsg",
    "phoneNo": "phoneNoMsg",
    "favorite": "favoriteMsg",
    "agree": "agreementMsg"
});

export {ELEMENT_ID, ELEMENT_CLASS, ERR_MSG_ELEMENT_ID};