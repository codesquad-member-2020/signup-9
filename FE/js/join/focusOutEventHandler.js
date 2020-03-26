import validationCheck from "./validationCheck.js"
import {fetchRequest} from "../common/fetchRequest.js"

const userIdHandler = (event, userId) => {
    const result = validationCheck.checkUserId(userId);
    const idMsg = document.getElementById("idMsg");
    
    idMsg.innerHTML = result;
  
    (result === "사용 가능한 아이디입니다.") ? changeClass(idMsg, "ok_next_box") : changeClass(idMsg, "error_next_box");

    //document.getElementById("idMsg").innerHTML= result;

    // server 로 유효성 검사 요청
    // const data = {userId: "test"}

    // fetchRequest("http://37b0ab9f-726b-4389-9041-add27b33e400.mock.pstmn.io/phone-number-vaildation", data)
    // .then(response => response.json())
    // .then(suggestionData => {
    //     console.log(suggestionData);
    // });
}

const passwordHandler = (event, password) => {
    console.log("passwordHandler");
    const result = validationCheck.checkPassword(password);
}

const passwordReconfirmHandler = (event, passwords) => {
    console.log("passwordReconfirmHandler");
    const result = validationCheck.checkPasswordReconfirm(passwords.PASSWORD, passwords.PASSWORD_RECONFIRM);
}

const nameHandler = (event, name) => {
    console.log("nameHandler");
    const result = validationCheck.checkName(name);
}

const birthdayHandler = (event, birthDay) => {
    console.log("birthdayHandler");
    const result = validationCheck.checkBirthday(birthDay.YEAR, birthDay.MONTH, birthDay.DAY);
}

const genderHandler = (event, gender) => {
    console.log("genderHandler");
    const result = validationCheck.checkGender(gender);
}

const emailHandler = (event, email) => {
    console.log("emailHandler");
    const result = validationCheck.checkEmail(email);
}

const phoneHandler = (event, phone) => {
    console.log("phoneHandler");
    const result = validationCheck.checkPhone(phone);
}

const favoriteHandler = (event, favorites) => {
    console.log("favoriteHandler");
    const result = validationCheck.checkFavorite(favorites);
}

const focusoutEventHandler = Object.freeze({
    "id": userIdHandler,
    "pswd1": passwordHandler,
    "pswd2": passwordReconfirmHandler,
    "name": nameHandler,
    "yy": birthdayHandler,
    "mm": birthdayHandler,
    "dd": birthdayHandler,
    "gender": genderHandler,
    "email": emailHandler,
    "phoneNo": phoneHandler,
    "favorite": favoriteHandler,
});

function changeClass(element, newClassName) {
    const beforeClassName = element.className;
    element.classList.remove(beforeClassName);
    element.classList.add(newClassName);
  }

export {focusoutEventHandler};