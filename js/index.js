var emailInput = document.querySelector(`#floatingInput`);
var passwordInput = document.querySelector(`#floatingPassword`);
var loginInput = document.querySelector(`button`);
var logInMatch = document.querySelector(`#logInMatch`)
var currentName = ``;

var emailsList = [];


if (localStorage.getItem(`emails`) !== null) {
    emailsList = JSON.parse(localStorage.getItem(`emails`));    
}

function checkMail() {
    for (var i = 0; i < emailsList.length; i++) {
        if (emailInput.value == emailsList[i].mail && passwordInput.value == emailsList[i].pass) {
            currentName = emailsList[i].mail;
            localStorage.setItem(`currentName`, currentName)
            var logInBtn = document.querySelector(`#logInBtn`).getAttribute(`href`);
            window.location.href = logInBtn;
        } else {
            logInMatch.classList.replace(`d-none`, `d-block`)
        }

        
    }

}

loginInput.addEventListener(`click`, checkMail);

































