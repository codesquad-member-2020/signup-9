import {ELEMENT_ID} from "../common/constant.js"

const joinValueStatus = (function() 
{
    let isUserIdValid = false;
    let isPasswordValid = false;
    let isPasswordReconfirmValid = false;
    let isNameValid = false;
    let isBirthdayValid = false;
    let isGenderValid = false;
    let isEmailValid = false;
    let isPhoneValid = false;
    let isFavoriteValid = false;
    let isAgreementValid = false;

    const changeValid = function(eventId, val) {
        switch(eventId) {
            case ELEMENT_ID.ID: {
                changeUserIdValid(val);
                break;
            }
            case ELEMENT_ID.PASSWORD: {
                changePasswordValid(val);
                break;
            }
            case ELEMENT_ID.PASSWORD_RECONFIRM: {
                changePasswordReconfirmValid(val);
                break;
            }
            case ELEMENT_ID.NAME: {
                changeNameValid(val);
                break;
            }
            case ELEMENT_ID.YEAR:
            case ELEMENT_ID.MONTH:
            case ELEMENT_ID.DAY: {
                changeBirthdayValid(val);
                break;
            }
            case ELEMENT_ID.GENDER: {
                changeGenderValid(val);
                break;
            }
            case ELEMENT_ID.EMAIL: {
                changeEmailValid(val);
                break;
            }
            case ELEMENT_ID.PHONE: {
                changePhoneValid(val);
                break;
            }
            case ELEMENT_ID.FAVORITE: {
                changeFavoriteValid(val);
                break;
            }
            case ELEMENT_ID.AGREE: {
                changeAgreementValid(val);
                break;
            }
        }
    }

    const changeUserIdValid = function(userIdValid) {
        isUserIdValid = userIdValid;
    }

    const changePasswordValid = function(password) {
        isPasswordValid = password;
    }

    const changePasswordReconfirmValid = function(passwordReconfirmValid) {
        isPasswordReconfirmValid = passwordReconfirmValid;
    }

    const changeNameValid = function(nameValid) {
        isNameValid = nameValid;
    }

    const changeBirthdayValid = function(birthdayValid) {
        isBirthdayValid = birthdayValid;
    }

    const changeGenderValid = function(genderValid) {
        isGenderValid = genderValid;
    }

    const changeEmailValid = function(emailValid) {
        isEmailValid = emailValid;
    }

    const changePhoneValid = function(phoneValid) {
        isPhoneValid = phoneValid;
    }

    const changeFavoriteValid = function(favoriteValid) {
        isFavoriteValid = favoriteValid;
    }

    const changeAgreementValid = function(agreementValid) {
        isAgreementValid = agreementValid;
    }

    return { 
        callChangeValid: function(event, val) {
            console.log(event, val)
            changeValid(event, val);
        },
        userIdValid: function() {
            return isUserIdValid;
        },
        passwordValid: function() {
            return isPasswordValid;
        },
        passwordReconfirmValid: function() {
            return isPasswordReconfirmValid;
        },
        nameValid: function() {
            return isNameValid;
        },
        birthdayValid: function() {
            return isBirthdayValid;
        },
        genderValid: function() {
            return isGenderValid;
        },
        emailValid: function() {
            return isEmailValid;
        },
        phoneValid: function() {
            return isPhoneValid;
        },
        favoriteValid: function() {
            return isFavoriteValid;
        },
        agreementValid: function() {
            return isAgreementValid;
        },
    };
})(); 

export {joinValueStatus};