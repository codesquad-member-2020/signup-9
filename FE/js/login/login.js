import {fetchRequest} from "../common/fetchRequest.js";
import URL from "../common/url.js";

window.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.btn_login');
    loginBtn.addEventListener('click', () => {
        login();
    })
});

function login() {
    const data = setLoginData();
    fetchRequest(URL.SERVICE_URL.LOGIN, data)
        .then(response => {
            if (response.status === 200) {
                alert("로그인 성공.");
            } else {
                alert("로그인 실패.");
            }
        });
}

function setLoginData() {
    const idValue = document.getElementById("login_id").value;
    const pswdValue = document.getElementById("login_pswd").value;
    const loginData = {"userId": idValue, "password": pswdValue}
    return loginData;
}