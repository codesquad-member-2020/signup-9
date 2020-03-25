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

    const changeUserValid = function(userIdValid) {
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
        callChangeUserValid: function (val) { 
            changeUserValid(val); 
        },
        callChangePasswordValid: function (val) {
            changePasswordValid(val);
        },
        callChangePasswordReconfirmValid: function (val) {
            changePasswordReconfirmValid(val);
        },
        callChangeNameValid: function (val) {
            changeNameValid(val);
        },
        callChangeBirthdayValid: function (val) {
            changeBirthdayValid(val);
        },
        callChangeGenderValid: function (val) {
            changeGenderValid(val);
        },
        callChangeEmailValid: function (val) {
            changeEmailValid(val);
        },
        callChangePhoneValid: function (val) {
            changePhoneValid(val);
        },
        callChangeFavoriteValid: function (val) {
            changeFavoriteValid(val);
        },
        callChangeAgreementValid: function (val) {
            changeAgreementValid(val);
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